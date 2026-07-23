// Netlify Scheduled Function — 팀 공유 기록 보존정책 집행.
// 매일 실행되어 첫 등록(created)로부터 2년 지난 점검 기록을 전체 삭제한다.
// (team.js의 목록 조회 시 즉시 정리는 '열람되는 코드'만 커버하므로,
//  아무도 열지 않는 코드까지 지우기 위해 여기서 전체 스윕한다.)
// 스케줄은 netlify.toml [functions."team-cleanup"] schedule 로 지정.
const { getBlobStore } = require('../lib/blobs');
const { pruneAllExpired } = require('../lib/retention');

exports.handler = async (event) => {
  try {
    const store = getBlobStore('team-sessions', event);
    const removed = await pruneAllExpired(store);
    console.log('[team-cleanup] removed expired records:', removed);
    return { statusCode: 200, body: JSON.stringify({ ok: true, removed }) };
  } catch (e) {
    console.error('[team-cleanup] error:', e && e.message ? e.message : e);
    return { statusCode: 500, body: JSON.stringify({ error: String(e && e.message ? e.message : e) }) };
  }
};
