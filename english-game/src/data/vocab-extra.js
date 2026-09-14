/* ═══════════════════════════════════════════════════════
   vocab-extra.js — 新單字庫（閱讀內容裡不會出現的字）
   載入順序：… → dict.js → vocab-extra.js

   為什麼另外建一份
   ──────────────────────────────────────────────────────
   劇情要服務故事，不能為了塞字而硬寫。但字彙量還是得補。
   所以把「純粹要背的字」拆出來，放進卡牌與配對遊戲當題庫。

   兩個遊戲因此有兩種模式：
     舊單字複習 — 從 CONTENT.dict（章節、關卡、聽力教過的）
     新單字     — 從這份 EXTRA（閱讀裡不會遇到的）

   中文一律控制在 2–6 字，牌面才排得下。
   載入時會自動比對 dict，重複的會被移除（見檔案最後）。
   ═══════════════════════════════════════════════════════ */

CONTENT.extraVocab = {

/* ── 商務動詞 ────────────────────────────────────── */
'acquire':'取得','allocate':'分配','anticipate':'預期','appoint':'任命',
'assess':'評估','assign':'指派','attain':'達成','authorise':'授權',
'clarify':'釐清','collaborate':'協作','commence':'開始','compile':'彙編',
'conduct':'執行','consolidate':'整合','constitute':'構成','consult':'諮詢',
'coordinate':'協調','delegate':'授權下放','demonstrate':'展示','designate':'指定',
'determine':'判定','devise':'構思','diminish':'減少','disclose':'揭露',
'distribute':'分配配送','eliminate':'排除','emphasise':'強調','enhance':'提升',
'enforce':'強制執行','establish':'建立','evaluate':'評鑑','exceed':'超過',
'facilitate':'促成','forecast':'預測','generate':'產生','implement':'實施',
'incorporate':'納入','indicate':'顯示','initiate':'發起','inspect':'檢視',
'integrate':'整併','interpret':'解讀','justify':'證明合理','maintain':'維持',
'minimise':'降到最低','modify':'修改','monitor':'監控','negotiate':'協商',
'obtain':'取得','optimise':'最佳化','oversee':'監督','participate':'參與',
'postpone':'延期','prioritise':'排優先序','prohibit':'禁止','pursue':'追求',
'reinforce':'強化','reject':'駁回','relocate':'遷移','resolve':'解決',
'restore':'恢復','retain':'留住','streamline':'精簡流程','substitute':'替換',
'supervise':'督導','supplement':'補充','sustain':'維繫','terminate':'終止',
'transfer':'移轉','undertake':'承擔','utilise':'運用','validate':'驗證',
'withhold':'扣住不給','yield':'產生讓步','allege':'指稱','amend':'修訂',
'assert':'主張','circulate':'傳閱','comply':'遵循','compensate':'補償',
'confine':'侷限','convene':'召集','deduct':'扣除','deploy':'部署',
'deteriorate':'惡化','dispose':'處置','fluctuate':'波動','impose':'強加',
'notify':'通知','postulate':'假定','reconcile':'核對調和','reimburse':'核銷退款',
'stipulate':'明訂','substantiate':'佐證','supersede':'取代','waive':'免除',

/* ── 商務名詞 ────────────────────────────────────── */
'agenda':'議程','allocation':'分配額','allowance':'補貼','amendment':'修正案',
'appendix':'附錄','applicant':'申請人','appraisal':'考評','arrangement':'安排',
'assessment':'評量結果','assumption':'假設','attachment':'附件','authority':'權限',
'benchmark':'基準','breakdown':'細目分項','capacity':'產能量能','certificate':'證書',
'commitment':'承諾','commodity':'大宗商品','competitor':'競爭者','component':'零組件',
'conclusion':'結論','consensus':'共識','consequence':'後果','consignment':'託運貨',
'constraint':'限制條件','consumption':'消耗量','contribution':'貢獻','criterion':'準則',
'deadline':'期限','delegation':'代表團','demand':'需求','deviation':'偏差',
'discrepancy':'落差','disposal':'處分方式','distribution':'配銷','durability':'耐用度',
'efficiency':'效率','eligibility':'資格','endorsement':'背書','enquiry':'詢問',
'estimate':'估算','evaluation':'評鑑程序','exemption':'豁免','expenditure':'支出',
'expertise':'專業能力','feasibility':'可行性','forecast':'預測','framework':'架構',
'guideline':'指導原則','hierarchy':'層級','implication':'含意','incentive':'誘因',
'initiative':'倡議','innovation':'創新','installation':'安裝','instruction':'指示',
'integrity':'誠信','inventory':'庫存','investment':'投資','liability':'負債責任',
'limitation':'限制','logistics':'物流','maintenance':'維護','mandate':'授權職責',
'margin':'利潤率','mechanism':'機制','merchandise':'商品','milestone':'里程碑',
'negotiation':'談判','obligation':'義務','occupancy':'入住率','outcome':'結果',
'outlet':'門市據點','output':'產出','overhead':'間接成本','ownership':'所有權',
'partnership':'合夥','perception':'觀感','performance':'績效','personnel':'人事人員',
'perspective':'觀點','portfolio':'作品組合','precedent':'先例','premises':'場所',
'premium':'保費溢價','procedure':'程序','proceeds':'所得款項','productivity':'生產力',
'proficiency':'熟練度','projection':'推估','prospect':'潛在客戶','provision':'條款準備',
'quotation':'報價','rationale':'理據','recipient':'收受者','recruitment':'招募',
'reduction':'削減','referral':'轉介','reimbursement':'核銷','reliability':'可靠度',
'reluctance':'不情願','remainder':'剩餘部分','remittance':'匯款','requirement':'要求條件',
'reservation':'保留意見','resolution':'決議','restriction':'限制規定','retailer':'零售商',
'revenue':'營收','scarcity':'稀缺','sector':'產業部門','shareholder':'股東',
'shortfall':'短缺數','specification':'規格','stakeholder':'利害關係人','standard':'標準',
'strategy':'策略','subsidiary':'子公司','substitute':'替代品','supervision':'督導工作',
'surplus':'盈餘','tendency':'傾向','threshold':'門檻','transaction':'交易',
'transition':'轉換期','turnover':'週轉營業額','undertaking':'承諾事業','variance':'差異',
'venue':'場地','viability':'存續能力','volume':'量體','warehouse':'倉庫',
'warranty':'保固','workforce':'勞動力','yield':'收益率',

/* ── 形容詞 ──────────────────────────────────────── */
'abundant':'充裕的','accurate':'精確的','adequate':'足夠的','adjacent':'相鄰的',
'adverse':'不利的','ambiguous':'模稜兩可','apparent':'明顯的','appropriate':'適當的',
'arbitrary':'恣意的','authentic':'真實的','beneficial':'有益的','comparable':'可比較的',
'competent':'有能力的','complimentary':'免費贈送','comprehensive':'全面的','concise':'精簡的',
'confidential':'機密的','consecutive':'連續的','considerable':'相當大的','consistent':'一致的',
'conspicuous':'顯眼的','contemporary':'當代的','conventional':'傳統的','crucial':'關鍵的',
'cumulative':'累計的','defective':'有瑕疵的','deliberate':'刻意的','dependable':'可靠的',
'desirable':'理想的','diverse':'多元的','durable':'耐用的','efficient':'有效率的',
'eligible':'符合資格','eminent':'傑出的','essential':'不可或缺','exclusive':'獨家的',
'extensive':'廣泛的','feasible':'可行的','flexible':'有彈性的','fragile':'易碎的',
'fundamental':'根本的','generous':'慷慨的','hazardous':'危險的','identical':'完全相同',
'imminent':'迫在眉睫','impartial':'公正的','inadequate':'不足的','incidental':'附帶的',
'inclusive':'含括在內','indispensable':'必要的','inevitable':'難以避免','influential':'有影響力',
'informative':'資訊豐富','innovative':'創新的','intensive':'密集的','intermittent':'間歇的',
'lucrative':'獲利豐厚','mandatory':'強制的','marginal':'邊際微小','moderate':'適度的',
'mutual':'相互的','negligible':'微不足道','nominal':'名目的','numerous':'眾多的',
'obsolete':'過時的','optional':'可選的','outstanding':'傑出未結','persistent':'持續不斷',
'practical':'務實的','precise':'精準的','preliminary':'初步的','prevalent':'普遍的',
'prior':'事先的','profitable':'有利可圖','prominent':'顯著的','provisional':'暫定的',
'punctual':'準時的','redundant':'多餘冗員','relevant':'相關的','reliable':'可信賴的',
'reluctant':'不情願的','renowned':'知名的','respective':'各自的','restricted':'受限的',
'rigorous':'嚴謹的','significant':'重大的','simultaneous':'同時的','spacious':'寬敞的',
'stable':'穩定的','strategic':'策略性的','subsequent':'隨後的','substantial':'可觀的',
'sufficient':'充分的','suitable':'合適的','superior':'優越的','supplementary':'補充的',
'tentative':'初步暫訂','thorough':'徹底的','unanimous':'全體一致','unprecedented':'前所未有',
'versatile':'多用途的','viable':'行得通的','vulnerable':'易受影響','widespread':'普遍存在',

/* ── 副詞與連接 ──────────────────────────────────── */
'accordingly':'因此照辦','alternatively':'或者','apparently':'看來似乎','approximately':'大約',
'briefly':'簡短地','collectively':'共同地','consequently':'因此','considerably':'相當地',
'consistently':'一貫地','conversely':'反過來說','deliberately':'刻意地','essentially':'本質上',
'eventually':'最終','exclusively':'專門地','extensively':'廣泛地','frequently':'經常',
'gradually':'逐漸地','hence':'由此可知','increasingly':'越來越','initially':'起初',
'invariably':'總是','likewise':'同樣地','meanwhile':'與此同時','moreover':'此外',
'mutually':'彼此地','namely':'也就是','nevertheless':'儘管如此','notably':'尤其',
'occasionally':'偶爾','ordinarily':'通常','originally':'原本','otherwise':'否則',
'particularly':'特別是','periodically':'定期地','preferably':'最好是','presumably':'想必',
'primarily':'主要地','promptly':'立即','proportionally':'按比例','reportedly':'據報導',
'respectively':'分別地','roughly':'大致上','simultaneously':'同時地','specifically':'具體地',
'subsequently':'之後','substantially':'大幅地','thereby':'藉此','thereafter':'此後',
'thoroughly':'徹底地','ultimately':'最終','undoubtedly':'無疑地','virtually':'幾乎',
'whereby':'憑此','whereas':'然而相對',

/* ── 片語動詞 ────────────────────────────────────── */
'account for':'說明佔比','break down':'故障細分','bring about':'導致','bring forward':'提前',
'call off':'取消','carry on':'繼續','catch up':'趕上','check out':'結帳查看',
'come across':'偶然遇到','come up with':'想出','cut back':'縮減開支','draw up':'草擬',
'drop off':'放下減少','fall behind':'落後','fill in':'填寫','follow up':'追蹤後續',
'get around':'繞過','give in':'讓步','go over':'逐項過一遍','hand out':'發放',
'hold up':'耽擱','keep up with':'跟上','lay off':'資遣','look after':'照管',
'look over':'瀏覽檢查','make up for':'彌補','pass on':'轉達','phase out':'逐步汰除',
'pick up':'取回好轉','point out':'指出','pull out':'退出','put forward':'提出',
'put off':'延後','rule out':'排除可能','run into':'遇上','set aside':'撥出保留',
'set out':'闡明啟程','settle down':'安定下來','sort out':'釐清處理','stand for':'代表',
'step down':'卸任','take on':'承接','take over':'接手','take up':'佔用開始',
'turn down':'拒絕調低','turn out':'結果是','work out':'算出解決','write off':'沖銷報廢',

/* ── 人事與職場 ──────────────────────────────────── */
'apprentice':'學徒','attendance':'出席','benefit':'福利','bonus':'獎金',
'candidate':'應徵者','colleague':'同事','commission':'佣金','compensation':'報酬',
'contractor':'承包商','curriculum':'課程','dismissal':'解僱','employee':'員工',
'employer':'雇主','headcount':'人力編制','incentive':'獎勵','induction':'職前訓練',
'interviewee':'受訪者','morale':'士氣','overtime':'加班','payroll':'薪資名冊',
'pension':'退休金','promotion':'升遷','recruiter':'招募人員','redundancy':'裁員',
'resignation':'辭職','retirement':'退休','salary':'薪水','seniority':'年資',
'shift':'班次','staffing':'人力配置','subordinate':'部屬','supervisor':'主管',
'training':'訓練','vacancy':'職缺','wage':'工資','workload':'工作量',

/* ── 財務會計 ────────────────────────────────────── */
'asset':'資產','audit':'稽核','balance':'餘額','bankruptcy':'破產',
'budget':'預算','capital':'資本','cashflow':'現金流','collateral':'擔保品',
'creditor':'債權人','currency':'貨幣','debt':'債務','deficit':'赤字',
'depreciation':'折舊','disbursement':'撥款','dividend':'股利','equity':'權益',
'expense':'費用','fiscal':'財政的','fund':'基金','installment':'分期',
'interest':'利息','invoice':'發票','ledger':'分類帳','liquidity':'流動性',
'loan':'貸款','mortgage':'房貸','overdraft':'透支','profit':'利潤',
'receipt':'收據','refund':'退款','remuneration':'酬勞','reserve':'準備金',
'revenue':'收入','statement':'對帳單','subsidy':'補助','tariff':'關稅費率',
'taxation':'課稅','turnover':'營業額','valuation':'估值','withdrawal':'提領',

/* ── 生產品管與物流 ─────────────────────────────── */
'assembly':'組裝','batch':'批次','calibration':'校正','capacity':'產能',
'component':'零件','conveyor':'輸送帶','defect':'瑕疵','downtime':'停機時間',
'durability':'耐久性','fabrication':'製造','freight':'貨運','inspection':'檢驗',
'lubricant':'潤滑劑','machinery':'機具','maintenance':'保養','malfunction':'故障',
'manufacture':'量產製造','packaging':'包裝','pallet':'棧板','procurement':'採購',
'prototype':'原型','recall':'召回','shipment':'出貨','shortage':'短缺',
'stockpile':'囤積','supplier':'供應商','surveillance':'監視','throughput':'產出量',
'tolerance':'公差','warehouse':'倉庫','workshop':'工坊','yield':'良率',

/* ── 行銷與銷售 ──────────────────────────────────── */
'advertisement':'廣告','brand':'品牌','brochure':'型錄','campaign':'行銷活動',
'clientele':'客群','commission':'抽成','competitor':'對手','consumer':'消費者',
'coupon':'折價券','demographic':'客群結構','discount':'折扣','distributor':'經銷商',
'endorsement':'代言','exhibition':'展覽','franchise':'加盟','incentive':'促銷誘因',
'launch':'上市','loyalty':'忠誠度','merchandising':'商品陳列','outlet':'通路',
'packaging':'包裝','promotion':'促銷','prospectus':'說明書','questionnaire':'問卷',
'referral':'推薦','retention':'留客','sponsorship':'贊助','subscription':'訂閱',
'testimonial':'見證推薦','trademark':'商標','vendor':'廠商','wholesale':'批發',

/* ── 科技與資訊 ──────────────────────────────────── */
'algorithm':'演算法','backup':'備份','bandwidth':'頻寬','breach':'外洩違反',
'compatible':'相容的','configuration':'組態','database':'資料庫','deployment':'部署作業',
'download':'下載','encryption':'加密','firewall':'防火牆','hardware':'硬體',
'interface':'介面','malware':'惡意程式','network':'網路','outage':'斷線中斷',
'password':'密碼','platform':'平台','protocol':'通訊協定','server':'伺服器',
'software':'軟體','storage':'儲存','subscription':'訂閱制','upgrade':'升級',
'username':'帳號','vulnerability':'弱點','wireless':'無線的','encrypt':'進行加密',
'install':'安裝軟體','migrate':'轉移系統','restore':'還原','synchronise':'同步',

/* ── 旅行交通與住宿 ─────────────────────────────── */
'accommodation':'住宿','aisle':'走道','baggage':'行李','boarding':'登機',
'cabin':'機艙客艙','carrier':'航空公司','checkpoint':'檢查哨','concourse':'大廳',
'connection':'轉乘','customs':'海關','delay':'誤點','departure':'出發',
'destination':'目的地','excursion':'短程旅遊','fare':'票價','immigration':'入境查驗',
'itinerary':'行程','layover':'中停','lounge':'貴賓室','luggage':'行李',
'occupancy':'住房率','passenger':'乘客','platform':'月台','porter':'行李員',
'reservation':'訂位','shuttle':'接駁車','terminal':'航廈','transit':'轉機過境',
'vacancy':'空房','voucher':'兌換券','suite':'套房','amenity':'設施',

/* ── 法務與合約 ──────────────────────────────────── */
'arbitration':'仲裁','breach':'違約','clause':'條款','compliance':'法遵',
'confidentiality':'保密','consent':'同意','contract':'合約','copyright':'著作權',
'damages':'損害賠償','dispute':'爭議','enforcement':'執法作為','entitlement':'權利',
'indemnity':'補償條款','infringement':'侵權','jurisdiction':'管轄','lawsuit':'訴訟',
'legislation':'法規','liable':'應負責的','litigation':'訴訟程序','negligence':'過失',
'patent':'專利','penalty':'罰則','plaintiff':'原告','provision':'條款',
'regulation':'法規','settlement':'和解','statute':'成文法','termination':'終止行為',
'testimony':'證詞','verdict':'判決','waiver':'棄權書','warranty':'保證',

/* ── 學術與論述 ──────────────────────────────────── */
'analysis':'分析','argument':'論點','citation':'引用','coherent':'連貫的',
'conclusion':'結論','correlation':'相關性','criteria':'標準','critique':'評析',
'empirical':'實證的','evidence':'證據','hypothesis':'假說','implication':'意涵',
'interpretation':'詮釋','methodology':'方法論','objective':'客觀目標','phenomenon':'現象',
'premise':'前提','proportion':'比例','qualitative':'質性的','quantitative':'量化的',
'reference':'參考文獻','significance':'重要性','statistics':'統計','summary':'摘要',
'survey':'調查','theory':'理論','thesis':'論文論點','validity':'效度',
'variable':'變項','bias':'偏誤',

/* ── 易混淆字組 ──────────────────────────────────── */
'adapt':'適應調整','adopt':'採用','adept':'熟練的',
'advice':'忠告','advise':'勸告建議',
'affect':'影響（動）','effect':'效果（名）',
'assure':'向人保證','ensure':'確保','insure':'投保',
'complement':'互補','compliment':'讚美',
'council':'議會','counsel':'諮詢忠告',
'economic':'經濟的','economical':'節省的',
'eligible':'有資格','illegible':'難以辨讀',
'personal':'個人的','personnel':'人事',
'principal':'主要的校長','principle':'原則',
'stationary':'靜止的','stationery':'文具',
'respectable':'值得尊敬','respectful':'恭敬的','respective':'各自的',
'sensible':'明智的','sensitive':'敏感的',
'considerable':'相當多的','considerate':'體貼的',
'industrial':'工業的','industrious':'勤奮的',
'successive':'接連不斷','successful':'成功的',
'continual':'反覆間斷','continuous':'持續不斷',
'alternate':'交替','alternative':'替代方案',
'comprise':'包含','compose':'組成',
'confident':'有信心','confidential':'機密的',
'literal':'字面的','literate':'識字的',
'momentary':'短暫的','momentous':'意義非凡'

};

/* ── 去重：已經在 dict 裡教過的字不算「新單字」 ────────
   閱讀章節與聽力已經出現過的，留在舊單字模式就好。
   ─────────────────────────────────────────────────── */
(function dedupe(){
  const D = CONTENT.dict || {};
  let removed = 0;
  Object.keys(CONTENT.extraVocab).forEach(k=>{
    if(D[k]){ delete CONTENT.extraVocab[k]; removed++; }
  });
  CONTENT.extraRemoved = removed;
  CONTENT.extraCount = Object.keys(CONTENT.extraVocab).length;
})();
