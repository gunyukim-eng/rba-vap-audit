// Netlify Function — 관리자 전용 전체 점검 기록 조회.
// ADMIN_KEY로 검증. 모든 공유코드(shareCode)의 index 메타를 한 번에 모아 반환한다.
// (일반 team.js는 공유코드를 알아야만 그 코드의 기록만 볼 수 있음.)
//   POST /api/admin-results   body:{ adminKey }
// 개별 세션 열기/내보내기는 기존 /api/team?action=get&shareCode=..&vendor=.. 재사용.
const { getBlobStore } = require('../lib/blobs');
const { isExpired } = require('../lib/retention');

exports.handler = async (event) => {
  if (event.httpMethod === 'OPTIONS') return { statusCode: 204, headers: cors(), body: '' };
  if (event.httpMethod !== 'POST') return json(405, { error: 'Method not allowed' });

  const adminKey = process.env.ADMIN_KEY;
  if (!adminKey) return json(500, { error: 'ADMIN_KEY is not set on the server (Netlify env var).' });

  let body = {};
  try { body = JSON.parse(event.body || '{}'); } catch { body = {}; }
  const provided = (event.headers && event.headers['x-admin-key']) || body.adminKey || '';
  if (provided !== adminKey) return json(401, { error: 'unauthorized' });

  try {
    const store = getBlobStore('team-sessions', event);
    const { blobs } = await store.list({ prefix: '' });
    const now = Date.now();
    const items = [];
    for (const b of (blobs || [])) {
      const i = b.key.indexOf('/index/');
      if (i === -1) continue;                       // index 메타만
      const m = await store.get(b.key, { type: 'json' }).catch(() => null);
      if (!m || isExpired(m, now)) continue;        // 만료분은 제외
      const shareCode = b.key.slice(0, i);
      items.push(Object.assign({ shareCode }, m));
    }
    items.sort((a, b) => String(b.updated || '').localeCompare(String(a.updated || '')));
    return json(200, { count: items.length, sessions: items });
  } catch (e) {
    return json(500, { error: String(e && e.message ? e.message : e) });
  }
};

function cors() {
  return { 'access-control-allow-origin': '*', 'access-control-allow-methods': 'POST, OPTIONS', 'access-control-allow-headers': 'content-type, x-admin-key' };
}
function json(status, obj) {
  return { statusCode: status, headers: { ...cors(), 'content-type': 'application/json' }, body: JSON.stringify(obj) };
}
