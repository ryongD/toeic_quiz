import { shuffle } from "../utils/shuffle";

export const words = [
  { word: "authorize", part: "(동)", meaning: "권한을 부여하다", sentence: "Only managers can ___ refunds.", context: "Only managers can <u>authorize</u> refunds." },
  { word: "comply", part: "(동)", meaning: "준수하다, 따르다", sentence: "Employees must ___ with safety regulations.", context: "Employees must <u>comply</u> with safety regulations." },
  { word: "division", part: "(명)", meaning: "부서, 분할", sentence: "She works in the sales ___ at HQ.", context: "She works in the sales <u>division</u> at HQ." },
  { word: "enforce", part: "(동)", meaning: "시행하다, 집행하다", sentence: "The police ___ the new traffic rules.", context: "The police <u>enforce</u> the new traffic rules." },
  { word: "exception", part: "(명)", meaning: "예외", sentence: "No ___ will be made to this rule.", context: "No <u>exception</u> will be made to this rule." },
  { word: "form", part: "(명)", meaning: "양식, 서식", sentence: "Please fill out this ___.", context: "Please fill out this <u>form</u>." },
  { word: "habit", part: "(명)", meaning: "습관", sentence: "He has a ___ of being late.", context: "He has a <u>habit</u> of being late." },
  { word: "inspection", part: "(명)", meaning: "점검, 검사", sentence: "The factory passed the safety ___.", context: "The factory passed the safety <u>inspection</u>." },
  { word: "obey", part: "(동)", meaning: "복종하다, 따르다", sentence: "Drivers must ___ traffic signals.", context: "Drivers must <u>obey</u> traffic signals." },
  { word: "procedure", part: "(명)", meaning: "절차", sentence: "Please follow the correct ___.", context: "Please follow the correct <u>procedure</u>." },
  { word: "regulation", part: "(명)", meaning: "규정", sentence: "New safety ___ were introduced.", context: "New safety <u>regulations</u> were introduced." },
  { word: "restrict", part: "(동)", meaning: "제한하다, 금지하다", sentence: "The company plans to ___ overtime hours.", context: "The company plans to <u>restrict</u> overtime hours." },
  { word: "rule", part: "(명, 동)", meaning: "규칙 / 지배하다", sentence: "We have a strict dress ___.", context: "We have a strict dress <u>rule</u>." },
  { word: "security", part: "(명)", meaning: "보안, 경비", sentence: "The building has tight ___.", context: "The building has tight <u>security</u>." },
  { word: "standard", part: "(명, 형)", meaning: "기준 / 일반적인, 보통의", sentence: "All products meet the safety ___.", context: "All products meet the safety <u>standard</u>." },
  { word: "strict", part: "(형)", meaning: "엄격한", sentence: "He follows a ___ routine.", context: "He follows a <u>strict</u> routine." },
  { word: "thorough", part: "(형)", meaning: "철저한", sentence: "The report was very ___ and complete.", context: "The report was very <u>thorough</u> and complete." },
  { word: "violation", part: "(명)", meaning: "위반", sentence: "Parking here is a ___ of the rules.", context: "Parking here is a <u>violation</u> of the rules." },
  { word: "obligation", part: "(명)", meaning: "의무, 책임", sentence: "He has a legal ___ to pay child support.", context: "He has a legal <u>obligation</u> to pay child support." },
  { word: "custom", part: "(명)", meaning: "관습, 풍습", sentence: "It’s a local ___ to greet with a bow.", context: "It’s a local <u>custom</u> to greet with a bow." },
];

export const idioms = shuffle([
  { answer: "be subject to", translation: "~의 대상이 되다, ~되기 쉽다" },
  { answer: "comply with", translation: "~을 따르다, 준수하다" },
  { answer: "be consistent with", translation: "~과 일치하다" },
  { answer: "adhere to", translation: "~을 고수하다, 지키다" },
  { answer: "be aware of", translation: "~을 알고 있다" },
  { answer: "be concerned about", translation: "~을 걱정하다" },
  { answer: "account for", translation: "~을 설명하다, 비율을 차지하다" },
  { answer: "in accordance with", translation: "~에 따라서, ~에 부합하게" },
  { answer: "be responsible for", translation: "~에 대해 책임이 있다" },
  { answer: "prohibit A from B", translation: "A가 B하지 못하게 금지하다" },
]);
export const getMarkAfterQuestion = (
  answers: { [key: string]: string },
  key: string,
  correct: string
): string => {
  if (!answers[key]) return "";
  return answers[key] === correct ? "⭕" : "❌";
};