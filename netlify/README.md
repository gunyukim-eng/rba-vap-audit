# AI 프록시 (Claude API 키 숨기기)

브라우저 → `/api/chat` (Netlify Function) → Anthropic Messages API.
API 키는 **Netlify 환경변수에만** 존재하고, 코드·깃·브라우저에는 절대 들어가지 않습니다.

## 배포 1회 설정

1. 이 repo는 이미 Netlify에 연결되어 있음 (푸시 시 자동 배포).
2. **Netlify 대시보드** → 해당 사이트 → **Site settings → Environment variables → Add a variable**
   - Key: `ANTHROPIC_API_KEY`
   - Value: `sk-ant-...` (본인 키)
   - Scopes: Functions (기본값이면 그대로)
3. 저장 후 **Deploys → Trigger deploy → Deploy site** (환경변수 반영을 위해 재배포).

끝. 이제 앱에서 키 입력 없이 AI가 동작합니다.

## 확인
- 앱 → ✦ AI 도우미 → 질문 입력 → 답변이 오면 정상.
- 안 되면 Netlify → 사이트 → **Functions → chat** 로그 확인.
  - `ANTHROPIC_API_KEY is not set` → 2번 환경변수 미설정.
  - 401/invalid x-api-key → 키 값 오타/폐기됨.

## 로컬 테스트(직접 호출)
프록시 없이 로컬에서 바로 테스트하려면 앱 설정(⚙)에서:
- 엔드포인트 → `https://api.anthropic.com/v1/messages`
- API Key → 본인 키 입력
(단, 이 방식은 키가 브라우저에 노출되므로 배포용 아님)

## 비용
- 함수 호스팅: **무료** (월 125k 호출 한도, 감사 용도로는 초과 불가).
- Claude API 토큰: 쓴 만큼(프록시 유무와 무관). 기본 모델 Haiku.
