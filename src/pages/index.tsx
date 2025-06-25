// src/pages/index.tsx
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="mb-6 flex justify-center">
      <img
        src="/daryong_small.png"
        alt="귀여운 다룡이"
        className="w-32 h-auto"
      />
      </div>

      <h1 className="text-3xl font-bold text-center mb-8">📘 TOEIC RC 연습</h1>
      <h2 className="text-1xl font-bold text-center mb-8">(25.6.26. updates)</h2>
      <h2 className="text-1xl font-bold text-center mb-8">Part5 지문 터치 시 일부 단어 뜻 제공</h2>
      <h2 className="text-1xl font-bold text-center mb-8">문제 풀이 시 타이머 추가</h2>

      <div className="grid gap-6 max-w-md mx-auto">
        <Link to="/vocab">
          <button className="w-full p-4 bg-blue-100 rounded-xl hover:bg-blue-200">
            📗 단어 퀴즈 풀기
          </button>
        </Link>

        <Link to="/part5">
          <button className="w-full p-4 bg-green-100 rounded-xl hover:bg-green-200">
            📝 Part 5 문법 문제
          </button>
        </Link>

        <Link to="/part6">
          <button className="w-full p-4 bg-yellow-100 rounded-xl hover:bg-yellow-200">
            📄 Part 6 문장 완성
          </button>
        </Link>

        <Link to="/part7">
          <button className="w-full p-4 bg-purple-100 rounded-xl hover:bg-purple-200">
            📚 Part 7 독해 연습
          </button>
        </Link>
      </div>
    </div>
  );
}
