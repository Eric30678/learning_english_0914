/* ═══════════════════════════════════════════════════════
   chapters-5.js — 雙篇對照專輯（6 章）
   載入順序：… → chapters-4.js → chapters-5.js

   這一輯練的是題型，不是字彙
   ──────────────────────────────────────────────────────
   多益 Part 7 最後幾組是雙篇（double passage）：
   兩份相關文件，五道題，其中至少兩題**必須同時看兩份**
   才答得出來。那才是真正的難點——不是單字，是交叉比對。

   全部文字原創。參考的是題型結構（文件配對方式、
   題目類型、陷阱設計），不是任何一份既有試題。
   考古題有著作權，不能複製進產品裡。

   常見的配對組合，本輯各做一種：
     徵才啟事 + 應徵信      行程表 + 變更通知
     價目表 + 詢價信        內部公告 + 員工詢問
     發票 + 客訴信          活動簡章 + 報名信

   每章 4 頁（兩份文件各 2 頁）· 5 題
   題目標註了答案要從哪一份文件找。
   ═══════════════════════════════════════════════════════ */

CONTENT.chapters.push(

/* ═══ 第 26 章 ═══ */
{
id:'c26', title:'Two Documents: The Applicant', zh:'雙篇 · 應徵',
blurb:'職缺公告與一封應徵信。他符合幾項？',
long:true,
pages:[
 {scene:'meeting',tint:'day',
  t:'— [DOCUMENT|文件] 1 —\n[JOB|職缺] [POSTING|公告]\n\n[Position|職位]: [Warehouse|倉儲] *[Supervisor|主管]\n[Location|地點]: [Kaohsiung|高雄] [site|廠區]\n*[Requirements|條件]:\n  · [Three|三] [years|年] of [warehouse|倉儲] [experience|經驗]\n  · [Valid|有效的] *[forklift licence|堆高機執照]\n  · [Available|可配合] [for|上] [Saturday|週六] *[shifts|班次]'},
 {scene:'meeting',tint:'day',
  t:'[Salary|薪資]: NT$38,000–45,000, *[depending on|視…而定] [experience|經驗]\n[Start|到職] [date|日期]: [1|1] [April|四月]\n*[Applications|申請] [close|截止] [on|在] [14|14] [March|三月].\n\n[Please|請] [send|寄] a [CV|履歷] [and|和] [cover|求職] [letter|信]\n[to|給] hr@example.com.\n[Interviews|面試] [will|將] [be|被] [held|舉行] [the|那] [following|接下來的] [week|週].'},
 {scene:'room',tint:'day',
  t:'— [DOCUMENT|文件] 2 —\n[From|寄件者]: Lin Wei-cheng\n[Date|日期]: [11|11] [March|三月]\n\n"[I|我] [am|正在] *[applying for|應徵] [the|那個] [Warehouse|倉儲] [Supervisor|主管] [role|職位].\n[I|我] [have|有] [four|四] [years|年] [of|的] [experience|經驗],\n[two|兩] [of|的] [them|它們] [as|擔任] [a|一位] [shift|班] [leader|組長]."'},
 {scene:'room',tint:'day',
  t:'"[I|我] [do|沒有] not [hold|持有] [a|一張] *[forklift licence|堆高機執照] [yet|還].\n[I|我] [have|已經] *[booked|報名] [the|那個] [course|課程] [for|在] [20|20] [March|三月]\n[and|而且] [expect|預計] [to|要] [pass|通過] [within|在…之內] [two|兩] [weeks|週].\n\n[One|一件] [more|更多] [thing|事情]: [I|我] [cannot|不能] [work|工作] [Saturdays|週六]\n[until|直到] [June|六月], [due|由於] [to|於] [a|一個] [family|家庭] *[commitment|承諾].\n[After|之後] [that|那], [I|我] [am|是] [fully|完全] [available|可配合]."'}
],
quiz:[
 ['【文件1】這個職缺的截止日是？',['3月1日','3月11日','3月14日','3月20日'],2,'Applications close on 14 March。截止日和到職日容易看錯。'],
 ['【文件2】Lin 先生的經驗有幾年？',['兩年','三年','四年','六年'],2,'I have four years of experience, two of them as a shift leader。四年總資歷，其中兩年當組長。'],
 ['【交叉】他不符合公告中的哪兩項？',['經驗與薪資','執照與週六班','地點與到職日','學歷與經驗'],1,'要同時看兩份：公告要求執照與週六班，他兩項都還不行。經驗那項他反而超過。'],
 ['【交叉】如果他四月一日到職，他何時才能上週六班？',['四月','五月','六月','立刻可以'],2,'文件2說 cannot work Saturdays until June，文件1說 start date 1 April——中間兩個月不能排週六。'],
 ['commitment 在這裡最接近什麼意思？',['承諾、非做不可的事','投入程度','委員會','押金'],0,'family commitment 指家庭方面必須履行的責任。這是字義題，不能只看字面。']
]},

/* ═══ 第 27 章 ═══ */
{
id:'c27', title:'Two Documents: The Schedule', zh:'雙篇 · 行程變更',
blurb:'兩天的行程表，和一封把它打亂的信。',
long:true,
pages:[
 {scene:'office',tint:'dawn',
  t:'— [DOCUMENT|文件] 1 —\n[SITE|廠區] [VISIT|參訪] *[ITINERARY|行程表]\n\n[TUESDAY|星期二]\n09:00　[Factory|工廠] [tour|參觀]\n13:00　[Lunch|午餐] [with|與] Mr. Chen\n15:00　[Quality|品管] *[review|檢討] [meeting|會議]'},
 {scene:'office',tint:'dawn',
  t:'[WEDNESDAY|星期三]\n10:00　[Warehouse|倉庫] [walk|巡視]-[through|一遍]\n12:00　[Free|自由]\n14:00　*[Departure|出發] — [flight|班機] BR872\n\n[Note|備註]: [Please|請] *[confirm|確認] [attendance|出席] [by|在] [Monday|星期一] [noon|中午].'},
 {scene:'office',tint:'storm',
  t:'— [DOCUMENT|文件] 2 —\n[From|寄件者]: [Site|廠區] [Office|辦公室]\n[Sent|寄出]: [Monday|星期一], 16:40\n[Subject|主旨]: [Tuesday|星期二] *[power|電力] [shutdown|停機]\n\n"[The|那個] [factory|工廠] [will|將] [have|有] [a|一次] *[scheduled|排定的]\n[power|電力] [shutdown|停機] [on|在] [Tuesday|星期二] [afternoon|下午]."'},
 {scene:'office',tint:'storm',
  t:'"[The|那個] [morning|早上] [tour|參觀] [is|是] *[unaffected|不受影響].\n[The|那個] [15:00|15:00] [meeting|會議] [is|被] *[moved|移到] [to|到]\n[Wednesday|星期三] [at|在] 10:00.\n\n[We|我們] *[apologise|致歉] [for|為了] [the|那個] [short|短的] [notice|通知].\n[Your|你的] [flight|班機] [is|是] *[unchanged|不變的]."'}
],
quiz:[
 ['【文件1】原訂週三上午的行程是什麼？',['工廠參觀','倉庫巡視','品管會議','出發'],1,'10:00 Warehouse walk-through。'],
 ['【文件2】為什麼行程要改？',['班機延誤','工廠排定停電','有人請假','天氣'],1,'a scheduled power shutdown on Tuesday afternoon。scheduled 表示是預定的，不是突發。'],
 ['【交叉】哪一項原訂行程會因此被取代？',['工廠參觀','與 Chen 的午餐','倉庫巡視','班機'],2,'品管會議移到週三 10:00，而那個時段原本是倉庫巡視——要把兩份對起來才看得出衝突。'],
 ['【交叉】收件者最晚何時知道這個變更？',['週一中午前','週一下午四點四十之後','週二早上','週三'],1,'信件 Sent: Monday 16:40，但文件1要求週一中午前確認出席——通知比截止時間還晚。'],
 ['unaffected 是什麼意思？',['受影響的','不受影響的','被取消的','被延後的'],1,'un- + affected。多益很愛用否定字首考你是否讀反。']
]},

/* ═══ 第 28 章 ═══ */
{
id:'c28', title:'Two Documents: The Price List', zh:'雙篇 · 報價',
blurb:'價目表的小字，和一封只差二十個單位的訂單。',
long:true,
pages:[
 {scene:'counter',tint:'day',
  t:'— [DOCUMENT|文件] 1 —\n[PRICE|價目] [LIST|表] — [Standard|標準] [Cartons|紙箱]\n\n[Under|未滿] 200 [units|單位]　NT$42 [each|每個]\n200–499 [units|單位]　　NT$38 [each|每個]\n500+ [units|單位]　　　NT$35 [each|每個]'},
 {scene:'counter',tint:'day',
  t:'*[Delivery|運費]: [free|免費] [on|於] [orders|訂單] [of|達] 500 [units|單位] [or|或] [more|以上].\n[Below|低於] [that|那], NT$900 [per|每] *[shipment|批].\n\n*[Lead time|備貨交期]: [10|10] [working|工作] [days|天].\n*[Express|急件] *[handling|處理] [adds|增加] [15|15]% [to|到] [the|那個] [total|總額]\n[and|而且] [reduces|縮短] [lead time|交期] [to|到] [5|5] [days|天].'},
 {scene:'room',tint:'day',
  t:'— [DOCUMENT|文件] 2 —\n[From|寄件者]: Purchasing, Dahan Ltd.\n\n"[We|我們] [would|想] [like|要] [to|去] [order|訂購] 480 [units|單位].\n[Our|我們的] [store|店] [opens|開幕] [on|在] [the|那] 20th\n[and|而且] [we|我們] [need|需要] [the|那些] [cartons|紙箱] [in|在] [hand|手上]\n[by|在] [the|那] 18th [at|最] [the|晚] [latest|最晚]."'},
 {scene:'room',tint:'day',
  t:'"[Today|今天] [is|是] [the|那] 11th.\n[Please|請] *[confirm|確認] [the|那個] [total|總額], [including|包含] [any|任何]\n*[additional|額外的] [charges|費用].\n\n[If|如果] [ordering|訂購] 500 [would|會] [work|比較划算] [out|來] [cheaper|便宜],\n[please|請] [say|說] [so|如此]."'}
],
quiz:[
 ['【文件1】訂購 480 個的單價是多少？',['NT$42','NT$38','NT$35','NT$900'],1,'480 落在 200–499 的區間，單價 NT$38。級距的邊界是最常見的陷阱。'],
 ['【文件2】客戶要求何時到貨？',['11日','18日','20日','25日'],1,'by the 18th at the latest。開幕是 20 日，但到貨要 18 日。'],
 ['【交叉】以標準交期能趕上嗎？',['可以，剛好','不行，10 個工作天來不及','可以，只要加運費','不行，除非訂 500 個'],1,'今天 11 日、需求 18 日，只剩 7 天；標準交期 10 個工作天，必須走急件。'],
 ['【交叉】這筆 480 個的訂單要付運費嗎？',['不用，免運','要，NT$900','要，但可折抵','視地區而定'],1,'免運門檻是 500 單位以上，480 未達標，所以要付 NT$900。'],
 ['【交叉】客戶最後那句話在問什麼？',['能不能延後交貨','訂 500 個是不是反而更便宜','能不能分批出貨','能不能退貨'],1,'480 個是 38 元加 900 運費；500 個是 35 元且免運。多訂 20 個反而可能省錢——這正是題目埋的計算點。']
]},

/* ═══ 第 29 章 ═══ */
{
id:'c29', title:'Two Documents: The Car Park', zh:'雙篇 · 停車場',
blurb:'公告寫得很清楚，但沒有寫到夜班。',
long:true,
pages:[
 {scene:'office',tint:'day',
  t:'— [DOCUMENT|文件] 1 —\n*[NOTICE|公告] [TO|致] [ALL|全體] [STAFF|員工]\n\n"[The|那個] [main|主要] [car|停] [park|車場] [will|將] [be|被] *[resurfaced|重鋪路面]\n[from|從] [1|1] [April|四月] [to|到] [20|20] [April|四月].\n[During|在…期間] [this|這] [period|期間] [please|請] [use|使用] [Zone|區] B."'},
 {scene:'office',tint:'day',
  t:'"[Zone|區] B *[requires|需要] [a|一張] *[temporary|臨時] *[permit|通行證].\n[Apply|申請] [through|透過] [the|那個] [staff|員工] [portal|入口網站]\n[at|至] [least|少] [three|三] [working|工作] [days|天] [in|提] [advance|前].\n\n[Zone|區] B [is|是] [open|開放] 07:00–20:00 [only|僅].\n[Vehicles|車輛] [left|留] *[overnight|過夜] [will|將] [be|被] *[towed|拖吊]."'},
 {scene:'room',tint:'night',
  t:'— [DOCUMENT|文件] 2 —\n[From|寄件者]: Night [Shift|班] [Team|團隊]\n[To|收件者]: [Facilities|總務]\n\n"[Our|我們的] [shift|班] [runs|從] [from|從] 22:00 [to|到] 06:00.\n[Zone|區] B [closes|關閉] [before|在…之前] [we|我們] *[arrive|抵達]\n[and|而且] [opens|開放] [after|在…之後] [we|我們] *[leave|離開]."'},
 {scene:'room',tint:'night',
  t:'[REPLY|回覆] [from|來自] [Facilities|總務], [same|同] [day|日]:\n\n"[Night|夜班] [staff|員工] [should|應] [apply|申請] [for|要] [a|一張] [Zone|區] C [permit|通行證]\n*[instead|改為]. [Zone|區] C [is|是] [open|開放] 24 [hours|小時]\n[but|但] [has|有] [only|只有] [forty|四十] [spaces|車位].\n\n[Applications|申請] [are|是] [handled|處理] *[in order of|依…順序] [receipt|收到]."'}
],
quiz:[
 ['【文件1】B 區的臨時通行證要提前多久申請？',['一天','三個工作天','一週','不用申請'],1,'at least three working days in advance。注意是「工作天」不是「天」。'],
 ['【文件1】車輛過夜會怎樣？',['罰款','被拖吊','被鎖','沒事'],1,'Vehicles left overnight will be towed。'],
 ['【交叉】為什麼夜班員工不能用 B 區？',['沒有車位','B 區只開到晚上八點，夜班時段是關的','要另外付費','距離太遠'],1,'夜班 22:00–06:00，B 區 07:00–20:00——兩份文件的時間對起來才看得出完全不重疊。'],
 ['【文件2】總務給的解法是？',['延後上班','申請 C 區通行證','停在路邊','搭大眾運輸'],1,'apply for a Zone C permit instead。'],
 ['【交叉】C 區方案最大的風險是什麼？',['要收費','只有四十個車位而且先到先得','不能過夜','距離太遠'],1,'only forty spaces + applications handled in order of receipt——名額有限且照收件順序，晚申請就沒了。']
]},

/* ═══ 第 30 章 ═══ */
{
id:'c30', title:'Two Documents: The Invoice', zh:'雙篇 · 發票',
blurb:'數量對不上，運費也不該收。差額是多少？',
long:true,
pages:[
 {scene:'room',tint:'day',
  t:'— [DOCUMENT|文件] 1 —\n*[INVOICE|發票] #A-2291　　[Date|日期]: 3 [May|五月]\n\n[Item|品項] 1　[Cartons|紙箱], [large|大]　　200 × NT$35　NT$7,000\n[Item|品項] 2　[Tape|膠帶], [rolls|捲]　　　 40 × NT$60　NT$2,400\n[Item|品項] 3　[Labels|標籤], [packs|包]　　 10 × NT$120　NT$1,200'},
 {scene:'room',tint:'day',
  t:'*[Subtotal|小計]　　　　NT$10,600\n*[Delivery|運費]　　　　NT$900\n*[Total|總計]　　　　　NT$11,500\n\n[Payment|付款] [terms|條件]: [30|30] [days|天] [from|自] [invoice|發票] [date|日期].\n[Late|逾期] [payment|付款] *[incurs|產生] [a|一] [2|2]% [monthly|每月] [charge|費用].'},
 {scene:'room',tint:'dusk',
  t:'— [DOCUMENT|文件] 2 —\n[From|寄件者]: Dahan Ltd.　[Date|日期]: 6 [May|五月]\n\n"[We|我們] [received|收到] [the|那批] *[shipment|貨] [today|今天].\n[Only|只有] 180 [large|大] [cartons|紙箱] [arrived|抵達], [not|不是] 200.\n[The|那些] [other|其他] [items|品項] [are|是] [correct|正確的]."'},
 {scene:'room',tint:'dusk',
  t:'"[Also|另外], [your|你們的] [price|價目] [list|表] [states|載明] [free|免費] [delivery|運費]\n[on|於] [orders|訂單] [of|達] 500 [units|單位] [or|或] [more|以上].\n[Our|我們的] [order|訂單] [totalled|總計] 250 [units|單位] [across|跨] [three|三] [items|品項].\n\n[Please|請] *[issue|開立] [a|一張] *[credit note|折讓單]\n[for|為了] [the|那個] *[difference|差額]."'}
],
quiz:[
 ['【文件1】發票上紙箱的單價是多少？',['NT$35','NT$60','NT$120','NT$900'],0,'200 × NT$35。'],
 ['【文件2】客戶指出的第一個問題是？',['價格錯誤','少收 20 個紙箱','品項錯誤','送錯地址'],1,'Only 180 large cartons arrived, not 200。'],
 ['【交叉】少收的紙箱金額是多少？',['NT$600','NT$700','NT$900','NT$1,200'],1,'20 個 × NT$35 = NT$700。要把文件2的數量差乘上文件1的單價。'],
 ['【交叉】客戶關於運費的主張成立嗎？',['成立，訂單已達 500 單位','不成立，總共只有 250 單位','成立，因為缺貨','需要更多資訊'],1,'免運門檻是 500 單位，客戶自己也寫了總共 250 單位——他的主張其實站不住腳。這題考的是別被對方的語氣帶著走。'],
 ['credit note 是什麼？',['信用狀','折讓單（退款憑證）','催款通知','出貨單'],1,'credit note 是賣方開給買方的折讓或退款憑證，帳務文件的常見字。']
]},

/* ═══ 第 31 章 ═══ */
{
id:'c31', title:'Two Documents: The Seminar', zh:'雙篇 · 研討會',
blurb:'早鳥價、會員折扣、停車另計。他該付多少？',
long:true,
pages:[
 {scene:'meeting',tint:'day',
  t:'— [DOCUMENT|文件] 1 —\n[LOGISTICS|物流] *[SEMINAR|研討會] — 18 [June|六月]\n\n[Standard|標準] [fee|費用]　　　NT$2,400\n*[Early bird|早鳥] ([by|在] 10 [May|五月])　NT$1,800\n[Member|會員] [discount|折扣]　　20% [off|折扣] [any|任何] [fee|費用]'},
 {scene:'meeting',tint:'day',
  t:'[The|那個] [fee|費用] *[includes|包含] [lunch|午餐] [and|和] [materials|教材].\n[Parking|停車] [is|是] *[not|不] [included|包含]: NT$300 [per|每] [day|天].\n\n*[Cancellations|取消] [received|收到] [after|在…之後] 1 [June|六月]\n[are|是] [non|不]-*[refundable|可退費的].\n[Substitutions|替代出席] [are|是] [permitted|被允許] [at|在] [any|任何] [time|時間].'},
 {scene:'room',tint:'day',
  t:'— [DOCUMENT|文件] 2 —\n[From|寄件者]: Sam　[Date|日期]: 12 [May|五月]\n\n"[I|我] [would|想] [like|要] [to|去] [register|報名] [for|參加] [the|那個] [seminar|研討會].\n[I|我] [have|已經] [been|是] [a|一位] [member|會員] [since|自從] [last|去] [year|年]\n[and|而且] [I|我] [will|會] [drive|開車], [so|所以] [I|我] [need|需要] [parking|停車]."'},
 {scene:'room',tint:'day',
  t:'"[One|一] [more|更多] [question|問題]:\n[if|如果] [something|某事] [comes|發生] [up|出來] [at|在] [work|工作] [that|那] [week|週],\n[can|可以] [a|一位] [colleague|同事] [go|去] *[in my place|代替我]?\n\n[I|我] [would|會] [rather|寧願] [not|不] [lose|損失] [the|那個] [fee|費用]."'}
],
quiz:[
 ['【文件1】早鳥價的截止日是？',['5月10日','5月12日','6月1日','6月18日'],0,'Early bird (by 10 May)。'],
 ['【文件2】Sam 何時報名？',['5月10日','5月12日','6月1日','6月18日'],1,'Date: 12 May。'],
 ['【交叉】Sam 適用哪一種費用？',['早鳥價 NT$1,800','標準價 NT$2,400','會員免費','需要另外詢問'],1,'他 5月12日報名，已過早鳥截止日，所以是標準價。日期比對是雙篇題的核心。'],
 ['【交叉】他總共要付多少？',['NT$1,740','NT$1,920','NT$2,220','NT$2,700'],2,'標準價 2,400 × 0.8（會員）= 1,920，加停車 300 = NT$2,220。要串起三個資訊。'],
 ['【交叉】他最後那個問題的答案是？',['不行，逾期不退費','可以，任何時候都允許替代出席','只能在六月一日前','需要付手續費'],1,'他問的是能不能換人，不是退費。文件1寫 Substitutions are permitted at any time——退費規定是誘答選項。']
]}

);

/* ── 統計 ─────────────────────────────────────────
   6 章 · 24 頁 · 12 份文件 · 30 題
   其中 17 題為交叉題（必須同時看兩份文件）
   全部文字原創，僅對齊題型結構
   美術成本：0 張新圖
   ─────────────────────────────────────────────── */
