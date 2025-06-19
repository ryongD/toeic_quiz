import { useState } from "react";
import "../index.css";

const multipleChoice = [
  {
    question: "'employee'의 뜻은 무엇인가요?",
    choices: ["고용하다", "고용인", "고용주", "업무"],
    answer: "고용인",
  },
  {
    question: "'resume'의 뜻은 무엇인가요?",
    choices: ["재개하다", "휴식", "종료하다", "예약하다"],
    answer: "재개하다",
  },
  {
    question: "'department'의 뜻은 무엇인가요?",
    choices: ["부서", "개발", "직원", "근무"],
    answer: "부서",
  },
  {
    question: "'require'의 뜻은 무엇인가요?",
    choices: ["요구하다", "지원하다", "홍보하다", "제출하다"],
    answer: "요구하다",
  },
  {
    question: "'interview'의 뜻은 무엇인가요?",
    choices: ["면접", "직책", "복사기", "승진"],
    answer: "면접",
  },
];

const fillInTheBlank = [
  {
    question: "He will ___ for the interview tomorrow. (그는 내일 면접을 위해 ___ 것이다.)",
    answer: "prepare",
  },
  {
    question: "The company is looking to ___ new employees. (회사는 새로운 직원을 ___ 중이다.)",
    answer: "hire",
  },
  {
    question: "Please send your ___ by email. (당신의 ___를 이메일로 보내주세요.)",
    answer: "resume",
  },
  {
    question: "The HR department is in charge of ___. (인사부서는 ___을 담당한다.)",
    answer: "recruitment",
  },
  {
    question: "She was ___ for the job because of her experience. (그녀는 경험 덕분에 그 일에 ___.)",
    answer: "qualified",
  },
];

const idioms = [
  {
    translation: "자격이 있다",
    choices: ["be eligible for", "be capable of", "be similar to", "be responsible for"],
    answer: "be eligible for",
  },
  {
    translation: "~에 지원하다",
    choices: ["apply for", "account for", "ask for", "prepare for"],
    answer: "apply for",
  },
  {
    translation: "~에 대해 책임지다",
    choices: ["be responsible for", "be aware of", "be qualified for", "be capable of"],
    answer: "be responsible for",
  },
  {
    translation: "자격을 갖추다",
    choices: ["be qualified for", "be eligible for", "be suited for", "be interested in"],
    answer: "be qualified for",
  },
  {
    translation: "채우다, 작성하다",
    choices: ["fill out", "fill in", "hand in", "write down"],
    answer: "fill out",
  },
];

function QuizSection({ title, questions, type, userAnswers, setUserAnswers }) {
  const handleChange = (index, value) => {
    const updated = [...userAnswers];
    updated[index] = value;
    setUserAnswers(updated);
  };

  return (
    <div>
      <h2>{title}</h2>
      {questions.map((q, index) => (
        <div key={index} style={{ marginBottom: "20px" }}>
          <p>
            {type === "fill"
              ? q.question.replace("___", "_____")
              : type === "idiom"
              ? `Q${index + 1}. "${q.translation}" →`
              : `Q${index + 1}. ${q.question}`}
          </p>
          {type === "fill" ? (
            <input
              type="text"
              placeholder="정답을 입력하세요"
              value={userAnswers[index] || ""}
              onChange={(e) => handleChange(index, e.target.value)}
              style={{ padding: "6px", width: "200px" }}
            />
          ) : (
            <ul style={{ listStyle: "none", padding: 0 }}>
              {q.choices.map((choice, i) => (
                <li key={i} style={{ margin: "4px 0" }}>
                  <label>
                    <input
                      type="radio"
                      name={`q-${type}-${index}`}
                      value={choice}
                      checked={userAnswers[index] === choice}
                      onChange={() => handleChange(index, choice)}
                      style={{ marginRight: "8px" }}
                    />
                    {choice}
                  </label>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
}

function ToeicDay1Quiz() {
  const [answers1, setAnswers1] = useState([]);
  const [answers2, setAnswers2] = useState([]);
  const [answers3, setAnswers3] = useState([]);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    setSubmitted(true);
  };

  const score = (questions, answers) =>
    questions.reduce((acc, q, i) => acc + (answers[i] === q.answer ? 1 : 0), 0);

  return (
    <div style={{ maxWidth: "600px", margin: "0 auto", padding: "20px" }}>
      <h1>TOEIC Day 1 Quiz</h1>
      <QuizSection
        title="1. 단어 뜻 고르기"
        questions={multipleChoice}
        type="multiple"
        userAnswers={answers1}
        setUserAnswers={setAnswers1}
      />
      <QuizSection
        title="2. 빈칸 채우기"
        questions={fillInTheBlank}
        type="fill"
        userAnswers={answers2}
        setUserAnswers={setAnswers2}
      />
      <QuizSection
        title="3. 숙어 해석 맞추기"
        questions={idioms}
        type="idiom"
        userAnswers={answers3}
        setUserAnswers={setAnswers3}
      />
      <button onClick={handleSubmit} style={{ marginTop: "20px" }}>
        제출
      </button>
      {submitted && (
        <div style={{ marginTop: "20px" }}>
          <p>단어 뜻 점수: {score(multipleChoice, answers1)} / {multipleChoice.length}</p>
          <p>빈칸 채우기 점수: {score(fillInTheBlank, answers2)} / {fillInTheBlank.length}</p>
          <p>숙어 해석 점수: {score(idioms, answers3)} / {idioms.length}</p>
        </div>
      )}
    </div>
  );
}

export default ToeicDay1Quiz;