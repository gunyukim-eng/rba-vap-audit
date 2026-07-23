# AI 자동판정 & 발견사항 정리 — 설계/구현 문서 (v1.0, 구현 완료 반영)

> 상태: **구현 완료**. 문서 사진을 올리면 Claude가 각 점검 항목의 문항 응답과 등급을
> **자동 제안(초안)**하고, 감사자가 검토·확정한다. 추가로 문항 답변·판정·메모를 종합해
> **Findings/Reference 형식의 발견사항을 자동 정리**한다.
> AI는 항상 **초안·근거만** 제공하며, 최종 판정은 감사자가 확정한다.

---

## 1. 범위 (무엇이 구현되었나)

| 기능 | 대상 화면 | 설명 |
|---|---|---|
| **AI 자동판정 (신규협력사)** | 신규협력사 항목 (`screenNsupItem`) | 문서 사진 → 문항(Q1..Qn) 자동응답 + 등급 제안 → 적용 시 `S.nsupAns` 채움 |
| **AI 자동판정 (중점관리/메인)** | 점검 항목 (`screenItem`) | 문서 사진 → 3단계(경영진·기록·근로자) yes/no 자동 채움. 면담 전용 문항은 `unknown`으로 남김 |
| **AI 발견사항 정리 (개별)** | 항목 화면 | 문항답변·AI판정·현지법·메모 종합 → **Findings / Reference** 한 덩어리 생성 |
| **AI 발견사항 전체 요약** | 홈(점검 항목 탭) | 점검한 항목들을 **항목별로 각각** 순차 정리 |
| **AI 도우미 (Q&A/문서분석)** | ✦ 플로팅 버튼 (어디서나) | 자유 질문 + 문서 사진 OCR 분석 |

- **하지 않는 것**: AI가 최종 판정을 확정하지 않음. 오디오/STT(인터뷰 녹음)는 아직 미구현(문서 사진 + 텍스트만).

---

## 2. 아키텍처 (실제 구성)

```
[모바일/브라우저: index.html + app.js]
   │  질문/문서 사진(base64) 전송
   ▼
[Netlify Function  /api/chat  (netlify/functions/chat.js)]   ← ANTHROPIC_API_KEY 는 서버 환경변수에만
   │  요청 본문을 그대로 Anthropic Messages API로 프록시
   │  (부가: 요청/응답을 Netlify Blobs 'ai-logs'에 텍스트 기록 — few-shot용)
   ▼
[Claude Messages API]  (기본 모델 claude-haiku-4-5)
   │  구조화 출력(JSON 스키마)로 {등급, 문항응답[], 근거} 반환
   ▼
[프론트] 제안 카드 렌더 → 감사자 검토/적용 → 세션(S)·localStorage 저장
```

- **백엔드**: Netlify Functions. 프론트는 정적(`index.html`)이며 키를 두지 않음(프록시 모드).
  설정(⚙)에서 엔드포인트를 `api.anthropic.com`으로 바꾸면 직접 호출(로컬 테스트용)도 가능.
- **기본 모델**: `claude-haiku-4-5` (저비용). `aiCfg()`의 설정에서 변경 가능.
  판정 정확도를 더 높이려면 `claude-opus-4-8` 등으로 조정 가능.

---

## 3. 시스템 프롬프트 (`AI_SYSTEM`)

```
당신은 삼성전자 협력사 심사를 돕는 AI 보조자입니다.
- 삼성전자 협력사 대상 노동·인권·안전보건(EHS) 심사 기준에 근거해 답변합니다.
- 문서 사진이 첨부되면, 먼저 OCR로 핵심 사실을 정리한 뒤 점검 기준과 대조해 분석합니다.
- 근거가 부족하면 추측하지 말고 "제공된 정보로는 확인 불가"라고 명시합니다.
- 답변·근거에 'RBA VAP', 'RBA' 명칭은 쓰지 않고 '심사기준'으로 표현합니다.
- 최종 판정은 감사자가 확정합니다. 당신은 초안·근거·참고의견만 제시합니다.
- 사용자가 질문한 언어와 동일한 언어로 답변합니다(영어→영어, 중국어→중국어, 한국어→한국어).
- 간결하고 실무적으로 답변합니다.
```

이 프롬프트는 자동판정·발견사항 정리·챗에서 공용으로 사용된다.

---

## 4. 자동판정 상세

### 4-1. 신규협력사 (`aiJudgeOpen` → `aiJudgeRun`)
- 입력: 문서 사진 + 항목 메타(`NSUP_ITEMS`) + 판정기준 전문(`crit`) + 문항(`NSUP_Q`).
- 출력 스키마 `AI_JUDGE_SCHEMA`:
```jsonc
{
  "doc_summary": "문서에서 읽어낸 핵심 사실(OCR 정리)",
  "suggested_grade": "conformance|minor|major|priority|na|insufficient_evidence",
  "confidence": 0.0,
  "answers": [ { "q_id": "Q1", "answer": "yes|no|na|unknown", "evidence": "근거" } ],
  "rationale": "적용한 판정기준 조항 설명"
}
```
- 적용(`aiJudgeApply`): `answers`의 yes/no/na를 `S.nsupAns[id][q_id]`에 채움 → 기존 `nsupGrade` 로직이 등급 재계산.

### 4-2. 중점관리/메인 항목 (`aiItemJudgeOpen` → `aiItemJudgeRun`)
- 입력: 문서 사진 + 항목(`ITEMS`) + 3단계 문항(`Q[id+'_mgmt'|'_doc'|'_worker']`).
- 같은 `AI_JUDGE_SCHEMA` 사용. `q_id`의 prefix(M/D/W)로 단계 라우팅.
- 적용(`aiItemJudgeApply`): `S.ans[id][step][qid]`에 yes/no/na 채움.
  - **면담·현장확인이 필요해 문서로 알 수 없는 문항은 `unknown`** → 적용에서 건너뜀(감사자가 답).
  - N/A 미지원 문항에 na가 오면 건너뜀, 존재하지 않는 문항 무시.

### 모델·파라미터
- `aiPost({model, max_tokens:3000, system:AI_SYSTEM, messages, output_config:{format:{type:'json_schema', schema:AI_JUDGE_SCHEMA}}})`.
- 구조화 출력은 citations 기능과 동시 사용 시 400 → 인용은 스키마 안 `evidence`로 받음.

---

## 5. 발견사항 정리 (`aiSummarizeItem` / `aiSummarizeAll`)

- 입력(텍스트만, 저비용): 집계된 위반사항(`getFindings`+수수료/근로시간/연속일 매트릭스+AI판정+현지법) + AI 판정 근거 + 감사자 메모 + 현재 등급.
- 출력 스키마 `AI_SUMMARY_SCHEMA`:
```jsonc
{ "findings": "위반·발견사항 실무 문장(수치 포함, 없으면 '특이사항 없음')",
  "reference": "관련 법령 + 심사기준(항목코드·심각도)" }
```
- **출력 언어는 앱 언어(`S.lang`)** 를 따른다.
- **전체 요약**: 점검한(답변 있는) 항목만 순차 처리, 이미 요약된 것은 건너뜀. 항목당 ≈$0.0035(Haiku, 텍스트만).

---

## 6. 감사 무결성 · 사람 확정 (Human-in-the-loop)

- 모든 AI 결과는 **"제안" 상태**로 카드에 표시되고, 감사자가 **[제안 적용]** 을 눌러야 문항/점수에 반영된다.
- 적용 후에도 문항을 직접 수정하면 등급이 재계산된다.
- 발견사항 정리·요약은 **"AI 초안 — 감사자가 검토·확정"** 문구를 항상 병기.

---

## 7. 보안 · 프라이버시

- **API 키**: `ANTHROPIC_API_KEY` 는 Netlify 환경변수에만. 프론트/깃에 없음.
- **팀 공유/앱 접근**: 앱 접근 비밀번호(`APP_PASSWORD`, `config` blob), 팀 공유는 공유 코드 기반(코드가 접근 키).
- **로깅**: `ai-logs` blob에 질문/답변 텍스트 기록(이미지 base64 제외). 민감 감사면 보존정책 검토.
- **PII**: 근로자 인터뷰·개인서류는 민감정보. 필요 시 업로드 전 마스킹·보존기간·동의 절차 고려.

---

## 8. 향후(미구현 로드맵)

- 오디오 업로드 + **자동 STT**(인터뷰 녹음 → 전사 → 문항 매핑). 현재는 문서 사진 + 텍스트만.
- 다중 이미지·PDF는 Files API(beta)로 확장.
- confidence 임계값 기반 자동확정 정책(현재는 항상 사람 확정).
- 발견사항 요약 → Excel Findings/CAP 초안 자동 연계.

---

## 9. 관련 코드 위치 (app.js / netlify)

| 요소 | 위치 |
|---|---|
| 시스템 프롬프트 | `AI_SYSTEM` |
| 자동판정 스키마 | `AI_JUDGE_SCHEMA` |
| 신규협력사 판정 | `aiJudgeOpen` / `aiJudgeRun` / `aiJudgeApply` |
| 메인 항목 판정 | `aiItemJudgeOpen` / `aiItemJudgeRun` / `aiItemJudgeApply` (`AI_STEP_OF`) |
| 발견사항 정리 | `aiSummarizeItem` / `aiSummarizeAll` / `AI_SUMMARY_SCHEMA` |
| AI 도우미(챗) | `aiOpen` / `aiSend` / `aiFmt`(마크다운·표 렌더) |
| API 호출 | `aiPost` / `aiCfg`(기본 `/api/chat`, `claude-haiku-4-5`) |
| 백엔드 프록시 | `netlify/functions/chat.js` (+ `ai-logs` 로깅) |

*문서 기준: 현재 배포 코드(main) 반영. 기능 변경 시 이 표부터 갱신.*
