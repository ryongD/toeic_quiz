export const words = [
  { word: "executive", part: "(명, 형)", meaning: "경영진, 임원 / 경영의, 운영의", sentence: "The ___ made the final decision.", context: "The <u>executive</u> made the final decision." },
  { word: "inventory", part: "(명, 명)", meaning: "재고, 재고 목록 / 재고 조사", sentence: "We need to check the ___ .", context: "We need to check the <u>inventory</u> ." },
  { word: "feature", part: "(명, 명)", meaning: "특징, 특색 / 특집 기사", sentence: "This product has a new ___ .", context: "This product has a new <u>feature</u> ." },
  { word: "acknowledge", part: "(동, 동)", meaning: "수신을 인정하다 / 감사를 표현하다", sentence: "Please ___ the receipt of the package.", context: "Please <u>acknowledge</u> the receipt of the package." },
  { word: "voucher", part: "(명, 명)", meaning: "상품권, 바우처 / 영수증, 증명서", sentence: "I used a ___ to buy groceries.", context: "I used a <u>voucher</u> to buy groceries." },
  { word: "estimate", part: "(명, 동)", meaning: "견적서, 평가 / 추산하다, 평가하다", sentence: "We need a cost ___ .", context: "We need a cost <u>estimate</u> ." },
  { word: "resume", part: "(동, 명)", meaning: "재개하다 / 이력서", sentence: "She will ___ work tomorrow.", context: "She will <u>resume</u> work tomorrow." },
  { word: "issue", part: "(명, 동)", meaning: "문제, 이슈 / 발행하다", sentence: "There was an ___ with the delivery.", context: "There was an <u>issue</u> with the delivery." },
  { word: "property", part: "(명, 명)", meaning: "재산, 소유물 / 부동산", sentence: "He owns a lot of ___ .", context: "He owns a lot of <u>property</u> ." },
  { word: "eligible", part: "(형, 형)", meaning: "자격이 있는 / 적격의", sentence: "She is ___ for the promotion.", context: "She is <u>eligible</u> for the promotion." },
  { word: "initiative", part: "(명, 명)", meaning: "주도권 / 새로운 계획, 선도적 행동", sentence: "The company launched a new ___ .", context: "The company launched a new <u>initiative</u> ." },
  { word: "culinary", part: "(형)", meaning: "요리의, 음식의", sentence: "He studied ___ arts in France.", context: "He studied <u>culinary</u> arts in France." },
  { word: "extensive", part: "(형, 형)", meaning: "광범위한 / 대규모의", sentence: "They conducted an ___ search.", context: "They conducted an <u>extensive</u> search." },
  { word: "deposit", part: "(명, 명)", meaning: "예치금, 보증금 / 침전물", sentence: "I made a ___ at the bank.", context: "I made a <u>deposit</u> at the bank." },
  { word: "retail", part: "(명, 형)", meaning: "소매 / 소매의", sentence: "The item is available for ___ .", context: "The item is available for <u>retail</u> ." },
  { word: "affordable", part: "(형)", meaning: "가격이 알맞은", sentence: "They offer ___ housing.", context: "They offer <u>affordable</u> housing." },
  { word: "grant", part: "(동, 동)", meaning: "승인하다 / 수여하다", sentence: "The manager will ___ the request.", context: "The manager will <u>grant</u> the request." },
  { word: "significantly", part: "(부, 부)", meaning: "상당히, 현저하게 / 중요한 정도로, 의미 있게", sentence: "Sales have increased ___ .", context: "Sales have increased <u>significantly</u> ." },
  { word: "reserve", part: "(동, 동)", meaning: "예약하다 / 보유하다", sentence: "I want to ___ a room.", context: "I want to <u>reserve</u> a room." },
  { word: "application", part: "(명, 명)", meaning: "신청, 지원서 / 적용, 응용", sentence: "Submit your ___ by Friday.", context: "Submit your <u>application</u> by Friday." }
];

export const idioms = [
  { answer: "be known for", translation: "~로 알려져 있다" },
  { answer: "fall behind", translation: "늦어지다, 낙오하다; 지불하지 못하다" },
  { answer: "come up with", translation: "~를 생각해내다, 찾아내다" },
  { answer: "adhere to", translation: "~을 고수하다" },
  { answer: "deal with", translation: "~을 다루다, 처리하다" },
  { answer: "comply with", translation: "~을 준수하다" },
  { answer: "focus on", translation: "~에 집중하다" },
  { answer: "result in", translation: "~을 초래하다" },
  { answer: "account for", translation: "~을 설명하다, 차지하다" },
  { answer: "participate in", translation: "~에 참여하다" },
];

export function getMarkAfterQuestion(answers, key, correct) {
  if (!(key in answers)) return "";
  return answers[key] === correct ? "⭕" : "❌";
}