// Netlify Function — 관리자용 Blobs 조회 (읽기 전용)
// ADMIN_KEY(환경변수)로 보호. 모든 스토어의 키 목록과 개별 값을 확인.
// 키는 쿼리스트링이 아니라 x-admin-key 헤더로 전달한다(쿼리스트링은 access 로그·
// 브라우저 히스토리·Referer에 평문으로 남아 admin-results.js와 동일한 방식으로 통일).
//   GET /api/admin-blobs                              -H "x-admin-key: ADMIN_KEY" → 전체 스토어 요약(키 목록)
//   GET /api/admin-blobs?store=team-sessions          -H "x-admin-key: ADMIN_KEY" → 해당 스토어 키 목록
//   GET /api/admin-blobs?store=team-sessions&prefix=index/          -H "x-admin-key: ADMIN_KEY"
//   GET /api/admin-blobs?store=team-sessions&blob=data/BMSS         -H "x-admin-key: ADMIN_KEY" → 값 조회
const { getBlobStore } = require('../lib/blobs');

const STORES = ['team-sessions', 'config', 'ai-logs'];

exports.handler = async (event) => {
  if (event.httpMethod === 'OPTIONS') return { statusCode: 204, headers: cors(), body: '' };
  const q = event.queryStringParameters || {};

  const adminKey = process.env.ADMIN_KEY;
  if (!adminKey) return json(500, { error: 'ADMIN_KEY is not set on the server (Netlify env var).' });
  const provided = (event.headers && (event.headers['x-admin-key'] || event.headers['X-Admin-Key'])) || '';
  if (provided !== adminKey) return json(401, { error: 'unauthorized' });

  try {
    // 개별 blob 값 조회
    if (q.store && q.blob) {
      const store = getBlobStore(q.store, event);
      const val = await store.get(q.blob, { type: 'json' }).catch(() => null);
      if (val !== null && val !== undefined) return json(200, { store: q.store, blob: q.blob, type: 'json', value: val });
      const txt = await store.get(q.blob, { type: 'text' }).catch(() => null);
      if (txt === null || txt === undefined) return json(404, { error: 'not found', store: q.store, blob: q.blob });
      return json(200, { store: q.store, blob: q.blob, type: 'text', value: txt });
    }

    // 특정 스토어 키 목록
    if (q.store) {
      const keys = await listKeys(q.store, q.prefix, event);
      return json(200, { store: q.store, prefix: q.prefix || '', count: keys.length, keys });
    }

    // 전체 스토어 요약
    const out = {};
    for (const name of STORES) {
      try { out[name] = await listKeys(name, '', event); }
      catch (e) { out[name] = { error: String(e && e.message ? e.message : e) }; }
    }
    return json(200, { stores: STORES, blobs: out });
  } catch (e) {
    return json(500, { error: String(e && e.message ? e.message : e) });
  }
};

async function listKeys(name, prefix, event) {
  const store = getBlobStore(name, event);
  const opts = prefix ? { prefix } : {};
  const { blobs } = await store.list(opts);
  return (blobs || []).map(b => b.key);
}

function cors() {
  return { 'access-control-allow-origin': '*', 'access-control-allow-methods': 'GET, OPTIONS', 'access-control-allow-headers': 'content-type, x-admin-key' };
}
function json(status, obj) {
  return { statusCode: status, headers: { ...cors(), 'content-type': 'application/json' }, body: JSON.stringify(obj, null, 2) };
}
