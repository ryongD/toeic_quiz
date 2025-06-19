import { useState } from "react";
import "../index.css";

const multipleChoice = [
  {
    question: "What does 'employee' mean?",
    choices: ["고용하다", "고용인", "고용주", "업무"],
    answer: "고용인",
  },
  {
    question: "Choose the meaning of 'resume'.",
    choices: ["재개하다", "휴식", "종료하다", "예약하다"],
    answer: "재개하다",
  },
  {
    question: "What is the correct meaning of 'department'?",
    choices: ["부서", "개발", "직원", "근무"],
    answer: "부서",
  },
  {
    question: "Pick the correct meaning of 'require'.",
    choices: ["요구하다", "지원하다", "홍보하다", "제출하다"],
    answer: "요구하다",
  },
  {
    question: "What does 'interview' mean?",
    choices: ["면접", "직책", "복사기", "승진"],
    answer: "면접",
  },
];

const fillInTheBlank = [
  {
    question: "He will ___ for the interview tomorrow.",
    answer: "prepare",
  },
  {
    question: "The company is looking to ___ new employees.",
    answer: "hire",
  },
  {
    question: "Please send your ___ by email.",
    answer: "resume",
  },
  {
    question: "The HR department is in charge of ___.",
    answer: "recruitment",
  },
  {
    question: "She was ___ for the job because of her experience.",
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

function QuizSection({ title, questions, type }) {
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
              placeholder="Your answer here"
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
  return (
    <div style={{ maxWidth: "600px", margin: "0 auto", padding: "20px" }}>
      <h1>TOEIC Day 1 Quiz</h1>
      <QuizSection
        title="1. Multiple Choice"
        questions={multipleChoice}
        type="multiple"
      />
      <QuizSection
        title="2. Fill in the Blank"
        questions={fillInTheBlank}
        type="fill"
      />
      <QuizSection
        title="3. Idioms"
        questions={idioms}
        type="idiom"
      />
    </div>
  );
}

export default ToeicDay1Quiz;