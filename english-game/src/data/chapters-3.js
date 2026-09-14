/* ═══════════════════════════════════════════════════════
   chapters-3.js — 補字彙專輯（第三輯 · 6 章｜600–700 帶）
   載入順序：… → chapters-2.js → chapters-3.js

   這一輯的任務跟前兩輯不同
   ──────────────────────────────────────────────────────
   前兩輯：把故事講好，字彙是副產品
   這一輯：把 600–700 帶的常用字補滿，故事是載體

   所以密度刻意拉高：一章 15 個重點字（前兩輯是 5–8 個）。
   但不是把同義字排在一起背——那會互相干擾。
   每章鎖定一個職場場景，讓字因為「同一件事」而共存。

   一章 4 頁 · 約 200 字 · 重點字 15 個 · 小考 5 題
   6 章共 90 個新重點字，全部落在 600–700 帶。
   ═══════════════════════════════════════════════════════ */

CONTENT.chapters.push(

/* ═══ 第 12 章 · 交接 ═══ */
{
id:'c12', title:'The Handover File', zh:'交接清單',
blurb:'出差前的最後一小時，你把兩週的事寫成一張表。',
long:true,
pages:[
 {scene:'office',tint:'day',
  t:'You [fly|飛] out on [Monday|星期一].\nBefore that you must *[circulate|發送給相關人] the\n*[handover|交接] [file|檔案] to [three|三] [people|人].\n\nIt has [four|四] *[sections|段落]:\nwhat is *[pending|待處理], what is *[outstanding|未結清],\nwho to *[forward|轉寄] [things|事情] to,\nand what can [simply|就] [wait|等].'},
 {scene:'office',tint:'day',
  t:'*[Pending|待處理] means [work|工作] that has [started|開始].\n*[Outstanding|未結清] means [money|錢] not [yet|還沒] [paid|付].\nSam [asks|問] [what|什麼] the *[difference|差別] is.\n[Nobody|沒有人] has [ever|曾經] [told|告訴] him.\n\nYou [write|寫] both [words|字] on a *[sticky note|便利貼]\nand [stick|貼] it to his *[monitor|螢幕].'},
 {scene:'meeting',tint:'day',
  t:'The Morita *[draft|草稿] still [needs|需要] a *[revision|修訂].\nThe Chen [order|訂單] is [waiting|等待] for *[approval|核准].\nTwo [emails|信] must be *[forwarded|轉寄] to Priya,\nand one must be *[cc\'d|副本] to David.\n\nYou [mark|標記] the Chen [line|那一行] as *[priority|優先]\nand [put|放] a *[deadline|期限] [next|旁邊] to it.'},
 {scene:'meeting',tint:'warm',
  t:'At [five|五點] you *[circulate|發送] the [file|檔案].\nPriya [replies|回覆] in [two|兩] [minutes|分鐘]:\n"[Clearest|最清楚的] [one|一份] I have [seen|看過]."\n\nDavid [replies|回覆] at [seven|七點]:\n"Who [taught|教] you to do it like this?"\nYou [do|沒有] not [tell|告訴] him it was J.L.\'s [page|那一頁].'}
],
quiz:[
 ['pending 和 outstanding 的差別是？',['pending 指未付款，outstanding 指未開始','pending 指已開始但未完成，outstanding 指未結清的款項','兩個完全一樣','pending 比較急'],1,'第二頁直接寫了：pending 是已開始的工作，outstanding 是還沒付的錢。'],
 ['circulate 在這裡是什麼意思？',['循環','發送給相關的人','刪除','列印'],1,'circulate a document 是把文件發給所有該看的人。多益 Part 7 常見。'],
 ['哪一件事被標為 priority？',['Morita 草稿','Chen 訂單','轉寄給 Priya','副本給 David'],1,'You mark the Chen line as priority.'],
 ['cc 是什麼？',['回覆','副本','轉寄','密件副本'],1,'cc = carbon copy 副本。轉寄是 forward，密件副本是 bcc。'],
 ['最後一頁暗示了什麼？',['J.L. 教過你','你從 J.L. 留下的那頁學到做事方式','David 認識 J.L.','Priya 寫了這份檔案'],1,'呼應第 8 章那張鉛筆字的頁面——他從沒教過你，但那一行字影響了你。']
]},

/* ═══ 第 13 章 · 報帳 ═══ */
{
id:'c13', title:'Expenses', zh:'報帳',
blurb:'Sam 的第一次請款，少了一張收據。',
long:true,
pages:[
 {scene:'office',tint:'day',
  t:'Sam has to *[submit|提交] his first *[expense|費用] *[claim|請款].\nThe [trip|出差] [cost|花費] him [six|六] [thousand|千].\nThe *[allowance|補助額度] is [five|五].\n\nHe has *[exceeded|超過] it by a [thousand|一千]\nand he does [not|不] [know|知道] [yet|還不知道].'},
 {scene:'office',tint:'day',
  t:'You [look|看] [through|逐一看過] his *[receipts|收據].\n[One|一張] is *[missing|不見的] — the [taxi|計程車] on [Tuesday|星期二].\nWithout it the [amount|金額] cannot be *[reimbursed|報銷].\n\n"[Can|可以] I [just|就] [write|寫] it [down|下來]?" he [asks|問].\nYou [explain|解釋] that *[petty cash|零用金] needs a [slip|單據] [too|也].'},
 {scene:'meeting',tint:'day',
  t:'The [form|表格] has to be *[itemised|逐項列出]:\n[date|日期], [purpose|用途], [amount|金額], *[category|類別].\nFinance will *[reject|退回] it [otherwise|否則].\n\nThe *[deadline|期限] is the [fifth|五號].\n[After|之後] that the *[claim|請款] becomes *[overdue|逾期]\nand [moves|移到] to the [next|下] [month|月]\'s *[budget|預算].'},
 {scene:'meeting',tint:'warm',
  t:'You [tell|告訴] him to [call|打] the [taxi|計程車] [company|公司].\nThey [send|寄] a [copy|副本] the [same|同一] [afternoon|下午].\n\nThe [claim|請款] is *[settled|結清] on the [fourth|四號].\nSam [keeps|留著] [every|每一張] [receipt|收據] [now|現在],\n[even|甚至] the [small|小] [ones|那些].'}
],
quiz:[
 ['Sam 的出差費用有什麼問題？',['低於補助','超過補助一千','完全沒有收據','公司不給報'],1,'The allowance is five. He has exceeded it by a thousand.'],
 ['reimburse 是什麼意思？',['付款給廠商','把墊付的錢還給員工','退貨退款','預支費用'],1,'reimburse 是公司把員工先墊的錢還回去。refund 則是買賣的退款。'],
 ['itemised 的表格是指？',['手寫的','逐項列出的','電子的','匿名的'],1,'itemise 是把每一筆分項列清楚。多益帳務類文章的高頻字。'],
 ['過了五號會怎樣？',['請款被取消','請款逾期並移到下月預算','要重新申請','要扣薪'],1,'the claim becomes overdue and moves to the next month\'s budget.'],
 ['settle 在「The claim is settled」裡是？',['安頓','結清、了結','安定下來','移居'],1,'settle an account / a claim 是把款項了結。這是多益常考的一字多義。']
]},

/* ═══ 第 14 章 · 三份履歷 ═══ */
{
id:'c14', title:'The Shortlist', zh:'入圍名單',
blurb:'三份履歷攤在桌上，其中一份不該在這裡。',
long:true,
pages:[
 {scene:'meeting',tint:'day',
  t:'The *[vacancy|職缺] [closed|截止] on [Friday|星期五].\n[Eleven|十一] *[applicants|申請人]. Three on the *[shortlist|入圍名單].\n\nDavid [spreads|攤開] the *[résumés|履歷] on the [table|桌上].\n"[Two|兩個] [outside|外部], [one|一個] [inside|內部].\n[Tell|告訴] me [what|什麼] you [see|看到]."'},
 {scene:'meeting',tint:'day',
  t:'The [first|第一位] *[candidate|人選] has [eight|八] [years|年]\nof *[experience|經驗] and [strong|強的] *[qualifications|資格條件].\nHer *[notice period|預告期] is [three|三] [months|個月].\n\nThe [second|第二位] can [start|開始] [immediately|立即]\nbut has [changed|換過] [jobs|工作] [four|四] [times|次]\nin [five|五] [years|年]. High *[turnover|流動率] [risk|風險].'},
 {scene:'meeting',tint:'day',
  t:'The [third|第三份] is Sam\'s.\n[Fourteen|十四] [months|個月]. No [degree|學位] in the [field|領域].\n[Two|兩] [internal|內部] *[references|推薦人].\n\n"[If|如果] we *[appoint|任用] him," David [says|說],\n"he [goes|進入] on [six|六] [months|個月] *[probation|試用期].\nThe *[salary|薪資] is [lower|較低] than the [others|其他人] [expect|期待]."'},
 {scene:'meeting',tint:'warm',
  t:'"[And|而且] he [will|會] not *[negotiate|談判]," you [say|說].\n"[He|他] [should|應該]," David [replies|回覆].\n"[Tell|告訴] him the [range|範圍] [before|在…之前] the [interview|面試].\n\n[People|人] who [never|從不] [ask|開口] [get|得到] [less|較少],\nand [then|然後] they [leave|離開]."'}
],
quiz:[
 ['shortlist 是什麼？',['被淘汰的名單','進入下一關的人選名單','待辦清單','候補名單'],1,'shortlist 是從所有申請人中挑出的入圍名單。'],
 ['第一位人選的缺點是？',['經驗不足','資格不符','要三個月才能到職','沒有推薦人'],2,'Her notice period is three months——預告期要三個月才能離開現職。'],
 ['turnover 在這裡是什麼意思？',['營業額','人員流動率','翻轉','交接'],1,'turnover 一字兩義：營業額，以及員工流動率。這裡指後者。'],
 ['probation 是？',['緩刑','試用期','審查','實習'],1,'probation period 試用期。法律用語裡才是緩刑，職場語境是試用。'],
 ['David 最後那句話的意思是？',['不談薪水的人會被低估，最後會離職','Sam 不該談薪水','薪水不重要','應該直接給高薪'],0,'People who never ask get less, and then they leave——這是推論題，兩個子句要連起來看。']
]},

/* ═══ 第 15 章 · 交期 ═══ */
{
id:'c15', title:'Lead Time', zh:'交期',
blurb:'新供應商比較便宜，但慢了十天。',
long:true,
pages:[
 {scene:'warehouse',tint:'dawn',
  t:'*[Procurement|採購] [changed|更換] *[vendors|供應商] in [June|六月].\nThe new *[quotation|報價] was [twelve|十二] [percent|百分比] [lower|較低].\n\n[Nobody|沒有人] [checked|確認] the *[lead time|備貨交期].\nIt is [ten|十] [days|天] [longer|較長].\nOur *[inventory|庫存] [does|沒有] not [cover|涵蓋] [that|那個].'},
 {scene:'warehouse',tint:'day',
  t:'You [pull|調出] the *[stock|庫存] [report|報告].\n[Four|四] [items|品項] will [run|用] [out|完] [before|在…之前]\nthe next *[shipment|出貨] [arrives|抵達].\n\nTo *[restock|補貨] [early|提早] we would [pay|付]\n*[freight|運費] by [air|空運], [not|不是] [sea|海運].\n[That|那個] [wipes|抹去] [out|掉] the [whole|全部] [saving|省下的錢].'},
 {scene:'warehouse',tint:'day',
  t:'[There|還] is [also|也] *[customs|海關].\n*[Clearance|通關] [takes|需要] [two|兩] to [five|五] [days|天]\nand [cannot|無法] be [rushed|趕].\n\nThe *[contract|合約] has a *[penalty|罰則] [clause|條款]:\n[late|遲交] *[delivery|交貨] [costs|花費] us [one|一] [percent|百分比]\nper [day|每天], up to [ten|十].'},
 {scene:'meeting',tint:'warm',
  t:'You [write|寫] [it|它] up on [one|一] [page|頁]:\n[saving|省下], *[lead time|交期], *[freight|運費], *[penalty|罰則], [net|淨] [result|結果].\n\nThe [net|淨] [result|結果] is [minus|負] [four|四] [percent|百分比].\nDavid [reads|讀] it [twice|兩次] and [says|說]:\n"[Take|拿] [this|這個] to Procurement [yourself|你自己去]."'}
],
quiz:[
 ['lead time 是什麼？',['領導時間','從下單到交貨的時間','加班時間','運輸距離'],1,'lead time 是備貨交期。採購和物流文件的核心詞。'],
 ['為什麼提早補貨會抵銷省下的錢？',['要付罰金','要改用空運，運費較高','海關要收費','供應商漲價'],1,'freight by air, not sea. That wipes out the whole saving.'],
 ['clearance 在 customs clearance 裡是？',['清倉','通關','清潔','許可'],1,'customs clearance 是通關手續。clearance sale 才是清倉。'],
 ['合約的罰則怎麼算？',['一次罰十趴','每天一趴，最多十趴','每天十趴','不罰'],1,'one percent per day, up to ten.'],
 ['最後的淨結果是？',['省了十二趴','剛好打平','虧了四趴','虧了十趴'],2,'The net result is minus four percent——換供應商反而虧了。']
]},

/* ═══ 第 16 章 · 會議紀錄 ═══ */
{
id:'c16', title:'Minutes', zh:'會議紀錄',
blurb:'紀錄裡少了一條決議，而那條決議有人記得。',
long:true,
pages:[
 {scene:'meeting',tint:'day',
  t:'The *[agenda|議程] had [six|六] [items|項].\n[Nine|九] *[attendees|與會者], [two|兩] *[apologies|請假].\nPriya took the *[minutes|會議紀錄].\n\nOn [item|第] [four|四] 項 there was a *[proposal|提案]\nto *[postpone|延後] the [spring|春季] [launch|上市]\nby [three|三] [weeks|週].'},
 {scene:'meeting',tint:'day',
  t:'[Five|五] [people|人] [voted|投票] to *[approve|核准].\n[Two|兩] [voted|投票] to *[reject|否決].\n[Two|兩] [asked|要求] to *[amend|修改] the [dates|日期].\nIt was [not|不是] *[unanimous|全體一致], but it [passed|通過].\n\nThe *[action item|行動項目] was [given|給] to [Sales|業務部],\nwith a *[deadline|期限] of the [tenth|十號].'},
 {scene:'office',tint:'day',
  t:'The *[minutes|紀錄] [came|寄] [out|出] on [Thursday|星期四].\n[Item|第] [four|四] 項 is [not|不] in [them|裡面].\n\nPriya did [not|沒有] [miss|漏掉] it.\nShe [says|說] the *[chair|主席] [asked|要求] her\nto [leave|把…留] it [out|在外面] "[until|直到] it is [final|定案]".'},
 {scene:'office',tint:'dusk',
  t:'You [have|有] your [own|自己的] [notes|筆記].\n[Date|日期], [time|時間], [names|名字], [numbers|票數].\n\nYou [do|沒有] not [send|寄] [them|它們] [anywhere|到任何地方].\nYou [just|只是] *[file|歸檔] [them|它們], the [way|方式] J.L. [would|會] [have|做].\n[Some|有些] [records|紀錄] are [kept|留著] [for|為了] [later|以後].'}
],
quiz:[
 ['minutes 在會議語境裡是？',['分鐘','會議紀錄','間隔','細節'],1,'minutes of the meeting 是會議紀錄。這是多益最經典的一字多義陷阱。'],
 ['apologies 在出席名單裡是什麼意思？',['道歉信','請假未出席','抱歉的人','致詞'],1,'會議文件裡的 apologies 指事先請假無法出席的人。'],
 ['第四項的投票結果是？',['全體通過','五比二通過，兩人要求修改','被否決','延後表決'],1,'Five approve, two reject, two asked to amend. Not unanimous, but it passed.'],
 ['unanimous 是什麼意思？',['多數決','全體一致','匿名的','無效的'],1,'unanimous 全體一致同意。跟 anonymous（匿名）長得像，常被搞混。'],
 ['最後一頁暗示了什麼？',['她把紀錄寄給了所有人','他保留自己的紀錄以備日後','他要投訴主席','他不在乎這件事'],1,'Some records are kept for later——他沒有張揚，但留下了證據。']
]},

/* ═══ 第 17 章 · 一封投訴信 ═══ */
{
id:'c17', title:'The Complaint', zh:'投訴',
blurb:'客戶寫了三頁。只有最後一句是重點。',
long:true,
pages:[
 {scene:'room',tint:'dawn',
  t:'The *[complaint|投訴] [arrives|寄達] at [seven|七點] on [Monday|星期一].\n[Three|三] [pages|頁]. [Two|兩] [late|遲到的] *[deliveries|交貨],\n[one|一個] [wrong|錯的] [count|數量], [no|沒有] [warning|事先通知].\n\nThe [last|最後] [line|一句] [reads|寫著]:\n"I [am|正在] [asking|問] [because|因為] I [want|想要] to [stay|留下]."'},
 {scene:'room',tint:'day',
  t:'You *[acknowledge|回覆確認] it [within|在…之內] the [hour|一小時].\n[Not|不是] a [full|完整的] [answer|答覆] — [just|只是]\n"[Received|收到]. I [will|會] [reply|回覆] by [Wednesday|星期三]."\n\n[Then|然後] you *[investigate|調查].\nThe *[root cause|根本原因] is [one|一] [person|人] [leaving|離職]\nand [nobody|沒有人] [taking|接手] the [checks|檢查].'},
 {scene:'meeting',tint:'day',
  t:'David [wants|想要] to *[compensate|補償] [immediately|立刻].\nA *[goodwill|善意] [discount|折扣]. [Ten|十] [percent|趴].\n\nYou [think|認為] [that|那] is the [wrong|錯的] [answer|答案].\nHe [did|沒有] not [ask|要求] for [money|錢].\nHe [asked|問] [what|什麼] [changed|改變了].'},
 {scene:'meeting',tint:'warm',
  t:'You *[resolve|解決] it in [one|一] [page|頁]:\n[what|什麼] [broke|出問題], [who|誰] [owns|負責] it [now|現在],\n[what|什麼] [happens|發生] if it [breaks|出問題] [again|再次].\n\nHe [replies|回覆] in [ten|十] [minutes|分鐘]:\n"[This|這] is [why|為什麼] I [stay|留下]."\nThe *[discount|折扣] is [never|從來沒有] [mentioned|提起].'}
],
quiz:[
 ['客戶那封信最後一句透露了什麼？',['他要求退款','他想終止合作','他其實想繼續合作','他要告我們'],2,'I am asking because I want to stay——這是全文的關鍵句。'],
 ['acknowledge 在這裡是什麼意思？',['承認錯誤','回覆確認已收到','感謝','拒絕'],1,'acknowledge receipt 是先回一句「收到了」，不是完整答覆。'],
 ['root cause 是？',['表面症狀','根本原因','責任歸屬','解決方案'],1,'root cause analysis 是找出問題的根源，不是處理表象。'],
 ['問題的根本原因是什麼？',['供應商出錯','有人離職後沒有人接手檢查','系統當機','客戶下錯單'],1,'one person leaving and nobody taking the checks.'],
 ['為什麼最後沒有提到折扣？',['公司不同意','客戶要的是說明，不是補償','折扣太少','忘記了'],1,'He did not ask for money. He asked what changed.——補償解決不了他真正的疑慮。']
]}

);

/* ── 統計 ─────────────────────────────────────────
   6 章 · 24 頁 · 約 1,200 字英文
   新增重點字 90 個（600–700 帶）
   小考 30 題
   美術成本：0 張新圖
   ─────────────────────────────────────────────── */
