// Netlify Function — 팀 공유 점검 기록 (Netlify Blobs)
// 접근 방식: '공유 코드(shareCode)'가 곧 네임스페이스이자 접근 키.
//   코드를 아는 사람만 그 코드의 기록을 보고/저장할 수 있다. (서버 SYNC_KEY 불필요)
//   저장 키 구조: {SHARECODE}/data/{vendorCode} , {SHARECODE}/index/{vendorCode}
//   POST /api/team?action=save    body:{shareCode, session, meta}
//   GET  /api/team?action=list&shareCode=...
//   GET  /api/team?action=get&shareCode=...&vendor=...
//   POST /api/team?action=delete  body:{shareCode, vendor}
const { getBlobStore } = require('../lib/blobs');

// 공유 코드/협력사 코드 정규화 — Blobs 키 경로에 안전한 문자만 허용
const safeCode = c => String(c || '').trim().toUpperCase().replace(/[^A-Z0-9_-]/g, '');

exports.handler = async (event) => {
  if (event.httpMethod === 'OPTIONS') return { statusCode: 204, headers: cors(), body: '' };
  const q = event.queryStringParameters || {};
  let body = {};
  if (event.httpMethod === 'POST') { try { body = JSON.parse(event.body || '{}'); } catch { body = {}; } }

  const share = safeCode(q.shareCode || body.shareCode);
  if (!share) return json(400, { error: 'missing shareCode' });

  const action = q.action || body.action;
  const pfx = share + '/';
  try {
    const store = getBlobStore('team-sessions', event);

    if (event.httpMethod === 'POST' && action === 'save') {
      const s = body.session;
      if (!s || !s.vendorCode) return json(400, { error: 'missing session/vendorCode' });
      const code = safeCode(s.vendorCode);
      if (!code) return json(400, { error: 'invalid vendorCode' });
      const meta = Object.assign({}, body.meta, { code, updated: (body.meta && body.meta.updated) || new Date().toISOString() });
      await store.setJSON(pfx + 'data/' + code, s);
      await store.setJSON(pfx + 'index/' + code, meta);
      return json(200, { ok: true });
    }
    if (action === 'list') {
      const { blobs } = await store.list({ prefix: pfx + 'index/' });
      const items = [];
      for (const b of blobs) { const m = await store.get(b.key, { type: 'json' }); if (m) items.push(m); }
      items.sort((a, b) => String(b.updated || '').localeCompare(String(a.updated || '')));
      return json(200, { sessions: items });
    }
    if (action === 'get') {
      const code = safeCode(q.vendor || body.vendor);
      if (!code) return json(400, { error: 'missing vendor' });
      const s = await store.get(pfx + 'data/' + code, { type: 'json' });
      if (!s) return json(404, { error: 'not found' });
      return json(200, { session: s });
    }
    if (event.httpMethod === 'POST' && action === 'delete') {
      const code = safeCode(body.vendor);
      if (code) { await store.delete(pfx + 'data/' + code); await store.delete(pfx + 'index/' + code); }
      return json(200, { ok: true });
    }
    return json(400, { error: 'bad action' });
  } catch (e) {
    return json(500, { error: String(e && e.message ? e.message : e) });
  }
};

function cors() {
  return { 'access-control-allow-origin': '*', 'access-control-allow-methods': 'GET, POST, OPTIONS', 'access-control-allow-headers': 'content-type' };
}
function json(status, obj) {
  return { statusCode: status, headers: { ...cors(), 'content-type': 'application/json' }, body: JSON.stringify(obj) };
}
