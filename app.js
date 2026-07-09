// ─── ITEM DEFINITIONS ─────────────────────────
const ITEMS={
  a11:{code:'A1.1',title:'Forced Labor',desc:'No forced or coercive labor',grp:'A1'},
  a12:{code:'A1.2',title:'Employment Terms',desc:'Written terms before employment',grp:'A1'},
  a13:{code:'A1.3',title:'Document Retention',desc:'No confiscation of personal IDs',grp:'A1'},
  a21:{code:'A2.1',title:'Minimum Age',desc:'No child labor present',grp:'A2'},
  a22:{code:'A2.2',title:'Young Worker Protections',desc:'No hazardous work or OT for <18',grp:'A2'},
  a23:{code:'A2.3',title:'Learner Programs',desc:'Student/intern/apprentice compliance',grp:'A2'},
  a31:{code:'A3.1',title:'Weekly Hour Limits',desc:'Max 60 hours per week',grp:'A3'},
  a32:{code:'A3.2',title:'Rest Days',desc:'At least 1 day off per 7 days',grp:'A3'},
  a33:{code:'A3.3',title:'Breaks & Leave',desc:'Mandatory breaks and leave rights',grp:'A3'},
  a41:{code:'A4.1',title:'Wages & Payment',desc:'Equal pay, correct calc, timely payment',grp:'A4'},
  a42:{code:'A4.2',title:'Wage Statements',desc:'Understandable payslips each pay period',grp:'A4'},
  a43:{code:'A4.3',title:'Deductions & Withholdings',desc:'Correct statutory deductions submitted on time',grp:'A4'},
  a51:{code:'A5.1',title:'Non-Discrimination',desc:'No discrimination, harassment, or abuse',grp:'A5'},
  a52:{code:'A5.2',title:'Disciplinary Actions',desc:'Documented and fairly reviewed',grp:'A5'},
  a53:{code:'A5.3',title:'Religious Accommodation',desc:'Reasonable religious requests considered',grp:'A5'},
  a54:{code:'A5.4',title:'Disability Accommodation',desc:'Reasonable disability requests considered',grp:'A5'},
  a61:{code:'A6.1',title:'Freedom of Association',desc:'Workers free to join/form unions',grp:'A6'},
  a62:{code:'A6.2',title:'Collective Bargaining',desc:'Bargaining rights respected in good faith',grp:'A6'},
  a63:{code:'A6.3',title:'Peaceful Assembly',desc:'Workers may peacefully assemble and voice concerns',grp:'A6'},
  am11:{code:'AM.1.1',title:'Compliance Process',desc:'Quarterly process to track applicable laws',grp:'AM'},
  am12:{code:'AM.1.2',title:'Risk Assessment',desc:'Due diligence on actual and potential labor risks',grp:'AM'},
  am21:{code:'AM.2.1',title:'Roles & Responsibilities',desc:'Labor compliance responsibilities assigned at all levels',grp:'AM'},
  am22:{code:'AM.2.2',title:'Policies & Controls',desc:'Adequate labor policies and effective control processes',grp:'AM'},
  am23:{code:'AM.2.3',title:'Training',desc:'Labor compliance training for all managers and workers',grp:'AM'},
  am31:{code:'AM.3.1',title:'Communication',desc:'Two-way communication on labor practices',grp:'AM'},
  am32:{code:'AM.3.2',title:'Grievance Mechanism',desc:'Anonymous reporting without fear of reprisal',grp:'AM'},
  am41:{code:'AM.4.1',title:'Performance Review',desc:'Annual management review of labor system',grp:'AM'},
  am42:{code:'AM.4.2',title:'Self-Audit',desc:'Periodic self-audit against RBA Code',grp:'AM'},
  am43:{code:'AM.4.3',title:'Corrective Action',desc:'Corrective actions are established to close non-conformances',grp:'AM'},
  d11:{code:'D1',title:'Business Integrity',desc:'Prevents corruption and improper advantage',grp:'D'},
  d12:{code:'D2',title:'Disclosure of Information',desc:'Ensures accurate and timely reporting',grp:'D'},
  d13:{code:'D3',title:'Intellectual Property',desc:'Protects IP and confidential information',grp:'D'},
  d14:{code:'D4',title:'Fair Business Practices',desc:'Supports fair competition and honest advertising',grp:'D'},
  d15:{code:'D5',title:'Identity Protection',desc:'Protects privacy and non-retaliation for reporters',grp:'D'},
  d16:{code:'D6',title:'Privacy',desc:'Ensures lawful handling of personal information',grp:'D'},
  dm11:{code:'D.M.1.1',title:'Ethics Compliance Process',desc:'Ethics compliance risks are monitored and managed',grp:'DM'},
  dm12:{code:'D.M.1.2',title:'Ethics Risk Due Diligence',desc:'Ethics risks are identified and assessed proactively',grp:'DM'},
  dm21:{code:'D.M.2.1',title:'Ethics Roles & Responsibilities',desc:'Ethics responsibilities are assigned and authorized',grp:'DM'},
  dm22:{code:'D.M.2.2',title:'Ethics Policies & Controls',desc:'Ethics policies and control processes are implemented',grp:'DM'},
  dm23:{code:'D.M.2.3',title:'Ethics Training',desc:'Ethics training is provided for managers and workers',grp:'DM'},
  dm31:{code:'D.M.3.1',title:'Ethics Communications',desc:'Two-way ethics communication and feedback is established',grp:'DM'},
  dm32:{code:'D.M.3.2',title:'Ethics Grievance Reporting',desc:'Anonymous ethics grievances can be reported without reprisal',grp:'DM'},
  dm41:{code:'D.M.4.1',title:'Ethics Management Review',desc:'Ethics management reviews continually improve performance',grp:'DM'},
  dm42:{code:'D.M.4.2',title:'Ethics Self-Audit',desc:'Ethics self-audits assess conformance with the RBA Code',grp:'DM'},
  dm43:{code:'D.M.4.3',title:'Ethics Corrective Actions',desc:'Ethics corrective action processes close identified gaps',grp:'DM'},
  e11:{code:'E1.1',title:'Company Commitment',desc:'Establishes supply chain responsibility commitment',grp:'E'},
  e12:{code:'E2.1',title:'Materials Restrictions',desc:'Manages restricted and hazardous materials',grp:'E'},
  e13:{code:'E3.1',title:'Responsible Minerals',desc:'Ensures responsible sourcing of minerals',grp:'E'},
  e14:{code:'E4.1',title:'Supplier Communication',desc:'Requires suppliers to follow RBA codes',grp:'E'},
  e15:{code:'E4.2',title:'Supplier Identification',desc:'Next-tier major suppliers are identified and assessed',grp:'E'},
  e16:{code:'E4.3',title:'Supplier Implementation',desc:'Suppliers are required to implement the RBA code',grp:'E'},
  e17:{code:'E4.4',title:'Supplier Monitoring',desc:'Supplier RBA code performance and improvement are tracked',grp:'E'},
};
const GRPS={A:'Labor Standards',A1:'Forced Labor',A2:'Young Workers',A3:'Working Hours',A4:'Wages & Benefits',A5:'Non-Discrimination',A6:'Freedom of Association',AM:'Labor Mgmt System',D:'Ethics',DM:'Ethics Mgmt System',E:'Supply Chain'};
const TOP_GRP_MAP={A:['A1','A2','A3','A4','A5','A6'],AM:['AM'],D:['D'],DM:['DM'],E:['E']};

// ─── REQUIRED DOCUMENT LISTS (On-Site Audit Rev 8.0.1) ──────────────────────────
const DOC_LIST={
  A1:[
    'Contracts with labor agencies, labor brokers, labor service providers',
    'Example of a worker contract — Permanent / Salaried / Hourly / Temporary / Seasonal / Juvenile / Apprentice / FMW (as applicable)',
    'Records of employment incl. proof of age, identity, and government worker permits',
    'Termination notice policy',
    'Recruitment/hiring process/procedure',
    'Documentation of employee loan and credit schemes',
    'Records of fees paid by workers (if applicable) — last 24 months',
  ],
  A2:[
    'Company policy for young worker protection and appropriate hours/shifts',
    'Minimum hiring age policy',
    'Procedure for obtaining and validating proof of age documentation',
    'Records of training and apprenticeship programs',
    'Child labor assistance/remediation process',
    'Juvenile worker protection procedures',
  ],
  A3:[
    'Non-traditional work hour permits or overtime waivers issued by government agencies',
    'Information provided to workers on legal requirements for working hours and overtime',
    'Working hours policy',
    'Process for allocating and controlling overtime hours',
    'Work time registration process/procedure',
    'Worker timecards or timesheets — most recent 12-month period',
    'Evidence that employees voluntarily agreed to overtime (e.g., signed statement)',
    'Evidence of communication of overtime to workers',
  ],
  A4:[
    'Information provided to workers on wages, deductions, calculations, and benefits',
    'Examples of how wages were set for each job code',
    'Disciplinary wage deductions and bonus award practices',
    'List of allowances (e.g. food, accommodation) and procedure',
    'Procedure for piece rate determination and calculations (if applicable)',
    'List of worker contributions and procedure',
    'Local minimum wage definition',
    'Wage records / pay slips — last 12 months (all deductions, contributions, earnings)',
    'Records of contributions to worker insurance schemes',
    'Payment records of contributions to worker insurance schemes',
    'Proof of purchase of all applicable insurance for workers',
    'Proof of maternity/paternity leave policy',
  ],
  A5:[
    'Facility rules and regulations on acceptable worker practices and disciplinary measures',
    'Disciplinary process/procedure',
    'Records of disciplinary actions',
    'Pre-employment / pre-placement medical examination requirements',
    'Medical confidentiality procedure and practice',
    'Information on worker population (type, gender, function, ethnicity, age)',
    'Current job advertisements and qualifications',
    'Procedure for workers to request reasonable religious accommodation',
    'Religious accommodation records',
    'Procedure for workers to request reasonable disability accommodation',
    'Disability accommodation records',
  ],
  A6:[
    'Information provided to workers on local laws re: freedom of association and labor unions',
    'Minutes of worker meetings and/or union-management meetings',
    'Evidence of regular communications and feedback channels with workers',
    'Records of workers\' complaints and actions taken (communicated to workers)',
  ],
  AM:[
    '[XM.1] Copy of customer requirements (e.g., RBA)',
    '[XM.1] Tracking system for monitoring SER laws and regulations',
    '[XM.1] Copy of applicable laws',
    '[XM.1] Procedure to identify, evaluate and rank risks',
    '[XM.1] Records on risk assessment when a Significant Change occurred',
    '[XM.1] Listing of identified risks and risk assessment review records',
    '[XM.1] Action plans addressing highest identified risks',
    '[XM.2] Organizational chart with roles and responsibilities',
    '[XM.2] Records of management system reviews',
    '[XM.2] Company policies for the corresponding section',
    '[XM.2] Control procedures implemented',
    '[XM.2] Training analysis, calendar, records, and evaluations',
    '[XM.3] Factory rules (e.g., Employee Handbook)',
    '[XM.3] Process for communicating SER performance and expectations',
    '[XM.3] Information to workers on how to confidentially report issues',
    '[XM.3] Policy/procedure on whistle blowing + statistics',
    '[XM.3] Records of workers\' grievances, investigations, and actions taken',
    '[XM.3] Worker surveys, complaints, and feedback',
    '[XM.4] Current year performance objectives, targets, and review results',
    '[XM.4] Current improvement initiatives and progress status',
    '[XM.4] Assessment process and procedure',
    '[XM.4] Copies of Assessments carried out in last 3 years',
    '[XM.4] Corrective Action management procedure',
    '[XM.4] Copies of corrective action plans (last 3 years) and current status',
    '[XM.4] Records of Nonconformance tracking, closure, and management reviews',
    '[XM.4] Legal compliance records of citations/penalties for labor/ethics violations',
  ],
  D1:[
    'Policy ensuring gifts to/from suppliers and customers are not excessive in cost or frequency',
    'Procedures for addressing workers/agents suspected of accepting improper payments or gifts',
    'Investigation procedures and subsequent sanctions',
    'Disciplinary procedures/policy',
    'Disciplinary records',
  ],
  D2:[
    'Non-disclosure agreement template/form',
    'Non-disclosure agreements with suppliers and customers',
    'Non-disclosure agreements with service providers',
  ],
  D3:[
    'Intellectual property review and protection policies',
  ],
  D4:[
    'Annual financial report independently assessed by financial assessment firm',
    'Fair business / anti-collusion policy',
    'Advertising policy/communications policy',
    'Advert/job advert',
  ],
  D5:[
    'Policy/procedure on whistle blowing',
    'Clear communications to workers/employees on non-retaliation',
    'Procedures to investigate possible retaliation allegations',
  ],
  D6:[
    'A formal policy and program to protect privacy',
    'Training material and training records on privacy protection',
  ],
  E1:[
    'Labor, Employment, Ethics, Health & Safety and Environment Policy',
    'Corporate Responsibility Policy / Code of Business Conduct policy or manual',
  ],
  E2:[
    'Procurement and manufacturing specifications re: legal and customer product content restrictions',
    'Records of communication of RoHS, REACH, WEEE and other restrictions to suppliers',
    'Analytical test results',
  ],
  E3:[
    'Responsible sourcing of minerals policy/procedures',
    'Risk assessment of sources of materials (3TG + Cobalt free or conflict free)',
    'Action plans to ensure responsible sourcing of minerals',
    'Due Diligence records related to 3TG + Cobalt — last 2 years',
  ],
  E4:[
    'Communication records with suppliers for RBA code requirements',
    'Contract terms and conditions requiring suppliers to conform to the RBA code',
    'Next tier Major Supplier identification analysis',
    'Next tier Major Supplier/Labor Agent program',
    'On-site Major Supplier code conformance verification reports',
    'Corrective action plans for On-site Major Supplier verification findings',
    'Working Hours and wage documentation for on-site service provider workers',
  ],
};
DOC_LIST.DM=DOC_LIST.AM;

const ITEM_DOC_MAP={
  a11:'A1',a12:'A1',a13:'A1',
  a21:'A2',a22:'A2',a23:'A2',
  a31:'A3',a32:'A3',a33:'A3',
  a41:'A4',a42:'A4',a43:'A4',
  a51:'A5',a52:'A5',a53:'A5',a54:'A5',
  a61:'A6',a62:'A6',a63:'A6',
  am11:'AM',am12:'AM',am21:'AM',am22:'AM',am23:'AM',
  am31:'AM',am32:'AM',am41:'AM',am42:'AM',am43:'AM',
  d11:'D1',d12:'D2',d13:'D3',d14:'D4',d15:'D5',d16:'D6',
  dm11:'DM',dm12:'DM',dm21:'DM',dm22:'DM',dm23:'DM',
  dm31:'DM',dm32:'DM',dm41:'DM',dm42:'DM',dm43:'DM',
  e11:'E1',e12:'E2',e13:'E3',e14:'E4',e15:'E4',e16:'E4',e17:'E4',
};

const DOC_LIST_KO={
  A1:[
    '노무 대행사, 노무 중개인, 노무 서비스 제공자와의 계약서',
    '근로계약서 예시 — 정규직 / 월급제 / 시급제 / 임시직 / 계절직 / 연소근로자 / 수습생 / 외국인 이주근로자',
    '고용 기록 (연령 증빙, 신분증, 정부 발급 취업 허가 포함)',
    '퇴직 통보 정책',
    '채용/고용 프로세스 및 절차',
    '직원 대출 및 신용 제도 관련 문서',
    '근로자가 지불한 비용 기록 (해당 시) — 최근 24개월',
  ],
  A2:[
    '연소근로자 보호 및 적정 근무시간/교대 정책',
    '최저 고용 연령 정책',
    '연령 증빙 서류 수령 및 확인 절차',
    '교육 및 수습 프로그램 기록',
    '아동 노동 지원/구제 절차',
    '연소근로자 보호 절차',
  ],
  A3:[
    '정부 기관 발급 비표준 근무시간 허가 또는 초과근무 면제 승인서',
    '근무시간 및 초과근무 법적 요건에 대한 근로자 안내 자료',
    '근무시간 정책',
    '초과근무 시간 배분 및 통제 프로세스',
    '근무시간 등록 프로세스/절차',
    '근로자 출퇴근 기록 또는 근무시간표 — 최근 12개월',
    '근로자의 초과근무 자발적 동의 증빙 (예: 서명 동의서)',
    '초과근무 통보 증빙',
  ],
  A4:[
    '임금, 공제, 산정 방식 및 복리후생에 대한 근로자 안내 자료',
    '직무 코드별 임금 책정 방식 예시',
    '징계성 임금 공제 및 상여금 지급 기준',
    '수당 목록 (예: 식비, 숙소) 및 절차',
    '성과급(도급) 산정 방식 및 절차 (해당 시)',
    '근로자 기여금 목록 및 절차',
    '지역 최저임금 기준',
    '임금 기록 / 급여명세서 — 최근 12개월 (모든 공제·기여금·수입 내역)',
    '근로자 보험 기여금 납부 기록',
    '근로자 보험 기여금 납부 증빙',
    '근로자 전체 의무 보험 가입 증빙',
    '육아휴직/배우자 출산휴가 정책 증빙',
  ],
  A5:[
    '직장 내 허용 행위 및 징계 조치 규정',
    '징계 프로세스/절차',
    '징계 조치 기록',
    '채용 전/배치 전 건강검진 요건',
    '의료 정보 비밀 보호 절차 및 실행 현황',
    '근로자 구성 정보 (유형, 성별, 직무, 출신 지역, 연령 등)',
    '현행 채용 공고 및 자격 요건',
    '종교적 편의 제공 요청 절차',
    '종교적 편의 제공 기록',
    '장애인 편의 제공 요청 절차',
    '장애인 편의 제공 기록',
  ],
  A6:[
    '결사의 자유 및 노동조합 관련 지역 법률에 대한 근로자 안내 자료',
    '근로자 회의 및/또는 노사 회의 회의록',
    '근로자와의 정기 소통 및 피드백 채널 운영 증빙',
    '근로자 불만 사항 및 조치 결과 기록 (근로자 공유 포함)',
  ],
  AM:[
    '[XM.1] 고객 요구사항 사본 (예: RBA)',
    '[XM.1] SER 법규 및 규정 모니터링 추적 시스템',
    '[XM.1] 적용 법규 사본',
    '[XM.1] 리스크 식별·평가·등급화 절차',
    '[XM.1] 중요 변경 발생 시 리스크 평가 기록',
    '[XM.1] 식별된 리스크 목록 및 리스크 평가 검토 기록',
    '[XM.1] 최고 위험 항목에 대한 실행 계획',
    '[XM.2] 역할 및 책임이 포함된 조직도',
    '[XM.2] 경영시스템 검토 기록',
    '[XM.2] 해당 분야 회사 정책',
    '[XM.2] 실행 중인 통제 절차',
    '[XM.2] 교육 분석, 일정, 기록 및 평가',
    '[XM.3] 공장 규정 (예: 직원 핸드북)',
    '[XM.3] SER 성과 및 기대사항 소통 프로세스',
    '[XM.3] 기밀 문제 신고 방법 근로자 안내 자료',
    '[XM.3] 내부 고발(Whistle Blowing) 정책/절차 및 통계',
    '[XM.3] 근로자 고충, 징계 조사 및 조치 결과 기록',
    '[XM.3] 근로자 설문, 불만 및 경영진 피드백',
    '[XM.4] 당해 연도 성과 목표·대상 및 검토 결과',
    '[XM.4] 개선 이니셔티브 및 진행 현황',
    '[XM.4] 감사 프로세스 및 절차',
    '[XM.4] 최근 3년 이내 감사 결과 사본',
    '[XM.4] 시정 조치 관리 절차',
    '[XM.4] 최근 3년 이내 시정 조치 계획 사본 및 현황',
    '[XM.4] 부적합 사항 추적·종결 및 경영 검토 기록',
    '[XM.4] 노동/윤리 법규 위반 관련 법적 조치/과태료 기록',
  ],
  D1:[
    '공급업체 및 고객에 대한 선물이 과도하지 않도록 하는 정책',
    '부적절한 금품 수수 의혹 직원/대리인 처리 절차',
    '조사 절차 및 제재 조치',
    '징계 절차/정책',
    '징계 기록',
  ],
  D2:[
    '비밀유지계약서(NDA) 양식/서식',
    '공급업체 및 고객과 체결한 NDA',
    '서비스 제공업체와 체결한 NDA',
  ],
  D3:[
    '지식재산권 검토 및 보호 정책',
  ],
  D4:[
    '외부 회계법인이 감사한 연간 재무제표',
    '공정 거래 / 담합 금지 정책',
    '광고 정책/커뮤니케이션 정책',
    '광고물/채용 공고',
  ],
  D5:[
    '내부 고발(Whistle Blowing) 정책/절차',
    '보복 금지에 관한 근로자 안내 자료',
    '보복 의혹 조사 절차',
  ],
  D6:[
    '개인정보 보호 공식 정책 및 프로그램',
    '개인정보 보호 교육 자료 및 교육 기록',
  ],
  E1:[
    '노동, 고용, 윤리, 안전보건 및 환경 정책',
    '기업 사회 책임 정책 / 비즈니스 윤리 강령 또는 매뉴얼',
  ],
  E2:[
    '법적·고객 제품 함유물질 제한 요건 관련 조달 및 제조 사양서',
    '공급업체 대상 RoHS, REACH, WEEE 및 기타 제품 함유물질 제한 요건 전달 기록',
    '분석 시험 결과',
  ],
  E3:[
    '책임 있는 광물 조달 정책/절차',
    '원재료 출처 리스크 평가 (3TG + 코발트 미사용 또는 분쟁 광물 미포함)',
    '책임 있는 광물 조달 확보를 위한 실행 계획',
    '3TG + 코발트 관련 실사(Due Diligence) 기록 — 최근 2년',
  ],
  E4:[
    'RBA 코드 요건에 관한 공급업체 소통 기록',
    'RBA 코드 준수를 요구하는 공급업체 계약 조건',
    '차상위 주요 공급업체 식별 분석',
    '차상위 주요 공급업체/노무 대행사 프로그램',
    '현장 주요 공급업체 코드 준수 검증 보고서',
    '현장 공급업체 검증 결과 시정 조치 계획',
    '현장 서비스 제공업체 근로자의 근무시간 및 임금 서류 (해당 시)',
  ],
};
DOC_LIST_KO.DM=DOC_LIST_KO.AM;

function docRefBox(id){
  const key=ITEM_DOC_MAP[id];
  const ko=S.lang==='ko';
  const docs=(ko?DOC_LIST_KO:DOC_LIST)[key];
  if(!docs||!docs.length)return'';
  const hasSupData=docs.some((_,i)=>S.supplierChecks[supKey(key,i)]);
  const label=ko?`📋 필요 서류 목록 (${key}) — ${docs.length}건`:`📋 Required Documents (${key}) — ${docs.length} items`;
  return`<details class="docref">
    <summary>${label}${hasSupData?` <span style="font-size:10px;color:var(--C);margin-left:4px">● ${ko?'사전체크':'Pre-checked'}</span>`:''} <span style="font-size:10px">▼</span></summary>
    <div class="docref-body">${docs.map((d,i)=>{
      const sv=S.supplierChecks[supKey(key,i)];
      const badge=sv?`<span class="sup-check-badge ${sv}" style="margin-left:6px;font-size:10px">${sv==='y'?(ko?'준비됨':'Ready'):sv==='n'?(ko?'미준비':'Not Ready'):'N/A'}</span>`:'';
      return`<div class="docref-item">${d}${badge}</div>`;
    }).join('')}</div>
  </details>`;
}

function renderHomeDocs(){
  const ko=S.lang==='ko';
  const dl=ko?DOC_LIST_KO:DOC_LIST;
  const tabs=[
    {id:'A', label:ko?'A 노동':'A Labor', groups:['A1','A2','A3','A4','A5','A6','AM']},
    {id:'D', label:ko?'D 윤리':'D Ethics', groups:['D1','D2','D3','D4','D5','D6','DM']},
    {id:'E', label:ko?'E 공급망':'E Supply', groups:['E1','E2','E3','E4']},
  ];
  const grpNameEN={A1:'Forced Labor',A2:'Young Workers',A3:'Working Hours',A4:'Wages & Benefits',
    A5:'Non-Discrimination',A6:'Freedom of Association',AM:'Labor Mgmt System',
    D1:'Business Integrity',D2:'Disclosure of Information',D3:'Intellectual Property',D4:'Fair Business',
    D5:'Identity Protection',D6:'Privacy',DM:'Ethics Mgmt System',
    E1:'Company Commitment',E2:'Materials Restrictions',E3:'Responsible Minerals',E4:'Supplier Responsibility'};
  const grpNameKO={A1:'강제 노동',A2:'연소 근로자',A3:'근무 시간',A4:'임금 및 복리후생',
    A5:'비차별',A6:'결사의 자유',AM:'노동 관리 시스템',
    D1:'비즈니스 무결성',D2:'정보 공개',D3:'지식재산권',D4:'공정 거래',
    D5:'신원 보호',D6:'개인정보 보호',DM:'윤리 관리 시스템',
    E1:'기업 책임',E2:'물질 제한',E3:'책임 광물 조달',E4:'공급업체 책임'};
  const grpName=ko?grpNameKO:grpNameEN;
  const active=S.docTab||'A';
  const activeTab=tabs.find(t=>t.id===active)||tabs[0];

  const xmNameEN={'XM.1':'Risk Assessment','XM.2':'Control Processes','XM.3':'Communications','XM.4':'Performance Review'};
  const xmNameKO={'XM.1':'리스크 평가','XM.2':'통제 프로세스','XM.3':'소통 및 고충','XM.4':'성과 검토 및 개선'};
  const xmName=ko?xmNameKO:xmNameEN;

  function renderGroupDocs(g){
    const docs=dl[g];
    if(!docs||!docs.length)return'';
    if(g==='AM'||g==='DM'){
      const sub={};
      docs.forEach(d=>{
        const m=d.match(/^\[XM\.(\d+)\]/);
        const k=m?`XM.${m[1]}`:'other';
        if(!sub[k])sub[k]=[];
        sub[k].push(d.replace(/^\[XM\.\d+\]\s*/,''));
      });
      const subHtml=Object.entries(sub).map(([sk,items])=>`
        <details class="docsubgrp" style="margin:0;border-radius:var(--r-md);border:1px solid var(--line);margin-bottom:5px">
          <summary style="padding:9px 12px;font-size:12px">
            <span style="flex:1"><span style="color:var(--blue);margin-right:5px;font-size:11px">${sk}</span>${xmName[sk]||sk}<span style="font-size:11px;color:var(--muted);font-weight:400;margin-left:5px">${items.length}${ko?'건':''}</span></span>
            <span class="dchev">▼</span>
          </summary>
          <div class="docsubgrp-body" style="padding:2px 12px 8px">
            ${items.map(d=>`<div class="docitem">${d}</div>`).join('')}
          </div>
        </details>`).join('');
      return`<details class="docsubgrp">
        <summary>
          <span style="flex:1"><span style="color:var(--blue);margin-right:6px">${g}</span>${grpName[g]||g}<span style="font-size:11px;color:var(--muted);font-weight:400;margin-left:6px">${docs.length}${ko?'건':''}</span></span>
          <span class="dchev">▼</span>
        </summary>
        <div class="docsubgrp-body">${subHtml}</div>
      </details>`;
    }
    return`<details class="docsubgrp">
      <summary>
        <span style="flex:1"><span style="color:var(--blue);margin-right:6px">${g}</span>${grpName[g]||g}<span style="font-size:11px;color:var(--muted);font-weight:400;margin-left:6px">${docs.length}${ko?'건':''}</span></span>
        <span class="dchev">▼</span>
      </summary>
      <div class="docsubgrp-body">
        ${docs.map(d=>`<div class="docitem">${d}</div>`).join('')}
      </div>
    </details>`;
  }

  const items=activeTab.groups.map(renderGroupDocs).join('');

  return`<div style="background:var(--canvas);border-bottom:1px solid var(--line)">
    <div class="doctabs">
      ${tabs.map(tab=>`<button class="doctab${tab.id===active?' act':''}" onclick="S.docTab='${tab.id}';render()">${tab.label}</button>`).join('')}
    </div>
    <div class="doctab-content">${items}</div>
  </div>`;
}

// ─── QUESTIONS ────────────────────────────────
const Q={
  // A1.1
  a11_mgmt:[
    {id:'M1',text:'Is all overtime strictly voluntary — can workers always refuse without any penalty?',hint:'Ask: "What happens if a worker says no to overtime?" Any mention of warnings, wage cuts, or job threats = violation.',sev:'major'},
    {id:'M2',text:'Is voluntary resignation guaranteed with ≤1 month notice and a penalty ≤60% of one month\'s base salary?',hint:'Penalty = amount deducted if a worker leaves without giving notice. e.g. Monthly salary 500 USD → max penalty = 300 USD (60%). More than 1 month notice required = Major finding.',sev:'major'},
    {id:'M3',text:'Do contracts with labor agents explicitly prohibit passing recruitment fees on to workers?',hint:'Labor agent = a third-party company that recruits workers for the facility. Recruitment fee = any amount the agent charges for finding or placing a worker. Workers must NEVER pay this — it must be borne by the employer.',sev:'major'},
    {id:'M4',text:'Do workers have unrestricted access to toilets, drinking water, and medical facilities at all times?',hint:'Ask: "Do workers need to ask permission or wait for a pass to use the restroom?" Any restriction is a violation.',sev:'major'},
    {id:'M5',text:'Can dormitory residents freely leave the facility outside working hours? (No curfew in place)',hint:'Ask: "Is there a time after which dormitory residents cannot leave?" or "Are dormitory gates locked at night?" Any curfew = Priority finding. Select N/A if no dormitory.',sev:'priority',na:true},
    {id:'M6',text:'Are there no movement-restricting systems in place (forced locks, guard-controlled exits, toilet passes)?',hint:'Toilet pass = a paper slip workers must obtain from a supervisor to use the restroom. Forced lock = dormitory or factory doors locked from outside while workers are inside. Either = Priority finding.',sev:'priority'},
    {id:'M7',text:'Is there a documented procedure to reimburse any discovered prohibited fees within 90 days?',hint:'Prohibited fees = any charge to workers for getting or keeping their job (e.g. recruitment, placement, visa processing paid by worker). If found, must be reimbursed within 90 days of discovery.',sev:'major'},
  ],
  a11_doc:[
    {id:'D1',text:'Do HR, attendance, and wage records show no indicators of non-voluntary labor?',hint:'Look for: workers penalized for resigning, forced training repayment to "buy out" a contract, very high turnover with no documented reason, grievance records about coercion.',sev:'major'},
    {id:'D2',text:'Do overtime records confirm voluntary consent for all extra hours?',hint:'Check for signed OT consent forms or individual OT request records. If everyone is recorded as "volunteering" with no supporting document, probe further.',sev:'major'},
    {id:'D3',text:'Does the employment contract state a resignation notice period of 1 month or less?',hint:'e.g. A contract clause saying "3 months advance notice required to resign" directly violates RBA rules. Maximum allowed = 1 month.',sev:'major'},
    {id:'D4',text:'Is the penalty for leaving without notice ≤60% of one month\'s base salary in the contract?',hint:'e.g. Monthly base salary = 500 USD. Maximum permissible penalty for leaving without notice = 300 USD (60%). Anything higher = Major. Over 3 months\' salary = Priority.',sev:'major'},
    {id:'D5',text:'Are permitted fees documented and disclosed to workers in writing?',hint:'Permitted fees = fees the employer IS allowed to charge, e.g. subsidized housing or canteen deductions. These must be pre-agreed at hire and appear itemized on the payslip.',sev:'minor'},
    {id:'D6',text:'Are there no records of prohibited fees (recruitment/placement) in payroll or accounting?',hint:'⚠ Selecting "Not Confirmed" adds the fee matrix screen. Check: employer invoices from labor agents, itemized payslip deductions, worker sign-off receipts.',sev:'fee'},
    {id:'D7',text:'Do facility access/exit logs show no evidence of movement restrictions?',hint:'Look for: gate logs requiring supervisor sign-off to exit, toilet pass records, dormitory logs showing workers were unable to leave after a certain hour.',sev:'priority'},
    {id:'D8',text:'Personal loans: repayment ≤10% of monthly base pay, interest-free, ≤6 months duration?',hint:'e.g. Worker borrows 300 USD. Monthly salary = 500 USD → max repayment/month = 50 USD (10%), max loan = 300 USD (60% of salary), no interest allowed. Select N/A if no loans.',sev:'minor',na:true},
    {id:'D9',text:'Education loans: repayment ≤10% of monthly base pay, interest-free, ≤12 months duration?',hint:'e.g. Worker borrows 600 USD for school fees. Monthly salary = 500 USD → max loan = 600 USD (120% of salary), max repayment/month = 50 USD (10%), no interest. Select N/A if no education loans.',sev:'minor',na:true},
    {id:'D10',text:'Are all worker loans confirmed to be completely interest-free?',hint:'Even a small interest rate (e.g. 0.5%/month) on worker loans is prohibited under RBA. Check all loan agreements for any interest clause. Select N/A if no loans of any kind.',sev:'major',na:true},
    {id:'D11',text:'Do dormitory access records confirm workers can move freely during off hours?',hint:'Check gate logs for after-hours exits. Look for patterns showing workers consistently could not leave between certain hours. Select N/A if no dormitory on site.',sev:'priority',na:true},
  ],
  a11_worker:[
    {id:'W1',text:'Did you pay any fees — recruitment, placement, or deposits — to get or keep this job?',hint:'Probe with: "Did a recruiter charge you anything to get this job?" / "Did you pay a deposit that would be returned when you leave?" / "Did you borrow money to pay for this job opportunity?"',sev:'major',inv:true},
    {id:'W2',text:'Can you refuse overtime without any retaliation or negative consequence?',hint:'If the worker hesitates, probe: "Has anyone ever been demoted or lost pay for saying no to overtime?"',sev:'major'},
    {id:'W3',text:'Do you feel genuinely free to resign whenever you choose?',hint:'If hesitant, follow up: "Is there any penalty, fine, or debt you would owe if you decided to quit today?"',sev:'priority'},
    {id:'W4',text:'Can you use toilets and access drinking water freely without any restriction?',hint:'Ask: "Do you need to ask anyone or get a pass to use the restroom during your shift?"',sev:'major'},
    {id:'W5',text:'Can you leave the dormitory freely outside working hours?',hint:'Ask: "Is there a time at night when the gates are locked and you cannot leave?" Any curfew = Priority. Select N/A if not in a dormitory.',sev:'priority',na:true},
    {id:'W6',text:'Do you currently have your passport/ID in your own possession?',hint:'If "No" → flag for A1.3 (Document Retention) as well. Ask: "Where are they being kept and can you get them back right now if you wanted to?"',sev:'a13f',na:true},
  ],
  // A1.2
  a12_mgmt:[
    {id:'M1',text:'Are employment contracts provided before the worker\'s first day? (Migrant workers: before leaving home country)',hint:'For local workers: signed contract must be given before Day 1. For migrant workers: contract must be in hand BEFORE they board a plane or bus. Providing it upon arrival = Priority finding.',sev:'priority'},
    {id:'M2',text:'Are contracts written in a language the worker can read and fully understand?',hint:'A Vietnamese worker given a contract written only in English or Chinese has NOT been given a readable contract. If a translator was used at signing, a certified translated copy should be provided.',sev:'major'},
    {id:'M3',text:'Is there a formal process to verbally explain key terms (wages, hours, resignation) to all new hires?',hint:'Look for: a structured onboarding checklist where an HR officer walks through the contract verbally with each worker and the worker signs to confirm they understood.',sev:'minor'},
    {id:'M4',text:'Have any migrant workers\' contract terms been changed unfavorably after arrival in the host country?',hint:'⚠️ Inverted: "Yes" = violation. e.g. Worker signed for 500 USD/month in home country, arrived to find new contract says 380 USD/month with "adjusted for local conditions." = Priority finding. N/A if no migrant workers.',sev:'priority',inv:true,na:true},
  ],
  a12_doc:[
    {id:'D1',text:'Are employment contracts written in the worker\'s native language or a language they clearly understand?',hint:'For multi-nationality workforces: each worker should receive a contract in their own language, or an officially translated copy alongside the local-language version.',sev:'major'},
    {id:'D2',text:'Is there evidence that contracts were signed before the employment start date?',hint:'Check: contract signature date vs. employee start date in the HR system. If signature date = start date or is AFTER start date, that is a Priority finding.',sev:'priority'},
    {id:'D3',text:'For migrant workers: no records of contract terms changed unfavorably after arrival?',hint:'Look for two contract versions in the same file — one signed pre-departure and a newer one signed post-arrival with lower wages, longer hours, or worse terms. That is a Priority finding. Select N/A if no migrant workers.',sev:'priority',na:true},
  ],
  a12_worker:[
    {id:'W1',text:'Did you receive and understand your employment contract before your first day of work?',hint:'If the worker says "I signed it when I arrived" or "I signed on my first day" — that may be a Priority finding. Follow up: "Did you read it before signing?"',sev:'priority'},
    {id:'W2',text:'Did a staff member verbally explain your key conditions (pay, hours, how to resign)?',hint:'Look for evidence this was more than a one-way reading. Did the worker have a chance to ask questions? Did they receive a summary card in their language?',sev:'minor'},
    {id:'W3',text:'(Migrant workers) Were you offered worse conditions after arriving than what was originally in your contract?',hint:'e.g. "The pay on my original contract was higher, but when I arrived I was told the rate had changed." Any material change in wages/hours/duties after arrival = Priority. Select N/A if not a migrant worker.',sev:'priority',inv:true,na:true},
  ],
  // A1.3
  a13_mgmt:[
    {id:'M1',text:'Is there a policy of NOT retaining original worker identity documents (passports, visas, national IDs)?',hint:'Photocopies for HR records are fine. The ORIGINAL document must stay with the worker at all times (or in a locker the worker controls). If originals are in the HR office filing cabinet = Priority finding.',sev:'priority'},
    {id:'M2',text:'Where legally required to hold documents, can workers access them within 12 hours of any request?',hint:'Some countries (e.g. certain Gulf states) legally require employers to hold migrant worker passports during visa processing. In these cases only: a worker must still be able to get their document back within 12 hours of asking — no delays, no fees. Select N/A if local law does NOT require this.',sev:'major',na:true},
    {id:'M3',text:'Is there absolutely no fee charged for safekeeping worker documents?',hint:'Even a token fee (e.g. "1 USD/month storage fee") is prohibited. Any charge to a worker for holding their own documents = Priority finding.',sev:'priority'},
  ],
  a13_doc:[
    {id:'D1',text:'Are there no original identity documents found in personnel files? (Only copies should be retained)',sev:'priority'},
    {id:'D2',text:'Are there no records of fees charged to workers for document custody?',sev:'priority'},
    {id:'D3',text:'Where legal retention is required: are custody receipts (reason + duration) issued to workers?',hint:'Select N/A if document retention is not required by local law',sev:'minor',na:true},
  ],
  a13_worker:[
    {id:'W1',text:'Do you have your passport/ID in your own possession or can you access it immediately at any time?',sev:'priority'},
    {id:'W2',text:'Have you ever been charged a fee for the facility to store your personal documents?',sev:'priority',inv:true},
  ],
  // A2.1
  a21_mgmt:[
    {id:'M1',text:'Is there a documented minimum hiring age policy meeting or exceeding local law and the RBA minimum of 15 years?',hint:'If local law sets a higher minimum (e.g. 18 in some regions), the higher threshold applies. The policy must be written down — a verbal "we don\'t hire children" is not sufficient.',sev:'major'},
    {id:'M2',text:'Is age verification (government-issued ID check) performed for every new hire?',hint:'Acceptable verification: national ID card, birth certificate, passport. Checking age verbally or by appearance only is NOT acceptable. All verification documents must be copied and filed.',sev:'major'},
    {id:'M3',text:'If an underage worker is found, is there a remediation plan that maintains their income and supports return to schooling?',hint:'RBA does NOT allow simply firing the underage worker. The company must: (1) remove them from work, (2) continue paying them, (3) help them return to school, (4) offer re-employment when they reach legal age.',sev:'major'},
  ],
  a21_doc:[
    {id:'D1',text:'Do all personnel files confirm every worker meets the minimum age requirement?',sev:'priority'},
    {id:'D2',text:'Does the employee roster show no workers below the legal or company minimum age?',sev:'priority'},
    {id:'D3',text:'Are copies of age-verification documents (e.g., national ID) retained in each personnel file?',sev:'major'},
  ],
  a21_worker:[
    {id:'W1',text:'Were you asked to provide proof of your age when you were hired?',sev:'major'},
    {id:'W2',text:'Are you aware of any workers here who appear to be below the legal working age?',sev:'priority',inv:true},
  ],
  // A2.2
  a22_mgmt:[
    {id:'M1',text:'Are all workers under 18 identified and assigned exclusively to non-hazardous roles?',hint:'Hazardous roles include: operating heavy machinery, working with chemicals, working at heights, carrying heavy loads, or any task listed as restricted for minors under local law.',sev:'major'},
    {id:'M2',text:'Do workers under 18 ever perform night work or overtime?',hint:'⚠️ Inverted — "Yes" = violation. Night work = any shift that includes hours between roughly 10 PM–7 AM. Overtime = any hours beyond the standard daily limit set by local law.',sev:'priority',inv:true},
    {id:'M3',text:'Are health checks conducted for young workers where required by local law?',hint:'Many countries require a pre-employment or periodic medical check for workers under 18. If required: check that records exist for all young workers currently employed.',sev:'minor'},
  ],
  a22_doc:[
    {id:'D1',text:'Do personnel files and job assignments confirm all workers under 18 are in non-hazardous roles?',hint:'Cross-reference: list of workers under 18 (from roster) vs. job codes assigned to them. If any are assigned to machine operation, chemical handling, or other restricted tasks = Priority.',sev:'priority'},
    {id:'D2',text:'Do working time records confirm workers under 18 never work night shifts or overtime?',hint:'⚠️ Inverted. Confirm records show NO night/OT for under-18s. e.g. If a 17-year-old clocks out past 10 PM, or total weekly hours exceed the standard limit = Priority finding.',sev:'priority'},
    {id:'D3',text:'Where required by law, are health check records maintained for young workers?',hint:'Select N/A if no workers under 18, OR if local law does not require health checks for this age group.',sev:'minor',na:true},
  ],
  a22_worker:[
    {id:'W1',text:'(Workers under 18 only) Do you perform any hazardous tasks, night shifts, or overtime?',hint:'⚠️ Inverted — "Yes" = violation. Only ask workers who are under 18. If no workers under 18 are present, select N/A.',sev:'priority',inv:true,na:true},
    {id:'W2',text:'Are you aware of any workers under 18 performing hazardous tasks, night work, or overtime here?',hint:'⚠️ Inverted — "Yes" = violation. Ask general workers, not just those under 18. This can surface issues not visible in records.',sev:'priority',inv:true},
  ],
  // A2.3
  a23_mgmt:[
    {id:'M1',text:'Are student workers, interns, and apprentices assigned only to tasks related to their field of study or vocational learning?',hint:'e.g. An electronics engineering student assigned to PCB assembly = OK. The same student assigned to general warehouse packing = Not OK. The work must genuinely complement their academic program.',sev:'major'},
    {id:'M2',text:'Are tri-partite agreements (student, school, facility) in place where required by law?',hint:'Tri-partite agreement = a formal 3-way contract signed by the student (or guardian), their school, and the employer. It specifies learning goals, hours, and pay. Required in many countries for student worker programs.',sev:'minor'},
    {id:'M3',text:'Are learners paid at least minimum wage (or a legally permitted lower rate for a limited period only)?',hint:'Some countries allow a sub-minimum training wage for the first 3–6 months of an apprenticeship only. After that, full minimum wage applies. Zero-pay "internships" for production work are prohibited.',sev:'major'},
  ],
  a23_doc:[
    {id:'D1',text:'Do learner records include learning objectives, work assignments, and progress evaluations?',hint:'A learner file should contain more than just attendance records. Look for: a learning plan signed by the school, periodic performance evaluations, and records of skills acquired.',sev:'minor'},
    {id:'D2',text:'Is there no evidence of labor agencies being used to recruit or manage student workers or interns?',hint:'RBA prohibits staffing agencies as intermediaries for student workers. The arrangement must go directly through the school. Agency involvement (invoices, placement fees, agency contracts) = Major finding.',sev:'major'},
    {id:'D3',text:'Are learner working hours recorded and confirmed not to conflict with school or training schedules?',hint:'e.g. If a student has class on Tuesday and Thursday mornings, those times should not appear as working hours. Cross-check time records against school timetables.',sev:'major'},
  ],
  a23_worker:[
    {id:'W1',text:'(Student/intern/apprentice) Are your assigned tasks directly related to your course of study or vocational training?',sev:'major',na:true},
    {id:'W2',text:'(Student/intern/apprentice) Do your working hours conflict with your school attendance or training schedule?',sev:'major',inv:true,na:true},
  ],
  // A3.1
  a31_mgmt:[
    {id:'M1',text:'Are weekly working hours tracked per worker and consistently kept below 60 hours?',sev:'major'},
    {id:'M2',text:'Is all overtime strictly voluntary — can workers always refuse without any penalty?',sev:'major'},
    {id:'M3',text:'Are workers under 18 confirmed to never perform any overtime whatsoever?',sev:'priority'},
  ],
  a31_doc:[
    {id:'D1',text:'Do time records (3-month sample: peak, average, and low months) show no worker exceeds 60 hrs/week?',hint:'Sample must cover 3 different months: 1 peak (busiest) month, 1 average month, 1 quiet month. Check both individual time cards AND summary reports. ⚠ "Not Confirmed" opens the hours matrix.',sev:'hours'},
    {id:'D2',text:'Are time records accurate and confirmed free from any falsification or manipulation?',hint:'Warning signs: all workers recorded at exactly 59.5 hrs/week (just under the limit); time records that appear copy-pasted across multiple weeks; clock-in/out logs that don\'t match supervisors\' shift logs.',sev:'major'},
    {id:'D3',text:'Do records confirm workers under 18 perform no overtime?',hint:'Cross-reference the under-18 worker list against OT records. Even one instance of overtime for a worker under 18 = Priority finding. Select N/A if no workers under 18 on site.',sev:'priority',na:true},
  ],
  a31_worker:[
    {id:'W1',text:'Are you ever required or pressured to work more than 60 hours in a week?',hint:'⚠️ Inverted — "Yes" = violation. Probe: "Have you felt you had to stay late even when you didn\'t want to?" "What would happen if you refused extra hours?"',sev:'major',inv:true},
    {id:'W2',text:'Can you refuse overtime without facing any negative consequences?',hint:'Common pressure tactics: being moved to a less desirable shift, losing access to bonuses, or being told "if you don\'t do OT you might not have a job next month."',sev:'major'},
    {id:'W3',text:'Have you ever been asked to sign time records that do not reflect your actual hours?',hint:'⚠️ Inverted — "Yes" = Major finding. e.g. "My supervisor asked me to sign a sheet showing 59 hours but I actually worked 68 that week." = falsification.',sev:'major',inv:true},
  ],
  // A3.2
  a32_mgmt:[
    {id:'M1',text:'Do all workers receive at least one full day off per seven days?',hint:'"Full day off" = a continuous 24-hour period free from work obligations. A half-day off does not qualify. This applies to ALL workers including night shift and rotating shift workers.',sev:'major'},
    {id:'M2',text:'Have there been any periods where workers worked more than 6 consecutive days?',hint:'⚠️ Inverted — "Yes" = violation. Ask specifically about peak production periods or pre-holiday seasons when consecutive days are most likely to occur.',sev:'major',inv:true},
  ],
  a32_doc:[
    {id:'D1',text:'Do time records (3-month sample) confirm no worker works more than 6 consecutive days?',hint:'Look at each individual worker\'s attendance across the 3-month sample. A string of 7+ consecutive days with no day off = violation. ⚠ "Not Confirmed" opens the rest days matrix.',sev:'days'},
    {id:'D2',text:'Where exceptions exist, are they documented as emergency or unusual situations?',hint:'Emergency exceptions (e.g. natural disaster, critical equipment failure) must be formally recorded with: the date, the reason, management sign-off, and evidence the situation was genuinely exceptional. Select N/A if no exceptions found.',sev:'minor',na:true},
  ],
  a32_worker:[
    {id:'W1',text:'Do you receive at least one full day off every week?',sev:'major'},
    {id:'W2',text:'Have you ever worked more than 6 days in a row without any day off?',sev:'major',inv:true},
  ],
  // A3.3
  a33_mgmt:[
    {id:'M1',text:'Do workers receive at least one meal break per shift as required by local law?',sev:'major'},
    {id:'M2',text:'Can workers take sick leave with a valid medical certificate without losing their job or financial penalty?',sev:'priority'},
    {id:'M3',text:'Is maternity/paternity leave provided in full compliance with local law?',sev:'major'},
  ],
  a33_doc:[
    {id:'D1',text:'Do leave records accurately reflect holidays taken, sick leave used, and maternity/paternity leave granted?',sev:'major'},
    {id:'D2',text:'Are leave records consistent with medical certificates and evidence of actual absences?',sev:'major'},
  ],
  a33_worker:[
    {id:'W1',text:'Do you receive a proper meal break during your shift?',sev:'major'},
    {id:'W2',text:'If you become ill, can you take time off without losing your job or facing a financial penalty?',sev:'priority'},
    {id:'W3',text:'Do you know your holiday, annual leave, and sick leave entitlements?',sev:'minor'},
  ],
  // A4.1
  a41_mgmt:[
    {id:'M1',text:'Are all workers paid at least the agreed/minimum wage for all regular hours, and equal pay for equal work is applied?',hint:'"Equal pay for equal work" = a female and male worker doing the same job must receive the same base pay. Dispatch/temporary workers doing the same work as direct hires must also receive equal pay.',sev:'major'},
    {id:'M2',text:'Is overtime compensated at a rate of at least 125% of the regular hourly rate?',hint:'e.g. Regular rate = 5 USD/hour → any overtime hour must be paid at least 6.25 USD (125%). Paying overtime at the same flat rate as regular hours = Major. Check if local law requires a higher rate — use whichever is stricter.',sev:'major'},
    {id:'M3',text:'Are resigned or terminated workers paid all outstanding wages within one month of their last working day?',hint:'Outstanding wages include: remaining salary, unused leave payout, and any bonuses earned. Delaying payment by more than 1 month = Major. More than 1 month delayed for >5% of leavers = Priority.',sev:'major'},
  ],
  a41_doc:[
    {id:'D1',text:'Do payroll records confirm all workers are paid at or above the agreed/minimum wage for all regular hours?',hint:'Compare: payslip amounts vs. local minimum wage rates. Also check whether temporary, dispatch, or part-time workers are receiving a lower rate than direct hires doing the same work.',sev:'major'},
    {id:'D2',text:'Do records confirm overtime is paid at a minimum rate of 125% of regular pay?',hint:'Check the OT pay rate formula used in payroll. If the calculation base excludes bonuses or allowances that should be included, the effective rate may fall below 125% even though the stated rate looks correct.',sev:'major'},
    {id:'D3',text:'Are wages paid directly to workers with no unauthorized deductions (including for discipline or PPE)?',hint:'Unauthorized deductions include: fines for breaking equipment, charges for uniform/PPE the worker is required to use, or any deduction used as punishment. These are prohibited regardless of whether the worker signed an agreement permitting them.',sev:'major'},
  ],
  a41_worker:[
    {id:'W1',text:'Are you paid at least minimum wage for all hours worked, and at a higher rate for overtime?',hint:'Ask: "Do you know what the minimum wage is here?" and "What rate do you receive for overtime hours?"',sev:'major'},
    {id:'W2',text:'Is your wage paid on time with no unexplained delays?',hint:'Probe: "Has your pay ever been late? By how many days?" Delays of more than 2 days beyond the agreed payday = finding. More than 1 month late = Priority.',sev:'major'},
    {id:'W3',text:'Have wages ever been deducted as a disciplinary measure or for PPE?',hint:'⚠️ Inverted — "Yes" = violation. e.g. "My wages were cut because I broke a machine" or "I had to pay for my own safety gloves" = prohibited deductions.',sev:'major',inv:true},
  ],
  // A4.2
  a42_mgmt:[
    {id:'M1',text:'Are workers provided with a pay statement each pay period showing regular hours, OT hours, pay rates, and all deductions?',sev:'major'},
    {id:'M2',text:'Are workers\' statutory insurance contributions (retirement, health, accident) clearly itemized on their pay statement?',sev:'major'},
  ],
  a42_doc:[
    {id:'D1',text:'Do payslip records accurately show regular hours, OT hours, compensation rates, and itemized deductions?',sev:'major'},
    {id:'D2',text:'Are payroll records free from unauthorized or disciplinary deductions?',sev:'major'},
  ],
  a42_worker:[
    {id:'W1',text:'Do you receive a payslip each pay period clearly showing your hours, pay rates, and all deductions?',sev:'major'},
    {id:'W2',text:'Can you understand the information on your payslip?',sev:'minor'},
  ],
  // A4.3
  a43_mgmt:[
    {id:'M1',text:'Are all legally required statutory deductions (taxes, social insurance) calculated correctly?',hint:'Statutory deductions typically include: income tax, pension/retirement fund, health insurance, work injury insurance, unemployment insurance. Ask to see the rate table used and compare it against the current legal rates.',sev:'major'},
    {id:'M2',text:'Are these deductions submitted to the relevant government agencies within the legally required timeframe?',hint:'Most countries require monthly remittance. Submissions more than 3 months overdue = Priority finding. The worker has already had money deducted but the employer hasn\'t forwarded it to the government.',sev:'priority'},
  ],
  a43_doc:[
    {id:'D1',text:'Do records confirm employer contributions to statutory insurance schemes are calculated correctly by individual worker?',hint:'Check that the calculation base is correct (should typically include base pay + OT pay + regular bonuses). Errors to look for: applying last year\'s rates, excluding OT pay from the base, or not enrolling all eligible workers.',sev:'major'},
    {id:'D2',text:'Do payment records confirm contributions are submitted to government agencies on time?',hint:'Ask to see government receipts, bank transfer records, or online submission confirmations. Compare submission dates against the legal deadline. Missing receipts for any month = flag for follow-up.',sev:'priority'},
  ],
  a43_worker:[
    {id:'W1',text:'Have deductions been made from your wages that you did not agree to or cannot explain?',sev:'major',inv:true},
  ],
  // A5.1
  a51_mgmt:[
    {id:'M1',text:'Is there a clear anti-discrimination and anti-harassment policy covering hiring, pay, promotion, training, and termination?',hint:'The policy must name specific protected characteristics (gender, race, religion, nationality, age, disability, pregnancy, etc.) and apply to ALL stages of employment — not just hiring.',sev:'major'},
    {id:'M2',text:'Are workers subjected to pregnancy, virginity, or discriminatory medical tests as a condition of employment?',hint:'⚠️ Inverted — "Yes" = Priority. e.g. Requiring female applicants to take a pregnancy test as part of hiring = prohibited. Requiring a worker to prove they are not pregnant to keep their job = prohibited.',sev:'priority',inv:true},
    {id:'M3',text:'Is there a functioning, accessible grievance mechanism for reporting discrimination or harassment?',hint:'Look for: a dedicated HR hotline, anonymous suggestion box, email address, or grievance form in workers\' languages. "Functioning" means reports are actually investigated and responded to — not just received.',sev:'major'},
  ],
  a51_doc:[
    {id:'D1',text:'Do HR records (payroll, benefits, hiring, promotions, discipline, termination) show no evidence of discrimination by protected characteristics?',hint:'Check: Are male and female workers in the same role paid differently? Are promotion records dominated by one nationality? Do disciplinary records disproportionately target one ethnic group or gender?',sev:'major'},
    {id:'D2',text:'Do grievance records show no unresolved cases of harassment or inhumane treatment?',hint:'A grievance filed but never investigated or closed with no explanation = Priority finding. Look for: date filed, investigator assigned, outcome documented, worker notified.',sev:'priority'},
    {id:'D3',text:'Are there no discriminatory conditions in job postings, application forms, or employment contracts?',hint:'e.g. Job posting saying "Female only, age 18–25" or application form asking about marital status, religion, or pregnancy = discriminatory. Check both printed materials and online job ads.',sev:'major'},
  ],
  a51_worker:[
    {id:'W1',text:'Have you personally experienced or witnessed discrimination, harassment, or inhumane treatment at this facility?',sev:'priority',inv:true},
    {id:'W2',text:'Have you seen workers treated differently based on race, gender, religion, nationality, or other personal characteristics?',sev:'major',inv:true},
    {id:'W3',text:'Do you know how to report harassment or discrimination if it happens to you?',sev:'minor'},
  ],
  // A5.2
  a52_mgmt:[
    {id:'M1',text:'Are all disciplinary actions formally documented and reviewed by management?',hint:'Verbal warnings given informally with no record kept = non-conformance. Each disciplinary action should generate a written record that goes through an HR or management review process.',sev:'major'},
    {id:'M2',text:'Are workers informed of the reasons for disciplinary action and given the opportunity to respond?',hint:'The worker must: (1) be told exactly what they did wrong, (2) have a chance to give their side of the story, and (3) receive a copy of the written disciplinary record. Surprise terminations with no prior communication = Major.',sev:'major'},
  ],
  a52_doc:[
    {id:'D1',text:'Do disciplinary records show all cases are documented with the worker\'s signature or written acknowledgment?',hint:'The worker\'s signature = confirmation they were informed (not agreement). If a worker refuses to sign, there should be a note from a witness. Missing signatures across multiple records = systemic issue.',sev:'major'},
    {id:'D2',text:'Are there no records of inhumane, discriminatory, or harassing disciplinary measures (physical punishment, public shaming, verbal abuse)?',sev:'priority'},
  ],
  a52_worker:[
    {id:'W1',text:'If you have received disciplinary action, were you told the reason and given a chance to respond?',sev:'major',na:true},
    {id:'W2',text:'Have you experienced or witnessed disciplinary measures involving physical punishment, public shaming, or verbal abuse?',sev:'priority',inv:true},
  ],
  // A5.3
  a53_mgmt:[
    {id:'M1',text:'Are reasonable requests for religious accommodation (prayer time, dress, dietary) considered and documented?',hint:'e.g. A Muslim worker requests a 10-minute prayer break twice per shift; a Sikh worker requests exemption from a standard hardhat over their turban; a Jewish worker requests a shift swap for a religious holiday. All must be formally considered.',sev:'major'},
    {id:'M2',text:'Where religious accommodation is refused, is a written reason communicated to the requesting worker in a timely manner?',hint:'A refusal is only valid if documented with a specific business reason (e.g. safety concern, operational impossibility). Refusing without explanation, or simply ignoring the request = Major finding.',sev:'major'},
  ],
  a53_doc:[
    {id:'D1',text:'Are records of religious accommodation requests maintained, showing the decision and reason provided?',sev:'major'},
    {id:'D2',text:'Where prayer or religious areas are requested, are adequate spaces provided?',sev:'minor',na:true},
  ],
  a53_worker:[
    {id:'W1',text:'If you have requested a religious accommodation, was it handled respectfully and in a reasonable time?',sev:'major',na:true},
  ],
  // A5.4
  a54_mgmt:[
    {id:'M1',text:'Are reasonable requests for disability accommodation considered, documented, and implemented where possible?',hint:'e.g. A worker with a back injury needs an ergonomic chair; a worker with low vision needs larger print on work instructions; a worker with ADHD needs written task lists instead of verbal-only briefings. Disability includes physical, mental, and emotional conditions.',sev:'major'},
    {id:'M2',text:'Are disability assessment and effectiveness evaluation reports maintained for all identified disabilities?',hint:'For each worker with a disability: there should be an initial assessment (what accommodation is needed) AND a follow-up evaluation (is the accommodation actually working?). A periodic review is required — not just a one-time setup.',sev:'major'},
  ],
  a54_doc:[
    {id:'D1',text:'Are disability accommodation request records available showing the decision and reasoning given to the worker?',sev:'major'},
    {id:'D2',text:'Where accommodations are deemed ineffective, are corrective action plans documented and in place?',sev:'minor'},
  ],
  a54_worker:[
    {id:'W1',text:'If you or a colleague has requested a disability accommodation, was it addressed appropriately and in a timely manner?',sev:'major',na:true},
  ],
  // A6.1
  a61_mgmt:[
    {id:'M1',text:'Are workers free to form, join, or refrain from joining any trade union or worker representative body without management interference?',hint:'Ask: "What would happen to a worker who tried to organize a union here?" Threats of termination, demotion, or transfer for union activity = Priority. This also covers the right NOT to join — workers cannot be forced to join a union.',sev:'major'},
    {id:'M2',text:'Is management neutral regarding union activities, limiting any contribution to providing meeting space or materials only?',hint:'Allowed: providing a meeting room. NOT allowed: attending union meetings uninvited, funding the union, influencing who leads it, or paying union officers more than comparable workers. Management control of a union = Major finding.',sev:'major'},
  ],
  a61_doc:[
    {id:'D1',text:'Do records show no episodes of violence, threats, or retaliation related to union activities or freedom of association?',hint:'Look for: disciplinary records that followed a worker\'s union activity, transfer records targeting known union members, termination records coinciding with union organizing drives.',sev:'priority'},
    {id:'D2',text:'Do payroll records confirm union representatives or members are paid the same as comparable workers in similar roles?',sev:'major'},
    {id:'D3',text:'Do communication records show no restrictions on freedom of association communications among workers?',sev:'major'},
  ],
  a61_worker:[
    {id:'W1',text:'Are you aware of workers being threatened, penalized, or retaliated against for joining or organizing a union?',sev:'priority',inv:true},
    {id:'W2',text:'Do you feel free to join or not join a worker representative body without fear of any negative consequence?',sev:'major'},
  ],
  // A6.2
  a62_mgmt:[
    {id:'M1',text:'Does management engage in good-faith negotiations with the worker representative body whenever requested?',hint:'"Good faith" = genuinely engaging in discussions with an open mind. NOT good faith: ignoring meeting requests, attending once and rejecting everything without counter-proposal, or sending a low-level proxy with no authority to decide anything.',sev:'major'},
    {id:'M2',text:'Are the terms and conditions of any Collective Bargaining Agreement (CBA) fully implemented?',hint:'CBA = Collective Bargaining Agreement. A formal written agreement between the employer and the union setting out wages, hours, and working conditions. If a CBA exists, every clause must be actively applied — not just acknowledged. Select N/A if no CBA exists.',sev:'major',na:true},
  ],
  a62_doc:[
    {id:'D1',text:'Are there no records of management refusing to enter negotiations requested by the worker representative body?',hint:'Look for: union meeting request letters with no management response, union grievance records citing management stonewalling, or documented instances where management walked out of or cancelled scheduled negotiations.',sev:'major'},
    {id:'D2',text:'Where a CBA exists, do records confirm all its terms and conditions are being implemented?',sev:'major',na:true},
  ],
  a62_worker:[
    {id:'W1',text:'Are you aware of management refusing to negotiate with elected worker representatives?',sev:'major',inv:true},
    {id:'W2',text:'Do you know your rights regarding collective bargaining at this facility?',sev:'minor'},
  ],

  a63_mgmt:[
    {id:'M1',text:'Are workers free to peacefully assemble and express non-violent concerns without interference?',hint:'Peaceful assembly includes union meetings, worker groups, and petitions. Any restriction or punishment for peaceful gatherings = Major.',sev:'major'},
  ],
  a63_doc:[
    {id:'D1',text:'Do records and policies show no restrictions on peaceful worker assembly or group representation?',sev:'major'},
  ],
  a63_worker:[
    {id:'W1',text:'Can you join or form a peaceful group or meeting at work without fear of reprisal?',sev:'major',inv:true},
  ],

  // D1 Ethics
  d11_mgmt:[
    {id:'M1',text:'Is there a documented business integrity policy covering corruption, bribery, and improper advantages?',hint:'Look for a policy that addresses gifts, facilitation payments, conflicts of interest, and third-party interactions.',sev:'major'},
  ],
  d11_doc:[
    {id:'D1',text:'Is the business integrity policy documented, approved, and communicated to relevant personnel?',sev:'major'},
  ],
  d11_worker:[
    {id:'W1',text:'Are workers aware of the facility\'s business integrity expectations and how to report concerns?',sev:'minor'},
  ],

  d12_mgmt:[
    {id:'M1',text:'Is there a process to ensure disclosure of information is accurate and complete?',hint:'This process should cover financial, operational, and regulatory disclosures and identify responsible owners.',sev:'major'},
  ],
  d12_doc:[
    {id:'D1',text:'Do disclosure controls and records show information is reviewed for accuracy before release?',sev:'major'},
  ],
  d12_worker:[
    {id:'W1',text:'Do workers understand how relevant business information is disclosed and who is responsible?',sev:'minor'},
  ],

  d13_mgmt:[
    {id:'M1',text:'Is there a policy or procedure to protect intellectual property and confidential information?',hint:'This should cover employee confidentiality obligations, IP ownership, and restrictions on sharing proprietary data.',sev:'major'},
  ],
  d13_doc:[
    {id:'D1',text:'Are intellectual property protection measures documented and enforced?',sev:'major'},
  ],
  d13_worker:[
    {id:'W1',text:'Are workers aware of their responsibilities to protect confidential and proprietary information?',sev:'minor'},
  ],

  d14_mgmt:[
    {id:'M1',text:'Are fair business and competition policies in place to prohibit anti-competitive practices?',hint:'Check for policies addressing pricing, market allocation, bid-rigging, and misleading advertising.',sev:'major'},
  ],
  d14_doc:[
    {id:'D1',text:'Do records show the facility follows fair business practices and complies with competition laws?',sev:'major'},
  ],
  d14_worker:[
    {id:'W1',text:'Do workers understand the facility\'s expectations on fair business conduct and honest advertising?',sev:'minor'},
  ],

  d15_mgmt:[
    {id:'M1',text:'Is there a policy to protect identity and ensure non-retaliation for reporting concerns?',hint:'The policy should explicitly prohibit retaliation against anyone who reports misconduct in good faith.',sev:'major'},
  ],
  d15_doc:[
    {id:'D1',text:'Are non-retaliation and identity protection measures documented and communicated?',sev:'major'},
  ],
  d15_worker:[
    {id:'W1',text:'Do workers feel safe reporting concerns without fear of retaliation?',sev:'major',inv:true},
  ],

  d16_mgmt:[
    {id:'M1',text:'Is there a privacy policy covering lawful collection, use, and protection of personal data?',hint:'Privacy controls should cover employee and customer data, access restrictions, and data retention requirements.',sev:'major'},
  ],
  d16_doc:[
    {id:'D1',text:'Do privacy records show personal data is handled according to policy and applicable law?',sev:'major'},
  ],
  d16_worker:[
    {id:'W1',text:'Are workers aware of how their personal information is protected by the facility?',sev:'minor'},
  ],

  dm11_mgmt:[
    {id:'M1',text:'Is there a formal ethics risk assessment process for identifying and evaluating ethics risks?',hint:'A good process covers corruption, disclosure, IP, competition, privacy, and reporting risks across the facility.',sev:'major'},
  ],
  dm11_doc:[
    {id:'D1',text:'Are ethics risk assessment records documented, current, and reviewed periodically?',sev:'major'},
  ],
  dm11_worker:[
    {id:'W1',text:'Do workers know how ethics risks are assessed and managed at this facility?',sev:'minor'},
  ],

  dm12_mgmt:[
    {id:'M1',text:'Are ethics control processes implemented to prevent and detect misconduct?',hint:'Controls may include approval workflows, third-party due diligence, audit checks, and escalation routines.',sev:'major'},
  ],
  dm12_doc:[
    {id:'D1',text:'Are ethics control process documents available and followed in practice?',sev:'major'},
  ],
  dm12_worker:[
    {id:'W1',text:'Do workers understand the controls in place to prevent and report ethics issues?',sev:'minor'},
  ],

  dm13_mgmt:[
    {id:'M1',text:'Does the facility communicate ethics expectations clearly to workers and suppliers?',hint:'Communication should include policies, reporting channels, and training on key ethics topics.',sev:'major'},
  ],
  dm13_doc:[
    {id:'D1',text:'Are ethics communication materials documented and distributed appropriately?',sev:'minor'},
  ],
  dm13_worker:[
    {id:'W1',text:'Have workers received information on ethics policies and reporting channels?',sev:'minor'},
  ],

  dm14_mgmt:[
    {id:'M1',text:'Does senior management review ethics performance and improvement actions regularly?',hint:'Reviews should include incident trends, corrective actions, and progress on ethics objectives.',sev:'major'},
  ],
  dm14_doc:[
    {id:'D1',text:'Are ethics review records documented with findings and agreed follow-up actions?',sev:'major'},
  ],
  dm14_worker:[
    {id:'W1',text:'Do workers believe the facility follows through on ethics commitments and improvements?',sev:'minor'},
  ],

  dm21_mgmt:[
    {id:'M1',text:'Are ethics responsibilities and authorities clearly defined and assigned for all employee levels?',hint:'This should include senior management, supervisors, HR, and anyone responsible for ethics compliance.',sev:'major'},
  ],
  dm21_doc:[
    {id:'D1',text:'Are ethics roles and responsibilities documented and enforced through job descriptions or policies?',sev:'major'},
  ],
  dm21_worker:[
    {id:'W1',text:'Do workers know who is responsible for ethics and integrity issues at this facility?',sev:'minor'},
  ],

  dm22_mgmt:[
    {id:'M1',text:'Are ethics policies and control processes implemented to prevent misconduct and protect confidential information?',hint:'Controls should cover bribery, conflicts of interest, fair competition, privacy, and whistleblower protection.',sev:'major'},
  ],
  dm22_doc:[
    {id:'D1',text:'Are ethics policy documents and control procedures available and followed in practice?',sev:'major'},
  ],
  dm22_worker:[
    {id:'W1',text:'Do workers understand the facility’s ethics policies and the controls in place to enforce them?',sev:'minor'},
  ],

  dm23_mgmt:[
    {id:'M1',text:'Is there an ethics training process for managers and workers covering policies, reporting, and expected conduct?',hint:'Training should include anti-corruption, privacy, whistleblowing, and fair competition topics.',sev:'major'},
  ],
  dm23_doc:[
    {id:'D1',text:'Are ethics training materials and attendance records maintained for managers and workers?',sev:'major'},
  ],
  dm23_worker:[
    {id:'W1',text:'Have you received training on ethics expectations and how to report concerns?',sev:'minor'},
  ],

  dm31_mgmt:[
    {id:'M1',text:'Is there a two-way ethics communication process allowing workers and suppliers to give feedback?',hint:'Two-way means workers can both receive information and provide input through meetings, surveys, or hotlines.',sev:'major'},
  ],
  dm31_doc:[
    {id:'D1',text:'Are records kept of ethics communication and feedback activities, including follow-up actions?',sev:'minor'},
  ],
  dm31_worker:[
    {id:'W1',text:'Do you feel able to give input or raise ethics concerns without being ignored?',sev:'minor'},
  ],

  dm32_mgmt:[
    {id:'M1',text:'Is there an anonymous ethics grievance reporting process with protection against retaliation?',hint:'Anonymous complaints must be possible and should not be routed through the accused party or their supervisor.',sev:'major'},
  ],
  dm32_doc:[
    {id:'D1',text:'Are anonymous ethics grievance channels documented and accessible to workers?',sev:'major'},
  ],
  dm32_worker:[
    {id:'W1',text:'Do you know how to report an ethics concern anonymously if needed?',sev:'minor'},
  ],

  dm41_mgmt:[
    {id:'M1',text:'Does management regularly review ethics performance and improvement actions?',hint:'Reviews should include ethics incidents, training results, grievance outcomes, and corrective actions.',sev:'major'},
  ],
  dm41_doc:[
    {id:'D1',text:'Are ethics management review records documented with findings and corrective actions?',sev:'major'},
  ],
  dm41_worker:[
    {id:'W1',text:'Do workers see that ethics issues are taken seriously by management?',sev:'minor'},
  ],

  dm42_mgmt:[
    {id:'M1',text:'Is there a regular ethics self-audit process to assess compliance and identify improvement opportunities?',sev:'major'},
  ],
  dm42_doc:[
    {id:'D1',text:'Are ethics self-audit reports and action plans documented and reviewed?',sev:'major'},
  ],
  dm42_worker:[
    {id:'W1',text:'Are workers aware of internal ethics reviews and any resulting improvements?',sev:'minor'},
  ],

  dm43_mgmt:[
    {id:'M1',text:'Is there a corrective action process to address and close ethics non-conformances?',hint:'Corrective actions should include root cause analysis, assigned owners, deadlines, and verification of closure.',sev:'major'},
  ],
  dm43_doc:[
    {id:'D1',text:'Are ethics corrective action plans recorded and tracked to closure?',sev:'major'},
  ],
  dm43_worker:[
    {id:'W1',text:'Do you believe ethics problems are corrected and not just ignored?',sev:'minor'},
  ],

  e11_mgmt:[
    {id:'M1',text:'Has the company publicly committed to supply chain responsibility and RBA code compliance?',hint:'Commitment may be in a supplier code of conduct, policy statement, or customer-facing commitment document.',sev:'major'},
  ],
  e11_doc:[
    {id:'D1',text:'Is the supply chain commitment documented and available to interested stakeholders?',sev:'major'},
  ],
  e11_worker:[
    {id:'W1',text:'Do workers know the company has a commitment to responsible supply chain practices?',sev:'minor'},
  ],

  e12_mgmt:[
    {id:'M1',text:'Are materials restrictions and prohibited substances controlled through documented processes?',hint:'This should include restricted materials lists, sourcing controls, and supplier declarations where needed.',sev:'major'},
  ],
  e12_doc:[
    {id:'D1',text:'Are restricted materials and hazardous substance controls documented and enforced?',sev:'major'},
  ],
  e12_worker:[
    {id:'W1',text:'Are workers aware of any material restrictions or hazardous substance controls affecting their work?',sev:'minor'},
  ],

  e13_mgmt:[
    {id:'M1',text:'Does the company have a process for responsible sourcing of minerals and related reporting?',hint:'This should include due diligence on conflict minerals and supplier traceability for key commodities.',sev:'major'},
  ],
  e13_doc:[
    {id:'D1',text:'Are responsible minerals sourcing records maintained and reviewed?',sev:'major'},
  ],
  e13_worker:[
    {id:'W1',text:'Are workers aware of responsible minerals sourcing requirements for the company?',sev:'minor'},
  ],

  e14_mgmt:[
    {id:'M1',text:'Are suppliers required to comply with the RBA code and subject to due diligence?',hint:'Supplier responsibility should be included in contracts, audits, or onboarding procedures.',sev:'major'},
  ],
  e14_doc:[
    {id:'D1',text:'Do supplier records demonstrate verification of supplier responsibility and RBA compliance?',sev:'major'},
  ],
  e14_worker:[
    {id:'W1',text:'Do workers know suppliers are expected to meet the company\'s RBA requirements?',sev:'minor'},
  ],

  e15_mgmt:[
    {id:'M1',text:'Are next-tier major suppliers identified and assessed for risk using documented criteria?',hint:'Suppliers should be prioritized based on spending, criticality, and risk. This must include labor agents, contractors, and service providers.',sev:'major'},
  ],
  e15_doc:[
    {id:'D1',text:'Are records available showing the identification of next-tier major suppliers and the basis for their selection?',sev:'major'},
  ],
  e15_worker:[
    {id:'W1',text:'Do workers know whether key suppliers and contractors are identified and monitored?',sev:'minor'},
  ],

  e16_mgmt:[
    {id:'M1',text:'Is there a process to ensure next-tier major suppliers implement the RBA code?',hint:'This may include contracts, supplier assessments, audits, or follow-up verification activities.',sev:'major'},
  ],
  e16_doc:[
    {id:'D1',text:'Are supplier management records available showing how suppliers are required to implement the RBA code?',sev:'major'},
  ],
  e16_worker:[
    {id:'W1',text:'Do workers understand that suppliers must comply with the company\'s labor and ethics standards?',sev:'minor'},
  ],

  e17_mgmt:[
    {id:'M1',text:'Is supplier RBA code performance monitored and continuously improved through documented follow-up?',hint:'Monitoring should include corrective actions, ongoing review, and improvements for suppliers with identified gaps.',sev:'major'},
  ],
  e17_doc:[
    {id:'D1',text:'Are supplier performance monitoring records available and reviewed for improvement?',sev:'major'},
  ],
  e17_worker:[
    {id:'W1',text:'Do workers know the company tracks supplier performance and follows up on supplier issues?',sev:'minor'},
  ],

  // ── A.M LABOR MANAGEMENT SYSTEM ──
  am11_mgmt:[
    {id:'M1',text:'Is there a quarterly process to identify, track, and update compliance with applicable labor laws and customer requirements?',hint:'This should be a scheduled, documented process — not just reacting when an audit occurs. Ask to see the last quarterly review records.',sev:'major'},
    {id:'M2',text:'Is there a documented system to track and renew permits, certifications, and licenses before they expire?',hint:'e.g. A compliance calendar showing upcoming renewal dates for work permits, business licenses, health & safety certifications. Expired licenses found = Major.',sev:'major'},
  ],
  am11_doc:[
    {id:'D1',text:'Is there an accurate, current compliance register listing all applicable labor laws and regulations?',hint:'The register should name specific laws (e.g. Labor Standards Act Art.52, Minimum Wage Act), their requirements, and when they were last reviewed.',sev:'major'},
    {id:'D2',text:'Are compliance calendar reminders or scheduled review tasks documented and in place?',hint:'Look for: calendar entries, email reminders, task management system records, or a compliance schedule with owner assignments.',sev:'minor'},
  ],

  am12_mgmt:[
    {id:'M1',text:'Is there a formal process to identify and assess significant labor risks for all worker groups (direct, indirect, migrant, young)?',hint:'"Due diligence" = a proactive, systematic process — not just waiting for problems to surface. It must cover ALL worker types, not only permanent direct hires.',sev:'major'},
    {id:'M2',text:'Is the risk assessment updated when significant changes occur (new production process, new supplier, new worker population)?',hint:'Significant change examples: starting to hire migrant workers, adding a new production line, taking on a new major customer with stricter requirements.',sev:'major'},
  ],
  am12_doc:[
    {id:'D1',text:'Is there an up-to-date risk assessment report covering all facility operations and all required stakeholder groups?',hint:'Check the date — if the last assessment is over 2 years old or there has been a significant change since, it is likely out of date.',sev:'major'},
    {id:'D2',text:'Does the risk assessment include all required groups: direct workers, indirect/contract workers, migrant workers, young workers, and on-site contractors?',hint:'Each group has different risk profiles. A risk assessment covering only direct permanent workers is incomplete.',sev:'major'},
  ],

  am21_mgmt:[
    {id:'M1',text:'Is a senior-level representative formally assigned responsibility for labor compliance and RBA conformance?',hint:'This must be a named person with actual authority to implement corrective actions — not just a job title on paper. Ask: "Who is that person and what decisions can they make without approval?"',sev:'major'},
    {id:'M2',text:'Are labor compliance responsibilities defined at every relevant organizational level — management, supervisors, and HR?',hint:'It should be clear what each level is responsible for. e.g. Supervisors = monitor daily working hours; HR = maintain personnel records; Senior management = approve CAPs.',sev:'major'},
  ],
  am21_doc:[
    {id:'D1',text:'Do job descriptions formally assign labor compliance responsibilities at each relevant level?',hint:'Check that compliance tasks appear in actual job descriptions — not just verbally agreed. If compliance is not in the job description, it may not be prioritized.',sev:'major'},
    {id:'D2',text:'Are emergency labor compliance responsibilities also documented (not only normal operations)?',hint:'e.g. Who is responsible for contacting the labor authority if a serious injury occurs? Who handles an anonymous grievance during a public holiday?',sev:'minor'},
  ],
  am21_worker:[
    {id:'W1',text:'Do you know who at this facility is responsible for labor rights and working conditions issues?',hint:'Workers should be able to name a specific person or department (e.g. "HR Manager" or "the compliance officer on the 3rd floor"). Vague answers ("someone in HR") suggest poor communication.',sev:'minor'},
  ],

  am22_mgmt:[
    {id:'M1',text:'Are written labor policies in place covering all required RBA Code areas (forced labor, child labor, hours, wages, non-discrimination, freedom of association)?',hint:'Each topic must be explicitly addressed. A general "we follow all laws" statement is NOT sufficient — specific prohibitions and commitments must be stated.',sev:'major'},
    {id:'M2',text:'Does each labor policy have a documented implementation (control) process to ensure it is effectively followed in practice?',hint:'A policy without a control process is just a document. e.g. Policy says "no child labor" → control process = ID verification at hiring + cross-reference two ID types.',sev:'major'},
    {id:'M3',text:'Are all labor agents and contractors contractually required to comply with the facility\'s labor policies?',hint:'Check that service provider contracts include explicit RBA/labor compliance clauses — not just a generic "comply with local law" line.',sev:'major'},
  ],
  am22_doc:[
    {id:'D1',text:'Do written labor policies address all required RBA Code elements?',hint:'Use the policy checklist: forced labor, document retention, fees, child labor, young workers, working hours, days off, wages, non-discrimination, harassment, FOA, grievance. All must be present.',sev:'major'},
    {id:'D2',text:'Are risk control records available showing that the effectiveness of each control is regularly evaluated?',hint:'Controls must be monitored — not just set up. Look for: monitoring logs, audit trail records, supervisor verification records, or periodic control effectiveness review reports.',sev:'major'},
    {id:'D3',text:'Are minimum on-site records maintained: wages paid, hours worked, age verification, grievances, training records, and self-audit reports?',hint:'These are the minimum required records per RBA. All must be present, accurate, complete, and securely stored with appropriate access controls.',sev:'major'},
  ],
  am22_worker:[
    {id:'W1',text:'Have you been given or shown the company\'s policies on your rights as a worker (wages, hours, treatment, grievances)?',hint:'Workers don\'t need to quote the policy verbatim, but they should know it exists and where to find it. If no worker has seen a labor policy = significant communication failure.',sev:'minor'},
  ],

  am23_mgmt:[
    {id:'M1',text:'Is there a structured training program covering all labor policies and RBA requirements for both managers and workers?',hint:'The program should include: new hire orientation, periodic refresher training, and specialized training for roles with higher labor risk (e.g. recruiters, supervisors, dormitory managers).',sev:'major'},
    {id:'M2',text:'Does every new worker receive orientation covering labor rights and company policies within 30 days of hire?',hint:'>5% of workers not trained within 30 days of hire = Major finding. More than 5% with no training = likely Major/Priority.',sev:'major'},
  ],
  am23_doc:[
    {id:'D1',text:'Are training records available showing all workers and managers have completed required labor compliance training?',hint:'Records should show: worker name, training topic, date completed, trainer/facilitator name. Records covering <95% of the workforce = likely a finding.',sev:'major'},
    {id:'D2',text:'Do training records include evidence of training effectiveness (e.g. test scores, supervisor verification, post-training acknowledgment)?',hint:'Attendance records alone are not sufficient. There must be evidence the training was understood — e.g. a short written test, a demonstration, or a supervisor sign-off that the worker can apply the content.',sev:'minor'},
  ],
  am23_worker:[
    {id:'W1',text:'Did you receive training or an orientation on labor rights, company policies, and how to report concerns when you first joined?',hint:'If the worker says they only received safety or job skills training with no mention of labor rights, wages, or grievance process = gap in training.',sev:'major'},
  ],

  am31_mgmt:[
    {id:'M1',text:'Is there an ongoing two-way communication process allowing workers to give feedback on working conditions and labor practices?',hint:'"Two-way" = workers can SEND feedback, not just receive announcements. Examples: regular surveys, suggestion boxes with visible responses, worker-management committees, town halls.',sev:'major'},
    {id:'M2',text:'Are external stakeholders (suppliers, local community, customers) included in relevant labor-related communications?',hint:'This doesn\'t need to be frequent, but there must be an established channel. e.g. Supplier communication on RBA code expectations, community engagement records.',sev:'minor'},
  ],
  am31_doc:[
    {id:'D1',text:'Are records of worker feedback sessions, surveys, or focus groups maintained and show evidence feedback was acted upon?',hint:'The key word is "acted upon." If workers gave feedback but nothing changed and there is no record of a response = communication exists but is not effective.',sev:'major'},
    {id:'D2',text:'Do records confirm that worker feedback was received, reviewed, and responded to in a timely manner?',hint:'Look for: survey result summaries, meeting minutes showing feedback was discussed, follow-up actions assigned with owners and deadlines.',sev:'minor'},
  ],
  am31_worker:[
    {id:'W1',text:'Are there accessible ways for you to give feedback or raise suggestions about working conditions?',hint:'Ask: "Has anything changed at this facility based on worker feedback?" If the worker is unaware of any feedback channel = communication gap.',sev:'major'},
  ],

  am32_mgmt:[
    {id:'M1',text:'Is there an anonymous grievance reporting channel that workers can use without fear of retaliation or intimidation?',hint:'"Anonymous" = the worker\'s identity is not revealed to their supervisor or the person the grievance is about. Ask: "How does a worker report a grievance about their own supervisor?" If the only channel is through that supervisor = not adequate.',sev:'major'},
    {id:'M2',text:'Are all grievances investigated promptly, with corrective actions taken and communicated back to the complainant?',hint:'Grievances not investigated within 3 months = Priority finding. No response to complainant = Major. A formal investigation process with assigned investigators and timelines must exist.',sev:'priority'},
  ],
  am32_doc:[
    {id:'D1',text:'Do grievance records show each report was received, assigned to an investigator, resolved, and communicated back?',hint:'Each grievance record should have: date received, description, investigator assigned, investigation findings, corrective action, and date communicated to complainant.',sev:'major'},
    {id:'D2',text:'Are there any grievances that have been open for more than 3 months without a corrective action plan?',hint:'⚠️ Inverted — "Yes" = Priority finding. Check the grievance register for any record with a gap of >90 days between "received" and "resolved" dates.',sev:'priority',inv:true},
  ],
  am32_worker:[
    {id:'W1',text:'Do you know how to report a concern or grievance anonymously?',hint:'Workers should be able to describe at least one channel (e.g. "there is a suggestion box outside the cafeteria" or "I can call a hotline"). Blank responses = grievance mechanism is not accessible.',sev:'major'},
    {id:'W2',text:'If you or a colleague has reported a concern, was it investigated and resolved in a reasonable time?',hint:'If the worker reports a concern that was ignored or resulted in retaliation = Priority finding. Select N/A if neither the worker nor any known colleague has filed a grievance.',sev:'major',na:true},
  ],

  am41_mgmt:[
    {id:'M1',text:'Does senior management conduct at least an annual review of the labor management system\'s performance against targets?',hint:'"Senior management" = a person with authority to change budgets, headcount, and policies — not just HR staff. The review must cover actual performance data, not just a status update meeting.',sev:'major'},
    {id:'M2',text:'Are formal labor performance indicators, objectives, and targets defined with clear timelines and responsible owners?',hint:'e.g. Target: "Reduce overtime hours per worker to below 50/week by Q3" — with a baseline, target value, deadline, and named owner. Vague goals ("improve working conditions") are not sufficient.',sev:'major'},
  ],
  am41_doc:[
    {id:'D1',text:'Are management review meeting records available showing labor performance was reviewed at the senior level?',hint:'Check for: meeting agenda that includes labor performance, attendance list confirming a senior manager was present, and minutes showing decisions or actions were taken.',sev:'major'},
    {id:'D2',text:'Are progress tracking records available for all labor objectives and targets, showing current status?',hint:'Look for a dashboard or tracking sheet showing baseline, current performance, target, and whether the facility is on track. Objectives with no progress tracking = Major.',sev:'major'},
  ],

  am42_mgmt:[
    {id:'M1',text:'Is there a periodic self-audit process to assess conformance with RBA Code requirements and applicable labor laws?',hint:'Self-audit ≠ VAP preparation only. It should be a regular internal review (at least annually) covering all facility areas, all policies, records, and worker interviews — documented in a formal report.',sev:'major'},
    {id:'M2',text:'Are self-audit findings reviewed by senior management and used to drive corrective actions?',hint:'The self-audit loses value if findings stay within HR and never reach senior management. Check: are self-audit reports presented to facility leadership? Are CAPs generated for findings?',sev:'major'},
  ],
  am42_doc:[
    {id:'D1',text:'Are self-audit reports available covering all facility areas, all policies, physical conditions, records, and interviews?',hint:'A self-audit report should be similar in scope to a VAP audit report — covering all A1-A6 and AM items. A surface-level checklist covering only easy items is not an adequate self-audit.',sev:'major'},
  ],

  am43_mgmt:[
    {id:'M1',text:'Is there a corrective action process for labor non-conformances that includes root cause analysis, owners, and closure verification?',hint:'The process should require documented actions, deadlines, owners, and verification that the issue is closed.',sev:'major'},
  ],
  am43_doc:[
    {id:'D1',text:'Are corrective action records documented, tracked, and verified as closed for labor system findings?',sev:'major'},
  ],
  am43_worker:[
    {id:'W1',text:'Do workers believe corrective actions for labor issues are actually completed and monitored?',sev:'minor'},
  ],
};

// ─── STATE ────────────────────────────────────
// ─── TRANSLATIONS ─────────────────────────────
const T={
  en:{
    setup:'Setup',skip:'Skip →',start:'Start Inspection →',back:'← Back',items:'← Items',
    home:'🏠 Home',setupBtn:'⚙ Setup',reset:'↺ Reset',resetConfirm:'Reset all inspection data?',
    next:'Next →',result:'Result',
    mgmt:'Management Interview',doc:'Document Review',worker:'Worker Interview',
    fee:'Fee Matrix',hours:'Hours Matrix',days:'Rest Days Matrix',
    yes:'Yes',no:'No',na:'N/A',confirmed:'Confirmed',notConfirmed:'Not Confirmed',
    answered:'answered',step:'Step',of:'of',
    findings:'Findings',noFindings:'✓ No violations detected for this item.',
    capTitle:'CAP Guidance',lawNotes:'⚖️ Local Law Notes',
    recActions:'Recommended Corrective Actions',keyEvidence:'Key Evidence to Provide',
    noCAP:'No corrective action required. Maintain current practices and document compliance evidence.',
    mgmtCtx:'Ask the Compliance / HR Manager directly',
    docCtx:'Review documents and records on site',
    workerCtx:'Conduct private worker interviews (confidential)',
    laborAudit:'Labor Audit',selectItem:'Select an item below to begin',
    overall:'Overall',facilitySetup:'Facility & Country Settings',
    setupDesc:'Enter local law benchmarks. The stricter of local law or RBA standard always applies.',
    country:'Country / Region',countryHint:'v2: Country selection will auto-populate law fields',
    resignLbl:'Statutory Resignation Notice Period (months)',resignHint:'RBA maximum: 1 month',
    maxHrsLbl:'Statutory Maximum Weekly Working Hours',maxHrsHint:'RBA maximum: 60 hours/week',
    otLbl:'Statutory Overtime Premium (%)',otHint:'RBA minimum: 25% above regular rate (= 125%)',
    minWageLbl:'Statutory Minimum Monthly Wage (local currency)',
    minAgeLbl:'Minimum Legal Working Age',minAgeHint:'RBA minimum: 15 years',
    docRetLbl:'Does local law permit employer retention of personal documents?',
    permitted:'Permitted',notPermitted:'Not permitted',
    roadmap:'📌 Roadmap (v2): Select country → law fields auto-filled from reference database.',
    inProgress:'In Progress',notStarted:'Not Started',
    immediate:'Immediate Action',majorF:'Major Finding',minorF:'Minor Finding',
    priorityDesc:'A serious violation requiring immediate corrective action.',
    majorDesc:'A significant non-conformance. A CAP must be established.',
    minorDesc:'A minor non-conformance. An improvement plan should be created.',
    conformanceDesc:'All requirements are met for this item.',
    feeTitle:'Prohibited Fee Matrix',feeDesc:'D6 flagged prohibited fee records. Enter details to calculate the finding severity.',
    feeQ1:'Were prohibited fees reimbursed within 90 days?',feeYes:'Yes — Reimbursed',feeNo:'No',
    feeQ2:'% of workers affected',feeQ2sub:'Workers charged prohibited fees ÷ total workforce × 100',
    feeQ3:'Fee amount (% of one month\'s base salary)',feeQ3sub:'Total fees charged per worker during recruitment and employment',
    hrsTitle:'Working Hours Matrix',hrsDesc:'D1 flagged hours exceeding 60 hrs/week. Enter sample data.',
    hrsQ1:'Highest hours worked in any single week (sample period)',
    hrsQ2:'% of sampled work weeks exceeding 60 hours',hrsQ2sub:'Weeks over 60 hrs ÷ total sampled work weeks × 100',
    daysTitle:'Consecutive Days Matrix',daysDesc:'D1 flagged consecutive days exceeding 6. Enter sample data.',
    daysQ1:'Maximum consecutive days worked found in sample',
    daysQ2:'% of sampled workers exceeding 6 consecutive days',
    complete:'Complete all fields for auto-rating.',
  },
  ko:{
    setup:'설정',skip:'건너뛰기 →',start:'점검 시작 →',back:'← 이전',items:'← 항목',
    home:'🏠 홈',setupBtn:'⚙ 설정',reset:'↺ 초기화',resetConfirm:'모든 점검 데이터를 초기화하시겠습니까?',
    next:'다음 →',result:'결과',
    mgmt:'경영진 인터뷰',doc:'문서 검토',worker:'노동자 인터뷰',
    fee:'수수료 매트릭스',hours:'근무시간 매트릭스',days:'휴일 매트릭스',
    yes:'예',no:'아니오',na:'해당없음',confirmed:'확인됨',notConfirmed:'미확인',
    answered:'완료',step:'단계',of:'/',
    findings:'위반 항목',noFindings:'✓ 이 항목에서 위반 사항이 없습니다.',
    capTitle:'CAP 가이드',lawNotes:'⚖️ 현지 법령 참고',
    recActions:'권장 시정 조치',keyEvidence:'제출 근거 자료',
    noCAP:'시정 조치가 필요하지 않습니다. 현재 관행을 유지하고 준수 증거를 문서화하세요.',
    mgmtCtx:'컴플라이언스/HR 매니저에게 직접 질문',
    docCtx:'현장에서 문서 및 기록 직접 검토',
    workerCtx:'개인 노동자 인터뷰 진행 (비밀 보장)',
    laborAudit:'노동인권 점검',selectItem:'아래 항목을 선택하여 점검을 시작하세요',
    overall:'종합',facilitySetup:'시설 및 국가 설정',
    setupDesc:'현지 법령 기준을 입력하세요. RBA 기준과 현지 법 중 더 엄격한 기준이 적용됩니다.',
    country:'국가 / 지역',countryHint:'v2: 국가 선택 시 법령 기준 자동 입력 예정',
    resignLbl:'법정 퇴직 통보 기간 (개월)',resignHint:'RBA 기준: 최대 1개월',
    maxHrsLbl:'법정 최대 주간 근무시간',maxHrsHint:'RBA 기준: 주 최대 60시간',
    otLbl:'법정 초과근무 할증률 (%)',otHint:'RBA 기준: 정규임금의 최소 25% 이상 (= 125%)',
    minWageLbl:'법정 최저임금 (월, 현지 통화)',
    minAgeLbl:'법정 최저 취업 연령',minAgeHint:'RBA 기준: 최소 15세',
    docRetLbl:'현지 법상 고용주의 개인 서류 보관 허용 여부',
    permitted:'허용',notPermitted:'불허',
    roadmap:'📌 로드맵 (v2): 국가 선택 시 법령 기준 자동 입력 예정.',
    inProgress:'진행 중',notStarted:'미시작',
    immediate:'즉시 조치 필요',majorF:'중대 부적합',minorF:'경미 부적합',
    priorityDesc:'즉각적인 시정 조치가 필요한 심각한 위반입니다.',
    majorDesc:'중대 부적합입니다. CAP(시정 계획)을 수립해야 합니다.',
    minorDesc:'경미 부적합입니다. 개선 계획을 수립하세요.',
    conformanceDesc:'이 항목의 모든 요구 사항을 충족합니다.',
    feeTitle:'금지 수수료 매트릭스',feeDesc:'D6에서 금지 수수료 기록이 발견되었습니다. 심각도 계산을 위해 세부사항을 입력하세요.',
    feeQ1:'금지 수수료가 90일 이내에 환급되었습니까?',feeYes:'예 — 환급됨',feeNo:'아니오',
    feeQ2:'영향받은 근로자 비율 (%)',feeQ2sub:'수수료 부과 근로자 ÷ 전체 근로자 × 100',
    feeQ3:'수수료 금액 (월 기본급 대비 %)',feeQ3sub:'채용부터 고용까지 근로자당 부과된 수수료 합계',
    hrsTitle:'근무시간 매트릭스',hrsDesc:'D1에서 주 60시간 초과가 발견되었습니다. 표본 데이터를 입력하세요.',
    hrsQ1:'표본 기간 중 단일 주에 가장 많이 근무한 시간',
    hrsQ2:'주 60시간을 초과한 표본 주의 비율 (%)',hrsQ2sub:'60시간 초과 주 ÷ 전체 표본 주 × 100',
    daysTitle:'연속 근무일 매트릭스',daysDesc:'D1에서 6일 초과 연속 근무가 발견되었습니다. 표본 데이터를 입력하세요.',
    daysQ1:'표본에서 발견된 최대 연속 근무일',
    daysQ2:'연속 6일 이상 근무한 근로자 비율 (%)',
    complete:'자동 판정을 위해 모든 항목을 입력하세요.',
  },
  zh:{
    setup:'设置',skip:'跳过 →',start:'开始检查 →',back:'← 返回',items:'← 项目',
    home:'🏠 首页',setupBtn:'⚙ 设置',reset:'↺ 重置',resetConfirm:'重置所有检查数据？',
    next:'下一步 →',result:'结果',
    mgmt:'管理层访谈',doc:'文件审查',worker:'工人访谈',
    fee:'费用矩阵',hours:'工时矩阵',days:'休息日矩阵',
    yes:'是',no:'否',na:'不适用',confirmed:'已确认',notConfirmed:'未确认',
    answered:'已完成',step:'步骤',of:'/',
    findings:'发现问题',noFindings:'✓ 未发现此项目的违规情况。',
    capTitle:'CAP指导',lawNotes:'⚖️ 当地法律说明',
    recActions:'建议纠正措施',keyEvidence:'关键证据',
    noCAP:'无需纠正措施。请保持当前做法并记录合规证据。',
    mgmtCtx:'直接向合规/HR经理提问',
    docCtx:'现场审查文件和记录',
    workerCtx:'进行保密的工人个别访谈',
    laborAudit:'劳工审查',selectItem:'请在下方选择项目开始检查',
    overall:'综合',facilitySetup:'设施与国家设置',
    setupDesc:'请输入当地法律基准。当地法律与RBA标准中较严格的一方适用。',
    country:'国家/地区',countryHint:'v2：选择国家后将自动填充法律字段',
    resignLbl:'法定辞职通知期（月）',resignHint:'RBA标准：最多1个月',
    maxHrsLbl:'法定最高每周工时',maxHrsHint:'RBA标准：每周最多60小时',
    otLbl:'法定加班工资溢价（%）',otHint:'RBA标准：至少高于正常工资25%（即125%）',
    minWageLbl:'法定最低月工资（当地货币）',
    minAgeLbl:'法定最低就业年龄',minAgeHint:'RBA标准：最低15岁',
    docRetLbl:'当地法律是否允许雇主保留个人证件？',
    permitted:'允许',notPermitted:'不允许',
    roadmap:'📌 路线图（v2）：选择国家后将从参考数据库自动填充法律字段。',
    inProgress:'进行中',notStarted:'未开始',
    immediate:'需立即采取行动',majorF:'重大不符合',minorF:'轻微不符合',
    priorityDesc:'发现需要立即纠正的严重违规行为。',
    majorDesc:'存在重大不符合情况，必须制定CAP（纠正行动计划）。',
    minorDesc:'存在轻微不符合情况，应制定改进计划。',
    conformanceDesc:'此项目的所有要求均已满足。',
    feeTitle:'禁止费用矩阵',feeDesc:'D6发现禁止费用记录。请输入详细信息以计算发现严重程度。',
    feeQ1:'禁止费用是否在90天内退还？',feeYes:'是——已退还',feeNo:'否',
    feeQ2:'受影响工人比例（%）',feeQ2sub:'被收取禁止费用的工人 ÷ 全体工人 × 100',
    feeQ3:'费用金额（占一个月基本工资的%）',feeQ3sub:'招聘和就业期间向工人收取的总费用',
    hrsTitle:'工时矩阵',hrsDesc:'D1发现每周工时超过60小时。请输入样本数据。',
    hrsQ1:'样本期内单周最高工时',
    hrsQ2:'超过60小时的样本工作周比例（%）',hrsQ2sub:'超60小时的周 ÷ 总抽样周 × 100',
    daysTitle:'连续工作日矩阵',daysDesc:'D1发现连续工作日超过6天。请输入样本数据。',
    daysQ1:'样本中发现的最长连续工作天数',
    daysQ2:'连续工作超过6天的工人比例（%）',
    complete:'请填写所有字段以获得自动评级。',
  },
};

// Item translations
const IT={
  ko:{
    a11:{title:'강제노동 금지',desc:'강제·채무·강요 노동 금지'},
    a12:{title:'고용 조건 안내',desc:'취업 전 서면 고용 조건 제공'},
    a13:{title:'서류 압수 금지',desc:'신분 서류 몰수 금지'},
    a21:{title:'최저 취업 연령',desc:'아동 노동 없음'},
    a22:{title:'연소 근로자 보호',desc:'18세 미만 위험·야간·초과근무 금지'},
    a23:{title:'학습자 프로그램',desc:'학생·인턴·수습 규정 준수'},
    a31:{title:'주간 근무시간 제한',desc:'주 최대 60시간'},
    a32:{title:'휴일',desc:'7일에 최소 1일 휴일'},
    a33:{title:'휴식 및 휴가',desc:'의무 휴식 및 휴가 권리'},
    a41:{title:'임금 및 지급',desc:'동일 노동 동일 임금, 정확한 계산, 적시 지급'},
    a42:{title:'급여 명세서',desc:'매 지급 주기별 이해 가능한 급여 명세서'},
    a43:{title:'공제 및 원천징수',desc:'법정 공제 정확한 계산 및 적시 제출'},
    a51:{title:'차별 금지',desc:'차별·괴롭힘·비인도적 처우 금지'},
    a52:{title:'징계 조치',desc:'문서화 및 공정한 검토'},
    a53:{title:'종교적 편의',desc:'합리적 종교 요청 검토'},
    a54:{title:'장애 편의',desc:'합리적 장애 요청 검토'},
    a61:{title:'결사의 자유',desc:'근로자의 자유로운 노조 가입·설립 권리'},
    a62:{title:'단체 교섭',desc:'단체 교섭권 성실 존중'},
    am11:{title:'법령 준수 프로세스',desc:'적용 법령 분기별 파악 및 추적'},
    am12:{title:'리스크 평가',desc:'실제 및 잠재적 노동 리스크 실사'},
    am21:{title:'역할 및 책임',desc:'노동 컴플라이언스 책임 배정'},
    am22:{title:'정책 및 통제',desc:'적절한 노동 정책 및 효과적 통제 프로세스'},
    am23:{title:'교육 훈련',desc:'경영진·근로자 전체 노동 컴플라이언스 교육'},
    am31:{title:'소통 프로세스',desc:'노동 관행에 대한 쌍방향 소통'},
    am32:{title:'고충 처리 메커니즘',desc:'보복 없는 익명 고충 신고'},
    am41:{title:'경영 성과 검토',desc:'노동 관리 시스템 연간 경영진 검토'},
    am42:{title:'자체 감사',desc:'RBA 기준 정기 자체 점검'},
  },
  zh:{
    a11:{title:'禁止强迫劳动',desc:'禁止强迫、债役或强制性劳动'},
    a12:{title:'雇佣条款告知',desc:'就业前提供书面雇佣条款'},
    a13:{title:'禁止扣押证件',desc:'禁止没收个人身份证件'},
    a21:{title:'最低就业年龄',desc:'不得使用童工'},
    a22:{title:'未成年工人保护',desc:'18岁以下不得从事危险/夜班/加班'},
    a23:{title:'学习者项目',desc:'学生/实习生/学徒合规'},
    a31:{title:'每周工时限制',desc:'每周最多60小时'},
    a32:{title:'休息日',desc:'每7天至少1天休息'},
    a33:{title:'休息与休假',desc:'法定休息时间和假期权利'},
    a41:{title:'工资与支付',desc:'同工同酬、准确计算、及时支付'},
    a42:{title:'工资单',desc:'每支付周期提供清晰工资单'},
    a43:{title:'扣款与代扣',desc:'按时提交准确的法定扣款'},
    a51:{title:'禁止歧视',desc:'禁止歧视、骚扰及不人道对待'},
    a52:{title:'纪律措施',desc:'有记录且经公平审查'},
    a53:{title:'宗教便利',desc:'合理考虑宗教申请'},
    a54:{title:'残障便利',desc:'合理考虑残障申请'},
    a61:{title:'结社自由',desc:'工人可自由加入或组建工会'},
    a62:{title:'集体谈判',desc:'善意尊重集体谈判权利'},
    am11:{title:'合规流程',desc:'季度跟踪适用劳工法律'},
    am12:{title:'风险评估',desc:'劳工实际与潜在风险尽职调查'},
    am21:{title:'职责与权限',desc:'各级劳工合规责任分配'},
    am22:{title:'政策与管控',desc:'充分的劳工政策与有效的管控流程'},
    am23:{title:'培训',desc:'管理层及工人劳工合规培训'},
    am31:{title:'沟通流程',desc:'劳工实践的双向沟通'},
    am32:{title:'申诉机制',desc:'无报复的匿名投诉渠道'},
    am41:{title:'绩效审查',desc:'劳工管理体系年度高层审查'},
    am42:{title:'自我审核',desc:'定期对照RBA标准进行自我审核'},
  },
};

// Question translations (keyed as "item_type_ID")
const QT={
  ko:{
    'a11_mgmt_M1':'모든 초과근무는 자발적이며 근로자가 불이익 없이 거부할 수 있습니까?',
    'a11_mgmt_M2':'자발적 퇴직이 보장되고, 통보 기간 1개월 이하, 위약금 월 기본급 60% 이하입니까?',
    'a11_mgmt_M3':'노무 대행사 계약에 채용 수수료의 근로자 전가 금지 조항이 명시되어 있습니까?',
    'a11_mgmt_M4':'근로자가 항상 화장실·식수·의료시설을 제한 없이 이용할 수 있습니까?',
    'a11_mgmt_M5':'기숙사 근로자가 근무 외 시간에 자유롭게 외출할 수 있습니까? (통금 없음)',
    'a11_mgmt_M6':'이동을 제한하는 시스템(강제 잠금·경비 통제·화장실 통행증)이 없습니까?',
    'a11_mgmt_M7':'금지 수수료 발견 시 90일 내 환급하는 절차가 문서화되어 있습니까?',
    'a11_doc_D1':'인사·근태·임금 기록에 비자발적 노동의 징후가 없습니까?',
    'a11_doc_D2':'초과근무 기록에 근로자의 자발적 동의가 확인됩니까?',
    'a11_doc_D3':'고용 계약서의 퇴직 통보 기간이 1개월 이하입니까?',
    'a11_doc_D4':'무단 퇴직 위약금이 계약서에 월 기본급의 60% 이하로 명시되어 있습니까?',
    'a11_doc_D5':'허용 수수료가 문서화되어 근로자에게 서면으로 공개되어 있습니까?',
    'a11_doc_D6':'급여·회계 기록에 금지 수수료(채용·입사) 기록이 없습니까?',
    'a11_doc_D7':'시설 출입 기록에 이동 제한의 증거가 없습니까?',
    'a11_doc_D8':'개인 대출: 상환 월 기본급 10% 이하, 무이자, 6개월 이내입니까?',
    'a11_doc_D9':'교육 대출: 상환 월 기본급 10% 이하, 무이자, 12개월 이내입니까?',
    'a11_doc_D10':'모든 근로자 대출이 완전 무이자임이 확인됩니까?',
    'a11_doc_D11':'기숙사 출입 기록이 근무 외 자유로운 이동을 확인합니까?',
    'a11_worker_W1':'이 일자리를 얻거나 유지하기 위해 채용비·소개비·보증금 등을 지불한 적 있습니까?',
    'a11_worker_W2':'어떠한 보복이나 불이익 없이 초과근무를 거부할 수 있습니까?',
    'a11_worker_W3':'원할 때 언제든지 자유롭게 퇴직할 수 있다고 느끼십니까?',
    'a11_worker_W4':'어떠한 제한 없이 화장실을 사용하고 식수에 접근할 수 있습니까?',
    'a11_worker_W5':'근무 시간 외에 기숙사를 자유롭게 떠날 수 있습니까?',
    'a11_worker_W6':'현재 여권이나 신분증을 직접 소지하고 있습니까?',
    'a12_mgmt_M1':'근로자가 근무 시작 전에 고용 계약서를 받습니까? (이주 근로자: 출국 전)',
    'a12_mgmt_M2':'계약서가 근로자가 읽고 이해할 수 있는 언어로 작성되어 있습니까?',
    'a12_mgmt_M3':'모든 신규 입사자에게 주요 조건(임금·근무시간·퇴직)을 구두 설명하는 절차가 있습니까?',
    'a12_mgmt_M4':'이주 근로자의 계약 조건이 현지 도착 후 불리하게 변경된 사례가 있습니까?',
    'a12_doc_D1':'고용 계약서가 근로자의 모국어 또는 이해 가능한 언어로 작성되어 있습니까?',
    'a12_doc_D2':'계약서가 근무 시작일 이전에 서명 제공된 증거가 있습니까?',
    'a12_doc_D3':'이주 근로자 도착 후 불리한 계약 조건 변경 기록이 없습니까?',
    'a12_worker_W1':'첫 근무일 전에 계약서를 받고 내용을 이해하셨습니까?',
    'a12_worker_W2':'담당자가 주요 근무 조건(급여·시간·퇴직 방법)을 구두로 설명해 주었습니까?',
    'a12_worker_W3':'(이주 근로자) 도착 후 처음 합의한 것보다 나쁜 조건을 제시받은 적 있습니까?',
    'a13_mgmt_M1':'근로자의 신분 서류(여권·비자·신분증) 원본을 보관하지 않는 정책이 있습니까?',
    'a13_mgmt_M2':'법적으로 서류 보관이 필요한 경우, 요청 후 12시간 내에 반환할 수 있습니까?',
    'a13_mgmt_M3':'서류 보관과 관련하여 어떠한 수수료도 부과하지 않습니까?',
    'a13_doc_D1':'인사 파일에 신분 서류 원본이 없습니까? (사본만 보관해야 함)',
    'a13_doc_D2':'근로자에게 서류 보관 수수료를 부과한 기록이 없습니까?',
    'a13_doc_D3':'법적 보관이 필요한 경우, 보관 사유와 기간이 명시된 영수증이 발급됩니까?',
    'a13_worker_W1':'여권·신분증·비자를 직접 소지하거나 언제든지 즉시 접근할 수 있습니까?',
    'a13_worker_W2':'시설이 개인 서류를 보관하는 데 대해 비용을 청구받은 적이 있습니까?',
    'a21_mgmt_M1':'현지 법과 RBA 최소 연령(15세) 이상을 충족하는 최저 채용 연령 정책이 문서화되어 있습니까?',
    'a21_mgmt_M2':'모든 신규 채용 시 정부 발급 신분증으로 연령 검증이 실시됩니까?',
    'a21_mgmt_M3':'미성년 근로자 발견 시 수입 유지 및 학업 복귀 지원을 포함한 구제 계획이 있습니까?',
    'a21_doc_D1':'모든 인사 파일이 각 근로자가 최저 연령 요건을 충족함을 확인합니까?',
    'a21_doc_D2':'직원 명부에 법적 최저 연령 미만 근로자가 없습니까?',
    'a21_doc_D3':'각 인사 파일에 연령 검증 서류(예: 신분증 사본)가 보관되어 있습니까?',
    'a21_worker_W1':'채용 시 연령 증명을 제출하도록 요청받았습니까?',
    'a21_worker_W2':'이 시설에 법적 취업 가능 연령 미만으로 보이는 근로자를 알고 있습니까?',
    'a22_mgmt_M1':'18세 미만 근로자가 모두 파악되어 비위험직에만 배치됩니까?',
    'a22_mgmt_M2':'18세 미만 근로자가 야간 근무나 초과근무를 하는 경우가 있습니까?',
    'a22_mgmt_M3':'현지 법이 요구하는 경우 연소 근로자에 대한 건강 검진이 실시됩니까?',
    'a22_doc_D1':'인사 파일과 업무 배치가 18세 미만 근로자가 비위험직에 있음을 확인합니까?',
    'a22_doc_D2':'근무 시간 기록이 18세 미만 근로자의 야간 근무 및 초과근무 미실시를 확인합니까?',
    'a22_doc_D3':'법적 요구 시 연소 근로자의 건강 검진 기록이 유지됩니까?',
    'a22_worker_W1':'(18세 미만 근로자) 위험 작업, 야간 근무 또는 초과근무를 수행하고 있습니까?',
    'a22_worker_W2':'이 시설에서 18세 미만 근로자가 위험 작업, 야간 근무 또는 초과근무를 하는 것을 알고 있습니까?',
    'a23_mgmt_M1':'학생 근로자·인턴·수습은 전공 분야 또는 직업 교육과 관련된 업무만 배정됩니까?',
    'a23_mgmt_M2':'법적으로 필요한 경우 삼자 협약(학생·학교·시설)이 체결되어 있습니까?',
    'a23_mgmt_M3':'학습자에게 최저임금 이상이 지급됩니까? (법이 허용하는 한시적 하향 제외)',
    'a23_doc_D1':'학습자 기록에 학습 목표, 업무 배정, 진행 평가가 포함되어 있습니까?',
    'a23_doc_D2':'학생 근로자 또는 인턴 모집에 노무 대행사를 활용한 증거가 없습니까?',
    'a23_doc_D3':'학습자의 근무 시간이 기록되고 학교 일정과 충돌하지 않음이 확인됩니까?',
    'a23_worker_W1':'(학생/인턴/수습) 배정된 업무가 전공 공부 또는 직업 교육과 직접 관련됩니까?',
    'a23_worker_W2':'(학생/인턴/수습) 이 시설의 근무 시간이 학교 수업 또는 교육 프로그램과 충돌합니까?',
    'a31_mgmt_M1':'근로자별 주간 근무 시간이 추적되고 지속적으로 60시간 미만으로 유지됩니까?',
    'a31_mgmt_M2':'모든 초과근무는 자발적이며, 근로자가 언제든지 불이익 없이 거부할 수 있습니까?',
    'a31_mgmt_M3':'18세 미만 근로자가 어떠한 초과근무도 수행하지 않음이 확인됩니까?',
    'a31_doc_D1':'시간 기록(3개월 표본: 성수기·평균·비성수기)이 어떤 근로자도 주 60시간을 초과하지 않음을 보여줍니까?',
    'a31_doc_D2':'근무 시간 기록이 정확하고 조작이 없음이 확인됩니까?',
    'a31_doc_D3':'기록이 18세 미만 근로자의 초과근무 미실시를 확인합니까?',
    'a31_worker_W1':'일주일에 60시간 이상 근무하도록 요구받거나 압박을 받은 적 있습니까?',
    'a31_worker_W2':'어떠한 부정적 결과 없이 초과근무를 거부할 수 있습니까?',
    'a31_worker_W3':'실제 근무 시간을 반영하지 않은 시간 기록에 서명하도록 요청받은 적 있습니까?',
    'a32_mgmt_M1':'모든 근로자가 7일마다 최소 하루의 완전한 휴일을 받습니까?',
    'a32_mgmt_M2':'근로자가 6일 이상 연속 근무한 기간이 있었습니까?',
    'a32_doc_D1':'시간 기록(3개월 표본)이 어떤 근로자도 연속 6일을 초과하여 근무하지 않음을 확인합니까?',
    'a32_doc_D2':'예외가 있는 경우, 비상·특수 상황으로 문서화되고 정당화됩니까?',
    'a32_worker_W1':'매주 최소 하루의 완전한 휴일을 받습니까?',
    'a32_worker_W2':'쉬는 날 없이 연속으로 6일 이상 근무한 적이 있습니까?',
    'a33_mgmt_M1':'근로자가 현지 법에서 요구하는 대로 매 교대 근무마다 최소 하나의 식사 휴식을 받습니까?',
    'a33_mgmt_M2':'유효한 진단서를 지참한 근로자가 직업 손실이나 금전적 불이익 없이 병가를 사용할 수 있습니까?',
    'a33_mgmt_M3':'출산·육아 휴직이 현지 법에 완전히 부합하여 제공됩니까?',
    'a33_doc_D1':'휴가 기록이 실제로 사용된 공휴일, 병가, 출산/육아 휴직을 정확히 반영합니까?',
    'a33_doc_D2':'휴가 기록이 진단서 및 실제 결근 증빙과 일치합니까?',
    'a33_worker_W1':'근무 교대 중에 적절한 식사 휴식을 취합니까?',
    'a33_worker_W2':'아프면 직업을 잃거나 금전적 불이익 없이 휴가를 낼 수 있습니까?',
    'a33_worker_W3':'공휴일, 연간 휴가, 병가 권리를 알고 있습니까?',
    'a41_mgmt_M1':'모든 근로자에게 모든 정규 시간에 대해 합의된/최저임금 이상을 지급하고 동일 노동 동일 임금이 적용됩니까?',
    'a41_mgmt_M2':'초과근무는 정규 임금의 최소 125% 비율로 보상됩니까?',
    'a41_mgmt_M3':'퇴직 또는 해고된 근로자에게 마지막 근무일 후 1개월 내에 미지급 임금이 전액 지급됩니까?',
    'a41_doc_D1':'급여 기록이 모든 근로자가 모든 정규 시간에 대해 합의된/최저임금 이상을 받음을 확인합니까?',
    'a41_doc_D2':'기록이 초과근무가 정규 임금의 최소 125% 비율로 지급됨을 확인합니까?',
    'a41_doc_D3':'임금이 근로자에게 직접 지급되고 허가받지 않은 공제(징계·안전장비 포함)가 없습니까?',
    'a41_worker_W1':'모든 근무 시간에 대해 최저임금 이상, 초과근무에 대해 더 높은 비율로 지급받습니까?',
    'a41_worker_W2':'설명 없는 지연 없이 제때 임금을 받습니까?',
    'a41_worker_W3':'징계 조치 또는 안전장비 비용으로 임금이 공제된 적 있습니까?',
    'a42_mgmt_M1':'매 지급 주기마다 근로자에게 정규 시간·초과근무 시간·임금률·모든 공제를 보여주는 급여 명세서가 제공됩니까?',
    'a42_mgmt_M2':'법정 보험 기여금(퇴직·의료·산재)이 급여 명세서에 명확히 항목화되어 있습니까?',
    'a42_doc_D1':'급여 명세서 기록에 정규 시간·초과근무 시간·보상 비율·항목별 공제가 정확히 표시됩니까?',
    'a42_doc_D2':'급여 기록에 허가받지 않은 징계 공제가 없습니까?',
    'a42_worker_W1':'매 지급 주기마다 근무 시간·임금률·모든 공제를 명확히 보여주는 급여 명세서를 받습니까?',
    'a42_worker_W2':'급여 명세서의 정보를 이해할 수 있습니까?',
    'a43_mgmt_M1':'모든 법정 공제(세금·사회보험)가 정확히 계산됩니까?',
    'a43_mgmt_M2':'이러한 공제가 법적으로 요구된 기간 내에 해당 정부 기관에 제출됩니까?',
    'a43_doc_D1':'기록이 법정 보험 기여금(근로자별)이 정확히 계산됨을 확인합니까?',
    'a43_doc_D2':'납부 기록이 정부 기관에 기여금이 적시에 제출됨을 확인합니까?',
    'a43_worker_W1':'동의하지 않거나 설명할 수 없는 임금 공제가 있었습니까?',
    'a51_mgmt_M1':'채용·급여·승진·교육·해고를 포괄하는 반차별 및 반괴롭힘 정책이 있습니까?',
    'a51_mgmt_M2':'근로자가 취업 조건으로 임신 검사, 처녀성 검사 또는 차별적 의료 검사를 받습니까?',
    'a51_mgmt_M3':'차별이나 괴롭힘 신고를 위한 기능적인 고충 처리 메커니즘이 있습니까?',
    'a51_doc_D1':'인사 기록(급여·혜택·채용·승진·징계·해고)에 보호 특성에 근거한 차별의 증거가 없습니까?',
    'a51_doc_D2':'고충 기록에 미해결된 괴롭힘 또는 비인도적 처우 사례가 없습니까?',
    'a51_doc_D3':'채용 공고, 지원서, 고용 계약에 차별적 조건이 없습니까?',
    'a51_worker_W1':'이 시설에서 차별, 괴롭힘 또는 비인도적 처우를 경험하거나 목격한 적 있습니까?',
    'a51_worker_W2':'인종·성별·종교·국적 등에 따라 근로자가 다르게 대우받는 것을 본 적 있습니까?',
    'a51_worker_W3':'괴롭힘이나 차별을 어떻게 신고하는지 알고 있습니까?',
    'a52_mgmt_M1':'모든 징계 조치가 공식적으로 문서화되고 경영진의 검토를 받습니까?',
    'a52_mgmt_M2':'근로자가 징계 조치의 이유를 통보받고 대응할 기회를 받습니까?',
    'a52_doc_D1':'징계 기록에 근로자 서명 또는 서면 확인이 포함된 모든 사례가 문서화됩니까?',
    'a52_doc_D2':'비인도적·차별적·괴롭힘 징계 조치(신체 처벌·공개 수치·언어 폭력) 기록이 없습니까?',
    'a52_worker_W1':'징계 조치를 받은 경우, 이유를 통보받고 대응할 기회가 있었습니까?',
    'a52_worker_W2':'신체 처벌·공개 수치·언어 폭력을 포함한 징계 조치를 경험하거나 목격한 적 있습니까?',
    'a53_mgmt_M1':'합리적인 종교적 편의 요청(기도 시간·복장·식이요법)을 검토하고 문서화합니까?',
    'a53_mgmt_M2':'종교적 편의가 거부되는 경우, 거부 이유가 요청 근로자에게 서면으로 통보됩니까?',
    'a53_doc_D1':'종교적 편의 요청 기록에 결정과 제공된 이유가 포함됩니까?',
    'a53_doc_D2':'요청이 있는 경우 기도/종교 공간이 적절히 제공됩니까?',
    'a53_worker_W1':'종교적 편의를 요청한 경우, 존중 받으며 합리적인 시간 내에 처리되었습니까?',
    'a54_mgmt_M1':'합리적인 장애 편의 요청을 검토하고 문서화하며 가능한 경우 시행합니까?',
    'a54_mgmt_M2':'확인된 모든 장애에 대한 장애 평가 및 효과 평가 보고서가 유지됩니까?',
    'a54_doc_D1':'장애 편의 요청 기록에 결정 및 근로자에게 제공된 이유가 포함됩니까?',
    'a54_doc_D2':'효과 없는 편의에 대한 시정 조치 계획이 문서화되어 있습니까?',
    'a54_worker_W1':'본인이나 동료가 장애 편의를 요청한 경우, 적절하고 적시에 처리되었습니까?',
    'a61_mgmt_M1':'근로자가 경영진의 간섭 없이 노동조합이나 근로자 대표 기구에 자유롭게 가입·조직·불참할 수 있습니까?',
    'a61_mgmt_M2':'경영진은 노조 활동에 중립적이며, 회의 장소나 자료 제공에만 기여를 한정합니까?',
    'a61_doc_D1':'기록에 노조 활동 또는 결사의 자유와 관련된 폭력·위협·보복 사례가 없습니까?',
    'a61_doc_D2':'급여 기록이 노조 대표자 또는 조합원이 유사 직무의 다른 근로자와 동일 임금을 받음을 확인합니까?',
    'a61_doc_D3':'내부 커뮤니케이션 기록에 근로자의 결사의 자유 커뮤니케이션을 제한하는 내용이 없습니까?',
    'a61_worker_W1':'이 시설에서 노조에 가입하거나 조직하려는 근로자가 위협·처벌·보복을 당하는 것을 알고 있습니까?',
    'a61_worker_W2':'어떠한 부정적 결과에 대한 두려움 없이 근로자 대표 기구에 자유롭게 가입하거나 불참할 수 있다고 느끼십니까?',
    'a62_mgmt_M1':'근로자 대표 기구의 요청이 있을 때마다 경영진이 성실한 단체 교섭에 임합니까?',
    'a62_mgmt_M2':'단체 협약(CBA)의 모든 조건이 완전히 이행됩니까?',
    'a62_doc_D1':'근로자 대표 기구가 요청한 교섭을 경영진이 거부한 기록이 없습니까?',
    'a62_doc_D2':'CBA가 있는 경우, 기록이 모든 조건이 이행됨을 확인합니까?',
    'a62_worker_W1':'경영진이 근로자 대표의 교섭 요청을 거부하는 것을 알고 있습니까?',
    'a62_worker_W2':'이 시설에서 단체 교섭에 관한 권리를 알고 있습니까?',
    'am11_mgmt_M1':'적용 노동 법령 및 고객 요구 사항을 파악·추적·갱신하는 분기별 프로세스가 있습니까?',
    'am11_mgmt_M2':'허가증·자격증·인증의 만료 전 갱신을 추적하는 문서화된 시스템이 있습니까?',
    'am11_doc_D1':'적용 노동 법령과 규정을 열거한 정확하고 최신의 컴플라이언스 등록부가 있습니까?',
    'am11_doc_D2':'컴플라이언스 검토 일정 리마인더 또는 예약 과업이 문서화되어 있습니까?',
    'am12_mgmt_M1':'모든 근로자 그룹(직접·간접·이주·연소 근로자)에 대한 중요 노동 리스크를 파악·평가하는 공식 프로세스가 있습니까?',
    'am12_mgmt_M2':'중요 변경 사항(새 공정·새 공급업체·새 근로자 그룹) 발생 시 리스크 평가가 갱신됩니까?',
    'am12_doc_D1':'모든 시설 운영과 필요 이해관계자 그룹을 포괄하는 최신 리스크 평가 보고서가 있습니까?',
    'am12_doc_D2':'리스크 평가에 직접 근로자·간접 근로자·이주 근로자·연소 근로자·현장 협력업체 등 모든 필요 그룹이 포함됩니까?',
    'am21_mgmt_M1':'노동 컴플라이언스 및 RBA 적합성에 대한 책임이 고위 담당자에게 공식적으로 배정되어 있습니까?',
    'am21_mgmt_M2':'노동 컴플라이언스 책임이 경영진·감독자·HR 등 모든 관련 조직 수준에서 정의되어 있습니까?',
    'am21_doc_D1':'각 관련 조직 수준에서 노동 컴플라이언스 책임이 직무 기술서에 공식 명시되어 있습니까?',
    'am21_doc_D2':'일상 운영뿐만 아니라 비상 상황에 대한 노동 컴플라이언스 책임도 문서화되어 있습니까?',
    'am21_worker_W1':'이 시설에서 노동인권과 근무 조건 문제를 담당하는 사람이 누구인지 알고 있습니까?',
    'am22_mgmt_M1':'강제노동·아동노동·근무시간·임금·비차별·결사의 자유 등 RBA 모든 항목을 포괄하는 서면 노동 정책이 있습니까?',
    'am22_mgmt_M2':'각 노동 정책에 실제로 준수되도록 하는 문서화된 이행(통제) 프로세스가 있습니까?',
    'am22_mgmt_M3':'모든 노무 대행사 및 협력업체가 시설의 노동 정책을 준수하도록 계약서에 명시되어 있습니까?',
    'am22_doc_D1':'서면 노동 정책이 RBA 모든 필수 항목(강제노동·아동노동·근무시간·임금·비차별·결사의 자유)을 다루고 있습니까?',
    'am22_doc_D2':'각 통제의 효과가 정기적으로 평가되고 있음을 보여주는 리스크 통제 기록이 있습니까?',
    'am22_doc_D3':'임금 지급, 근무시간, 연령 확인, 고충 처리, 교육 기록, 자체 감사 보고서 등 최소 필수 기록이 현장에 유지됩니까?',
    'am22_worker_W1':'임금·근무시간·처우·고충 처리 등 근로자 권리에 관한 회사 정책을 받거나 확인한 적 있습니까?',
    'am23_mgmt_M1':'경영진과 근로자 모두를 위한 모든 노동 정책 및 RBA 요구 사항을 포괄하는 구조화된 교육 프로그램이 있습니까?',
    'am23_mgmt_M2':'모든 신규 근로자가 입사 후 30일 이내에 노동인권 및 회사 정책에 관한 오리엔테이션을 받습니까?',
    'am23_doc_D1':'모든 근로자와 경영진이 필요한 노동 컴플라이언스 교육을 이수했음을 보여주는 교육 기록이 있습니까?',
    'am23_doc_D2':'교육 기록에 교육 효과 검증(예: 시험 점수, 감독자 확인) 증거가 포함됩니까?',
    'am23_worker_W1':'처음 입사했을 때 노동인권, 회사 정책, 고충 신고 방법에 관한 교육이나 오리엔테이션을 받았습니까?',
    'am31_mgmt_M1':'근로자가 근무 조건 및 노동 관행에 대한 피드백을 제공할 수 있는 지속적인 쌍방향 소통 프로세스가 있습니까?',
    'am31_mgmt_M2':'외부 이해관계자(공급업체·고객·지역 사회)가 관련 노동 소통에 포함됩니까?',
    'am31_doc_D1':'근로자 피드백 세션, 설문조사, 포커스 그룹 기록이 유지되고 피드백이 조치되었음을 보여줍니까?',
    'am31_doc_D2':'소통 기록이 피드백 수신, 검토, 적시 응답이 이루어졌음을 확인합니까?',
    'am31_worker_W1':'근무 조건에 대한 피드백이나 제안을 할 수 있는 접근 가능한 방법이 있습니까?',
    'am32_mgmt_M1':'근로자가 보복이나 협박 없이 익명으로 고충을 신고할 수 있는 채널이 있습니까?',
    'am32_mgmt_M2':'모든 고충이 신속히 조사되고 시정 조치가 취해져 신고자에게 통보됩니까?',
    'am32_doc_D1':'각 고충이 접수·배정·해결·통보된 것을 보여주는 고충 처리 기록이 있습니까?',
    'am32_doc_D2':'시정 조치 계획 없이 3개월 이상 미해결 상태인 고충이 있습니까?',
    'am32_worker_W1':'걱정이나 고충을 익명으로 신고하는 방법을 알고 있습니까?',
    'am32_worker_W2':'본인 또는 동료가 고충을 신고한 경우, 합리적인 기간 내에 조사 및 해결되었습니까?',
    'am41_mgmt_M1':'고위 경영진이 목표 대비 노동 관리 시스템 성과를 최소 연간 검토합니까?',
    'am41_mgmt_M2':'명확한 기한과 담당자를 포함한 공식 노동 성과 지표, 목표, 타깃이 정의되어 있습니까?',
    'am41_doc_D1':'고위 수준에서 노동 성과가 검토되었음을 보여주는 경영 검토 회의록이 있습니까?',
    'am41_doc_D2':'현재 상태를 보여주는 모든 노동 목표 및 타깃의 진행 추적 기록이 있습니까?',
    'am42_mgmt_M1':'RBA 기준 및 적용 노동 법령 준수 여부를 평가하는 정기 자체 감사 프로세스가 있습니까?',
    'am42_mgmt_M2':'자체 감사 결과가 고위 경영진에 의해 검토되고 시정 조치에 활용됩니까?',
    'am42_doc_D1':'모든 시설 구역, 정책, 물리적 조건, 기록, 인터뷰를 포괄하는 자체 감사 보고서가 있습니까?',
  },
  zh:{
    'a11_mgmt_M1':'所有加班均为自愿，工人可以拒绝而不受任何处罚吗？',
    'a11_mgmt_M2':'是否保证自愿辞职，通知期不超过1个月，违约金不超过月基本工资的60%？',
    'a11_mgmt_M3':'与劳务中介的合同是否明确禁止将招聘费用转嫁给工人？',
    'a11_mgmt_M4':'工人是否随时可以不受限制地使用卫生间、饮用水和医疗设施？',
    'a11_mgmt_M5':'宿舍工人在非工作时间可以自由离开设施吗？（无宵禁）',
    'a11_mgmt_M6':'是否没有限制行动的系统（强制锁定、保安控制、如厕证等）？',
    'a11_mgmt_M7':'是否有书面程序，在发现禁止费用后90天内退还给工人？',
    'a11_doc_D1':'人事、考勤和工资记录是否无非自愿劳动迹象？',
    'a11_doc_D2':'加班记录是否确认所有加班均为自愿同意？',
    'a11_doc_D3':'劳动合同规定的辞职通知期是否不超过1个月？',
    'a11_doc_D4':'合同中的无通知离职违约金是否不超过月基本工资的60%？',
    'a11_doc_D5':'允许费用是否有记录并以书面形式向工人披露？',
    'a11_doc_D6':'薪资或会计记录中是否无禁止费用（招聘/安置）记录？',
    'a11_doc_D7':'设施出入记录是否无行动限制证据？',
    'a11_doc_D8':'个人贷款：还款不超过月基本工资10%，免息，期限不超过6个月？',
    'a11_doc_D9':'教育贷款：还款不超过月基本工资10%，免息，期限不超过12个月？',
    'a11_doc_D10':'是否确认所有工人贷款完全免息？',
    'a11_doc_D11':'宿舍出入记录是否确认工人在非工作时间可自由行动？',
    'a11_worker_W1':'您是否为获得或保留这份工作而支付过招聘费、中介费或押金等费用？',
    'a11_worker_W2':'您可以拒绝加班而不受任何报复或负面影响吗？',
    'a11_worker_W3':'您是否感到可以随时自由辞职？',
    'a11_worker_W4':'您可以自由使用卫生间和饮用水，不受任何限制吗？',
    'a11_worker_W5':'您在非工作时间可以自由离开宿舍吗？',
    'a11_worker_W6':'您目前是否亲自持有护照或身份证件？',
    'a12_mgmt_M1':'工人是否在入职前收到劳动合同？（移民工人：在离开母国前）',
    'a12_mgmt_M2':'合同是否以工人能够阅读和理解的语言书写？',
    'a12_mgmt_M3':'是否有流程向所有新员工口头解释关键条款（工资、工时、辞职）？',
    'a12_mgmt_M4':'是否有移民工人在抵达当地后被以不利方式更改合同条款的情况？',
    'a12_doc_D1':'劳动合同是否以工人母语或其能够理解的语言书写？',
    'a12_doc_D2':'是否有证据证明合同在入职日期前已签署并提供给工人？',
    'a12_doc_D3':'移民工人抵达后是否无合同条款不利变更的记录？',
    'a12_worker_W1':'您是否在第一天上班前收到并理解了您的劳动合同？',
    'a12_worker_W2':'是否有工作人员口头向您解释了关键工作条件（工资、工时、如何辞职）？',
    'a12_worker_W3':'（移民工人）您抵达后是否被提供了比原协议更差的条件？',
    'a13_mgmt_M1':'是否有不保留工人原始身份证件（护照、签证、身份证）的政策？',
    'a13_mgmt_M2':'在法律要求持有证件的情况下，是否可以在要求后12小时内归还？',
    'a13_mgmt_M3':'是否完全不收取任何证件保管费用？',
    'a13_doc_D1':'人事档案中是否没有身份证件原件？（应只保留复印件）',
    'a13_doc_D2':'是否没有向工人收取证件保管费用的记录？',
    'a13_doc_D3':'在需要依法保管的情况下，是否向工人出具注明保管原因和期限的收据？',
    'a13_worker_W1':'您是否亲自持有护照、身份证或签证，或可以随时立即取用？',
    'a13_worker_W2':'您是否曾因设施保管您的个人证件而被收取费用？',
    'a21_mgmt_M1':'是否有书面的最低雇用年龄政策，符合或超过当地法律及RBA最低标准15岁？',
    'a21_mgmt_M2':'是否对每位新员工进行政府颁发证件的年龄核查？',
    'a21_mgmt_M3':'若发现未成年工人，是否有包含维持收入和支持返学的补救计划？',
    'a21_doc_D1':'所有人事档案是否确认每位工人均符合最低年龄要求？',
    'a21_doc_D2':'员工名册上是否没有低于法定或公司最低年龄的工人？',
    'a21_doc_D3':'每份人事档案中是否保存有年龄核查证件副本（如身份证复印件）？',
    'a21_worker_W1':'您在被录用时是否被要求提供年龄证明？',
    'a21_worker_W2':'您是否知道此设施中有看起来未达到法定工作年龄的工人？',
    'a22_mgmt_M1':'所有18岁以下工人是否均已识别并仅分配到无危险岗位？',
    'a22_mgmt_M2':'18岁以下工人是否曾从事夜班或加班？',
    'a22_mgmt_M3':'在当地法律要求的情况下，是否对未成年工人进行健康检查？',
    'a22_doc_D1':'人事档案和工作分配是否确认所有18岁以下工人均在无危险岗位工作？',
    'a22_doc_D2':'工作时间记录是否确认18岁以下工人未从事夜班或加班？',
    'a22_doc_D3':'在法律要求的情况下，是否保存未成年工人的健康检查记录？',
    'a22_worker_W1':'（18岁以下工人）您是否从事任何危险工作、夜班或加班？',
    'a22_worker_W2':'您是否知道本设施中有18岁以下工人从事危险工作、夜班或加班？',
    'a23_mgmt_M1':'学生工、实习生和学徒是否只被分配与其专业领域或职业学习相关的工作？',
    'a23_mgmt_M2':'在法律要求的情况下，是否签订了三方协议（学生、学校、设施）？',
    'a23_mgmt_M3':'学员是否获得至少最低工资的报酬？（法律允许的有限期间下调除外）',
    'a23_doc_D1':'学员记录是否包含学习目标、工作分配和进度评估？',
    'a23_doc_D2':'是否没有使用劳务中介招募或管理学生工或实习生的证据？',
    'a23_doc_D3':'是否记录了学员工作时间，并确认不与学校或培训日程冲突？',
    'a23_worker_W1':'（学生/实习生/学徒）您的工作任务是否与您的专业学习或职业培训直接相关？',
    'a23_worker_W2':'（学生/实习生/学徒）您在本设施的工作时间是否与学校出勤或培训计划冲突？',
    'a31_mgmt_M1':'是否按工人跟踪每周工作时间，并持续保持在60小时以下？',
    'a31_mgmt_M2':'所有加班是否完全自愿，工人可随时拒绝而不受任何处罚？',
    'a31_mgmt_M3':'是否确认18岁以下工人从不加班？',
    'a31_doc_D1':'时间记录（3个月样本：旺季、平均、淡季）是否显示没有工人超过每周60小时？',
    'a31_doc_D2':'是否确认工时记录准确且无任何伪造或篡改？',
    'a31_doc_D3':'记录是否确认18岁以下工人未从事任何加班？',
    'a31_worker_W1':'您是否曾被要求或被迫每周工作超过60小时？',
    'a31_worker_W2':'您可以拒绝加班而不受任何负面影响吗？',
    'a31_worker_W3':'您是否曾被要求在不准确反映实际工作时间的考勤记录上签名？',
    'a32_mgmt_M1':'所有工人是否每七天至少获得一天完整休息日？',
    'a32_mgmt_M2':'是否有工人连续工作超过6天的情况？',
    'a32_doc_D1':'时间记录（3个月样本）是否确认没有工人连续工作超过6天？',
    'a32_doc_D2':'如有例外，是否将其记录并作为紧急或特殊情况加以说明？',
    'a32_worker_W1':'您是否每周至少获得一天完整的休息日？',
    'a32_worker_W2':'您是否曾连续工作超过6天而没有休息日？',
    'a33_mgmt_M1':'工人是否按当地法律要求，每个班次至少获得一次用餐休息时间？',
    'a33_mgmt_M2':'持有有效医疗证明的工人能否在不失业或受到任何经济处罚的情况下请病假？',
    'a33_mgmt_M3':'是否完全依照当地法律提供产假/陪产假？',
    'a33_doc_D1':'休假记录是否准确反映了实际节假日、病假和产假/陪产假的使用情况？',
    'a33_doc_D2':'休假记录是否与医疗证明和实际缺勤证据相符？',
    'a33_worker_W1':'您在工作班次中是否能获得适当的用餐休息时间？',
    'a33_worker_W2':'如果您生病，您能否请假而不失去工作或受到经济处罚？',
    'a33_worker_W3':'您是否了解自己的节假日、年假和病假权利？',
    'a41_mgmt_M1':'所有工人的所有正常工时是否获得不低于约定/最低工资，并适用同工同酬原则？',
    'a41_mgmt_M2':'加班是否按至少正常工资125%的比率进行补偿？',
    'a41_mgmt_M3':'离职或被解雇的工人是否在最后工作日后一个月内获得全部未付工资？',
    'a41_doc_D1':'工资记录是否确认所有工人的所有正常工时均获得不低于约定/最低工资的报酬？',
    'a41_doc_D2':'记录是否确认加班按至少正常工资125%的比率支付？',
    'a41_doc_D3':'工资是否直接支付给工人，且没有未经授权的扣款（包括纪律处罚或防护装备）？',
    'a41_worker_W1':'您是否在所有工作时间获得至少最低工资，加班获得更高比率的报酬？',
    'a41_worker_W2':'您的工资是否按时支付，没有不明原因的延误？',
    'a41_worker_W3':'是否曾因纪律处罚或个人防护装备费用而被扣除工资？',
    'a42_mgmt_M1':'是否每个支付周期向工人提供显示正常工时、加班工时、工资率和所有扣款的工资单？',
    'a42_mgmt_M2':'工人的法定保险缴纳（养老、医疗、工伤）是否在工资单上清晰列明？',
    'a42_doc_D1':'工资单记录是否准确显示正常工时、加班工时、薪酬率和分项扣款？',
    'a42_doc_D2':'工资记录是否无未经授权的纪律扣款？',
    'a42_worker_W1':'您是否每个支付周期收到清楚显示工时、工资率和所有扣款的工资单？',
    'a42_worker_W2':'您能否理解工资单上的信息？',
    'a43_mgmt_M1':'所有法定扣款（税款、社会保险）是否计算正确？',
    'a43_mgmt_M2':'这些扣款是否在法律规定的时限内提交至相关政府部门？',
    'a43_doc_D1':'记录是否确认法定保险缴纳（按工人）计算正确？',
    'a43_doc_D2':'付款记录是否确认已及时向政府部门提交缴纳款项？',
    'a43_worker_W1':'是否有您未同意或无法解释的工资扣款？',
    'a51_mgmt_M1':'是否有涵盖招聘、薪酬、晋升、培训和解雇的明确反歧视和反骚扰政策？',
    'a51_mgmt_M2':'是否要求工人进行怀孕检测、贞操检测或歧视性医学检测作为就业条件？',
    'a51_mgmt_M3':'是否有功能完善且便于使用的投诉机制，用于举报歧视或骚扰？',
    'a51_doc_D1':'人事记录（工资、福利、招聘、晋升、纪律、解雇）是否无基于受保护特征的歧视证据？',
    'a51_doc_D2':'投诉记录是否无未解决的骚扰或不人道对待案例？',
    'a51_doc_D3':'招聘广告、申请表或劳动合同中是否无歧视性条件？',
    'a51_worker_W1':'您个人是否在本设施经历或目睹过歧视、骚扰或不人道对待？',
    'a51_worker_W2':'您是否见过工人因种族、性别、宗教、国籍或其他个人特征而受到不同对待？',
    'a51_worker_W3':'如果您遭遇骚扰或歧视，您是否知道如何举报？',
    'a52_mgmt_M1':'所有纪律措施是否正式记录并经管理层审查？',
    'a52_mgmt_M2':'工人是否被告知对其采取纪律措施的原因，并获得回应机会？',
    'a52_doc_D1':'纪律记录是否显示所有案例均有工人签名或书面确认？',
    'a52_doc_D2':'是否没有包含不人道、歧视性或骚扰性纪律措施的记录？',
    'a52_worker_W1':'如果您受到了纪律处分，您是否被告知原因并获得了回应机会？',
    'a52_worker_W2':'您是否经历或目睹过体罚、公开羞辱或言语暴力等纪律措施？',
    'a53_mgmt_M1':'是否审查并记录合理的宗教便利申请（祈祷时间、着装、饮食）？',
    'a53_mgmt_M2':'当宗教便利被拒绝时，是否以书面形式将原因告知申请工人？',
    'a53_doc_D1':'宗教便利申请记录是否包含决定及提供给工人的理由？',
    'a53_doc_D2':'在有申请的情况下，是否提供了充足的祈祷/宗教场所？',
    'a53_worker_W1':'如果您申请了宗教便利，是否得到了尊重并在合理时间内处理？',
    'a54_mgmt_M1':'是否审查、记录并在可能的情况下实施合理的残障便利申请？',
    'a54_mgmt_M2':'是否为所有已识别的残障保存残障评估和效果评估报告？',
    'a54_doc_D1':'残障便利申请记录是否包含决定及向工人提供的理由？',
    'a54_doc_D2':'对被认定为无效的便利措施是否有书面纠正行动计划？',
    'a54_worker_W1':'您或同事是否申请过残障便利？若有，是否得到了适当且及时的处理？',
    'a61_mgmt_M1':'工人是否有自由加入、组建或不参加工会或工人代表机构，而不受管理层干涉？',
    'a61_mgmt_M2':'管理层是否在工会活动方面保持中立，仅限于提供会议场所或材料？',
    'a61_doc_D1':'记录是否显示无与工会活动或结社自由相关的暴力、威胁或报复事件？',
    'a61_doc_D2':'工资记录是否确认工会代表或成员与担任类似职能的其他工人获得同等报酬？',
    'a61_doc_D3':'内部通信记录是否显示无限制工人结社自由通信的内容？',
    'a61_worker_W1':'您是否知道本设施中有工人因加入或组建工会而受到威胁、处罚或打击报复？',
    'a61_worker_W2':'您是否感到可以自由加入或不加入工人代表机构，而不必担心任何负面后果？',
    'a62_mgmt_M1':'每当工人代表机构提出要求时，管理层是否以诚信参与集体谈判？',
    'a62_mgmt_M2':'集体谈判协议（CBA）的所有条款和条件是否得到完全落实？',
    'a62_doc_D1':'是否没有管理层拒绝工人代表机构提出的谈判请求的记录？',
    'a62_doc_D2':'在存在CBA的情况下，记录是否确认所有条款均已落实？',
    'a62_worker_W1':'您是否知道管理层曾拒绝工人代表提出的谈判请求？',
    'a62_worker_W2':'您是否了解自己在本设施的集体谈判权利？',
    'am11_mgmt_M1':'是否有季度流程来识别、跟踪和更新适用劳工法律及客户要求的合规情况？',
    'am11_mgmt_M2':'是否有书面系统在证书、许可证到期前进行跟踪和续期？',
    'am11_doc_D1':'是否有准确、最新的合规登记册，列出所有适用的劳工法律法规？',
    'am11_doc_D2':'是否有书面记录的合规日历提醒或计划审查任务？',
    'am12_mgmt_M1':'是否有正式流程识别和评估所有工人群体（直接、间接、移民、未成年工人）的重大劳工风险？',
    'am12_mgmt_M2':'发生重大变化时（新工艺、新供应商、新工人群体）是否更新风险评估？',
    'am12_doc_D1':'是否有涵盖所有设施运营和所有必要利益相关方群体的最新风险评估报告？',
    'am12_doc_D2':'风险评估是否涵盖所有必要群体：直接工人、间接工人、移民工人、未成年工人及现场承包商？',
    'am21_mgmt_M1':'是否正式指定了负责劳工合规和RBA符合性的高级代表？',
    'am21_mgmt_M2':'劳工合规责任是否在所有相关组织层级（管理层、主管、人力资源）均有明确界定？',
    'am21_doc_D1':'各相关组织层级的工作说明书中是否正式分配了劳工合规责任？',
    'am21_doc_D2':'紧急情况下的劳工合规责任是否也有文件记录？',
    'am21_worker_W1':'您是否知道本设施中谁负责劳工权利和工作条件问题？',
    'am22_mgmt_M1':'是否有涵盖所有RBA规范领域（强迫劳动、童工、工时、工资、禁止歧视、结社自由）的书面劳工政策？',
    'am22_mgmt_M2':'每项劳工政策是否有书面实施（管控）流程以确保切实执行？',
    'am22_mgmt_M3':'所有劳务中介和承包商是否在合同中被要求遵守本设施的劳工政策？',
    'am22_doc_D1':'书面劳工政策是否涵盖所有RBA必要要素（强迫劳动、童工、工时、工资、禁止歧视、结社自由）？',
    'am22_doc_D2':'是否有风险管控记录，显示定期评估每项管控的有效性？',
    'am22_doc_D3':'现场是否保存最低必要记录：工资支付、工时、年龄核查、申诉、培训记录和自我审核报告？',
    'am22_worker_W1':'您是否收到或看到过公司关于工人权利（工资、工时、待遇、申诉）的政策？',
    'am23_mgmt_M1':'是否有涵盖所有劳工政策和RBA要求、面向管理层和工人的结构化培训计划？',
    'am23_mgmt_M2':'每位新员工是否在入职30天内接受有关劳工权利和公司政策的入职培训？',
    'am23_doc_D1':'是否有培训记录，显示所有工人和管理层已完成所需的劳工合规培训？',
    'am23_doc_D2':'培训记录是否包含培训效果证明（如测试成绩、主管确认）？',
    'am23_worker_W1':'您刚入职时是否接受过有关劳工权利、公司政策和如何举报问题的培训或入职培训？',
    'am31_mgmt_M1':'是否有持续的双向沟通机制，让工人能够就工作条件和劳工实践提供反馈？',
    'am31_mgmt_M2':'外部利益相关方（供应商、客户、社区）是否纳入相关劳工沟通中？',
    'am31_doc_D1':'是否保存了工人反馈会议、调查或焦点小组的记录，并显示反馈已得到处理？',
    'am31_doc_D2':'沟通记录是否确认反馈已被接收、审查并及时回应？',
    'am31_worker_W1':'是否有便捷的方式让您就工作条件提供反馈或建议（如调查、意见箱、会议）？',
    'am32_mgmt_M1':'是否有匿名投诉渠道，工人可以在没有报复或恐吓风险的情况下举报问题？',
    'am32_mgmt_M2':'是否对所有投诉进行及时调查，采取纠正措施并通知投诉人？',
    'am32_doc_D1':'投诉记录是否显示每份报告均已接收、分配调查员、处理并反馈？',
    'am32_doc_D2':'是否有超过3个月未制定纠正行动计划的未解决投诉？',
    'am32_worker_W1':'您是否知道如何匿名举报问题或投诉？',
    'am32_worker_W2':'如果您或同事曾举报过问题，是否在合理时间内得到了调查和解决？',
    'am41_mgmt_M1':'高层管理人员是否至少每年对照目标审查劳工管理体系的绩效？',
    'am41_mgmt_M2':'是否制定了有明确时限和责任人的正式劳工绩效指标、目标和指标？',
    'am41_doc_D1':'是否有管理审查会议记录，显示劳工绩效在高层得到审查？',
    'am41_doc_D2':'是否有所有劳工目标和指标的进展跟踪记录，显示当前状态？',
    'am42_mgmt_M1':'是否有定期自我审核流程，评估与RBA规范要求和适用劳工法律的符合情况？',
    'am42_mgmt_M2':'自我审核发现是否由高层管理人员审查并用于推动纠正措施？',
    'am42_doc_D1':'是否有涵盖所有设施区域、政策、物理条件、记录和访谈的自我审核报告？',
  },
};

function t(k){return(T[S.lang]||T.en)[k]||(T.en)[k]||k}
function qt(item,type,id){
  if(S.lang==='en')return null;
  return(QT[S.lang]||{})[`${item}_${type}_${id}`]||null;
}
function iTitle(id){return((IT[S.lang]||{})[id]||{}).title||ITEMS[id].title}
function iDesc(id){return((IT[S.lang]||{})[id]||{}).desc||ITEMS[id].desc}

const initState=()=>({
  screen:'landing', item:null, step:null,
  lang:'en',
  country:'',
  vendorCode:'',
  homeTab:'audit',
  docTab:'A',
  law:{resignNotice:'',docRetention:null,minAge:'',minWage:'',maxWeekHrs:'',otPremium:''},
  ans:Object.fromEntries(Object.keys(ITEMS).map(k=>[k,{mgmt:{},doc:{},worker:{}}])),
  fees:{reimbursed:null,workerPct:'',feeAmtPct:''},
  hours31:{maxHours:'',pctOver:''},
  days32:{maxDays:'',pctOver:''},
  done:{},
  notes:Object.fromEntries(Object.keys(ITEMS).map(k=>[k,{mgmt:{},doc:{},worker:{}}])),
  photos:Object.fromEntries(Object.keys(ITEMS).map(k=>[k,{mgmt:{},doc:{},worker:{}}])),
  noteOpen:{},
  cap:{},
  capOpen:{},
  supplierChecks:{},
  nsupAns:{},
  nsupNA:{},
  nsupOpen:{},
  nsupAI:{},
  nsupItem:null,
});
let S=initState();

// ─── RATING ───────────────────────────────────
const LVL=['conformance','minor','major','priority'];
const maxR=(a,b)=>LVL.indexOf(a)>=LVL.indexOf(b)?a:b;
const RL={priority:'Priority',major:'Major',minor:'Minor',conformance:'Conformance'};
const RLs=()=>({priority:t('immediate'),major:t('majorF'),minor:t('minorF'),conformance:'Conformance'});
const RDESC=()=>({
  priority:t('priorityDesc'),major:t('majorDesc'),minor:t('minorDesc'),conformance:t('conformanceDesc')
});
const RCOL={priority:'var(--P)',major:'var(--M)',minor:'var(--m)',conformance:'var(--C)'};
const RBGCOL={priority:'#fff0ee',major:'#fff8ee',minor:'#fffde0',conformance:'#f0faf3'};
const RK={priority:'P',major:'M',minor:'m',conformance:'C'};

function secRating(qKey,answers){
  let r='conformance';
  for(const q of (Q[qKey]||[])){
    const a=answers[q.id.toLowerCase()];
    if(!a||a==='na') continue;
    if(['fee','hours','days','a13f'].includes(q.sev)) continue;
    const viol=q.inv?(a==='yes'):(a==='no');
    if(!viol) continue;
    r=maxR(r,q.sev==='priority'?'priority':q.sev==='major'?'major':'minor');
  }
  return r;
}

function calcFeeR(){
  const p=parseFloat(S.fees.workerPct)||0,a=parseFloat(S.fees.feeAmtPct)||0,r=S.fees.reimbursed;
  if(!r){if(a>=150)return'priority';if(a>=100)return p<1?'major':'priority';if(a>=5)return p<1?'minor':p<=5?'major':'priority';return p<1?'minor':'major';}
  else{if(a>=100)return'major';if(a>=5)return p<1?'minor':'major';return'minor';}
}
function calcHrsR(){
  const m=parseFloat(S.hours31.maxHours)||0,p=parseFloat(S.hours31.pctOver)||0;
  if(m>84)return p>5?'priority':p>1?'major':'minor';
  if(m>72)return p>40?'priority':p>15?'priority':p>5?'major':p>1?'minor':'conformance';
  if(m>60)return p>40?'priority':p>15?'major':p>5?'minor':'conformance';
  return p>40?'major':p>5?'minor':'conformance';
}
function calcDaysR(){
  const m=parseFloat(S.days32.maxDays)||0,p=parseFloat(S.days32.pctOver)||0;
  if(m>=24)return'priority';if(m>12)return p>40?'priority':p>5?'major':'minor';
  if(m>6)return p>40?'major':p>1?'minor':'conformance';return'conformance';
}

function calcItem(id){
  const a=S.ans[id];
  const parts=[secRating(id+'_mgmt',a.mgmt),secRating(id+'_doc',a.doc),secRating(id+'_worker',a.worker)];
  if(id==='a11'&&a.doc['d6']==='no')parts.push(calcFeeR());
  if(id==='a31'&&a.doc['d1']==='no')parts.push(calcHrsR());
  if(id==='a32'&&a.doc['d1']==='no')parts.push(calcDaysR());
  // A1.3 Priority → A1.1 also Priority
  if(id==='a11'&&S.done['a13']&&calcItem('a13')==='priority')parts.push('priority');
  return parts.reduce(maxR,'conformance');
}

function calcGrp(g){
  const groups=TOP_GRP_MAP[g]||[g];
  const its=Object.keys(ITEMS).filter(k=>groups.includes(ITEMS[k].grp)&&S.done[k]);
  return its.length?its.map(calcItem).reduce(maxR,'conformance'):null;
}

function calcGrpRate(g){
  const groups=TOP_GRP_MAP[g]||[g];
  const its=Object.keys(ITEMS).filter(k=>groups.includes(ITEMS[k].grp)&&S.done[k]);
  if(!its.length)return null;
  const ok=its.filter(k=>calcItem(k)==='conformance').length;
  return Math.round(ok/its.length*100);
}

function getSteps(id){
  const b=['mgmt','doc','worker'],sp=[];
  if(id==='a11'&&S.ans.a11.doc['d6']==='no')sp.push('fee');
  if(id==='a31'&&S.ans.a31.doc['d1']==='no')sp.push('hours');
  if(id==='a32'&&S.ans.a32.doc['d1']==='no')sp.push('days');
  return[...b,...sp,'result'];
}

function hasAns(id){
  const a=S.ans[id];
  return Object.keys(a.mgmt).length+Object.keys(a.doc).length+Object.keys(a.worker).length>0;
}

function getFindings(qKey,ans){
  return(Q[qKey]||[]).filter(q=>{
    const a=ans[q.id.toLowerCase()];
    if(!a||a==='na')return false;
    if(['fee','hours','days','a13f'].includes(q.sev))return false;
    return q.inv?(a==='yes'):(a==='no');
  }).map(q=>({text:q.text,sev:q.sev}));
}

// ─── NAV ──────────────────────────────────────
function openItem(id){S.screen='item';S.item=id;S.step='mgmt';render();window.scrollTo(0,0)}
function goHome(){S.screen='home';S.item=null;S.step=null;render();window.scrollTo(0,0)}
function itemNext(){const st=getSteps(S.item),i=st.indexOf(S.step);if(i<st.length-1){S.step=st[i+1];render();window.scrollTo(0,0)}}
function itemBack(){const st=getSteps(S.item),i=st.indexOf(S.step);if(i>0){S.step=st[i-1];render();window.scrollTo(0,0)}else goHome()}
function setAns(id,type,qid,val){S.ans[id][type][qid.toLowerCase()]=val;render()}

// ─── RENDER HELPERS ───────────────────────────
function nav(title,back,rightLabel,rightFn){
  return`<div class="nav">
    ${back?`<button class="nbtn" onclick="${back}">${back.includes('goHome')?'← Items':'← Back'}</button>`:'<span style="min-width:44px"></span>'}
    <span class="ntitle">${title}</span>
    ${rightLabel?`<button class="nbtn r" onclick="${rightFn}">${rightLabel}</button>`:'<span style="min-width:44px"></span>'}
  </div>`;
}
function pbar(lbl,cur,tot){
  return`<div class="pbar"><div class="plbl">${lbl} · ${t('step')} ${cur} ${t('of')} ${tot}</div>
  <div class="ptrack"><div class="pfill" style="width:${Math.round(cur/tot*100)}%"></div></div></div>`;
}
function stepName(s){return{mgmt:t('mgmt'),doc:t('doc'),worker:t('worker'),fee:t('fee'),hours:t('hours'),days:t('days'),result:t('result')}[s]||s}
function badge(r){const k=RK[r]||'ns';return`<span class="icbadge ${k}">${RL[r]||'—'}</span>`}

function qcard(q,id,type,ans){
  const qid=q.id.toLowerCase();
  const a=ans[qid];
  const viol=a?(q.inv?(a==='yes'):(a==='no')):false;
  let cc='qcard';
  if(a){cc+=a==='na'?' vna':viol?' vn':' vy'}
  const yc=a==='yes'?(q.inv?'sn':'sy'):'';
  const nc=a==='no'?(q.inv?'sy':'sn'):'';
  const nac=a==='na'?'sna':'';
  const isDoc=type==='doc';
  const txt=qt(id,type,q.id)||q.text;

  // Note & photo
  const note=(S.notes[id]&&S.notes[id][type][qid])||'';
  const photos=(S.photos[id]&&S.photos[id][type][qid])||[];
  const nkey=`${id}_${type}_${qid}`;
  const noteOpen=S.noteOpen[nkey]||viol||!!note;
  const ko=S.lang==='ko';

  const noteArea=a?`
    <div class="qnote-area">
      <div class="qnote-toolbar">
        <button class="qntbtn${note?' has':''}" onclick="S.noteOpen['${nkey}']=!S.noteOpen['${nkey}'];render()">
          📝 ${note?(ko?'메모':'Note ✓'):(ko?'메모':'Note')}
        </button>
        <button class="qntbtn${photos.length?' has':''}" onclick="openPhotoInput('${id}','${type}','${qid}')">
          📷 ${photos.length?`(${photos.length}) `:''}${ko?'사진':'Photo'}
        </button>
      </div>
      ${noteOpen?`<textarea class="qnote-input" rows="2"
        placeholder="${ko?'위반 내용, 근거 서류명, 관찰 내용 등...':'Details, evidence, document names, observations...'}"
        onblur="saveNote('${id}','${type}','${qid}',this.value)"
      >${note}</textarea>`:''}
      ${photos.length?`<div class="qphoto-row">
        ${photos.map((p,i)=>`<div class="qphoto-thumb" onclick="viewPhoto('${id}','${type}','${qid}',${i})">
          <img src="${p}">
          <button class="qphoto-del" onclick="event.stopPropagation();removePhoto('${id}','${type}','${qid}',${i})">×</button>
        </div>`).join('')}
        <button class="qphoto-add" onclick="openPhotoInput('${id}','${type}','${qid}')">
          <span class="qphoto-add-icon">+</span>
          <span class="qphoto-add-lbl">${ko?'사진':'Photo'}</span>
        </button>
      </div>`:''}
    </div>`:''

  return`<div class="${cc}">
    <div class="qid">${q.id}</div>
    <div class="qtxt">${txt}</div>
    ${q.hint?`<div class="qhint">${q.hint}</div>`:''}
    <div class="qbtns">
      <button class="qbtn ${yc}" onclick="setAns('${id}','${type}','${q.id}','yes')">${isDoc?t('confirmed'):t('yes')}</button>
      <button class="qbtn ${nc}" onclick="setAns('${id}','${type}','${q.id}','no')">${isDoc?t('notConfirmed'):t('no')}</button>
      ${q.na?`<button class="qbtn ${nac}" onclick="setAns('${id}','${type}','${q.id}','na')">${t('na')}</button>`:''}
    </div>
    ${noteArea}
  </div>`;
}

function spResult(r){
  return r?`<div class="spres" style="background:${RBGCOL[r]};border-color:${RCOL[r]}">
    <span class="spbadge" style="background:${RCOL[r]}">${RL[r]}</span>
    <div style="font-size:13px">${RLs()[r]}</div>
  </div>`:`<div style="font-size:12px;color:var(--muted);margin-top:6px">${t('complete')}</div>`;
}

// ─── SCREENS ──────────────────────────────────
function screenSetup(){
  const l=S.law;
  const lp=`<div style="display:flex;gap:5px;margin-bottom:16px">
    ${['en','ko','zh'].map(l=>`<button onclick="S.lang='${l}';render()" style="padding:5px 12px;border-radius:var(--pill);border:1.5px solid ${S.lang===l?'var(--blue)':'var(--line)'};background:${S.lang===l?'var(--blue)':'transparent'};color:${S.lang===l?'#fff':'var(--muted)'};font-size:13px;font-weight:700;cursor:pointer;font-family:inherit">${{en:'EN',ko:'한국어',zh:'中文'}[l]}</button>`).join('')}
  </div>`;
  return`${nav('On-Site Audit','S.screen=\'landing\';render()')}
  <div class="content">
    <span class="stag">${t('setup')}</span>
    <h2 class="stitle">${t('facilitySetup')}</h2>
    <p class="ssub">${t('setupDesc')}</p>
    ${lp}
    <div class="sfield">
      <label class="slbl" style="display:flex;align-items:center;gap:4px">
        Vendor Code <span style="color:var(--P);font-size:13px">*</span>
      </label>
      <input class="sinput" type="text" placeholder="e.g. BMSS, VND-001"
        value="${S.vendorCode}" oninput="S.vendorCode=this.value.trim().toUpperCase()"
        style="${!S.vendorCode?'border-color:var(--line)':'border-color:var(--blue)'}">
      <div class="shint">${S.lang==='ko'?'공급업체 식별 코드 — 같은 코드로 재접속 시 자동 불러오기':'Identifies this audit session — reconnecting with the same code resumes your progress'}</div>
    </div>
    <div class="sfield"><label class="slbl">${t('country')}</label>
      <input class="sinput" type="text" placeholder="e.g. Vietnam, China, Malaysia…" value="${S.country}" oninput="S.country=this.value">
      <div class="shint">${t('countryHint')}</div>
    </div>
    <div class="sfield"><label class="slbl">${t('resignLbl')}</label>
      <input class="sinput" type="number" placeholder="e.g. 1" value="${l.resignNotice}" oninput="S.law.resignNotice=this.value">
      <div class="shint">${t('resignHint')}</div>
    </div>
    <div class="sfield"><label class="slbl">${t('maxHrsLbl')}</label>
      <input class="sinput" type="number" placeholder="e.g. 48" value="${l.maxWeekHrs}" oninput="S.law.maxWeekHrs=this.value">
      <div class="shint">${t('maxHrsHint')}</div>
    </div>
    <div class="sfield"><label class="slbl">${t('otLbl')}</label>
      <input class="sinput" type="number" placeholder="e.g. 25" value="${l.otPremium}" oninput="S.law.otPremium=this.value">
      <div class="shint">${t('otHint')}</div>
    </div>
    <div class="sfield"><label class="slbl">${t('minWageLbl')}</label>
      <input class="sinput" type="text" placeholder="e.g. 4,680,000" value="${l.minWage}" oninput="S.law.minWage=this.value">
    </div>
    <div class="sfield"><label class="slbl">${t('minAgeLbl')}</label>
      <input class="sinput" type="number" placeholder="e.g. 15" value="${l.minAge}" oninput="S.law.minAge=this.value">
      <div class="shint">${t('minAgeHint')}</div>
    </div>
    <div class="sfield"><label class="slbl">${t('docRetLbl')}</label>
      <div class="stoggle">
        <button class="stbtn ${l.docRetention===true?'sel':''}" onclick="S.law.docRetention=true;render()">${t('permitted')}</button>
        <button class="stbtn ${l.docRetention===false?'sel':''}" onclick="S.law.docRetention=false;render()">${t('notPermitted')}</button>
      </div>
    </div>
    <div class="snote"><strong>${t('roadmap')}</strong></div>
  </div>
  <div class="bot"><button class="bp" onclick="startAudit()">${t('start')}</button></div>`;
}

// ─── NEW-SUPPLIER (신규협력사) CHECKLIST ───
// Source: 신규 등록 평가 체크리스트 (RBA VAP based) — 19 items, total 100 pts
const NSUP_GRPT={"A1": "자발적 취업", "A2": "미성년 근로", "A3": "근로시간", "A4": "임금 및 복리후생", "A5": "인도적 대우", "A6": "차별금지", "E8": "근로자 피드백/참여", "E12": "협력사 책임"};
const NSUP_ITEMS=[
  {id:"A0101",grp:"A1",gubun:"필수",title:"강제근로 금지",sec:"Labor",site:0,rec:1,mg:1,wk:1,c:7,mi:5,mj:3,pr:0,na:7,crit:"■ 금지된 채용관련 수수료를 근로자가 부담한 경우, 고용회사가 근로자에게 90일 이내 비용 보상을 하지 않았을 시 위반 판정 기준\n    ☞ \"Reference Table\" sheet 참고하여 판정\n■ 기타 판정 기준\n  ㆍPriority : ① 고용계약에 따른 사전 통지 미제공 퇴사자에 대해 3개월치 기본급을 초과하는 위약금이 부과되는 경우\n               ② 고용계약에 따른 사전 통지 제공에도 불구하고 자발적인 고용 종료를 제한 받거나 처벌받는 경우.\n               ③ A01.03, A01.04 또는 A01.05가 Priority 위반일 경우 \n               ④ 수감자 강제근로, 강제 채무근로 또는 인신매매 근로가 발견되는 경우\n  ㆍMajor :  ① 퇴사 사전 통지 기간이 1개월 또는 법에서 요구하는 기간 중 짧은 기준보다 긴 경우\n               ② 합리적인 사전 통지가 없는 퇴사에 대해 위약금이 1개월 기본급의 60%를 초과하는 경우\n               ③ 지난 1년간 근로자의 의사에 반하는 강제적인 초과근로 발견한 경우 (기록이 삭제 되어 있거나 Update하지 않은 경우)\n\n※ 요구 서류 및 기록\n   - labor agencies, labor brokers, labor service providers 등 과의 계약서   \n- 근로자 노동계약서 사례 : 영구직, 봉급직, 시급직, 임시직, 계절근로자 (있다면), 미성년근로자, 견습생, 직업훈련생(있다면)\n   - 나이, 신분 및 정부 취업허가 증빙을 포함하는 고용 기록\n- 채용/고용 프로세스 및 절차                                        \n   - 직원 대출 및 신용 제도의 문서화"},
  {id:"A0103",grp:"A1",gubun:"일반",title:"모국어 계약서 체결",sec:"Labor",site:0,rec:1,mg:1,wk:1,c:4,mi:3,mj:2,pr:0,na:4,crit:"ㆍPriority : ① 본 계약보다 나쁜 조건으로 계약 (예, 낮은 임금, 다른 생선시설 주거/식대 등 비공개 수수료)\n             ② 고용 전(이주근로자 경우 본국 떠나기 전) 근로계약 또는 조건에 대한 미통보\n             ③ 계약서에 근로자의 자발적 고용 종료를 제한하는 내용이 포함된 경우\nㆍMajor :   ① 계약서가 없지만 근로 시작 전 계약 조건을 알린 경우\n             ② 계약서가 모국어로 작성되지 않았지만 근로 시작 전 계약 조건을 알린 경우\n             ③ 이주 근로자의 경우 본국 출국 전에 계약서가 전달되지 않았지만 본국 출국 전 계약 조건을 알린 경우\n             ④ 전달된 계약서 또는 계약 조건이 불완전한 경우(근로계약서 필수 기재 내용이 1개 이상 누락된 경우) \n             ⑤ 근로자 유형(실습생, 인턴, 파견직, 임시직, 도제(Apprentice) 등)별 현지 법 한도의 5% 초과\nㆍMinor :  ① 계약서가 있으나 일부 계약조건 누락\n             ② 근로자 유형(실습생, 인턴, 파견직, 임시직, 도제(Apprentice) 등)별 현지 법 한도의 1% 초과, 5% 이하인 경우\nㆍN/A   : 계약서가 법적 요구사항이 아닌 경우\n\n※ 요구 서류 및 기록\n    - labor agencies, labor brokers, labor service providers 등 과의 계약서   \n- 근로자 노동계약서 사례 : 영구직, 봉급직, 시급직, 임시직, 계절근로자 (있다면), 미성년근로자, 견습생, 직업훈련생(있다면)\n   - 나이, 신분 및 정부 취업허가 증빙을 포함하는 고용 기록\n- 채용/고용 프로세스 및 절차                                        \n   - 직원 대출 및 신용 제도의 문서화"},
  {id:"A0104",grp:"A1",gubun:"일반",title:"신분증 원본보관 금지",sec:"Labor",site:1,rec:1,mg:1,wk:1,c:4,mi:3,mj:2,pr:0,na:4,crit:"ㆍPriority : 고용주(고용회사)가 일체의 근로자 개인서류 원본을 파기, 은닉, 압수, 강제보관, 근로자 요구시 접근 거부하는 경우\nㆍMajor  : ① 회사가 근로자 원본 개인서류 보관시\n             ② 현지 법의 요구사항으로 회사가 원본 개인 서류를 보관하는 경우 안전 보관 및 근로자에게 돌려주는 정책이 없음\n             ③ 회사/인력 파견업체에서 제공하는 주거 시설에 거주하는 근로자들이 개인 안전보관 장소(보관함) 접근이 5% 이상으로 금지되는 경우\nㆍMinor  : ① 원본 서류 보관이 현지 법 요구사항일 때, 안전한 보관 정책과 절차가 있으나 근로자가 12시간 이내에 돌려받을 수 없는 경우\n             ② 회사/인력 파견업체에서 제공하는 주거 시설에 거주하는 근로자들이 개인 안전보관 장소(보관함) 접근이 5% 미만으로 금지되는 경우\n\n※ 요구 서류 및 기록\n    - labor agencies, labor brokers, labor service providers 등 과의 계약서   \n- 근로자 노동계약서 사례 : 영구직, 봉급직, 시급직, 임시직, 계절근로자 (있다면), 미성년근로자, 견습생, 직업훈련생(있다면)\n   - 나이, 신분 및 정부 취업허가 증빙을 포함하는 고용 기록\n- 채용/고용 프로세스 및 절차                                        \n   - 직원 대출 및 신용 제도의 문서화"},
  {id:"A0105",grp:"A1",gubun:"일반",title:"이동의 자유 보장",sec:"Labor",site:1,rec:1,mg:1,wk:1,c:4,mi:3,mj:2,pr:0,na:4,crit:"ㆍPriority : ① 근로자들의 건강 또는 안전을 위태롭게 만드는 일체의 상황(예: 공장 또는 기숙사에 감금)\n             ② 해고, 당국에의 신고 위협 또는 유사하게 심각한 위협을 통해 근로자들의 이동을 제한하는 경우\nㆍMajor :  ① 정책이 있더라도 (해고, 당국에의 신고 위협 또는 유사하게 심각한 위협이 아닌 다른) 위협 또는 \n                처벌을 통해 근로자들의 이동을 제한하는 경우\nㆍMinor :  ① 이동의 자유에 관한 정책 또는 절차가 없으나 이동의 자유에  대한 제한이 없는 경우\n             ② 강제적 제한 시스템/절차가 있는 경우(예. toilet passes)\n\n※ 요구 서류 및 기록\n    - labor agencies, labor brokers, labor service providers 등 과의 계약서   \n- 근로자 노동계약서 사례 : 영구직, 봉급직, 시급직, 임시직, 계절근로자 (있다면), 미성년근로자, 견습생, 직업훈련생(있다면)\n   - 나이, 신분 및 정부 취업허가 증빙을 포함하는 고용 기록\n- 채용/고용 프로세스 및 절차                                        \n   - 직원 대출 및 신용 제도의 문서화"},
  {id:"A0201",grp:"A2",gubun:"필수",title:"아동근로 금지",sec:"Labor",site:1,rec:1,mg:1,wk:1,c:7,mi:5,mj:3,pr:0,na:7,crit:"ㆍPriority : 근무 최저 연령 미만 근로자가 존재하거나 지난 6개월 내 존재했던 경우\nㆍMajor   : ① 아동근로 금지 정책 또는 정책에 관한 교육이 없지만 아동공이 없는 경우\n              ② 2개 이상의 최소 요구 사항 요소가 누락되거나 지켜지지 않는 경우\nㆍMinor   : ① 최소 요구 사항 요소 중 하나가 누락되거나 지켜지지 않는 경우,\n                 또는 이행 프로세스가 적절하게 문서화되지 않았거나 금지되어 있는 경우\n\n[최소 요구사항]\n1. 현장 확인 : 최저 근로 연령보다 나이가 적은 근로자가 없어야 함\n2. 기록 검토 : 인사 기록부에서 모든 근로자가 최저 고용 연령 이상 또는 회사 정책상 최저 고용 연령 이상임을 확인\n\n※ 국가별 법정 고용금지 연령\n   - 15세 미만 : 베트남, 태국, 인도, 슬로박, 멕시코\n   - 16세 미만 : 중국, 말련, 인니, 헝가리, 폴란드, 러시아, 브라질\n   * 한국 : 15세 미만 채용 금지, 중학교에 재학 중인 18세 미만인 자 채용 금지"},
  {id:"A0203",grp:"A2",gubun:"일반",title:"미성년 근로자 보호",sec:"Labor",site:1,rec:1,mg:1,wk:1,c:4,mi:3,mj:2,pr:0,na:4,crit:"ㆍPriority :  ① 미성년 근로자의 위험 작업 근무 ② 미성년 근로자의 초과 근무  ③ 미성년 근로자의 야간 근무\nㆍMajor :   ① 정책 미보유\n              ② 최소 요구 사항 요소 중 2개 이상이 누락되었거나 지켜지지 않음\nㆍMinor :   최소 요구 사항 요소 중 하나가 누락되거나 지켜지지 않음,  또는 이행 프로세스가 적절하게 문서화되지 않았거나 금지되어 있음\nㆍN/A    : 정책 및 이행 프로세스가 있고(AND) 현장에 18세 미만의 근로자가 없음\n\n{최소 요구사항]\n1. 현장확인 : 18세 미만 미성년 근로자 위험 공정 근무 불가\n2. 기록 검토\n    1) 정책\n      a) 적절하고 효과적인 미성년 근로자 정책과 절차가 시행되고 있음\n      b) 이행 프로세스가 다음과 같이 명확하게 정의되고 구현됨:\n         i) 법정 건강검진      ii) 명확한 위험 평가      iii) 근로시간 및 일 근로시간 제약\n         iv) 미성년 근로자 확인 및 非위험공정 배치   v) 야간 및 초과 근무 금지\n   2)  기록\n     a) 미성년 근로자의 인사 파일, 의료 파일, 근로시간 기록에 보호 프로세스 이행 내용이 반영되어 있어야 함\n* 한국 : 미성년 근로자: 18세 미만, 야간근로: 오후10시~오전6시"},
  {id:"A0204",grp:"A2",gubun:"일반",title:"실습생/인턴/견습생 보호",sec:"Labor",site:1,rec:1,mg:1,wk:1,c:4,mi:3,mj:2,pr:0,na:4,crit:"ㆍPriority : 최소 요구 사항 요소 중 2개 이상이 누락되었거나 지켜지지 않는 경우\nㆍMajor :  ① 견습생이 수행하는 일이 전공 분야 또는 새로운 직업 교육과 관련이 없음\n             ② 근로자가 최저 임금 이하의 보수를 받는 견습기간이 6개월을 초과함 (법적 요건이 허용하는 경우에만 6개월 초과 가능)\n             ③ 학교, 공장, 학생/학부모 간에 3자 계약이 이루어지지 않음\n             ④ 인턴, 학생근로자, 견습생이 인력 파견업체에 의해 고용됨\nㆍMinor :   ① 교육 프로그램에 관한 정책 없음  ② 학교 대상 실사가 수행되지 않음\n              ③ 최소 요구 사항 요소 중 하나가 누락되거나 지켜지지 않음,  또는 이행 프로세스가 적절하게 문서화되지 않았거나 금지되어 있음\nㆍN/A : 교육 프로그램에 관한 정책이 있고(AND) 현장에 학생 근로자, 인턴, 견습생이 없음\n\n[최소 요구사항]\n1. 현장 확인 : 학생 근로자/인턴/견습생은 전공 분야 또는 신규 직업 교육과 관련된 작업만 수행하며 관련 법률에 의해 \n                 금지된 작업은 수행하지 않아야 함\n2. 기록 검토\n   1) 정책\n       a) 견습생/인턴/학생 근로자의 직무에 대한 적절하고 효과적인 정책 및 절차\n         i) 견습생/인턴/학생 근로자를 고용하지 않는다는 서면 정책(a written policy) 보유\n         ii) 인턴십/학생 근로자 및 견습 과정은 전공 분야 또는 새로운 직업에 대한 학습 제공\n         iii) 견습 기간의 최대 기간 (근로자가 최저 임금 미만의 급여를 받는 경우 6개월 이하)\n         iv) 채용, 배치 및 관리에 대리인 또는 중개인 사용 금지\n         v) 모든 작업은 자발적(배치 배정에 대한 선택 포함)으로 이루어짐\n         vi) 단순히 인력 부족을 채우기 위해 학생 근로자, 인턴 또는 견습생 사용 금지\n    2) 기록\n      a) 3자 계약 : 3자 계약(학생 근로자(및/또는 법적 보호자), 학교, 회사)에 대해 문서화된 구체적인 요구 사항\n      b) 인사 기록\n      c) 학생 근로자/인턴 또는 견습생의 개인 파일 기록 유지(해당되는 경우, 학습 목표, 평가, 교육 자료 참조 등)\n      d) 성공적인 견습 종료 후의 승진/고용 기회, 자격, 채용, 고용 계약, 업무 성격, 근로 시간, 임금 및 복리 후생 등에 대한 세부 사항\n          i) 교육 자료 : 유효한 교육 프로그램 및 교육 자료 보유\n3. 유해∙위험작업 파견근로자 배치금지(파견법 5조, 산업안전보건법 제28조)\n  - 도금공정\n  - 수은/납/카드뮴 취급공정\n  - 12종 물질사용 공정\n    ㆍ디클로로벤지딘, 알파-나프틸아민, 크롬산 아연, 오로토-톨리딘, 디아니시딘, \n       비소 및 그무기화합물, 베릴륨, 크롬광(열,소성처리), 휘발성 콜타르피치, 황화니켈, \n       염화비닐, 벤조트리클로리드"},
  {id:"A0301",grp:"A3",gubun:"조건부필수",title:"근로시간 준수",sec:"Labor",site:0,rec:1,mg:1,wk:1,c:7,mi:5,mj:3,pr:0,na:7,crit:"Use working-hour evaluation template, \"Reference Table\" sheet 참조\n* 한국 : 주 52시간 필수적으로 준수"},
  {id:"A0302",grp:"A3",gubun:"일반",title:"주1회 휴무 보장",sec:"Labor",site:0,rec:1,mg:1,wk:1,c:4,mi:3,mj:2,pr:0,na:4,crit:"Use working-hour evaluation template, \"Reference Table\" sheet 참조"},
  {id:"A0304",grp:"A3",gubun:"일반",title:"법정 휴식/휴가 보장",sec:"Labor",site:1,rec:1,mg:1,wk:1,c:4,mi:3,mj:2,pr:0,na:4,crit:"ㆍPriority : 유효한 의료 진단서를 제출해도 병가나 출산휴가 사용이 불가한 경우\nㆍMajor   : ① 정책이 없고 법정 휴식/휴일 미제공 또는 보장하지 않는 경우\n             ② 휴가 기록을 보관하지 않거나기록이 정확하지 않은 경우\nㆍMinor  : ① 휴일과 휴식이 법적 요건을 충족하나 정책이 없는 경우\n             ② 휴일과 휴식이 법적 요건을 충족하나 해당 정책을 근로자에게 미공지"},
  {id:"A0401",grp:"A4",gubun:"필수",title:"정확한 임금 산정/지급",sec:"Labor",site:0,rec:1,mg:1,wk:1,c:7,mi:5,mj:3,pr:0,na:7,crit:"ㆍPriority : 확인 샘플의 20% 이상에게 계약된 임금 또는 법정 최저 임금 중 높은 금액 미만으로 지급\nㆍMajor  :  ① 임금계산의 구조적 계산 오류\n             ② 확인 샘플의 5% 이상이고 20% 이상에게 계약된 임금 미만으로 지급 \n             ③ 확인 샘플의 5% 이상에게 수당을 지급하지 않거나, 정확한 초과근로 보상을 하지 않는 경우\nㆍMinor  : 정책은 없으나, 임금 계산방법과 지급이 법적 요구사항, 근로 계약서 또는 RBA 요구사항을 준수하는 경우"},
  {id:"A0402",grp:"A4",gubun:"필수",title:"급여명세서 제공, 임금체불 금지",sec:"Labor",site:0,rec:1,mg:1,wk:1,c:7,mi:5,mj:3,pr:0,na:7,crit:"ㆍPriority : 급여가 1개월 이상 체불되는 경우\nㆍMajor :  ① 근로자에게 급여(임금, 보상)를 급여 명세서 또는 유사 문서로 통보하지 않은 경우\n             ② 근로자에게 임금지급에 대한 교육이나 설명을 제공하지 않은 경우\n             ③ 급여가 1개월 미만 체불되는 경우(근로자의 5% 초과)\nㆍMinor : ① 임금 계산방식에 대하여 근로자에게 충분한 설명과 교육을 제공하였으나, 전체 종업원 수의 5% 이상이\n               급여 계산 방식을 이해하지 못할 경우\n            ② 급여가 1개월 미만 체불되는 경우(근로자의 5% 초과)"},
  {id:"A0405",grp:"A4",gubun:"일반",title:"부당한 벌금제 금지",sec:"Labor",site:0,rec:1,mg:1,wk:1,c:4,mi:3,mj:3,pr:0,na:4,crit:"ㆍMajor   : 급여 공제가 표준 징계 수단으로 사용되는 경우\n               (예 : 지각 시간 대비 과도한 벌금 또는 급여 공제, 퇴직 시 근무복 미반납 급여 공제, 지정 구역외 흡연 시 벌금 부과, \n                     퇴사 30일전 미통보 시 벌금 또는 급여 미지급/삭감 등)\nㆍMinor   : 급여 공제는 없지만 징계 수단의 임금 공제를 금지하는 정책 미보유"},
  {id:"A0403",grp:"A4",gubun:"필수",title:"사회보험료 등 원천징수액 납부",sec:"Labor",site:0,rec:1,mg:1,wk:1,c:7,mi:5,mj:2,pr:0,na:7,crit:"ㆍPriority : 최소 3개월 동안 법정 공제액이 납부되지 않았거나 정해진 기일에 납부되지 않은 경우\nㆍMajor : ① 전체 근로자 중 20%를 초과하는 인력이법정 공제액이 정확하지 않게 계산된 경우 (급여 지급 실적이 2회 미만인 신규근로자 제외)\n            ② 법정 공제액이 정확하게 계산되지 않았거나 정해진 기일에 납부되지 않은 경우\nㆍMinor : ① 전체 근로자 중 20% 미만 인력이 법정 공제액이 정확하지 않게 계산된 경우(급여 지급 실적이 2회 미만인 신규근로자 제외)\n            ② 법정 공제액이 제때에 납부되었으나    근로자에게 통지가 되지 않는 경우\n* 한국 법정 공제 항목 : 국민연금, 건강보험, 고용보험, 산재보험"},
  {id:"A0501",grp:"A5",gubun:"필수",title:"비인도적 대우 금지",sec:"Labor",site:0,rec:1,mg:1,wk:1,c:7,mi:5,mj:2,pr:0,na:7,crit:"ㆍPriority : 1건 이상의 비인도적 대우 사례가 보고되었으나  사측의 개선조치가 없는 경우 \nㆍMajor   : 1건의 비인도적 대우 사례가 보고되었고 사측의 개선조치 진행 중\nㆍMinor   : 1건의 비인도적인 대우 사례가 보고되어 개선조치 완료했으나, 지속적인 예방조치가 부족한 경우"},
  {id:"A0601",grp:"A6",gubun:"필수",title:"개인특성에 따른 차별금지",sec:"Labor",site:0,rec:1,mg:1,wk:1,c:7,mi:5,mj:2,pr:0,na:7,crit:"ㆍPriority : 관리자가 보호대상 근로자 계층에 심각한 위험을 초래하는 구조적인 방법으로 차별\nㆍMajor   : 2건 이상의 차별 사례가 보고되었으나, 조치가 이행되지 않음\nㆍMinor   : 1건의 차별 사례가 보고되어 조치 완료했으나, 지속적인 예방 조치가 없는 경우\n\n  * Note : 차별 사례들이 문서화된 근거가 있는 경우 차별 사례가 적용되지만, 주장은 차별 사례로 간주되지 않음"},
  {id:"E0801",grp:"E8",gubun:"일반",title:"근로자 고충/불만 프로세스",sec:"Labor",site:1,rec:1,mg:1,wk:1,c:4,mi:3,mj:2,pr:0,na:4,crit:"ㆍPriority : 확인된 사례를 조사하지 않거나 시정 조치 계획을 이행하지 않은 경우\nㆍMajor   : ① 최소 요구사항 중 2개 이상의 구성요소가 누락되거나 유효하지 않은 경우\n              ② 익명의 보고 채널이 없는 경우\n              ③ 3개월 동안 고충/불만 사항이 조치되거나 기록되지 않은 경우\nㆍMinor   : ① 최소 요구사항 중 2개 이상의 구성요소가 누락되거나 유효하지 않은 경우\n              ② 시스템 요소가 적절하게 문서화 되지 않은 경우\n\n[최소 요구사항]\n1. 현장 확인 \n   1) 명확한 고충처리 및 불만제기 채널\n   2) 근로자의 언어로 구성되고 시각적으로 확인 가능한 내부 고충처리 커뮤니케이션(고충처리 박스, 핫라인, 핫메일, 3자 라인 등)\n2. 기록 검토\n   1) 프로세스\n       a) 보복의 위협 없이 무기명으로 고충과 불만을 보고하는 적절하고 효과적인 프로세스\n       b) 고충처리 메커니즘 보유 : 내부(근로자), 외부(협력사 근로자, 지역 사회 또는 이해 관계자/내부 고발자)\n       c) 누구에게나 고충처리 보고가 장려되는 명확한 고충처리 채널\n   2) 조사 및 활동\n       a) 피감사인은 고충 처리 및 불만 제기 요청에 대한 유효성을 신속히 조사하고 타당한 경우 즉각적인 시정조치를 해야함\n       b) 고충과 불만을 제기하는 모든 사람은 신원을 보호해야하며 피감사인은 보복 금지를 보장해야 함\n   3) 기록\n       a) 고충과 불만처리 기록은 최소 12개월 보관\n       b) 고충과 불만처리 보고 방법에 대한 근로자 서면 정보 제공"},
  {id:"E1201",grp:"E12",gubun:"일반",title:"삼성 협력사 행동규범 협력사 공유",sec:"EHS",site:0,rec:1,mg:1,wk:1,c:4,mi:3,mj:2,pr:0,na:4,crit:"ㆍMajor : ① 협력사 이행 절차가 확립되어 있지 않고 주요 협력사와의 커뮤니케이션 수단이 문서화 되어 있지 않은 경우.\n            ② 인력 파견업체/계약업체를 통해 채용된 근로자 중 20%이상이 자신의 고용 조건이 행동 규범의 관련 노동 요구사항을 충족하는지 진술 불가\nㆍMinor : ① 협력사 이행 절차가 존재하지만 주요 협력사의 20% 이상 협력사에 행동규범이 공유가 안된 경우\n            ② 인력 파견업체/계약업체를 통해 채용된 근로자 중 5~20%가 자신의 고용 조건이 행동 규범의 관련 노동 요구사항을 충족하는지 진술 불가\nㆍN/A   : 주요 협력사가 없는 경우\n\n\n[최소 요구사항]\n1. 기록 검토\n   1) 1) 프로세스\n       a) 협력사\n           i) 협력사 프로그램(주요 협력사 식별, 주요 협력사 정의)\n       b) 커뮤니케이션\n           i) 행동규범과 그 요구 사항에 대해 주요 협력사와의 적절하고 효과적인 의사 소통 과정 또는 주요 협력사와의 계약에 해당 조항의 내용을 추가\n      c) 계약\n          (1) 협력사\n               (a) RBA 행동규범에 대한 집행 언어\n          (2) 인력 파견업체 또는 계약업체\n               (a) 노동인권과 윤리에 대한 시정조치에 대해 RBA 행동규범을 이행하는 집행 언어\n               (b) 국내외 법적 요건 준수\n               (c) 근로자는 페널티없이 퇴사 가능\n               (d) 근로자와 관련된 모든 점검 기준 준수\n   2) 기록\n      a) 협력사, 인력 파견업체 및 계약업체와의 계약\n      b) 협력사, 인력 파견업체 및 계약업체와의 커뮤니케이션\n      c) 협력사, 인력 파견업체 및 계약업체와의 이행 공지"},
  {id:"E1202",grp:"E12",gubun:"일반",title:"하위 협력사 행동규범 준수 관리 프로세스",sec:"EHS",site:0,rec:1,mg:1,wk:0,c:4,mi:3,mj:2,pr:0,na:4,crit:"ㆍPriority : 현장 서비스 제공업체의 간접고용 Full-time 근로자에 대해 A03 또는 A04항목이 Priority 위반이 확정된 경우\nㆍMajor   : ① 1개 이상의 구성요소가 누락 또는 비효율적인 경우 \n              ② 협력사의 주요위반에 대한 시정조치 계획이 없는 경우\nㆍMinor   : ① 1개 구성요소 누락 또는 유효하지 않은 경우\n              ② 시스템 요소가 적절하게 문서화 되지 않았거나 금지된 경우\nㆍN/A      : 2차사가 없는 경우(공장에 협력사가 없는 경우)\n\n[최소 요구사항]\n1. 기록 검토\n  1) 프로세스\n        a) 협력사를 위한 RBA 행동규범 이행 프로세스가 유효하며 아래사항 포함\n            i) 리스크 평가\n               (1) SAQ(Self-Assessment Questionaire)와 같이 자가보고 리스크 평가가 사용되는 경우, \n                   보고 정보는 유효해야 하고 리스크 정보 검증을 위해 점검을 수행해야 함\n               (2) 심사(VAP 또는 CMA) 또는 AMA( 제3자 공인 인증기관에서 수행한 경우) 허용\n           ii) 위반사항이 감지된 경우 협력사와 시정조치계획 과정을 거칠 의무\n          iii) Priority 위반이 발견된 상태에서 즉시 자원을 감소시키는 것이 아니라 단지 시정조치계획 프로세스의 미이행에 대해서만 약속\n    2) 기록\n        a) 자가 신고 Risk 평가를 위한 검증 방문 보고서\n        b) 심사(VAP 또는 CMA) 또는 AMA( 제3자 공인 인증기관에서 수행한 경우) 허용\n        c) 확인된 위반 사항에 대한 시정 조치 계획\n        d) 시정 조치가 이행되는 검증 메커니즘"},
];

const NSUP_G=[
  {k:'conformance',ko:'적합',en:'Conf',cls:'C'},
  {k:'minor',ko:'Minor',en:'Minor',cls:'m'},
  {k:'major',ko:'Major',en:'Major',cls:'M'},
  {k:'priority',ko:'Priority',en:'Prio',cls:'P'},
  {k:'na',ko:'N/A',en:'N/A',cls:'na'},
];
const NSUP_GLABEL={conformance:'적합',minor:'Minor',major:'Major',priority:'Priority',na:'N/A'};

// ─── NEW-SUPPLIER QUESTIONS (Yes/No flow) ───
// Each Q: 예(Yes)=준수, 아니오(No)=해당 sev 위반. na:true → N/A 선택 허용. inv:true → 예=위반.
const NSUP_Q={
  A0101:[
    {id:'Q1',q:'자발적인 고용 종료(퇴사)가 보장되며, 사전 통지를 제공하지 않은 퇴사자에게 3개월치 기본급을 초과하는 위약금을 부과하지 않습니까?',sev:'priority'},
    {id:'Q2',q:'수감자 강제근로, 강제 채무근로, 인신매매 근로가 전혀 없습니까?',sev:'priority'},
    {id:'Q3',q:'퇴사 사전 통지 기간이 1개월(또는 법에서 요구하는 기간 중 짧은 것) 이하입니까?',sev:'major'},
    {id:'Q4',q:'합리적 사전 통지 없이 퇴사한 경우의 위약금이 1개월 기본급의 60% 이하입니까?',sev:'major'},
    {id:'Q5',q:'지난 1년간 근로자의 의사에 반하는 강제적인 초과근로가 없었습니까?',sev:'major'},
    {id:'Q6',q:'근로자가 부담한 금지된 채용 수수료가 없거나, 있었다면 90일 이내에 전액 보상하였습니까?',sev:'major'},
  ],
  A0103:[
    {id:'Q1',q:'본 계약보다 불리한 조건으로 계약하지 않았고, 고용 전(이주근로자는 본국 출국 전) 근로조건을 통보했으며, 계약서에 자발적 고용 종료를 제한하는 내용이 없습니까?',sev:'priority'},
    {id:'Q2',q:'근로계약서가 근로자의 모국어로 작성되어 근로 시작 전에 전달되었고, 필수 기재사항 누락이 없습니까?',sev:'major'},
    {id:'Q3',q:'계약서에 일부 계약조건 누락이 없습니까?',sev:'minor'},
  ],
  A0104:[
    {id:'Q1',q:'고용주가 근로자 개인서류 원본을 파기·은닉·압수·강제보관하거나, 근로자 요구 시 접근을 거부하는 사례가 없습니까?',sev:'priority'},
    {id:'Q2',q:'회사가 근로자 원본 개인서류를 보관하지 않거나, 법적 요구로 보관 시 안전보관 및 반환 정책이 마련되어 있습니까?',sev:'major'},
    {id:'Q3',q:'주거시설 거주 근로자의 개인 안전보관 장소(보관함) 접근이 제한되지 않습니까?',sev:'minor'},
  ],
  A0105:[
    {id:'Q1',q:'근로자의 건강·안전을 위협하는 감금이 없고, 해고·당국 신고 위협 등을 통해 이동을 제한하지 않습니까?',sev:'priority'},
    {id:'Q2',q:'그 밖의 위협 또는 처벌을 통해 근로자의 이동을 제한하지 않습니까?',sev:'major'},
    {id:'Q3',q:'강제적 이동 제한 시스템/절차(예: toilet passes)가 없습니까?',sev:'minor'},
  ],
  A0201:[
    {id:'Q1',q:'최저 근로 연령 미만의 근로자가 현재 없고, 지난 6개월 내에도 없었습니까?',sev:'priority'},
    {id:'Q2',q:'아동근로 금지 정책과 이에 관한 교육을 보유하고 있습니까?',sev:'major'},
    {id:'Q3',q:'최소 요구사항(현장 확인·기록 검토로 최저 고용 연령 이상 확인) 요소가 모두 충족됩니까?',sev:'minor'},
  ],
  A0203:[
    {id:'Q1',q:'미성년 근로자의 위험작업 근무, 초과근무, 야간근무가 없습니까?',sev:'priority'},
    {id:'Q2',q:'미성년 근로자 보호 정책 및 이행 프로세스를 보유하고 있습니까?',sev:'major'},
    {id:'Q3',q:'최소 요구사항(건강검진·위험평가·근로시간 제약·非위험공정 배치 등) 요소가 모두 충족됩니까?',sev:'minor'},
  ],
  A0204:[
    {id:'Q1',q:'최소 요구사항 요소 중 2개 이상 누락된 것이 없습니까?',sev:'priority'},
    {id:'Q2',q:'견습 업무가 전공/직업 교육과 관련되고, 최저임금 미만 견습기간이 6개월 이하이며, 학교·공장·학생 간 3자 계약이 체결되고, 인력 파견업체 고용이 아닙니까?',sev:'major'},
    {id:'Q3',q:'(한국) 유해·위험작업에 파견근로자를 배치하지 않습니까?',sev:'major'},
    {id:'Q4',q:'교육 프로그램에 관한 정책이 있고 학교 대상 실사가 수행됩니까?',sev:'minor'},
  ],
  A0301:[
    {id:'Q1',q:'주간 최대 근로시간이 84시간을 초과하는 근로자가 없습니까? (한국: 주 52시간 준수)',sev:'priority'},
    {id:'Q2',q:'초과근무 포함 주 60시간 초과 근로가 관리되어, 그 비율이 허용 범위 이내입니까?',sev:'major'},
    {id:'Q3',q:'초과근무는 근로자의 자발적 동의에 따라 이루어집니까?',sev:'minor'},
  ],
  A0302:[
    {id:'Q1',q:'연속 근로일(CWD)이 24일 이상인 근로자가 없습니까?',sev:'priority'},
    {id:'Q2',q:'7일마다 최소 1회의 휴무가 보장됩니까?',sev:'major'},
    {id:'Q3',q:'주 1회 휴무에 관한 정책/절차가 문서화되어 있습니까?',sev:'minor'},
  ],
  A0304:[
    {id:'Q1',q:'유효한 의료 진단서를 제출하면 병가나 출산휴가를 사용할 수 있습니까?',sev:'priority'},
    {id:'Q2',q:'법정 휴식/휴일을 제공하고 휴가 기록을 정확하게 보관합니까?',sev:'major'},
    {id:'Q3',q:'법정 휴식/휴가 정책이 있고 근로자에게 공지됩니까?',sev:'minor'},
  ],
  A0401:[
    {id:'Q1',q:'확인 샘플의 80% 이상에게 계약된 임금 또는 법정 최저 임금 중 높은 금액 이상을 지급합니까? (20% 이상 미달 지급 없음)',sev:'priority'},
    {id:'Q2',q:'임금 계산에 구조적 오류가 없고, 수당 및 정확한 초과근로 보상을 지급합니까?',sev:'major'},
    {id:'Q3',q:'임금 계산방법과 지급이 법적 요구사항·근로계약서·RBA 요구사항을 준수합니까?',sev:'minor'},
  ],
  A0402:[
    {id:'Q1',q:'급여가 1개월 이상 체불된 사례가 없습니까?',sev:'priority'},
    {id:'Q2',q:'급여명세서(또는 유사 문서)로 임금·보상을 통보하고, 임금 지급에 대한 교육/설명을 제공합니까?',sev:'major'},
    {id:'Q3',q:'근로자가 급여 계산 방식을 이해하도록 충분한 설명과 교육을 제공했습니까?',sev:'minor'},
  ],
  A0405:[
    {id:'Q1',q:'급여 공제를 표준 징계 수단으로 사용하지 않습니까? (예: 과도한 지각 벌금, 근무복 미반납 공제, 지정구역 외 흡연 벌금 등)',sev:'major'},
    {id:'Q2',q:'징계 수단의 임금 공제를 금지하는 정책을 보유하고 있습니까?',sev:'minor'},
  ],
  A0403:[
    {id:'Q1',q:'법정 공제액(사회보험료 등)이 최근 3개월간 정해진 기일에 정상적으로 납부되었습니까? (한국: 국민연금·건강보험·고용보험·산재보험)',sev:'priority'},
    {id:'Q2',q:'법정 공제액이 정확하게 계산·납부되며, 계산 오류 인력이 전체의 20%를 초과하지 않습니까?',sev:'major'},
    {id:'Q3',q:'법정 공제액 납부 사실을 근로자에게 통지합니까?',sev:'minor'},
  ],
  A0501:[
    {id:'Q1',q:'보고된 비인도적 대우 사례가 없거나, 있었다면 사측의 개선조치가 이루어졌습니까?',sev:'priority'},
    {id:'Q2',q:'비인도적 대우 사례에 대한 개선조치가 완료되었습니까?',sev:'major'},
    {id:'Q3',q:'비인도적 대우 재발 방지를 위한 지속적인 예방조치가 마련되어 있습니까?',sev:'minor'},
  ],
  A0601:[
    {id:'Q1',q:'보호대상 근로자 계층에 심각한 위험을 초래하는 구조적인 차별이 없습니까?',sev:'priority'},
    {id:'Q2',q:'보고된 차별 사례에 대해 조치가 이행되었습니까?',sev:'major'},
    {id:'Q3',q:'차별 예방을 위한 지속적인 조치가 마련되어 있습니까?',sev:'minor'},
  ],
  E0801:[
    {id:'Q1',q:'확인된 고충/불만 사례를 조사하고 시정 조치 계획을 이행합니까?',sev:'priority'},
    {id:'Q2',q:'익명 보고 채널이 있고, 고충/불만 사항이 3개월 내 조치·기록됩니까?',sev:'major'},
    {id:'Q3',q:'최소 요구사항(명확한 채널·모국어 안내·12개월 기록보관 등)이 문서화되어 있습니까?',sev:'minor'},
  ],
  E1201:[
    {id:'Q1',q:'협력사 이행 절차가 확립되어 있고, 주요 협력사와의 커뮤니케이션 수단이 문서화되어 있습니까?',sev:'major'},
    {id:'Q2',q:'주요 협력사의 80% 이상에 삼성 협력사 행동규범이 공유되었습니까?',sev:'minor'},
  ],
  E1202:[
    {id:'Q1',q:'현장 서비스 제공업체의 간접고용 Full-time 근로자에 대해 A03 또는 A04 항목의 Priority 위반이 없습니까?',sev:'priority'},
    {id:'Q2',q:'하위 협력사 RBA 행동규범 이행 프로세스(리스크 평가·시정조치 등) 구성요소를 모두 갖추고 있습니까?',sev:'major'},
    {id:'Q3',q:'하위 협력사 관리 시스템 요소가 적절하게 문서화되어 있습니까?',sev:'minor'},
  ],
};

function nsupItemById(id){return NSUP_ITEMS.find(it=>it.id===id);}
function nsupScore(it,g){return g==='conformance'?it.c:g==='minor'?it.mi:g==='major'?it.mj:g==='priority'?it.pr:g==='na'?it.na:0;}

// derive grade from Yes/No answers
function nsupGrade(id){
  if(!S.nsupNA)S.nsupNA={};
  if(!S.nsupAns)S.nsupAns={};
  const qs=NSUP_Q[id]||[];
  if(S.nsupNA[id])return {grade:'na',answered:0,total:qs.length,done:true};
  const ans=S.nsupAns[id]||{};
  let answered=0,r='conformance';
  qs.forEach(q=>{
    const a=ans[q.id];
    if(!a)return;
    answered++;
    if(a==='na')return;
    const viol=q.inv?(a==='yes'):(a==='no');
    if(viol)r=maxR(r,q.sev);
  });
  const done=qs.length>0&&answered===qs.length;
  return {grade:done?r:null,answered,total:qs.length,done};
}

function nsupCalc(){
  if(!S.nsupAns)S.nsupAns={};
  let earned=0,doneCount=0,essFail=false,hourCond=false;
  NSUP_ITEMS.forEach(it=>{
    const g=nsupGrade(it.id);
    if(!g.done)return;
    doneCount++;
    earned+=nsupScore(it,g.grade);
    if(g.grade==='priority'){
      if(it.gubun==='필수')essFail=true;
      if(it.id==='A0301')hourCond=true;
    }
  });
  const total=NSUP_ITEMS.length;
  let result=null;
  if(essFail)result='fail';
  else if(doneCount===total){
    if(hourCond)result='cond';
    else if(earned>=85)result='pass';
    else if(earned>=70)result='cond';
    else result='fail';
  }else if(hourCond)result='cond';
  return {earned,doneCount,total,result};
}

// ─── NAV ───
function openNsupItem(id){S.screen='nsupItem';S.nsupItem=id;render();window.scrollTo(0,0);}
function nsupHome(){S.screen='home';S.homeTab='nsup';S.nsupItem=null;render();window.scrollTo(0,0);}
function setNsupAns(id,qid,val){
  if(!S.nsupAns)S.nsupAns={};
  if(!S.nsupAns[id])S.nsupAns[id]={};
  S.nsupAns[id][qid]=(S.nsupAns[id][qid]===val?undefined:val);
  render();
}
function toggleNsupNA(id){
  if(!S.nsupNA)S.nsupNA={};
  S.nsupNA[id]=!S.nsupNA[id];
  render();
}

// ─── HOME TAB: item list ───
function renderNsup(){
  if(!S.nsupAns)S.nsupAns={};
  if(!S.nsupNA)S.nsupNA={};
  const gmeta={conformance:'C',minor:'m',major:'M',priority:'P',na:'na'};
  const c=nsupCalc();
  const resMap={pass:['PASS','var(--C)'],cond:['CONDITIONAL PASS','var(--M)'],fail:['FAIL','var(--P)']};
  const rr=c.result?resMap[c.result]:['진행중','var(--muted)'];
  let html=`<div class="nsup-wrap">
    <div class="nsup-sum">
      <div>
        <div class="nsup-slbl">총점</div>
        <div class="nsup-score">${c.earned}<span style="font-size:15px;color:var(--muted)">/100</span></div>
        <div class="nsup-slbl" style="margin-top:2px">완료 ${c.doneCount}/${c.total}</div>
      </div>
      <div class="nsup-res" style="background:${rr[1]}">${rr[0]}</div>
    </div>
    <div style="font-size:11px;color:var(--muted);margin:-4px 0 12px;line-height:1.45">※ 각 항목을 눌러 질문에 예/아니오로 답하면 등급이 자동 산정됩니다. 필수 항목 Priority 시 FAIL, 근로시간(A0301) Priority 시 CONDITIONAL PASS. 합격: 85점↑ PASS / 70~84 CONDITIONAL / 그 외 FAIL.</div>`;
  let lastGrp=null;
  NSUP_ITEMS.forEach(it=>{
    if(it.grp!==lastGrp){lastGrp=it.grp;html+=`<div class="nsup-grp">${it.grp} — ${NSUP_GRPT[it.grp]}</div>`;}
    const g=nsupGrade(it.id);
    const k=g.done?gmeta[g.grade]:null;
    const bcls=g.done?(k||'C'):(g.answered>0?'ip':'ns');
    const btxt=g.done?(g.grade==='na'?'N/A':NSUP_GLABEL[g.grade]):(g.answered>0?`진행중 ${g.answered}/${g.total}`:'미시작');
    const gubunCls=it.gubun==='일반'?'gen':'req';
    html+=`<div class="nsup-card${k?' g'+k:''}" onclick="openNsupItem('${it.id}')">
      <div class="nsup-h">
        <span class="nsup-gb ${gubunCls}">${it.gubun}</span>
        <span class="nsup-id">${it.id}</span>
        <span class="nsup-t">${it.title}</span>
        <span class="icbadge ${bcls}" style="font-size:10px">${btxt}</span>
        <span style="font-size:14px;color:var(--muted);margin-left:2px">›</span>
      </div>
    </div>`;
  });
  html+=`</div>`;
  return html;
}

// ─── QUESTION CARD (Yes / No / N/A) ───
function nsupQcard(id,q,disabled){
  const ans=(S.nsupAns[id]||{})[q.id];
  const viol=ans?(q.inv?ans==='yes':ans==='no'):false;
  let cc='qcard';
  if(ans){cc+=ans==='na'?' vna':viol?' vn':' vy';}
  const yc=ans==='yes'?(q.inv?'sn':'sy'):'';
  const nc=ans==='no'?(q.inv?'sy':'sn'):'';
  const nac=ans==='na'?'sna':'';
  const sevLbl={priority:'Priority',major:'Major',minor:'Minor'}[q.sev];
  const dis=disabled?'style="opacity:.4;pointer-events:none"':'';
  return`<div class="${cc}" ${dis}>
    <div class="qid">${q.id} · <span style="color:var(--${q.sev==='priority'?'P':q.sev==='major'?'M':'m'})">${sevLbl}</span></div>
    <div class="qtxt">${q.q}</div>
    <div class="qbtns">
      <button class="qbtn ${yc}" onclick="setNsupAns('${id}','${q.id}','yes')">예</button>
      <button class="qbtn ${nc}" onclick="setNsupAns('${id}','${q.id}','no')">아니오</button>
      <button class="qbtn ${nac}" onclick="setNsupAns('${id}','${q.id}','na')">N/A</button>
    </div>
  </div>`;
}

// ─── ITEM QUESTION SCREEN ───
function screenNsupItem(){
  const id=S.nsupItem,it=nsupItemById(id);
  if(!it){S.screen='home';S.homeTab='nsup';return screenHome();}
  if(!S.nsupAns)S.nsupAns={};
  if(!S.nsupNA)S.nsupNA={};
  if(!S.nsupOpen)S.nsupOpen={};
  const qs=NSUP_Q[id]||[];
  const g=nsupGrade(id);
  const isNA=!!S.nsupNA[id];
  const gubunCls=it.gubun==='일반'?'gen':'req';
  const gmeta={conformance:'C',minor:'m',major:'M',priority:'P',na:'na'};
  const critOpen=S.nsupOpen['crit_'+id];
  const esc=s=>s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
  const meth=[['현장 확인',it.site],['기록 검토',it.rec],['경영진 면담',it.mg],['근로자 면담',it.wk]];

  // live result
  let resHtml;
  if(isNA){
    resHtml=`<div class="nsup-res" style="background:var(--muted)">N/A · ${nsupScore(it,'na')}점</div>`;
  }else if(g.done){
    const k=gmeta[g.grade];
    resHtml=`<span class="icbadge ${k}">${NSUP_GLABEL[g.grade]}</span> <span style="font-weight:700;margin-left:6px">${nsupScore(it,g.grade)} / ${it.c}점</span>`;
  }else{
    resHtml=`<span style="color:var(--muted);font-weight:600">응답 ${g.answered}/${g.total} — 미완료</span>`;
  }

  return`${nav(`${it.id} · ${it.title}`,'nsupHome()','홈','nsupHome()')}
  ${pbar(it.title,g.answered,g.total||1)}
  <div class="content">
    <span class="stag">${it.id} · ${it.gubun}</span>
    <h2 class="stitle">${it.title}</h2>
    <p class="ssub">${NSUP_GRPT[it.grp]} · 배점 ${it.c}점 · ${meth.filter(m=>m[1]).map(m=>m[0]).join(' / ')}</p>

    <div style="display:flex;gap:8px;margin-bottom:12px">
      <button onclick="toggleNsupNA('${id}')" style="flex:1;padding:9px;border-radius:var(--pill);border:1.5px solid ${isNA?'var(--muted)':'var(--line)'};background:${isNA?'var(--muted)':'var(--canvas)'};color:${isNA?'#fff':'var(--muted)'};font-size:13px;font-weight:700;font-family:inherit;cursor:pointer">${isNA?'✓ 해당 없음 (N/A)':'이 항목 해당 없음 (N/A)'}</button>
      <button onclick="S.nsupOpen['crit_${id}']=!S.nsupOpen['crit_${id}'];render()" style="flex:1;padding:9px;border-radius:var(--pill);border:1.5px solid var(--blue);background:var(--canvas);color:var(--blue);font-size:13px;font-weight:700;font-family:inherit;cursor:pointer">${critOpen?'▾ 판정기준 닫기':'▸ 판정기준 보기'}</button>
    </div>

    ${critOpen?`<div class="nsup-card"><div class="nsup-sc">배점 — 적합 ${it.c} · Minor ${it.mi} · Major ${it.mj} · Priority ${it.pr} · N/A ${it.na}</div><div class="nsup-crit">${esc(it.crit)}</div></div>`:''}

    <button onclick="aiJudgeOpen('${id}')" style="width:100%;margin-bottom:12px;padding:10px;border-radius:var(--pill);border:1.5px dashed var(--blue);background:#f6faff;color:var(--blue);font-size:13px;font-weight:700;font-family:inherit;cursor:pointer">🤖 AI 자동판정 — 문서 사진으로 등급 제안</button>

    ${aiSuggCard(id,it)}

    ${qs.map(q=>nsupQcard(id,q,isNA)).join('')}

    <div class="nsup-card" style="display:flex;align-items:center;justify-content:space-between;margin-top:14px">
      <div class="nsup-slbl">이 항목 판정</div>
      <div>${resHtml}</div>
    </div>
  </div>
  <div class="bot"><button class="bs" onclick="nsupHome()">← 목록</button><button class="bp" onclick="nsupHome()">완료 →</button></div>`;
}

function screenHome(){
  const grpList=['A','AM','D','DM','E'];

  const icard=id=>{
    const m=ITEMS[id],done=S.done[id],inprog=!done&&hasAns(id);
    const r=done?calcItem(id):null,k=RK[r]||null;
    const ccls=`icard${k?' d'+k:''}`;
    const bcls=done?(k||'C'):inprog?'ip':'ns';
    const btxt=done?RL[r]:inprog?t('inProgress'):t('notStarted');
    return`<div class="${ccls}" onclick="openItem('${id}')">
      <div class="iccode">${m.code}</div>
      <div class="ictitle">${iTitle(id)}</div>
      <span class="icbadge ${bcls}">${btxt}</span>
    </div>`;
  };

  const grpSec=g=>{
    const gr=calcGrp(g),k=RK[gr]||null;
    const gbdg=gr?`<span class="icbadge ${k}" style="font-size:10px">${RL[gr]}</span>`:`<span class="icbadge ns" style="font-size:10px">—</span>`;
    const groups=TOP_GRP_MAP[g]||[g];
    const its=Object.keys(ITEMS).filter(k=>groups.includes(ITEMS[k].grp));
    return`<div class="grpsec">
      <div class="grplbl"><span>${g} — ${GRPS[g]}</span>${gbdg}</div>
      <div class="icards">${its.map(icard).join('')}</div>
    </div>`;
  };

  const allDone=Object.keys(ITEMS).filter(k=>S.done[k]);
  const overall=allDone.length?allDone.map(calcItem).reduce(maxR,'conformance'):null;

  const langPills=`<div style="display:flex;gap:5px;margin-top:10px">
    ${['en','ko','zh'].map(l=>`<button onclick="S.lang='${l}';render()" style="padding:4px 10px;border-radius:var(--pill);border:1.5px solid ${S.lang===l?'#fff':'rgba(255,255,255,.3)'};background:${S.lang===l?'rgba(255,255,255,.2)':'transparent'};color:${S.lang===l?'#fff':'rgba(255,255,255,.5)'};font-size:12px;font-weight:700;cursor:pointer;font-family:inherit">${{en:'EN',ko:'한국어',zh:'中文'}[l]}</button>`).join('')}
  </div>`;

  return`${nav(S.vendorCode?`On-Site Audit · ${S.vendorCode}`:'On-Site Audit','S.screen=\'landing\';render()',t('setupBtn'),'S.screen=\'setup\';render()')}
  <div class="hhero">
    <div style="display:flex;justify-content:space-between;align-items:flex-start">
      <div><div class="htitle">${t('laborAudit')}</div>
      <div class="hsub">${t('selectItem')}</div>
      ${S.country?`<div class="hcountry">📍 ${S.country}</div>`:''}
      ${langPills}</div>
      <div style="display:flex;flex-direction:column;gap:6px;align-items:flex-end;flex-shrink:0">
        <button class="home-manual" onclick="S.screen='manual';render();window.scrollTo(0,0)">📖 ${S.lang==='ko'?'사용법':'Guide'}</button>
        <button class="reset-btn" onclick="if(confirm(t('resetConfirm'))){S=initState();render()}">${t('reset')}</button>
      </div>
    </div>
    <div class="hsum">
      ${['A','AM','D','DM','E'].map(g=>{const rt=calcGrpRate(g);const col=rt===null?'rgba(255,255,255,.3)':rt===100?'var(--C)':rt>=80?'var(--m)':rt>=60?'var(--M)':'var(--P)';return`<div class="hsc"><div class="hsc-lbl">${g}</div><div class="hsc-val" style="color:${col}">${rt===null?'—':rt+'%'}</div></div>`;}).join('')}
      ${(()=>{const allDone=Object.keys(ITEMS).filter(k=>S.done[k]);const tot=allDone.length;const ok=allDone.filter(k=>calcItem(k)==='conformance').length;const rt=tot?Math.round(ok/tot*100):null;const col=rt===null?'rgba(255,255,255,.3)':rt===100?'var(--C)':rt>=80?'var(--m)':rt>=60?'var(--M)':'var(--P)';return`<div class="hsc"><div class="hsc-lbl">${t('overall')}</div><div class="hsc-val" style="color:${col}">${rt===null?'—':rt+'%'}</div></div>`;})()}
    </div>
  </div>
  <div class="hometabs">
    <button class="hometab${S.homeTab==='audit'?' act':''}" onclick="S.homeTab='audit';render()">${S.lang==='ko'?'점검 항목':'Audit Items'}</button>
    <button class="hometab${S.homeTab==='docs'?' act':''}" onclick="S.homeTab='docs';render()">${S.lang==='ko'?'필요 서류':'Documents'}</button>
    <button class="hometab${S.homeTab==='nsup'?' act':''}" onclick="S.homeTab='nsup';render()">${S.lang==='ko'?'신규협력사':'New Supplier'}</button>
  </div>
  ${S.homeTab==='nsup'?renderNsup():`
  <div style="padding:10px 16px 0;display:flex;flex-direction:column;gap:8px">
    <button onclick="S.screen='supgen';render()" style="width:100%;padding:13px;background:var(--canvas);border:1.5px solid var(--M);border-radius:var(--r-lg);color:var(--M);font-size:15px;font-weight:700;font-family:inherit;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;-webkit-tap-highlight-color:transparent">
      📤 ${(()=>{const ko=S.lang==='ko';const hasSup=Object.keys(S.supplierChecks||{}).length>0;return hasSup?(ko?'사전점검 결과 반영됨':'Pre-Check Imported ✓'):(ko?'협력사 사전점검 요청':'Request Supplier Pre-Check');})()}
    </button>
    ${(()=>{const viol=Object.keys(ITEMS).filter(id=>S.done[id]&&calcItem(id)!=='conformance');const ko=S.lang==='ko';return`<button onclick="S.screen='cap';render();window.scrollTo(0,0)" style="width:100%;padding:13px;background:var(--blue);border:none;border-radius:var(--r-lg);color:#fff;font-size:15px;font-weight:700;font-family:inherit;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;-webkit-tap-highlight-color:transparent">
      📋 ${viol.length?(ko?`시정조치계획 (CAP) — ${viol.length}건 위반`:`CAP — ${viol.length} Finding${viol.length>1?'s':''}`):(ko?'시정조치계획 (CAP)':'Corrective Action Plan (CAP)')}
    </button>`;})()}
  </div>
  ${S.homeTab==='docs'?renderHomeDocs():`
  ${grpList.map(grpSec).join('')}
  <div style="padding:8px 16px 24px">
    <button onclick="exportCSV()" style="width:100%;padding:13px;background:var(--canvas);border:1.5px solid var(--blue);border-radius:var(--r-lg);color:var(--blue);font-size:15px;font-weight:600;font-family:inherit;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;-webkit-tap-highlight-color:transparent">
      📊 ${S.lang==='ko'?'점검 결과 Excel 내보내기':S.lang==='zh'?'导出检查结果 Excel':'Export Results to Excel (.csv)'}
    </button>
  </div>`}`}`;
}

function screenItem(){
  const id=S.item,step=S.step,m=ITEMS[id];
  const steps=getSteps(id),idx=steps.indexOf(step)+1,tot=steps.length;
  if(step==='result')return screenResult(id,steps,idx,tot);
  if(step==='fee')   return screenFee(id,idx,tot);
  if(step==='hours') return screenHours(id,idx,tot);
  if(step==='days')  return screenDays(id,idx,tot);

  const qKey=`${id}_${step}`,qs=Q[qKey]||[];
  const ans=S.ans[id][step];
  const done=qs.filter(q=>ans[q.id.toLowerCase()]).length;
  const typeCtx={mgmt:t('mgmtCtx'),doc:t('docCtx'),worker:t('workerCtx')};
  const isDoc=step==='doc';

  return`${nav(`${m.code} — ${stepName(step)}`,'itemBack()',t('home'),'goHome()')}
  ${pbar(stepName(step),idx,tot)}
  <div class="content">
    <span class="stag">${m.code}</span>
    <h2 class="stitle">${stepName(step)}</h2>
    <p class="ssub">${typeCtx[step]||''} · ${done}/${qs.length} ${t('answered')}</p>
    ${isDoc?docRefBox(id):''}
    ${qs.map(q=>qcard(q,id,step,ans)).join('')}
  </div>
  <div class="bot"><button class="bs" onclick="itemBack()">${t('back')}</button><button class="bp" onclick="itemNext()">${t('next')}</button></div>`;
}

function screenFee(id,idx,tot){
  const f=S.fees,ready=f.reimbursed!==null&&f.workerPct&&f.feeAmtPct,fr=ready?calcFeeR():null;
  return`${nav('A1.1 — '+t('fee'),'itemBack()',t('home'),'goHome()')}
  ${pbar(t('fee'),idx,tot)}
  <div class="content">
    <span class="stag">A1.1</span>
    <h2 class="stitle">${t('feeTitle')}</h2>
    <p class="ssub">${t('feeDesc')}</p>
    <div class="spbox">
      <div class="sptitle">⚠️ Fee Matrix Input</div>
      <div class="sprow"><div class="splbl">${t('feeQ1')}</div>
        <div class="stoggle">
          <button class="stbtn ${f.reimbursed===true?'sel':''}" onclick="S.fees.reimbursed=true;render()">${t('feeYes')}</button>
          <button class="stbtn ${f.reimbursed===false?'sel':''}" onclick="S.fees.reimbursed=false;render()">${t('feeNo')}</button>
        </div>
      </div>
      <div class="sprow"><div class="splbl">${t('feeQ2')}</div>
        <div class="spsub">${t('feeQ2sub')}</div>
        <input class="spin" type="number" placeholder="e.g. 2.5" value="${f.workerPct}" oninput="S.fees.workerPct=this.value;render()">
      </div>
      <div class="sprow"><div class="splbl">${t('feeQ3')}</div>
        <div class="spsub">${t('feeQ3sub')}</div>
        <input class="spin" type="number" placeholder="e.g. 85" value="${f.feeAmtPct}" oninput="S.fees.feeAmtPct=this.value;render()">
      </div>
      ${spResult(fr)}
    </div>
  </div>
  <div class="bot"><button class="bs" onclick="itemBack()">${t('back')}</button><button class="bp" onclick="itemNext()">${t('next')}</button></div>`;
}

function screenHours(id,idx,tot){
  const h=S.hours31,ready=h.maxHours&&h.pctOver,hr=ready?calcHrsR():null;
  return`${nav('A3.1 — '+t('hours'),'itemBack()',t('home'),'goHome()')}
  ${pbar(t('hours'),idx,tot)}
  <div class="content">
    <span class="stag">A3.1</span>
    <h2 class="stitle">${t('hrsTitle')}</h2>
    <p class="ssub">${t('hrsDesc')}</p>
    <div class="spbox">
      <div class="sptitle">⏱ Hours Matrix Input</div>
      <div class="sprow"><div class="splbl">${t('hrsQ1')}</div>
        <input class="spin" type="number" placeholder="e.g. 68" value="${h.maxHours}" oninput="S.hours31.maxHours=this.value;render()">
      </div>
      <div class="sprow"><div class="splbl">${t('hrsQ2')}</div>
        <div class="spsub">${t('hrsQ2sub')}</div>
        <input class="spin" type="number" placeholder="e.g. 12" value="${h.pctOver}" oninput="S.hours31.pctOver=this.value;render()">
      </div>
      ${spResult(hr)}
    </div>
  </div>
  <div class="bot"><button class="bs" onclick="itemBack()">${t('back')}</button><button class="bp" onclick="itemNext()">${t('next')}</button></div>`;
}

function screenDays(id,idx,tot){
  const d=S.days32,ready=d.maxDays&&d.pctOver,dr=ready?calcDaysR():null;
  return`${nav('A3.2 — '+t('days'),'itemBack()',t('home'),'goHome()')}
  ${pbar(t('days'),idx,tot)}
  <div class="content">
    <span class="stag">A3.2</span>
    <h2 class="stitle">${t('daysTitle')}</h2>
    <p class="ssub">${t('daysDesc')}</p>
    <div class="spbox">
      <div class="sptitle">📅 Rest Days Matrix Input</div>
      <div class="sprow"><div class="splbl">${t('daysQ1')}</div>
        <input class="spin" type="number" placeholder="e.g. 9" value="${d.maxDays}" oninput="S.days32.maxDays=this.value;render()">
      </div>
      <div class="sprow"><div class="splbl">${t('daysQ2')}</div>
        <input class="spin" type="number" placeholder="e.g. 8" value="${d.pctOver}" oninput="S.days32.pctOver=this.value;render()">
      </div>
      ${spResult(dr)}
    </div>
  </div>
  <div class="bot"><button class="bs" onclick="itemBack()">${t('back')}</button><button class="bp" onclick="itemNext()">${t('next')}</button></div>`;
}

// ─── CAP DATA ─────────────────────────────────
const CAP_TIMELINE={
  priority:'⏱ Containment within 24–48 hrs · CAP submitted within 5 business days · Priority closure assessment (on-site) required · Notify customer & RBA APM immediately',
  major:'⏱ CAP submitted within 30 days of VAR · Corrective actions implemented within 60–90 days · Documentary evidence required',
  minor:'⏱ CAP submitted within 60 days of VAR · Corrective actions implemented within 90–180 days · Remote verification typically accepted',
};
const CAP_ACTIONS={
  a11:{priority:['Immediately remove all movement restrictions (locks, curfews, guard-controlled exits)','Cease any coercive labor practice and document actions taken','Reimburse all prohibited fees to affected workers within 90 days','Notify customer and RBA APM in writing immediately'],
    major:['Revise employment contracts — resignation notice ≤1 month, penalty ≤60% of monthly base pay','Establish voluntary overtime policy and communicate to all workers in writing','Audit all labor agent contracts and add explicit fee prohibition clauses','Train HR and supervisors on RBA prohibition of forced labor'],
    minor:['Publish and post permitted fee schedule to all workers','Update payslip format to clearly itemize any permitted deductions','Conduct worker awareness briefing on fee-related rights']},
  a12:{priority:['Immediately provide employment contracts to any worker who did not receive one pre-employment','Implement pre-departure contract delivery for all migrant worker hires going forward','Document and retain written evidence of all verbal orientation sessions'],
    major:['Translate employment contracts into workers\' native languages or provide certified interpreters','Implement pre-employment sign-off checklist confirming contract delivery and understanding','Update onboarding SOP to include verbal orientation with acknowledgment records'],
    minor:['Create standardized verbal orientation checklist for key contract terms','Establish and retain worker acknowledgment forms for verbal explanations']},
  a13:{priority:['Return all original personal documents to workers immediately','Issue detailed custody receipts if temporary legal retention is required','Eliminate all fees related to document safekeeping immediately'],
    major:['Amend document retention policy to prohibit holding of original IDs','Train HR on RBA document retention rules and 12-hour access guarantee','Conduct full audit of personnel files for original documents'],
    minor:['Develop custody receipt template (reason, duration, access procedure)','Install secure personal lockers in dormitory or living areas for document self-storage']},
  a21:{priority:['Remove any identified underage workers from work immediately — do not simply terminate','Implement comprehensive remediation plan: income maintenance + schooling support','Conduct full workforce age verification audit within 5 business days'],
    major:['Implement mandatory government-ID age verification for all new hires','Update minimum age policy to meet or exceed RBA standard of 15 years','Train all recruitment and HR staff on age verification procedures'],
    minor:['Ensure all personnel files include copies of age-verification documents','Schedule periodic age verification audits (minimum annually)']},
  a22:{priority:['Immediately reassign all workers under 18 away from hazardous, night, and overtime roles','Conduct emergency review of all young worker assignments and work schedules','Document all reassignments with dates and new role assignments'],
    major:['Build a young worker register and integrate with scheduling system to flag restrictions','Update scheduling SOP to automatically block young workers from night shifts and OT'],
    minor:['Schedule mandatory health checks for young workers as required by local law','Ensure health check results are filed in personnel records']},
  a23:{priority:['Immediately halt any use of labor agencies for student worker recruitment','Reassign student workers performing tasks unrelated to their field of study'],
    major:['Execute tri-partite agreements with all current student workers, schools, and facility','Establish learning objective tracking system and regular progress evaluations','Verify active enrollment for all student workers at their educational institution'],
    minor:['Update working hours records to confirm no conflicts with school schedules','Ensure learner records include objectives, assignments, and performance evaluations']},
  a31:{priority:['Implement immediate mandatory management approval for any hours approaching 60/week','Formally notify all workers of their unconditional right to refuse overtime','Remove any overtime requirements or implicit obligations from contracts and policies'],
    major:['Deploy weekly hours monitoring report reviewed by compliance/HR management','Revise production planning to eliminate reliance on excessive overtime','Conduct supervisor training: 60-hour limit, voluntary OT, and RBA requirements'],
    minor:['Implement early-warning alerts when workers approach 55 hours/week','Improve time-recording accuracy and access controls to prevent falsification']},
  a32:{priority:['Enforce mandatory rest day schedule immediately for all affected workers','Calculate and compensate any workers for unlawful consecutive work periods'],
    major:['Revise scheduling system to enforce minimum 1 day off per 7 days for all workers','Train production planners and supervisors on RBA rest day requirements','Implement scheduling audit process with compliance sign-off'],
    minor:['Document all emergency exceptions with proper justification and management sign-off','Conduct retrospective records review; compensate affected workers if underpaid']},
  a33:{priority:['Immediately communicate to all workers that sick leave cannot result in job loss or financial penalty','Cease any practice that penalizes sick or maternity leave use — document remediation actions'],
    major:['Update leave policy to fully comply with local law for all leave types','Train all supervisors on mandatory break schedules and leave entitlements','Implement maternity/paternity leave tracking and approval process'],
    minor:['Post leave entitlement summary in multiple languages in common areas','Conduct worker awareness session on break and leave rights']},
  a41:{priority:['Immediately calculate and pay all outstanding delayed wages to affected workers','Conduct full payroll audit to identify all underpayment and implement remediation within 30 days'],
    major:['Correct OT calculation methodology to minimum 125% of regular rate','Implement formal process to settle all final wages within 1 month of departure','Conduct payroll accuracy audit covering 3+ months; correct and document all errors'],
    minor:['Investigate and correct isolated payroll discrepancies','Implement regular payroll accuracy review process (monthly recommended)']},
  a42:{priority:['Issue corrected payslips immediately for all affected pay periods'],
    major:['Redesign payslip to include all required items: regular hrs, OT hrs, pay rates, itemized deductions, and insurance contributions','Implement payslip verification process before distribution to workers'],
    minor:['Simplify payslip design for worker comprehension — use plain language','Conduct worker orientation session on how to read and verify payslips']},
  a43:{priority:['Immediately remit all overdue statutory contributions — late penalties must be borne by employer, not workers','Provide workers with written evidence of all remittances made on their behalf'],
    major:['Engage payroll specialist to audit and correct all contribution calculations','Implement monthly statutory contribution reconciliation and payment calendar'],
    minor:['Conduct payroll audit to confirm calculation accuracy by worker','Create automated reminders for all statutory submission deadlines']},
  a51:{priority:['Immediately investigate confirmed discrimination/harassment case using a qualified independent investigator','Provide support, protection from retaliation, and remedy to affected workers','Document all investigation steps and outcomes — share findings with RBA APM'],
    major:['Publish anti-discrimination and anti-harassment policy to all workers in their language','Strengthen or establish grievance mechanism with accessible reporting channels','Remove all discriminatory language from job postings, application forms, and contracts'],
    minor:['Conduct anti-harassment and anti-discrimination training for all staff and supervisors','Implement periodic HR process audits for unconscious bias in hiring and promotion']},
  a52:{priority:['Immediately stop all confirmed inhumane disciplinary practices','Provide support and remediation to affected workers — document all actions taken'],
    major:['Revise disciplinary procedure to eliminate any non-compliant practices','Conduct mandatory disciplinary practice training for all supervisors and managers','Implement management sign-off requirement for all disciplinary actions'],
    minor:['Audit all historical disciplinary records for missing worker acknowledgment signatures','Update record templates to include worker signature/acknowledgment field']},
  a53:{priority:['Immediately review and reconsider all unreasonably refused religious accommodation requests','Provide written justification to the requesting worker for any denial'],
    major:['Develop formal religious accommodation request, review, and decision process','Train HR managers on reasonable accommodation obligations and approval criteria'],
    minor:['Designate a prayer/quiet room or space where feasible and requested','Implement accommodation request log — record all requests, decisions, and reasons']},
  a54:{priority:['Immediately implement emergency interim accommodation measures for all denied disability requests'],
    major:['Develop formal disability accommodation assessment and review process','Engage a qualified disability specialist to assess all workplace accommodation needs'],
    minor:['Complete effectiveness evaluations for all existing disability accommodations','Create documented CAPs for any accommodation found to be inadequate or ineffective']},
  a61:{priority:['Investigate all confirmed threats or retaliation against union members immediately','Protect affected workers from further retaliation — document all protective measures taken','Issue formal management statement guaranteeing workers\' freedom of association rights'],
    major:['Issue written management neutrality statement on freedom of association','Conduct mandatory training for all managers and supervisors on FOA rights','Review and remove any communication policies that restrict workers\' FOA rights'],
    minor:['Conduct payroll review to confirm equal pay for union representatives','Ensure all internal communication channels are accessible to worker representatives']},
  a62:{priority:['Immediately engage in good-faith collective bargaining negotiations with the worker representative body','Document all negotiation activities with meeting minutes and signed attendance records'],
    major:['Establish formal CBA negotiation timeline and good-faith engagement process','Conduct full audit of all outstanding CBA terms and implement any unimplemented provisions','Train HR management on collective bargaining legal obligations'],
    minor:['Schedule regular CBA implementation review meetings (quarterly recommended)','Conduct CBA compliance audit and document findings and corrective steps']},
  am11:{priority:['Immediately audit all business licenses and permits — renew any expired documents without delay','Engage legal counsel to identify all applicable labor laws that have been missed'],
    major:['Establish a formal quarterly compliance review process with assigned owner and documented outputs','Build a compliance calendar tracking all permit, license, and legal deadline renewals','Create and maintain an accurate compliance register listing all applicable laws and requirements'],
    minor:['Implement automated reminders for all upcoming compliance deadlines','Conduct quarterly review meetings to assess regulatory changes and update compliance register']},
  am12:{priority:['Conduct an immediate labor risk assessment for all worker groups — do not wait for the next cycle','Address any critical risks identified during the emergency assessment with a written action plan'],
    major:['Develop a formal due diligence process covering all worker groups: direct, indirect, migrant, young, and contractors','Update the risk assessment to reflect any significant operational or workforce changes','Ensure the risk assessment is reviewed and signed off by senior management at least annually'],
    minor:['Expand risk assessment scope to include all required stakeholder groups if any are currently missing','Schedule risk assessment update triggers for specific change events (new process, new supplier, new worker population)']},
  am21:{priority:['Immediately assign a named senior-level compliance responsible person with documented authority','Communicate the assignment to all relevant staff and document the decision in management meeting records'],
    major:['Update all relevant job descriptions to formally assign labor compliance responsibilities at each level','Define and document emergency labor compliance responsibilities for non-business-hours situations','Conduct briefing sessions with all assigned responsible persons to confirm role understanding'],
    minor:['Develop a labor compliance RACI matrix (Responsible, Accountable, Consulted, Informed)','Review and update compliance responsibility assignments whenever organizational changes occur']},
  am22:{priority:['Immediately review all labor agent and contractor contracts — add explicit RBA compliance clauses where missing','Suspend use of any labor agent or contractor that refuses to commit to compliance requirements'],
    major:['Develop or update written labor policies covering all RBA Code elements (forced labor, child labor, hours, wages, non-discrimination, FOA)','Implement a documented control process for each labor policy to ensure practical enforcement','Ensure minimum required records are maintained: wages, hours, age verification, grievances, training, self-audit'],
    minor:['Conduct annual policy effectiveness review with documented findings and updates','Distribute updated policies to all workers in their working language']},
  am23:{priority:['Immediately enroll all workers who have exceeded 30 days without orientation into an emergency training session','Document and retain records for all emergency training conducted'],
    major:['Design a structured training program covering all labor policies and RBA requirements for both managers and workers','Implement new hire orientation within 30 days of hire — track compliance rate and flag exceptions','Add training effectiveness measures: short tests, supervisor confirmation, or post-training acknowledgment forms'],
    minor:['Update training records to include topic, date, trainer, and attendance for each session','Schedule annual refresher training for all workers and managers on key labor rights topics']},
  am31:{priority:['Immediately establish at least one accessible worker feedback channel and communicate it to all workers'],
    major:['Implement a structured two-way communication process (e.g. surveys, suggestion boxes, worker committees)','Ensure feedback is reviewed, acted upon, and outcomes communicated back to workers','Include external stakeholders (suppliers, contractors) in labor communications where relevant'],
    minor:['Document all worker feedback sessions with attendance records and summary of issues raised','Schedule regular worker communication sessions (minimum quarterly recommended)']},
  am32:{priority:['Immediately investigate any grievances open for more than 3 months and issue a corrective action plan','Implement emergency protection measures for any worker who may face retaliation for reporting'],
    major:['Establish an anonymous grievance channel (hotline, suggestion box, or online form) accessible to all workers','Implement a formal grievance investigation process with assigned investigators and documented timelines','Ensure all grievance records include: date received, investigator, findings, corrective action, and worker notification'],
    minor:['Train supervisors on grievance receipt and escalation procedures','Conduct worker awareness sessions on how to use the grievance mechanism confidentially']},
  am41:{priority:['Immediately schedule an emergency senior management labor performance review if none has been held in the past 12 months'],
    major:['Define formal labor performance indicators, objectives, and targets with clear timelines and named owners','Implement a progress tracking dashboard or report covering all labor objectives','Schedule and document annual senior management labor performance review meetings'],
    minor:['Improve meeting records to include labor performance agenda items and decisions made','Develop a labor performance scorecard for regular reporting to senior leadership']},
  am42:{priority:['Conduct an immediate comprehensive self-audit covering all RBA Code elements, all records, and worker interviews'],
    major:['Implement a structured periodic self-audit process aligned with on-site audit scope (minimum annually)','Ensure self-audit findings are reviewed by senior management and tracked to resolution','Generate formal corrective action plans for all findings identified in self-audit reports'],
    minor:['Train internal auditors on RBA Code requirements and audit methodology','Establish a self-audit schedule with assigned owner and defined output format']},
};
const CAP_EVIDENCE={
  a11:['Revised employment contracts (notice period + penalty clauses)','Updated labor agent contracts with explicit fee prohibition','Voluntary OT consent forms or policy','Worker reimbursement records (if fees were paid)'],
  a12:['Pre-employment contract sign-off checklist','Translated contract samples with worker acknowledgment','Verbal orientation acknowledgment forms'],
  a13:['Updated document retention policy','Personnel file audit showing no original IDs','Custody receipts issued to workers (if applicable)'],
  a21:['Updated age verification procedure + personnel file audit','Remediation plan documentation (if underage workers found)','Training records for recruitment and HR staff'],
  a22:['Young worker register with confirmed non-hazardous role assignments','Updated work schedules for workers under 18','Health check records where required by local law'],
  a23:['Tri-partite agreements for all student workers','Learner records with objectives and evaluations','Working hours records confirming no school schedule conflicts'],
  a31:['Updated OT policy with voluntary consent requirement','3-month working hours analysis reports post-remediation','Supervisor training completion records'],
  a32:['Updated work schedules showing mandatory rest days','3-month attendance records post-remediation','Exception justification records (emergency situations)'],
  a33:['Updated leave policy (sick, maternity, annual)','Leave records showing compliance post-remediation','Worker communication: leave entitlement posters or notices'],
  a41:['Corrected payroll records for affected workers','Updated OT calculation methodology documentation','Evidence of final wage payment for leavers'],
  a42:['Sample corrected payslips with all required line items','Payslip redesign documentation','Worker acknowledgment of new payslip format'],
  a43:['Statutory contribution calculation records by individual worker','Government agency remittance receipts','Monthly reconciliation reports'],
  a51:['Updated anti-discrimination policy (published, translated)','Investigation report (if a case was found)','Anti-harassment training completion records'],
  a52:['Updated disciplinary procedure','Revised disciplinary records with worker signatures','Supervisor training records on permissible practices'],
  a53:['Religious accommodation request log + decision records','Facility photos of prayer/religious areas','Updated accommodation policy'],
  a54:['Disability accommodation request + decision records','Effectiveness evaluation reports','CAPs for any ineffective accommodations'],
  a61:['Written management neutrality statement on FOA','Training records for managers/supervisors','Payroll analysis confirming equal pay for union representatives'],
  a62:['Collective bargaining negotiation meeting minutes','CBA compliance audit report','Evidence of implementation of all CBA provisions'],
  am11:['Compliance register listing all applicable labor laws','Compliance calendar with renewal deadlines','Quarterly review meeting records with attendance and outputs'],
  am12:['Up-to-date risk assessment report covering all worker groups','Evidence of risk assessment update after significant changes','Senior management sign-off on risk assessment'],
  am21:['Updated job descriptions with formal compliance responsibility assignments','Named compliance responsible person — documented appointment','Emergency compliance responsibility procedure'],
  am22:['Written labor policies covering all RBA Code elements','Control process records showing effectiveness monitoring','Minimum required records: wages, hours, age verification, grievances, training, self-audit'],
  am23:['Training records for all workers and managers (topic, date, trainer, attendance)','New hire orientation records with completion dates within 30 days of hire','Training effectiveness evidence: test scores, supervisor sign-off, or acknowledgment forms'],
  am31:['Worker feedback session records (surveys, meeting minutes, suggestion box logs)','Evidence that worker feedback was reviewed and acted upon','External stakeholder communication records where applicable'],
  am32:['Grievance register showing all cases: received, assigned, resolved, communicated','Anonymous reporting channel — evidence it is accessible and used','Investigation records for each grievance with findings and corrective actions'],
  am41:['Senior management review meeting records including labor performance agenda and decisions','Labor performance indicator tracking reports showing progress vs. targets','Formal labor objectives and targets with owners and deadlines'],
  am42:['Self-audit report covering all facility areas, policies, records, and worker interviews','Senior management review of self-audit findings','Corrective action plans generated from self-audit findings with tracking records'],
};

function capSection(id,r){
  if(r==='conformance')return`<div class="capbox C" style="margin-top:4px">
    <div class="cap-head">✅ ${t('capTitle')}</div>
    <div style="font-size:13px;color:var(--muted)">${t('noCAP')}</div>
  </div>`;
  const k=RK[r];
  const actions=(CAP_ACTIONS[id]||{})[r]||[];
  const evidence=CAP_EVIDENCE[id]||[];
  return`<div class="capbox ${k}">
    <div class="cap-head">📋 ${t('capTitle')} — ${RL[r]}</div>
    <div class="cap-timeline">${CAP_TIMELINE[r]||''}</div>
    <div class="cap-section">${t('recActions')}</div>
    ${actions.map(a=>`<div class="cap-li">${a}</div>`).join('')}
    <div class="cap-section">${t('keyEvidence')}</div>
    ${evidence.map(e=>`<div class="cap-li">${e}</div>`).join('')}
  </div>`;
}

function screenResult(id,steps,idx,tot){
  S.done[id]=true;
  const m=ITEMS[id],r=calcItem(id),k=RK[r];
  const a=S.ans[id];
  const mr=secRating(id+'_mgmt',a.mgmt),dr=secRating(id+'_doc',a.doc),wr=secRating(id+'_worker',a.worker);

  const all=[...getFindings(id+'_mgmt',a.mgmt),...getFindings(id+'_doc',a.doc),...getFindings(id+'_worker',a.worker)];
  if(id==='a11'&&a.doc['d6']==='no'){const fr=calcFeeR();if(fr!=='conformance')all.push({text:`Prohibited fees found — ${S.fees.workerPct||'?'}% of workers, ${S.fees.feeAmtPct||'?'}% of monthly salary`,sev:fr});}
  if(id==='a31'&&a.doc['d1']==='no'){const hr=calcHrsR();if(hr!=='conformance')all.push({text:`Hours exceed 60/week — max ${S.hours31.maxHours||'?'} hrs, ${S.hours31.pctOver||'?'}% of sampled weeks`,sev:hr});}
  if(id==='a32'&&a.doc['d1']==='no'){const dr=calcDaysR();if(dr!=='conformance')all.push({text:`Consecutive days exceed 6 — max ${S.days32.maxDays||'?'} days, ${S.days32.pctOver||'?'}% of workers`,sev:dr});}

  const l=S.law,lawNotes=[];
  if((id==='a11'||id==='a12')&&l.resignNotice&&parseFloat(l.resignNotice)>1) lawNotes.push(`Local notice period (${l.resignNotice} months) exceeds RBA max of 1 month — RBA standard applies`);
  if(id==='a13'&&l.docRetention===true) lawNotes.push('Local law permits document retention — immediate-access (≤12 hrs) and zero-fee procedures must be strictly enforced');
  if((id==='a21'||id==='a22')&&l.minAge&&parseInt(l.minAge)<15) lawNotes.push(`Local minimum age (${l.minAge}) is below RBA minimum of 15 — RBA standard of 15 years applies`);
  if(id==='a31'&&l.maxWeekHrs&&parseInt(l.maxWeekHrs)<60) lawNotes.push(`Local max hours (${l.maxWeekHrs}/week) is stricter than RBA 60 hrs — local standard applies`);
  if(id==='a41'&&l.otPremium&&parseFloat(l.otPremium)<25) lawNotes.push(`Local OT premium (${l.otPremium}%) is below RBA minimum of 25% above regular rate — RBA standard (125%) applies`);

  return`${nav(`${m.code} — Result`,'itemBack()','🏠 Home','goHome()')}
  ${pbar('Result',idx,tot)}
  <div class="content">
    <span class="stag">${m.code}</span>
    <h2 class="stitle">${m.title}</h2>
    <div class="rcard ${k}" style="margin-top:12px">
      <span class="rbadge">${RL[r]}</span>
      <div class="rtitle">${RLs()[r]}</div>
      <div class="rdesc">${RDESC()[r]}</div>
    </div>
    <div class="step-pills">
      <div class="step-pill ${RK[mr]||'C'}">Mgmt<br>${RL[mr]}</div>
      <div class="step-pill ${RK[dr]||'C'}">Doc<br>${RL[dr]}</div>
      <div class="step-pill ${RK[wr]||'C'}">Worker<br>${RL[wr]}</div>
    </div>
    ${all.length?`<div style="font-size:13px;font-weight:700;color:var(--muted);margin-bottom:7px">${t('findings')} (${all.length})</div>
    <div class="flist">${all.map(f=>`<div class="fitem"><div class="fdot ${RK[f.sev]||'M'}"></div><div class="ftxt">${f.text}</div></div>`).join('')}</div>`
    :`<div class="fok">${t('noFindings')}</div>`}
    ${lawNotes.length?`<div style="font-size:13px;font-weight:700;color:var(--muted);margin:11px 0 7px">${t('lawNotes')}</div>
    ${lawNotes.map(n=>`<div class="fitem" style="border-color:#e8c800"><div class="fdot" style="background:var(--m);margin-top:5px;flex-shrink:0"></div><div class="ftxt">${n}</div></div>`).join('')}`:''}
    <div style="font-size:13px;font-weight:700;color:var(--muted);margin:14px 0 7px">📋 ${t('capTitle')}</div>
    ${capSection(id,r)}
    <div style="height:16px"></div>
  </div>
  <div class="bot"><button class="bs" onclick="itemBack()">${t('back')}</button><button class="bp" onclick="goHome()">${t('home')}</button></div>`;
}

// ─── EXCEL / CSV EXPORT ───────────────────────
function exportCSV(){
  const BOM='﻿';
  const hdr=['Section','Code','Item Title','Overall Rating','Management','Document Review','Worker Interview','Finding Count','Finding Details','Notes','Photos'];

  const rows=Object.entries(ITEMS).map(([id,meta])=>{
    const grpName=GRPS[meta.grp]||meta.grp;
    const section=`${meta.grp} — ${grpName}`;
    const done=S.done[id];
    const a=S.ans[id];
    const r=done?calcItem(id):null;
    const mr=secRating(id+'_mgmt',a.mgmt);
    const dr=secRating(id+'_doc',a.doc);
    const wr=secRating(id+'_worker',a.worker);

    // Collect findings
    const finds=[
      ...getFindings(id+'_mgmt',a.mgmt),
      ...getFindings(id+'_doc',a.doc),
      ...getFindings(id+'_worker',a.worker),
    ];
    if(id==='a11'&&a.doc['d6']==='no'){const fr=calcFeeR();if(fr!=='conformance')finds.push({text:`Prohibited fees: ${S.fees.workerPct||'?'}% workers, ${S.fees.feeAmtPct||'?'}% of monthly salary`,sev:fr});}
    if(id==='a31'&&a.doc['d1']==='no'){const hr=calcHrsR();if(hr!=='conformance')finds.push({text:`Working hours: max ${S.hours31.maxHours||'?'} hrs/week, ${S.hours31.pctOver||'?'}% of sampled weeks`,sev:hr});}
    if(id==='a32'&&a.doc['d1']==='no'){const dr2=calcDaysR();if(dr2!=='conformance')finds.push({text:`Consecutive days: max ${S.days32.maxDays||'?'} days, ${S.days32.pctOver||'?'}% of workers`,sev:dr2});}

    const findTxt=finds.map(f=>`[${(RL[f.sev]||f.sev||'').toUpperCase()}] ${f.text}`).join(' | ');

    // Collect notes
    const noteEntries=[];
    ['mgmt','doc','worker'].forEach(step=>{
      const stepNotes=S.notes[id]&&S.notes[id][step]||{};
      Object.entries(stepNotes).forEach(([qid,txt])=>{if(txt&&txt.trim())noteEntries.push(`[${qid.toUpperCase()}] ${txt.trim()}`);});
    });
    const noteTxt=noteEntries.join(' | ');

    // Collect photo counts
    let photoCount=0;
    ['mgmt','doc','worker'].forEach(step=>{
      const stepPhotos=S.photos[id]&&S.photos[id][step]||{};
      Object.values(stepPhotos).forEach(arr=>{photoCount+=arr.length;});
    });

    return[
      section,
      meta.code,
      iTitle(id),
      done?RL[r]:'Not Started',
      Object.keys(a.mgmt).length?RL[mr]:'—',
      Object.keys(a.doc).length?RL[dr]:'—',
      Object.keys(a.worker).length?RL[wr]:'—',
      finds.length.toString(),
      findTxt,
      noteTxt,
      photoCount?photoCount.toString():'',
    ];
  });

  // Add summary rows
  const allDone=Object.keys(ITEMS).filter(k=>S.done[k]);
  const overall=allDone.length?allDone.map(calcItem).reduce(maxR,'conformance'):'Not Started';
  rows.push([]);
  rows.push(['OVERALL RATING','','',allDone.length?RL[overall]:'Not Started','','','',allDone.length+' / '+Object.keys(ITEMS).length+' items completed','']);

  // Facility info rows at top
  const meta=[
    ['On-Site Labor Audit — Inspection Report'],
    [`Facility Country: ${S.country||'(not set)'}`],
    [`Audit Date: ${new Date().toISOString().slice(0,10)}`],
    [`Items Completed: ${allDone.length} / ${Object.keys(ITEMS).length}`],
    [],
    hdr,
    ...rows,
  ];

  const csv=BOM+meta.map(row=>
    (row.length?row:['']).map(cell=>`"${String(cell||'').replace(/"/g,'""')}"`).join(',')
  ).join('\n');

  const blob=new Blob([csv],{type:'text/csv;charset=utf-8'});
  const url=URL.createObjectURL(blob);
  const a=document.createElement('a');
  a.href=url;
  a.download=`RBA_VAP_Audit_${(S.country||'Report').replace(/\s/g,'_')}_${new Date().toISOString().slice(0,10)}.csv`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

function screenLanding(){
  const sessions=getSessions().sort((a,b)=>new Date(b.lastUpdated)-new Date(a.lastUpdated));
  const fmt=iso=>{const d=new Date(iso);return`${d.getMonth()+1}/${d.getDate()} ${String(d.getHours()).padStart(2,'0')}:${String(d.getMinutes()).padStart(2,'0')}`;};
  const rateCol=r=>r===null?'var(--muted)':r===100?'var(--C)':r>=80?'var(--m)':r>=60?'var(--M)':'var(--P)';

  const sessionCards=sessions.length?`
    <div style="width:100%;padding:0 24px;margin-bottom:8px">
      <div style="font-size:11px;font-weight:700;color:var(--muted);text-transform:uppercase;letter-spacing:.8px;margin-bottom:10px">Recent Audits</div>
      ${sessions.map(s=>`
        <div class="sess-card" onclick="loadSession('${s.code}')">
          <div class="sess-info">
            <div class="sess-code">${s.code}</div>
            <div class="sess-meta">${s.country||'—'} · ${s.done||0}/${s.total||0} items · ${fmt(s.lastUpdated)}</div>
          </div>
          ${s.rate!==null?`<span style="font-size:13px;font-weight:700;color:${rateCol(s.rate)};flex-shrink:0">${s.rate}%</span>`:''}
          <button class="sess-resume" onclick="event.stopPropagation();loadSession('${s.code}')">Resume</button>
          <button class="sess-del" onclick="deleteSession('${s.code}',event)">✕</button>
        </div>`).join('')}
    </div>`:''

  return`<div class="landing">
    <div class="land-inner">
      <div class="land-badge"><div class="land-dot-pulse"></div>On-Site Audit</div>
      <div class="land-title">Supplier<br><em>Audit</em></div>
      <div class="land-version">Validated Assessment Program · Rev 8.0.1</div>
      <div class="land-sub" style="margin-bottom:${sessions.length?28:40}px">Labor · Ethics · Supply Chain</div>
      ${sessionCards}
      <div style="width:100%;padding:0 24px">
        <button class="land-start" style="width:100%;box-sizing:border-box" onclick="S=initState();S.screen='setup';render()">
          ${sessions.length?'+ New Audit':'START  →'}
        </button>
      </div>
      ${!sessions.length?`<div class="land-hint" style="margin-top:14px">Tap to begin the on-site assessment</div>`:''}
      <div style="width:100%;padding:0 24px;margin-top:14px">
        <button class="land-manual" onclick="S.screen='manual';render();window.scrollTo(0,0)">📖 사용 설명서 (매뉴얼)</button>
      </div>
    </div>
    <div class="land-footer">On-Site Audit Standard · January 2024</div>
  </div>`;
}

// ─── SUPPLIER PRE-CHECK ───────────────────────
let _supChecks={};
let _supOpenGroups={};  // track which groups are open in supplier view
let _supVendor='';
let _supLang='ko';
let _importData=null;

const SUP_SECTIONS=[
  {id:'A',label:'A — Labor Standards',ko:'A — 노동기준',groups:['A1','A2','A3','A4','A5','A6','AM']},
  {id:'D',label:'D — Ethics',ko:'D — 윤리',groups:['D1','D2','D3','D4','D5','D6','DM']},
  {id:'E',label:'E — Supply Chain',ko:'E — 공급망',groups:['E1','E2','E3','E4']},
];
const SUP_GRP_NAMES={
  A1:'Forced Labor',A2:'Young Workers',A3:'Working Hours',A4:'Wages & Benefits',
  A5:'Non-Discrimination',A6:'Freedom of Association',AM:'Labor Mgmt System',
  D1:'Business Integrity',D2:'Disclosure',D3:'Intellectual Property',D4:'Fair Business',
  D5:'Identity Protection',D6:'Privacy',DM:'Ethics Mgmt System',
  E1:'Company Commitment',E2:'Materials Restrictions',E3:'Responsible Minerals',E4:'Supplier Responsibility'
};
const SUP_GRP_NAMES_KO={
  A1:'강제 노동',A2:'연소 근로자',A3:'근무 시간',A4:'임금 및 복리후생',
  A5:'비차별',A6:'결사의 자유',AM:'노동 관리 시스템',
  D1:'비즈니스 무결성',D2:'정보 공개',D3:'지식재산권',D4:'공정 거래',
  D5:'신원 보호',D6:'개인정보 보호',DM:'윤리 관리 시스템',
  E1:'기업 책임',E2:'물질 제한',E3:'책임 광물 조달',E4:'공급업체 책임'
};

function supKey(grp,idx){return grp+'_'+idx;}

function setSupCheck(grp,idx,val){
  const k=supKey(grp,idx);
  _supChecks[k]=_supChecks[k]===val?null:val;
  // partial re-render: only update the group body, not the whole screen
  _renderSupGroup(grp);
  _updateSupHeader(grp);
  _updateSupProgress();
}

function _renderSupGroup(grp){
  const el=document.getElementById('supbody_'+grp);
  if(!el)return;
  const ko=_supLang==='ko';
  const dl=ko?DOC_LIST_KO:DOC_LIST;
  const docs=dl[grp]||[];
  el.innerHTML=docs.map((d,i)=>{
    const k=supKey(grp,i),v=_supChecks[k]||null;
    return`<div class="sup-doc-row">
      <div class="sup-doc-txt">${d}</div>
      <div class="sup-tog">
        <button class="sup-btn${v==='y'?' sy':''}" onclick="setSupCheck('${grp}',${i},'y')">✓</button>
        <button class="sup-btn${v==='n'?' sn':''}" onclick="setSupCheck('${grp}',${i},'n')">✗</button>
        <button class="sup-btn${v==='na'?' sna':''}" onclick="setSupCheck('${grp}',${i},'na')">N/A</button>
      </div>
    </div>`;
  }).join('');
}

function _updateSupHeader(grp){
  const el=document.getElementById('supcount_'+grp);
  if(!el)return;
  const ko=_supLang==='ko';
  const dl=ko?DOC_LIST_KO:DOC_LIST;
  const docs=dl[grp]||[];
  const cnt=docs.filter((_,i)=>_supChecks[supKey(grp,i)]==='y'||_supChecks[supKey(grp,i)]==='na').length;
  el.textContent=cnt+'/'+docs.length;
}

function _updateSupProgress(){
  const ko=_supLang==='ko';
  const dl=ko?DOC_LIST_KO:DOC_LIST;
  const allDocs=SUP_SECTIONS.flatMap(s=>s.groups.flatMap(g=>(dl[g]||[]).map((_,i)=>supKey(g,i))));
  const checked=allDocs.filter(k=>_supChecks[k]==='y'||_supChecks[k]==='na').length;
  const pct=allDocs.length?Math.round(checked/allDocs.length*100):0;
  const bar=document.getElementById('supProgBar');
  const lbl=document.getElementById('supProgLbl');
  const btn=document.getElementById('supSubmitBtn');
  if(bar)bar.style.width=pct+'%';
  if(lbl)lbl.textContent=checked+' / '+allDocs.length+' '+(ko?'확인':'checked')+' ('+pct+'%)';
  if(btn){btn.textContent=(ko?`완료 & 결과 코드 생성 (${pct}%)`:`Submit & Generate Result (${pct}%)`);
    btn.style.background=pct>=50?'var(--blue)':'var(--muted)';}
}

function toggleSupGrp(grp){
  _supOpenGroups[grp]=!_supOpenGroups[grp];
  const body=document.getElementById('supbody_'+grp);
  const chev=document.getElementById('supchev_'+grp);
  if(body)body.style.display=_supOpenGroups[grp]?'block':'none';
  if(chev)chev.style.transform=_supOpenGroups[grp]?'rotate(180deg)':'';
}

function getSupBase(){return window.location.origin+window.location.pathname;}

function genSupplierURL(){
  return getSupBase()+'?sup='+encodeURIComponent(S.vendorCode)+'&lang='+S.lang;
}

function copyText(txt,btn){
  navigator.clipboard.writeText(txt).then(()=>{
    const orig=btn.textContent;btn.textContent='✓ Copied!';
    setTimeout(()=>{btn.textContent=orig;},2000);
  }).catch(()=>{
    prompt('Copy this link:',txt);
  });
}

function submitSupplier(){
  const resultData={v:_supVendor,lang:_supLang,ts:new Date().toISOString(),checks:_supChecks};
  const encoded=btoa(unescape(encodeURIComponent(JSON.stringify(resultData))));
  const url=getSupBase()+'?supresult='+encodeURIComponent(encoded);
  _supResultURL=url;
  render();
}

let _supResultURL=null;

function importSupplierResult(){
  if(!_importData)return;
  S.supplierChecks=_importData.checks||{};
  S.screen='home';
  render();window.scrollTo(0,0);
  history.replaceState(null,'',window.location.pathname);
}

function screenSupGen(){
  const ko=S.lang==='ko';
  const url=genSupplierURL();
  return`${nav(ko?'사전점검 요청':'Supplier Pre-Check','goHome()')}
  <div class="content">
    <span class="stag" style="background:var(--M)">📤 ${ko?'공유':'Share'}</span>
    <h2 class="stitle">${ko?'협력사 사전점검 링크':'Supplier Pre-Check Link'}</h2>
    <p class="ssub" style="margin-bottom:20px">${ko?'아래 링크를 협력사에 전달하세요. 협력사가 서류 준비 현황을 체크하면 결과를 감사에 반영할 수 있습니다.':'Share this link with the supplier. They can pre-check their document readiness before your visit.'}</p>
    <div style="font-size:12px;font-weight:700;color:var(--muted);text-transform:uppercase;letter-spacing:.5px;margin-bottom:6px">${ko?'협력사 링크':'Supplier Link'} — ${S.vendorCode}</div>
    <div class="link-box">${url}</div>
    <button id="copyBtn" onclick="copyText('${url}',this)" style="width:100%;padding:13px;background:var(--blue);color:#fff;border:none;border-radius:var(--r-lg);font-size:15px;font-weight:700;cursor:pointer;font-family:inherit;margin-bottom:20px">
      📋 ${ko?'링크 복사':'Copy Link'}
    </button>
    ${Object.keys(S.supplierChecks||{}).length?`
    <div style="background:#f0faf3;border:1.5px solid var(--C);border-radius:var(--r-lg);padding:14px;margin-bottom:14px">
      <div style="font-size:13px;font-weight:700;color:var(--C);margin-bottom:8px">✅ ${ko?'사전점검 결과 반영됨':'Pre-Check Data Imported'}</div>
      <div style="font-size:13px;color:var(--ink);line-height:1.7">
        ${ko?'반영 위치:':'Where to see it:'}<br>
        <strong>${ko?'각 점검 항목 → Document Review 탭':'Each audit item → Document Review step'}</strong><br>
        <span style="font-size:12px;color:var(--muted)">${ko?'서류 목록 옆에 ✓ 준비됨 / ✗ 미준비 배지가 표시됩니다.':'Each required document shows a ✓ Ready or ✗ Not Ready badge.'}</span>
      </div>
    </div>`:''}
    <div style="background:#fff8ee;border:1.5px solid var(--M);border-radius:var(--r-lg);padding:14px;font-size:13px;color:var(--ink);line-height:1.6">
      <strong>${ko?'사용 방법:':'How it works:'}</strong><br>
      ${ko?'① 위 링크를 협력사에 카카오톡/이메일로 전달<br>② 협력사가 서류 준비 현황 체크 후 결과 링크 생성<br>③ 결과 링크를 감사원에게 전달<br>④ 감사원이 링크를 열어 "감사에 반영" 클릭<br>⑤ 각 항목 Document Review에서 준비 현황 확인':'① Send the link to supplier via email/messenger<br>② Supplier checks document readiness & generates result link<br>③ Supplier sends the result link back to auditor<br>④ Auditor opens link and clicks "Import to Audit"<br>⑤ Check badges appear in each item\'s Document Review step'}
    </div>
  </div>`;
}

function screenSupplier(){
  const ko=_supLang==='ko';
  const dl=ko?DOC_LIST_KO:DOC_LIST;
  const grpNames=ko?SUP_GRP_NAMES_KO:SUP_GRP_NAMES;
  if(_supResultURL){
    return`<div style="min-height:100vh;background:var(--parch);display:flex;flex-direction:column">
      <div style="background:var(--dark);color:#fff;padding:16px;font-size:16px;font-weight:700">On-Site Audit — ${ko?'제출 완료':'Submitted'}</div>
      <div style="padding:24px 16px;flex:1">
        <div style="font-size:40px;text-align:center;margin-bottom:16px">✅</div>
        <h2 style="font-size:20px;font-weight:700;text-align:center;margin-bottom:8px">${ko?'체크 완료!':'All Done!'}</h2>
        <p style="font-size:13px;color:var(--muted);text-align:center;margin-bottom:24px">${ko?'아래 링크를 감사원에게 전달해주세요.':'Send the link below to the auditor.'}</p>
        <div style="font-size:12px;font-weight:700;color:var(--muted);text-transform:uppercase;letter-spacing:.5px;margin-bottom:6px">${ko?'결과 링크':'Result Link'}</div>
        <div class="link-box">${_supResultURL}</div>
        <button onclick="copyText('${_supResultURL}',this)" style="width:100%;padding:13px;background:var(--blue);color:#fff;border:none;border-radius:var(--r-lg);font-size:15px;font-weight:700;cursor:pointer;font-family:inherit">
          📋 ${ko?'링크 복사':'Copy Link'}
        </button>
      </div>
    </div>`;
  }

  const allDocs=SUP_SECTIONS.flatMap(s=>s.groups.flatMap(g=>(dl[g]||[]).map((_,i)=>supKey(g,i))));
  const checked=allDocs.filter(k=>_supChecks[k]==='y'||_supChecks[k]==='na').length;
  const pct=allDocs.length?Math.round(checked/allDocs.length*100):0;

  // Init all groups open on first render
  const allGrps=SUP_SECTIONS.flatMap(s=>s.groups);
  if(!Object.keys(_supOpenGroups).length) allGrps.forEach(g=>{_supOpenGroups[g]=true;});

  const grpBlock=g=>{
    const docs=dl[g];if(!docs||!docs.length)return'';
    const grpChecked=docs.filter((_,i)=>_supChecks[supKey(g,i)]==='y'||_supChecks[supKey(g,i)]==='na').length;
    const open=_supOpenGroups[g];
    return`<div class="sup-grp">
      <div style="padding:11px 14px;display:flex;align-items:center;justify-content:space-between;cursor:pointer;-webkit-tap-highlight-color:transparent;font-size:13px;font-weight:700"
        onclick="toggleSupGrp('${g}')">
        <span><span style="color:var(--blue);margin-right:5px">${g}</span>${grpNames[g]||g}
          <span id="supcount_${g}" class="sup-grp-prog">${grpChecked}/${docs.length}</span>
        </span>
        <span id="supchev_${g}" style="font-size:10px;color:var(--muted);transition:transform .2s;${open?'transform:rotate(180deg)':''}">▼</span>
      </div>
      <div id="supbody_${g}" class="sup-grp-body" style="display:${open?'block':'none'}">
        ${docs.map((d,i)=>{
          const k=supKey(g,i),v=_supChecks[k]||null;
          return`<div class="sup-doc-row">
            <div class="sup-doc-txt">${d}</div>
            <div class="sup-tog">
              <button class="sup-btn${v==='y'?' sy':''}" onclick="setSupCheck('${g}',${i},'y')">✓</button>
              <button class="sup-btn${v==='n'?' sn':''}" onclick="setSupCheck('${g}',${i},'n')">✗</button>
              <button class="sup-btn${v==='na'?' sna':''}" onclick="setSupCheck('${g}',${i},'na')">N/A</button>
            </div>
          </div>`;
        }).join('')}
      </div>
    </div>`;
  };

  return`<div style="min-height:100vh;background:var(--parch);display:flex;flex-direction:column">
    <div class="sup-hero">
      <div class="sup-hero-badge">📋 ${ko?'사전 서류 체크':'Pre-Check'}</div>
      <div class="sup-hero-title">${_supVendor}</div>
      <div class="sup-hero-sub">${ko?'필요 서류 준비 현황을 체크해주세요':'Check the readiness of required documents'}</div>
      <div style="margin-top:12px;background:rgba(255,255,255,.1);height:4px;border-radius:2px;overflow:hidden">
        <div id="supProgBar" style="height:100%;background:var(--C);border-radius:2px;width:${pct}%;transition:width .3s"></div>
      </div>
      <div id="supProgLbl" style="font-size:12px;color:rgba(255,255,255,.5);margin-top:5px">${checked} / ${allDocs.length} ${ko?'확인':'checked'} (${pct}%)</div>
    </div>
    <div style="padding:14px 16px;flex:1">
      ${SUP_SECTIONS.map(sec=>`
        <div style="font-size:11px;font-weight:700;color:var(--muted);text-transform:uppercase;letter-spacing:.8px;margin:12px 0 7px">${ko?sec.ko:sec.label}</div>
        ${sec.groups.map(grpBlock).join('')}`).join('')}
      <div style="height:90px"></div>
    </div>
    <div style="position:sticky;bottom:0;padding:12px 16px;background:var(--canvas);border-top:1px solid var(--line)">
      <button id="supSubmitBtn" onclick="submitSupplier()" style="width:100%;padding:14px;background:${pct>=50?'var(--blue)':'var(--muted)'};color:#fff;border:none;border-radius:var(--pill);font-size:17px;font-weight:700;cursor:pointer;font-family:inherit">
        ${ko?`완료 & 결과 코드 생성 (${pct}%)`:`Submit & Generate Result (${pct}%)`}
      </button>
    </div>
  </div>`;
}

function screenSupImport(){
  const ko=S.lang==='ko';
  if(!_importData)return`${nav('Import','goHome()')}`;
  const dl=ko?DOC_LIST_KO:DOC_LIST;
  const grpNames=ko?SUP_GRP_NAMES_KO:SUP_GRP_NAMES;
  const checks=_importData.checks||{};
  const ts=_importData.ts?new Date(_importData.ts).toLocaleString():'—';

  const allKeys=Object.keys(checks);
  const ready=allKeys.filter(k=>checks[k]==='y').length;
  const notReady=allKeys.filter(k=>checks[k]==='n').length;
  const na=allKeys.filter(k=>checks[k]==='na').length;

  const grpBlock=g=>{
    const docs=dl[g];if(!docs||!docs.length)return'';
    const hasData=docs.some((_,i)=>checks[supKey(g,i)]);
    if(!hasData)return'';
    return`<details class="sup-grp">
      <summary><span><span style="color:var(--blue);margin-right:5px">${g}</span>${grpNames[g]||g}</span><span style="font-size:10px;color:var(--muted)">▼</span></summary>
      <div class="sup-grp-body">
        ${docs.map((d,i)=>{
          const v=checks[supKey(g,i)];if(!v)return'';
          return`<div class="sup-doc-row">
            <div class="sup-doc-txt">${d}</div>
            <span class="sup-check-badge ${v}">${v==='y'?(ko?'준비됨':'Ready'):v==='n'?(ko?'미준비':'Not Ready'):'N/A'}</span>
          </div>`;
        }).join('')}
      </div>
    </details>`;
  };

  return`${nav(ko?'사전점검 결과 가져오기':'Import Pre-Check','S.screen=\'home\';render();history.replaceState(null,\'\',window.location.pathname)')}
  <div class="content">
    <span class="stag" style="background:var(--C)">📥 ${ko?'가져오기':'Import'}</span>
    <h2 class="stitle">${ko?'협력사 사전점검 결과':'Supplier Pre-Check Result'}</h2>
    <p class="ssub">${_importData.v} · ${ts}</p>
    <div style="display:flex;gap:8px;margin-bottom:16px">
      <div style="flex:1;background:#f0faf3;border:1.5px solid var(--C);border-radius:var(--r-md);padding:10px;text-align:center">
        <div style="font-size:20px;font-weight:800;color:var(--C)">${ready}</div>
        <div style="font-size:11px;color:var(--muted)">${ko?'준비됨':'Ready'}</div>
      </div>
      <div style="flex:1;background:#fff5f4;border:1.5px solid var(--P);border-radius:var(--r-md);padding:10px;text-align:center">
        <div style="font-size:20px;font-weight:800;color:var(--P)">${notReady}</div>
        <div style="font-size:11px;color:var(--muted)">${ko?'미준비':'Not Ready'}</div>
      </div>
      <div style="flex:1;background:var(--parch);border:1.5px solid var(--line);border-radius:var(--r-md);padding:10px;text-align:center">
        <div style="font-size:20px;font-weight:800;color:var(--muted)">${na}</div>
        <div style="font-size:11px;color:var(--muted)">N/A</div>
      </div>
    </div>
    ${SUP_SECTIONS.map(sec=>sec.groups.map(grpBlock).join('')).join('')}
  </div>
  <div class="bot">
    <button class="bs" onclick="S.screen='home';render();history.replaceState(null,'',window.location.pathname)">${ko?'취소':'Cancel'}</button>
    <button class="bp" onclick="importSupplierResult()">${ko?'감사에 반영':'Import to Audit'}</button>
  </div>`;
}

// ─── STORAGE ──────────────────────────────────
function getSessions(){
  try{return JSON.parse(localStorage.getItem('vap_sessions'))||[];}catch{return[];}
}

function saveToStorage(){
  if(!S.vendorCode)return;
  try{
    localStorage.setItem('vap_'+S.vendorCode,JSON.stringify(S));
  }catch(e){
    if(e.name==='QuotaExceededError'){
      // Retry without photos
      try{localStorage.setItem('vap_'+S.vendorCode,JSON.stringify({...S,photos:{}}));}catch{}
    }
  }
  // Update index
  const sessions=getSessions();
  const allDone=Object.keys(ITEMS).filter(k=>S.done[k]);
  const rate=allDone.length?Math.round(allDone.filter(k=>calcItem(k)==='conformance').length/allDone.length*100):null;
  const entry={code:S.vendorCode,country:S.country,lang:S.lang,
    lastUpdated:new Date().toISOString(),rate,
    done:allDone.length,total:Object.keys(ITEMS).length};
  const idx=sessions.findIndex(s=>s.code===S.vendorCode);
  if(idx>=0)sessions[idx]=entry;else sessions.push(entry);
  localStorage.setItem('vap_sessions',JSON.stringify(sessions));
}

function loadSession(code){
  try{
    const data=localStorage.getItem('vap_'+code);
    if(!data)return;
    const loaded=JSON.parse(data);
    S={...initState(),...loaded,screen:'home'};
    render();window.scrollTo(0,0);
  }catch(e){alert('Load failed: '+e.message);}
}

function deleteSession(code,ev){
  if(ev)ev.stopPropagation();
  if(!confirm(`Delete audit "${code}"?`))return;
  localStorage.removeItem('vap_'+code);
  const s=getSessions().filter(x=>x.code!==code);
  localStorage.setItem('vap_sessions',JSON.stringify(s));
  render();
}

function startAudit(){
  const vc=S.vendorCode.trim();
  if(!vc){alert(S.lang==='ko'?'Vendor Code를 입력해주세요.':'Please enter a Vendor Code.');return;}
  S.vendorCode=vc;
  S.screen='home';
  render();window.scrollTo(0,0);
}

// ─── CAP ──────────────────────────────────────
function setCAPField(id,field,val,rerender){
  if(!S.cap[id])S.cap[id]={cause:'',action:'',owner:'',due:'',status:'open'};
  S.cap[id][field]=val;
  if(rerender)render();
}

function exportCAP(){
  const ko=S.lang==='ko';
  const BOM='﻿';
  const hdr=ko
    ?['구분','코드','항목','심각도','위반 내용','근본 원인','시정 조치','담당자','목표 완료일','상태']
    :['Section','Code','Title','Severity','Findings','Root Cause','Corrective Action','Responsible','Target Date','Status'];
  const violItems=Object.keys(ITEMS).filter(id=>S.done[id]&&calcItem(id)!=='conformance');
  violItems.sort((a,b)=>LVL.indexOf(calcItem(b))-LVL.indexOf(calcItem(a)));
  const statusLbl=s=>ko?{open:'미완료',inprogress:'진행 중',closed:'완료'}[s||'open']:{open:'Open',inprogress:'In Progress',closed:'Closed'}[s||'open'];
  const rows=violItems.map(id=>{
    const m=ITEMS[id],r=calcItem(id),c=S.cap[id]||{},a=S.ans[id];
    const finds=[...getFindings(id+'_mgmt',a.mgmt),...getFindings(id+'_doc',a.doc),...getFindings(id+'_worker',a.worker)];
    return[`${m.grp} — ${GRPS[m.grp]||m.grp}`,m.code,iTitle(id),RL[r],
      finds.map(f=>f.text).join('; '),c.cause||'',c.action||'',c.owner||'',c.due||'',statusLbl(c.status)];
  });
  const csv=BOM+[hdr,...rows].map(r=>r.map(v=>`"${String(v).replace(/"/g,'""')}"`).join(',')).join('\r\n');
  const url=URL.createObjectURL(new Blob([csv],{type:'text/csv;charset=utf-8'}));
  const a2=document.createElement('a');a2.href=url;a2.download=`CAP_${new Date().toISOString().slice(0,10)}.csv`;a2.click();URL.revokeObjectURL(url);
}

function screenCAP(){
  const ko=S.lang==='ko';
  const violItems=Object.keys(ITEMS).filter(id=>S.done[id]&&calcItem(id)!=='conformance');
  violItems.sort((a,b)=>LVL.indexOf(calcItem(b))-LVL.indexOf(calcItem(a)));

  if(!violItems.length)return`${nav(ko?'시정조치계획 (CAP)':'Corrective Action Plan','goHome()')}
    <div class="cap-empty">
      <div class="cap-empty-icon">✅</div>
      <div class="cap-empty-title">${ko?'위반 사항 없음':'No Findings'}</div>
      <div class="cap-empty-sub">${ko?'완료된 항목에 위반이 없습니다.':'No violations found in completed items.'}</div>
    </div>`;

  const total=violItems.length;
  const filled=violItems.filter(id=>{const c=S.cap[id];return c&&(c.cause||c.action);}).length;
  const closed=violItems.filter(id=>S.cap[id]&&S.cap[id].status==='closed').length;
  const pct=Math.round(closed/total*100);

  const capCard=id=>{
    const m=ITEMS[id],r=calcItem(id),k=RK[r];
    const c=S.cap[id]||{};
    const open=!!S.capOpen[id];
    const a=S.ans[id];
    const finds=[...getFindings(id+'_mgmt',a.mgmt),...getFindings(id+'_doc',a.doc),...getFindings(id+'_worker',a.worker)];
    const hasCap=c.cause||c.action||c.owner||c.due;
    const statusLabels=ko?['미완료','진행 중','완료']:['Open','In Progress','Closed'];
    const statusKeys=['open','inprogress','closed'];
    const statusCls=['s-open','s-prog','s-done'];
    return`<div class="cap-item sv-${k}">
      <div class="cap-item-hdr" onclick="S.capOpen['${id}']=!S.capOpen['${id}'];render()">
        <span class="icbadge ${k}" style="font-size:10px;padding:3px 8px;flex-shrink:0">${RL[r]}</span>
        <div class="cap-item-info">
          <div class="cap-item-code">${m.code}</div>
          <div class="cap-item-title">${iTitle(id)}</div>
        </div>
        ${hasCap?`<div class="cap-filled-dot"></div>`:''}
        <span class="cap-item-chev">${open?'▲':'▼'}</span>
      </div>
      ${open?`<div class="cap-form">
        ${finds.length?`<div class="cap-finds">
          <div class="cap-finds-lbl">${ko?'위반 내용':'Findings'}</div>
          ${finds.map(f=>`<div class="cap-find-row">
            <span class="cap-find-dot" style="background:${RCOL[f.sev]||RCOL.minor}"></span>${f.text}
          </div>`).join('')}
        </div>`:''}
        <div class="cap-field">
          <label class="cap-lbl">${ko?'근본 원인 (Root Cause)':'Root Cause'}</label>
          <textarea class="cap-textarea" rows="2"
            placeholder="${ko?'왜 이 위반이 발생했습니까?':'Why did this non-conformance occur?'}"
            onblur="setCAPField('${id}','cause',this.value)">${c.cause||''}</textarea>
        </div>
        <div class="cap-field">
          <label class="cap-lbl">${ko?'시정 조치 (Corrective Action)':'Corrective Action'}</label>
          <textarea class="cap-textarea" rows="2"
            placeholder="${ko?'어떤 조치를 취할 것입니까?':'What action will be taken to address this?'}"
            onblur="setCAPField('${id}','action',this.value)">${c.action||''}</textarea>
        </div>
        <div style="display:flex;gap:10px">
          <div class="cap-field" style="flex:1">
            <label class="cap-lbl">${ko?'담당자':'Responsible'}</label>
            <input class="cap-input" type="text"
              placeholder="${ko?'이름 / 부서':'Name / Dept'}"
              value="${c.owner||''}"
              onblur="setCAPField('${id}','owner',this.value)">
          </div>
          <div class="cap-field" style="flex:1">
            <label class="cap-lbl">${ko?'목표 완료일':'Target Date'}</label>
            <input class="cap-input" type="date" value="${c.due||''}"
              onchange="setCAPField('${id}','due',this.value)">
          </div>
        </div>
        <div class="cap-field">
          <label class="cap-lbl">${ko?'상태':'Status'}</label>
          <div class="cap-status">
            ${statusKeys.map((s,i)=>`<button class="cap-sbtn ${statusCls[i]}${(c.status||'open')===s?' sel':''}"
              onclick="setCAPField('${id}','status','${s}',true)">${statusLabels[i]}</button>`).join('')}
          </div>
        </div>
      </div>`:''}</div>`;
  };

  return`${nav(ko?'시정조치계획 (CAP)':'Corrective Action Plan','goHome()')}
  <div class="cap-summary">
    <div class="cap-summary-top">
      <div>
        <div class="cap-summary-title">${ko?`총 ${total}건 위반`:`${total} Finding${total>1?'s':''}`}</div>
        <div class="cap-summary-sub">${ko?`${filled}건 작성 · ${closed}건 완료 (${pct}%)`:`${filled} filled · ${closed} closed (${pct}%)`}</div>
      </div>
      <button onclick="exportCAP()" style="padding:10px 18px;background:var(--blue);color:#fff;border:none;border-radius:var(--pill);font-size:13px;font-weight:700;cursor:pointer;font-family:inherit;-webkit-tap-highlight-color:transparent;flex-shrink:0">
        📥 ${ko?'내보내기':'Export'}
      </button>
    </div>
    <div class="cap-prog-bar"><div class="cap-prog-fill" style="width:${pct}%"></div></div>
  </div>
  <div class="content">${violItems.map(capCard).join('')}</div>`;
}

// ─── NOTE & PHOTO ─────────────────────────────
let _photoPending=null;

function saveNote(id,type,qid,val){
  if(!S.notes[id])S.notes[id]={mgmt:{},doc:{},worker:{}};
  S.notes[id][type][qid]=val;
  // no re-render — saves silently on blur
}

function openPhotoInput(id,type,qid){
  _photoPending={id,type,qid};
  document.getElementById('photoInput').click();
}

function handlePhotoInput(e){
  const f=e.target.files[0];
  if(!f||!_photoPending)return;
  const reader=new FileReader();
  reader.onload=ev=>{
    const img=new Image();
    img.onload=()=>{
      const maxW=900,scale=Math.min(1,maxW/img.width);
      const canvas=document.createElement('canvas');
      canvas.width=Math.round(img.width*scale);
      canvas.height=Math.round(img.height*scale);
      canvas.getContext('2d').drawImage(img,0,0,canvas.width,canvas.height);
      const compressed=canvas.toDataURL('image/jpeg',0.72);
      const{id,type,qid}=_photoPending;
      if(!S.photos[id])S.photos[id]={mgmt:{},doc:{},worker:{}};
      if(!S.photos[id][type][qid])S.photos[id][type][qid]=[];
      S.photos[id][type][qid].push(compressed);
      _photoPending=null;
      e.target.value='';
      render();
    };
    img.src=ev.target.result;
  };
  reader.readAsDataURL(f);
}

function removePhoto(id,type,qid,idx){
  S.photos[id][type][qid].splice(idx,1);
  render();
}

function viewPhoto(id,type,qid,idx){
  document.getElementById('photoViewerImg').src=S.photos[id][type][qid][idx];
  document.getElementById('photoViewer').style.display='flex';
}

function closePhotoViewer(){
  document.getElementById('photoViewer').style.display='none';
}

// ─── MAIN ─────────────────────────────────────
function render(){
  document.getElementById('app').innerHTML=
    S.screen==='landing'?screenLanding():
    S.screen==='setup'?screenSetup():
    S.screen==='home'?screenHome():
    S.screen==='item'?screenItem():
    S.screen==='nsupItem'?screenNsupItem():
    S.screen==='cap'?screenCAP():
    S.screen==='supgen'?screenSupGen():
    S.screen==='supplier'?screenSupplier():
    S.screen==='supimport'?screenSupImport():
    S.screen==='manual'?screenManual():'';
  if(S.vendorCode&&!['landing','setup','supplier','supimport'].includes(S.screen))saveToStorage();
}

// Detect URL params for supplier flow
(function(){
  const p=new URLSearchParams(window.location.search);
  const sup=p.get('sup'),res=p.get('supresult');
  if(sup){
    _supVendor=decodeURIComponent(sup);
    _supLang=p.get('lang')||'ko';
    S.screen='supplier';
  } else if(res){
    try{
      _importData=JSON.parse(decodeURIComponent(escape(atob(decodeURIComponent(res)))));
      S.screen='supimport';
    }catch(e){console.error('Import parse error',e);}
  }
})();

render();

// ═══════════════════════════════════════════════════════════
//  AI INTEGRATION — OCR 문서분석 + 챗봇 (Claude Messages API)
//  키/엔드포인트는 설정(⚙)에 저장. 엔드포인트를 백엔드 프록시로
//  교체하면 브라우저에 키를 두지 않고도 그대로 동작한다.
// ═══════════════════════════════════════════════════════════
const AI_CFG_KEY='vap_ai_cfg';
const AI_DEFAULTS={endpoint:'https://api.anthropic.com/v1/messages',model:'claude-haiku-4-5',apiKey:''};
function aiCfg(){try{return{...AI_DEFAULTS,...(JSON.parse(localStorage.getItem(AI_CFG_KEY))||{})};}catch{return{...AI_DEFAULTS};}}
function aiSaveCfgObj(c){localStorage.setItem(AI_CFG_KEY,JSON.stringify(c));}

const AI_SYSTEM=`당신은 RBA VAP(Validated Audit Process) 신규협력사 심사를 돕는 AI 보조자입니다.
- 삼성 협력사 대상 노동·인권·안전보건(EHS) 심사 기준(RBA VAP Standard 및 Operations Manual)에 근거해 답변합니다.
- 문서 사진이 첨부되면, 먼저 문서에서 읽어낸 핵심 사실을 항목별로 정리(OCR)한 뒤 관련 점검 기준과 대조해 분석합니다.
- 근거가 부족하면 추측하지 말고 "제공된 정보로는 확인 불가"라고 명시합니다.
- 최종 판정은 감사자가 확정합니다. 당신은 초안·근거·참고의견만 제시하며, 확정 판정을 단정하지 않습니다.
- 한국어로 간결하고 실무적으로 답변합니다.`;

// in-memory chat state (감사 세션 저장소와 분리)
const aiS={busy:false,msgs:[],pending:[],judge:null}; // judge: 자동판정 대상 항목 id (null=일반 챗)

function aiEsc(s){return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');}
function aiFmt(s){return aiEsc(s).replace(/\*\*(.+?)\*\*/g,'<b>$1</b>').replace(/\n/g,'<br>');}

function aiShowPanel(){
  document.getElementById('aiScrim').classList.remove('ai-hidden');
  document.getElementById('aiPanel').classList.remove('ai-hidden');
  document.getElementById('aiCfg').classList.add('ai-hidden');
  document.getElementById('aiFoot').classList.remove('ai-hidden');
  const t=document.getElementById('aiTitle');
  if(t)t.textContent=aiS.judge?`AI 자동판정 · ${aiS.judge}`:'AI 도우미 · 문서분석 & 질의';
  const inp=document.getElementById('aiInput');
  if(inp)inp.placeholder=aiS.judge?'참고사항 (선택)…':'질문을 입력하거나 문서 사진을 첨부하세요…';
  aiRender();
}
function aiOpen(){ // FAB → 일반 챗 모드
  if(aiS.judge){aiS.judge=null;aiS.msgs=[];aiS.pending=[];}
  aiShowPanel();
  if(!aiCfg().apiKey&&aiS.msgs.length===0)aiToggleSettings();
}
function aiClose(){
  document.getElementById('aiScrim').classList.add('ai-hidden');
  document.getElementById('aiPanel').classList.add('ai-hidden');
}
function aiAutoGrow(t){t.style.height='auto';t.style.height=Math.min(t.scrollHeight,96)+'px';}
function aiKeydown(e){if(e.key==='Enter'&&!e.shiftKey){e.preventDefault();aiSend();}}

function aiRender(){
  const body=document.getElementById('aiBody');
  let h='';
  if(aiS.msgs.length===0){
    h=`<div class="ai-empty">문서 사진을 첨부하면 <b>OCR로 내용을 읽어</b> 점검 기준과 대조해 분석하고,<br>질문을 입력하면 <b>RBA VAP 기준</b>에 근거해 답변합니다.<br><br>※ 최종 판정은 감사자가 확정합니다.</div>`;
  }else{
    aiS.msgs.forEach(m=>{
      const imgs=(m.images||[]).map(d=>`<img src="${d}">`).join('');
      const cls=m.role==='user'?'u':(m.role==='error'?'a err':'a');
      h+=`<div class="aim ${cls}"><div class="aibub">${imgs}${m.role==='assistant'||m.role==='error'?aiFmt(m.text):aiEsc(m.text).replace(/\n/g,'<br>')}</div></div>`;
    });
  }
  if(aiS.busy)h+=`<div class="ai-typing">분석 중…</div>`;
  body.innerHTML=h;
  body.scrollTop=body.scrollHeight;
  aiRenderAttach();
  document.getElementById('aiSendBtn').disabled=aiS.busy;
}
function aiRenderAttach(){
  document.getElementById('aiAttach').innerHTML=aiS.pending.map((p,i)=>
    `<div class="ai-thumb"><img src="${p.dataURL}"><button onclick="aiRmAttach(${i})">×</button></div>`).join('');
}
function aiRmAttach(i){aiS.pending.splice(i,1);aiRenderAttach();}

function aiHandleFiles(e){
  const files=[...e.target.files];e.target.value='';
  files.forEach(f=>{
    const reader=new FileReader();
    reader.onload=ev=>{
      const img=new Image();
      img.onload=()=>{
        const maxW=1600,scale=Math.min(1,maxW/img.width);
        const c=document.createElement('canvas');
        c.width=Math.round(img.width*scale);c.height=Math.round(img.height*scale);
        c.getContext('2d').drawImage(img,0,0,c.width,c.height);
        const dataURL=c.toDataURL('image/jpeg',0.85);
        aiS.pending.push({dataURL,media_type:'image/jpeg',data:dataURL.split(',')[1]});
        aiRenderAttach();
      };
      img.src=ev.target.result;
    };
    reader.readAsDataURL(f);
  });
}

async function aiSend(){
  if(aiS.busy)return;
  if(aiS.judge)return aiJudgeRun();
  const inp=document.getElementById('aiInput');
  const text=inp.value.trim();
  if(!text&&aiS.pending.length===0)return;
  const cfg=aiCfg();
  if(!cfg.apiKey){aiToggleSettings();return;}

  const images=aiS.pending.map(p=>p.dataURL);
  const apiImgs=aiS.pending.map(p=>({type:'image',source:{type:'base64',media_type:p.media_type,data:p.data}}));
  aiS.msgs.push({role:'user',text:text||'(문서 분석 요청)',images});
  aiS.pending=[];inp.value='';aiAutoGrow(inp);
  aiS.busy=true;aiRender();

  // build API messages from history
  const apiMsgs=aiS.msgs.filter(m=>m.role==='user'||m.role==='assistant').map((m,idx,arr)=>{
    const isLast=idx===arr.length-1;
    const blocks=[];
    if(isLast)blocks.push(...apiImgs);
    blocks.push({type:'text',text:m.text});
    return{role:m.role,content:blocks};
  });

  try{
    const res=await fetch(cfg.endpoint,{
      method:'POST',
      headers:{
        'content-type':'application/json',
        'x-api-key':cfg.apiKey,
        'anthropic-version':'2023-06-01',
        'anthropic-dangerous-direct-browser-access':'true'
      },
      body:JSON.stringify({model:cfg.model,max_tokens:4096,system:AI_SYSTEM,messages:apiMsgs})
    });
    const data=await res.json();
    if(!res.ok){
      const msg=(data&&data.error&&data.error.message)||('요청 실패 ('+res.status+')');
      aiS.msgs.push({role:'error',text:'⚠ '+msg});
    }else{
      const txt=(data.content||[]).filter(b=>b.type==='text').map(b=>b.text).join('\n').trim();
      aiS.msgs.push({role:'assistant',text:txt||'(응답이 비어 있습니다)'});
    }
  }catch(err){
    aiS.msgs.push({role:'error',text:'⚠ 통신 오류: '+err.message+'\n(CORS 차단 시 백엔드 프록시가 필요합니다)'});
  }
  aiS.busy=false;aiRender();
}

function aiToggleSettings(){
  const cfgEl=document.getElementById('aiCfg'),foot=document.getElementById('aiFoot'),body=document.getElementById('aiBody');
  const showing=!cfgEl.classList.contains('ai-hidden');
  if(showing){cfgEl.classList.add('ai-hidden');foot.classList.remove('ai-hidden');body.classList.remove('ai-hidden');return;}
  const c=aiCfg();
  cfgEl.innerHTML=`
    <h3>AI 연결 설정</h3>
    <p>Claude API 연결 정보입니다. API 키는 이 기기(localStorage)에만 저장됩니다.</p>
    <label>API Key</label>
    <input id="aiCfgKey" type="password" placeholder="sk-ant-... (나중에 입력)" value="${aiEsc(c.apiKey)}">
    <label>모델</label>
    <input id="aiCfgModel" value="${aiEsc(c.model)}">
    <label>엔드포인트 (백엔드 프록시 사용 시 변경)</label>
    <input id="aiCfgEndpoint" value="${aiEsc(c.endpoint)}">
    <button class="save" onclick="aiSaveSettings()">저장</button>
    <p class="note">⚠ 정적 페이지에서 API 키를 직접 넣으면 노출 위험이 있습니다. 운영 시에는 엔드포인트를 서버리스 백엔드 프록시로 바꾸고 키는 서버에만 두세요.</p>`;
  cfgEl.classList.remove('ai-hidden');foot.classList.add('ai-hidden');body.classList.add('ai-hidden');
}
function aiSaveSettings(){
  aiSaveCfgObj({
    apiKey:document.getElementById('aiCfgKey').value.trim(),
    model:document.getElementById('aiCfgModel').value.trim()||AI_DEFAULTS.model,
    endpoint:document.getElementById('aiCfgEndpoint').value.trim()||AI_DEFAULTS.endpoint
  });
  aiToggleSettings();
}

// ─── AI 자동판정 (신규협력사 항목별 등급 제안) ───
// 문서 사진 → 판정기준 대조 → {등급, 문항응답, 근거} 구조화 출력 → 감사자 검토·적용
const AI_JUDGE_SCHEMA={
  type:'object',
  properties:{
    doc_summary:{type:'string',description:'첨부 문서에서 읽어낸 핵심 사실 요약 (OCR 결과 정리)'},
    suggested_grade:{type:'string',enum:['conformance','minor','major','priority','na','insufficient_evidence']},
    confidence:{type:'number',description:'0~1 사이 확신도'},
    answers:{type:'array',items:{
      type:'object',
      properties:{
        q_id:{type:'string'},
        answer:{type:'string',enum:['yes','no','na','unknown']},
        evidence:{type:'string',description:'해당 답의 근거 (문서 내 확인 위치·내용)'}
      },
      required:['q_id','answer','evidence'],additionalProperties:false
    }},
    rationale:{type:'string',description:'판정기준의 어느 조항을 적용했는지 설명'}
  },
  required:['doc_summary','suggested_grade','confidence','answers','rationale'],
  additionalProperties:false
};
const AI_GLABEL={conformance:'적합',minor:'Minor',major:'Major',priority:'Priority',na:'N/A',insufficient_evidence:'근거 부족'};

function aiJudgeOpen(id){
  const it=nsupItemById(id);if(!it)return;
  aiS.judge=id;aiS.msgs=[];aiS.pending=[];
  aiS.msgs.push({role:'assistant',text:`[${it.id} · ${it.title}] 자동판정 모드입니다.\n\n관련 문서 사진(계약서·급여명세서·정책문서 등)을 📷로 첨부한 뒤 ➤를 누르세요. 판정기준과 대조해 등급을 제안합니다.\n\n※ 제안은 초안이며, 적용 여부는 감사자가 결정합니다.`});
  aiShowPanel();
  if(!aiCfg().apiKey)aiToggleSettings();
}

async function aiJudgeRun(){
  if(aiS.busy)return;
  const id=aiS.judge,it=nsupItemById(id);
  if(!it)return;
  const cfg=aiCfg();
  if(!cfg.apiKey){aiToggleSettings();return;}
  if(aiS.pending.length===0){
    aiS.msgs.push({role:'error',text:'⚠ 문서 사진을 1장 이상 첨부해 주세요.'});
    aiRender();return;
  }
  const inp=document.getElementById('aiInput');
  const note=inp.value.trim();
  const images=aiS.pending.map(p=>p.dataURL);
  const blocks=aiS.pending.map(p=>({type:'image',source:{type:'base64',media_type:p.media_type,data:p.data}}));
  const qs=NSUP_Q[id]||[];
  const qtxt=qs.map(q=>`${q.id} [${q.sev}] ${q.q}`).join('\n');
  blocks.push({type:'text',text:
`[점검 항목]
${it.id} · ${it.title} (구분: ${it.gubun}, 분류: ${NSUP_GRPT[it.grp]||it.grp})
배점 — 적합 ${it.c} / Minor ${it.mi} / Major ${it.mj} / Priority ${it.pr} / N-A ${it.na}

[판정기준 전문]
${it.crit}

[점검 문항] (yes=준수, no=해당 심각도 위반, na=해당없음, unknown=문서로 확인 불가)
${qtxt}
${note?`
[감사자 참고사항]
${note}
`:''}
[지시]
1. 첨부된 문서 사진의 내용을 읽고 핵심 사실을 doc_summary에 정리하라.
2. 각 문항(q_id)에 대해 문서에서 확인 가능한 근거로만 yes/no/na/unknown을 답하고 evidence에 근거를 적어라. 추측 금지.
3. 위 판정기준에 따라 suggested_grade를 제안하라. 문서만으로 판단이 어려우면 insufficient_evidence.
4. rationale에는 판정기준의 어느 조항(Priority/Major/Minor 몇 번)을 적용했는지 명시하라.`});

  aiS.msgs.push({role:'user',text:note||'(자동판정 요청)',images});
  aiS.pending=[];inp.value='';aiAutoGrow(inp);
  aiS.busy=true;aiRender();

  try{
    const res=await fetch(cfg.endpoint,{
      method:'POST',
      headers:{
        'content-type':'application/json',
        'x-api-key':cfg.apiKey,
        'anthropic-version':'2023-06-01',
        'anthropic-dangerous-direct-browser-access':'true'
      },
      body:JSON.stringify({
        model:cfg.model,max_tokens:3000,system:AI_SYSTEM,
        messages:[{role:'user',content:blocks}],
        output_config:{format:{type:'json_schema',schema:AI_JUDGE_SCHEMA}}
      })
    });
    const data=await res.json();
    if(!res.ok){
      const msg=(data&&data.error&&data.error.message)||('요청 실패 ('+res.status+')');
      aiS.msgs.push({role:'error',text:'⚠ '+msg});
    }else{
      const txt=(data.content||[]).filter(b=>b.type==='text').map(b=>b.text).join('').trim();
      const sug=JSON.parse(txt);
      if(!S.nsupAI)S.nsupAI={};
      S.nsupAI[id]={...sug,ts:Date.now()};
      const conf=Math.round((sug.confidence||0)*100);
      aiS.msgs.push({role:'assistant',text:
`**제안 등급: ${AI_GLABEL[sug.suggested_grade]||sug.suggested_grade}** (확신도 ${conf}%)

**📄 문서 요약**
${sug.doc_summary}

**판정 근거**
${sug.rationale}

${(sug.answers||[]).map(a=>`${a.q_id} · ${a.answer==='unknown'?'확인불가':a.answer.toUpperCase()} — ${a.evidence}`).join('\n')}

항목 화면에 제안 카드가 표시되었습니다. [제안 적용]을 누르면 문항에 반영됩니다.`});
      render(); // 항목 화면 갱신 + localStorage 저장
    }
  }catch(err){
    aiS.msgs.push({role:'error',text:'⚠ '+(err instanceof SyntaxError?'응답 해석 실패 (구조화 출력 미지원 모델일 수 있음)':'통신 오류: '+err.message+'\n(CORS 차단 시 백엔드 프록시가 필요합니다)')});
  }
  aiS.busy=false;aiRender();
}

// 항목 화면의 AI 제안 카드
function aiSuggCard(id,it){
  const sug=(S.nsupAI||{})[id];
  if(!sug)return'';
  const gmeta={conformance:'C',minor:'m',major:'M',priority:'P',na:'na'};
  const k=gmeta[sug.suggested_grade];
  const open=(S.nsupOpen||{})['ai_'+id];
  const conf=Math.round((sug.confidence||0)*100);
  return`<div class="nsup-card ai-sugg">
    <div class="ai-sugg-h">
      <span>🤖 AI 제안</span>
      <span class="icbadge ${k||'ns'}">${AI_GLABEL[sug.suggested_grade]||sug.suggested_grade}</span>
      <span class="ai-conf">확신도 ${conf}%</span>
    </div>
    ${open?`<div class="ai-sugg-body">
      <div class="ai-sugg-sec"><b>문서 요약</b><br>${aiEsc(sug.doc_summary||'')}</div>
      <div class="ai-sugg-sec"><b>근거</b><br>${aiEsc(sug.rationale||'')}</div>
      ${(sug.answers||[]).map(a=>`<div class="ai-sugg-q"><b>${aiEsc(a.q_id)}</b> · ${a.answer==='unknown'?'확인불가':aiEsc(a.answer).toUpperCase()} — ${aiEsc(a.evidence||'')}</div>`).join('')}
    </div>`:''}
    <div class="ai-sugg-btns">
      <button onclick="S.nsupOpen['ai_${id}']=!S.nsupOpen['ai_${id}'];render()">${open?'접기':'근거 보기'}</button>
      <button class="ap" onclick="aiJudgeApply('${id}')">제안 적용</button>
      <button class="rm" onclick="aiJudgeClear('${id}')">삭제</button>
    </div>
    <div class="ai-sugg-note">※ AI 제안은 초안입니다. 감사자가 문항을 검토·수정해 확정하세요.</div>
  </div>`;
}
function aiJudgeApply(id){
  const sug=(S.nsupAI||{})[id];if(!sug)return;
  if(!S.nsupAns)S.nsupAns={};
  if(!S.nsupAns[id])S.nsupAns[id]={};
  (sug.answers||[]).forEach(a=>{
    if(['yes','no','na'].includes(a.answer))S.nsupAns[id][a.q_id]=a.answer;
  });
  render(); // 기존 로직(nsupGrade)이 등급 재계산
}
function aiJudgeClear(id){
  if(S.nsupAI)delete S.nsupAI[id];
  render();
}

// ─── 사용자 매뉴얼 (실제 화면 스크린샷 + 한/영, 탭·접기) ───
const MAN_UI={
  ko:{title:'📖 사용 설명서',close:'닫기',tabFeat:'기능 안내',tabProc:'점검 진행',
      intro:'각 기능의 실제 화면과 눌러야 할 버튼(빨간 표시)을 순서대로 안내합니다.',
      procIntro:'실제 현장 점검을 처음부터 끝까지 진행하는 순서입니다. 각 항목을 눌러 펼치세요.',
      foot:'문의·개선 요청은 감사 담당자에게 전달해 주세요.'},
  en:{title:'📖 User Guide',close:'Close',tabFeat:'Features',tabProc:'Audit Process',
      intro:'Real screens for each feature, with the button to tap highlighted in red.',
      procIntro:'The full flow of running an on-site audit, start to finish. Tap each item to expand.',
      foot:'Please send questions or improvement requests to your audit lead.'}
};
const MANUAL_SECTIONS=[
  {n:'01',img:'manual/save.png',
   ko:{title:'점검 시작 & 이어하기',desc:'첫 화면(랜딩)입니다. 처음이면 <b>+ New Audit</b>으로 시작하고, 이전에 하던 점검이 있으면 카드나 <b>Resume</b>를 눌러 이어서 작업합니다.',steps:['같은 Vendor Code로 다시 열면 진행 내용이 자동 저장·복원됩니다.','점검 내용은 이 기기 브라우저에 저장됩니다.']},
   en:{title:'Start & Resume an Audit',desc:'This is the landing screen. Tap <b>+ New Audit</b> to start, or tap a saved card / <b>Resume</b> to continue.',steps:['Reopening with the same Vendor Code auto-restores your progress.','Data is stored in this device’s browser.']}},
  {n:'02',img:'manual/share1.png',
   ko:{title:'협력사 사전점검 요청 (공유) ①',desc:'홈 화면에서 <b>📤 협력사 사전점검 요청</b> 버튼을 누릅니다.',steps:['협력사가 방문 전에 필요 서류 준비 현황을 미리 체크할 수 있습니다.']},
   en:{title:'Request Supplier Pre-Check (Share) ①',desc:'On the home screen, tap <b>📤 Request Supplier Pre-Check</b>.',steps:['The supplier can check document readiness before your visit.']}},
  {n:'03',img:'manual/share2.png',
   ko:{title:'협력사에 링크 전달 ②',desc:'생성된 링크를 <b>📋 링크 복사</b> 버튼으로 복사해 카카오톡·이메일로 협력사에 보냅니다.',steps:['협력사가 서류 현황을 체크하면 결과 링크를 생성합니다.','결과 링크를 감사원이 열어 “감사에 반영”을 누르면 각 항목 Document Review에 ✓/✗ 배지로 표시됩니다.']},
   en:{title:'Send Link to Supplier ②',desc:'Copy the generated link with <b>📋 Copy Link</b> and send it via messenger/email.',steps:['The supplier checks readiness and generates a result link.','Open that link and tap “Import to Audit” — ✓/✗ badges appear in each item’s Document Review.']}},
  {n:'04',img:'manual/excel.png',
   ko:{title:'점검 결과 Excel(CSV) 내보내기',desc:'홈 <b>점검 항목</b> 탭 맨 아래의 <b>📊 점검 결과 Excel 내보내기</b> 버튼을 누르면 CSV 파일이 다운로드됩니다.',steps:['등급·발견사항·메모·사진 수가 포함됩니다.','다운로드된 .csv 파일은 Excel에서 바로 열립니다.']},
   en:{title:'Export Results to Excel (CSV)',desc:'At the bottom of the <b>Audit Items</b> tab, tap <b>📊 Export Results to Excel</b> to download a CSV.',steps:['Includes ratings, findings, notes and photo counts.','The .csv opens directly in Excel.']}},
  {n:'05',img:'manual/aibtn.png',
   ko:{title:'AI 자동판정 — 문서 사진으로 등급 제안',desc:'신규협력사 탭의 각 점검 항목에서 <b>🤖 AI 자동판정</b> 버튼을 누른 뒤 관련 문서 사진(계약서·급여명세서 등)을 첨부합니다.',steps:['AI가 문서를 읽어(OCR) 판정기준과 대조해 등급을 제안합니다.','※ API 키 설정이 필요합니다(08 참고).']},
   en:{title:'AI Auto-Judge — Grade from Photos',desc:'In a New-Supplier item, tap <b>🤖 AI Auto-Judge</b> and attach relevant document photos (contracts, payslips, etc.).',steps:['AI reads the document (OCR) and suggests a grade against the criteria.','※ Requires an API key (see 08).']}},
  {n:'06',img:'manual/aicard.png',
   ko:{title:'AI 제안 검토 & 적용',desc:'AI 제안 카드에서 근거를 확인하고 <b>제안 적용</b>을 누르면 문항에 자동 반영됩니다.',steps:['적용 후에도 문항을 직접 수정하면 등급이 다시 계산됩니다.','최종 판정은 항상 감사자가 확정합니다. AI는 초안·근거만 제공합니다.']},
   en:{title:'Review & Apply AI Suggestion',desc:'Review the evidence on the suggestion card and tap <b>Apply Suggestion</b> to prefill the questions.',steps:['Editing answers afterward recalculates the grade.','The auditor always makes the final decision; AI provides only a draft and rationale.']}},
  {n:'07',img:'manual/fab.png',
   ko:{title:'AI 도우미 열기 (문서분석·질의)',desc:'어느 화면에서든 우측 하단 <b>✦</b> 버튼으로 AI 도우미를 엽니다.',steps:['문서 사진을 첨부하면 OCR 분석, 질문을 입력하면 RBA VAP 기준으로 답변합니다.']},
   en:{title:'Open AI Assistant (Analysis & Q&A)',desc:'Tap the <b>✦</b> button (bottom-right) on any screen to open the AI assistant.',steps:['Attach a photo for OCR analysis, or type a question for RBA VAP guidance.']}},
  {n:'08',img:'manual/aichat.png',
   ko:{title:'AI 연결 설정 (API 키)',desc:'AI 기능을 쓰려면 설정(⚙)에서 <b>API 키</b>를 입력하고 저장해야 합니다.',steps:['API 키는 이 기기에만 저장됩니다.','기본 모델은 저비용 Haiku입니다. 설정에서 변경 가능합니다.']},
   en:{title:'AI Setup (API Key)',desc:'To use AI features, enter your <b>API key</b> in Settings (⚙) and save.',steps:['The key is stored only on this device.','Default model is low-cost Haiku; changeable in settings.']}},
];
const PROCESS_SECTIONS=[
  {ko:{t:'① 점검 준비 (Setup)',b:'<b>Vendor Code</b>(필수)를 입력합니다 — 이 코드로 세션이 저장·복원됩니다.<br>국가와 현지 법정 기준을 입력하면 자동 등급 산정에 반영됩니다:<ul><li>퇴사 사전통지 기간(개월)</li><li>주당 최대 근로시간</li><li>초과근로 할증률(%)</li><li>월 최저임금</li><li>최저 고용연령</li><li>개인서류 원본 보관 허용 여부</li></ul>입력 후 <b>Start</b>를 누릅니다.'},
   en:{t:'① Prepare the Audit (Setup)',b:'Enter a <b>Vendor Code</b> (required) — the session is saved/restored by this code.<br>Enter the country and local legal thresholds, which feed the auto-grading:<ul><li>Resignation notice period (months)</li><li>Max weekly working hours</li><li>Overtime premium (%)</li><li>Monthly minimum wage</li><li>Minimum employment age</li><li>Whether original ID retention is permitted</li></ul>Then tap <b>Start</b>.'}},
  {ko:{t:'② 홈 화면 구성',b:'홈에는 3개 탭이 있습니다:<ul><li><b>점검 항목</b> — 노동/윤리/공급망 정식 점검(A·AM·D·DM·E)</li><li><b>필요 서류</b> — 그룹별 요구 서류 목록</li><li><b>신규협력사</b> — 신규 등록 평가 체크리스트(19항목)</li></ul>상단 요약바에 그룹별 적합률과 총점이 실시간 표시됩니다.'},
   en:{t:'② Home Layout',b:'Home has three tabs:<ul><li><b>Audit Items</b> — formal Labor/Ethics/Supply-chain checks (A·AM·D·DM·E)</li><li><b>Documents</b> — required documents per group</li><li><b>New Supplier</b> — new-registration checklist (19 items)</li></ul>The summary bar shows per-group conformance and total score in real time.'}},
  {ko:{t:'③ 항목 점검 — 3단계 진행',b:'각 점검 항목은 세 단계로 진행합니다:<ol><li><b>경영진 면담</b> (Management)</li><li><b>기록 검토</b> (Document Review)</li><li><b>근로자 면담</b> (Worker Interview)</li></ol>각 질문에 <b>예 / 아니오 / N/A</b>로 답합니다. 위반에 해당하면 심각도(Priority·Major·Minor)가 자동 반영됩니다. 하단 <b>다음</b>으로 단계를 이동합니다.'},
   en:{t:'③ Assess an Item — 3 Steps',b:'Each item is assessed in three steps:<ol><li><b>Management interview</b></li><li><b>Document review</b></li><li><b>Worker interview</b></li></ol>Answer each question <b>Yes / No / N/A</b>. Any violation applies its severity (Priority·Major·Minor) automatically. Use <b>Next</b> at the bottom to move between steps.'}},
  {ko:{t:'④ 특수 입력 — 수수료·근로시간·휴무',b:'일부 항목은 수치 매트릭스를 입력합니다:<ul><li><b>A1.1</b> 채용 수수료 — 부담 근로자 %, 월급 대비 수수료 %</li><li><b>A3.1</b> 근로시간 — 주당 최대 시간, 초과 주 비율 %</li><li><b>A3.2</b> 연속근로일 — 최대 연속일, 초과 근로자 %</li></ul>입력값에 따라 등급이 자동 계산됩니다.'},
   en:{t:'④ Special Inputs — Fees, Hours, Rest Days',b:'Some items need a numeric matrix:<ul><li><b>A1.1</b> Recruitment fees — % of workers charged, fee as % of monthly wage</li><li><b>A3.1</b> Working hours — max hrs/week, % of weeks over</li><li><b>A3.2</b> Consecutive days — max consecutive days, % of workers</li></ul>The grade is computed automatically from these values.'}},
  {ko:{t:'⑤ 자동 등급 산정 규칙',b:'각 항목은 세 단계 응답 중 <b>가장 심각한 위반</b>으로 등급이 정해집니다: Conformance → Minor → Major → Priority 순으로 심각.<br><br>신규협력사 탭 총점: <b>85점↑ PASS / 70~84 CONDITIONAL / 그 외 FAIL</b>. 필수항목 Priority 시 즉시 FAIL, 근로시간(A0301) Priority 시 CONDITIONAL.'},
   en:{t:'⑤ Auto-Grading Rules',b:'Each item takes the <b>most severe violation</b> among its three steps: Conformance → Minor → Major → Priority.<br><br>New-Supplier total: <b>≥85 PASS / 70–84 CONDITIONAL / else FAIL</b>. A Priority on a mandatory item = immediate FAIL; a Priority on Working Hours (A0301) = CONDITIONAL.'}},
  {ko:{t:'⑥ 사진·메모 첨부',b:'각 질문에 📷로 증거 사진을, 메모 아이콘으로 코멘트를 남길 수 있습니다. 사진·메모는 세션에 저장되고 Excel 내보내기에도 반영됩니다.'},
   en:{t:'⑥ Attach Photos & Notes',b:'On each question you can attach evidence photos (📷) and leave notes. Both are saved to the session and included in the Excel export.'}},
  {ko:{t:'⑦ 시정조치계획(CAP) 작성',b:'위반(Conformance 아님) 항목은 홈의 <b>📋 시정조치계획(CAP)</b>에 자동 수집됩니다. 각 건에 근본원인·시정조치·담당·목표일·상태를 기록하고 <b>내보내기</b>로 저장합니다.'},
   en:{t:'⑦ Corrective Action Plan (CAP)',b:'Non-conformant items are collected automatically under <b>📋 Corrective Action Plan (CAP)</b> on home. Record root cause, action, owner, target date and status for each, then <b>Export</b>.'}},
  {ko:{t:'⑧ 마무리 — 공유 & 내보내기',b:'점검이 끝나면 <b>Excel 내보내기</b>로 결과를, <b>CAP 내보내기</b>로 시정계획을 저장합니다. 협력사 사전점검 공유(기능 안내 02~03)는 방문 전에 활용하세요.'},
   en:{t:'⑧ Wrap Up — Share & Export',b:'When done, save results via <b>Export to Excel</b> and the plan via <b>CAP Export</b>. Use supplier pre-check sharing (Features 02–03) before your visit.'}},
];
function manL(){return S.manLang||(S.lang==='ko'?'ko':'en');}
function screenManual(){
  const L=manL(),U=MAN_UI[L];
  if(!S.manTab)S.manTab='feat';
  const back=S.vendorCode?"S.screen='home';render();window.scrollTo(0,0)":"S.screen='landing';render();window.scrollTo(0,0)";
  const langTog=`<div class="man-lang">
    <button class="${L==='ko'?'on':''}" onclick="S.manLang='ko';render()">한국어</button>
    <button class="${L==='en'?'on':''}" onclick="S.manLang='en';render()">EN</button></div>`;
  const tabs=`<div class="man-tabs">
    <button class="${S.manTab==='feat'?'on':''}" onclick="S.manTab='feat';render();window.scrollTo(0,0)">${U.tabFeat}</button>
    <button class="${S.manTab==='proc'?'on':''}" onclick="S.manTab='proc';render();window.scrollTo(0,0)">${U.tabProc}</button></div>`;
  let bodyHtml;
  if(S.manTab==='feat'){
    bodyHtml=`<p class="man-intro">${U.intro}</p>`+MANUAL_SECTIONS.map(s=>{const c=s[L];return`
      <div class="man-sec">
        <div class="man-h"><span class="man-num">${s.n}</span><span class="man-t">${c.title}</span></div>
        <p class="man-desc">${c.desc}</p>
        <img class="man-img" src="${s.img}" alt="${c.title}" loading="lazy" onclick="viewManualImg('${s.img}')">
        ${c.steps&&c.steps.length?`<ul class="man-steps">${c.steps.map(x=>`<li>${x}</li>`).join('')}</ul>`:''}
      </div>`;}).join('');
  }else{
    bodyHtml=`<p class="man-intro">${U.procIntro}</p>`+PROCESS_SECTIONS.map(p=>{const c=p[L];return`
      <details class="man-acc"><summary>${c.t}</summary><div class="man-acc-b">${c.b}</div></details>`;}).join('');
  }
  return`${nav(U.title,back,U.close,back)}
  <div class="content man-wrap">
    ${langTog}
    ${tabs}
    ${bodyHtml}
    <div class="man-foot">${U.foot}</div>
  </div>`;
}
function viewManualImg(src){
  document.getElementById('photoViewerImg').src=src;
  document.getElementById('photoViewer').style.display='flex';
}
