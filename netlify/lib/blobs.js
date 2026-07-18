// 공유 헬퍼 — Netlify Blobs 스토어 가져오기
// classic Lambda 함수(exports.handler = async (event))는 정적 import만으로는
// Blobs 컨텍스트가 자동 주입되지 않는다. 핸들러의 event를 connectLambda(event)로
// 연결해줘야 한다. 그래도 안 되는 환경이면 NETLIFY_SITE_ID + NETLIFY_BLOBS_TOKEN
// 수동 자격증명으로 폴백한다.
const { getStore, connectLambda } = require('@netlify/blobs');

function getBlobStore(name, event) {
  // 1) 수동 자격증명이 환경변수로 있으면 최우선 사용 (가장 확실).
  const siteID = process.env.NETLIFY_SITE_ID || process.env.SITE_ID;
  const token = process.env.NETLIFY_BLOBS_TOKEN || process.env.NETLIFY_API_TOKEN;
  if (siteID && token) return getStore({ name, siteID, token });
  // 2) classic Lambda: event로 컨텍스트를 연결한 뒤 이름만으로 스토어 획득.
  if (event && typeof connectLambda === 'function') {
    try { connectLambda(event); } catch (e) { /* 이미 연결됐거나 v2 런타임 */ }
  }
  return getStore(name);
}

module.exports = { getBlobStore };
