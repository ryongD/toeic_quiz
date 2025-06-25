import React, { useState, useEffect } from "react";
import { part7QuestionPool } from "@/data/part7QuestionPool";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const shuffleArray = <T,>(array: T[]): T[] => {
  return [...array].sort(() => Math.random() - 0.5);
};

const Part7QuizPage = () => {
  const navigate = useNavigate();
  const [shuffledPool, setShuffledPool] = useState(() => shuffleArray(part7QuestionPool));
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]);
  const [showExplanation, setShowExplanation] = useState(false);
  const [showTranslation, setShowTranslation] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [finalTime, setFinalTime] = useState<number | null>(null);

  const currentSet = shuffledPool[currentIndex];

  useEffect(() => {
    let timer: NodeJS.Timeout | null = null;

    if (currentSet && !showExplanation) {
      setSelectedAnswers(Array(currentSet.questions.length).fill(""));
      setElapsedTime(0);

      timer = setInterval(() => {
        setElapsedTime((prev) => prev + 1);
      }, 1000);
    }

    return () => {
      if (timer) clearInterval(timer);
    };
  }, [currentIndex, showExplanation]);



  if (!currentSet) {
    return (
      <div className="max-w-3xl mx-auto p-4 sm:p-6 text-base break-words">
        <h2 className="text-xl font-bold mb-4 text-center">📄 Part 7 독해 퀴즈</h2>
        <p className="text-lg mb-4">🎉 모든 문제를 완료하셨습니다!</p>
        <Button onClick={() => navigate("/")}>메인으로 돌아가기</Button>
      </div>
    );
  }

  const handleAnswer = (answer: string, idx: number) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[idx] = answer;
    setSelectedAnswers(newAnswers);
  };

  const handleSubmit = () => {
    setShowExplanation(true);
    setFinalTime(elapsedTime); // 타이머 저장
  };

  const handleNext = () => {
    if (currentIndex + 1 >= shuffledPool.length) return;
    setShowExplanation(false);
    setShowTranslation(false);
    setCurrentIndex((prev) => prev + 1);
  };

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-xl sm:text-2xl font-bold mb-6">📄 Part 7 독해 퀴즈</h1>

      <div className="text-sm text-gray-600 mb-4 text-right">
        ⏱️ 경과 시간: <span className="font-semibold text-blue-600">{elapsedTime}초</span>
      </div>

      {currentSet.passages.map((passage, index) => (
        <div
          key={`passage-${index}`}
          className="bg-white rounded-xl shadow border border-gray-300 mb-10 p-6"
        >
          <div className="flex items-center mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
              className="mr-2 text-blue-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 8c.828 0 1.5-.672 1.5-1.5S12.828 5 12 5s-1.5.672-1.5 1.5S11.172 8 12 8zM12 14c.828 0 1.5-.672 1.5-1.5S12.828 11 12 11s-1.5.672-1.5 1.5S11.172 14 12 14zM12 20c.828 0 1.5-.672 1.5-1.5S12.828 17 12 17s-1.5.672-1.5 1.5S11.172 20 12 20z"
              />
            </svg>
            <h3 className="text-lg font-bold text-gray-700">지문 {index + 1}</h3>
          </div>
          <div className="whitespace-pre-line leading-relaxed text-gray-800 text-sm">
            {passage}
          </div>
        </div>
      ))}

      {showExplanation && !showTranslation && (
        <div className="text-center mb-6">
          <Button onClick={() => setShowTranslation(true)}>지문 해석 보기</Button>
        </div>
      )}

      {showTranslation && currentSet.translation && (
        <div className="mt-6">
          {currentSet.translation.map((trans, index) => (
            <div
              key={`translation-${index}`}
              className="bg-gray-50 border border-gray-300 rounded-lg p-4 mb-6"
            >
              <h4 className="font-semibold mb-2 text-gray-600">📘 지문 {index + 1} 해석</h4>
              <p className="whitespace-pre-line text-gray-800 text-sm leading-relaxed">{trans}</p>
            </div>
          ))}
        </div>
      )}

      {currentSet.questions.map((q, idx) => (
        <div key={idx} className="mb-8">
          <p className="font-semibold mb-2">
            {q.number}. {q.question}
          </p>
          <div className="space-y-2">
            {q.choices.map((choice) => {
              const isSelected = selectedAnswers[idx] === choice;
              const isCorrect = q.answer === choice;

              return (
                <label
                  key={choice}
                  className={`block p-2 rounded-md border cursor-pointer transition-all duration-200 ${
                    isSelected
                      ? showExplanation
                        ? isCorrect
                          ? "bg-green-100 border-green-500"
                          : "bg-red-100 border-red-500"
                        : "bg-blue-100 border-blue-500"
                      : "hover:bg-gray-100"
                  }`}
                >
                  <input
                    type="radio"
                    name={`q${idx}`}
                    value={choice}
                    checked={isSelected}
                    onChange={() => handleAnswer(choice, idx)}
                    disabled={showExplanation}
                    className="mr-2"
                  />
                  {choice}
                  {showExplanation && isSelected && (
                    isCorrect ? " ✅" : " ❌"
                  )}
                </label>
              );
            })}
          </div>

          {showExplanation && (
            <div
              className="mt-4 p-4 rounded-md border text-sm space-y-2"
              style={{ backgroundColor: "#e6f0ff", borderColor: "#66a3ff" }} // 연한 파랑 배경 & 테두리
            >
              <div style={{ color: "#155724", fontWeight: "bold" }}>
                ✅ 정답: {q.answer}
              </div>
              <div style={{ color: "#004085" }}>
                <strong>📘 해설:</strong> {q.explanation}
              </div>
            </div>
          )}
        </div>
      ))}


      <div className="flex justify-center mt-8">
        {!showExplanation ? (
          <Button onClick={handleSubmit}>제출</Button>
        ) : (
          <Button onClick={handleNext}>다음 문제</Button>
        )}
      </div>

      {finalTime !== null && (
        <div className="text-sm text-gray-600 mt-4 text-center">
          ⏱️ 소요 시간: <span className="font-semibold text-blue-600">{finalTime}초</span>
        </div>
      )}

      <div className="mb-4 text-center">
        <button
          onClick={() => navigate("/")}
          className="text-sm text-blue-600 hover:text-blue-800"
        >
          ⬅ 메인으로 돌아가기
        </button>
      </div>
    </div>
  );
};

export default Part7QuizPage;
