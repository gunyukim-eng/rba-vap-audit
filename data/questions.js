// ── 데이터: 점검 문항 + 위반 진술문 매핑 (Q/QFIND) ── app.js에서 분리됨
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
    {id:'W6',text:'Do you currently have your passport/ID in your own possession?',hint:'If "No" → flag for AL103 (Document Retention) as well. Ask: "Where are they being kept and can you get them back right now if you wanted to?"',sev:'a13f',na:true},
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

const QFIND={"a11_mgmt":{"M1":"Overtime is not strictly voluntary; workers face penalties for refusing.","M2":"Voluntary resignation is not guaranteed (notice over 1 month or penalty over 60% of one month's base salary).","M3":"Labor-agent contracts do not prohibit passing recruitment fees to workers.","M4":"Workers lack unrestricted access to toilets, drinking water, or medical facilities.","M5":"Dormitory residents cannot freely leave the facility outside working hours (curfew in place).","M6":"Movement-restricting systems are in place (forced locks, guard-controlled exits, or toilet passes).","M7":"No documented procedure to reimburse discovered prohibited fees within 90 days."},"a11_doc":{"D1":"HR, attendance, or wage records show indicators of non-voluntary labor.","D2":"Overtime records do not confirm voluntary consent for extra hours.","D3":"Employment contract sets a resignation notice period longer than 1 month.","D4":"Contract penalty for leaving without notice exceeds 60% of one month's base salary.","D5":"Permitted fees are not documented or disclosed to workers in writing.","D6":"Records show prohibited recruitment/placement fees in payroll or accounting.","D7":"Facility access/exit logs show evidence of movement restrictions.","D8":"Personal loan terms exceed limits (repayment over 10% of monthly base pay, interest charged, or over 6 months).","D9":"Education loan terms exceed limits (repayment over 10% of monthly base pay, interest charged, or over 12 months).","D10":"Worker loans are not interest-free.","D11":"Dormitory access records do not confirm workers can move freely during off hours."},"a11_worker":{"W1":"Workers paid fees (recruitment, placement, or deposits) to get or keep the job.","W2":"Workers cannot refuse overtime without retaliation or negative consequence.","W3":"Workers do not feel free to resign whenever they choose.","W4":"Workers cannot freely use toilets or access drinking water.","W5":"Workers cannot leave the dormitory freely outside working hours.","W6":"Workers do not hold their own passport/ID (documents retained by the facility)."},"a12_mgmt":{"M1":"Employment contracts are not provided before the first day (or before departure for migrant workers).","M2":"Contracts are not written in a language the worker can read and understand.","M3":"No formal process to verbally explain key terms (wages, hours, resignation) to new hires.","M4":"Migrant workers' contract terms were changed unfavorably after arrival."},"a12_doc":{"D1":"Employment contracts are not in the worker's native or clearly understood language.","D2":"Contracts were not signed before the employment start date.","D3":"Records show migrant workers' contract terms were changed unfavorably after arrival."},"a12_worker":{"W1":"Workers did not receive or understand their contract before the first day.","W2":"Key conditions (pay, hours, resignation) were not verbally explained to workers.","W3":"Migrant workers were offered worse conditions after arrival than in their original contract."},"a13_mgmt":{"M1":"No policy against retaining original worker identity documents; originals are held.","M2":"Where documents are legally held, workers cannot access them within 12 hours of request.","M3":"A fee is charged for safekeeping worker documents."},"a13_doc":{"D1":"Original identity documents are found in personnel files (not only copies).","D2":"Records show fees charged to workers for document custody.","D3":"Where legal retention applies, custody receipts (reason and duration) are not issued to workers."},"a13_worker":{"W1":"Workers do not hold their passport/ID and cannot access it immediately.","W2":"Workers were charged a fee for the facility to store their personal documents."},"a21_mgmt":{"M1":"No documented minimum hiring-age policy meeting local law and the 15-year minimum.","M2":"Age verification (government ID check) is not performed for every new hire.","M3":"No remediation plan for an underage worker that maintains income and supports return to schooling."},"a21_doc":{"D1":"Personnel files do not confirm every worker meets the minimum age.","D2":"Employee roster shows workers below the legal or company minimum age.","D3":"Age-verification documents are not retained in personnel files."},"a21_worker":{"W1":"Workers were not asked to provide proof of age when hired.","W2":"Workers appear to be below the legal working age."},"a22_mgmt":{"M1":"Workers under 18 are not all identified or restricted to non-hazardous roles.","M2":"Workers under 18 perform night work or overtime.","M3":"Health checks for young workers are not conducted where required by law."},"a22_doc":{"D1":"Files/assignments do not confirm all under-18 workers are in non-hazardous roles.","D2":"Working-time records do not confirm under-18 workers avoid night shifts and overtime.","D3":"Health check records for young workers are not maintained where required."},"a22_worker":{"W1":"A worker under 18 performs hazardous tasks, night shifts, or overtime.","W2":"Workers under 18 are performing hazardous tasks, night work, or overtime."},"a23_mgmt":{"M1":"Student workers/interns/apprentices are assigned tasks unrelated to their study or vocational learning.","M2":"Tri-partite agreements (student, school, facility) are not in place where required.","M3":"Learners are not paid at least minimum wage (or a legally permitted rate)."},"a23_doc":{"D1":"Learner records lack learning objectives, work assignments, or progress evaluations.","D2":"Labor agencies are used to recruit or manage student workers or interns.","D3":"Learner working hours are not recorded or conflict with school/training schedules."},"a23_worker":{"W1":"Learner's assigned tasks are not related to their study or vocational training.","W2":"Learner's working hours conflict with school attendance or training."},"a31_mgmt":{"M1":"Weekly working hours are not tracked or exceed 60 hours.","M2":"Overtime is not strictly voluntary; workers face penalties for refusing.","M3":"Workers under 18 perform overtime."},"a31_doc":{"D1":"Time records show workers exceeding 60 hours/week.","D2":"Time records are inaccurate or show signs of falsification or manipulation.","D3":"Records do not confirm under-18 workers perform no overtime."},"a31_worker":{"W1":"Workers are required or pressured to work more than 60 hours a week.","W2":"Workers cannot refuse overtime without negative consequences.","W3":"Workers were asked to sign time records that do not reflect their actual hours."},"a32_mgmt":{"M1":"Workers do not receive at least one full day off per seven days.","M2":"Workers worked more than 6 consecutive days."},"a32_doc":{"D1":"Time records show workers working more than 6 consecutive days.","D2":"Exceptions to rest-day rules are not documented as emergency or unusual situations."},"a32_worker":{"W1":"Workers do not receive at least one full day off every week.","W2":"Workers worked more than 6 days in a row without a day off."},"a33_mgmt":{"M1":"Workers do not receive the legally required meal break(s) per shift.","M2":"Workers cannot take sick leave (with a valid certificate) without job loss or financial penalty.","M3":"Maternity/paternity leave is not provided in full compliance with local law."},"a33_doc":{"D1":"Leave records do not accurately reflect holidays, sick leave, or maternity/paternity leave.","D2":"Leave records are inconsistent with medical certificates or evidence of actual absences."},"a33_worker":{"W1":"Workers do not receive a proper meal break during their shift.","W2":"Workers cannot take sick leave without losing their job or facing a financial penalty.","W3":"Workers do not know their holiday, annual leave, or sick leave entitlements."},"a41_mgmt":{"M1":"Workers are not all paid at least the agreed/minimum wage, or equal pay for equal work is not applied.","M2":"Overtime is not compensated at at least 125% of the regular hourly rate.","M3":"Resigned/terminated workers are not paid outstanding wages within one month."},"a41_doc":{"D1":"Payroll records show workers paid below the agreed/minimum wage.","D2":"Records show overtime paid below 125% of regular pay.","D3":"Wages are not paid directly, or unauthorized deductions (discipline/PPE) are made."},"a41_worker":{"W1":"Workers are not paid minimum wage for all hours, or overtime is not paid at a higher rate.","W2":"Wages are not paid on time (unexplained delays).","W3":"Wages were deducted as a disciplinary measure or for PPE."},"a42_mgmt":{"M1":"Workers are not given a pay statement showing regular/OT hours, rates, and deductions.","M2":"Statutory insurance contributions are not itemized on pay statements."},"a42_doc":{"D1":"Payslip records do not accurately show hours, rates, and itemized deductions.","D2":"Payroll records include unauthorized or disciplinary deductions."},"a42_worker":{"W1":"Workers do not receive a payslip showing hours, rates, and deductions each pay period.","W2":"Workers cannot understand the information on their payslip."},"a43_mgmt":{"M1":"Statutory deductions (taxes, social insurance) are not calculated correctly.","M2":"Statutory deductions are not submitted to government agencies within the legal timeframe."},"a43_doc":{"D1":"Records do not confirm employer statutory contributions are correctly calculated per worker.","D2":"Payment records do not confirm on-time submission of contributions to authorities."},"a43_worker":{"W1":"Deductions were made from wages that workers did not agree to or cannot explain."},"a51_mgmt":{"M1":"No clear anti-discrimination/anti-harassment policy covering hiring, pay, promotion, training, and termination.","M2":"Workers are subjected to pregnancy, virginity, or other discriminatory medical tests as a condition of employment.","M3":"No functioning, accessible grievance mechanism for discrimination or harassment."},"a51_doc":{"D1":"HR records show evidence of discrimination by protected characteristics.","D2":"Grievance records show unresolved harassment or inhumane treatment cases.","D3":"Discriminatory conditions appear in job postings, application forms, or contracts."},"a51_worker":{"W1":"Workers experienced or witnessed discrimination, harassment, or inhumane treatment.","W2":"Workers are treated differently based on race, gender, religion, nationality, or other characteristics.","W3":"Workers do not know how to report harassment or discrimination."},"a52_mgmt":{"M1":"Disciplinary actions are not formally documented or reviewed by management.","M2":"Workers are not informed of disciplinary reasons or given a chance to respond."},"a52_doc":{"D1":"Disciplinary records lack the worker's signature or written acknowledgment.","D2":"Records show inhumane, discriminatory, or harassing disciplinary measures (physical punishment, public shaming, verbal abuse)."},"a52_worker":{"W1":"Workers were not told the reason for disciplinary action or given a chance to respond.","W2":"Workers experienced or witnessed disciplinary measures involving physical punishment, public shaming, or verbal abuse."},"a53_mgmt":{"M1":"Reasonable religious accommodation requests are not considered or documented.","M2":"Refused religious accommodations are not communicated in writing with a reason in a timely manner."},"a53_doc":{"D1":"Records of religious accommodation requests (decision and reason) are not maintained.","D2":"Requested prayer or religious spaces are not adequately provided."},"a53_worker":{"W1":"Religious accommodation requests were not handled respectfully or in a reasonable time."},"a54_mgmt":{"M1":"Reasonable disability accommodation requests are not considered, documented, or implemented where possible.","M2":"Disability assessment and effectiveness evaluation reports are not maintained."},"a54_doc":{"D1":"Disability accommodation request records (decision and reasoning) are not available.","D2":"Where accommodations are ineffective, corrective action plans are not documented."},"a54_worker":{"W1":"Disability accommodation requests were not addressed appropriately or in a timely manner."},"a61_mgmt":{"M1":"Workers are not free to form, join, or refrain from joining a union without management interference.","M2":"Management is not neutral on union activities (goes beyond providing meeting space or materials)."},"a61_doc":{"D1":"Records show violence, threats, or retaliation related to union activities or freedom of association.","D2":"Payroll records show union representatives/members are not paid the same as comparable workers.","D3":"Records show restrictions on freedom-of-association communications among workers."},"a61_worker":{"W1":"Workers are threatened, penalized, or retaliated against for joining or organizing a union.","W2":"Workers do not feel free to join or not join a worker representative body without negative consequence."},"a62_mgmt":{"M1":"Management does not engage in good-faith negotiations with the worker representative body when requested.","M2":"Collective Bargaining Agreement terms are not fully implemented."},"a62_doc":{"D1":"Records show management refused negotiations requested by the worker representative body.","D2":"Where a CBA exists, records do not confirm all terms are implemented."},"a62_worker":{"W1":"Management refused to negotiate with elected worker representatives.","W2":"Workers do not know their collective bargaining rights."},"a63_mgmt":{"M1":"Workers are not free to peacefully assemble or express non-violent concerns."},"a63_doc":{"D1":"Records or policies restrict peaceful worker assembly or group representation."},"a63_worker":{"W1":"Workers cannot peacefully assemble or form a group at work without fear of reprisal."},"d11_mgmt":{"M1":"No documented business integrity policy covering corruption, bribery, and improper advantages."},"d11_doc":{"D1":"Business integrity policy is not documented, approved, or communicated."},"d11_worker":{"W1":"Workers are unaware of business integrity expectations or how to report concerns."},"d12_mgmt":{"M1":"No process to ensure disclosure of information is accurate and complete."},"d12_doc":{"D1":"Disclosure controls/records do not show information is reviewed for accuracy before release."},"d12_worker":{"W1":"Workers do not understand how business information is disclosed or who is responsible."},"d13_mgmt":{"M1":"No policy or procedure to protect intellectual property and confidential information."},"d13_doc":{"D1":"IP protection measures are not documented or enforced."},"d13_worker":{"W1":"Workers are unaware of their responsibility to protect confidential/proprietary information."},"d14_mgmt":{"M1":"No fair-business/competition policy prohibiting anti-competitive practices."},"d14_doc":{"D1":"Records do not show fair business practices or compliance with competition laws."},"d14_worker":{"W1":"Workers do not understand expectations on fair business conduct and honest advertising."},"d15_mgmt":{"M1":"No policy to protect identity or ensure non-retaliation for reporting concerns."},"d15_doc":{"D1":"Non-retaliation and identity-protection measures are not documented or communicated."},"d15_worker":{"W1":"Workers do not feel safe reporting concerns due to fear of retaliation."},"d16_mgmt":{"M1":"No privacy policy covering lawful collection, use, and protection of personal data."},"d16_doc":{"D1":"Privacy records do not show personal data is handled per policy and applicable law."},"d16_worker":{"W1":"Workers are unaware of how their personal information is protected."},"dm11_mgmt":{"M1":"No formal ethics risk assessment process to identify and evaluate ethics risks."},"dm11_doc":{"D1":"Ethics risk assessment records are not documented, current, or periodically reviewed."},"dm11_worker":{"W1":"Workers do not know how ethics risks are assessed and managed."},"dm12_mgmt":{"M1":"No ethics control processes to prevent and detect misconduct."},"dm12_doc":{"D1":"Ethics control process documents are unavailable or not followed."},"dm12_worker":{"W1":"Workers do not understand the controls to prevent and report ethics issues."},"dm13_mgmt":{"M1":"Ethics expectations are not clearly communicated to workers and suppliers."},"dm13_doc":{"D1":"Ethics communication materials are not documented or distributed."},"dm13_worker":{"W1":"Workers have not received information on ethics policies or reporting channels."},"dm14_mgmt":{"M1":"Senior management does not regularly review ethics performance and improvement actions."},"dm14_doc":{"D1":"Ethics review records lack findings or agreed follow-up actions."},"dm14_worker":{"W1":"Workers do not believe the facility follows through on ethics commitments."},"dm21_mgmt":{"M1":"Ethics responsibilities and authorities are not clearly defined or assigned across employee levels."},"dm21_doc":{"D1":"Ethics roles and responsibilities are not documented or enforced."},"dm21_worker":{"W1":"Workers do not know who is responsible for ethics and integrity issues."},"dm22_mgmt":{"M1":"Ethics policies and control processes are not implemented to prevent misconduct or protect confidential information."},"dm22_doc":{"D1":"Ethics policy documents or control procedures are unavailable or not followed."},"dm22_worker":{"W1":"Workers do not understand ethics policies or the controls enforcing them."},"dm23_mgmt":{"M1":"No ethics training process for managers and workers on policies, reporting, and conduct."},"dm23_doc":{"D1":"Ethics training materials or attendance records are not maintained."},"dm23_worker":{"W1":"Workers have not received training on ethics expectations or how to report concerns."},"dm31_mgmt":{"M1":"No two-way ethics communication process for workers and suppliers to give feedback."},"dm31_doc":{"D1":"Records of ethics communication and feedback activities (with follow-up) are not kept."},"dm31_worker":{"W1":"Workers cannot give input or raise ethics concerns without being ignored."},"dm32_mgmt":{"M1":"No anonymous ethics grievance reporting process with protection against retaliation."},"dm32_doc":{"D1":"Anonymous ethics grievance channels are not documented or accessible."},"dm32_worker":{"W1":"Workers do not know how to report an ethics concern anonymously."},"dm41_mgmt":{"M1":"Management does not regularly review ethics performance and improvement actions."},"dm41_doc":{"D1":"Ethics management review records lack findings or corrective actions."},"dm41_worker":{"W1":"Workers do not see ethics issues taken seriously by management."},"dm42_mgmt":{"M1":"No regular ethics self-audit process to assess compliance and identify improvements."},"dm42_doc":{"D1":"Ethics self-audit reports and action plans are not documented or reviewed."},"dm42_worker":{"W1":"Workers are unaware of internal ethics reviews or resulting improvements."},"dm43_mgmt":{"M1":"No corrective action process to address and close ethics non-conformances."},"dm43_doc":{"D1":"Ethics corrective action plans are not recorded or tracked to closure."},"dm43_worker":{"W1":"Workers believe ethics problems are ignored rather than corrected."},"e11_mgmt":{"M1":"No public commitment to supply chain responsibility and RBA code compliance."},"e11_doc":{"D1":"Supply chain commitment is not documented or available to stakeholders."},"e11_worker":{"W1":"Workers are unaware of the company's responsible supply chain commitment."},"e12_mgmt":{"M1":"Materials restrictions and prohibited substances are not controlled through documented processes."},"e12_doc":{"D1":"Restricted materials and hazardous substance controls are not documented or enforced."},"e12_worker":{"W1":"Workers are unaware of material restrictions or hazardous substance controls affecting their work."},"e13_mgmt":{"M1":"No process for responsible sourcing of minerals and related reporting."},"e13_doc":{"D1":"Responsible minerals sourcing records are not maintained or reviewed."},"e13_worker":{"W1":"Workers are unaware of responsible minerals sourcing requirements."},"e14_mgmt":{"M1":"Suppliers are not required to comply with the RBA code or subject to due diligence."},"e14_doc":{"D1":"Supplier records do not demonstrate verification of supplier responsibility and RBA compliance."},"e14_worker":{"W1":"Workers are unaware that suppliers must meet the company's RBA requirements."},"e15_mgmt":{"M1":"Next-tier major suppliers are not identified or risk-assessed using documented criteria."},"e15_doc":{"D1":"Records do not show identification of next-tier major suppliers or the selection basis."},"e15_worker":{"W1":"Workers do not know whether key suppliers and contractors are identified and monitored."},"e16_mgmt":{"M1":"No process to ensure next-tier major suppliers implement the RBA code."},"e16_doc":{"D1":"Supplier management records do not show suppliers are required to implement the RBA code."},"e16_worker":{"W1":"Workers do not understand that suppliers must comply with labor and ethics standards."},"e17_mgmt":{"M1":"Supplier RBA performance is not monitored or continuously improved with documented follow-up."},"e17_doc":{"D1":"Supplier performance monitoring records are not available or reviewed."},"e17_worker":{"W1":"Workers do not know the company tracks supplier performance or follows up on issues."},"am11_mgmt":{"M1":"No quarterly process to identify, track, and update compliance with applicable labor laws and customer requirements.","M2":"No documented system to track and renew permits, certifications, and licenses before expiry."},"am11_doc":{"D1":"No accurate, current compliance register of applicable labor laws and regulations.","D2":"Compliance calendar reminders or scheduled review tasks are not documented."},"am12_mgmt":{"M1":"No formal process to identify and assess significant labor risks for all worker groups.","M2":"Risk assessment is not updated when significant changes occur."},"am12_doc":{"D1":"No up-to-date risk assessment covering all operations and required stakeholder groups.","D2":"Risk assessment omits required groups (direct, indirect/contract, migrant, young workers, or on-site contractors)."},"am21_mgmt":{"M1":"No senior-level representative assigned responsibility for labor compliance and RBA conformance.","M2":"Labor compliance responsibilities are not defined at every relevant level."},"am21_doc":{"D1":"Job descriptions do not assign labor compliance responsibilities at each relevant level.","D2":"Emergency labor compliance responsibilities are not documented."},"am21_worker":{"W1":"Workers do not know who is responsible for labor rights and working conditions."},"am22_mgmt":{"M1":"Written labor policies do not cover all required RBA Code areas.","M2":"Labor policies lack documented implementation (control) processes.","M3":"Labor agents and contractors are not contractually required to comply with labor policies."},"am22_doc":{"D1":"Written labor policies do not address all required RBA Code elements.","D2":"Risk control records do not show the effectiveness of controls is regularly evaluated.","D3":"Minimum on-site records are not maintained (wages, hours, age verification, grievances, training, self-audits)."},"am22_worker":{"W1":"Workers have not been given or shown company policies on their rights."},"am23_mgmt":{"M1":"No structured training program covering labor policies and RBA requirements for managers and workers.","M2":"New workers do not receive orientation on labor rights and policies within 30 days."},"am23_doc":{"D1":"Training records do not show workers and managers completed required labor compliance training.","D2":"Training records lack evidence of training effectiveness."},"am23_worker":{"W1":"Workers did not receive training or orientation on labor rights, policies, and reporting when hired."},"am31_mgmt":{"M1":"No ongoing two-way communication process for workers to give feedback on conditions and practices.","M2":"External stakeholders are not included in relevant labor-related communications."},"am31_doc":{"D1":"No records of worker feedback sessions or surveys showing feedback was acted upon.","D2":"Records do not confirm worker feedback was received, reviewed, and responded to in a timely manner."},"am31_worker":{"W1":"Workers lack accessible ways to give feedback on working conditions."},"am32_mgmt":{"M1":"No anonymous grievance channel usable without fear of retaliation.","M2":"Grievances are not investigated promptly or corrective actions communicated back."},"am32_doc":{"D1":"Grievance records do not show reports received, assigned, resolved, and communicated back.","D2":"Grievances have been open for more than 3 months without a corrective action plan."},"am32_worker":{"W1":"Workers do not know how to report a concern or grievance anonymously.","W2":"Reported concerns were not investigated or resolved in a reasonable time."},"am41_mgmt":{"M1":"Senior management does not conduct an annual review of labor management system performance against targets.","M2":"No formal labor performance indicators, objectives, and targets with timelines and owners."},"am41_doc":{"D1":"No management review records showing labor performance was reviewed at the senior level.","D2":"No progress-tracking records for labor objectives and targets."},"am42_mgmt":{"M1":"No periodic self-audit process to assess conformance with the RBA Code and labor laws.","M2":"Self-audit findings are not reviewed by senior management or used to drive corrective actions."},"am42_doc":{"D1":"Self-audit reports do not cover all areas, policies, physical conditions, records, and interviews."},"am43_mgmt":{"M1":"No corrective action process with root cause analysis, owners, and closure verification for labor non-conformances."},"am43_doc":{"D1":"Corrective action records are not documented, tracked, or verified as closed."},"am43_worker":{"W1":"Workers do not believe corrective actions for labor issues are completed or monitored."}};

