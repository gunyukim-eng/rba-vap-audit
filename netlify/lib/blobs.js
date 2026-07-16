// 공유 헬퍼 — Netlify Blobs 스토어 가져오기
// 정상 배포라면 getStore(name)만으로 자동 인증(컨텍스트 자동 주입)된다.
// 혹시 자동 주입이 안 되는 환경이면(NETLIFY_SITE_ID + NETLIFY_BLOBS_TOKEN이
// 설정된 경우) 수동 인증으로 폴백한다.
const { getStore } = require('@netlify/blobs');

function getBlobStore(name) {
  // 수동 자격증명이 환경변수로 주어졌으면 그걸 우선 사용한다.
  // (getStore(name) 은 생성 시점엔 에러를 던지지 않고 실제 read/write 때
  //  던지므로 try/catch 폴백은 동작하지 않는다 → 사전에 분기한다.)
  const siteID = process.env.NETLIFY_SITE_ID || process.env.SITE_ID;
  const token = process.env.NETLIFY_BLOBS_TOKEN || process.env.NETLIFY_API_TOKEN;
  if (siteID && token) return getStore({ name, siteID, token });
  // 정상 배포라면 컨텍스트 자동 주입으로 이름만으로 동작한다.
  return getStore(name);
}

module.exports = { getBlobStore };
