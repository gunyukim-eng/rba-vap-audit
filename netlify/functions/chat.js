// Netlify Function — Claude API 프록시
// 브라우저가 이 함수를 호출하면, 함수가 서버 환경변수(ANTHROPIC_API_KEY)로
// 인증해 Anthropic Messages API로 그대로 전달한다.
// → API 키는 서버(Netlify)에만 존재하고, 코드/깃/브라우저에는 절대 노출되지 않는다.
exports.handler = async (event) => {
  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 204, headers: cors(), body: '' };
  }
  if (event.httpMethod !== 'POST') {
    return json(405, { error: { message: 'Method not allowed' } });
  }
  const key = process.env.ANTHROPIC_API_KEY;
  if (!key) {
    return json(500, { error: { message: 'ANTHROPIC_API_KEY is not set. Add it in Netlify → Site settings → Environment variables.' } });
  }
  try {
    const upstream = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'x-api-key': key,
        'anthropic-version': '2023-06-01',
      },
      body: event.body, // 프론트가 만든 Messages API 페이로드를 그대로 전달
    });
    const text = await upstream.text();
    return {
      statusCode: upstream.status,
      headers: { ...cors(), 'content-type': 'application/json' },
      body: text,
    };
  } catch (e) {
    return json(502, { error: { message: 'Proxy error: ' + (e && e.message ? e.message : String(e)) } });
  }
};

function cors() {
  return {
    'access-control-allow-origin': '*',
    'access-control-allow-methods': 'POST, OPTIONS',
    'access-control-allow-headers': 'content-type',
  };
}
function json(status, obj) {
  return { statusCode: status, headers: { ...cors(), 'content-type': 'application/json' }, body: JSON.stringify(obj) };
}
