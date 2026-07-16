// Netlify Function — 팀 공유 점검 기록 (Netlify Blobs)
// 저장/목록/불러오기. SYNC_KEY(환경변수)로 접근 보호(팀 공유 비밀키).
//   POST /api/team?action=save   body:{key,session,meta}
//   GET  /api/team?action=list&key=...
//   GET  /api/team?action=get&key=...&code=...
//   POST /api/team?action=delete body:{key,code}
const { getBlobStore } = require('../lib/blobs');

exports.handler = async (event) => {
  if (event.httpMethod === 'OPTIONS') return { statusCode: 204, headers: cors(), body: '' };
  const q = event.queryStringParameters || {};
  let body = {};
  if (event.httpMethod === 'POST') { try { body = JSON.parse(event.body || '{}'); } catch { body = {}; } }

  const secret = process.env.SYNC_KEY;
  if (!secret) return json(500, { error: 'SYNC_KEY is not set on the server (Netlify env var).' });
  const key = q.key || body.key;
  if (key !== secret) return json(401, { error: 'unauthorized' });

  const action = q.action || body.action;
  try {
    const store = getBlobStore('team-sessions');

    if (event.httpMethod === 'POST' && action === 'save') {
      const s = body.session;
      if (!s || !s.vendorCode) return json(400, { error: 'missing session/vendorCode' });
      const code = String(s.vendorCode);
      const meta = Object.assign({}, body.meta, { code, updated: (body.meta && body.meta.updated) || new Date().toISOString() });
      await store.setJSON('data/' + code, s);
      await store.setJSON('index/' + code, meta);
      return json(200, { ok: true });
    }
    if (action === 'list') {
      const { blobs } = await store.list({ prefix: 'index/' });
      const items = [];
      for (const b of blobs) { const m = await store.get(b.key, { type: 'json' }); if (m) items.push(m); }
      items.sort((a, b) => String(b.updated || '').localeCompare(String(a.updated || '')));
      return json(200, { sessions: items });
    }
    if (action === 'get') {
      const code = q.code || body.code;
      if (!code) return json(400, { error: 'missing code' });
      const s = await store.get('data/' + code, { type: 'json' });
      if (!s) return json(404, { error: 'not found' });
      return json(200, { session: s });
    }
    if (event.httpMethod === 'POST' && action === 'delete') {
      const code = body.code;
      if (code) { await store.delete('data/' + code); await store.delete('index/' + code); }
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
