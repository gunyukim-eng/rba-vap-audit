// Netlify Function — 로그 내보내기 (few-shot용 JSONL)
// 사용: /api/logs-export?key=<LOG_EXPORT_KEY>
// LOG_EXPORT_KEY 환경변수를 설정해야 접근 가능(미설정 시 차단).
exports.handler = async (event) => {
  const secret = process.env.LOG_EXPORT_KEY;
  const given = (event.queryStringParameters || {}).key;
  if (!secret || given !== secret) {
    return { statusCode: 401, headers: { 'content-type': 'text/plain' }, body: 'unauthorized (set LOG_EXPORT_KEY and pass ?key=)' };
  }
  try {
    const { getStore } = await import('@netlify/blobs');
    const store = getStore('ai-logs');
    const { blobs } = await store.list();
    const lines = [];
    for (const b of blobs) {
      const rec = await store.get(b.key, { type: 'json' });
      if (rec) lines.push(JSON.stringify(rec));
    }
    return {
      statusCode: 200,
      headers: {
        'content-type': 'application/x-ndjson; charset=utf-8',
        'content-disposition': 'attachment; filename="ai-logs.jsonl"',
      },
      body: lines.join('\n'),
    };
  } catch (e) {
    return { statusCode: 500, headers: { 'content-type': 'text/plain' }, body: 'export error: ' + (e && e.message ? e.message : String(e)) };
  }
};
