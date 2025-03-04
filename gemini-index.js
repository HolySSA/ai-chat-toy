import { GoogleGenerativeAI } from '@google/generative-ai';
import dotenv from 'dotenv';
import readline from 'readline';

// 환경변수 설정
dotenv.config();

// API 키 확인
if (!process.env.GEMINI_API_KEY) {
  console.error('Error: GEMINI_API_KEY가 .env 파일에 설정되지 않았습니다.');
  process.exit(1);
}

// Gemini AI 설정
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// 채팅 모델 설정
const model = genAI.getGenerativeModel({
  model: 'gemini-1.5-pro',
});

// 채팅 세션 시작
const chat = model.startChat({
  history: [], // 대화 기록을 저장할 배열
});

// readline 인터페이스 설정
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// 채팅 함수
async function sendMessage(userInput) {
  try {
    // chat.sendMessage를 사용하여 대화 기록 유지
    const result = await chat.sendMessage(userInput);
    const response = await result.response;
    console.log('\nAI:', response.text());
    askQuestion();
  } catch (error) {
    console.error('에러 발생:', error.message);
    console.error('API 키:', process.env.GEMINI_API_KEY.substring(0, 5) + '...');
    rl.close();
  }
}

// 사용자 입력 받기
function askQuestion() {
  rl.question('\n질문을 입력하세요 (종료하려면 "exit" 입력): ', (input) => {
    if (input.toLowerCase() === 'exit') {
      rl.close();
      return;
    }
    sendMessage(input);
  });
}

console.log('AI 챗봇이 시작되었습니다!');
askQuestion();
