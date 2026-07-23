

function docRefBox(id){
  const key=ITEM_DOC_MAP[id];
  const ko=S.lang==='ko';
  const docs=(ko?DOC_LIST_KO:DOC_LIST)[key];
  if(!docs||!docs.length)return'';
  const label=ko?`📋 필요 서류 목록 (${key}) — ${docs.length}건`:`📋 Required Documents (${key}) — ${docs.length} items`;
  return`<details class="docref">
    <summary>${label} <span style="font-size:10px">▼</span></summary>
    <div class="docref-body">${docs.map(d=>`<div class="docref-item">${d}</div>`).join('')}</div>
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




function t(k){return(T[S.lang]||T.en)[k]||(T.en)[k]||k}
function qt(item,type,id){
  if(S.lang==='en')return null;
  return(QT[S.lang]||{})[`${item}_${type}_${id}`]||null;
}
function qh(item,type,id){
  if(S.lang==='en')return null;
  return(typeof QH!=='undefined'?(QH[S.lang]||{}):{})[`${item}_${type}_${id}`]||null;
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
  aiCalls:0,   // 이 점검에서 사용한 AI 호출 수 (점검당 비용 상한용)
  notes:Object.fromEntries(Object.keys(ITEMS).map(k=>[k,{mgmt:{},doc:{},worker:{}}])),
  photos:Object.fromEntries(Object.keys(ITEMS).map(k=>[k,{mgmt:{},doc:{},worker:{}}])),
  noteOpen:{},
  cap:{},
  capOpen:{},
  nsupAns:{},
  nsupNA:{},
  nsupOpen:{},
  nsupAI:{},
  nsupItem:null,
  auditType:null,
  aiFindings:{},
  itemAI:{},
  itemSummary:{},
  lawViol:{},
  supplierName:'',
  subsidiary:'',
  gbm:'',
  shareCode:'',
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
  // AI 판정(제안 적용) · 국가 법령 위반 → 최종 판정에 반영
  const _af=(S.aiFindings||{})[id]; if(_af&&_af.grade&&_af.grade!=='conformance'&&LVL.includes(_af.grade))parts.push(_af.grade);
  const _lv=(S.lawViol||{})[id]; if(_lv&&_lv.sev&&LVL.includes(_lv.sev))parts.push(_lv.sev);
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
  }).map(q=>({text:(QFIND[qKey]&&QFIND[qKey][q.id])||q.text,sev:q.sev}));
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
    ${(()=>{const h=qh(id,type,q.id)||q.hint;return h?`<div class="qhint">${h}</div>`:'';})()}
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
  const lp=`<div style="display:flex;gap:5px;margin-bottom:16px">
    ${['en','ko','zh'].map(l=>`<button onclick="S.lang='${l}';render()" style="padding:5px 12px;border-radius:var(--pill);border:1.5px solid ${S.lang===l?'var(--blue)':'var(--line)'};background:${S.lang===l?'var(--blue)':'transparent'};color:${S.lang===l?'#fff':'var(--muted)'};font-size:13px;font-weight:700;cursor:pointer;font-family:inherit">${{en:'EN',ko:'한국어',zh:'中文'}[l]}</button>`).join('')}
  </div>`;
  return`${nav('On-Site Audit','S.screen=\'pick\';render()')}
  <div class="content">
    <span class="stag">${t('setup')}</span>
    <h2 class="stitle">${S.lang==='ko'?'협력사 정보':S.lang==='zh'?'供应商信息':'Supplier Information'}</h2>
    <p class="ssub">${S.lang==='ko'?'점검할 협력사 정보를 입력하세요. 홈 화면과 Excel 보고서에 표시됩니다.':S.lang==='zh'?'输入本次检查的供应商信息。将显示在主页和 Excel 报告中。':'Enter the supplier details for this audit. Shown on home and in the Excel report.'}</p>
    ${lp}
    <div class="sfield">
      <label class="slbl" style="display:flex;align-items:center;gap:4px">
        Vendor Code <span style="color:var(--muted);font-size:12px;font-weight:500">${S.lang==='ko'?'(선택)':'(optional)'}</span>
      </label>
      <input class="sinput" type="text" placeholder="e.g. BMSS, VND-001"
        value="${S.vendorCode}" oninput="S.vendorCode=this.value.trim().toUpperCase()"
        style="${!S.vendorCode?'border-color:var(--line)':'border-color:var(--blue)'}">
      <div class="shint">${S.lang==='ko'?'공급업체 식별 코드 — 같은 코드로 재접속 시 자동 불러오기. 비워두면 자동으로 코드가 부여됩니다.':'Identifies this audit session — reconnecting with the same code resumes your progress. Leave blank to auto-generate one.'}</div>
    </div>
    <div class="sfield"><label class="slbl">${S.lang==='ko'?'협력사명 (Supplier Name)':'Supplier Name'}</label>
      <input class="sinput" type="text" placeholder="e.g. ABC Electronics Co., Ltd." value="${S.supplierName||''}" oninput="S.supplierName=this.value">
    </div>
    <div class="sfield"><label class="slbl">${S.lang==='ko'?'법인 (Subsidiary)':'Subsidiary'}</label>
      <input class="sinput" type="text" placeholder="e.g. SEV, SEHC, SDV" value="${S.subsidiary||''}" oninput="S.subsidiary=this.value">
    </div>
    <div class="sfield"><label class="slbl">${S.lang==='ko'?'사업부 (GBM)':'GBM'}</label>
      <input class="sinput" type="text" placeholder="e.g. MX, VD, DA" value="${S.gbm||''}" oninput="S.gbm=this.value">
    </div>
    <div class="sfield"><label class="slbl">${t('country')}</label>
      <input class="sinput" type="text" placeholder="e.g. Vietnam, China, Malaysia…" value="${S.country}" oninput="S.country=this.value">
    </div>
    <div class="sfield"><label class="slbl" style="display:flex;align-items:center;gap:4px">${S.lang==='ko'?'팀 공유 코드':S.lang==='zh'?'团队共享代码':'Team Share Code'} <span style="color:var(--muted);font-size:12px;font-weight:500">${S.lang==='ko'?'(선택)':S.lang==='zh'?'(可选)':'(optional)'}</span></label>
      <input class="sinput" type="text" placeholder="${S.lang==='ko'?'예: SEHC, SIEL-C':'e.g. SEHC, SIEL-C'}" value="${S.shareCode||''}" oninput="S.shareCode=this.value.trim().toUpperCase().replace(/[^A-Z0-9_-]/g,'')" style="${S.shareCode?'border-color:var(--C)':''}">
      <div class="shint">${S.lang==='ko'?'이 코드를 넣으면 점검 기록이 서버에 백업되고, 랜딩 화면에서 같은 코드로 불러올 수 있습니다. 비워두면 이 기기에만 저장됩니다. (영문·숫자·- _)':S.lang==='zh'?'输入代码后，本次检查会备份到服务器，可在首页用同一代码调出。留空则仅保存在本机。':'Set a code to back this audit up to the server and reload it from the landing screen with the same code. Leave blank to keep it on this device only.'}</div>
    </div>
  </div>
  <div class="bot"><button class="bp" onclick="startAudit()">${t('start')}</button></div>`;
}

// ─── NEW-SUPPLIER (신규협력사) CHECKLIST ───
// Source: 신규 등록 평가 체크리스트 — 19 items, total 100 pts

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

    <div style="margin-bottom:12px">
      <button onclick="aiJudgeOpen('${id}')" style="width:100%;padding:10px;border-radius:var(--pill);border:1.5px dashed var(--blue);background:#f6faff;color:var(--blue);font-size:12.5px;font-weight:700;font-family:inherit;cursor:pointer">${S.lang==='en'?'🤖 AI Auto-Judge':'🤖 AI 자동판정'}</button>
    </div>

    ${aiSuggCard(id,it)}

    ${qs.map(q=>nsupQcard(id,q,isNA)).join('')}

    <div class="nsup-card" style="display:flex;align-items:center;justify-content:space-between;margin-top:14px">
      <div class="nsup-slbl">이 항목 판정</div>
      <div>${resHtml}</div>
    </div>
  </div>
  <div class="bot"><button class="bs" onclick="nsupHome()">← 목록</button><button class="bp" onclick="nsupHome()">완료 →</button></div>`;
}

// CAP(시정조치계획) 버튼 표시 여부. 화면·로직은 유지하고 홈 버튼만 숨김.
// 나중에 다시 쓰려면 true 로 변경. (screenCAP 등 기능은 그대로 남아 있음)
const SHOW_CAP_BTN=false;
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

  const isNsup=S.auditType==='nsup';
  const heroTitle=isNsup?(S.lang==='ko'?'신규협력사 점검':'New Supplier Check'):t('laborAudit');
  return`${nav(S.vendorCode?`On-Site Audit · ${S.vendorCode}`:'On-Site Audit','S.screen=\'pick\';render()',t('setupBtn'),'S.screen=\'setup\';render()')}
  <div class="hhero">
    <div style="display:flex;justify-content:space-between;align-items:flex-start">
      <div><div class="htitle">${heroTitle}</div>
      <div class="hsub">${isNsup?(S.lang==='ko'?'항목을 눌러 예/아니오로 답하세요':'Tap an item and answer Yes/No'):t('selectItem')}</div>
      ${S.supplierName?`<div class="hcountry">🏢 ${S.supplierName}${S.subsidiary||S.gbm?` · ${[S.subsidiary,S.gbm].filter(Boolean).join(' / ')}`:''}</div>`:''}
      ${S.country?`<div class="hcountry">📍 ${S.country}</div>`:''}
      ${S.shareCode?`<div class="hcountry">☁ ${S.lang==='ko'?'공유코드':'Share'}: ${aiEsc(S.shareCode)}${_teamStatus==='saving'?' ⟳':_teamStatus==='ok'?' ✅':_teamStatus==='err'?' ⚠':''}</div>`:''}
      ${langPills}</div>
      <div style="display:flex;flex-direction:column;gap:6px;align-items:flex-end;flex-shrink:0">
        <button class="home-manual" onclick="S.screen='manual';render();window.scrollTo(0,0)">📖 ${S.lang==='ko'?'사용법':'Guide'}</button>
        <button class="reset-btn" onclick="if(confirm(t('resetConfirm'))){S=initState();render()}">${t('reset')}</button>
      </div>
    </div>
    ${isNsup?'':`<div class="hsum">
      ${['A','AM','D','DM','E'].map(g=>{const rt=calcGrpRate(g);const col=rt===null?'rgba(255,255,255,.3)':rt===100?'var(--C)':rt>=80?'var(--m)':rt>=60?'var(--M)':'var(--P)';return`<div class="hsc"><div class="hsc-lbl">${g}</div><div class="hsc-val" style="color:${col}">${rt===null?'—':rt+'%'}</div></div>`;}).join('')}
      ${(()=>{const allDone=Object.keys(ITEMS).filter(k=>S.done[k]);const tot=allDone.length;const ok=allDone.filter(k=>calcItem(k)==='conformance').length;const rt=tot?Math.round(ok/tot*100):null;const col=rt===null?'rgba(255,255,255,.3)':rt===100?'var(--C)':rt>=80?'var(--m)':rt>=60?'var(--M)':'var(--P)';return`<div class="hsc"><div class="hsc-lbl">${t('overall')}</div><div class="hsc-val" style="color:${col}">${rt===null?'—':rt+'%'}</div></div>`;})()}
    </div>`}
  </div>
  ${isNsup?'':`<div class="hometabs">
    <button class="hometab${S.homeTab==='audit'?' act':''}" onclick="S.homeTab='audit';render()">${S.lang==='ko'?'점검 항목':'Audit Items'}</button>
    <button class="hometab${S.homeTab==='docs'?' act':''}" onclick="S.homeTab='docs';render()">${S.lang==='ko'?'필요 서류':'Documents'}</button>
  </div>`}
  ${S.homeTab==='nsup'?renderNsup():`
  ${S.homeTab==='audit'?`<div style="padding:10px 16px 0;display:flex;flex-direction:column;gap:8px">
    ${(()=>{if(!SHOW_CAP_BTN)return'';const viol=Object.keys(ITEMS).filter(id=>S.done[id]&&calcItem(id)!=='conformance');const ko=S.lang==='ko';return`<button onclick="S.screen='cap';render();window.scrollTo(0,0)" style="width:100%;padding:13px;background:var(--blue);border:none;border-radius:var(--r-lg);color:#fff;font-size:15px;font-weight:700;font-family:inherit;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;-webkit-tap-highlight-color:transparent">
      📋 ${viol.length?(ko?`시정조치계획 (CAP) — ${viol.length}건 위반`:`CAP — ${viol.length} Finding${viol.length>1?'s':''}`):(ko?'시정조치계획 (CAP)':'Corrective Action Plan (CAP)')}
    </button>`;})()}
    <button onclick="aiSummarizeAll()" ${_sumAllBusy?'disabled':''} style="width:100%;padding:13px;background:var(--canvas);border:1.5px solid var(--C);border-radius:var(--r-lg);color:var(--C);font-size:15px;font-weight:700;font-family:inherit;cursor:${_sumAllBusy?'default':'pointer'};opacity:${_sumAllBusy?'.7':'1'};display:flex;align-items:center;justify-content:center;gap:8px;-webkit-tap-highlight-color:transparent">
      ${_sumAllBusy?(S.lang==='en'?`⟳ Summarizing… ${_sumAllProg}`:`⟳ 요약 중… ${_sumAllProg}`):(S.lang==='en'?'📝 AI Summary — All Items':'📝 AI 발견사항 전체 요약')}
    </button>
  </div>`:''}
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
    <button class="ai-item-btn" style="width:100%;margin:0 0 4px" onclick="aiItemJudgeOpen('${id}')">🤖 ${S.lang==='en'?'AI Auto-Judge':'AI 자동판정'}</button>
    ${aiItemSuggCard(id)}
    <button class="ai-item-btn" style="width:100%;margin:2px 0 4px;background:var(--C);border-color:var(--C);color:#fff" onclick="aiSummarizeItem('${id}')">📝 ${S.lang==='en'?'AI Findings Summary':'AI 발견사항 정리'}</button>
    ${aiSummaryCard(id)}
    ${aiFindingCard(id)}
    ${isDoc?docRefBox(id):''}
    ${isDoc?lawViolCard(id):''}
    ${qs.map(q=>qcard(q,id,step,ans)).join('')}
  </div>
  <div class="bot"><button class="bs" onclick="itemBack()">${t('back')}</button><button class="bp" onclick="itemNext()">${t('next')}</button></div>`;
}

function screenFee(id,idx,tot){
  const f=S.fees,ready=f.reimbursed!==null&&f.workerPct&&f.feeAmtPct,fr=ready?calcFeeR():null;
  return`${nav('AL101 — '+t('fee'),'itemBack()',t('home'),'goHome()')}
  ${pbar(t('fee'),idx,tot)}
  <div class="content">
    <span class="stag">AL101</span>
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
  return`${nav('AL301 — '+t('hours'),'itemBack()',t('home'),'goHome()')}
  ${pbar(t('hours'),idx,tot)}
  <div class="content">
    <span class="stag">AL301</span>
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
  return`${nav('AL302 — '+t('days'),'itemBack()',t('home'),'goHome()')}
  ${pbar(t('days'),idx,tot)}
  <div class="content">
    <span class="stag">AL302</span>
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
  const _af=(S.aiFindings||{})[id];
  if(_af)all.push({text:'🤖 [AI] '+_af.finding,sev:_af.grade});
  const _lv=(S.lawViol||{})[id];
  if(_lv&&_lv.sev)all.push({text:(S.lang==='en'?'🏛 [Local law] ':'🏛 [국가 법령] ')+(_lv.note||(S.lang==='en'?'Local law violation':'국가 법령 위반')),sev:_lv.sev});

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
  const hdr=['Audit ID','Sub Category','Final Significance','Findings'];

  const rows=Object.entries(ITEMS).map(([id,meta])=>{
    const done=S.done[id];
    const a=S.ans[id];
    const r=done?calcItem(id):null;

    // Collect findings
    const finds=[
      ...getFindings(id+'_mgmt',a.mgmt),
      ...getFindings(id+'_doc',a.doc),
      ...getFindings(id+'_worker',a.worker),
    ];
    if(id==='a11'&&a.doc['d6']==='no'){const fr=calcFeeR();if(fr!=='conformance')finds.push({text:`Prohibited fees: ${S.fees.workerPct||'?'}% workers, ${S.fees.feeAmtPct||'?'}% of monthly salary`,sev:fr});}
    if(id==='a31'&&a.doc['d1']==='no'){const hr=calcHrsR();if(hr!=='conformance')finds.push({text:`Working hours: max ${S.hours31.maxHours||'?'} hrs/week, ${S.hours31.pctOver||'?'}% of sampled weeks`,sev:hr});}
    if(id==='a32'&&a.doc['d1']==='no'){const dr2=calcDaysR();if(dr2!=='conformance')finds.push({text:`Consecutive days: max ${S.days32.maxDays||'?'} days, ${S.days32.pctOver||'?'}% of workers`,sev:dr2});}
    const af=(S.aiFindings||{})[id];
    if(af)finds.push({text:'[AI] '+af.finding,sev:af.grade});
    const lv=(S.lawViol||{})[id];
    if(lv&&lv.sev)finds.push({text:'[Local law] '+(lv.note||'Local law violation'),sev:lv.sev});

    const findTxt=finds.map(f=>`[${(RL[f.sev]||f.sev||'').toUpperCase()}] ${f.text}`).join(' | ');

    return[
      meta.code,
      iTitle(id),
      done?RL[r]:'Not Started',
      findTxt,
    ];
  });

  // Add summary rows
  const allDone=Object.keys(ITEMS).filter(k=>S.done[k]);
  const overall=allDone.length?allDone.map(calcItem).reduce(maxR,'conformance'):'Not Started';
  rows.push([]);
  rows.push(['OVERALL RATING',`${allDone.length} / ${Object.keys(ITEMS).length} completed`,allDone.length?RL[overall]:'Not Started','']);

  // Facility info rows at top
  const meta=[
    ['On-Site Labor Audit — Inspection Report'],
    [`Vendor Code: ${S.vendorCode||'(not set)'}`],
    [`Supplier Name: ${S.supplierName||'(not set)'}`],
    [`Subsidiary: ${S.subsidiary||'(not set)'}`],
    [`GBM: ${S.gbm||'(not set)'}`],
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
  a.download=`Samsung_Supplier_Audit_${(S.vendorCode||S.country||'Report').replace(/\s/g,'_')}_${new Date().toISOString().slice(0,10)}.csv`;
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
      <div class="land-sub" style="margin-bottom:${sessions.length?28:40}px">Labor · Ethics · Supply Chain</div>
      ${sessionCards}
      <div style="width:100%;padding:0 24px">
        <button class="land-start" style="width:100%;box-sizing:border-box" onclick="S=initState();S.screen='pick';render()">
          ${sessions.length?'+ New Audit':'START  →'}
        </button>
      </div>
      ${!sessions.length?`<div class="land-hint" style="margin-top:14px">Tap to begin the on-site assessment</div>`:''}
      <div style="width:100%;padding:0 24px;margin-top:14px;display:flex;flex-direction:column;gap:9px">
        <button class="land-manual" onclick="S.screen='manual';render();window.scrollTo(0,0)">📖 Manual</button>
        <div class="land-teamrow">
          <input id="landCodeInput" type="text" placeholder="Team code (e.g. SEHC, SIEL-C)" oninput="this.value=this.value.toUpperCase()" onkeydown="if(event.key==='Enter')teamOpenCode(this.value)">
          <button class="land-team" onclick="teamOpenCode(document.getElementById('landCodeInput').value)">👥 Load</button>
        </div>
      </div>
    </div>
    <button class="land-admin" onclick="adminOpen()" title="Admin">🔐</button>
    <div class="land-footer">On-Site Audit Standard · January 2024</div>
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
  teamAutoSync(entry); // 팀 공유 키가 설정돼 있으면 서버에도 백업(디바운스)
}

function loadSession(code){
  try{
    const data=localStorage.getItem('vap_'+code);
    if(!data)return;
    const loaded=JSON.parse(data);
    S={...initState(),...loaded,screen:loaded.auditType?'home':'pick'};
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
  let vc=S.vendorCode.trim();
  if(!vc){ // 선택 입력 — 비어 있으면 저장·복원용 코드를 자동 부여
    const d=new Date(),p=n=>String(n).padStart(2,'0');
    vc='AUDIT-'+String(d.getFullYear()).slice(2)+p(d.getMonth()+1)+p(d.getDate())+'-'+p(d.getHours())+p(d.getMinutes());
  }
  S.vendorCode=vc;
  S.screen='home';
  render();window.scrollTo(0,0);
}
// 점검 유형 선택 → 설정(Setup)으로
function openAuditType(type){
  S.auditType=type;
  S.homeTab=(type==='nsup')?'nsup':'audit';
  S.screen='setup';
  render();window.scrollTo(0,0);
}
function screenPick(){
  const ko=S.lang==='ko';
  return`${nav(ko?'점검 유형 선택':'Choose Audit Type',"S.screen='landing';render()")}
  <div class="content">
    <span class="stag">${ko?'유형 선택':'Select Type'}</span>
    <h2 class="stitle">${ko?'어떤 점검을 진행할까요?':'Which audit will you run?'}</h2>
    <p class="ssub">${S.vendorCode?'Vendor · '+S.vendorCode:''}</p>
    <button class="pick-card" onclick="openAuditType('focus')">
      <div class="pick-ic">🏭</div>
      <div class="pick-tx"><div class="pick-t">${ko?'중점관리 협력사 점검':'Major Supplier Audit'}</div>
        <div class="pick-d">${ko?'노동·윤리·공급망 정식 점검 (A·AM·D·DM·E) · 필요 서류 · CAP':'Full Labor / Ethics / Supply-chain audit · documents · CAP'}</div></div>
      <div class="pick-ar">›</div>
    </button>
    <button class="pick-card" onclick="openAuditType('nsup')">
      <div class="pick-ic">🆕</div>
      <div class="pick-tx"><div class="pick-t">${ko?'신규협력사 점검':'New Supplier Check'}</div>
        <div class="pick-d">${ko?'신규 등록 평가 체크리스트 (19개 항목, 예/아니오)':'New-registration checklist (19 items, Yes/No)'}</div></div>
      <div class="pick-ar">›</div>
    </button>
  </div>`;
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
    S.screen==='pick'?screenPick():
    S.screen==='home'?screenHome():
    S.screen==='item'?screenItem():
    S.screen==='nsupItem'?screenNsupItem():
    S.screen==='cap'?screenCAP():
    S.screen==='team'?screenTeam():
    S.screen==='admin'?screenAdmin():
    S.screen==='manual'?screenManual():'';
  if(S.vendorCode&&S.auditType&&!['landing','setup','pick','admin'].includes(S.screen))saveToStorage();
  navSync();
}

// ─── 안드로이드 back(하드웨어/제스처) → 앱 이전 화면 ───
let _navPopping=false,_lastNavKey=null;
function navSnap(){return{screen:S.screen,item:S.item,step:S.step,homeTab:S.homeTab,nsupItem:S.nsupItem,auditType:S.auditType};}
function navKey(){return[S.screen,S.item,S.step,S.homeTab,S.nsupItem,S.auditType].join('|');}
function navSync(){
  if(_navPopping)return;
  const k=navKey();
  try{
    if(_lastNavKey===null){history.replaceState({snap:navSnap()},'');_lastNavKey=k;return;}
    if(k!==_lastNavKey){history.pushState({snap:navSnap()},'');_lastNavKey=k;}
  }catch(e){/* file:// 등에서 pushState 불가 시 무시 */}
}
window.addEventListener('popstate',function(e){
  // 오버레이(사진뷰어·AI패널)가 열려 있으면 먼저 닫는다
  const pv=document.getElementById('photoViewer'),ap=document.getElementById('aiPanel');
  if(pv&&pv.style.display==='flex'){closePhotoViewer();try{history.pushState({snap:navSnap()},'');}catch(e2){}return;}
  if(ap&&!ap.classList.contains('ai-hidden')){aiClose();try{history.pushState({snap:navSnap()},'');}catch(e2){}return;}
  const snap=e.state&&e.state.snap;
  if(snap){_navPopping=true;Object.assign(S,snap);render();_lastNavKey=navKey();_navPopping=false;}
});

render();

// ═══════════════════════════════════════════════════════════
//  AI INTEGRATION — OCR 문서분석 + 챗봇 (Claude Messages API)
//  키/엔드포인트는 설정(⚙)에 저장. 엔드포인트를 백엔드 프록시로
//  교체하면 브라우저에 키를 두지 않고도 그대로 동작한다.
// ═══════════════════════════════════════════════════════════
const AI_CFG_KEY='vap_ai_cfg';
const AI_DEFAULTS={endpoint:'/api/chat',model:'claude-haiku-4-5',apiKey:''};
function aiCfg(){try{return{...AI_DEFAULTS,...(JSON.parse(localStorage.getItem(AI_CFG_KEY))||{})};}catch{return{...AI_DEFAULTS};}}
function aiSaveCfgObj(c){localStorage.setItem(AI_CFG_KEY,JSON.stringify(c));}
// 프록시 모드: 엔드포인트가 Anthropic 직접 호출이 아니면(=백엔드 프록시) 브라우저에 키 불필요
function aiProxyMode(cfg){return !/api\.anthropic\.com/i.test((cfg||aiCfg()).endpoint||'');}
function aiNeedsKey(cfg){cfg=cfg||aiCfg();return !aiProxyMode(cfg)&&!cfg.apiKey;}
const AUDIT_AI_CAP=80; // 점검 1회당 AI 호출 상한 (Haiku 기준 약 $1) — 프록시(우리 예산) 모드에서만 적용
async function aiPost(payload){
  const cfg=aiCfg();
  // 점검당 AI 비용 상한 — 백엔드 프록시(우리 API 예산)를 쓸 때만 카운트/차단
  if(aiProxyMode(cfg)){
    if(typeof S.aiCalls!=='number')S.aiCalls=0;
    if(S.aiCalls>=AUDIT_AI_CAP){
      const en=S.lang==='en';
      const msg=en
        ?`This audit reached its AI usage cap (${AUDIT_AI_CAP} calls, ~$1). Further AI calls are blocked to keep cost under ~$1 per audit — you can still complete the audit manually.`
        :`이 점검의 AI 사용 한도(${AUDIT_AI_CAP}회, 약 $1)에 도달했습니다. 점검 1회 비용을 약 $1 이하로 유지하기 위해 추가 AI 호출이 차단됩니다 — 점검은 수동으로 계속 진행할 수 있습니다.`;
      return {ok:false,status:429,json:async()=>({error:{message:msg}})};
    }
    S.aiCalls++;
  }
  const headers={'content-type':'application/json'};
  if(!aiProxyMode(cfg)){
    headers['x-api-key']=cfg.apiKey;
    headers['anthropic-version']='2023-06-01';
    headers['anthropic-dangerous-direct-browser-access']='true';
  }
  return fetch(cfg.endpoint,{method:'POST',headers,body:JSON.stringify(payload)});
}

const AI_SYSTEM=`당신은 삼성전자 협력사 심사를 돕는 AI 보조자입니다.
- 삼성전자 협력사 대상 노동·인권·안전보건(EHS) 심사 기준에 근거해 답변합니다.
- 문서 사진이 첨부되면, 먼저 문서에서 읽어낸 핵심 사실을 항목별로 정리(OCR)한 뒤 관련 점검 기준과 대조해 분석합니다.
- 근거가 부족하면 추측하지 말고 "제공된 정보로는 확인 불가"라고 명시합니다.
- 답변·근거에 'RBA VAP', 'RBA' 같은 명칭은 사용하지 말고 '심사기준'으로 표현합니다.
- 최종 판정은 감사자가 확정합니다. 당신은 초안·근거·참고의견만 제시하며, 확정 판정을 단정하지 않습니다.
- 사용자가 질문한 언어와 동일한 언어로 답변합니다 (영어로 물으면 영어, 중국어로 물으면 중국어, 한국어로 물으면 한국어). 문서 내용이 다른 언어여도 답변 언어는 질문 언어를 따릅니다.
- 간결하고 실무적으로 답변합니다.`;

// in-memory chat state (감사 세션 저장소와 분리)
const aiS={busy:false,msgs:[],pending:[],judge:null,judgeKind:null,ctx:null,ctxId:null,ctxKind:null}; // judge: 자동판정 대상 · judgeKind: 'nsup'|'item' · ctx/ctxId/ctxKind: 현재 항목 맥락
const AI_GLBL={conformance:'Conformance',minor:'Minor',major:'Major',priority:'Priority',na:'N/A'};
const AI_GKEY={conformance:'C',minor:'m',major:'M',priority:'P',na:'na'};

function aiEsc(s){return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');}
// 마크다운 → HTML (채팅 답변을 예쁘게 렌더). 먼저 escape 후 서식 적용(XSS 안전)
function aiFmt(s){
  s=String(s==null?'':s);
  const inl=t=>t
    .replace(/`([^`]+)`/g,'<code>$1</code>')
    .replace(/\*\*([^*]+)\*\*/g,'<b>$1</b>')
    .replace(/\*([^*\n]+)\*/g,'<i>$1</i>')
    .replace(/\[([^\]]+)\]\((https?:[^)\s]+)\)/g,'<a href="$2" target="_blank" rel="noopener">$1</a>');
  const lines=s.split('\n');
  let h='',list=null,inCode=false,code=[];
  const close=()=>{if(list){h+='</'+list+'>';list=null;}};
  // 마크다운 표 헬퍼
  const isDelim=l=>/^\s*\|?(\s*:?-+:?\s*\|)+\s*:?-+:?\s*\|?\s*$/.test(l)&&l.includes('-');
  const cells=l=>{let t=l.trim();if(t.startsWith('|'))t=t.slice(1);if(t.endsWith('|'))t=t.slice(0,-1);return t.split('|').map(c=>c.trim());};
  const alignOf=c=>{const L=/^:/.test(c),R=/:$/.test(c);return L&&R?'center':R?'right':L?'left':'';};
  for(let i=0;i<lines.length;i++){
    const raw=lines[i];
    if(/^\s*```/.test(raw)){
      if(inCode){h+='<pre class="aimd-pre">'+aiEsc(code.join('\n'))+'</pre>';code=[];inCode=false;}
      else{close();inCode=true;}
      continue;
    }
    if(inCode){code.push(raw);continue;}
    const line=raw.replace(/\s+$/,'');
    if(!line.trim()){close();continue;}
    let m;
    // 마크다운 표: 헤더행 + 구분행(---) 감지
    if(line.includes('|')&&i+1<lines.length&&isDelim(lines[i+1])){
      close();
      const head=cells(line),al=cells(lines[i+1]).map(alignOf);
      const td=(c,ci,tag)=>'<'+tag+(al[ci]?' style="text-align:'+al[ci]+'"':'')+'>'+inl(aiEsc(c||''))+'</'+tag+'>';
      let tb='<div class="aimd-tw"><table class="aimd-table"><thead><tr>'+head.map((c,ci)=>td(c,ci,'th')).join('')+'</tr></thead><tbody>';
      let j=i+2;
      for(;j<lines.length&&lines[j].includes('|')&&lines[j].trim()&&!isDelim(lines[j]);j++){
        const r=cells(lines[j]);
        tb+='<tr>'+head.map((_,ci)=>td(r[ci],ci,'td')).join('')+'</tr>';
      }
      tb+='</tbody></table></div>';h+=tb;i=j-1;continue;
    }
    if(m=line.match(/^(#{1,3})\s+(.*)$/)){close();h+='<div class="aimd-h'+m[1].length+'">'+inl(aiEsc(m[2]))+'</div>';continue;}
    if(/^\s*(-{3,}|\*{3,})\s*$/.test(line)){close();h+='<hr class="aimd-hr">';continue;}
    if(m=line.match(/^\s*[-*+]\s+(.*)$/)){if(list!=='ul'){close();h+='<ul class="aimd-ul">';list='ul';}h+='<li>'+inl(aiEsc(m[1]))+'</li>';continue;}
    if(m=line.match(/^\s*\d+[.)]\s+(.*)$/)){if(list!=='ol'){close();h+='<ol class="aimd-ol">';list='ol';}h+='<li>'+inl(aiEsc(m[1]))+'</li>';continue;}
    if(m=line.match(/^>\s?(.*)$/)){close();h+='<blockquote class="aimd-q">'+inl(aiEsc(m[1]))+'</blockquote>';continue;}
    close();h+='<div class="aimd-p">'+inl(aiEsc(line))+'</div>';
  }
  if(inCode)h+='<pre class="aimd-pre">'+aiEsc(code.join('\n'))+'</pre>';
  close();
  return h;
}

function aiShowPanel(){
  document.getElementById('aiScrim').classList.remove('ai-hidden');
  document.getElementById('aiPanel').classList.remove('ai-hidden');
  document.getElementById('aiCfg').classList.add('ai-hidden');
  document.getElementById('aiFoot').classList.remove('ai-hidden');
  const t=document.getElementById('aiTitle');
  const en=S.lang==='en';
  t&&(t.textContent=aiS.judge?`${en?'AI Auto-Judge':'AI 자동판정'} · ${aiS.judge}`:aiS.ctxLabel?`${en?'AI · ':'AI · '}${aiS.ctxLabel}`:(en?'AI Assistant · Docs & Q&A':'AI 도우미 · 문서분석 & 질의'));
  const inp=document.getElementById('aiInput');
  if(inp)inp.placeholder=aiS.judge?(en?'Note (optional)…':'참고사항 (선택)…'):(en?'Ask a question or attach a photo…':'질문을 입력하거나 문서 사진을 첨부하세요…');
  aiRender();
}
function aiOpen(){ // FAB → 일반 챗 모드
  if(aiS.judge||aiS.ctx){aiS.judge=null;aiS.judgeKind=null;aiS.ctx=null;aiS.ctxLabel=null;aiS.ctxId=null;aiS.ctxKind=null;aiS.msgs=[];aiS.pending=[];}
  aiShowPanel();
  if(aiNeedsKey()&&aiS.msgs.length===0)aiToggleSettings();
}
// 각 항목 안에서 AI 분석·질문 (항목 맥락 주입, Haiku로 답변)
function aiAskItem(id,kind){
  const en=S.lang==='en';
  aiS.judge=null;aiS.judgeKind=null;aiS.ctxId=id;aiS.ctxKind=kind;
  if(kind==='nsup'){
    const it=nsupItemById(id); if(!it)return;
    aiS.ctx=`[항목] ${it.id} ${it.title} (${NSUP_GRPT[it.grp]||it.grp}) · 배점 ${it.c}점\n[판정기준]\n${it.crit}`;
    aiS.ctxLabel=`${it.id} · ${it.title}`;
  }else{
    const m=ITEMS[id]; if(!m)return;
    aiS.ctx=`[항목] ${m.code} ${iTitle(id)} — ${m.desc||''} (${GRPS[m.grp]||m.grp})`;
    aiS.ctxLabel=`${m.code} · ${iTitle(id)}`;
  }
  aiS.msgs=[{role:'assistant',text:en
    ?`Ask anything about **${aiS.ctxLabel}** — grading criteria, required documents, sample interview questions, or how to judge a situation. You can also attach a document photo.`
    :`**${aiS.ctxLabel}** 항목에 대해 무엇이든 물어보세요 — 판정기준 해석, 필요 서류, 인터뷰 질문 예시, 상황 판정 방법 등. 문서 사진을 첨부해도 됩니다.`}];
  aiS.pending=[];
  aiShowPanel();
  if(aiNeedsKey())aiToggleSettings();
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
    h=`<div class="ai-empty">문서 사진을 첨부하면 <b>OCR로 내용을 읽어</b> 점검 기준과 대조해 분석하고,<br>질문을 입력하면 <b>심사 기준</b>에 근거해 답변합니다.<br><br>※ 최종 판정은 감사자가 확정합니다.</div>`;
  }else{
    const en=S.lang==='en';
    aiS.msgs.forEach((m,idx)=>{
      const imgs=(m.images||[]).map(d=>`<img src="${d}">`).join('');
      const cls=m.role==='user'?'u':(m.role==='error'?'a err':'a');
      h+=`<div class="aim ${cls}"><div class="aibub">${imgs}${m.role==='assistant'||m.role==='error'?aiFmt(m.text):aiEsc(m.text).replace(/\n/g,'<br>')}</div></div>`;
      const j=m.judgment;
      if(j){
        h+=`<div class="ai-jcard">
          <div class="ai-jh">🤖 ${en?'AI analysis result':'AI 분석 결과'} — <span class="icbadge ${AI_GKEY[j.grade]||'M'}">${AI_GLBL[j.grade]||j.grade}</span></div>
          <div class="ai-jf">${aiEsc(j.finding||'')}</div>
          ${j.applied?`<div class="ai-japplied">✅ ${en?'Recorded to item findings':'항목 위반 결과에 반영됨'}</div>`
          :`<div class="ai-jbtns"><button class="ap" onclick="aiApplyFinding(${idx})">${en?'Apply to findings':'제안 적용'}</button><button onclick="aiDismissJudgment(${idx})">${en?'Ask again':'재질문'}</button></div>`}
        </div>`;
      }
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
  if(aiS.judge)return aiS.judgeKind==='item'?aiItemJudgeRun():aiJudgeRun();
  const inp=document.getElementById('aiInput');
  const text=inp.value.trim();
  if(!text&&aiS.pending.length===0)return;
  const cfg=aiCfg();
  if(aiNeedsKey(cfg)){aiToggleSettings();return;}

  const images=aiS.pending.map(p=>p.dataURL);
  const apiImgs=aiS.pending.map(p=>({type:'image',source:{type:'base64',media_type:p.media_type,data:p.data}}));
  const userQ=text||'(문서 분석 요청)';
  aiS.msgs.push({role:'user',text:userQ,images});
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

  // Major 협력사 항목 질문이면 판정요소를 구조화로 함께 받는다
  const structured=aiS.ctxKind==='major';
  const payload={model:cfg.model,max_tokens:4096,
    system:AI_SYSTEM
      +(aiS.ctx?`\n\n[현재 점검 항목 맥락]\n${aiS.ctx}\n질문이 이 항목과 관련되면 위 판정기준·정보를 근거로 답하라.`:'')
      +(structured?`\n\n[판정요소 추출] 답변이 특정 위반/판정을 시사하면 has_judgment=true 로 하고, grade(conformance|minor|major|priority|na)와 finding(위반 내용 한 줄 요약)을 채워라. 단순 정보성 답변이면 has_judgment=false, grade='na', finding=''.`:''),
    messages:apiMsgs};
  if(structured)payload.output_config={format:{type:'json_schema',schema:AI_QA_SCHEMA}};

  try{
    const res=await aiPost(payload);
    const data=await res.json();
    if(!res.ok){
      const msg=(data&&data.error&&data.error.message)||('요청 실패 ('+res.status+')');
      aiS.msgs.push({role:'error',text:'⚠ '+msg});
    }else{
      const txt=(data.content||[]).filter(b=>b.type==='text').map(b=>b.text).join('\n').trim();
      if(structured){
        let j=null,answer=txt;
        try{const o=JSON.parse(txt);answer=o.answer||txt;if(o.has_judgment&&o.grade&&o.grade!=='na'&&AI_GLBL[o.grade])j={grade:o.grade,finding:o.finding||answer,q:userQ};}catch(e){}
        aiS.msgs.push({role:'assistant',text:answer||'(응답이 비어 있습니다)',judgment:j});
      }else{
        aiS.msgs.push({role:'assistant',text:txt||'(응답이 비어 있습니다)'});
      }
    }
  }catch(err){
    aiS.msgs.push({role:'error',text:'⚠ 통신 오류: '+err.message+'\n(CORS 차단 시 백엔드 프록시가 필요합니다)'});
  }
  aiS.busy=false;aiRender();
}
const AI_QA_SCHEMA={
  type:'object',
  properties:{
    answer:{type:'string',description:'사용자 질문에 대한 대화형 답변'},
    has_judgment:{type:'boolean'},
    grade:{type:'string',enum:['conformance','minor','major','priority','na']},
    finding:{type:'string',description:'위반/판정 내용 한 줄 요약'}
  },
  required:['answer','has_judgment','grade','finding'],
  additionalProperties:false
};
// 판정 카드: [제안 적용] → 항목 위반 결과에 기록
function aiApplyFinding(idx){
  const m=aiS.msgs[idx]; if(!m||!m.judgment||!aiS.ctxId)return;
  if(!S.aiFindings)S.aiFindings={};
  S.aiFindings[aiS.ctxId]={grade:m.judgment.grade,finding:m.judgment.finding,q:m.judgment.q||'',ts:Date.now()};
  m.judgment.applied=true;
  const en=S.lang==='en';
  aiS.msgs.push({role:'assistant',text:en?`✅ Recorded to this item's findings (${AI_GLBL[m.judgment.grade]}). It now appears on the result screen and the Excel export.`:`✅ 이 항목 위반 결과에 반영했습니다 (${AI_GLBL[m.judgment.grade]}). 결과 화면과 Excel 내보내기에 표시됩니다.`});
  render(); // 뒤 화면(항목/결과) 갱신
  aiRender();
}
function aiDismissJudgment(idx){
  const m=aiS.msgs[idx]; if(m)m.judgment=null;
  aiRender();
  const inp=document.getElementById('aiInput'); if(inp)inp.focus();
}
function aiFindingClear(id){ if(S.aiFindings)delete S.aiFindings[id]; render(); }
// 국가 법령 위반 (문서 점검 단계에서 수동 기록) → 최종 판정·결과·엑셀에 반영
function lawViolCard(id){
  const en=S.lang==='en';
  const lv=(S.lawViol||{})[id]||{};
  const sev=lv.sev||'none';
  const opts=[['none',en?'None':'없음'],['minor','Minor'],['major','Major'],['priority','Priority']];
  return`<div class="lawviol">
    <div class="lv-h">🏛 ${en?'Local law violation':'국가 법령 위반'}</div>
    <div class="lv-btns">${opts.map(o=>`<button class="lv-b${sev===o[0]?' on'+(o[0]==='none'?'':' '+(AI_GKEY[o[0]]||'M')):''}" onclick="setLawViol('${id}','${o[0]}')">${o[1]}</button>`).join('')}</div>
    ${sev!=='none'?`<input class="lv-note" placeholder="${en?'Describe the violation (optional)':'위반 내용 (선택)'}" value="${aiEsc(lv.note||'').split('"').join('&quot;')}" oninput="setLawViolNote('${id}',this.value)">`:''}
  </div>`;
}
function setLawViol(id,sev){
  if(!S.lawViol)S.lawViol={};
  if(sev==='none')delete S.lawViol[id];
  else S.lawViol[id]={sev,note:(S.lawViol[id]||{}).note||''};
  render();
}
function setLawViolNote(id,v){ if(!S.lawViol)S.lawViol={}; if(!S.lawViol[id])S.lawViol[id]={sev:'major'}; S.lawViol[id].note=v; }
// 항목 화면에 표시되는 AI 분석 결과(반영됨) 카드
function aiFindingCard(id){
  const f=(S.aiFindings||{})[id]; if(!f)return'';
  const en=S.lang==='en';
  return`<div class="ai-fcard">
    <div class="ai-fh"><span>🤖 ${en?'AI analysis result':'AI 분석 결과'}</span><span class="icbadge ${AI_GKEY[f.grade]||'M'}">${AI_GLBL[f.grade]||f.grade}</span></div>
    <div class="ai-ff">${aiEsc(f.finding||'')}</div>
    <button class="ai-fx" onclick="aiFindingClear('${id}')">${en?'✕ Remove':'✕ 삭제'}</button>
  </div>`;
}

function aiToggleSettings(){
  const cfgEl=document.getElementById('aiCfg'),foot=document.getElementById('aiFoot'),body=document.getElementById('aiBody');
  const showing=!cfgEl.classList.contains('ai-hidden');
  if(showing){cfgEl.classList.add('ai-hidden');foot.classList.remove('ai-hidden');body.classList.remove('ai-hidden');return;}
  const c=aiCfg();const en=S.lang==='en';const proxy=aiProxyMode(c);
  cfgEl.innerHTML=`
    <h3>${en?'AI Connection Settings':'AI 연결 설정'}</h3>
    <p>${proxy
      ?(en?'✅ Using a backend proxy — the API key lives on the server (Netlify env var). You do NOT need to enter a key here.':'✅ 백엔드 프록시 사용 중 — API 키는 서버(Netlify 환경변수)에만 있습니다. 여기에 키를 넣을 필요가 없습니다.')
      :(en?'⚠ Direct mode — the API key is stored only on this device and is visible in the browser. Prefer a backend proxy.':'⚠ 직접 호출 모드 — API 키가 이 기기에만 저장되며 브라우저에서 노출됩니다. 가급적 백엔드 프록시를 쓰세요.')}</p>
    <label>API Key ${proxy?(en?'(not needed with proxy)':'(프록시 사용 시 불필요)'):''}</label>
    <input id="aiCfgKey" type="password" placeholder="${proxy?(en?'— handled by server —':'— 서버에서 처리됨 —'):'sk-ant-...'}" value="${aiEsc(c.apiKey)}">
    <label>${en?'Model':'모델'}</label>
    <input id="aiCfgModel" value="${aiEsc(c.model)}">
    <label>${en?'Endpoint':'엔드포인트'}</label>
    <input id="aiCfgEndpoint" value="${aiEsc(c.endpoint)}">
    <button class="save" onclick="aiSaveSettings()">${en?'Save':'저장'}</button>
    <p class="note">${en?'Proxy endpoint /api/chat keeps the key server-side (recommended). To call Claude directly for local testing, set the endpoint to https://api.anthropic.com/v1/messages and enter a key.':'프록시 엔드포인트 /api/chat 는 키를 서버에만 둡니다(권장). 로컬 테스트로 Claude를 직접 호출하려면 엔드포인트를 https://api.anthropic.com/v1/messages 로 바꾸고 키를 입력하세요.'}</p>`;
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
  aiS.judge=id;aiS.judgeKind='nsup';aiS.msgs=[];aiS.pending=[];
  aiS.msgs.push({role:'assistant',text:`[${it.id} · ${it.title}] 자동판정 모드입니다.\n\n관련 문서 사진(계약서·급여명세서·정책문서 등)을 📷로 첨부한 뒤 ➤를 누르세요. 판정기준과 대조해 등급을 제안합니다.\n\n※ 제안은 초안이며, 적용 여부는 감사자가 결정합니다.`});
  aiShowPanel();
  if(aiNeedsKey())aiToggleSettings();
}

async function aiJudgeRun(){
  if(aiS.busy)return;
  const id=aiS.judge,it=nsupItemById(id);
  if(!it)return;
  const cfg=aiCfg();
  if(aiNeedsKey(cfg)){aiToggleSettings();return;}
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
    const res=await aiPost({
      model:cfg.model,max_tokens:2000,system:AI_SYSTEM,
      messages:[{role:'user',content:blocks}],
      output_config:{format:{type:'json_schema',schema:AI_JUDGE_SCHEMA}}
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
  const en=S.lang==='en';
  return`<div class="nsup-card ai-sugg">
    <div class="ai-sugg-h">
      <span>🤖 ${en?'AI Suggestion':'AI 제안'}</span>
      <span class="icbadge ${k||'ns'}">${AI_GLABEL[sug.suggested_grade]||sug.suggested_grade}</span>
      <span class="ai-conf">${en?'confidence':'확신도'} ${conf}%</span>
    </div>
    ${open?`<div class="ai-sugg-body">
      <div class="ai-sugg-sec"><b>${en?'Document summary':'문서 요약'}</b><br>${aiEsc(sug.doc_summary||'')}</div>
      <div class="ai-sugg-sec"><b>${en?'Rationale':'근거'}</b><br>${aiEsc(sug.rationale||'')}</div>
      ${(sug.answers||[]).map(a=>`<div class="ai-sugg-q"><b>${aiEsc(a.q_id)}</b> · ${a.answer==='unknown'?(en?'unknown':'확인불가'):aiEsc(a.answer).toUpperCase()} — ${aiEsc(a.evidence||'')}</div>`).join('')}
    </div>`:''}
    <div class="ai-sugg-btns">
      <button onclick="S.nsupOpen['ai_${id}']=!S.nsupOpen['ai_${id}'];render()">${open?(en?'Collapse':'접기'):(en?'View evidence':'근거 보기')}</button>
      <button class="ap" onclick="aiJudgeApply('${id}')">${en?'Apply':'제안 적용'}</button>
      <button class="rm" onclick="aiJudgeClear('${id}')">${en?'Delete':'삭제'}</button>
    </div>
    <div class="ai-sugg-note">${en?'※ AI suggestion is a draft. The auditor reviews and confirms.':'※ AI 제안은 초안입니다. 감사자가 문항을 검토·수정해 확정하세요.'}</div>
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

// ─── AI 자동판정 (메인 점검항목 A/AM/D/DM/E — 문서로 3단계 yes/no 초안 작성) ───
const AI_STEP_OF=p=>({M:'mgmt',D:'doc',W:'worker'}[String(p||'').toUpperCase()[0]]||null);
function aiItemJudgeOpen(id){
  const m=ITEMS[id];if(!m)return;const en=S.lang==='en';
  aiS.judge=id;aiS.judgeKind='item';aiS.msgs=[];aiS.pending=[];
  aiS.msgs.push({role:'assistant',text:en
    ?`[${m.code} · ${iTitle(id)}] Auto-Judge mode.\n\n**① Attach documents** — attach related photos (contracts, payslips, policies, records) with 📷 and tap ➤. AI reads them and drafts Yes/No answers for the questions it can verify.\n**② Ask a question** — or just type a question about this item (grading criteria, required documents, how to judge a situation) and tap ➤.\n\n※ Questions needing interviews/observation are left as “unknown” for the auditor.`
    :`[${m.code} · ${iTitle(id)}] 자동판정 모드입니다.\n\n**① 문서 첨부** — 관련 문서 사진(계약서·급여명세서·정책·기록 등)을 📷로 첨부하고 ➤를 누르면 문서로 확인 가능한 문항의 예/아니오를 초안으로 채웁니다.\n**② 질문하기** — 또는 이 항목에 대해 궁금한 점(판정기준·필요 서류·상황 판정 방법 등)을 입력하고 ➤를 누르세요.\n\n※ 면담·현장확인이 필요한 문항은 ‘확인불가’로 남겨 감사자가 답합니다.`});
  aiShowPanel();
  if(aiNeedsKey())aiToggleSettings();
}
async function aiItemJudgeRun(){
  if(aiS.busy)return;
  const id=aiS.judge,m=ITEMS[id];if(!m)return;
  const cfg=aiCfg();
  if(aiNeedsKey(cfg)){aiToggleSettings();return;}
  const inp=document.getElementById('aiInput');
  const note=inp.value.trim();
  // 사진이 없으면: 이 항목에 대한 자유질문(Q&A) 모드로 동작
  if(aiS.pending.length===0){
    if(!note){aiS.msgs.push({role:'error',text:S.lang==='en'?'⚠ Attach a document photo or type a question about this item.':'⚠ 문서 사진을 첨부하거나 이 항목에 대한 질문을 입력하세요.'});aiRender();return;}
    return aiItemAskRun(id,note);
  }
  const images=aiS.pending.map(p=>p.dataURL);
  const blocks=aiS.pending.map(p=>({type:'image',source:{type:'base64',media_type:p.media_type,data:p.data}}));
  const stepLbl={mgmt:'경영진 면담(Management)',doc:'기록 검토(Document)',worker:'근로자 면담(Worker)'};
  let qtxt='';
  ['mgmt','doc','worker'].forEach(st=>{
    const qs=Q[`${id}_${st}`]||[];
    if(qs.length)qtxt+=`\n[${stepLbl[st]}]\n`+qs.map(q=>`${q.id} [${q.sev}${q.inv?' · 역질문(yes=위반)':''}] ${q.text}`).join('\n')+'\n';
  });
  blocks.push({type:'text',text:
`[점검 항목]
${m.code} · ${iTitle(id)} — ${m.desc||''} (${GRPS[m.grp]||m.grp})

[점검 문항] (yes=문항 내용이 사실, no=사실 아님, na=해당없음, unknown=문서로 확인 불가)
※ 문항은 있는 그대로의 의미로 답하라. 심각도·역질문 해석은 앱이 처리한다.
${qtxt}${note?`\n[감사자 참고사항]\n${note}\n`:''}
[지시]
1. 첨부 문서의 핵심 사실을 doc_summary에 정리하라(OCR).
2. 각 문항(q_id)에 대해 문서로 확인 가능한 것만 yes/no/na로 답하고 evidence에 근거를 적어라. 면담·현장확인이 필요해 문서로 알 수 없으면 unknown. 추측 금지.
3. suggested_grade는 참고용으로 제안하라(문서만으로 불명확하면 insufficient_evidence).
4. rationale에 어떤 근거로 판단했는지 요약하라.`});
  aiS.msgs.push({role:'user',text:note||'(자동판정 요청)',images});
  aiS.pending=[];inp.value='';aiAutoGrow(inp);
  aiS.busy=true;aiRender();
  try{
    const res=await aiPost({model:cfg.model,max_tokens:2000,system:AI_SYSTEM,
      messages:[{role:'user',content:blocks}],
      output_config:{format:{type:'json_schema',schema:AI_JUDGE_SCHEMA}}});
    const data=await res.json();
    if(!res.ok){
      const msg=(data&&data.error&&data.error.message)||('요청 실패 ('+res.status+')');
      aiS.msgs.push({role:'error',text:'⚠ '+msg});
    }else{
      const txt=(data.content||[]).filter(b=>b.type==='text').map(b=>b.text).join('').trim();
      const sug=JSON.parse(txt);
      if(!S.itemAI)S.itemAI={};
      S.itemAI[id]={...sug,ts:Date.now()};
      const conf=Math.round((sug.confidence||0)*100);
      const fillable=(sug.answers||[]).filter(a=>['yes','no','na'].includes(a.answer)&&AI_STEP_OF(a.q_id)).length;
      aiS.msgs.push({role:'assistant',text:
`**제안 등급: ${AI_GLABEL[sug.suggested_grade]||sug.suggested_grade}** (확신도 ${conf}%)

**📄 문서 요약**
${sug.doc_summary}

**판정 근거**
${sug.rationale}

${(sug.answers||[]).map(a=>`${a.q_id} · ${a.answer==='unknown'?'확인불가':a.answer.toUpperCase()} — ${a.evidence}`).join('\n')}

항목 화면의 제안 카드에서 [제안 적용]을 누르면 문서로 확인된 ${fillable}개 문항이 자동으로 채워집니다.`});
      render();
    }
  }catch(err){
    aiS.msgs.push({role:'error',text:'⚠ '+(err instanceof SyntaxError?'응답 해석 실패 (구조화 출력 미지원 모델일 수 있음)':'통신 오류: '+err.message)});
  }
  aiS.busy=false;aiRender();
}
// 항목 특화 자유질문 — 문항·판정기준·현재답변을 맥락으로 주입해 대화형 답변
async function aiItemAskRun(id,q){
  const m=ITEMS[id];if(!m)return;
  const cfg=aiCfg();
  const inp=document.getElementById('aiInput');
  aiS.msgs.push({role:'user',text:q});
  if(inp){inp.value='';aiAutoGrow(inp);}
  aiS.busy=true;aiRender();
  const stepLbl={mgmt:'경영진 면담(Management)',doc:'기록 검토(Document)',worker:'근로자 면담(Worker)'};
  let ctx=`${m.code} · ${iTitle(id)} — ${m.desc||''} (${GRPS[m.grp]||m.grp})\n`;
  ['mgmt','doc','worker'].forEach(st=>{
    const qs=Q[`${id}_${st}`]||[];if(!qs.length)return;
    const ans=(S.ans[id]||{})[st]||{};
    ctx+=`\n[${stepLbl[st]}]\n`+qs.map(qq=>`${qq.id} [${qq.sev}${qq.inv?' · 역질문(yes=위반)':''}] ${qq.text} → 현재답변:${ans[qq.id.toLowerCase()]||'미답'}`).join('\n')+'\n';
  });
  // 대화 이력(첫 assistant 안내문은 API 규칙상 제거)
  let hist=aiS.msgs.filter(x=>x.role==='user'||x.role==='assistant');
  while(hist.length&&hist[0].role==='assistant')hist.shift();
  const apiMsgs=hist.map(x=>({role:x.role,content:[{type:'text',text:x.text}]}));
  const payload={model:cfg.model,max_tokens:2000,
    system:AI_SYSTEM+`\n\n[현재 점검 항목 맥락]\n${ctx}\n이 항목에 대한 질문이면 위 문항·판정기준·현재답변을 근거로 답하라. 최종 판정은 감사자가 확정한다.`,
    messages:apiMsgs};
  try{
    const res=await aiPost(payload);
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
function aiItemSuggCard(id){
  const sug=(S.itemAI||{})[id];if(!sug)return'';
  const en=S.lang==='en';
  const gmeta={conformance:'C',minor:'m',major:'M',priority:'P',na:'na'};
  const k=gmeta[sug.suggested_grade];
  const open=(S.noteOpen||{})['aiItem_'+id];
  const conf=Math.round((sug.confidence||0)*100);
  return`<div class="nsup-card ai-sugg">
    <div class="ai-sugg-h">
      <span>🤖 ${en?'AI Suggestion':'AI 제안'}</span>
      <span class="icbadge ${k||'ns'}">${AI_GLABEL[sug.suggested_grade]||sug.suggested_grade}</span>
      <span class="ai-conf">${en?'confidence':'확신도'} ${conf}%</span>
    </div>
    ${open?`<div class="ai-sugg-body">
      <div class="ai-sugg-sec"><b>${en?'Document summary':'문서 요약'}</b><br>${aiEsc(sug.doc_summary||'')}</div>
      <div class="ai-sugg-sec"><b>${en?'Rationale':'근거'}</b><br>${aiEsc(sug.rationale||'')}</div>
      ${(sug.answers||[]).map(a=>`<div class="ai-sugg-q"><b>${aiEsc(a.q_id)}</b> · ${a.answer==='unknown'?(en?'unknown':'확인불가'):aiEsc(a.answer).toUpperCase()} — ${aiEsc(a.evidence||'')}</div>`).join('')}
    </div>`:''}
    <div class="ai-sugg-btns">
      <button onclick="S.noteOpen['aiItem_${id}']=!S.noteOpen['aiItem_${id}'];render()">${open?(en?'Collapse':'접기'):(en?'View evidence':'근거 보기')}</button>
      <button class="ap" onclick="aiItemJudgeApply('${id}')">${en?'Apply':'제안 적용'}</button>
      <button class="rm" onclick="aiItemJudgeClear('${id}')">${en?'Delete':'삭제'}</button>
    </div>
    <div class="ai-sugg-note">${en?'※ Draft from documents. Interview questions stay blank; the auditor reviews and confirms.':'※ 문서 기반 초안입니다. 면담 문항은 비워 두며, 감사자가 검토·확정하세요.'}</div>
  </div>`;
}
function aiItemJudgeApply(id){
  const sug=(S.itemAI||{})[id];if(!sug)return;
  let n=0;
  (sug.answers||[]).forEach(a=>{
    if(!['yes','no','na'].includes(a.answer))return;
    const step=AI_STEP_OF(a.q_id);if(!step)return;
    const qs=Q[`${id}_${step}`]||[];
    const q=qs.find(x=>x.id.toUpperCase()===String(a.q_id).toUpperCase());
    if(!q)return;                              // 존재하지 않는 문항 무시
    if(a.answer==='na'&&!q.na)return;          // N/A 불가 문항은 건너뜀
    S.ans[id][step][q.id.toLowerCase()]=a.answer;n++;
  });
  aiS.msgs.push({role:'assistant',text:S.lang==='en'?`✅ Filled ${n} question(s) from the documents. Review the answers and complete the remaining steps.`:`✅ 문서로 확인된 ${n}개 문항을 채웠습니다. 답변을 검토하고 나머지 단계를 완료하세요.`});
  render();aiRender();
}
function aiItemJudgeClear(id){
  if(S.itemAI)delete S.itemAI[id];
  render();
}

// ─── AI 발견사항 정리 (문항답변·판정·메모 → Findings/Reference 하나로) ───
const AI_SUMMARY_SCHEMA={
  type:'object',
  properties:{
    findings:{type:'string',description:'발견된 위반·문제점을 감사 보고서용 간결한 실무 문장으로 정리. 여러 건이면 문장/쉼표로 나열하고 수치가 있으면 포함. 위반이 없으면 "특이사항 없음".'},
    reference:{type:'string',description:'적용 근거 — 관련 법령 및 심사기준(항목코드·심각도). 예: "근로기준법 제20조(위약예정 금지); 심사기준 AL101 Major". 특정 근거가 없으면 일반 기준을 간단히.'}
  },
  required:['findings','reference'],
  additionalProperties:false
};
function collectItemFindings(id){
  const a=S.ans[id];
  const finds=[...getFindings(id+'_mgmt',a.mgmt),...getFindings(id+'_doc',a.doc),...getFindings(id+'_worker',a.worker)];
  if(id==='a11'&&a.doc['d6']==='no'){const fr=calcFeeR();if(fr!=='conformance')finds.push({text:`채용 수수료: 부담 근로자 ${S.fees.workerPct||'?'}%, 월급 대비 ${S.fees.feeAmtPct||'?'}%`,sev:fr});}
  if(id==='a31'&&a.doc['d1']==='no'){const hr=calcHrsR();if(hr!=='conformance')finds.push({text:`근로시간: 최대 주 ${S.hours31.maxHours||'?'}시간, 초과 주 ${S.hours31.pctOver||'?'}%`,sev:hr});}
  if(id==='a32'&&a.doc['d1']==='no'){const dr=calcDaysR();if(dr!=='conformance')finds.push({text:`연속근로일: 최대 ${S.days32.maxDays||'?'}일, 초과 근로자 ${S.days32.pctOver||'?'}%`,sev:dr});}
  const af=(S.aiFindings||{})[id];if(af)finds.push({text:'[AI] '+af.finding,sev:af.grade});
  const lv=(S.lawViol||{})[id];if(lv&&lv.sev)finds.push({text:'[현지법] '+(lv.note||'현지 법령 위반'),sev:lv.sev});
  return finds;
}
async function aiSummarizeItem(id){
  const m=ITEMS[id];if(!m)return;
  const cfg=aiCfg();
  if(aiNeedsKey(cfg)){aiS.judge=null;aiS.judgeKind=null;aiS.ctxId=id;aiShowPanel();aiToggleSettings();return;}
  const finds=collectItemFindings(id);
  const iaj=(S.itemAI||{})[id];
  const findList=finds.map(f=>`- [${(RL[f.sev]||f.sev||'').toUpperCase()}] ${f.text}`).join('\n')||'(집계된 위반 없음)';
  const noteList=[];
  ['mgmt','doc','worker'].forEach(step=>{const n=(S.notes[id]||{})[step]||{};Object.entries(n).forEach(([q,t])=>{if(t&&String(t).trim())noteList.push(`[${q.toUpperCase()}] ${String(t).trim()}`);});});
  const grade=S.done[id]?calcItem(id):null;
  const langName={ko:'한국어',en:'English',zh:'中文(简体)'}[S.lang]||'한국어';
  const ctx=
`[점검 항목] ${m.code} · ${iTitle(id)} — ${m.desc||''} (${GRPS[m.grp]||m.grp})
${grade?`[현재 판정] ${RL[grade]}`:''}
[집계된 위반/발견사항]
${findList}${iaj&&iaj.rationale?`\n[AI 판정 근거]\n${iaj.rationale}`:''}${noteList.length?`\n[감사자 메모]\n${noteList.join('\n')}`:''}

위 정보를 종합해 감사 보고서용으로 정리하라. findings와 reference를 모두 반드시 ${langName}로 작성하라.`;
  if(!S.itemSummary)S.itemSummary={};
  S.itemSummary[id]={busy:true};render();
  try{
    const res=await aiPost({model:cfg.model,max_tokens:1024,system:AI_SYSTEM,
      messages:[{role:'user',content:ctx}],
      output_config:{format:{type:'json_schema',schema:AI_SUMMARY_SCHEMA}}});
    const data=await res.json();
    if(!res.ok)throw new Error((data&&data.error&&data.error.message)||('요청 실패 '+res.status));
    const txt=(data.content||[]).filter(b=>b.type==='text').map(b=>b.text).join('').trim();
    const sug=JSON.parse(txt);
    S.itemSummary[id]={findings:sug.findings||'',reference:sug.reference||'',ts:Date.now()};
  }catch(e){
    S.itemSummary[id]={error:String(e&&e.message?e.message:e)};
  }
  render();
}
function aiSummaryCard(id){
  const s=(S.itemSummary||{})[id];if(!s)return'';
  const en=S.lang==='en';
  if(s.busy)return`<div class="nsup-card ai-sugg"><div class="ai-sugg-h"><span>🤖 ${en?'Summarizing…':'AI 정리 중…'}</span></div></div>`;
  if(s.error)return`<div class="nsup-card ai-sugg" style="border-color:var(--P)"><div class="ai-sugg-h"><span>🤖 ${en?'Summary failed':'정리 실패'}</span></div><div class="ai-sugg-body"><div class="ai-sugg-sec">${aiEsc(s.error)}</div></div><div class="ai-sugg-btns"><button class="ap" onclick="aiSummarizeItem('${id}')">${en?'Retry':'다시'}</button><button class="rm" onclick="aiSummaryClear('${id}')">${en?'Delete':'삭제'}</button></div></div>`;
  return`<div class="nsup-card ai-sugg ai-summary">
    <div class="ai-sugg-h"><span>🤖 ${en?'AI Summary':'AI 정리'}</span></div>
    <div class="ai-sum-sec"><div class="ai-sum-h">Findings</div><div class="ai-sum-b">${aiEsc(s.findings||'')}</div></div>
    <div class="ai-sum-sec"><div class="ai-sum-h">Reference</div><div class="ai-sum-b">${aiEsc(s.reference||'')}</div></div>
    <div class="ai-sugg-btns">
      <button class="ap" onclick="aiSummarizeItem('${id}')">${en?'Regenerate':'다시 생성'}</button>
      <button class="rm" onclick="aiSummaryClear('${id}')">${en?'Delete':'삭제'}</button>
    </div>
    <div class="ai-sugg-note">${en?'※ AI draft — the auditor reviews and finalizes.':'※ AI 초안입니다. 감사자가 검토·확정하세요.'}</div>
  </div>`;
}
function aiSummaryClear(id){if(S.itemSummary)delete S.itemSummary[id];render();}

// 전체 요약 — 점검한 항목들을 항목별로(각각) 순차 요약
let _sumAllBusy=false,_sumAllProg='';
async function aiSummarizeAll(){
  if(_sumAllBusy)return;
  const en=S.lang==='en';
  const cfg=aiCfg();
  if(aiNeedsKey(cfg)){aiShowPanel();aiToggleSettings();return;}
  const all=Object.keys(ITEMS).filter(id=>S.done[id]||hasAns(id));   // 점검한(답변 있는) 항목만
  if(!all.length){alert(en?'No assessed items to summarize.':'요약할 점검 항목이 없습니다. (먼저 항목을 점검하세요)');return;}
  const todo=all.filter(id=>{const s=(S.itemSummary||{})[id];return !(s&&s.findings!==undefined&&!s.error);}); // 이미 요약된 것 제외
  if(!todo.length){alert(en?'All assessed items are already summarized. Use "Regenerate" on a card to refresh.':'점검한 항목이 모두 요약되어 있습니다. 갱신은 각 카드의 "다시 생성"을 사용하세요.');return;}
  _sumAllBusy=true;let ok=0;
  for(let i=0;i<todo.length;i++){
    _sumAllProg=`${i+1}/${todo.length}`;render();
    try{ await aiSummarizeItem(todo[i]); const s=(S.itemSummary||{})[todo[i]]; if(s&&!s.error)ok++; }catch(e){/* 개별 실패 무시 */}
  }
  _sumAllBusy=false;_sumAllProg='';render();
  alert(en?`Summarized ${ok} of ${todo.length} item(s).`:`${todo.length}개 중 ${ok}개 항목을 요약했습니다.`);
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
  {n:'02',img:'manual/major.png',
   ko:{title:'점검 항목 — 중점관리(Major) 점검',desc:'점검 홈 화면입니다. 상단 요약바에 그룹별(A·AM·D·DM·E) 적합률과 총점이 실시간 표시됩니다. 각 <b>항목 카드</b>를 눌러 점검을 시작합니다.',steps:['항목 코드는 AL·AM·DE·DM·ES 체계입니다 (예: AL101 강제근로).','<b>점검 항목</b> / <b>필요 서류</b> 탭으로 전환할 수 있습니다.','등급은 카드에 색상 배지로 표시됩니다.']},
   en:{title:'Audit Items — On-Site (Major) Audit',desc:'The audit home screen. The summary bar shows per-group (A·AM·D·DM·E) conformance and total score in real time. Tap an <b>item card</b> to start assessing.',steps:['Item codes use the AL·AM·DE·DM·ES scheme (e.g. AL101 Forced Labor).','Switch between the <b>Audit Items</b> / <b>Documents</b> tabs.','Grades appear as colored badges on each card.']}},
  {n:'03',img:'manual/newsupplier.png',
   ko:{title:'신규협력사 체크리스트',desc:'신규 등록 평가용 <b>19개 항목</b> 체크리스트입니다. 각 항목을 눌러 예/아니오로 답하면 <b>총점(100점)</b>과 등급이 자동 산정됩니다.',steps:['필수 항목이 Priority면 즉시 FAIL됩니다.','합격 기준: 85점↑ PASS / 70~84 CONDITIONAL / 그 외 FAIL.']},
   en:{title:'New-Supplier Checklist',desc:'A <b>19-item</b> checklist for new-registration evaluation. Tap an item and answer Yes/No; the <b>total score (100)</b> and grade are computed automatically.',steps:['A Priority on a mandatory item = immediate FAIL.','Pass: ≥85 PASS / 70–84 CONDITIONAL / else FAIL.']}},
  {n:'04',img:'manual/setup.png',
   ko:{title:'점검 준비 — 협력사 정보 입력',desc:'점검 전 협력사 정보를 입력합니다: <b>Vendor Code · 협력사명 · 법인(Subsidiary) · 사업부(GBM) · 국가</b>. 입력값은 홈 화면과 Excel 보고서 상단에 표시됩니다.',steps:['Vendor Code는 세션 저장·복원 키입니다. 비워두면 자동 부여됩니다.','입력 후 <b>Start Audit</b>을 눌러 시작합니다.']},
   en:{title:'Prepare — Enter Supplier Info',desc:'Enter the supplier details before auditing: <b>Vendor Code · Supplier Name · Subsidiary · GBM · Country</b>. These appear on home and at the top of the Excel report.',steps:['Vendor Code is the save/restore key; leave blank to auto-generate.','Tap <b>Start Audit</b> to begin.']}},
  {n:'05',img:'manual/excel.png',
   ko:{title:'점검 결과 Excel(CSV) 내보내기',desc:'홈 <b>점검 항목</b> 탭 맨 아래의 <b>📊 점검 결과 Excel 내보내기</b> 버튼을 누르면 CSV 파일이 다운로드됩니다.',steps:['등급·발견사항·메모·사진 수가 포함됩니다.','다운로드된 .csv 파일은 Excel에서 바로 열립니다.']},
   en:{title:'Export Results to Excel (CSV)',desc:'At the bottom of the <b>Audit Items</b> tab, tap <b>📊 Export Results to Excel</b> to download a CSV.',steps:['Includes ratings, findings, notes and photo counts.','The .csv opens directly in Excel.']}},
  {n:'06',img:'manual/aibtn.png',
   ko:{title:'AI 자동판정 — 사진으로 판정 또는 항목 질문',desc:'각 점검 항목 화면에서 <b>🤖 AI 자동판정</b> 버튼을 누르면 두 가지로 쓸 수 있습니다: <b>① 문서 첨부</b> — 관련 문서 사진(계약서·급여명세서 등)을 📷로 첨부하면 문서로 확인 가능한 문항의 예/아니오 초안과 제안 등급을 만들어 줍니다. <b>② 질문하기</b> — 사진 없이 이 항목에 대한 궁금한 점을 입력하면 판정기준·현재 답변을 근거로 답해 줍니다.',steps:['문서로 확인 불가한 문항(면담·현장확인)은 비워 두어 감사자가 답합니다.','AI 응답은 서버(백엔드 프록시)를 통해 처리되어 별도 설정이 필요 없습니다.']},
   en:{title:'AI Auto-Judge — Grade from Photos or Ask',desc:'On any audit item, tap <b>🤖 AI Auto-Judge</b> for two modes: <b>① Attach documents</b> — attach related photos (contracts, payslips, etc.) and AI drafts Yes/No answers plus a suggested grade for what the documents verify. <b>② Ask a question</b> — with no photo, type a question about this item and AI answers from the criteria and your current answers.',steps:['Questions needing interviews/observation are left blank for the auditor.','AI runs through the backend proxy — no extra setup needed.']}},
  {n:'07',img:'manual/aicard.png',
   ko:{title:'AI 제안 검토 & 적용',desc:'문서 첨부로 판정한 경우, AI 제안 카드에서 근거를 확인하고 <b>제안 적용</b>을 누르면 문항에 자동 반영됩니다. (질문하기 모드는 카드 없이 대화형으로 바로 답합니다.)',steps:['적용 후에도 문항을 직접 수정하면 등급이 다시 계산됩니다.','최종 판정은 항상 감사자가 확정합니다. AI는 초안·근거만 제공합니다.']},
   en:{title:'Review & Apply AI Suggestion',desc:'When you judged from documents, review the evidence on the suggestion card and tap <b>Apply Suggestion</b> to prefill the questions. (Ask-a-question mode replies conversationally with no card.)',steps:['Editing answers afterward recalculates the grade.','The auditor always makes the final decision; AI provides only a draft and rationale.']}},
  {n:'08',img:'manual/fab.png',
   ko:{title:'AI 도우미 열기 (문서분석·질의)',desc:'어느 화면에서든 우측 하단 <b>✦</b> 버튼으로 AI 도우미를 엽니다.',steps:['문서 사진을 첨부하면 OCR 분석, 질문을 입력하면 심사 기준으로 답변합니다.']},
   en:{title:'Open AI Assistant (Analysis & Q&A)',desc:'Tap the <b>✦</b> button (bottom-right) on any screen to open the AI assistant.',steps:['Attach a photo for OCR analysis, or type a question for audit-standard guidance.']}},
  {n:'09',img:'manual/teamcode.png',
   ko:{title:'팀 공유 코드 설정',desc:'점검 준비(Setup) 화면 맨 아래 <b>팀 공유 코드</b>에 코드(예: TEAM-A)를 입력하면, 이 점검이 그 코드로 서버에 자동 백업됩니다. 팀원끼리 같은 코드를 쓰면 서로의 기록을 공유합니다. 비워두면 이 기기에만 저장됩니다.',steps:['영문·숫자·-·_ 만 사용됩니다.','코드를 아는 사람은 누구나 접근하니 추측하기 어려운 코드를 쓰세요.','사진은 용량 문제로 서버 백업에서 제외됩니다(텍스트·등급만).']},
   en:{title:'Set a Team Share Code',desc:'At the bottom of the Setup screen, enter a code (e.g. TEAM-A) in <b>Team Share Code</b>. This audit is then auto-backed-up to the server under that code. Teammates using the same code share each other’s records. Leave blank to keep it on this device only.',steps:['Only A–Z, 0–9, - and _ are used.','Anyone who knows the code can access it — use a hard-to-guess code.','Photos are excluded from server backups (text & grades only).']}},
  {n:'10',img:'manual/team.png',
   ko:{title:'팀 기록 불러오기 & 삭제',desc:'사무실 <b>PC</b> 등에서 랜딩 화면의 <b>👥 Team Records</b>(또는 이 화면)에 같은 <b>팀 공유 코드</b>를 넣고 <b>조회</b>를 누르면 그 코드로 백업된 점검들이 표시됩니다.',steps:['목록에서 <b>열기</b>를 눌러 해당 점검을 이 기기로 불러옵니다(사진 제외).','왼쪽 <b>체크박스</b>로 원하는 기록만 고르면 <b>📊 선택 저장</b>, 아무것도 안 고르면 <b>📊 전체 저장</b>으로 CSV를 내려받습니다.','각 기록의 <b>🗑</b> 버튼으로 서버 백업을 삭제합니다(되돌릴 수 없음).','서버 백업은 <b>첫 등록일로부터 2년</b>이 지나면 자동으로 삭제됩니다. 오래 보관할 자료는 미리 Excel로 내려받아 두세요.']},
   en:{title:'Load & Delete Team Records',desc:'On an office <b>PC</b>, tap <b>👥 Team Records</b> on the landing screen (or use this screen), enter the same <b>team share code</b>, and tap <b>Load</b> to see the audits backed up under it.',steps:['Tap <b>Open</b> on a record to load that audit onto this device (photos excluded).','Tick the <b>checkboxes</b> to export only chosen records (<b>📊 Export Selected</b>), or export all when none are ticked.','Use each record’s <b>🗑</b> button to delete its server backup (cannot be undone).','Server backups are <b>auto-deleted 2 years after their first registration</b>. Export anything you need to keep to Excel in advance.']}},
];
const PROCESS_SECTIONS=[
  {ko:{t:'① 점검 준비 (Setup)',b:'협력사 식별 정보를 입력합니다:<ul><li><b>Vendor Code</b> (선택) — 이 코드로 세션이 저장·복원됩니다. 비워두면 자동 부여.</li><li><b>협력사명</b> (Supplier Name)</li><li><b>법인</b> (Subsidiary — 예: SEV, SEHC)</li><li><b>사업부</b> (GBM — 예: MX, VD)</li><li><b>국가</b></li></ul>입력한 정보는 홈 화면과 Excel 보고서 상단에 표시됩니다. 입력 후 <b>Start</b>를 누릅니다.'},
   en:{t:'① Prepare the Audit (Setup)',b:'Enter the supplier identification:<ul><li><b>Vendor Code</b> (optional) — the session is saved/restored by this code; blank = auto-generated.</li><li><b>Supplier Name</b></li><li><b>Subsidiary</b> (e.g. SEV, SEHC)</li><li><b>GBM</b> (business unit, e.g. MX, VD)</li><li><b>Country</b></li></ul>This info appears on the home screen and at the top of the Excel report. Then tap <b>Start</b>.'}},
  {ko:{t:'② 홈 화면 구성',b:'홈에는 3개 탭이 있습니다:<ul><li><b>점검 항목</b> — 노동/윤리/공급망 정식 점검(A·AM·D·DM·E)</li><li><b>필요 서류</b> — 그룹별 요구 서류 목록</li><li><b>신규협력사</b> — 신규 등록 평가 체크리스트(19항목)</li></ul>상단 요약바에 그룹별 적합률과 총점이 실시간 표시됩니다.'},
   en:{t:'② Home Layout',b:'Home has three tabs:<ul><li><b>Audit Items</b> — formal Labor/Ethics/Supply-chain checks (A·AM·D·DM·E)</li><li><b>Documents</b> — required documents per group</li><li><b>New Supplier</b> — new-registration checklist (19 items)</li></ul>The summary bar shows per-group conformance and total score in real time.'}},
  {ko:{t:'③ 항목 점검 — 3단계 진행',b:'각 점검 항목은 세 단계로 진행합니다:<ol><li><b>경영진 면담</b> (Management)</li><li><b>기록 검토</b> (Document Review)</li><li><b>근로자 면담</b> (Worker Interview)</li></ol>각 질문에 <b>예 / 아니오 / N/A</b>로 답합니다. 위반에 해당하면 심각도(Priority·Major·Minor)가 자동 반영됩니다. 하단 <b>다음</b>으로 단계를 이동합니다.'},
   en:{t:'③ Assess an Item — 3 Steps',b:'Each item is assessed in three steps:<ol><li><b>Management interview</b></li><li><b>Document review</b></li><li><b>Worker interview</b></li></ol>Answer each question <b>Yes / No / N/A</b>. Any violation applies its severity (Priority·Major·Minor) automatically. Use <b>Next</b> at the bottom to move between steps.'}},
  {ko:{t:'④ 특수 입력 — 수수료·근로시간·휴무',b:'일부 항목은 수치 매트릭스를 입력합니다:<ul><li><b>AL101</b> 채용 수수료 — 부담 근로자 %, 월급 대비 수수료 %</li><li><b>AL301</b> 근로시간 — 주당 최대 시간, 초과 주 비율 %</li><li><b>AL302</b> 연속근로일 — 최대 연속일, 초과 근로자 %</li></ul>입력값에 따라 등급이 자동 계산됩니다.'},
   en:{t:'④ Special Inputs — Fees, Hours, Rest Days',b:'Some items need a numeric matrix:<ul><li><b>AL101</b> Recruitment fees — % of workers charged, fee as % of monthly wage</li><li><b>AL301</b> Working hours — max hrs/week, % of weeks over</li><li><b>AL302</b> Consecutive days — max consecutive days, % of workers</li></ul>The grade is computed automatically from these values.'}},
  {ko:{t:'⑤ 자동 등급 산정 규칙',b:'각 항목은 세 단계 응답 중 <b>가장 심각한 위반</b>으로 등급이 정해집니다: Conformance → Minor → Major → Priority 순으로 심각.<br><br>신규협력사 탭 총점: <b>85점↑ PASS / 70~84 CONDITIONAL / 그 외 FAIL</b>. 필수항목 Priority 시 즉시 FAIL, 근로시간(A0301) Priority 시 CONDITIONAL.'},
   en:{t:'⑤ Auto-Grading Rules',b:'Each item takes the <b>most severe violation</b> among its three steps: Conformance → Minor → Major → Priority.<br><br>New-Supplier total: <b>≥85 PASS / 70–84 CONDITIONAL / else FAIL</b>. A Priority on a mandatory item = immediate FAIL; a Priority on Working Hours (A0301) = CONDITIONAL.'}},
  {ko:{t:'⑥ 사진·메모 첨부',b:'각 질문에 📷로 증거 사진을, 메모 아이콘으로 코멘트를 남길 수 있습니다. 사진·메모는 세션에 저장되고 Excel 내보내기에도 반영됩니다.'},
   en:{t:'⑥ Attach Photos & Notes',b:'On each question you can attach evidence photos (📷) and leave notes. Both are saved to the session and included in the Excel export.'}},
  {ko:{t:'⑦ 시정조치계획(CAP) 작성',b:'위반(Conformance 아님) 항목은 홈의 <b>📋 시정조치계획(CAP)</b>에 자동 수집됩니다. 각 건에 근본원인·시정조치·담당·목표일·상태를 기록하고 <b>내보내기</b>로 저장합니다.'},
   en:{t:'⑦ Corrective Action Plan (CAP)',b:'Non-conformant items are collected automatically under <b>📋 Corrective Action Plan (CAP)</b> on home. Record root cause, action, owner, target date and status for each, then <b>Export</b>.'}},
  {ko:{t:'⑧ 마무리 — 팀 공유 & 내보내기',b:'점검이 끝나면 <b>Excel 내보내기</b>로 결과를, <b>CAP 내보내기</b>로 시정계획을 저장합니다. 팀 공유 코드를 쓰면 PC에서 <b>팀 기록</b>으로 불러와 함께 검토·내보낼 수 있습니다.'},
   en:{t:'⑧ Wrap Up — Team Share & Export',b:'When done, save results via <b>Export to Excel</b> and the plan via <b>CAP Export</b>. With a team share code you can load the audit on a PC via <b>Team Records</b> to review and export together.'}},
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
    bodyHtml=`<p class="man-intro">${U.intro}</p>`+MANUAL_SECTIONS.map(s=>{const c=s[L];const src='manual/'+(L==='en'?'en/':'')+s.img.split('/').pop();return`
      <div class="man-sec">
        <div class="man-h"><span class="man-num">${s.n}</span><span class="man-t">${c.title}</span></div>
        <p class="man-desc">${c.desc}</p>
        <img class="man-img" src="${src}" alt="${c.title}" loading="lazy" onclick="viewManualImg('${src}')">
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

// ═══════════════════════════════════════════════════════════
//  팀 공유 — 점검 기록 서버 백업/불러오기 (Netlify Blobs)
//  점검마다 '공유 코드(shareCode)'를 설정하면 저장 시 그 코드로 서버에
//  자동 백업된다. 랜딩/팀 화면에서 같은 코드를 입력하면 그 기록들을 불러온다.
//  코드가 곧 접근 키 — 코드를 아는 사람만 볼 수 있다(별도 비밀키 없음).
//  ※ 사진은 용량 문제로 서버 백업에서 제외(기기에는 유지).
// ═══════════════════════════════════════════════════════════
let _teamTimer=null,_teamStatus='';   // ''|'saving'|'ok'|'err'
let _teamList=null,_teamBusy=false,_teamErr='',_teamViewCode='',_teamExporting=false,_teamSel={};

// 공유 코드 정규화 — Blobs 키 경로에 안전한 문자만 (영문 대문자·숫자·-·_)
function sanitizeShare(c){return String(c||'').trim().toUpperCase().replace(/[^A-Z0-9_-]/g,'');}

// 저장 시 자동 백업 — 이 점검에 '공유 코드'가 설정된 경우에만 서버로 보낸다.
function teamAutoSync(meta){
  const code=sanitizeShare(S.shareCode);
  if(!code||!S.vendorCode||!S.auditType)return;
  clearTimeout(_teamTimer);
  _teamTimer=setTimeout(()=>{teamPush(code,meta).catch(()=>{});},2000); // 2초 디바운스
}
async function teamPush(code,meta){
  _teamStatus='saving';
  try{
    const sess={...S,photos:{}}; // 사진 제외
    const res=await fetch('/api/team?action=save',{
      method:'POST',headers:{'content-type':'application/json'},
      body:JSON.stringify({shareCode:code,session:sess,meta:{
        code:S.vendorCode,supplierName:S.supplierName||'',subsidiary:S.subsidiary||'',gbm:S.gbm||'',
        country:S.country,lang:S.lang,auditType:S.auditType,
        rate:(meta&&meta.rate!==undefined)?meta.rate:null,
        done:meta?meta.done:null,total:meta?meta.total:null,
        updated:new Date().toISOString()}})
    });
    _teamStatus=res.ok?'ok':'err';
  }catch(e){_teamStatus='err';}
}

// 랜딩/팀 화면에서 공유 코드로 기록 목록 조회
function teamRefresh(){
  const code=sanitizeShare(_teamViewCode);
  if(!code){_teamErr='nocode';_teamList=null;render();return Promise.resolve();}
  _teamBusy=true;_teamErr='';_teamSel={};render();
  return fetch('/api/team?action=list&shareCode='+encodeURIComponent(code))
    .then(r=>r.json().then(data=>{if(!r.ok)throw new Error(data.error||r.status);_teamList=data.sessions||[];}))
    .catch(e=>{_teamErr=String(e.message||e);_teamList=null;})
    .finally(()=>{_teamBusy=false;render();});
}
// 공유 코드 + 협력사코드로 개별 기록 불러오기
async function teamLoad(vendorCode){
  const code=sanitizeShare(_teamViewCode);
  if(!code)return;
  _teamBusy=true;render();
  try{
    const res=await fetch('/api/team?action=get&shareCode='+encodeURIComponent(code)+'&vendor='+encodeURIComponent(vendorCode));
    const data=await res.json();
    if(!res.ok)throw new Error(data.error||res.status);
    const loaded=data.session;
    // 이 기기에 같은 코드 세션이 있으면 사진은 로컬 것을 유지
    try{const local=JSON.parse(localStorage.getItem('vap_'+vendorCode)||'null');if(local&&local.photos)loaded.photos=local.photos;}catch(e2){}
    S={...initState(),...loaded,screen:loaded.auditType?'home':'pick'};
    _teamBusy=false;
    render();window.scrollTo(0,0);
    return;
  }catch(e){_teamErr=String(e.message||e);}
  _teamBusy=false;render();
}
// 공유 코드의 특정 기록을 서버에서 삭제
async function teamDelete(vendorCode){
  const code=sanitizeShare(_teamViewCode);
  if(!code)return;
  const en=S.lang==='en';
  if(!confirm(en?`Delete audit "${vendorCode}" under code ${code}? This removes the server backup and cannot be undone.`:`공유 코드 ${code}의 점검 "${vendorCode}"을(를) 삭제할까요? 서버 백업이 제거되며 되돌릴 수 없습니다.`))return;
  _teamBusy=true;render();
  try{
    const res=await fetch('/api/team?action=delete',{method:'POST',headers:{'content-type':'application/json'},
      body:JSON.stringify({shareCode:code,vendor:vendorCode})});
    const data=await res.json().catch(()=>({}));
    if(!res.ok)throw new Error(data.error||res.status);
    if(_teamList)_teamList=_teamList.filter(x=>x.code!==vendorCode);
    delete _teamSel[vendorCode];
  }catch(e){_teamErr=String(e.message||e);}
  _teamBusy=false;render();
}
// 공유 코드 입력 → 팀 기록 화면 열고 조회
function teamOpenCode(code){
  _teamViewCode=sanitizeShare(code);
  _teamList=null;_teamErr='';
  S.screen='team';render();window.scrollTo(0,0);
  if(_teamViewCode)teamRefresh();
}
// 팀 화면 내 코드 입력창에서 조회
function teamSetViewCode(){
  const el=document.getElementById('teamCodeInput');
  _teamViewCode=sanitizeShare(el?el.value:'');
  _teamList=null;_teamErr='';
  render();
  if(_teamViewCode)teamRefresh();
}
// 공유 코드의 모든 점검을 각각 엑셀(CSV) 파일로 일괄 다운로드
function teamToggleSel(vendorCode){ _teamSel[vendorCode]=!_teamSel[vendorCode]; render(); }
function teamSelCount(){ return (_teamList||[]).filter(m=>_teamSel[m.code]).length; }
// selOnly=true → 선택된 것만, 아니면 전체
async function teamExportAll(selOnly){
  const code=sanitizeShare(_teamViewCode);
  if(!code||!_teamList||!_teamList.length||_teamExporting)return;
  const ko=S.lang!=='en';
  const list=selOnly?_teamList.filter(m=>_teamSel[m.code]):_teamList;
  if(!list.length){alert(ko?'선택된 기록이 없습니다.':'No records selected.');return;}
  _teamExporting=true;render();
  const savedS=S;   // 현재 세션 보존 (내보내기 로직이 전역 S를 사용하므로 임시 교체)
  let ok=0;
  for(const m of list){
    try{
      const res=await fetch('/api/team?action=get&shareCode='+encodeURIComponent(code)+'&vendor='+encodeURIComponent(m.code));
      const data=await res.json();
      if(!res.ok||!data.session)continue;
      S={...initState(),...data.session};
      exportCSV();  // vendorCode 포함 파일명으로 다운로드
      ok++;
      await new Promise(r=>setTimeout(r,700)); // 브라우저 다중 다운로드 간격
    }catch(e){/* 개별 실패 무시 */}
  }
  S=savedS;_teamExporting=false;render();
  alert(ko?`${ok}건의 점검을 엑셀(CSV) 파일로 저장했습니다.`:`Saved ${ok} audit(s) as Excel (CSV) files.`);
}

// ═══════════════════════════════════════════════════════════
//  관리자 — 전체 점검 기록 조회 (ADMIN_KEY 서버 검증 /api/admin-results)
//  모든 공유코드의 기록을 한 번에 모아 본다. 개별 열기/내보내기는 team get 재사용.
// ═══════════════════════════════════════════════════════════
const ADMIN_KEY_LS='vap_admin_key';
let _adminKey='',_adminList=null,_adminBusy=false,_adminErr='',_adminExporting=false,_adminSel={};
function adminSelKeyOf(m){return m.shareCode+'|'+m.code;}
function adminOpen(){
  try{_adminKey=localStorage.getItem(ADMIN_KEY_LS)||'';}catch(e){_adminKey='';}
  _adminList=null;_adminErr='';_adminSel={};
  S.screen='admin';render();window.scrollTo(0,0);
  if(_adminKey)adminRefresh();
}
function adminSetKey(){
  const el=document.getElementById('adminKeyInput');
  _adminKey=(el?el.value:'').trim();
  try{localStorage.setItem(ADMIN_KEY_LS,_adminKey);}catch(e){}
  _adminList=null;_adminErr='';render();
  if(_adminKey)adminRefresh();
}
function adminRefresh(){
  if(!_adminKey){_adminErr='nokey';_adminList=null;render();return Promise.resolve();}
  _adminBusy=true;_adminErr='';_adminSel={};render();
  return fetch('/api/admin-results',{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify({adminKey:_adminKey})})
    .then(r=>r.json().then(data=>{if(!r.ok)throw new Error(data.error||r.status);_adminList=data.sessions||[];}))
    .catch(e=>{_adminErr=String(e.message||e);_adminList=null;})
    .finally(()=>{_adminBusy=false;render();});
}
async function adminLoad(shareCode,vendor){
  _adminBusy=true;render();
  try{
    const res=await fetch('/api/team?action=get&shareCode='+encodeURIComponent(shareCode)+'&vendor='+encodeURIComponent(vendor));
    const data=await res.json();
    if(!res.ok)throw new Error(data.error||res.status);
    const loaded=data.session;
    try{const local=JSON.parse(localStorage.getItem('vap_'+vendor)||'null');if(local&&local.photos)loaded.photos=local.photos;}catch(e2){}
    S={...initState(),...loaded,screen:loaded.auditType?'home':'pick'};
    _adminBusy=false;render();window.scrollTo(0,0);return;
  }catch(e){_adminErr=String(e.message||e);}
  _adminBusy=false;render();
}
function adminToggleSel(k){_adminSel[k]=!_adminSel[k];render();}
function adminSelCount(){return (_adminList||[]).filter(m=>_adminSel[adminSelKeyOf(m)]).length;}
async function adminExportAll(selOnly){
  if(!_adminList||!_adminList.length||_adminExporting)return;
  const ko=S.lang!=='en';
  const list=selOnly?_adminList.filter(m=>_adminSel[adminSelKeyOf(m)]):_adminList;
  if(!list.length){alert(ko?'선택된 기록이 없습니다.':'No records selected.');return;}
  _adminExporting=true;render();
  const savedS=S;let ok=0;
  for(const m of list){
    try{
      const res=await fetch('/api/team?action=get&shareCode='+encodeURIComponent(m.shareCode)+'&vendor='+encodeURIComponent(m.code));
      const data=await res.json();
      if(!res.ok||!data.session)continue;
      S={...initState(),...data.session};
      exportCSV();ok++;
      await new Promise(r=>setTimeout(r,700));
    }catch(e){/* 개별 실패 무시 */}
  }
  S=savedS;_adminExporting=false;render();
  alert(ko?`${ok}건의 점검을 엑셀(CSV) 파일로 저장했습니다.`:`Saved ${ok} audit(s) as Excel (CSV) files.`);
}
function screenAdmin(){
  const ko=S.lang!=='en';
  const fmt=iso=>{if(!iso)return'—';const d=new Date(iso);return`${d.getMonth()+1}/${d.getDate()} ${String(d.getHours()).padStart(2,'0')}:${String(d.getMinutes()).padStart(2,'0')}`;};
  const typeLbl=t=>t==='nsup'?(ko?'신규협력사':'New Supplier'):(ko?'중점관리':'Major');
  let body='';
  if(!_adminKey){
    body=`<div class="team-note">${ko?'관리자 키(ADMIN_KEY)를 입력하면 <b>모든 공유코드의 전체 점검 기록</b>을 한 번에 볼 수 있습니다.':'Enter the admin key (ADMIN_KEY) to view <b>all audits across every share code</b> at once.'}</div>`;
  }else if(_adminBusy){
    body=`<div class="team-note">${ko?'불러오는 중…':'Loading…'}</div>`;
  }else if(_adminErr){
    body=`<div class="team-note" style="border-color:var(--P);color:var(--P)">⚠ ${_adminErr==='nokey'?(ko?'관리자 키를 입력하세요':'Enter the admin key'):_adminErr==='unauthorized'?(ko?'관리자 키가 올바르지 않습니다':'Invalid admin key'):aiEsc(_adminErr)}<br><span style="font-size:12px;color:var(--muted)">${ko?'(로컬 file:// 로 열면 실패합니다. 배포된 사이트에서 사용하세요.)':'(Fails on local file:// — use the deployed site.)'}</span></div>`;
  }else if(_adminList===null){
    body=`<div class="team-note">${ko?'위 조회 버튼을 눌러 전체 기록을 불러오세요.':'Tap Load to fetch all records.'}</div>`;
  }else if(_adminList.length===0){
    body=`<div class="team-note">${ko?'저장된 점검 기록이 없습니다.':'No audit records found.'}</div>`;
  }else{
    body=_adminList.map(m=>{const k=adminSelKeyOf(m);return`
      <div class="team-card${_adminSel[k]?' sel':''}" onclick="adminLoad('${aiEsc(m.shareCode)}','${aiEsc(m.code)}')">
        <input type="checkbox" class="team-chk" ${_adminSel[k]?'checked':''} onclick="event.stopPropagation();adminToggleSel('${aiEsc(k)}')" title="${ko?'선택':'Select'}">
        <div class="team-info">
          <div class="team-code"><span class="admin-scode">${aiEsc(m.shareCode)}</span> ${aiEsc(m.code)}${m.supplierName?` <span style="font-weight:600;color:var(--muted);font-size:12px">· ${aiEsc(m.supplierName)}</span>`:''}</div>
          <div class="team-meta">${[m.subsidiary,m.gbm].filter(Boolean).map(aiEsc).join(' / ')||aiEsc(m.country||'—')} · ${typeLbl(m.auditType)} · ${m.done!=null?`${m.done}/${m.total}`:'—'} · ${fmt(m.updated)}</div>
        </div>
        ${m.rate!=null?`<span class="team-rate">${m.rate}%</span>`:''}
        <span class="team-open">${ko?'열기':'Open'}</span>
      </div>`;}).join('');
  }
  return`${nav(ko?'🔐 관리자 · 전체 기록':'🔐 Admin · All Audits',"S.screen='landing';render()")}
  <div class="content">
    <span class="stag" style="background:var(--dark)">${ko?'관리자':'Admin'}</span>
    <h2 class="stitle">${ko?'전체 점검 기록':'All Audits'}</h2>
    <p class="ssub">${ko?'모든 공유코드에 백업된 점검 기록을 한 번에 조회합니다. 관리자 키를 아는 사람만 볼 수 있습니다.':'View every audit backed up under any share code. Only holders of the admin key can see this.'}</p>
    <div class="team-keyrow">
      <input id="adminKeyInput" type="password" placeholder="${ko?'관리자 키 (ADMIN_KEY)':'Admin key (ADMIN_KEY)'}" value="${aiEsc(_adminKey)}" onkeydown="if(event.key==='Enter')adminSetKey()">
      <button onclick="adminSetKey()">${ko?'조회':'Load'}</button>
      <button onclick="adminRefresh()" ${_adminKey?'':'disabled'}>↻</button>
    </div>
    ${(_adminList&&_adminList.length)?`<button class="team-export-all" onclick="adminExportAll(${adminSelCount()>0})" ${_adminExporting?'disabled':''}>${_adminExporting?(ko?'⟳ 저장 중…':'⟳ Saving…'):(adminSelCount()>0?(ko?`📊 선택 저장 (${adminSelCount()}건)`:`📊 Export Selected (${adminSelCount()})`):(ko?`📊 엑셀 일괄 저장 (${_adminList.length}건)`:`📊 Export All (${_adminList.length})`))}</button>`:''}
    ${body}
  </div>`;
}

// ═══════════════════════════════════════════════════════════
//  접근 잠금 — 내부 사용자 전용 비밀번호 (서버 검증 /api/auth)
//  · 초기 비밀번호: Netlify 환경변수 APP_PASSWORD
//  · 관리자(ADMIN_KEY 보유)는 잠금 화면에서 비밀번호 변경 가능
//  · file:// 로컬 개발은 잠금 제외
// ═══════════════════════════════════════════════════════════
const AUTH_KEY='vap_auth';
async function authCheck(pw){
  const res=await fetch('/api/auth',{method:'POST',headers:{'content-type':'application/json'},
    body:JSON.stringify({action:'check',password:pw})});
  const data=await res.json().catch(()=>({}));
  if(!res.ok)throw new Error(data.error||('HTTP '+res.status));
  return !!data.ok;
}
function lockShow(msg){
  let el=document.getElementById('lockScreen');
  if(!el){
    el=document.createElement('div');
    el.id='lockScreen';
    document.body.appendChild(el);
  }
  el.innerHTML=`
    <div class="lock-card">
      <div class="lock-ic">🔒</div>
      <div class="lock-t">On-Site Audit</div>
      <div class="lock-d">내부 사용자 전용입니다.<br>비밀번호를 입력하세요.</div>
      <input id="lockPw" type="password" placeholder="비밀번호" autocomplete="current-password"
        onkeydown="if(event.key==='Enter')lockTry()">
      <button class="lock-btn" onclick="lockTry()">들어가기</button>
      <div id="lockMsg" class="lock-msg">${msg||''}</div>
      <button class="lock-admin-toggle" onclick="document.getElementById('lockAdmin').classList.toggle('ai-hidden')">관리자: 비밀번호 변경</button>
      <div id="lockAdmin" class="lock-admin ai-hidden">
        <input id="lockAdminKey" type="password" placeholder="관리자 키 (ADMIN_KEY)">
        <input id="lockNewPw" type="text" placeholder="새 비밀번호">
        <button class="lock-btn sub" onclick="lockSetPw()">변경</button>
      </div>
    </div>`;
  el.style.display='flex';
  setTimeout(()=>{const i=document.getElementById('lockPw');if(i)i.focus();},50);
}
function lockHide(){const el=document.getElementById('lockScreen');if(el)el.style.display='none';}
async function lockTry(){
  const pw=(document.getElementById('lockPw').value||'').trim();
  const m=document.getElementById('lockMsg');
  if(!pw)return;
  m.textContent='확인 중…';
  try{
    const ok=await authCheck(pw);
    if(ok){localStorage.setItem(AUTH_KEY,JSON.stringify({pw,ts:Date.now()}));lockHide();}
    else m.textContent='❌ 비밀번호가 올바르지 않습니다.';
  }catch(e){m.textContent='⚠ 서버 확인 실패: '+e.message;}
}
async function lockSetPw(){
  const key=(document.getElementById('lockAdminKey').value||'').trim();
  const np=(document.getElementById('lockNewPw').value||'').trim();
  const m=document.getElementById('lockMsg');
  if(!key||!np){m.textContent='관리자 키와 새 비밀번호를 입력하세요.';return;}
  m.textContent='변경 중…';
  try{
    const res=await fetch('/api/auth',{method:'POST',headers:{'content-type':'application/json'},
      body:JSON.stringify({action:'set',adminKey:key,newPassword:np})});
    const data=await res.json().catch(()=>({}));
    if(res.ok&&data.ok){m.textContent='✅ 변경되었습니다. 새 비밀번호로 입장하세요.';document.getElementById('lockAdmin').classList.add('ai-hidden');}
    else m.textContent='❌ '+(data.error||'변경 실패 (관리자 키 확인)');
  }catch(e){m.textContent='⚠ 서버 오류: '+e.message;}
}
(function authBoot(){
  if(location.protocol==='file:')return;                       // 로컬 개발 통과
  let saved=null;try{saved=JSON.parse(localStorage.getItem(AUTH_KEY))||null;}catch(e){}
  if(saved&&saved.pw){
    // 백그라운드 재검증 — 비밀번호가 바뀌었으면 다시 잠금
    authCheck(saved.pw).then(ok=>{
      if(!ok){localStorage.removeItem(AUTH_KEY);lockShow('비밀번호가 변경되었습니다. 다시 입력하세요.');}
    }).catch(()=>{/* 오프라인 등 — 기존 인증 유지 */});
  }else{
    lockShow();
  }
})();

function screenTeam(){
  const ko=S.lang!=='en';
  const code=sanitizeShare(_teamViewCode);
  const fmt=iso=>{if(!iso)return'—';const d=new Date(iso);return`${d.getMonth()+1}/${d.getDate()} ${String(d.getHours()).padStart(2,'0')}:${String(d.getMinutes()).padStart(2,'0')}`;};
  const typeLbl=t=>t==='nsup'?(ko?'신규협력사':'New Supplier'):(ko?'중점관리':'Major');
  let body='';
  if(!code){
    body=`<div class="team-note">${ko
      ?'점검 기록을 불러오려면 <b>공유 코드</b>를 입력하세요.<br>점검 설정 화면에서 넣은 공유 코드를 여기에 입력하면, 그 코드로 백업된 기록들이 표시됩니다.'
      :'Enter a <b>share code</b> to load audits.<br>Type the share code you set on the audit setup screen to see records backed up under it.'}</div>`;
  }else if(_teamBusy){
    body=`<div class="team-note">${ko?'불러오는 중…':'Loading…'}</div>`;
  }else if(_teamErr){
    body=`<div class="team-note" style="border-color:var(--P);color:var(--P)">⚠ ${_teamErr==='nocode'?(ko?'공유 코드를 입력하세요':'Enter a share code'):aiEsc(_teamErr)}<br><span style="font-size:12px;color:var(--muted)">${ko?'(로컬 file:// 로 열면 실패합니다. 배포된 사이트에서 사용하세요.)':'(Fails on local file:// — use the deployed site.)'}</span></div>`;
  }else if(_teamList===null){
    body=`<div class="team-note">${ko?'위 조회 버튼을 눌러 기록을 불러오세요.':'Tap Load to fetch records.'}</div>`;
  }else if(_teamList.length===0){
    body=`<div class="team-note">${ko?`<b>${aiEsc(code)}</b> 코드로 저장된 점검 기록이 없습니다.`:`No audits saved under code <b>${aiEsc(code)}</b>.`}</div>`;
  }else{
    body=_teamList.map(m=>`
      <div class="team-card${_teamSel[m.code]?' sel':''}" onclick="teamLoad('${aiEsc(m.code)}')">
        <input type="checkbox" class="team-chk" ${_teamSel[m.code]?'checked':''} onclick="event.stopPropagation();teamToggleSel('${aiEsc(m.code)}')" title="${ko?'선택':'Select'}">
        <div class="team-info">
          <div class="team-code">${aiEsc(m.code)}${m.supplierName?` <span style="font-weight:600;color:var(--muted);font-size:12px">· ${aiEsc(m.supplierName)}</span>`:''}</div>
          <div class="team-meta">${[m.subsidiary,m.gbm].filter(Boolean).map(aiEsc).join(' / ')||aiEsc(m.country||'—')} · ${typeLbl(m.auditType)} · ${m.done!=null?`${m.done}/${m.total}`:'—'} · ${fmt(m.updated)}</div>
        </div>
        ${m.rate!=null?`<span class="team-rate">${m.rate}%</span>`:''}
        <span class="team-open">${ko?'열기':'Open'}</span>
        <button class="team-del" title="${ko?'삭제':'Delete'}" onclick="event.stopPropagation();teamDelete('${aiEsc(m.code)}')">🗑</button>
      </div>`).join('');
  }
  return`${nav(ko?'👥 팀 공유 기록':'👥 Team Audits',"S.screen='landing';render()")}
  <div class="content">
    <span class="stag" style="background:var(--C)">${ko?'공유 코드':'Share Code'}</span>
    <h2 class="stitle">${ko?'팀 점검 기록':'Shared Audits'}</h2>
    <p class="ssub">${ko?'공유 코드로 백업된 점검 기록을 불러와 이어서 작업할 수 있습니다. 사진은 서버 백업에서 제외됩니다.':'Load audits backed up under a share code and continue working. Photos are excluded from server backups.'}</p>
    <div class="team-keyrow">
      <input id="teamCodeInput" type="text" placeholder="${ko?'공유 코드 (예: SEHC, SIEL-C)':'Share code (e.g. SEHC, SIEL-C)'}" value="${aiEsc(code)}" oninput="this.value=this.value.toUpperCase()" onkeydown="if(event.key==='Enter')teamSetViewCode()">
      <button onclick="teamSetViewCode()">${ko?'조회':'Load'}</button>
      <button onclick="teamRefresh()" ${code?'':'disabled'}>↻</button>
    </div>
    ${(_teamList&&_teamList.length)?`<button class="team-export-all" onclick="teamExportAll(${teamSelCount()>0})" ${_teamExporting?'disabled':''}>${_teamExporting?(ko?'⟳ 저장 중…':'⟳ Saving…'):(teamSelCount()>0?(ko?`📊 선택 저장 (${teamSelCount()}건)`:`📊 Export Selected (${teamSelCount()})`):(ko?`📊 엑셀 일괄 저장 (${_teamList.length}건)`:`📊 Export All (${_teamList.length})`))}</button>`:''}
    ${body}
  </div>`;
}
