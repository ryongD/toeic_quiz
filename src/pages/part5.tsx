import React, { useState, useEffect } from "react";
import grammarQuestionPool from "@/data/grammarQuestionPool";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import WordWithMeaning from "@/components/WordWithMeaning";

export default function Part5QuizPage() {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(() =>
    grammarQuestionPool[Math.floor(Math.random() * grammarQuestionPool.length)]
  );
  const [selected, setSelected] = useState<string | null>(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [finalTime, setFinalTime] = useState<number | null>(null);

  useEffect(() => {
    let timer: NodeJS.Timeout | null = null;

    if (!showAnswer) {
      timer = setInterval(() => {
        setElapsedTime((prev) => prev + 1);
      }, 1000);
    }

    return () => {
      if (timer) clearInterval(timer);
    };
  }, [showAnswer]);


  const handleChoice = (choice: string) => {
    setSelected(choice);
  };

  const handleSubmit = () => {
    setFinalTime(elapsedTime); // 최종 시간 저장
    setShowAnswer(true);
  };

  const handleNext = () => {
    setCurrentQuestion(
      grammarQuestionPool[Math.floor(Math.random() * grammarQuestionPool.length)]
    );
    setSelected(null);
    setShowAnswer(false);
    setElapsedTime(0); // ⬅️ 타이머 초기화
  };

  return (
    <div className="min-h-screen bg-white p-4 flex flex-col items-center justify-center">
      <div className="max-w-xl w-full bg-gray-50 p-6 rounded-xl shadow-md">
        <h2 className="text-xl font-bold text-gray-800 mb-4 text-center">📄 Part 5 문법 퀴즈</h2>

        <div className="text-sm text-gray-600 mb-4 text-right">
          ⏱️ 경과 시간: <span className="font-semibold text-blue-600">{elapsedTime}초</span>
        </div>

        <div className="bg-white p-4 rounded-md border border-gray-300 mb-4">
        <div className="text-base sm:text-lg font-semibold text-gray-800 mb-4">
          <WordWithMeaning text={currentQuestion.question} enablePopup={true} />
        </div>

          <div className="space-y-2">
            {currentQuestion.options.map((choice, idx) => {
            const isCorrect = choice === currentQuestion.answer;
            const isSelected = choice === selected;

            return (
              <label
                key={idx}
                className={`flex items-center p-2 rounded-md border text-sm sm:text-base cursor-pointer
                  ${
                    showAnswer
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
                  name="choice"
                  value={choice}
                  checked={isSelected}
                  disabled={showAnswer}
                  onChange={() => handleChoice(choice)}
                  className="mr-2 accent-blue-500"
                />
                <span className="flex-1">
                  {choice}
                </span>

                {showAnswer && isSelected && (
                  <span className="ml-2">
                    {isCorrect ? "✅" : "❌"}
                  </span>
                )}
              </label>
            );
            })}
          </div>
        </div>

        <div className="mt-4">
          {!showAnswer ? (
            <Button
              onClick={handleSubmit}
              disabled={!selected}
              className="w-full"
            >
              제출
            </Button>
          ) : (
            <>
              <div className="mt-4 text-sm text-gray-800 bg-gray-100 p-3 rounded">
                <p className="mb-1">✅ <strong>정답:</strong> {currentQuestion.answer}</p>
                <p className="mb-1">💡 <strong>해설:</strong> {currentQuestion.explanation}</p>
                <p>📘 <strong>해석:</strong> {currentQuestion.translation}</p>
              </div>

              <Button onClick={handleNext} className="mt-4 w-full">
                다음 문제
              </Button>
            </>
          )}
        </div>

        {showAnswer && finalTime !== null && (
          <div className="text-sm text-gray-600 mt-4 text-center">
            ⏱️ 소요 시간: <span className="font-semibold text-blue-600">{finalTime}초</span>
          </div>
        )}

        <div className="mt-8 text-center">
          <button
            onClick={() => navigate("/")}
            className="text-blue-600 hover:underline text-sm"
          >
            ⬅ 메인으로 돌아가기
          </button>
        </div>
      </div>
    </div>
  );
}
