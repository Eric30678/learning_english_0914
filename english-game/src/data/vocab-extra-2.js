/* ═══════════════════════════════════════════════════════
   vocab-extra-2.js — 新單字庫 第二批
   載入順序：… → dict.js → vocab-extra.js → vocab-extra-2.js

   第一批補了 602 字（商務核心）。這一批往外擴：
   趨勢圖表 · 保險風險 · 銀行投資 · 房地產 · 醫療
   教育 · 環境能源 · 餐飲零售 · 媒體活動 · 公共事務
   再加第二批片語動詞、動名搭配、易混淆字組。

   目標是把題庫推到 3,000 附近——多益 700 分的字彙門檻。

   載入時會自動去重：
     已經在 dict 裡的（章節教過）→ 移除
     已經在第一批 extraVocab 裡的 → 移除
     中文撞號的 → 保留第一個，其餘移除（配對不能有兩張正解）
   ═══════════════════════════════════════════════════════ */

(function(){
const MORE = {

/* ── 趨勢與圖表（多益圖表題必備）───────────────── */
'increase':'增加','decrease':'減少','decline':'下滑','soar':'飆升',
'plummet':'暴跌','surge':'激增','slump':'驟降','rebound':'反彈',
'peak':'高峰','trough':'谷底','stabilise':'趨於穩定','plateau':'進入平台期',
'level off':'持平','double':'加倍','triple':'成為三倍','halve':'減半',
'gradual':'漸進的','sharp':'急遽的','steady':'平穩的','slight':'微幅的',
'dramatic':'劇烈的','upward':'向上的','downward':'向下的','trend':'趨勢',
'ratio':'比率','median':'中位數','fraction':'一小部分','quarter':'季度四分之一',
'horizontal':'水平的','vertical':'垂直的','column':'欄位長條','axis':'座標軸',
'segment':'區塊','overview':'概覽','breakdown':'分項明細','indicator':'指標',
'metric':'衡量指標','baseline':'基準線','projection':'推估值','deviation':'偏離',
'cumulative':'累計的','aggregate':'總計','offset':'抵銷','outperform':'表現優於',
'underperform':'表現不如','moderate growth':'溫和成長','flat':'持平的','volatile':'波動大的',

/* ── 進階商務動詞 ───────────────────────────────── */
'accelerate':'加速','accommodate':'容納配合','accumulate':'累積','adhere':'遵守黏附',
'administer':'管理執行','advocate':'倡議','affiliate':'加盟結盟','alleviate':'緩解',
'alter':'更動','amplify':'放大','arise':'出現','ascertain':'查明',
'attribute':'歸因於','augment':'增補','avert':'避免','bolster':'支撐',
'broaden':'拓寬','capitalise':'善用','cease':'停止','certify':'認證',
'compensate for':'彌補','compile':'編纂','comprise':'由…組成','concede':'承認讓步',
'condense':'濃縮','confront':'面對','contradict':'牴觸','convert':'轉換',
'curb':'抑制','curtail':'縮減','deem':'認定','defer':'延後',
'denote':'表示','depict':'描繪','deprive':'剝奪','derive':'衍生自',
'diagnose':'診斷','differentiate':'區隔','discard':'丟棄','dispatch':'派送',
'disrupt':'打亂','divert':'轉移改道','elaborate':'詳述','embrace':'採納擁抱',
'endure':'忍受持續','entail':'牽涉','erode':'侵蝕','exempt':'豁免',
'expedite':'加快處理','exploit':'利用開發','extract':'萃取取出','fabricate':'捏造製造',
'formulate':'擬定','foster':'培養','hinder':'阻礙','identify':'辨識出',
'ignite':'引發點燃','impair':'損害','induce':'誘發','inhibit':'抑制',
'inquire':'詢問','intervene':'介入','invoke':'援引','isolate':'隔離',
'levy':'課徵','magnify':'放大','mediate':'調解','mitigate':'減輕',
'nominate':'提名','outline':'概述','outsource':'外包','overhaul':'全面翻修',
'overlap':'重疊','penalise':'處罰','permeate':'滲透','persist':'持續存在',
'preclude':'排除阻止','prescribe':'開立規定','presume':'推定','proclaim':'宣告',
'quantify':'量化','refine':'精煉優化','refute':'反駁','reimburse for':'就…核銷',
'relinquish':'放棄','render':'使成為提供','replenish':'補足','reside':'居住位於',
'revise':'修訂','revoke':'撤銷','scrutinise':'審視','solicit':'徵求',
'specify':'明確指出','speculate':'臆測','sponsor':'贊助','suspend':'暫停',
'tackle':'著手處理','transcend':'超越','uphold':'維護','verify':'核實',

/* ── 進階商務名詞 ───────────────────────────────── */
'accessibility':'可及性','accountability':'當責','acquisition':'收購','adaptation':'調整適應',
'adjustment':'調整','affiliate':'關係企業','aftermath':'後續影響','alliance':'聯盟',
'allocation':'配額','ambition':'企圖心','analyst':'分析師','anomaly':'異常',
'appliance':'家電','applicant pool':'應徵者池','archive':'檔案庫','array':'一系列',
'aspiration':'抱負','assembly line':'生產線','attribute':'特質','autonomy':'自主權',
'backlog':'積壓待辦','barrier':'障礙','beneficiary':'受益人','bid':'投標',
'blueprint':'藍圖','boundary':'界線','bulletin':'公告欄','bureaucracy':'官僚體系',
'catalyst':'催化因素','ceiling':'上限','clientele':'客戶群','coalition':'結盟',
'compilation':'彙編','concession':'讓步','condition':'條件狀態','conglomerate':'企業集團',
'consortium':'聯合體','contingency':'應變','continuity':'連續性','correlation':'關聯',
'credibility':'可信度','custody':'保管','deadline extension':'展延期限','deficiency':'缺失',
'delegation':'授權','demolition':'拆除','denominator':'分母','depot':'倉儲站',
'deterrent':'嚇阻','dimension':'面向尺寸','directive':'指令','disclosure':'揭露',
'discretion':'裁量權','disparity':'落差','dossier':'檔案資料','duplicate':'副本',
'emergence':'出現','emphasis':'重點','endeavour':'努力','entity':'實體',
'equilibrium':'均衡','equivalent':'等同物','escalation':'升高','excerpt':'摘錄',
'exclusion':'排除','expiry':'到期','extension':'延長','fallback':'退路',
'foundation':'基礎','fragment':'片段','frequency':'頻率','friction':'摩擦',
'glossary':'字彙表','grievance':'申訴','hazard':'危害','heading':'標題',
'highlight':'重點','horizon':'視野期限','hurdle':'難關','implementation':'落實',
'imprint':'印記','inception':'開端','inclination':'傾向','index':'指數索引',
'inference':'推論','influx':'湧入','infrastructure':'基礎建設','ingredient':'成分',
'inquiry':'查詢調查','insight':'洞見','instance':'例子','institution':'機構',
'intake':'攝取招收','intent':'意圖','interval':'間隔','intervention':'介入措施',
'jargon':'行話','juncture':'關頭','layout':'版面配置','legacy':'遺留資產',
'leverage':'槓桿影響力','liaison':'聯絡窗口','likelihood':'可能性','lump sum':'一次總額',
'magnitude':'規模量級','mainstream':'主流','mandate':'職權','manuscript':'手稿',
'medium':'媒介','memorandum':'備忘錄','metropolis':'大都會','momentum':'動能',
'narrative':'敘事','niche':'利基','norm':'常規','notion':'概念',
'nuisance':'困擾','objective':'目標','obstacle':'阻礙','offset':'抵銷項',
'omission':'疏漏','onset':'開始','outset':'一開始','overlap':'重疊處',
'oversight':'疏忽監督','paradigm':'典範','parameter':'參數','patron':'贊助者常客',
'payload':'載重','pinnacle':'頂峰','pipeline':'進行中案源','plight':'困境',
'practitioner':'從業人員','predecessor':'前任','prerequisite':'先決條件','prestige':'聲望',
'prevalence':'普及率','proponent':'支持者','proposition':'提案主張','proximity':'鄰近',
'quota':'配額','ramification':'連帶後果','recession':'景氣衰退','recipient':'領受人',
'reconciliation':'調節核對','redundancy payment':'資遣費','refinement':'優化','refuge':'庇護',
'regime':'制度政權','registry':'登記處','reimbursement claim':'核銷申請','remedy':'補救',
'repercussion':'後續衝擊','replica':'複製品','reputation':'名聲','resilience':'韌性',
'retrospect':'回顧','revision':'修訂版','rivalry':'競爭','rubric':'評分標準',
'sanction':'制裁核可','scenario':'情境','scheme':'方案','scope creep':'範圍蔓延',
'scrutiny':'嚴格檢視','setback':'挫折','severity':'嚴重程度','shortlist':'入圍名單',
'silhouette':'輪廓','snapshot':'快照概況','spectrum':'光譜範圍','stagnation':'停滯',
'stance':'立場','standstill':'停擺','stipulation':'約定條款','subsidiary company':'子公司',
'substance':'實質','succession':'接班','supplement':'補充品','surveillance':'監控',
'symposium':'研討會','synopsis':'綱要','tenure':'任期','terminology':'術語',
'testimony':'證言','trait':'特質','trajectory':'軌跡','transcript':'逐字稿',
'transparency':'透明度','turmoil':'動盪','uncertainty':'不確定性','underpinning':'根基',
'uptake':'採用率','utility':'效用','validation':'驗證','vicinity':'附近一帶',
'vigilance':'警覺','virtue':'優點美德','vocation':'職業志向','workaround':'替代做法',

/* ── 態度與人格形容詞 ───────────────────────────── */
'ambitious':'有企圖心','assertive':'果斷自信','attentive':'專注細心','cautious':'謹慎的',
'compassionate':'有同理心','conscientious':'盡責的','cooperative':'配合的','courteous':'有禮的',
'decisive':'果決的','dedicated':'投入的','diligent':'勤勉的','discreet':'謹慎守口',
'enthusiastic':'熱忱的','flexible-minded':'思考靈活','frank':'坦率的','genuine':'真誠的',
'hesitant':'猶豫的','humble':'謙遜的','impulsive':'衝動的','indifferent':'漠不關心',
'ingenious':'巧妙的','insightful':'有見地的','meticulous':'一絲不苟','modest':'謙虛的',
'objective-minded':'客觀的','optimistic':'樂觀的','outgoing':'外向的','patient':'有耐心的',
'perceptive':'敏銳的','persuasive':'有說服力','pessimistic':'悲觀的','pragmatic':'務實的',
'proactive':'主動積極','prudent':'審慎的','realistic':'務實實際','receptive':'樂於接受',
'resourceful':'機智多謀','sceptical':'存疑的','sincere':'誠懇的','stubborn':'固執的',
'supportive':'支持的','tactful':'有分寸的','tolerant':'包容的','trustworthy':'值得信任',
'versatile-minded':'多才多藝','vigilant':'警覺的','witty':'機智風趣',

/* ── 保險與風險 ─────────────────────────────────── */
'actuary':'精算師','adjuster':'理賠員','beneficiary clause':'受益人條款','coverage':'承保範圍',
'deductible':'自負額','endorsement rider':'附加條款','exclusion clause':'除外條款','exposure':'風險曝險',
'hazard assessment':'危害評估','indemnify':'賠償','insurable':'可保的','lapse':'失效',
'policyholder':'保戶','premium payment':'保費繳納','proof of loss':'損失證明','reinsurance':'再保險',
'renewal notice':'續保通知','risk profile':'風險輪廓','subrogation':'代位求償','underwriter':'核保人',
'claimant':'申請理賠人','contingent':'視情況而定','disclaimer':'免責聲明','force majeure':'不可抗力',
'liability cover':'責任保險','mitigation':'減損措施','peril':'危險事故','surveyor':'公證人',

/* ── 銀行與投資 ─────────────────────────────────── */
'annuity':'年金','arrears':'欠款','beneficial owner':'實質受益人','bond':'債券',
'brokerage':'券商手續費','clearing':'清算','compound interest':'複利','custodian':'保管機構',
'debit':'借記扣款','default':'違約','diversification':'分散投資','endowment':'捐贈基金',
'foreclosure':'法拍','hedge':'避險','inflation':'通膨','instalment plan':'分期方案',
'liquidate':'變現清算','maturity':'到期日','net worth':'淨值','payable':'應付款',
'portfolio manager':'投資經理','principal amount':'本金','quotation rate':'報價匯率','receivable':'應收款',
'remit':'匯出','securities':'有價證券','solvency':'償債能力','stake holding':'持股',
'statement of account':'帳戶明細','underwrite':'包銷承銷','yield curve':'殖利率曲線','withdraw funds':'提領資金',

/* ── 房地產與建築 ───────────────────────────────── */
'appraise':'鑑價','architect':'建築師','blueprint drawing':'施工圖','ceiling height':'樓高',
'commercial property':'商用不動產','corridor':'走廊','demolish':'拆除','elevation':'立面高程',
'escrow':'履約保證','excavation':'開挖','façade':'外牆立面','foundation slab':'基礎底板',
'freehold':'永久產權','ground floor':'一樓','inspection report':'查驗報告','leasehold':'租賃產權',
'occupant':'使用人','partition':'隔間','plumbing':'管線配管','premises inspection':'場勘',
'refurbish':'翻新','renovation':'整修','rent-free period':'免租期','residential':'住宅的',
'scaffolding':'鷹架','site survey':'現地勘查','sublet':'轉租','surveyor report':'測量報告',
'tenancy agreement':'租賃契約','utilities included':'含水電','vacant possession':'交屋空置','zoning':'土地分區',

/* ── 醫療與健康 ─────────────────────────────────── */
'ailment':'小病痛','allergy':'過敏','ambulance':'救護車','anaesthetic':'麻醉劑',
'antibiotic':'抗生素','chronic':'慢性的','clinic hours':'門診時間','consultation':'看診諮詢',
'contagious':'具傳染性','diagnosis':'診斷','dietary':'飲食的','dosage':'劑量',
'emergency room':'急診室','epidemic':'流行病','fatigue':'疲勞','hygiene':'衛生',
'immune':'免疫的','infection':'感染','injury':'傷害','nutrition':'營養',
'outpatient':'門診病人','pharmacist':'藥師','physician':'內科醫師','posture':'姿勢',
'practitioner clinic':'診所','recovery':'復原','referral letter':'轉診單','rehabilitation':'復健',
'remedy treatment':'療法','side effect':'副作用','specimen':'檢體','surgery':'手術',
'symptom relief':'症狀緩解','therapy':'治療','vaccination':'疫苗接種','ward':'病房',

/* ── 教育與訓練 ─────────────────────────────────── */
'accreditation':'認證資格','alumni':'校友','apprenticeship':'學徒制','assignment':'作業任務',
'campus':'校園','coursework':'平時作業','credential':'資格文件','curriculum vitae':'履歷',
'dissertation':'學位論文','enrolment':'註冊','faculty':'教職員','graduate':'畢業生',
'internship':'實習','lecture':'講課','mentor':'導師','pedagogy':'教學法',
'prerequisite course':'先修課','scholarship':'獎學金','semester':'學期','seminar session':'研討場次',
'syllabus':'課程大綱','transcript record':'成績單','tuition':'學費','tutorial':'輔導課',
'undergraduate':'大學部','vocational':'職業的','workshop session':'工作坊',

/* ── 環境與能源 ─────────────────────────────────── */
'biodegradable':'可生物分解','carbon footprint':'碳足跡','conservation':'保育','contamination':'污染',
'depletion':'耗竭','discharge waste':'排放廢水','ecosystem':'生態系','emission':'排放',
'energy efficiency':'能源效率','fossil fuel':'化石燃料','greenhouse gas':'溫室氣體','habitat':'棲地',
'hazardous waste':'有害廢棄物','incinerate':'焚化','landfill':'掩埋場','pollutant':'污染物',
'preservation':'保存','recycling rate':'回收率','renewable':'再生的','reservoir':'水庫',
'sanitation':'環境衛生','sewage':'污水','solar panel':'太陽能板','sustainable':'永續的',
'toxic':'有毒的','turbine':'渦輪機','ventilation':'通風','wastewater':'廢水',

/* ── 餐飲與零售 ─────────────────────────────────── */
'aisle display':'走道陳列','appetiser':'開胃菜','barcode':'條碼','beverage':'飲料',
'buffet':'自助餐','cashier':'收銀員','catering':'外燴','checkout counter':'結帳櫃檯',
'condiment':'調味料','cuisine':'菜系','cutlery':'餐具','dine in':'內用',
'expiry date':'有效期限','garnish':'裝飾配菜','gratuity':'小費','hospitality':'餐旅服務',
'ingredient list':'成分表','inventory count':'盤點','loyalty card':'集點卡','menu item':'菜單品項',
'perishable':'易腐的','portion':'份量','receipt printer':'收據機','refrigeration':'冷藏',
'reservation desk':'訂位櫃檯','seasonal special':'季節限定','shelf life':'保存期限','takeaway':'外帶',
'utensil':'器皿','venue capacity':'場地容量','waiting list':'候位名單','wholesaler':'批發商',

/* ── 媒體與活動 ─────────────────────────────────── */
'audience turnout':'到場人數','broadcast':'播送','circulation':'發行量','coverage report':'報導',
'deadline submission':'截稿','editorial':'社論','exhibitor':'參展商','feature article':'專題報導',
'headline':'頭條','interview transcript':'訪談紀錄','keynote':'主題演講','live stream':'直播',
'moderator':'主持人','panel discussion':'座談','podcast':'播客','press conference':'記者會',
'publicity':'曝光宣傳','rehearsal':'排演','registration desk':'報到處','screening':'放映',
'subscription rate':'訂閱費率','venue booking':'場地預訂','viewership':'收視','webinar':'線上研討會',

/* ── 政府與公共事務 ─────────────────────────────── */
'amendment bill':'修法草案','ballot':'選票','census':'普查','constituency':'選區',
'councillor':'議員','decree':'法令','electorate':'選民','embassy':'大使館',
'enact':'制定法律','franchise right':'選舉權','immigration office':'移民署','infrastructure project':'公共工程',
'legislature':'立法機關','licence renewal':'執照換發','municipal':'市政的','ordinance':'自治條例',
'permit application':'許可申請','petition':'請願','public sector':'公部門','ratify':'批准',
'referendum':'公投','regulatory body':'主管機關','subsidy scheme':'補助方案','taxpayer':'納稅人',
'tender notice':'招標公告','treaty':'條約','turnout rate':'投票率','welfare':'福利',

/* ── 片語動詞 第二批 ───────────────────────────── */
'abide by':'遵守','account to':'向…交代','back down':'讓步退讓','bank on':'指望',
'bear out':'證實','branch out':'拓展','build up':'累積','call for':'需要呼籲',
'carry over':'結轉','cash in on':'趁機獲利','chip in':'湊份子','clamp down':'嚴加取締',
'close down':'歇業','come down to':'歸結為','count on':'仰賴','cross out':'劃掉',
'cut off':'切斷','deal in':'經營買賣','dispose of':'處置掉','draw on':'汲取運用',
'drum up':'招攬','ease off':'放緩','fall through':'告吹','figure out':'想通',
'fill out':'填寫','flesh out':'充實細節','gear up':'準備就緒','get by':'勉強過活',
'give away':'贈送洩漏','go through with':'貫徹到底','hammer out':'磋商敲定','hand over':'移交',
'hinge on':'取決於','iron out':'化解歧見','keep track of':'掌握追蹤','kick off':'啟動',
'lay out':'鋪陳說明','level with':'對人坦白','live up to':'不辜負','look into':'調查',
'map out':'規劃出','opt for':'選擇','pan out':'有結果','pass up':'錯過放棄',
'phase in':'逐步導入','pin down':'確定下來','plough back':'再投入','pull off':'成功做到',
'put up with':'忍受','ramp up':'加大力度','rein in':'約束','root out':'根除',
'run up':'累積欠款','scale back':'縮減規模','see through':'看穿撐完','shore up':'鞏固',
'sign up for':'報名參加','single out':'挑出','smooth over':'化解緩和','stem from':'源自',
'step up':'加強','stick to':'堅持遵守','tap into':'發掘利用','tide over':'度過難關',
'top up':'補足加值','trade in':'折抵舊換新','usher in':'開啟迎來','weed out':'淘汰',
'weigh up':'權衡','wind down':'逐步收尾','wrap up':'收尾結束',

/* ── 動名搭配 ───────────────────────────────────── */
'meet demand':'滿足需求','meet requirements':'符合要求','reach a consensus':'達成共識',
'take effect':'生效','take measures':'採取措施','take precedence':'優先於',
'place emphasis':'著重於','pose a risk':'構成風險','pose a question':'提出問題',
'raise awareness':'提高認知','raise funds':'募資','draw a conclusion':'下結論',
'draw a distinction':'做出區別','strike a balance':'取得平衡','set a precedent':'開先例',
'set targets':'訂定目標','break even':'損益兩平','bridge the gap':'弭平落差',
'carry weight':'具有份量','cast doubt':'令人存疑','gain access':'取得存取權',
'gain momentum':'累積動能','give priority':'給予優先','hold accountable':'要求負責',
'lodge a complaint':'提出申訴','issue a statement':'發表聲明','launch an inquiry':'展開調查',
'lift restrictions':'解除限制','narrow the gap':'縮小差距','pave the way':'鋪路',
'pay dividends':'帶來回報','put into practice':'付諸實行','run a risk':'冒風險',
'seek approval':'尋求核准','serve a purpose':'發揮作用','shed light on':'釐清說明',
'take into consideration':'納入考量','undergo a change':'經歷改變','voice concerns':'表達疑慮',
'waive a fee':'免收費用',

/* ── 易混淆字組 第二批 ─────────────────────────── */
'accede':'同意就任','exceed':'超出','access':'存取進入',
'allusion':'暗指','illusion':'錯覺','elusion':'閃避',
'appraise':'評價估值','apprise':'告知',
'ascent':'上升','assent':'同意',
'canvas':'帆布','canvass':'拉票探詢',
'censure':'譴責','censor':'審查刪節',
'cite':'引用','site':'場址','sight':'視力景象',
'coarse':'粗糙的','course':'課程路線',
'complacent':'自滿的','complaisant':'順從的',
'credible':'可信的','creditable':'值得讚許','credulous':'輕信的',
'defer to':'聽從','differ from':'不同於',
'discreet':'謹慎的','discrete':'分立的',
'disinterested':'不偏頗','uninterested':'不感興趣',
'elicit':'引出','illicit':'非法的',
'eminent':'著名的','imminent':'迫近的','immanent':'內在的',
'ensue':'接著發生','issue':'議題發放',
'farther':'距離較遠','further':'進一步',
'formally':'正式地','formerly':'先前',
'imply':'暗示','infer':'推論',
'ingenious':'別出心裁','ingenuous':'純真的',
'lose':'失去','loose':'鬆的',
'moral':'道德的','morale':'士氣',
'perspective':'觀點','prospective':'未來的',
'precede':'先於','proceed':'繼續進行',
'prescribe':'規定開藥','proscribe':'禁止',
'quiet':'安靜的','quite':'相當','quit':'放棄離職',
'restive':'焦躁的','restful':'安寧的',
'statue':'雕像','stature':'身量地位','statute':'法規',
'temporal':'時間的','temporary':'暫時的',
'venal':'貪腐的','venial':'可原諒的',
'waive':'放棄權利','wave':'揮手波浪'

};

/* ── 去重 ───────────────────────────────────────── */
const D = CONTENT.dict || {};
const E = CONTENT.extraVocab || (CONTENT.extraVocab = {});
const zhKey = z => String(z).replace(/[（(].*?[)）]/g,'').split(/[／/、]/)[0].trim();

/* 已經用掉的中文，避免配對出現兩張正解 */
const usedZh = new Set(Object.values(E).map(zhKey));

let added = 0, dupDict = 0, dupExtra = 0, dupZh = 0;
Object.keys(MORE).forEach(k=>{
  if(D[k]){ dupDict++; return; }
  if(E[k]){ dupExtra++; return; }
  const z = zhKey(MORE[k]);
  if(z.length < 2 || z.length > 6) return;
  if(usedZh.has(z)){ dupZh++; return; }
  usedZh.add(z);
  E[k] = MORE[k];
  added++;
});

CONTENT.extraCount = Object.keys(E).length;
CONTENT.extraBatch2 = { added, dupDict, dupExtra, dupZh };
})();
