import { useMemo, useState } from "react";
import part6QuestionPool from "../data/part6QuestionPool";

// 배열 섞기 함수
function shuffleArray<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export default function Part6QuizPage() {
  const shuffledQuestions = useMemo(() => shuffleArray(part6QuestionPool), []);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]);
  const [showExplanation, setShowExplanation] = useState(false);

  const currentSet = shuffledQuestions[currentIndex];

  const handleAnswer = (choice: string, index: number) => {
    const updated = [...selectedAnswers];
    updated[index] = choice;
    setSelectedAnswers(updated);
  };

  const handleSubmit = () => setShowExplanation(true);

  const handleNext = () => {
    setSelectedAnswers([]);
    setShowExplanation(false);
    setCurrentIndex((prev) => (prev + 1) % shuffledQuestions.length);
  };

  return (
    <div className="max-w-3xl mx-auto p-4 sm:p-6 text-base break-words">
      <h2 className="text-xl font-bold mb-4 text-center">📄 Part 6 문장 완성 퀴즈</h2>

      <div className="bg-gray-50 border border-gray-300 rounded-lg p-4 mb-6 text-sm sm:text-base leading-relaxed text-gray-800 whitespace-pre-wrap break-words">
        {currentSet.passage}
      </div>


      {currentSet.questions.map((q, idx) => (
        <div key={idx} className="mt-6">
          <p className="text-base sm:text-lg font-semibold mb-2">
            {q.number ? `${q.number}.` : `문항 ${idx + 1}.`}
          </p>

          {Array.isArray(q.choices) && q.choices.length > 0 ? (
            <div className="space-y-2">
              {q.choices.map((choice) => {
                const isSelected = selectedAnswers[idx] === choice;
                const isCorrect = choice === q.answer;

                return (
                  <label
                    key={choice}
                    className={`flex items-center p-2 rounded-md border cursor-pointer text-sm sm:text-base
                      ${
                        showExplanation
                          ? isCorrect
                            ? "bg-green-100 border-green-500"
                            : isSelected
                            ? "bg-red-100 border-red-500"
                            : "border-gray-300"
                          : isSelected
                          ? "bg-blue-100 border-blue-500"
                          : "hover:bg-gray-100 border-gray-300"
                      }`}
                  >
                    <input
                      type="radio"
                      name={`q${idx}`}
                      value={choice}
                      checked={isSelected}
                      onChange={() => handleAnswer(choice, idx)}
                      disabled={showExplanation}
                      className="mr-2 accent-blue-500"
                    />
                    <span className="flex-1">{choice}</span>

                    {showExplanation && isSelected && (
                      <span className="ml-2">
                        {isCorrect ? "✅" : "❌"}
                      </span>
                    )}
                  </label>
                );
              })}
            </div>
          ) : (
            <p className="text-red-500 text-sm">⚠️ 선택지가 정의되지 않았습니다.</p>
          )}

          {showExplanation && (
            <div className="mt-3 text-sm text-gray-700 bg-gray-50 p-3 rounded-md">
              ✅ <b>정답:</b> {q.answer}
              <br />
              🧠 <b>해설:</b> {q.explanation}
              <br />
              🇰🇷 <b>번역:</b> {q.translation}
            </div>
          )}
        </div>
      ))}

      <div className="flex justify-center mt-8">
        {!showExplanation ? (
          <button
            className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700"
            onClick={handleSubmit}
          >
            제출
          </button>
        ) : (
          <button
            className="px-6 py-2 bg-green-600 text-white rounded-lg shadow hover:bg-green-700"
            onClick={handleNext}
          >
            다음 문제
          </button>
        )}
      </div>
    </div>
  );
}
