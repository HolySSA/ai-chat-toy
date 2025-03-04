import OpenAI from 'openai';
import dotenv from 'dotenv';
import readline from 'readline';

// 환경변수 설정
dotenv.config();

// API 키 확인
if (!process.env.GROK_API_KEY) {
  console.error('Error: GROK_API_KEY가 .env 파일에 설정되지 않았습니다.');
  process.exit(1);
}

// Grok 클라이언트 설정
const client = new OpenAI({
  apiKey: process.env.GROK_API_KEY,
  baseURL: 'https://api.x.ai/v1',
});

// 대화 기록을 저장할 배열
let messageHistory = [
  {
    role: 'system',
    content: "You are Grok, a chatbot inspired by the Hitchhiker's Guide to the Galaxy.",
  },
];

// readline 인터페이스 설정
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// 채팅 함수
async function sendMessage(userInput) {
  try {
    // 사용자 메시지를 기록에 추가
    messageHistory.push({
      role: 'user',
      content: userInput,
    });

    const completion = await client.chat.completions.create({
      model: 'grok-2',
      messages: messageHistory, // 전체 대화 기록 전달
    });

    // AI 응답을 기록에 추가
    const aiResponse = completion.choices[0].message;
    messageHistory.push(aiResponse);

    console.log('\nGrok:', aiResponse.content);
    askQuestion();
  } catch (error) {
    console.error('에러 발생:', error.message);
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

console.log('Grok 챗봇이 시작되었습니다!');
askQuestion();
