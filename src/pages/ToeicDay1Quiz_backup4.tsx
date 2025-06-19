import { useState, useEffect } from "react";
import "../index.css";

const allWords = [
  // 객관식용 단어 문제
  { type: "multiple", question: "'attend'의 뜻은 무엇인가요?", choices: ["회의", "참석하다", "신청서", "제출하다"], answer: "참석하다" },
  { type: "multiple", question: "'conference'의 뜻은 무엇인가요?", choices: ["회의", "면접", "보고서", "급여"], answer: "회의" },
  { type: "multiple", question: "'applicant'의 뜻은 무엇인가요?", choices: ["지원자", "면접관", "부서", "고용"], answer: "지원자" },
  { type: "multiple", question: "'resume'의 뜻은 무엇인가요?", choices: ["이력서", "복사기", "급여", "보고서"], answer: "이력서" },
  { type: "multiple", question: "'position'의 뜻은 무엇인가요?", choices: ["직위", "복지", "회의", "보고서"], answer: "직위" },
  { type: "multiple", question: "'hire'의 뜻은 무엇인가요?", choices: ["고용하다", "해고하다", "지원하다", "거절하다"], answer: "고용하다" },
  { type: "multiple", question: "'interview'의 뜻은 무엇인가요?", choices: ["면접", "이력서", "회의", "계약"], answer: "면접" },
  { type: "multiple", question: "'requirement'의 뜻은 무엇인가요?", choices: ["요구 조건", "급여", "혜택", "부서"], answer: "요구 조건" },
  { type: "multiple", question: "'eligible'의 뜻은 무엇인가요?", choices: ["자격 있는", "계약된", "지원자", "사전"], answer: "자격 있는" },
  { type: "multiple", question: "'employment'의 뜻은 무엇인가요?", choices: ["고용", "복지", "서류", "회의"], answer: "고용" },
  { type: "multiple", question: "'salary'의 뜻은 무엇인가요?", choices: ["급여", "계약", "복지", "지원"], answer: "급여" },
  { type: "multiple", question: "'benefit'의 뜻은 무엇인가요?", choices: ["혜택", "부서", "감독", "지원자"], answer: "혜택" },
  { type: "multiple", question: "'promotion'의 뜻은 무엇인가요?", choices: ["승진", "복사기", "보고서", "계약"], answer: "승진" },
  { type: "multiple", question: "'department'의 뜻은 무엇인가요?", choices: ["부서", "지원", "감독", "고용"], answer: "부서" },
  { type: "multiple", question: "'submit'의 뜻은 무엇인가요?", choices: ["제출하다", "지원하다", "참석하다", "고용하다"], answer: "제출하다" },
  { type: "multiple", question: "'meeting'의 뜻은 무엇인가요?", choices: ["회의", "계약", "부서", "이력서"], answer: "회의" },
  { type: "multiple", question: "'memo'의 뜻은 무엇인가요?", choices: ["메모", "계약서", "이력서", "복지"], answer: "메모" },
  { type: "multiple", question: "'report'의 뜻은 무엇인가요?", choices: ["보고서", "계약", "승진", "급여"], answer: "보고서" },
  { type: "multiple", question: "'supervise'의 뜻은 무엇인가요?", choices: ["감독하다", "지원하다", "계약하다", "참석하다"], answer: "감독하다" },
  { type: "multiple", question: "'contract'의 뜻은 무엇인가요?", choices: ["계약", "부서", "급여", "메모"], answer: "계약" },

  // 빈칸 채우기용 (20개 단어 활용)
  { type: "fill", question: "He will ___ the meeting tomorrow.", translation: "그는 내일 회의에 참석할 것이다.", answer: "attend" },
  { type: "fill", question: "The company is planning a ___ next week.", translation: "회사는 다음 주에 회의를 계획하고 있다.", answer: "conference" },
  { type: "fill", question: "She submitted the ___ to the manager.", translation: "그녀는 이력서를 매니저에게 제출했다.", answer: "resume" },
  { type: "fill", question: "The ___ applied for the position.", translation: "그 지원자가 해당 직위에 지원했다.", answer: "applicant" },
  { type: "fill", question: "He was promoted to a higher ___ .", translation: "그는 더 높은 직위로 승진했다.", answer: "position" },
  { type: "fill", question: "We need to ___ new staff by Friday.", translation: "우리는 금요일까지 새 직원을 고용해야 한다.", answer: "hire" },
  { type: "fill", question: "She had an ___ with the CEO.", translation: "그녀는 CEO와 면접을 가졌다.", answer: "interview" },
  { type: "fill", question: "This is one of the ___ for the job.", translation: "이것은 그 직업의 요구 조건 중 하나이다.", answer: "requirement" },
  { type: "fill", question: "Only ___ candidates will be accepted.", translation: "자격 있는 지원자만 허용된다.", answer: "eligible" },
  { type: "fill", question: "Full-time ___ is available.", translation: "정규직 고용이 가능합니다.", answer: "employment" },
  { type: "fill", question: "He gets a high ___ .", translation: "그는 높은 급여를 받는다.", answer: "salary" },
  { type: "fill", question: "Health ___ are provided.", translation: "건강 혜택이 제공된다.", answer: "benefit" },
  { type: "fill", question: "She got a ___ after one year.", translation: "그녀는 1년 후에 승진했다.", answer: "promotion" },
  { type: "fill", question: "He belongs to the HR ___ .", translation: "그는 인사 부서에 소속되어 있다.", answer: "department" },
  { type: "fill", question: "Please ___ your report by noon.", translation: "정오까지 보고서를 제출하세요.", answer: "submit" },
  { type: "fill", question: "The ___ will be held at 3 PM.", translation: "회의는 오후 3시에 열릴 것입니다.", answer: "meeting" },
  { type: "fill", question: "Write a short ___ to explain.", translation: "설명을 위한 짧은 메모를 작성하세요.", answer: "memo" },
  { type: "fill", question: "Please read the ___ before the meeting.", translation: "회의 전에 보고서를 읽어주세요.", answer: "report" },
  { type: "fill", question: "Managers must ___ employees.", translation: "관리자는 직원을 감독해야 합니다.", answer: "supervise" },
  { type: "fill", question: "The ___ is valid for one year.", translation: "그 계약은 1년간 유효합니다.", answer: "contract" },
];

const allIdioms = [
  { translation: "~에 지원하다", choices: ["apply for", "account for", "ask for", "prepare for"], answer: "apply for" },
  { translation: "~에 책임이 있다", choices: ["be responsible for", "be capable of", "look forward to", "turn in"], answer: "be responsible for" },
  { translation: "~을 기대하다", choices: ["look forward to", "hand in", "on time", "due to"], answer: "look forward to" },
  { translation: "~을 담당하다", choices: ["in charge of", "turn in", "apply for", "out of stock"], answer: "in charge of" },
  { translation: "미리, 사전에", choices: ["in advance", "on time", "due to", "hand in"], answer: "in advance" },
  { translation: "품절인", choices: ["out of stock", "apply for", "on time", "due to"], answer: "out of stock" },
  { translation: "가능한 한 빨리", choices: ["as soon as possible", "hand in", "on time", "due to"], answer: "as soon as possible" },
  { translation: "~ 때문에", choices: ["due to", "apply for", "on time", "out of stock"], answer: "due to" },
  { translation: "제시간에", choices: ["on time", "in advance", "due to", "turn in"], answer: "on time" },
  { translation: "제출하다", choices: ["turn in", "apply for", "look forward to", "in charge of"], answer: "turn in" },
];

function getRandomItems(arr, count) {
  const shuffled = [...arr].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

function ToeicDay1Quiz() {
  const [multipleChoice, setMultipleChoice] = useState([]);
  const [fillInBlank, setFillInBlank] = useState([]);
  const [idioms, setIdioms] = useState([]);
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    setMultipleChoice(getRandomItems(allWords.filter(w => w.type === 'multiple'), 5));
    setFillInBlank(getRandomItems(allWords.filter(w => w.type === 'fill'), 5));
    setIdioms(getRandomItems(allIdioms, 5));
  }, []);

  const handleChange = (key, value) => {
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

  return (
    <div className="p-6 space-y-8">
      <h1 className="text-2xl font-bold">Day 1 토익 퀴즈</h1>

      <section>
        <h2 className="text-xl font-semibold">1. 단어 뜻 고르기 (객관식)</h2>
        {multipleChoice.map((q, i) => (
          <div key={i} className="mt-4">
            <p>{i + 1}. {q.question}</p>
            {q.choices.map((choice, j) => (
              <label key={j} className="block">
                <input
                  type="radio"
                  name={`m${i}`}
                  value={choice}
                  onChange={() => handleChange(`m${i}`, choice)}
                  disabled={submitted}
                /> {choice}
                {submitted && choice === q.answer && <span> ✅</span>}
              </label>
            ))}
          </div>
        ))}
      </section>

      <section>
        <h2 className="text-xl font-semibold">2. 문장 빈칸 채우기</h2>
        {fillInBlank.map((q, i) => (
          <div key={i} className="mt-4">
            <p>{i + 1}. {q.translation}</p>
            <p className="italic">{q.question}</p>
            <input
              type="text"
              className="border p-1 mt-1"
              onChange={(e) => handleChange(`f${i}`, e.target.value)}
              disabled={submitted}
            />
            {submitted && <div>정답: <b>{q.answer}</b></div>}
          </div>
        ))}
      </section>

      <section>
        <h2 className="text-xl font-semibold">3. 숙어 해석 고르기</h2>
        {idioms.map((q, i) => (
          <div key={i} className="mt-4">
            <p>{i + 1}. "{q.translation}" 에 해당하는 숙어는?</p>
            {q.choices.map((choice, j) => (
              <label key={j} className="block">
                <input
                  type="radio"
                  name={`i${i}`}
                  value={choice}
                  onChange={() => handleChange(`i${i}`, choice)}
                  disabled={submitted}
                /> {choice}
                {submitted && choice === q.answer && <span> ✅</span>}
              </label>
            ))}
          </div>
        ))}
      </section>

      {!submitted && (
        <button
          onClick={handleSubmit}
          className="mt-6 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          제출하기
        </button>
      )}

      {submitted && (
        <div className="mt-6 text-lg font-semibold">
          점수: {score} / 15
        </div>
      )}
    </div>
  );
}

export default ToeicDay1Quiz;