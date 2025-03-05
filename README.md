# AI Chat Toy Project

Node.js를 사용하여 구현한 세 가지 AI 모델(Gemini, Grok, OpenAI) 비교 챗봇 프로젝트입니다.

## 프로젝트 소개

이 프로젝트는 주요 AI 모델들의 특징을 비교하고 실제 구현을 통해 각 API의 사용법을 학습하기 위해 만들어졌습니다. 자세한 구현 과정과 비교 분석은 [블로그 포스트](https://holy-s.tistory.com/entry/Nodejs%EB%A1%9C-%EA%B5%AC%ED%98%84%ED%95%98%EB%8A%94-AI-%EC%B1%97%EB%B4%87-%EB%B9%84%EA%B5%90-%EB%B6%84%EC%84%9D-Gemini-vs-Grok-vs-OpenAI)를 참고해주세요.

## 기능

- 세 가지 AI 모델과의 대화 기능
- 대화 히스토리 유지
- 터미널 기반 인터페이스
- 환경 변수를 통한 API 키 관리

## 시작하기

### 필수 조건

- Node.js 20.x 이상
- npm 9.x 이상

### 설치

의존성 설치

```bash
npm install
```

### 환경 변수 설정

```env
GEMINI_API_KEY=your_gemini_api_key
GROK_API_KEY=your_grok_api_key
OPENAI_API_KEY=your_openai_api_key
```

### 실행

```bash
# Gemini 버전 실행
npm run gemini
# Grok 버전 실행
npm run grok
# OpenAI 버전 실행
npm run openai
```

## API 키 발급 방법

### Gemini API

1. [Google AI Studio](https://makersuite.google.com/app/apikey) 접속
2. API 키 생성

### Grok API

1. X Premium+ 구독 필요
2. API 베타 액세스 신청

### OpenAI API

1. [OpenAI Platform](https://platform.openai.com) 가입
2. API 키 생성 (신용카드 등록 필요)

## 주요 특징 비교

| 특징          | Gemini  | Grok   | OpenAI    |
| ------------- | ------- | ------ | --------- |
| 무료 사용량   | 60회/월 | 없음   | $5 크레딧 |
| 신용카드 필요 | 불필요  | 필요   | 필요      |
| 설정 옵션     | 기본    | 기본   | 다양함    |
| 응답 품질     | 우수    | 미확인 | 매우 우수 |

## 라이선스

MIT License
