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
  logInteraction(event.body, upstreamText, status).catch(() => {});

  return { statusCode: status, headers: { ...cors(), 'content-type': 'application/json' }, body: upstreamText };
};

async function logInteraction(reqBody, resText, status) {
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

function safeParse(s) { try { return JSON.parse(s); } catch { return null; } }
function cors() {
  return { 'access-control-allow-origin': '*', 'access-control-allow-methods': 'POST, OPTIONS', 'access-control-allow-headers': 'content-type' };
}
function json(status, obj) {
  return { statusCode: status, headers: { ...cors(), 'content-type': 'application/json' }, body: JSON.stringify(obj) };
}
