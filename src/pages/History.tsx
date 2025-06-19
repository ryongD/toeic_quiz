// src/pages/History.tsx
import { useEffect, useState } from "react";

function History() {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("toeicHistory") || "[]");
    setHistory(saved.reverse()); // 최근 기록부터 보이도록
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold text-center text-blue-800 mb-6">
        📚 TOEIC 학습 기록
      </h1>
      {history.length === 0 ? (
        <p className="text-center text-gray-500">저장된 기록이 없습니다.</p>
      ) : (
        history.map((item, idx) => (
          <div key={idx} className="bg-white p-4 rounded-xl shadow">
            <div className="font-semibold mb-2">
              ✅ {item.day} - {item.date} - 점수: {item.score} / 15
            </div>
            <ul className="text-sm text-gray-700 space-y-1 list-disc list-inside">
              {item.quizResults?.multipleChoice?.map((q, i) => (
                <li key={i}>
                  객관식: {q.question} → <b>{q.answer}</b> /
                  제출 답: <b>{item.quizResults.answers[`m${i}`]}</b>
                </li>
              ))}
              {item.quizResults?.fillInBlank?.map((q, i) => (
                <li key={i}>
                  빈칸: {q.question} → <b>{q.answer}</b> /
                  제출 답: <b>{item.quizResults.answers[`f${i}`]}</b>
                </li>
              ))}
              {item.quizResults?.idioms?.map((q, i) => (
                <li key={i}>
                  숙어: "{q.translation}" → <b>{q.answer}</b> /
                  제출 답: <b>{item.quizResults.answers[`i${i}`]}</b>
                </li>
              ))}
            </ul>
          </div>
        ))
      )}
    </div>
  );
}

export default History;
