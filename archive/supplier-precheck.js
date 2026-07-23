// ============================================================================
// 협력사 사전점검 (SUPPLIER PRE-CHECK) — 2026-07-21 앱에서 제거하여 보관
// ----------------------------------------------------------------------------
// 이 기능은 감사자가 협력사에게 `?sup=<vendor>` 링크를 보내면, 협력사가
// 필요 서류 준비 현황을 체크(y/n/na)한 뒤 `?supresult=<base64>` 결과 링크를
// 되돌려주고, 감사자가 그 결과를 각 항목의 Document Review에 배지로 반영하는
// 흐름이었다. 나중에 다시 쓸 수 있도록 전체 코드를 그대로 보관한다.
//
// ── 재통합(re-integrate) 시 필요한 "연결부(stitches)" ──
// 아래 self-contained 블록을 app.js에 다시 붙인 뒤, 다음을 복원해야 한다:
//  1) render() 디스패치에 화면 arm 3개 추가:
//       S.screen==='supgen'?screenSupGen():
//       S.screen==='supplier'?screenSupplier():
//       S.screen==='supimport'?screenSupImport():
//  2) saveToStorage 가드 목록에 'supplier','supimport' 추가(영속화 제외).
//  3) 페이지 로드 URL 파라미터 감지 IIFE 복원(?sup= / ?supresult= → S.screen).
//  4) authBoot()에 비밀번호 잠금 우회:  if(URLSearchParams…get('sup'))return;
//  5) 홈(audit 탭) 진입 버튼:  onclick="S.screen='supgen';render()".
//  6) initState에  supplierChecks:{}  추가.
//  7) docRefBox(id)에 사전체크 배지 로직 복원(S.supplierChecks + supKey 사용).
//  8) style.css의 .sup-hero* / .sup-doc-* / .sup-btn* / .sup-grp* / .sup-tog /
//     .sup-check-badge / .link-box 규칙 복원.
//  9) 매뉴얼 MANUAL_SECTIONS의 사전점검 카드(share1/share2)와
//     PROCESS_SECTIONS ⑧의 사전점검 안내 문장 복원(+스크린샷 share1/share2.png).
//
// 의존: DOC_LIST / DOC_LIST_KO (data/docs.js, 앱에 그대로 존재), render(), nav(),
//       goHome(), S.vendorCode, S.lang, S.supplierChecks.
// 주의(보안): screenSupplier()는 _supVendor(=?sup= 값)를 이스케이프 없이
//       렌더링한다(반사형 XSS). 재사용 시 aiEsc(_supVendor)로 감쌀 것.
// ============================================================================

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
