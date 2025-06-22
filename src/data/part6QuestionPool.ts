const part6QuestionPool = [
  {
    passage: `
      To: All Employees
      From: HR Department
      Subject: New Remote Work Policy

      Starting next month, the company will implement a new policy regarding remote work.
      Employees will be allowed to work from home up to two days per week, depending on their department’s needs.
      ___143___ Managers will coordinate with their teams to create weekly schedules.
      In order to ensure accountability, employees must submit a short report by the end of each remote workday.
      ___144___ This report should outline tasks completed and goals for the next in-office day.
      The HR team will review the policy again in three months to determine if any changes are necessary.
    `,
    questions: [
      {
        number: 143,
        question: "Choose the sentence that best fits the blank.",
        choices: [
          "This benefit will be extended to customers.",
          "Employees are required to return company devices.",
          "This change aims to increase flexibility and productivity.",
          "Lunch breaks must be taken at noon."
        ],
        answer: "This change aims to increase flexibility and productivity.",
        explanation: "재택근무 정책의 취지를 설명하는 문장이 필요하므로 '유연성과 생산성 향상'에 대한 문장이 적절합니다.",
        translation: "이번 변화는 유연성과 생산성을 높이는 것을 목표로 합니다."
      },
      {
        number: 144,
        question: "Choose the best connector to complete the sentence.",
        choices: ["Therefore", "In contrast", "On the other hand", "Otherwise"],
        answer: "Therefore",
        explanation: "이전 문장의 요구사항에 대한 결과를 설명하므로 'Therefore'가 자연스럽습니다.",
        translation: "따라서 이 보고서에는 완료한 업무와 다음 사무실 근무일의 목표가 포함되어야 합니다."
      }
    ]
  },
  {
    passage: `
      To: All Sales Representatives
      From: Regional Director
      Subject: Annual Performance Review Process

      As we approach the end of the fiscal year, it is time to begin the annual performance review process.
      Employees are required to submit a self-assessment form by the end of this month.
      ___147___, managers will schedule one-on-one meetings during the first two weeks of next month.
      These meetings are an opportunity to discuss achievements, set goals, and address any concerns.
      Please remember to be honest and constructive in your self-evaluations.
      ___148___
      Thank you for your continued dedication and hard work.
    `,
    questions: [
      {
        number: 147,
        question: "Choose the word that best fits the blank.",
        choices: ["However", "Additionally", "Meanwhile", "Otherwise"],
        answer: "Additionally",
        explanation: "앞 문장과 자연스럽게 이어지는 연결어로 'Additionally(추가로)'가 적절합니다.",
        translation: "'게다가'라는 의미로, 앞의 자기평가 제출과 다음의 미팅 일정이 연결됩니다."
      },
      {
        number: 148,
        question: "Choose the sentence that best fits the blank.",
        choices: [
          "The final results will be posted publicly.",
          "A summary of the discussion will be added to your personnel file.",
          "Only high performers will be evaluated.",
          "The new office layout will be announced."
        ],
        answer: "A summary of the discussion will be added to your personnel file.",
        explanation: "성과 평가 미팅과 관련 있는 내용으로, 논의 요약이 인사기록에 추가된다는 문장이 자연스럽습니다.",
        translation: "논의 요약은 인사 기록 파일에 추가될 것입니다."
      }
    ]
  },
  {
    passage: `Thank you for purchasing the Mercroft 6-Shelf Bookcase. Please follow the instructions and diagrams provided in this manual to construct the product.\n\nThe shipping box serves as an ideal work surface for this process.

  Save all packaging until the bookshelf is complete to avoid ----131---- discarding smaller parts. Prior to ----132----, use the parts and hardware lists to identify and separate each of the pieces included.

  Do not fully tighten all bolts until all parts are in place. Failure to follow these instructions may ----133---- the bolts to become misaligned. If using power tools while putting the product together, please take caution. ----134----.`,
    questions: [
      {
        number: 131,
        question: "Choose the word that best completes the sentence.",
        choices: ["accidentally", "frequently", "formally", "regularly"],
        answer: "accidentally",
        explanation: "조립 과정에서 실수로 부품을 버리는 것을 피하려는 문맥이므로 'accidentally(실수로)'가 적절합니다.",
        translation: "'작은 부품을 실수로 버리는 것'을 피하기 위해서 포장을 완전히 뜯지 말라는 의미입니다."
      },
      {
        number: 132,
        question: "Choose the best noun to fit the sentence.",
        choices: ["assembly", "shipment", "purchase", "maintenance"],
        answer: "assembly",
        explanation: "'조립 전에(=Prior to assembly)'라는 의미로 자연스럽습니다.",
        translation: "조립 전에, 부품과 하드웨어 리스트를 사용해 각 부품을 구분하세요."
      },
      {
        number: 133,
        question: "Choose the correct verb to express a possible result.",
        choices: ["allow", "cause", "let", "help"],
        answer: "cause",
        explanation: "지침을 따르지 않으면 결과적으로 볼트가 어긋나게 될 수 있으므로 'cause'가 가장 적절합니다.",
        translation: "이러한 지침을 따르지 않으면 볼트가 어긋나게 될 수 있습니다."
      },
      {
        number: 134,
        question: "Choose the best closing sentence for the paragraph.",
        choices: [
          "We hope you enjoy using your new furniture.",
          "Misuse of tools may lead to product damage.",
          "The manual is available in multiple languages.",
          "Contact us if any parts are missing."
        ],
        answer: "Misuse of tools may lead to product damage.",
        explanation: "전 문장에서 전동 공구 사용 시 주의를 언급하므로, 도구 오용의 위험을 언급하는 문장이 자연스럽습니다.",
        translation: "도구를 잘못 사용하면 제품이 손상될 수 있습니다."
      }
    ]
  },
  {
    passage: `HEAVENLY CAKES CAN SWEETEN YOUR SPECIAL DAY!

  Heavenly Cakes, Inc. is a Boston-based bakery ----135---- in fancy wedding cakes.\n\nAs part of our expansion, we have recently opened our first branch in New York City.

  ----136----. They range from simple white cakes with black ribbons to elaborate,\n\nmulti-colored creations covered with real flowers. You can also ----137---- your cake by choosing the frosting,\n\nthe filling, the decorations, and the message.

  Our New York City bakery ----138---- at 1123 West 12th Street,\n\njust across the road from the Odoner Theater.`,
    questions: [
      {
        number: 135,
        question: "Choose the correct phrase to complete the sentence.",
        choices: [
          "specializing",
          "specializes",
          "specialized",
          "specialization"
        ],
        answer: "specializing",
        explanation: "'is a bakery specializing in'이라는 표현이 자연스럽고 문법적으로도 맞습니다.",
        translation: "'fancy wedding cakes(화려한 웨딩 케이크)'를 전문으로 하는 빵집이라는 의미입니다."
      },
      {
        number: 136,
        question: "Choose the best sentence to support the paragraph.",
        choices: [
          "We are very proud of our top-notch pastry bakers.",
          "We have developed more than 50 different cake designs.",
          "Plans to open more branches throughout the city are under way.",
          "There are 120,000 customers registered in our rewards program."
        ],
        answer: "We have developed more than 50 different cake designs.",
        explanation: "바로 뒤 문장에서 다양한 케이크 디자인을 언급하므로, 이 문장이 가장 자연스럽습니다.",
        translation: "우리는 50가지 이상의 다양한 케이크 디자인을 개발해 왔습니다."
      },
      {
        number: 137,
        question: "Choose the correct verb for the context.",
        choices: [
          "decorate",
          "customize",
          "delight",
          "imagine"
        ],
        answer: "customize",
        explanation: "케이크의 속재료, 장식, 메시지를 고른다는 의미에서 'customize(맞춤 설정하다)'가 가장 적절합니다.",
        translation: "당신만의 케이크를 맞춤 설정할 수 있습니다."
      },
      {
        number: 138,
        question: "Choose the best verb form to complete the sentence.",
        choices: [
          "located",
          "is locating",
          "is located",
          "has located"
        ],
        answer: "is located",
        explanation: "장소를 설명할 때 수동태인 'is located'를 사용해야 자연스럽습니다.",
        translation: "뉴욕 지점은 1123번지 웨스트 12번가에 위치해 있습니다."
      }
    ]
  },
  {
    passage: `Thank you for your interest in the Green Hills Annual Marathon.\n\nThe event will take place on October 14th and includes both a 10K race and a half-marathon. (136) Participants are encouraged to register early, as spots are limited.\n\n(137) On the day of the event, registration will open at 6 a.m. near the community center. Parking will be available at the west lot.`,
    questions: [
      {
        number: 136,
        text: "Which sentence best fits the blank (136)?",
        choices: [
          "All runners must be 18 years or older.",
          "We expect nearly 3,000 participants this year.",
          "Training sessions are available online.",
          "Children are not allowed in the half-marathon."
        ],
        answer: "We expect nearly 3,000 participants this year.",
        explanation: "행사 개요 설명 후 참가자 수를 언급하는 문맥이 자연스럽습니다.",
        translation: "'이번 해에는 약 3,000명의 참가자가 예상됩니다.'가 문맥에 가장 잘 어울립니다."
      },
      {
        number: 137,
        text: "Choose the correct word to complete the sentence.",
        choices: ["Moreover", "For example", "Instead", "However"],
        answer: "Moreover",
        explanation: "추가적인 정보를 이어주는 연결어로 'Moreover'가 적절합니다.",
        translation: "게다가, 등록은 행사 당일 오전 6시에 열릴 예정입니다."
      }
    ]
  },
  {
    passage: `To: All Employees\nSubject: New Cafeteria Policy\n\nAs part of our wellness initiative, we are updating our cafeteria offerings. The menu will now feature healthier options such as salads, grilled proteins, and fresh fruit. (138) Sugary drinks will be gradually removed from vending machines.\n\n(139) Employees are encouraged to share their feedback through the online survey.`,
    questions: [
      {
        number: 138,
        text: "Which of the following best completes the blank (138)?",
        choices: [
          "These changes were announced without notice.",
          "We apologize for the inconvenience.",
          "The goal is to promote better eating habits.",
          "This will increase overall costs."
        ],
        answer: "The goal is to promote better eating habits.",
        explanation: "건강식 제공과 관련된 취지를 설명하기에 가장 적절한 문장입니다.",
        translation: "목표는 더 나은 식습관을 장려하는 것입니다."
      },
      {
        number: 139,
        text: "Choose the correct word to complete the sentence.",
        choices: ["Therefore", "Because", "Although", "Unless"],
        answer: "Therefore",
        explanation: "'앞 문장 → 행동 유도' 구조로 'Therefore'가 논리적으로 가장 적절합니다.",
        translation: "따라서 직원들은 온라인 설문을 통해 의견을 공유하길 권장합니다."
      }
    ]
  },
  {
    passage: `Thank you for choosing Bluestone Electronics.\n\nWe are committed to providing exceptional service and quality products. (140) Please do not hesitate to reach out to our customer support team for assistance.\n\n(141) Our team is available 24/7 via phone, chat, or email.`,
    questions: [
      {
        number: 140,
        text: "Which sentence best completes the blank (140)?",
        choices: [
          "Our factory is located overseas.",
          "Recent upgrades have improved shipping times.",
          "We recently added new staff to the support team.",
          "Your satisfaction is our top priority."
        ],
        answer: "Your satisfaction is our top priority.",
        explanation: "회사 철학을 강조한 문단에서 '고객 만족'을 언급하는 문장이 가장 자연스럽습니다.",
        translation: "'여러분의 만족은 저희의 최우선 과제입니다.'가 가장 적절합니다."
      },
      {
        number: 141,
        text: "Choose the correct word to complete the sentence.",
        choices: ["Besides", "Nevertheless", "Similarly", "Additionally"],
        answer: "Additionally",
        explanation: "앞 문장에 이어 다른 접촉 수단을 언급하므로 'Additionally'가 적합합니다.",
        translation: "게다가, 저희 팀은 전화, 채팅, 이메일을 통해 24시간 내내 이용 가능합니다."
      }
    ]
  },
  {
    passage: `Welcome to Hillcrest Community Library.\n\nWe are pleased to announce the launch of our new online reservation system. (142) The system allows patrons to reserve books, access digital resources, and manage accounts remotely.\n\n(143) We invite you to try it out and share your thoughts.`,
    questions: [
      {
        number: 142,
        text: "Which sentence best completes the blank (142)?",
        choices: [
          "This is our first year operating a library.",
          "It was developed with user convenience in mind.",
          "Patrons must bring ID for access.",
          "Only fiction books are currently available."
        ],
        answer: "It was developed with user convenience in mind.",
        explanation: "새 시스템 소개 → 사용 편의를 고려했다는 설명이 자연스럽습니다.",
        translation: "이 시스템은 사용자 편의를 고려해 개발되었습니다."
      },
      {
        number: 143,
        text: "Choose the correct word to complete the sentence.",
        choices: ["Furthermore", "Otherwise", "Eventually", "Rather"],
        answer: "Furthermore",
        explanation: "앞의 설명에 추가로 행동을 권유하므로 'Furthermore'가 적절합니다.",
        translation: "더불어, 시스템을 직접 사용해 보시고 의견을 나눠주시기 바랍니다."
      }
    ]
  },
  {
    passage: `Dear Team,

  As we prepare for the end-of-year performance reviews, I would like to outline the steps we will be following. (144) All department heads are expected to submit their preliminary evaluations by next Monday.

  (145) This will allow HR sufficient time to compile data and address any discrepancies before final reports are issued.

  (146) In addition, managers should schedule one-on-one meetings with each team member to provide feedback and discuss goals for the coming year.

  (147) Thank you for your cooperation in making this process efficient and constructive.`,
    questions: [
      {
        number: 144,
        text: "Choose the correct word to complete the sentence.",
        choices: ["However", "Because", "Firstly", "Meanwhile"],
        answer: "Firstly",
        explanation: "절차 안내 시작 → 'Firstly'로 시작하는 것이 자연스럽습니다.",
        translation: "'우선', 각 부서장은 다음 주 월요일까지 1차 평가를 제출해야 합니다."
      },
      {
        number: 145,
        text: "Which sentence best fits in blank (145)?",
        choices: [
          "Please avoid using personal opinions in evaluations.",
          "These evaluations will not be shared with employees.",
          "The deadline for all annual leave requests has passed.",
          "Timely submission is critical to avoid processing delays."
        ],
        answer: "Timely submission is critical to avoid processing delays.",
        explanation: "HR 데이터 처리 → '제출 시한 준수' 강조가 흐름상 맞습니다.",
        translation: "시기 적절한 제출은 처리 지연을 방지하는 데 매우 중요합니다."
      },
      {
        number: 146,
        text: "Choose the best word to complete the sentence.",
        choices: ["Therefore", "Moreover", "Although", "Instead"],
        answer: "Moreover",
        explanation: "이전 문장에 더해 추가적인 요구사항 제시 → 'Moreover'가 적절.",
        translation: "게다가, 매니저들은 팀원들과 1:1 면담을 예약해야 합니다."
      },
      {
        number: 147,
        text: "Which sentence best fits the closing tone?",
        choices: [
          "Failure to comply will result in penalties.",
          "You may ignore this if already submitted.",
          "Let us know if you are unavailable.",
          "Your participation is greatly appreciated."
        ],
        answer: "Your participation is greatly appreciated.",
        explanation: "공손한 마무리 문장으로 가장 적절함.",
        translation: "이번 과정이 원활하고 건설적으로 진행되도록 협조해 주셔서 감사합니다."
      }
    ]
  },
  {
    passage: `To all employees,

  Our annual company picnic will take place on Saturday, September 16 at Riverside Park.
  (148) There will be games, food trucks, and a raffle with exciting prizes.

  (149) Employees may bring their families, and children will have access to special play areas.

  (150) Please RSVP by September 10 using the online form sent to your email.

  (151) We hope to see everyone there!`,
    questions: [
      {
        number: 148,
        text: "Choose the best sentence to insert at (148).",
        choices: [
          "The cafeteria will be closed for renovation.",
          "The weather forecast predicts rain.",
          "We are looking forward to an enjoyable time together.",
          "Some employees are taking vacations in September."
        ],
        answer: "We are looking forward to an enjoyable time together.",
        explanation: "행사 정보 → 기대감 표현이 자연스럽습니다.",
        translation: "모두가 함께 즐거운 시간을 보내기를 기대합니다."
      },
      {
        number: 150,
        text: "Choose the correct word to complete the sentence.",
        choices: ["attend", "attending", "attendance", "attended"],
        answer: "attend",
        explanation: "'RSVP to + 동사원형'의 구조로 인해 'attend'가 적절합니다.",
        translation: "참석 여부는 9월 10일까지 온라인 양식을 통해 알려주세요."
      },
      {
        number: 151,
        text: "Which sentence is most appropriate to end the announcement?",
        choices: [
          "This message is for managers only.",
          "We will announce winners next week.",
          "We hope to see everyone there!",
          "Bring your employee ID card."
        ],
        answer: "We hope to see everyone there!",
        explanation: "이벤트 공지의 자연스러운 마무리 인사입니다.",
        translation: "모두와 함께 하길 기대합니다!"
      }
    ]
  },
  {
    passage: `City officials have announced a new initiative to plant 10,000 trees across urban areas.
  (152) The program aims to improve air quality and reduce heat in densely populated neighborhoods.

  (153) Residents are encouraged to participate by volunteering for tree-planting events.`,
    questions: [
      {
        number: 152,
        text: "Choose the best transition word.",
        choices: ["Similarly", "As a result", "In contrast", "Specifically"],
        answer: "Specifically",
        explanation: "구체적인 내용 소개에 적합한 연결어입니다.",
        translation: "구체적으로, 이 프로그램은 대기질을 개선하고 열섬 현상을 줄이는 것을 목표로 합니다."
      },
      {
        number: 153,
        text: "Choose the best sentence to insert at (153).",
        choices: [
          "The city council approved the budget yesterday.",
          "Several schools are on vacation this month.",
          "Participation is voluntary but highly encouraged.",
          "Volunteers will receive gardening tools and lunch."
        ],
        answer: "Volunteers will receive gardening tools and lunch.",
        explanation: "참여 권장 → 참여 유인 → 보상 내용이 자연스럽습니다.",
        translation: "자원봉사자는 원예 도구와 점심을 제공받게 됩니다."
      }
    ]
  },
  {
    passage: `
To: All Staff
Subject: Office Renovation Update

The office renovation project will begin on June 5 and is expected to take two weeks.
----147---- Please remove all personal belongings from your desks by the end of the day on June 4.

During this period, all employees will be temporarily relocated to the 5th floor workspace.
----148---- Meeting rooms A and B will remain accessible throughout the renovation.

Thank you for your cooperation.`,
    questions: [
      {
        number: 147,
        question: "Which sentence would best fit at blank 147?",
        choices: [
          "It may affect access to the parking garage.",
          "This will allow contractors to work efficiently.",
          "New office furniture is being ordered.",
          "The schedule is still under review."
        ],
        answer: "This will allow contractors to work efficiently.",
        explanation: "개인 물품 제거 → 공사 효율성 향상이라는 자연스러운 인과 관계.",
        translation: "이것은 시공업자들이 효율적으로 작업할 수 있도록 해줍니다."
      },
      {
        number: 148,
        question: "Choose the best connector for blank 148.",
        choices: ["Moreover", "Otherwise", "Therefore", "Meanwhile"],
        answer: "Meanwhile",
        explanation: "동시 발생 사건을 연결할 때 'Meanwhile' 사용이 적절.",
        translation: "'한편으로는'의 의미로 동시에 벌어지는 다른 사실을 연결합니다."
      }
    ]
  },

  {
    passage: `
City officials announced yesterday that a new recycling facility will open in the downtown area next month.
The facility is expected to significantly reduce waste processing costs and ----149----.

----150---- It will also create over 50 new jobs for local residents.`,
    questions: [
      {
        number: 149,
        question: "Choose the best completion for the blank.",
        choices: [
          "enhancing community participation",
          "enhanced community participation",
          "enhance community participation",
          "to enhancing community participation"
        ],
        answer: "enhance community participation",
        explanation: "'to' 없이 'and + 동사원형' 병렬 구조이므로 'enhance'가 맞습니다.",
        translation: "'and' 뒤에 동사원형이 오므로 'enhance'가 올바른 형태입니다."
      },
      {
        number: 150,
        question: "Which sentence fits best at 150?",
        choices: [
          "A public hearing was held last week.",
          "Several projects have been canceled.",
          "Community groups raised objections.",
          "This benefit is welcomed by many."
        ],
        answer: "This benefit is welcomed by many.",
        explanation: "일자리 창출 → 긍정적 반응으로 이어지는 자연스러운 흐름.",
        translation: "이 혜택은 많은 사람들에게 환영받고 있습니다."
      }
    ]
  },

  {
    passage: `
Attention Sales Team,

We will hold a strategy meeting this Friday at 3 p.m. in Conference Room C.
The purpose is to ----151---- our goals for the upcoming quarter and discuss new outreach methods.

----152---- Be sure to bring your updated reports and suggestions for improvement.`,
    questions: [
      {
        number: 151,
        question: "Choose the word that best completes the sentence.",
        choices: ["review", "reviewed", "reviewing", "reviews"],
        answer: "review",
        explanation: "to + 동사원형 구조이므로 'review'가 정답입니다.",
        translation: "'to review'는 '~하기 위해'라는 의미의 부정사 용법입니다."
      },
      {
        number: 152,
        question: "Which sentence fits best at 152?",
        choices: [
          "We will begin promptly at 2 p.m.",
          "The meeting may be canceled.",
          "This will help ensure a productive discussion.",
          "Snacks will be provided afterwards."
        ],
        answer: "This will help ensure a productive discussion.",
        explanation: "보고서 지참 → 생산적인 논의 보장이라는 연결이 자연스럽습니다.",
        translation: "이것은 생산적인 논의를 보장하는 데 도움이 될 것입니다."
      }
    ]
  },
  {
    passage: `
  We are excited to announce the grand opening of our newest branch in downtown Seattle.
  ----148----, the ribbon-cutting ceremony will take place at 10 a.m. on Monday.
  We hope to see many familiar faces joining us for the occasion.`,
    questions: [
      {
        number: "148",
        question: "Choose the sentence that best fits the blank.",
        choices: [
          "We are currently hiring new staff.",
          "As a result, many employees will relocate.",
          "To mark this event",
          "The headquarters remains unchanged."
        ],
        answer: "To mark this event",
        explanation: "'To mark this event'은 행사에 앞서 리본 커팅식 언급에 가장 자연스럽게 연결됩니다.",
        translation: "이 행사를 기념하기 위해, 리본 커팅식은 월요일 오전 10시에 열릴 예정입니다."
      }
    ]
  },
  {
    passage: `
  Due to the increased demand during the holiday season, the shipping department is experiencing delays.
  ----149----, customers are encouraged to place their orders early to avoid inconvenience.
  All employees are working overtime to ensure timely deliveries.`,
    questions: [
      {
        number: "149",
        question: "Choose the correct connector.",
        choices: ["Therefore", "However", "In contrast", "Meanwhile"],
        answer: "Therefore",
        explanation: "지연 발생 → 고객에게 조기 주문 권장: 인과관계로 'Therefore'가 자연스럽습니다.",
        translation: "따라서 고객들은 불편을 피하기 위해 미리 주문할 것을 권장합니다."
      }
    ]
  },
  {
    passage: `
  We have recently updated our privacy policy to comply with new regulations.
  ----150----, we have made changes to the way we collect and store user information.
  Please review the new policy on our website for more details.`,
    questions: [
      {
        number: "150",
        question: "Choose the best transition.",
        choices: [
          "As a consequence",
          "In addition",
          "As a result",
          "Furthermore"
        ],
        answer: "As a result",
        explanation: "정책 업데이트 → 수집 및 저장 방식 변경이라는 인과 관계이므로 'As a result'가 적절합니다.",
        translation: "그 결과, 사용자 정보를 수집하고 저장하는 방식에 변경이 있었습니다."
      }
    ]
  },
  {
    passage: `
  The Human Resources department recently launched a wellness initiative.
  Employees were encouraged to participate in weekly activities such as yoga and guided meditation.
  ----151----
  Participation rates have steadily increased since the program began.`,
    questions: [
      {
        number: "151",
        question: "Which sentence fits best in the blank?",
        choices: [
          "The cafeteria has updated its menu.",
          "Several team members submitted vacation requests.",
          "The program aims to reduce stress and promote healthy habits.",
          "All activities are now held online."
        ],
        answer: "The program aims to reduce stress and promote healthy habits.",
        explanation: "전후 문장 내용과 자연스럽게 연결되는 목적 설명이 적절합니다.",
        translation: "이 프로그램은 스트레스를 줄이고 건강한 습관을 장려하는 것을 목표로 합니다."
      }
    ]
  },
  {
    passage: `
  Our new customer support platform was launched last month.
  It features a more intuitive interface and faster response times.
  ----152----
  Customers have responded positively to the changes so far.`,
    questions: [
      {
        number: "152",
        question: "Choose the correct transition.",
        choices: ["In contrast", "As a result", "Despite this", "Nevertheless"],
        answer: "As a result",
        explanation: "기능 향상 → 긍정적 반응이라는 인과 관계로 'As a result'가 가장 자연스럽습니다.",
        translation: "그 결과, 고객들은 이러한 변화에 긍정적으로 반응하고 있습니다."
      }
    ]
  },
  {
    passage: `
  Thank you for submitting your manuscript to our editorial team.
  After a thorough review, we regret to inform you that your article was not selected for publication.
  ----153---- we appreciate your effort and encourage you to submit future work.
  ----154---- articles that focus on current trends tend to receive more favorable evaluations.`,
    questions: [
      {
        number: "153",
        question: "Choose the correct word.",
        choices: ["Nevertheless", "Because", "Moreover", "Although"],
        answer: "Nevertheless",
        explanation: "부정적 통보 뒤 긍정적 평가 → '그럼에도 불구하고'가 적절합니다.",
        translation: "그럼에도 불구하고 귀하의 노력에 감사드리며, 향후 작업을 제출하시길 권장합니다."
      },
      {
        number: "154",
        question: "Choose the best connector.",
        choices: ["As a result", "Therefore", "In general", "However"],
        answer: "In general",
        explanation: "일반적인 경향 설명에는 'In general'이 가장 적합합니다.",
        translation: "일반적으로 현재 트렌드에 집중된 글이 더 좋은 평가를 받는 경향이 있습니다."
      }
    ]
  },
  {
    passage: `
  The company recently transitioned to a hybrid work model.
  Employees are expected to be in the office three days a week.
  ----155----
  This new policy aims to maintain collaboration while allowing flexibility.`,
    questions: [
      {
        number: "155",
        question: "Which sentence best connects the ideas?",
        choices: [
          "Many employees have requested additional vacation days.",
          "Managers held several workshops to ensure a smooth transition.",
          "Sales targets for the quarter were exceeded.",
          "All employee schedules are now synchronized."
        ],
        answer: "Managers held several workshops to ensure a smooth transition.",
        explanation: "새로운 근무 정책 시행과의 자연스러운 연결이 되는 문장입니다.",
        translation: "관리자들은 원활한 전환을 위해 여러 워크숍을 개최했습니다."
      }
    ]
  },
  {
    passage: `
  In order to better serve our international customers, the website has been translated into several languages.
  The most recent addition is the Japanese version.
  ----156----
  We are also planning to add Portuguese and Arabic in the coming months.`,
    questions: [
      {
        number: "156",
        question: "Select the most logical sentence.",
        choices: [
          "This change was implemented overnight.",
          "Feedback from Japanese users has been overwhelmingly positive.",
          "There was a delay due to server maintenance.",
          "All payments are now processed in local currencies."
        ],
        number: "Feedback from Japanese users has been overwhelmingly positive.",
        explanation: "새로운 버전 추가와 자연스럽게 이어지는 반응 설명입니다.",
        translation: "일본 사용자들로부터의 피드백은 매우 긍정적이었습니다."
      }
    ]
  },
  {
    passage: `
  Thank you for attending the annual shareholders' meeting.
  The CEO discussed several upcoming changes and strategies.
  ----157---- a new sustainability initiative was introduced, and ----158---- plans for global expansion were unveiled.`,
    questions: [
      {
        number: "157",
        question: "Choose the best phrase to begin the sentence.",
        choices: ["In addition", "Instead", "For example", "After all"],
        answer: "In addition",
        explanation: "새로운 항목의 나열이므로 추가 의미의 접속사 'In addition'이 적절합니다.",
        translation: "게다가 새로운 지속 가능성 계획이 발표되었습니다."
      },
      {
        number: "158",
        question: "Choose the best word to continue the list.",
        choices: ["similarly", "however", "yet", "before"],
        answer: "similarly",
        explanation: "동일한 범주의 항목 추가 → 'similarly'가 자연스럽습니다.",
        translation: "마찬가지로, 글로벌 확장 계획도 공개되었습니다."
      }
    ]
  },
  {
    passage: `
  ----159----
  We are pleased to announce that the annual Employee Recognition Ceremony will be held on **June 25th at 4:00 p.m.** in the main auditorium.

  All employees are invited to attend and celebrate the outstanding achievements of their colleagues.

  ----160----
  To nominate a fellow employee, please complete the online form by **June 10th**. You may nominate up to two individuals per department.

  Refreshments and snacks will be provided after the ceremony. We look forward to seeing you there.

  ----161----

  Human Resources Department
  `,
    questions: [
      {
        number: "159",
        question: "Choose the best opening sentence for the announcement.",
        choices: [
          "Please remember to clock in and out daily.",
          "The annual performance evaluations are postponed.",
          "Mark your calendars!",
          "There will be no meeting this Friday."
        ],
        answer: "Mark your calendars!",
        explanation: "공지사항의 시작으로 적절한 문장입니다.",
        translation: "달력에 표시하세요!"
      },
      {
        number: "160",
        question: "Choose the best sentence to continue.",
        choices: [
          "Nominations are not required.",
          "Late submissions will not be accepted.",
          "Winners will be announced next year.",
          "You do not need to RSVP."
        ],
        answer: "Late submissions will not be accepted.",
        explanation: "기한 안내 후에는 마감 이후는 불가하다는 내용이 자연스럽습니다.",
        translation: "기한 이후의 제출은 허용되지 않습니다."
      },
      {
        number: "161",
        question: "Choose the most appropriate closing line.",
        choices: [
          "Please bring your laptops.",
          "Thank you for your continued dedication.",
          "Don’t forget to recycle your cups.",
          "This email is confidential."
        ],
        answer: "Thank you for your continued dedication.",
        explanation: "행사 공지의 마무리로 적합한 감사 표현입니다.",
        translation: "지속적인 헌신에 감사드립니다."
      }
    ]
  },
  {
    passage: `
  Dear Valued Customer,

  Thank you for choosing TechVision for your electronics needs.

  We are excited to introduce our new loyalty rewards program, which begins this month.
  ----162----
  By joining the program, you can earn points for every purchase and redeem them for discounts on future orders.

  ----163----
  To enroll, simply log in to your account and click on the "Loyalty Program" tab.

  You’ll also receive 500 bonus points for signing up before the end of this month.

  ----164----

  Sincerely,
  Customer Service Team
  TechVision Inc.
  `,
    questions: [
      {
        number: "162",
        question: "Choose the best introductory sentence for the new program.",
        choices: [
          "This program was developed based on customer feedback.",
          "All orders are shipped within 48 hours.",
          "Our offices will be closed next week.",
          "Prices may vary by region."
        ],
        answer: "This program was developed based on customer feedback.",
        explanation: "고객 프로그램 도입 배경을 설명하는 문장이 적절합니다.",
        translation: "이 프로그램은 고객 피드백을 바탕으로 개발되었습니다."
      },
      {
        number: "163",
        question: "Which sentence best maintains the flow?",
        choices: [
          "Some items are not eligible for return.",
          "Employees are not allowed to participate.",
          "Registration is free and takes less than a minute.",
          "Customers must call to cancel their membership."
        ],
        answer: "Registration is free and takes less than a minute.",
        explanation: "회원 가입 방법을 소개하는 문맥과 어울립니다.",
        translation: "등록은 무료이며 1분도 채 걸리지 않습니다."
      },
      {
        number: "164",
        question: "Choose the most appropriate closing sentence.",
        choices: [
          "Visit our website to learn more about the program.",
          "Contact your supervisor for more details.",
          "Our product manuals are available online.",
          "Shipping costs are non-refundable."
        ],
        number: "Visit our website to learn more about the program.",
        explanation: "고객을 위한 안내를 마무리하는 문장으로 적합합니다.",
        translation: "프로그램에 대해 자세히 알아보려면 웹사이트를 방문하세요."
      }
    ]
  },
  {
    passage: `Dear Mr. Thompson,

  Thank you for your recent inquiry about our corporate training programs. We ----148---- offer customized workshops to meet the unique needs of each organization.

  Our team ----149---- experienced trainers who specialize in leadership development, communication, and project management.

  If you're interested in a consultation, please ----150---- us at your convenience.

  Sincerely,
  Nora Jennings
  Training Coordinator`,
    questions: [
      {
        number: 148,
        question: "Choose the correct word.",
        choices: ["provide", "provides", "providing", "to provide"],
        answer: "provide",
        explanation: "주어는 'we'이므로 동사 원형 ‘provide’가 적절합니다.",
        translation: "저희는 귀사의 요구에 맞춘 맞춤형 워크숍을 제공합니다."
      },
      {
        number: 149,
        question: "Choose the correct word.",
        choices: ["is", "has", "are", "have"],
        answer: "has",
        explanation: "'Our team'은 단수로 취급되며 'has'가 적절합니다.",
        translation: "저희 팀은 리더십 개발, 커뮤니케이션 등에 특화된 경험 많은 강사진으로 구성되어 있습니다."
      },
      {
        number: 150,
        question: "Choose the correct word.",
        choices: ["contacting", "contact", "contacts", "to contact"],
        answer: "contact",
        explanation: "'please + 동사 원형' 구조에서 'contact'가 맞습니다.",
        translation: "상담에 관심이 있으시면 편하실 때 연락 주십시오."
      }
    ]
  },
  {
    passage: `To: All Staff
  Subject: Office Renovation Update

  Dear Team,

  As part of our efforts to improve the work environment, the main office will undergo renovations beginning next Monday.

  Construction work is scheduled to last for three weeks. During this time, employees will be temporarily relocated to the west wing.

  Please ----151---- your personal items from your desks before Friday afternoon.

  Temporary seating arrangements ----152---- be provided by the administration team.

  We apologize for any inconvenience and appreciate your cooperation. If you have any questions, feel free to reach out to Facilities Management.

  Sincerely,
  Jared Kim
  Operations Manager`,
    questions: [
      {
        number: 151,
        question: "Choose the correct word.",
        choices: ["remove", "removing", "removed", "to remove"],
        answer: "remove",
        explanation: "'Please + 동사원형' 구조이므로 'remove'가 맞습니다.",
        translation: "금요일 오후 전까지 책상 위의 개인 물품을 치워주시기 바랍니다."
      },
      {
        number: 152,
        question: "Choose the correct word.",
        choices: ["has", "will", "must", "are"],
        answer: "will",
        explanation: "미래의 조치에 대해 설명하므로 조동사 'will'이 적절합니다.",
        translation: "임시 좌석 배치는 운영팀에 의해 제공될 예정입니다."
      },
      {
        number: 153,
        question: "Choose the best option to complete the passage logically.",
        choices: [
          "The renovation was completed last year.",
          "The staff requested more parking space.",
          "Your patience during this time is greatly appreciated.",
          "Lunch breaks will be extended to one hour."
        ],
        answer: "Your patience during this time is greatly appreciated.",
        explanation: "마무리 문구로 자연스럽게 이어지는 문장은 감사를 표현하는 내용입니다.",
        translation: "이 기간 동안의 여러분의 인내에 진심으로 감사드립니다."
      }
    ]
  },
  {
    passage: `To: Project Team
  Subject: Upcoming Strategy Meeting

  Dear All,

  I hope this message finds you well. As we approach the final quarter, it's important that we align on key initiatives for the next fiscal year.

  A strategy meeting has been scheduled for Thursday, October 12th, at 10:00 a.m. in Conference Room B.

  ----154---- the agenda includes updates from each department, goal-setting discussions, and budget planning.

  All team leads are expected to prepare a brief presentation.

  Additionally, please ----155---- any materials or data you want to share during the session by Tuesday evening.

  If you are unable to attend in person, we will provide a video link to join remotely. Your input will be essential in shaping next year’s roadmap.

  Let’s work together to make this session productive and insightful.

  Best regards,
  Minji Park
  Strategic Planning Manager`,
    questions: [
      {
        number: 154,
        question: "Choose the correct transition phrase.",
        choices: ["In particular,", "As a result,", "For example,", "Before then,"],
        answer: "In particular,",
        explanation: "구체적으로 회의 의제를 설명하므로 'In particular'이 자연스럽습니다.",
        translation: "'특히'라는 의미의 전환어로 의제 목록을 소개하는 역할을 합니다."
      },
      {
        number: 155,
        question: "Choose the correct verb form.",
        choices: ["submit", "submitting", "submitted", "submits"],
        answer: "submit",
        explanation: "'please + 동사원형' 구조이므로 'submit'이 정답입니다.",
        translation: "회의 중 공유할 자료는 화요일 저녁까지 제출해 주세요."
      },
      {
        number: 156,
        question: "Choose the sentence that best completes the passage.",
        choices: [
          "Snacks will be provided afterward.",
          "Let me know if you have questions about vacation days.",
          "A follow-up survey will be sent after the meeting.",
          "The cafeteria is closed on Thursdays."
        ],
        answer: "A follow-up survey will be sent after the meeting.",
        explanation: "회의 종료 후 피드백을 요청하는 문장이 흐름상 가장 자연스럽습니다.",
        translation: "회의 후 후속 설문이 발송될 예정입니다."
      }
    ]
  },
  {
    passage: `To: All Staff
  Subject: Office Renovation Schedule

  We are pleased to announce that the long-awaited renovation of our main office will begin next month.
  ----157----, there will be construction noise and limited access to certain areas during this period.

  The renovation is expected to be completed by mid-December. Employees are encouraged to work from home when possible.

  Please ----158---- your team leaders if you have concerns about workspace availability. We appreciate your cooperation during this time.`,
    questions: [
      {
        number: 157,
        question: "Choose the best transition.",
        choices: ["For instance", "As a result", "However", "Therefore"],
        answer: "However",
        explanation: "긍정적인 소식 후 불편사항이 이어지므로 'However'가 자연스럽습니다.",
        translation: "'하지만'이라는 전환어가 흐름상 적절합니다."
      },
      {
        number: 158,
        question: "Choose the correct verb form.",
        choices: ["notifying", "notified", "notifies", "notify"],
        answer: "notify",
        explanation: "'Please + 동사원형' 구조로 'notify'가 맞습니다.",
        translation: "걱정되는 사항이 있다면 팀 리더에게 알려주시기 바랍니다."
      }
    ]
  },
  {
    passage: `TechNova Inc. announced yesterday that it would launch its latest smartwatch model this fall.
  ----159---- impressive battery life, the device features a new health-tracking system and an upgraded user interface.

  The product will be available in select markets in early October.
  The company is ----160---- a strong marketing campaign to support the release.`,
    questions: [
      {
        number: 159,
        question: "Choose the best phrase to complete the sentence.",
        choices: ["In addition to", "Instead of", "Rather than", "According to"],
        answer: "In addition to",
        explanation: "'기능 추가' 설명이므로 'In addition to'가 적절합니다.",
        translation: "긴 배터리 수명 외에도 새로운 기능들이 포함되어 있다는 의미입니다."
      },
      {
        number: 160,
        question: "Choose the best verb phrase.",
        choices: ["launching", "launched", "launch", "to launch"],
        answer: "launching",
        explanation: "'is + 동명사' 구조로 진행 중인 활동을 표현합니다.",
        translation: "회사는 출시를 지원하기 위해 강력한 마케팅 캠페인을 진행 중입니다."
      }
    ]
  },
  {
    passage: `Dear Valued Customer,

  Thank you for choosing SkyFly Airlines. We want to inform you about recent updates to our baggage policy.

  ----161----, passengers in economy class are now allowed one free checked bag up to 23kg.

  Passengers can also purchase additional baggage allowance through our website at a discounted rate.

  We hope this change ----162---- your travel planning and enhances your flying experience.`,
    questions: [
      {
        number: 161,
        question: "Choose the best transition.",
        choices: ["On the contrary", "For example", "Effective immediately", "Despite this"],
        answer: "Effective immediately",
        explanation: "'즉시 시행됨'을 전달하는 문장으로 적절한 표현입니다.",
        translation: "'즉시 적용됨'이라는 전환어가 흐름에 맞습니다."
      },
      {
        number: 162,
        question: "Choose the correct verb.",
        choices: ["will ease", "easing", "eased", "has ease"],
        answer: "will ease",
        explanation: "미래 상황을 예상하므로 'will + 동사원형' 구조가 필요합니다.",
        translation: "이 변경 사항이 귀하의 여행 계획에 도움이 되길 바랍니다."
      }
    ]
  },
  {
    passage: `To: All Employees
  Subject: Cafeteria Closure

  Please note that the company cafeteria will be closed this Friday due to maintenance work.
  ----163----, employees are encouraged to bring their own lunch or make alternate arrangements.`,
    questions: [
      {
        number: 163,
        question: "Choose the best transition word.",
        choices: ["For example", "Meanwhile", "Therefore", "Nevertheless"],
        answer: "Therefore",
        explanation: "'그래서'라는 인과 관계 연결어가 적절합니다.",
        translation: "따라서 직원들은 도시락을 지참하거나 다른 식사 계획을 세우는 것이 좋습니다."
      }
    ]
  },
  {
    passage: `Our annual performance review will begin next week.
  Supervisors will schedule meetings with each employee individually.
  ----164----, all team members should complete the self-assessment form by Friday.

  The form is available on the HR portal.
  If you have any questions, please ----165---- the HR department.`,
    questions: [
      {
        number: 164,
        question: "Choose the best connecting phrase.",
        choices: ["In conclusion", "As such", "For instance", "On the other hand"],
        answer: "As such",
        explanation: "'앞 내용의 결과'로서 'As such'가 자연스럽습니다.",
        translation: "그러므로 모든 팀원은 자기 평가서를 작성해야 합니다."
      },
      {
        number: 165,
        question: "Choose the correct verb.",
        choices: ["contact", "contacts", "contacted", "contacting"],
        answer: "contact",
        explanation: "'please + 동사원형' 구조입니다.",
        translation: "문의사항이 있을 경우 인사부에 문의해 주세요."
      }
    ]
  },
  {
    passage: `The sales team held a meeting yesterday to discuss the upcoming product launch.
  A revised marketing strategy was presented and approved by the managers.

  ----166----, a new advertising campaign will begin next month targeting younger audiences.

  All departments involved in the launch are required to submit their timelines by next Friday.
  Please ensure all promotional materials are finalized ----167----.
  Managers should also ----168---- potential issues that may arise during the launch.`,
    questions: [
      {
        number: 166,
        question: "Choose the best transition.",
        choices: ["However", "As a result", "Instead", "Even though"],
        answer: "As a result",
        explanation: "결과적으로 광고 캠페인이 시작된다는 의미입니다.",
        translation: "그 결과, 젊은 소비자를 겨냥한 새로운 광고 캠페인이 다음 달 시작됩니다."
      },
      {
        number: 167,
        question: "Choose the correct expression of deadline.",
        choices: ["by the time", "ahead of schedule", "on time", "in advance"],
        answer: "in advance",
        explanation: "‘사전에 완료’의 의미로 'in advance'가 자연스럽습니다.",
        translation: "모든 홍보 자료는 사전에 완료해 주세요."
      },
      {
        number: 168,
        question: "Choose the correct verb.",
        choices: ["anticipate", "anticipates", "anticipated", "anticipating"],
        answer: "anticipate",
        explanation: "'should + 동사원형' 구조입니다.",
        translation: "출시 중 발생할 수 있는 문제를 미리 예측해야 합니다."
      }
    ]
  },
  {
    passage: `Dear Mr. Leonard,

  Thank you for your recent inquiry regarding our corporate training programs.
  We offer both in-person and online workshops designed to enhance employee productivity.

  ----169---- these workshops are flexible, they can be tailored to suit your company’s specific needs.

  Our online platform allows participants to access materials at their convenience.
  Additionally, live sessions can be scheduled according to your preferred timetable.
  We recommend scheduling at least three weeks in advance to ----170---- availability.

  Please ----171---- the attached brochure for a detailed list of available courses.
  If you would like to proceed with a booking, our representative will ----172---- you shortly.`,
    questions: [
      {
        number: 169,
        question: "Choose the best linking phrase.",
        choices: ["Although", "Since", "Unless", "Even if"],
        answer: "Since",
        explanation: "'유연하기 때문에'라는 의미로 'Since'가 적절합니다.",
        translation: "이 워크숍들은 유연하기 때문에 귀사의 필요에 맞게 조정될 수 있습니다."
      },
      {
        number: 170,
        question: "Choose the best word to complete the sentence.",
        choices: ["ensure", "ensures", "ensured", "ensuring"],
        answer: "ensure",
        explanation: "'to + 동사원형' 구조로 'ensure'가 맞습니다.",
        translation: "가능한 날짜 확보를 위해 최소 3주 전에 일정을 예약하시는 것을 권장합니다."
      },
      {
        number: 171,
        question: "Choose the correct verb.",
        choices: ["review", "reviews", "reviewed", "reviewing"],
        answer: "review",
        explanation: "'Please + 동사원형' 구조입니다.",
        translation: "첨부된 안내 책자를 검토해 주세요."
      },
      {
        number: 172,
        question: "Choose the correct future verb form.",
        choices: ["be contacting", "contacts", "contact", "has contacted"],
        answer: "contact",
        explanation: "'will + 동사원형'으로 미래를 표현합니다.",
        translation: "예약을 진행하고자 하신다면 담당자가 곧 연락드릴 예정입니다."
      }
    ]
  },
  {
    passage: `Notice to All Visitors:
  Our museum will be undergoing renovations from October 15 to November 30.
  ----173----, some exhibitions may be temporarily closed or relocated.`,
    questions: [
      {
        number: 173,
        question: "Choose the best transition word.",
        choices: ["In fact", "However", "As a result", "Furthermore"],
        answer: "As a result",
        explanation: "'공사로 인해 전시가 중단된다'는 인과관계가 자연스럽습니다.",
        translation: "그 결과, 일부 전시가 임시 폐쇄되거나 이동될 수 있습니다."
      }
    ]
  },
  {
    passage: `Dear Marketing Team,

  I hope this message finds you well.
  We recently completed the initial round of user testing for our new app design.

  The feedback was mostly positive, but several users mentioned issues with the navigation menu.
  ----174----, the development team has agreed to revise the layout based on this feedback.

  We aim to release an updated prototype by next Friday.
  Please ----175---- any additional suggestions you may have by this Wednesday.`,
    questions: [
      {
        number: 174,
        question: "Choose the best transition.",
        choices: ["Despite that", "For that reason", "At the same time", "In contrast"],
        answer: "For that reason",
        explanation: "'피드백 → 수정'의 인과 흐름에서 'For that reason'이 자연스럽습니다.",
        translation: "그 이유로 개발팀은 레이아웃을 수정하기로 했습니다."
      },
      {
        number: 175,
        question: "Choose the correct verb form.",
        choices: ["submit", "submits", "submitted", "submitting"],
        answer: "submit",
        explanation: "'please + 동사원형' 구조에 맞습니다.",
        translation: "추가 제안이 있다면 이번 주 수요일까지 제출해 주세요."
      }
    ]
  },
  {
    passage: `City Council Approves Budget for Public Park Improvements

  The city council has voted to allocate $2 million for renovations in major public parks.
  These improvements include installing new playgrounds and upgrading walking paths.
  ----176----, a large portion of the funds will be used to improve lighting and safety features.

  Construction is set to begin in early spring and last approximately six months.
  The parks department is working closely with local contractors to ----177---- quality standards are maintained throughout the project.

  Residents are encouraged to attend an open meeting next Thursday to ----178---- their opinions and suggestions.`,
    questions: [
      {
        number: 176,
        question: "Choose the best connecting phrase.",
        choices: ["In the meantime", "As a result", "In particular", "Meanwhile"],
        answer: "In particular",
        explanation: "'특정 항목 강조'에 'In particular'이 적절합니다.",
        translation: "특히, 많은 예산이 조명 및 안전 시설 향상에 사용될 예정입니다."
      },
      {
        number: 177,
        question: "Choose the correct verb phrase.",
        choices: ["ensure", "ensures", "ensuring", "ensured"],
        answer: "ensure",
        explanation: "'to + 동사원형' 구조로 인해 'ensure'가 맞습니다.",
        translation: "프로젝트 전반에 걸쳐 품질 기준이 유지되도록 하기 위해 노력하고 있습니다."
      },
      {
        number: 178,
        question: "Choose the correct verb.",
        choices: ["speak", "raise", "share", "discuss"],
        answer: "share",
        explanation: "'의견을 공유하다'라는 의미로 'share'가 가장 자연스럽습니다.",
        translation: "주민들은 의견과 제안을 공유하기 위해 공개 회의에 참석하도록 권장됩니다."
      }
    ]
  },
  {
    passage: `Proposal: Improving Delivery Service Efficiency

  We are aiming to streamline our current delivery operations to reduce costs and improve customer satisfaction.
  ----179----, we plan to implement a new tracking system that allows real-time updates.

  This new system has already been tested in our Chicago branch, where it led to a 20% reduction in customer inquiries.
  Additionally, we propose training delivery personnel to ----180---- issues on-site more effectively.

  Another improvement involves updating our delivery vehicle fleet.
  These new vehicles will consume less fuel and require less maintenance.
  ----181----, we expect to see a noticeable improvement in overall performance within the first quarter.

  To ensure smooth execution of these changes, all departments should ----182---- the implementation timeline and submit feedback by the end of the week.`,
    questions: [
      {
        number: 179,
        question: "Choose the best transition.",
        choices: ["For instance", "In return", "To begin with", "Nevertheless"],
        answer: "To begin with",
        explanation: "'우선적으로' 변경 내용을 소개하는 문맥에 적절합니다.",
        translation: "우선적으로, 실시간 업데이트가 가능한 새로운 추적 시스템을 도입할 계획입니다."
      },
      {
        number: 180,
        question: "Choose the correct verb.",
        choices: ["solve", "solving", "solved", "solution"],
        answer: "solve",
        explanation: "'to + 동사원형' 구조이므로 'solve'가 적절합니다.",
        translation: "현장에서 문제를 보다 효과적으로 해결하기 위한 교육을 제안합니다."
      },
      {
        number: 181,
        question: "Choose the best connector.",
        choices: ["In contrast", "For this reason", "As a result", "Moreover"],
        answer: "As a result",
        explanation: "'변경 → 성과 기대'의 인과관계에 'As a result'가 적절합니다.",
        translation: "그 결과, 1분기 내에 전반적인 성과 향상이 기대됩니다."
      },
      {
        number: 182,
        question: "Choose the best verb phrase.",
        choices: ["review", "reviews", "reviewed", "reviewing"],
        answer: "review",
        explanation: "'should + 동사원형' 구조에 맞습니다.",
        translation: "모든 부서는 실행 일정을 검토하고 주말까지 피드백을 제출해야 합니다."
      }
    ]
  },
  {
    passage: `Staff Announcement

  We are pleased to welcome Mr. Daniel Shin as the new director of operations.
  Mr. Shin brings over 15 years of experience in logistics and supply chain management.
  ----183----, he will be overseeing the integration of several new systems across departments.

  All staff members are encouraged to attend the meet-and-greet session on Thursday at 3 p.m.
  Please RSVP by Tuesday so that we can ----184---- seating arrangements accordingly.`,
    questions: [
      {
        number: 183,
        question: "Choose the best connector.",
        choices: ["In fact", "As such", "After all", "Even so"],
        answer: "As such",
        explanation: "앞의 경력을 받아 '그에 따라 ~역할을 맡는다'의 구조로 적절합니다.",
        translation: "그에 따라, 그는 여러 부서에 걸친 시스템 통합을 총괄할 예정입니다."
      },
      {
        number: 184,
        question: "Choose the correct verb.",
        choices: ["organize", "organized", "organizing", "organization"],
        answer: "organize",
        explanation: "'can + 동사원형' 구조에 맞는 'organize'가 정답입니다.",
        translation: "좌석 배치를 적절히 준비할 수 있도록 참석 여부를 알려주세요."
      }
    ]
  },
  {
    passage: `Dear Ms. Hamilton,

  Thank you for reaching out regarding the status of your recent shipment.
  After reviewing your order, we found that one of the items is currently out of stock.
  To our knowledge, we expect to restock it within the next five business days.

  We understand the inconvenience this may cause and sincerely apologize for the delay.
  As a gesture of goodwill, we will apply a 15% discount on your next purchase.

  Please do not hesitate to contact us if you have any questions.
  We will make every effort to ensure your satisfaction moving forward.
  Your feedback helps us improve our service.`,
    questions: [
      {
        number: 146,
        question: "Choose the best connector.",
        choices: ["However", "Fortunately", "In fact", "Nevertheless"],
        answer: "Fortunately",
        explanation: "‘재입고 예정’이라는 긍정적 문맥에서 ‘Fortunately’가 적절합니다.",
        translation: "다행히도, 향후 영업일 기준 5일 이내에 재입고될 예정입니다."
      },
      {
        number: 147,
        question: "Choose the best verb.",
        choices: ["apply", "applies", "applying", "applied"],
        answer: "apply",
        explanation: "'will + 동사원형' 구조이므로 'apply'가 맞습니다.",
        translation: "다음 구매 시 15% 할인 혜택을 적용해드릴 예정입니다."
      },
      {
        number: 148,
        question: "Choose the best conclusion phrase.",
        choices: ["To summarize", "After all", "Above all", "In short"],
        answer: "Above all",
        explanation: "‘무엇보다도 고객 피드백 중요’라는 맥락에 적절합니다.",
        translation: "무엇보다도, 고객님의 피드백은 저희 서비스 향상에 큰 도움이 됩니다."
      }
    ]
  },
  {
    passage: `To: All Employees
  From: HR Department
  Subject: Mandatory Cybersecurity Training

  Dear Team,

  As part of our commitment to safeguarding company data and ensuring best practices, we are implementing mandatory cybersecurity training for all staff.
  This initiative is designed to help employees recognize potential threats, such as phishing emails and suspicious downloads.
  All staff members are required to complete the training by September 30.

  Failure to do so may result in restricted access to certain systems until the training is completed.
  We appreciate your attention to this matter and your cooperation in keeping our digital environment secure.

  Best regards,
  HR Department`,
    questions: [
      {
        number: 149,
        question: "Which word best completes the sentence: 'This initiative is designed to help employees ______ potential threats'?",
        choices: ["analyze", "eliminate", "recognize", "install"],
        answer: "recognize",
        explanation: "'recognize potential threats'는 일반적인 표현이며 문맥상 가장 자연스럽습니다.",
        translation: "'이 이니셔티브는 직원들이 잠재적인 위협을 인식하도록 설계되었습니다.'에서 'recognize'가 가장 적절합니다."
      },
      {
        number: 150,
        question: "Choose the correct form to complete: 'All staff members are ______ to complete the training by September 30.'",
        choices: ["requested", "obligated", "required", "reminded"],
        answer: "required",
        explanation: "'are required to'는 공식적인 의무를 표현하는 데 일반적으로 사용됩니다.",
        translation: "'모든 직원은 9월 30일까지 교육을 완료해야 합니다.'에서 'required'가 가장 적합합니다."
      },
      {
        number: 151,
        question: "Which word fits best in the sentence: 'We appreciate your ______ to this matter'?",
        choices: ["response", "attention", "solution", "permission"],
        answer: "attention",
        explanation: "'appreciate your attention to this matter'는 공식 이메일에서 자주 사용되는 표현입니다.",
        translation: "'이 문제에 대해 주의를 기울여 주셔서 감사합니다.'에서 'attention'이 가장 적절합니다."
      }
    ]
  }
];

export default part6QuestionPool;
