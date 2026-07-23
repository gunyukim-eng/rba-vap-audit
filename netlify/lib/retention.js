// 팀 공유 점검 기록 보존정책 — 첫 등록일(created)로부터 2년 경과 시 삭제.
// team.js(목록 조회 시 즉시 정리)와 team-cleanup.js(매일 전체 스윕)에서 공용 사용.
const RETENTION_MS = 2 * 365 * 24 * 60 * 60 * 1000; // 약 2년(730일)

// 만료 판정 — created(첫 등록) 우선, 없으면 updated(구 기록 폴백).
// 날짜 정보가 아예 없으면 보존(false) — 안전 우선.
function isExpired(meta, now = Date.now()) {
  const ref = meta && (meta.created || meta.updated);
  if (!ref) return false;
  const t = new Date(ref).getTime();
  return !isNaN(t) && (now - t) > RETENTION_MS;
}

// 전체 스토어에서 만료된 data/index 쌍을 삭제. 삭제 건수 반환.
async function pruneAllExpired(store) {
  const now = Date.now();
  const { blobs } = await store.list({ prefix: '' });
  let removed = 0;
  for (const b of (blobs || [])) {
    const i = b.key.indexOf('/index/');
    if (i === -1) continue;                        // index 블롭만 검사
    const meta = await store.get(b.key, { type: 'json' }).catch(() => null);
    if (!meta || !isExpired(meta, now)) continue;
    const share = b.key.slice(0, i);
    const code = b.key.slice(i + '/index/'.length);
    await store.delete(share + '/data/' + code).catch(() => {});
    await store.delete(b.key).catch(() => {});     // index
    removed++;
  }
  return removed;
}

module.exports = { RETENTION_MS, isExpired, pruneAllExpired };
