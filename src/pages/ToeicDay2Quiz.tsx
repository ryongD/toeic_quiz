import { useState, useEffect } from "react";
import "../index.css";

const allWords = [
  // 객관식용 단어 문제
  { type: "multiple", question: "'colleague'의 뜻은 무엇인가요?", choices: ["업무", "동료", "승인", "알림"], answer: "동료" },
  { type: "multiple", question: "'achievement'의 뜻은 무엇인가요?", choices: ["업적", "마감일", "보고서", "부서"], answer: "업적" },
  { type: "multiple", question: "'efficient'의 뜻은 무엇인가요?", choices: ["효율적인", "의무적인", "관련된", "업무"], answer: "효율적인" },
  { type: "multiple", question: "'notify'의 뜻은 무엇인가요?", choices: ["알리다", "보고하다", "관리하다", "승인하다"], answer: "알리다" },
  { type: "multiple", question: "'department'의 뜻은 무엇인가요?", choices: ["부서", "업무", "과제", "노력"], answer: "부서" },
  { type: "multiple", question: "'task'의 뜻은 무엇인가요?", choices: ["업무", "노력", "알림", "이용 가능"], answer: "업무" },
  { type: "multiple", question: "'responsible'의 뜻은 무엇인가요?", choices: ["책임이 있는", "관련된", "효율적인", "업무적인"], answer: "책임이 있는" },
  { type: "multiple", question: "'assignment'의 뜻은 무엇인가요?", choices: ["과제", "업무", "보고서", "업적"], answer: "과제" },
  { type: "multiple", question: "'submit'의 뜻은 무엇인가요?", choices: ["제출하다", "승인하다", "관리하다", "연락하다"], answer: "제출하다" },
  { type: "multiple", question: "'deadline'의 뜻은 무엇인가요?", choices: ["마감일", "의무", "업적", "노력"], answer: "마감일" },
  { type: "multiple", question: "'effort'의 뜻은 무엇인가요?", choices: ["노력", "관리", "알림", "과제"], answer: "노력" },
  { type: "multiple", question: "'manage'의 뜻은 무엇인가요?", choices: ["관리하다", "보고하다", "승인하다", "보고서"], answer: "관리하다" },
  { type: "multiple", question: "'report'의 뜻은 무엇인가요?", choices: ["보고서", "알림", "연락", "승진"], answer: "보고서" },
  { type: "multiple", question: "'approval'의 뜻은 무엇인가요?", choices: ["승인", "업무", "부서", "과제"], answer: "승인" },
  { type: "multiple", question: "'relevant'의 뜻은 무엇인가요?", choices: ["관련된", "책임 있는", "업무적인", "효율적인"], answer: "관련된" },
  { type: "multiple", question: "'mandatory'의 뜻은 무엇인가요?", choices: ["의무적인", "이용 가능한", "효율적으로", "업무적인"], answer: "의무적인" },
  { type: "multiple", question: "'reminder'의 뜻은 무엇인가요?", choices: ["알림", "알리다", "보고서", "승인"], answer: "알림" },
  { type: "multiple", question: "'update'의 뜻은 무엇인가요?", choices: ["업데이트하다", "보고하다", "제출하다", "승인하다"], answer: "업데이트하다" },
  { type: "multiple", question: "'available'의 뜻은 무엇인가요?", choices: ["이용 가능한", "효율적인", "업무적인", "관련된"], answer: "이용 가능한" },
  { type: "multiple", question: "'efficiently'의 뜻은 무엇인가요?", choices: ["효율적으로", "업무적으로", "의무적으로", "관련있게"], answer: "효율적으로" },

  // 빈칸 채우기용 (20개 단어 활용)
  { type: "fill", question: "He is a trusted ___ at our company.", translation: "그는 우리 회사에서 신뢰받는 동료이다.", answer: "colleague" },
  { type: "fill", question: "She received an award for her ___.", translation: "그녀는 그녀의 업적으로 상을 받았다.", answer: "achievement" },
  { type: "fill", question: "We need a more ___ approach.", translation: "우리는 더 효율적인 접근이 필요하다.", answer: "efficient" },
  { type: "fill", question: "Please ___ me of any changes.", translation: "변경 사항이 있으면 알려 주세요.", answer: "notify" },
  { type: "fill", question: "Which ___ do you work in?", translation: "어느 부서에서 근무하십니까?", answer: "department" },
  { type: "fill", question: "He completed the ___ before the deadline.", translation: "그는 마감 전에 업무를 완료했다.", answer: "task" },
  { type: "fill", question: "She is ___ for the new project.", translation: "그녀는 새 프로젝트에 책임이 있다.", answer: "responsible" },
  { type: "fill", question: "Your next ___ is to draft the report.", translation: "당신의 다음 과제는 보고서를 작성하는 것입니다.", answer: "assignment" },
  { type: "fill", question: "Be sure to ___ your form on time.", translation: "양식을 제시간에 제출하세요.", answer: "submit" },
  { type: "fill", question: "The ___ for this task is Friday.", translation: "이 업무의 마감일은 금요일이다.", answer: "deadline" },
  { type: "fill", question: "He made a great ___ to the team.", translation: "그는 팀에 큰 노력을 기울였다.", answer: "effort" },
  { type: "fill", question: "She will ___ the new department.", translation: "그녀는 새 부서를 관리할 것이다.", answer: "manage" },
  { type: "fill", question: "The ___ was sent this morning.", translation: "그 보고서는 오늘 아침에 보내졌다.", answer: "report" },
  { type: "fill", question: "We are waiting for final ___ from HR.", translation: "우리는 인사부의 최종 승인을 기다리고 있다.", answer: "approval" },
  { type: "fill", question: "This is ___ information.", translation: "이것은 관련된 정보이다.", answer: "relevant" },
  { type: "fill", question: "Attendance is ___ for all employees.", translation: "모든 직원에게 출석은 의무적이다.", answer: "mandatory" },
  { type: "fill", question: "Set a ___ for the meeting.", translation: "회의를 위한 알림을 설정하세요.", answer: "reminder" },
  { type: "fill", question: "We need to ___ the database.", translation: "데이터베이스를 업데이트해야 합니다.", answer: "update" },
  { type: "fill", question: "The service is ___ 24/7.", translation: "그 서비스는 연중무휴로 이용 가능합니다.", answer: "available" },
  { type: "fill", question: "Use your time ___.", translation: "시간을 효율적으로 사용하세요.", answer: "efficiently" },
];

const allIdioms = [
  { translation: "~을 알고 있다", choices: ["be aware of", "in charge of", "due to", "prior to"], answer: "be aware of" },
  { translation: "~을 담당하는", choices: ["in charge of", "due to", "get in touch with", "relevant to"], answer: "in charge of" },
  { translation: "~ 때문에", choices: ["due to", "because of", "as a result of", "prior to"], answer: "due to" },
  { translation: "~을 대신하여", choices: ["on behalf of", "in spite of", "along with", "in addition to"], answer: "on behalf of" },
  { translation: "~ 이전에", choices: ["prior to", "after", "within", "until"], answer: "prior to" },
  { translation: "다양한", choices: ["a wide range of", "a variety of", "a lot of", "many kinds of"], answer: "a wide range of" },
  { translation: "시기적절하게", choices: ["in a timely manner", "on time", "promptly", "immediately"], answer: "in a timely manner" },
  { translation: "~와 연락하다", choices: ["get in touch with", "contact", "speak to", "message"], answer: "get in touch with" },
  { translation: "~에 대해 책임지다", choices: ["take responsibility for", "be responsible for", "deal with", "take care of"], answer: "take responsibility for" },
  { translation: "노력하다", choices: ["make an effort", "do one's best", "try hard", "strive"], answer: "make an effort" },
];

function getRandomItems<T>(arr: T[], count: number): T[] {
  const shuffled = [...arr].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

function shuffleChoicesInAllWords<T extends { choices?: string[] }>(words: T[]): T[] {
  return words.map(word => {
    if (!word.choices) return word;
    const shuffledChoices = [...word.choices].sort(() => 0.5 - Math.random());
    return { ...word, choices: shuffledChoices };
  });
}

function ToeicQuiz() {
  const [multipleChoice, setMultipleChoice] = useState<typeof allWords>([]);
  const [fillInBlank, setFillInBlank] = useState<typeof allWords>([]);
  const [idioms, setIdioms] = useState<typeof allIdioms>([]);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const mcRaw = getRandomItems(allWords.filter(w => w.type === 'multiple'), 5);
    const mc = shuffleChoicesInAllWords(mcRaw);  // <- 보기 섞기
    const fb = getRandomItems(allWords.filter(w => w.type === 'fill'), 5);
    const idiomsRaw = getRandomItems(allIdioms, 5);
    const idiomQs = shuffleChoicesInAllWords(idiomsRaw); // <- 숙어 보기 섞기

    setMultipleChoice(mc);
    setFillInBlank(fb);
    setIdioms(idiomQs);
  }, []);

  const handleChange = (key: string, value: string) => {
    setAnswers(prev => ({ ...prev, [key]: value }));
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  let score = 0;
  multipleChoice.forEach((q, i) => {
    if (answers[`m${i}`] === q.answer) score++;
  });
  fillInBlank.forEach((q, i) => {
    if ((answers[`f${i}`] || '').trim().toLowerCase() === q.answer.toLowerCase()) score++;
  });
  idioms.forEach((q, i) => {
    if (answers[`i${i}`] === q.answer) score++;
  });

  const getMark = (correct: boolean) => (correct ? "⭕" : "❌");

  return (
    <div className="max-w-3xl mx-auto p-6 space-y-12">
      <div className="text-center mb-6">
        <img
           src="daryong.png"
           alt="귀여운 이미지"
           className="block mx-auto w-20 h-auto"
        />
      </div>
      <h1 className="text-3xl font-bold text-center mb-6">📘 TOEIC Day 2 퀴즈</h1>

      <section className="bg-white shadow-md rounded-xl p-6">
        <h2 className="text-xl font-semibold text-blue-700 mb-4">1. 단어 뜻 고르기 (객관식)</h2>
        {multipleChoice.map((q, i) => {
          const correct = answers[`m${i}`] === q.answer;
          return (
            <div key={i} className="mb-6">
              <p className="font-medium mb-2">
                {i + 1}. {q.question} {submitted && <span className={correct ? "text-green-500" : "text-red-500"}>{getMark(correct)}</span>}
              </p>
              <div className="space-y-2">
                {q.choices && q.choices.map((choice, j) => (
                  <label key={j} className="block">
                    <input
                      type="radio"
                      name={`m${i}`}
                      value={choice}
                      onChange={() => handleChange(`m${i}`, choice)}
                      disabled={submitted}
                      className="mr-2"
                    />
                    {choice}
                    {submitted && choice === q.answer && <span className="text-green-600 font-semibold ml-2">✅ 정답</span>}
                  </label>
                ))}
              </div>
            </div>
          );
        })}
      </section>

      <section className="bg-white shadow-md rounded-xl p-6">
        <h2 className="text-xl font-semibold text-blue-700 mb-4">2. 문장 빈칸 채우기</h2>
        {fillInBlank.map((q, i) => {
          const input = (answers[`f${i}`] || '').trim().toLowerCase();
          const correct = input === q.answer.toLowerCase();
          return (
            <div key={i} className="mb-6">
              <p className="font-medium">
                {i + 1}. {q.translation} {submitted && <span className={correct ? "text-green-500" : "text-red-500"}>{getMark(correct)}</span>}
              </p>
              <p className="italic mb-2">{q.question}</p>
              <input
                type="text"
                className="border border-gray-300 rounded px-3 py-1 w-full"
                onChange={(e) => handleChange(`f${i}`, e.target.value)}
                disabled={submitted}
              />
              {submitted && <div className="mt-1 text-green-600">정답: <b>{q.answer}</b></div>}
            </div>
          );
        })}
      </section>

      <section className="bg-white shadow-md rounded-xl p-6">
        <h2 className="text-xl font-semibold text-blue-700 mb-4">3. 숙어 해석 고르기</h2>
        {idioms.map((q, i) => {
          const correct = answers[`i${i}`] === q.answer;
          return (
            <div key={i} className="mb-6">
              <p className="font-medium mb-2">
                {i + 1}. "{q.translation}" 에 해당하는 숙어는? {submitted && <span className={correct ? "text-green-500" : "text-red-500"}>{getMark(correct)}</span>}
              </p>
              <div className="space-y-2">
                {q.choices.map((choice, j) => (
                  <label key={j} className="block">
                    <input
                      type="radio"
                      name={`i${i}`}
                      value={choice}
                      onChange={() => handleChange(`i${i}`, choice)}
                      disabled={submitted}
                      className="mr-2"
                    />
                    {choice}
                    {submitted && choice === q.answer && <span className="text-green-600 font-semibold ml-2">✅ 정답</span>}
                  </label>
                ))}
              </div>
            </div>
          );
        })}
      </section>

      {!submitted && (
        <div className="text-center">
          <button
            onClick={handleSubmit}
            className="bg-blue-600 text-white font-semibold px-6 py-2 rounded hover:bg-blue-700 shadow-md"
          >
            제출하기
          </button>
        </div>
      )}

      {submitted && (
        <div className="mt-10 text-center">
          <div className="text-lg font-bold text-green-700 mb-4">
            ✅ 당신의 점수는 <span className="text-2xl">{score} / 15</span> 입니다!
          </div>
          <button
            onClick={() => setShowAll(!showAll)}
            className="bg-gray-700 text-white font-medium px-4 py-2 rounded hover:bg-gray-800"
          >
            {showAll ? "단어/숙어 전체보기 닫기" : "단어/숙어 전체보기"}
          </button>
        </div>
      )}

      {showAll && (
        <section className="mt-6 bg-yellow-50 border border-yellow-200 rounded p-6">
          <h2 className="text-lg font-semibold mb-4">📚 Day 1 단어 + 숙어 전체 정리</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <h3 className="font-semibold text-blue-800 mb-2">📗 단어 20개</h3>
              <ul className="list-disc list-inside space-y-1">
                {allWords.filter(w => w.type === 'multiple').map((item, i) => (
                  <li key={i}><b>{item.question.split("'")[1]}</b> - {item.answer}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-blue-800 mb-2">📘 숙어 10개</h3>
              <ul className="list-disc list-inside space-y-1">
                {allIdioms.map((item, i) => (
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

export default ToeicQuiz;