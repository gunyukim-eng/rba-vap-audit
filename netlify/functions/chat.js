// Netlify Function — Claude API 프록시 (+ few-shot용 로깅)
// 브라우저 → 이 함수 → Anthropic Messages API.
// API 키는 서버 환경변수(ANTHROPIC_API_KEY)에만 존재.
// 모든 질문/답변은 Netlify Blobs('ai-logs')에 텍스트로 기록(이미지 base64 제외).
const { getBlobStore } = require('../lib/blobs');

exports.handler = async (event) => {
  if (event.httpMethod === 'OPTIONS') return { statusCode: 204, headers: cors(), body: '' };
  if (event.httpMethod !== 'POST') return json(405, { error: { message: 'Method not allowed' } });

  const key = process.env.ANTHROPIC_API_KEY;
  if (!key) return json(500, { error: { message: 'ANTHROPIC_API_KEY is not set. Add it in Netlify → Site settings → Environment variables.' } });

  // ── 레이트리밋 (예산 어뷰징 방어) ──
  const rl = await checkRateLimit(event).catch(() => ({ ok: true })); // Blobs 장애 시 fail-open
  if (!rl.ok) {
    return { statusCode: 429, headers: { ...cors(), 'content-type': 'application/json', 'retry-after': String(rl.retryAfter || 60) },
      body: JSON.stringify({ error: { message: rl.message || 'Rate limit exceeded. Please slow down.' } }) };
  }

  let upstreamText = '', status = 502;
  try {
    const upstream = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: { 'content-type': 'application/json', 'x-api-key': key, 'anthropic-version': '2023-06-01' },
      body: event.body,
    });
    status = upstream.status;
    upstreamText = await upstream.text();
  } catch (e) {
    return json(502, { error: { message: 'Proxy error: ' + (e && e.message ? e.message : String(e)) } });
  }

  // ── 로깅 (best-effort, 실패해도 응답에는 영향 없음) ──
  logInteraction(event.body, upstreamText, status, event).catch(() => {});

  return { statusCode: status, headers: { ...cors(), 'content-type': 'application/json' }, body: upstreamText };
};

async function logInteraction(reqBody, resText, status, event) {
  try {
    const req = safeParse(reqBody) || {};
    const res = safeParse(resText) || {};

    // 요청 메시지에서 이미지 base64 제거(텍스트만), 이미지 장수만 카운트
    let images = 0;
    const messages = (req.messages || []).map((m) => {
      const content = Array.isArray(m.content) ? m.content : [{ type: 'text', text: m.content }];
      return {
        role: m.role,
        content: content.map((b) => {
          if (b && b.type === 'image') { images++; return { type: 'image', omitted: true }; }
          return b;
        }),
      };
    });

    const answer = (res.content || []).filter((b) => b.type === 'text').map((b) => b.text).join('\n');
    const sys = req.system || '';
    const kind = req.output_config ? (sys.includes('판정요소 추출') ? 'qa-judgment' : 'judge') : 'chat';

    const record = {
      ts: new Date().toISOString(),
      kind,
      status,
      model: req.model || null,
      had_images: images,
      system: typeof sys === 'string' ? sys.slice(0, 6000) : sys,
      messages,
      answer,
      usage: res.usage || null,
      stop_reason: res.stop_reason || null,
    };

    const store = getBlobStore('ai-logs', event);
    const dkey = record.ts.slice(0, 10);
    const rand = Math.random().toString(36).slice(2, 8);
    await store.setJSON(`${dkey}/${Date.now()}-${rand}`, record);
  } catch (e) { /* 로깅 실패 무시 */ }
}

// ── 레이트리밋 ────────────────────────────────────────────────
// IP별 카운터를 Blobs에 단일 JSON으로 저장하고, 시간창(분/일)이 바뀌면 리셋.
// 원자적 증가가 아니라 근사값이지만 어뷰징 방어엔 충분(동시요청 시 몇 회 오차).
const RL_LIMITS = { ipMin: 20, ipDay: 200, globalDay: 500 };

function clientIp(event) {
  const h = event.headers || {};
  return h['x-nf-client-connection-ip'] ||
    (h['x-forwarded-for'] || '').split(',')[0].trim() ||
    'unknown';
}

async function checkRateLimit(event) {
  const store = getBlobStore('rate-limits', event);
  const now = new Date();
  const minStamp = now.toISOString().slice(0, 16); // YYYY-MM-DDTHH:MM
  const dayStamp = now.toISOString().slice(0, 10);  // YYYY-MM-DD
  const ip = clientIp(event);

  // 1) 글로벌 하루 상한 (분산 공격 대비 지갑 방어선)
  const gKey = 'global';
  const g = (await store.get(gKey, { type: 'json' }).catch(() => null)) || {};
  const gDay = g.dayStamp === dayStamp ? (g.dayCount || 0) : 0;
  if (gDay >= RL_LIMITS.globalDay) {
    return { ok: false, retryAfter: 3600, message: `Daily AI usage limit reached for this service (${RL_LIMITS.globalDay}/day). Try again tomorrow.` };
  }

  // 2) IP별 분·일 상한
  const ipKey = 'ip/' + ip.replace(/[^a-zA-Z0-9._-]/g, '_'); // IPv6 콜론 등 키 안전화
  const r = (await store.get(ipKey, { type: 'json' }).catch(() => null)) || {};
  const minCount = r.minStamp === minStamp ? (r.minCount || 0) : 0;
  const dayCount = r.dayStamp === dayStamp ? (r.dayCount || 0) : 0;
  if (minCount >= RL_LIMITS.ipMin) {
    return { ok: false, retryAfter: 60, message: `Too many requests — max ${RL_LIMITS.ipMin} per minute. Please wait a moment.` };
  }
  if (dayCount >= RL_LIMITS.ipDay) {
    return { ok: false, retryAfter: 3600, message: `Daily request limit reached (${RL_LIMITS.ipDay}/day). Try again later.` };
  }

  // 통과 → 카운터 증가(best-effort)
  await store.setJSON(ipKey, { minStamp, minCount: minCount + 1, dayStamp, dayCount: dayCount + 1 }).catch(() => {});
  await store.setJSON(gKey, { dayStamp, dayCount: gDay + 1 }).catch(() => {});
  return { ok: true };
}

function safeParse(s) { try { return JSON.parse(s); } catch { return null; } }
function cors() {
  return { 'access-control-allow-origin': '*', 'access-control-allow-methods': 'POST, OPTIONS', 'access-control-allow-headers': 'content-type' };
}
function json(status, obj) {
  return { statusCode: status, headers: { ...cors(), 'content-type': 'application/json' }, body: JSON.stringify(obj) };
}
