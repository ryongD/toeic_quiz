import { useEffect, useState } from "react";
import { shuffle } from "../utils/shuffle";
import { words, idioms, getMarkAfterQuestion } from "../data/day4Data";
import { grammarQuestionPool } from "../data/grammarQuestionPool";

type Quiz = {
  question: string;
  answer: string;
  options: string[];
  key: string;
  explanation?: string;
  translation?: string;
};

function shuffleAndPick<T>(array: T[], count: number): T[] {
  return shuffle([...array]).slice(0, count);
}

export default function ToeicDay4Quiz() {
  const [answers, setAnswers] = useState<{ [key: string]: string }>({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [showAll, setShowAll] = useState(false);

  const [definitionQuiz, setDefinitionQuiz] = useState<Quiz[]>([]);
  const [fillQuiz, setFillQuiz] = useState<Quiz[]>([]);
  const [underlineQuiz, setUnderlineQuiz] = useState<Quiz[]>([]);
  const [idiomQuiz, setIdiomQuiz] = useState<Quiz[]>([]);
  const [grammarQuiz, setGrammarQuiz] = useState<Quiz[]>([]);

  const initializeQuiz = () => {
    setAnswers({});
    setSubmitted(false);
    setScore(0);
    setShowAll(false);

    setDefinitionQuiz(shuffleAndPick(words.map(w => ({
      question: `What is the meaning of "${w.word}"?`,
      answer: w.meaning.split(" / ")[0],
      options: shuffleAndPick([w.meaning.split(" / ")[0], ...shuffleAndPick(words.filter(o => o.word !== w.word).map(o => o.meaning.split(" / ")[0]), 3)], 4),
      key: `d_${w.word}`
    })), 5));

    setFillQuiz(shuffleAndPick(words.map(w => ({
      question: w.sentence,
      translation: w.context.replace(/<[^>]+>/g, w.word),
      answer: w.word,
      options: shuffleAndPick([w.word, ...shuffleAndPick(words.filter(o => o.word !== w.word).map(o => o.word), 3)], 4),
      key: `f_${w.word}`
    })), 5));

    setUnderlineQuiz(shuffleAndPick(words.map(w => ({
      question: `Choose the correct meaning of the underlined word: ${w.context}`,
      answer: w.meaning.split(" / ")[0],
      options: shuffleAndPick([w.meaning.split(" / ")[0], ...shuffleAndPick(words.filter(o => o.word !== w.word).map(o => o.meaning.split(" / ")[0]), 3)], 4),
      key: `u_${w.word}`
    })), 5));

    setIdiomQuiz(shuffleAndPick(idioms.map((idiom, i) => ({
      question: `"${idiom.translation}" 에 해당하는 숙어는?`,
      answer: idiom.answer,
      options: shuffleAndPick([idiom.answer, ...shuffleAndPick(idioms.filter(o => o.answer !== idiom.answer).map(o => o.answer), 3)], 4),
      key: `i_${i}`
    })), 5));

    setGrammarQuiz(
      shuffleAndPick(
        grammarQuestionPool.map((q, idx): Quiz => ({
          ...q,
          key: `g_${idx}`
        })),
        5
      )
    );
  };

  useEffect(() => {
    initializeQuiz();
  }, []);

  const handleChange = (key: string, value: string) => {
    setAnswers(prev => ({ ...prev, [key]: value }));
  };

  const handleSubmit = () => {
    let correct = 0;
    [...definitionQuiz, ...fillQuiz, ...underlineQuiz, ...idiomQuiz, ...grammarQuiz].forEach(q => {
      if (answers[q.key] === q.answer) correct++;
    });
    setScore(correct);
    setSubmitted(true);
  };

  const renderQuiz = (
    title: string,
    quizSet: Quiz[],
    prefix: string,
    showTranslation: boolean = false
  ) => (
    <section className="bg-white shadow-md rounded-xl p-6 mb-6">
      <h2 className="text-xl font-semibold text-blue-700 mb-4">{title}</h2>
      {quizSet.map((q, i) => (
        <div key={i} className="mb-6">
          <p className="font-medium mb-2" dangerouslySetInnerHTML={{ __html: `${i + 1}. ${q.question}` }} />
          <div className="space-y-2">
            {q.options.map((choice, j) => (
              <label key={j} className="block">
                <input
                  type="radio"
                  name={q.key}
                  value={choice}
                  onChange={() => handleChange(q.key, choice)}
                  disabled={submitted}
                  className="mr-2"
                />
                {choice}
              </label>
            ))}
            {submitted && (
              <div className="mt-1 text-sm">
                {answers[q.key] === q.answer ? (
                  <span style={{ color: '#16a34a', fontWeight: '600' }}>⭕ <span style={{ color: '#15803d' }}>정답</span></span>
                ) : (
                  <span style={{ color: '#dc2626' }}>❌ <span style={{ color: '#b91c1c' }}>오답</span> <span style={{ color: '#16a34a' }}>(정답: {q.answer})</span></span>
                )}
                {submitted && q.explanation && (
                  <div className="mt-1 text-gray-700">💡 해설: {q.explanation}</div>
                )}
                {submitted && showTranslation && q.translation && (
                  <div className="mt-1 text-gray-500">📝 해석: {q.translation}</div>
                )}
              </div>
            )}
          </div>
        </div>
      ))}
    </section>
  );

  return (
    <div className="max-w-3xl mx-auto p-6 space-y-12">
      <div className="text-center mb-6">
        <img src="/daryong_small.png" alt="귀여운 이미지" className="block mx-auto w-16 h-auto" />
      </div>
      <h1 className="text-3xl font-bold text-center mb-6">📘 TOEIC Day 4 퀴즈</h1>

      {renderQuiz("1. 단어 뜻 고르기", definitionQuiz, 'd')}
      {renderQuiz("2. 문장 빈칸 채우기", fillQuiz, 'f', true)}
      {renderQuiz("3. 밑줄 단어 의미 고르기", underlineQuiz, 'u')}
      {renderQuiz("4. 숙어 해석 고르기", idiomQuiz, 'i')}
      {renderQuiz("5. Part 5 풀어보기", grammarQuiz, 'g', true)}

      {!submitted && (
        <div className="text-center">
          <button onClick={handleSubmit} className="bg-blue-600 text-white font-semibold px-6 py-2 rounded hover:bg-blue-700 shadow-md">
            제출하기
          </button>
        </div>
      )}

      {submitted && (
        <div className="mt-10 text-center space-y-4">
          <div className="text-lg font-bold text-green-700">
            ✅ 당신의 점수는 <span className="text-2xl">{score} / 25</span> 입니다!
          </div>
          <button
            onClick={() => setShowAll(!showAll)}
            className="bg-gray-700 text-white font-medium px-4 py-2 rounded hover:bg-gray-800"
          >
            {showAll ? "단어/숙어 전체보기 닫기" : "단어/숙어 전체보기"}
          </button>
          <button
            onClick={initializeQuiz}
            className="bg-orange-600 text-white font-medium px-4 py-2 rounded hover:bg-orange-700"
          >
            🔁 한번 더 풀기
          </button>
        </div>
      )}

      {showAll && (
        <section className="mt-6 bg-yellow-50 border border-yellow-200 rounded p-6">
          <h2 className="text-lg font-semibold mb-4">📚 Day 4 단어 + 숙어 전체 정리</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <h3 className="font-semibold text-blue-800 mb-2">📗 단어 20개</h3>
              <ul className="list-disc list-inside space-y-1">
                {words.map((item, i) => (
                  <li key={i}><b>{item.word}</b> - {item.meaning}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-blue-800 mb-2">📘 숙어 10개</h3>
              <ul className="list-disc list-inside space-y-1">
                {idioms.map((item, i) => (
                  <li key={i}><b>{item.answer}</b> - {item.translation}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
