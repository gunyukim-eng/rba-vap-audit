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

## 질문 로깅 (few-shot 데이터)
모든 AI 질문/답변이 **Netlify Blobs**(`ai-logs` 스토어)에 텍스트로 저장됩니다.
- **원본 이미지(base64)는 저장 안 함** — 장수(`had_images`)만 기록.
- 저장 항목: 시각, 종류(chat/qa-judgment/judge), 모델, system, messages(이미지 제외), 답변, 토큰 usage.
- 무료 (Blobs 무료 한도 안, 텍스트라 용량 미미).

### 내보내기 (JSONL 다운로드)
1. Netlify → 환경변수에 **`LOG_EXPORT_KEY`** 추가 (아무 비밀 문자열).
2. 브라우저에서 `https://<사이트>/api/logs-export?key=<LOG_EXPORT_KEY>` 열기 → `ai-logs.jsonl` 다운로드.
   - 키 없거나 틀리면 401 (로그가 공개되지 않도록).

> ⚠️ PII: 인터뷰·서류 내용에 개인정보가 섞일 수 있음. few-shot 재사용 전 이름·급여·주민번호 등 **익명화** 필요.

## 비용
- 함수 호스팅 + Blobs 로깅: **무료** (월 125k 호출 한도, 감사 용도로는 초과 불가).
- Claude API 토큰: 쓴 만큼(프록시 유무와 무관). 기본 모델 Haiku.
- `package.json` 추가로 배포 시 `npm install`(@netlify/blobs)이 잠깐 돌아 빌드 시간이 수십 초 늘 수 있음.
