export interface Part7QuestionSet {
  id: number;
  passages: string[];
  translation: string[];
  questions: {
    number: number;
    question: string;
    choices: string[];
    answer: string;
    explanation: string;
  }[];
}

export const part7QuestionPool = [
  {
    id: 1,
    passages: [
      `--- Notice ---

To: All Staff
From: Human Resources Department
Subject: New Employee Evaluation Policy
Date: September 5

Starting October 1, the company will implement a revised performance evaluation system for all full-time employees.

Key Changes:
- Annual reviews will now occur **twice a year** (April and October).
- Managers must submit feedback reports using the new digital form.
- Training on the new system will be conducted between September 10–20.

Please contact HR if you have any questions or would like to attend a training session.`,

      `--- Meeting Minutes ---

Meeting Title: Evaluation System Training Prep
Date: September 6
Attendees: HR Team, IT Support, Department Heads

Discussion Summary:
- HR will finalize the digital feedback form by September 8.
- IT will provide technical support for form access and storage.
- Each department head will designate at least **two representatives** to attend training.
- All training materials will be uploaded to the internal portal by September 9.
- Training schedule emails will be sent out by September 11.

Action Items:
✓ HR to complete form setup
✓ IT to test portal functionality
✓ Departments to confirm attendees`,

      `--- Email ---

To: HR Department
From: Laura Kim (Marketing Team Lead)
Date: September 13

Subject: Training Attendance Confirmation

Dear HR Team,

I would like to confirm the attendees from the Marketing Department for the upcoming evaluation system training.
- Daniel Choi (Marketing Specialist)
- Gina Park (Marketing Analyst)

Please let me know if any additional forms need to be submitted.
We’ve already accessed the training documents on the portal and are preparing accordingly.

Best regards,
Laura Kim`
    ],
    translation: [
      `--- 공지사항 ---

수신: 전 직원
발신: 인사부
제목: 신규 직원 평가 정책
날짜: 9월 5일

10월 1일부터 전일제 직원을 대상으로 개정된 성과 평가 시스템이 시행됩니다.

주요 변경 사항:
- 연 1회 평가 → 연 2회 평가 (4월, 10월)
- 매니저는 새로운 디지털 양식을 통해 피드백 보고서를 제출해야 합니다.
- 9월 10일부터 20일 사이에 시스템 교육이 실시됩니다.

문의 사항이나 교육 참여 희망 시 인사부에 연락 바랍니다.`,

      `--- 회의록 ---

회의 제목: 평가 시스템 교육 준비
일자: 9월 6일
참석자: 인사팀, IT 지원팀, 부서장

논의 요약:
- 인사팀은 9월 8일까지 디지털 피드백 양식을 완성할 예정
- IT는 양식 접근 및 저장 관련 기술 지원을 제공
- 각 부서장은 최소 두 명의 교육 참석자를 지정해야 함
- 모든 교육 자료는 9월 9일까지 내부 포털에 업로드 예정
- 교육 일정 메일은 9월 11일까지 발송 예정

실행 항목:
✓ 인사팀 – 양식 설정 완료
✓ IT – 포털 기능 테스트
✓ 각 부서 – 참석자 확정`,

      `--- 이메일 ---

수신: 인사부
발신: Laura Kim (마케팅 팀장)
날짜: 9월 13일

제목: 교육 참석자 확인

안녕하세요, 인사팀 여러분.

다가오는 평가 시스템 교육에 마케팅팀 참석자를 다음과 같이 확인드립니다.
- Daniel Choi (마케팅 전문가)
- Gina Park (마케팅 분석가)

추가로 제출해야 할 양식이 있다면 알려주시기 바랍니다.
교육 자료는 이미 포털에서 확인하였으며, 이에 따라 준비 중입니다.

감사합니다.
Laura Kim`
    ],
    questions: [
      {
        number: 173,
        question: "What is one change mentioned in the new evaluation policy?",
        choices: [
          "Evaluations will occur once every two years.",
          "Training is optional for part-time staff.",
          "Feedback forms must be handwritten.",
          "Reviews will be conducted twice annually."
        ],
        answer: "Reviews will be conducted twice annually.",
        explanation: "공지문에 따르면 성과 평가는 이제 연 2회(4월과 10월) 실시됩니다."
      },
      {
        number: 174,
        question: "According to the meeting minutes, who is responsible for confirming training attendees?",
        choices: [
          "IT Support",
          "Each department head",
          "HR interns",
          "Marketing managers"
        ],
        answer: "Each department head",
        explanation: "회의록에 따르면 각 부서장이 교육 참석자를 최소 두 명씩 지정해야 한다고 되어 있습니다."
      },
      {
        number: 175,
        question: "Why did Laura Kim send her e-mail?",
        choices: [
          "To ask for training dates",
          "To request additional forms",
          "To confirm who will attend training",
          "To submit the completed feedback form"
        ],
        answer: "To confirm who will attend training",
        explanation: "Laura Kim은 이메일에서 마케팅팀의 교육 참석자를 확인하고 있습니다."
      }
    ]
  },
  {
    id: 5,
    passages: [
      `--- Web Article ---

Looking to improve your productivity while working from home? Experts suggest that maintaining a consistent routine and having a dedicated workspace are key factors. According to a recent survey by HomeOfficePro, individuals with a defined schedule and work area reported a 35% increase in efficiency. Additionally, taking short breaks and avoiding multitasking were found to significantly reduce stress levels and enhance output.`,

      `--- E-mail ---

To: HomeOfficePro Editorial Team
From: Dana Mitchell
Date: July 14

Subject: Article Feedback

Dear Editors,

I recently read your article on productivity while working from home and found it incredibly insightful. As a remote team leader at a tech company, I’ve implemented many of the suggestions mentioned. In fact, after creating a dedicated home office and limiting multitasking, my team’s performance improved. I would love to share our case study with your readers if you're open to guest submissions.

Best regards,
Dana Mitchell`
    ],
    translation: [
      `--- 웹 기사 ---

재택근무 중 생산성을 높이고 싶으신가요? 전문가들은 일관된 루틴을 유지하고 전용 작업 공간을 마련하는 것이 핵심이라고 말합니다.
HomeOfficePro의 최근 설문조사에 따르면, 명확한 일정과 작업 공간을 가진 사람들은 효율성이 35% 증가했다고 보고했습니다.
또한 짧은 휴식을 취하고 멀티태스킹을 피하는 것이 스트레스 감소와 작업 성과 향상에 효과적이라는 결과가 나왔습니다.`,

      `--- 이메일 ---

수신: HomeOfficePro 편집팀
발신: Dana Mitchell
날짜: 7월 14일

제목: 기사 피드백

편집팀 여러분께,

최근 귀사의 재택근무 생산성 관련 기사를 읽고 매우 유익하다고 느꼈습니다.
저는 기술 기업에서 원격 팀 리더로 근무하고 있으며, 기사에서 언급한 많은 제안을 실제로 적용해보았습니다.
전용 홈 오피스를 마련하고 멀티태스킹을 줄인 이후 저희 팀의 성과가 향상되었습니다.
혹시 게스트 기고에 관심 있으시다면 저희 사례를 독자들과 공유하고 싶습니다.

감사합니다.
Dana Mitchell`
    ],
    questions: [
      {
        number: 176,
        question: "What is the purpose of the article?",
        choices: [
          "To promote a new remote work tool",
          "To explain the history of telecommuting",
          "To provide tips on improving work-from-home productivity",
          "To compare productivity levels across industries"
        ],
        answer: "To provide tips on improving work-from-home productivity",
        explanation: "기사의 목적은 재택근무 중 생산성을 높이기 위한 팁을 제공하는 것입니다."
      },
      {
        number: 177,
        question: "What does the article suggest about multitasking?",
        choices: [
          "It improves short-term performance",
          "It should be done only in the morning",
          "It may increase stress and reduce output",
          "It is suitable for experienced workers"
        ],
        answer: "It may increase stress and reduce output",
        explanation: "멀티태스킹은 스트레스를 증가시키고 결과적으로 작업 성과를 떨어뜨릴 수 있다고 기사에 언급되어 있습니다."
      },
      {
        number: 178,
        question: "Who is Dana Mitchell?",
        choices: [
          "A journalist for HomeOfficePro",
          "A productivity consultant",
          "A remote team leader at a tech company",
          "An editor at a publishing firm"
        ],
        answer: "A remote team leader at a tech company",
        explanation: "Dana Mitchell은 기술 기업에서 원격 팀 리더로 일하고 있다고 이메일에서 밝혔습니다."
      },
      {
        number: 179,
        question: "What does Dana Mitchell offer to do?",
        choices: [
          "Write a review of HomeOfficePro's services",
          "Submit a guest article about her team’s experience",
          "Apply for a position as a remote editor",
          "Conduct a new survey on remote work"
        ],
        answer: "Submit a guest article about her team’s experience",
        explanation: "Dana는 자신의 팀 사례를 바탕으로 게스트 기고를 하고 싶다고 제안합니다."
      }
    ]
  },
  {
    id: 3,
    passages: [
      `--- Memo ---

To: Sales Department
From: Regional Manager
Date: May 10

Subject: Sales Reporting Procedures

Effective immediately, all regional sales representatives are required to submit weekly performance summaries by Monday at 10:00 A.M. The summary should include the number of client meetings, product demonstrations, and total sales figures for the previous week.

Additionally, any pending client requests or feedback should be documented and submitted through the new online portal. This change is aimed at improving transparency and enabling faster decision-making based on real-time data. A short training session on using the portal will be held this Friday at 3:00 P.M. in Conference Room B. Attendance is mandatory for all sales team members.`
    ],
    translation: [
      `--- 사내 메모 ---

수신: 영업부
발신: 지역 관리자
날짜: 5월 10일

제목: 영업 보고 절차 안내

즉시 시행되는 지침에 따라 모든 지역 영업 담당자는 매주 월요일 오전 10시까지 주간 실적 요약을 제출해야 합니다.
요약에는 지난주 동안의 고객 미팅 수, 제품 시연 횟수, 총 매출 수치를 포함해야 합니다.

또한, 보류 중인 고객 요청사항이나 피드백은 새로운 온라인 포털을 통해 문서화하여 제출해야 합니다.
이번 변경은 투명성을 높이고 실시간 데이터를 기반으로 한 빠른 의사결정을 가능하게 하기 위한 것입니다.
포털 사용법에 대한 간단한 교육은 이번 주 금요일 오후 3시에 B회의실에서 진행됩니다.
모든 영업팀 구성원은 반드시 참석해야 합니다.`
    ],
    questions: [
      {
        number: 180,
        question: "What must sales representatives submit each week?",
        choices: [
          "Monthly goal projections",
          "Client satisfaction surveys",
          "Weekly performance summaries",
          "Expense reimbursement forms"
        ],
        answer: "Weekly performance summaries",
        explanation: "모든 지역 영업 담당자는 매주 실적 요약 보고서를 제출해야 한다고 메모에 나와 있습니다."
      },
      {
        number: 181,
        question: "What is one reason for implementing the new portal?",
        choices: [
          "To replace in-person meetings",
          "To improve real-time decision-making",
          "To simplify product demonstrations",
          "To reduce training requirements"
        ],
        answer: "To improve real-time decision-making",
        explanation: "온라인 포털 도입의 목적 중 하나는 실시간 데이터 기반의 빠른 의사결정을 가능하게 하기 위함입니다."
      },
      {
        number: 182,
        question: "When and where is the training session scheduled?",
        choices: [
          "Thursday at 4 P.M. in Room A",
          "Friday at 3 P.M. in Conference Room B",
          "Monday at 2 P.M. online",
          "Friday at 10 A.M. in the Sales Office"
        ],
        answer: "Friday at 3 P.M. in Conference Room B",
        explanation: "교육은 이번 주 금요일 오후 3시에 B회의실에서 진행된다고 명시되어 있습니다."
      }
    ]
  },
  {
    id: 4,
    passages: [
      `--- Internal Announcement ---

  To: All Employees
  From: Corporate Communications
  Date: March 3

  Subject: Annual Company Workshop

  We are excited to announce the upcoming annual company workshop, which will take place on March 25 at the Riverside Conference Center. This year’s theme is “Innovating Together,” and the event will include keynote speeches, breakout sessions, and networking activities. Attendance is mandatory for all full-time staff.

  Please register using the link provided in the internal portal by March 10. More details regarding the session schedule and guest speakers will follow next week.`,

      `--- Workshop Planning Meeting Notes ---

  Date: March 2
  Attendees: Event Team, HR, Department Representatives

  - The keynote speaker, Dr. Jane Ellis, is confirmed to open the workshop.
  - Breakout sessions will focus on innovation in marketing, product development, and customer service.
  - Each department is responsible for preparing a 5-minute presentation.
  - Name tags and printed schedules will be distributed at the registration desk.
  - Shuttle buses will depart from headquarters at 8:00 A.M. on the event day.`,

      `--- Email ---

  To: Event Team
  From: Noah Kim (Finance Department)
  Date: March 4

  Subject: Workshop Presentation Topic

  Hi Team,

  The Finance Department has decided to focus our 5-minute presentation on “AI Integration in Budget Forecasting.” Please let us know the technical requirements for presenting, such as projector or microphone setup. We will submit our slides by March 18 as requested.

  Thanks,
  Noah`
    ],
    translation: [
      `--- 사내 공지 ---

  수신: 전 직원
  발신: 홍보팀
  날짜: 3월 3일

  제목: 연례 사내 워크숍 안내

  다가오는 연례 사내 워크숍이 3월 25일 Riverside 컨퍼런스 센터에서 개최됩니다.
  올해의 주제는 "함께 혁신하기"이며, 기조 연설, 분과 세션, 네트워킹 활동 등이 진행될 예정입니다.
  전일제 직원은 반드시 참석해야 합니다.

  3월 10일까지 내부 포털에 있는 링크를 통해 등록해 주세요. 세부 세션 일정 및 연사 정보는 다음 주에 공지될 예정입니다.`,

      `--- 워크숍 준비 회의록 ---

  날짜: 3월 2일
  참석자: 이벤트팀, 인사팀, 각 부서 대표

  - 기조 연설자는 Jane Ellis 박사로 확정되었습니다.
  - 분과 세션은 마케팅, 제품 개발, 고객 서비스의 혁신을 주제로 구성됩니다.
  - 각 부서는 5분 발표를 준비해야 합니다.
  - 명찰과 인쇄된 일정표는 등록 데스크에서 배부됩니다.
  - 당일 오전 8시에 본사에서 셔틀버스가 출발합니다.`,

      `--- 이메일 ---

  수신: 이벤트팀
  발신: Noah Kim (재무팀)
  날짜: 3월 4일

  제목: 워크숍 발표 주제

  안녕하세요 이벤트팀 여러분,

  재무팀은 5분 발표 주제를 "예산 예측에서의 AI 활용"으로 정했습니다.
  프로젝터나 마이크 설치 등 발표에 필요한 기술 사항을 알려주시기 바랍니다.
  요청하신 대로 3월 18일까지 슬라이드를 제출하겠습니다.

  감사합니다.
  Noah`
    ],
    questions: [
      {
        number: 183,
        question: "What is the main topic of this year's company workshop?",
        choices: [
          "Employee wellness and work-life balance",
          "Customer engagement strategies",
          "Innovating Together",
          "Digital transformation planning"
        ],
        answer: "Innovating Together",
        explanation: "올해 워크숍의 주제는 공지문에 따르면 '함께 혁신하기(Innovating Together)'입니다."
      },
      {
        number: 184,
        question: "What are employees required to do by March 10?",
        choices: [
          "Submit their presentation slides",
          "Register for the workshop online",
          "Send feedback about the event",
          "Choose their breakout session"
        ],
        answer: "Register for the workshop online",
        explanation: "3월 10일까지 내부 포털을 통해 워크숍 등록을 완료해야 합니다."
      },
      {
        number: 185,
        question: "According to the meeting notes, what will happen at the registration desk?",
        choices: [
          "Staff will receive workshop materials",
          "Name tags and schedules will be distributed",
          "Lunch preferences will be collected",
          "Workgroup assignments will be announced"
        ],
        answer: "Name tags and schedules will be distributed",
        explanation: "회의록에 따르면 등록 데스크에서 명찰과 일정표가 배포됩니다."
      },
      {
        number: 186,
        question: "What is the Finance Department's presentation about?",
        choices: [
          "Cost reduction strategies",
          "AI Integration in Budget Forecasting",
          "Annual expense review",
          "Cryptocurrency investments"
        ],
        answer: "AI Integration in Budget Forecasting",
        explanation: "이메일에 따르면 재무팀의 발표 주제는 '예산 예측에서의 AI 활용'입니다."
      },
      {
        number: 187,
        question: "What technical support does Noah Kim inquire about?",
        choices: [
          "Laptop and printer setup",
          "Live streaming access",
          "Microphone and projector setup",
          "Remote participation options"
        ],
        answer: "Microphone and projector setup",
        explanation: "Noah는 이메일에서 마이크나 프로젝터와 같은 발표 장비의 설치 여부를 문의하고 있습니다."
      }
    ]
  },
  {
    id: 5,
    passages: [
      `[Passage 1: Email]

  To: Jackson Lee
  From: Anna Patel
  Subject: Schedule Confirmation for TechConnect Expo

  Hi Jackson,

  Thank you for agreeing to present at the TechConnect Expo in Boston next month. We’re excited to have you join our panel on “Future Trends in AI Integration.” Your session is currently scheduled for Friday, August 18, at 2:00 p.m. in Hall B2.

  As part of the panel, we kindly request that you submit a brief summary of your talk (around 200 words) and a short bio by July 20. This will help us finalize the event brochure.

  Let me know if you have any special AV or setup requests. We’re happy to accommodate as best we can.

  Best regards,
  Anna Patel
  Event Coordinator
  TechConnect Expo Team`,

      `[Passage 2: Web Page – TechConnect Expo Panelist Info Submission]

  Panelist Submission Guidelines

  Welcome to the TechConnect Expo 2025!
  All confirmed speakers should submit their session summary, biography, and AV requirements no later than **July 21** via the panelist portal. Please log in using your email address and the access code provided during registration.

  The recommended length for session summaries is 150–250 words, and bios should be no longer than 100 words. Panelists will receive their finalized session schedule by **August 1**.

  If you need assistance, contact us at support@techconnectexpo.org.
  Thank you for being a part of this year’s event!`
    ],
    translation: [
      `[지문 1: 이메일]

    수신: Jackson Lee
    발신: Anna Patel
    제목: TechConnect Expo 일정 확인

    Jackson 님,

    다음 달 보스턴에서 열리는 TechConnect Expo에서 발표를 맡아주셔서 감사합니다. “AI 통합의 미래 동향”이라는 주제의 패널에 참여해 주셔서 매우 기쁩니다. 현재 귀하의 세션은 8월 18일 금요일 오후 2시, Hall B2에서 예정되어 있습니다.

    행사 브로셔 작성을 위해 발표 요약문(약 200단어)과 짧은 약력(바이오)을 7월 20일까지 제출해 주시기 바랍니다.

    AV 장비나 기타 특별한 세팅 요청이 있으시면 알려주세요. 최대한 지원해드리겠습니다.

    감사합니다.
    Anna Patel
    이벤트 코디네이터
    TechConnect Expo 팀`,

      `[지문 2: 웹페이지 – TechConnect Expo 패널 정보 제출]

    패널 발표자 제출 가이드라인

    TechConnect Expo 2025에 오신 것을 환영합니다!
    모든 확정 발표자는 세션 요약문, 약력, AV 요구 사항을 **7월 21일**까지 패널 포털을 통해 제출해 주세요. 등록 시 제공된 이메일과 접속 코드를 사용해 로그인하시면 됩니다.

    세션 요약은 150~250단어, 약력은 최대 100단어로 권장됩니다. 최종 발표 일정은 **8월 1일**까지 발송됩니다.

    도움이 필요하시면 support@techconnectexpo.org로 문의해 주세요.
    올해 행사에 함께해 주셔서 감사합니다!`
    ],
    questions: [
      {
        number: 188,
        question: "What is the purpose of the e-mail?",
        choices: [
          "To confirm Jackson's attendance at the keynote dinner",
          "To provide Jackson with registration instructions",
          "To finalize travel arrangements for Jackson",
          "To confirm Jackson’s session time and request materials"
        ],
        answer: "To confirm Jackson’s session time and request materials",
        explanation: "이메일은 Jackson의 발표 일정 확인과 발표 요약 및 약력 제출 요청을 위해 작성되었습니다."
      },
      {
        number: 189,
        question: "What is the latest date Jackson can submit his information through the portal?",
        choices: [
          "July 18",
          "July 20",
          "July 21",
          "August 1"
        ],
        answer: "July 21",
        explanation: "웹페이지 안내문에 따르면 발표자는 패널 포털을 통해 7월 21일까지 정보를 제출할 수 있습니다."
      },
      {
        number: 190,
        question: "What is Jackson likely to do next?",
        choices: [
          "Request changes to the session location",
          "Send his biography and session summary",
          "Ask for access to the panelist portal",
          "Review other panelist schedules"
        ],
        answer: "Send his biography and session summary",
        explanation: "Jackson은 이메일에서 요청받은 세션 요약과 약력을 제출해야 할 것으로 보입니다."
      }
    ]
  },
  {
    id: 6,
    passages: [
      `[Passage 1: Customer Inquiry – Email]

  To: support@smartappliance.com
  From: Olivia Bennett
  Date: February 9

  Subject: Request for Warranty Coverage Details

  Dear Customer Support,

  I recently purchased the SmartChef Pro Blender from your website, and I’d like to know more about the warranty coverage. Specifically, I’m wondering whether accidental damage (such as dropping the device) is covered, and if there’s a deductible for repair services.

  Also, could you confirm if I need to register the product to activate the warranty?

  Thank you in advance for your help.

  Sincerely,
  Olivia Bennett`,

      `[Passage 2: SmartAppliance Warranty Policy – Website Excerpt]

  SmartAppliance offers a standard one-year limited warranty on all kitchen appliances. The warranty covers manufacturer defects and mechanical malfunctions not caused by misuse or accidental damage.

  Customers are encouraged to register their products within 30 days of purchase to ensure timely support. Registration is not mandatory, but it helps speed up claims processing.

  Please note that accidental damage, such as drops or spills, is not covered under the standard warranty. Repair services may still be available for a fee depending on damage severity.`
    ],
    translation: [
      `[지문 1: 고객 문의 – 이메일]

  수신: support@smartappliance.com
  발신: Olivia Bennett
  날짜: 2월 9일

  제목: 보증 서비스 범위 문의

  고객지원팀께,

  최근 귀사의 웹사이트에서 SmartChef Pro 블렌더를 구매했으며, 보증 범위에 대해 자세히 알고 싶습니다.
  기기를 떨어뜨리는 등의 실수로 인한 손상도 보장되는지, 수리 시 본인 부담금이 있는지도 궁금합니다.

  또한, 보증 활성화를 위해 제품 등록이 필요한지도 확인 부탁드립니다.

  미리 감사드립니다.

  Olivia Bennett`,

      `[지문 2: SmartAppliance 보증 정책 – 웹사이트 발췌]

  SmartAppliance는 모든 주방 가전에 대해 기본 1년 제한 보증을 제공합니다.
  이 보증은 사용자 부주의나 사고에 의한 손상이 아닌, 제조 결함 및 기계적 고장을 보장합니다.

  고객은 구매 후 30일 이내에 제품을 등록하면 지원이 더욱 신속하게 이루어질 수 있습니다.
  제품 등록은 필수는 아니지만, 클레임 처리 속도를 높이는 데 도움이 됩니다.

  기기를 떨어뜨리거나 액체가 쏟아지는 등의 사고로 인한 손상은 보증에 포함되지 않습니다.
  다만, 손상의 정도에 따라 유료 수리 서비스가 제공될 수 있습니다.`
    ],
    questions: [
      {
        number: 191,
        question: "What does Olivia Bennett want to know?",
        choices: [
          "Whether she can return the blender for a full refund",
          "If accidental damage is covered under warranty",
          "When her appliance will be shipped",
          "Where to download the product manual"
        ],
        answer: "If accidental damage is covered under warranty",
        explanation: "Olivia는 실수로 인한 손상(기기 낙하 등)이 보증에 포함되는지를 문의하고 있습니다."
      },
      {
        number: 192,
        question: "According to the warranty policy, what is NOT covered?",
        choices: [
          "Mechanical defects",
          "Accidental drops",
          "Manufacturing faults",
          "Internal malfunctions"
        ],
        answer: "Accidental drops",
        explanation: "보증 정책에 따르면 기기를 떨어뜨리는 등의 사고는 보장되지 않습니다."
      },
      {
        number: 193,
        question: "Is product registration required to receive support?",
        choices: [
          "Yes, registration is mandatory for all repairs",
          "Only for devices purchased online",
          "No, but it helps speed up processing",
          "Yes, within the first 7 days only"
        ],
        answer: "No, but it helps speed up processing",
        explanation: "제품 등록은 필수는 아니지만, 클레임 처리 속도를 높일 수 있다고 명시되어 있습니다."
      }
    ]
  },
  {
    id: 7,
    passages: [
      `[Passage: Internal Announcement]

  To: All Employees
  From: Facilities Management
  Date: November 1

  Subject: Elevator Maintenance Notice

  Please be advised that scheduled maintenance will be performed on the elevators in Building B from **November 6 to November 8**. During this time, elevators 1 and 2 will be unavailable.

  Employees are encouraged to use the stairs or elevators located in Building A as alternatives. If you require special assistance due to mobility needs, please contact Facilities Management in advance at ext. 302.

  We apologize for any inconvenience and appreciate your cooperation.`
    ],
    translation: [
      `[지문: 사내 공지]

  수신: 전 직원
  발신: 시설관리팀
  날짜: 11월 1일

  제목: 엘리베이터 점검 안내

  Building B에 있는 엘리베이터에 대한 정기 점검이 **11월 6일부터 8일까지** 진행될 예정입니다.
  점검 기간 동안 엘리베이터 1번과 2번은 이용하실 수 없습니다.

  직원 여러분께서는 대체로 계단이나 Building A의 엘리베이터를 이용해 주시기 바랍니다.
  이동에 도움이 필요한 경우, 사전에 302번으로 시설관리팀에 연락해 주세요.

  불편을 드려 죄송하며, 협조에 감사드립니다.`
    ],
    questions: [
      {
        number: 194,
        question: "What is the main purpose of the announcement?",
        choices: [
          "To introduce new safety protocols",
          "To notify employees of elevator maintenance",
          "To announce new office equipment",
          "To request elevator usage feedback"
        ],
        answer: "To notify employees of elevator maintenance",
        explanation: "이 공지는 엘리베이터 정기 점검 일정을 알리기 위한 것입니다."
      },
      {
        number: 195,
        question: "Which elevators will be out of service?",
        choices: [
          "Only in Building A",
          "All elevators in both buildings",
          "Elevators 1 and 2 in Building B",
          "Emergency elevators only"
        ],
        answer: "Elevators 1 and 2 in Building B",
        explanation: "공지문에 따르면 Building B의 엘리베이터 1번과 2번이 점검으로 이용 불가합니다."
      },
      {
        number: 196,
        question: "What should employees do if they need help moving between floors?",
        choices: [
          "File a support ticket",
          "Contact the HR department",
          "Use the service elevator",
          "Call Facilities Management in advance"
        ],
        answer: "Call Facilities Management in advance",
        explanation: "이동 지원이 필요한 직원은 사전에 시설관리팀에 연락하라고 안내되어 있습니다."
      }
    ]
  },
  {
    id: 8,
    passages: [
      `[Passage 1: Product Launch Announcement – Internal Memo]

  To: All Departments
  From: Product Development
  Date: April 3

  Subject: Launch of EcoCool Mini Refrigerator

  We are pleased to announce that our new EcoCool Mini Refrigerator will officially launch on **April 25**. This energy-efficient model is designed for small office and dormitory spaces and will be available in silver, black, and white.

  Marketing campaigns will begin on April 10. Please ensure that your teams are familiar with the product specs and sales materials, which can be downloaded from the internal portal.`,

      `[Passage 2: Sales Coordination Meeting Minutes]

  Date: April 4
  Attendees: Sales, Marketing, Logistics

  - Initial shipment will include 3,000 units, divided among key retail partners.
  - Product demonstration videos will go live on April 12.
  - Online preorder opens April 15, with early bird discounts for the first 500 units.
  - Customer service team will receive FAQ training on April 8.
  - Warranty terms and return policy documents have been updated on the intranet.`,

      `[Passage 3: Customer Inquiry – Email]

  To: support@greenappliances.com
  From: Greg Torres
  Date: April 5

  Subject: EcoCool Mini – Preorder Question

  Hi, I heard about the upcoming EcoCool Mini Refrigerator launch and I’m interested in preordering one. Could you let me know when preorders start and whether the silver model is included in the early bird promotion?

  Thanks in advance!
  Greg`
    ],
    translation: [
      `[지문 1: 신제품 출시 공지 – 사내 메모]

  수신: 전 부서
  발신: 제품개발팀
  날짜: 4월 3일

  제목: EcoCool Mini 냉장고 출시 안내

  신제품 EcoCool Mini 냉장고가 **4월 25일** 공식 출시됩니다.
  이 제품은 에너지 효율성이 높고, 소형 사무실 및 기숙사 공간에 적합하도록 설계되었습니다.
  색상은 실버, 블랙, 화이트로 제공됩니다.

  마케팅 캠페인은 4월 10일부터 시작됩니다.
  각 부서는 제품 사양 및 판매 자료를 숙지해 주시기 바랍니다. 관련 자료는 내부 포털에서 다운로드할 수 있습니다.`,

      `[지문 2: 영업 조율 회의록]

  일자: 4월 4일
  참석자: 영업, 마케팅, 물류팀

  - 초기 출하량은 3,000대로, 주요 소매 파트너에 분배됨
  - 제품 시연 영상은 4월 12일 공개 예정
  - 온라인 사전예약은 4월 15일 시작되며, 처음 500대에 한해 얼리버드 할인 제공
  - 고객센터는 4월 8일 FAQ 교육 예정
  - 보증 및 반품 정책 문서가 인트라넷에 업데이트됨`,

      `[지문 3: 고객 문의 – 이메일]

  수신: support@greenappliances.com
  발신: Greg Torres
  날짜: 4월 5일

  제목: EcoCool Mini – 사전예약 관련 질문

  안녕하세요. 곧 출시될 EcoCool Mini 냉장고에 대해 듣고 사전예약에 관심이 있습니다.
  사전예약은 언제 시작되며, 실버 모델도 얼리버드 프로모션에 포함되는지 알려주실 수 있나요?

  미리 감사드립니다.
  Greg`
    ],
    questions: [
      {
        number: 197,
        question: "When will the EcoCool Mini Refrigerator be available for sale?",
        choices: [
          "April 8",
          "April 10",
          "April 15",
          "April 25"
        ],
        answer: "April 25",
        explanation: "제품 출시일은 사내 메모에 따르면 4월 25일입니다."
      },
      {
        number: 198,
        question: "What happens on April 15 according to the meeting notes?",
        choices: [
          "Product shipment begins",
          "Preorders for the EcoCool Mini open",
          "Marketing videos are published",
          "Warranty training occurs"
        ],
        answer: "Preorders for the EcoCool Mini open",
        explanation: "회의록에 따르면 4월 15일부터 온라인 사전예약이 시작됩니다."
      },
      {
        number: 199,
        question: "What is Greg Torres asking about?",
        choices: [
          "When the warranty documents will be available",
          "Where to find product specifications",
          "Whether the silver model is included in the early bird offer",
          "If the EcoCool Mini can be returned after use"
        ],
        answer: "Whether the silver model is included in the early bird offer",
        explanation: "Greg는 실버 모델이 얼리버드 프로모션에 포함되는지를 문의하고 있습니다."
      },
      {
        number: 200,
        question: "Where can internal teams download sales materials?",
        choices: [
          "From the company homepage",
          "From the customer portal",
          "From the internal portal",
          "From the email attachments"
        ],
        answer: "From the internal portal",
        explanation: "제품개발팀의 메모에 따르면 자료는 내부 포털에서 다운로드할 수 있습니다."
      }
    ]
  }
];

export default part7QuestionPool;
