// Netlify Function — 앱 접근 비밀번호 (내부 전용 잠금)
//   POST /api/auth  {action:'check', password}                → {ok:true|false}
//   POST /api/auth  {action:'set', adminKey, newPassword}     → {ok:true}  (관리자만)
// 현재 비밀번호: Blobs('config')의 app-password → 없으면 환경변수 APP_PASSWORD.
// 관리자 키: 환경변수 ADMIN_KEY.
const { getBlobStore } = require('../lib/blobs');

exports.handler = async (event) => {
  if (event.httpMethod === 'OPTIONS') return { statusCode: 204, headers: cors(), body: '' };
  if (event.httpMethod !== 'POST') return json(405, { error: 'method not allowed' });
  let body = {};
  try { body = JSON.parse(event.body || '{}'); } catch { body = {}; }

  try {
    const store = getBlobStore('config');

    if (body.action === 'check') {
      const cur = await currentPassword(store);
      if (!cur) return json(500, { error: 'APP_PASSWORD is not set on the server.' });
      const ok = String(body.password || '') === cur;
      return json(200, { ok });
    }

    if (body.action === 'set') {
      const adminKey = process.env.ADMIN_KEY;
      if (!adminKey) return json(500, { error: 'ADMIN_KEY is not set on the server.' });
      if (String(body.adminKey || '') !== adminKey) return json(401, { ok: false, error: 'wrong admin key' });
      const np = String(body.newPassword || '').trim();
      if (!np) return json(400, { error: 'empty password' });
      await store.setJSON('app-password', { pw: np, updated: new Date().toISOString() });
      return json(200, { ok: true });
    }

    return json(400, { error: 'bad action' });
  } catch (e) {
    return json(500, { error: String(e && e.message ? e.message : e) });
  }
};

async function currentPassword(store) {
  try {
    const saved = await store.get('app-password', { type: 'json' });
    if (saved && saved.pw) return String(saved.pw);
  } catch {}
  return process.env.APP_PASSWORD ? String(process.env.APP_PASSWORD) : null;
}

function cors() {
  return { 'access-control-allow-origin': '*', 'access-control-allow-methods': 'POST, OPTIONS', 'access-control-allow-headers': 'content-type' };
}
function json(status, obj) {
  return { statusCode: status, headers: { ...cors(), 'content-type': 'application/json' }, body: JSON.stringify(obj) };
}
