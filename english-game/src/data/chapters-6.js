/* ═══════════════════════════════════════════════════════
   chapters-6.js — 第六輯（8 章）
   載入順序：… → chapters-5.js → chapters-6.js → dict.js

   這一輯補的是「出事的時候才會用到的字」
   ──────────────────────────────────────────────────────
   前面幾輯教的是日常運作：交接、報帳、交期、會議。
   這一輯教的是例外狀況——理賠、稽核、法規、呆帳、資安、
   滯期費、推薦信。這些字平常用不到，但一用到就是大事，
   而且多益 Part 7 特別愛考（因為文件最多）。

   兩章特別為你的領域寫：
     第 37 章　釣魚信與帳號外洩（資訊）
     第 38 章　滯期費與裝卸時間（海事）

   一章 4 頁 · 約 190 字 · 重點字 15 個 · 小考 5 題
   共 120 個新重點字。
   ═══════════════════════════════════════════════════════ */

CONTENT.chapters.push(

/* ═══ 第 32 章 · 理賠 ═══ */
{
id:'c32', title:'The Claim', zh:'理賠',
blurb:'貨在海上泡了水。保險公司先問的不是損失，是你有沒有拍照。',
long:true,
pages:[
 {scene:'warehouse',tint:'storm',
  t:'Water [got|進] into [two|兩] ~[containers|貨櫃] [during|在…期間] the [storm|風暴].\n[Sixty|六十] [cartons|紙箱] are [soaked|濕透的].\n\nThe *[insurer|保險公司] [needs|需要] a *[claim|理賠申請] [within|在…之內] [seven|七] [days|天].\nDavid [asks|問] [one|一] [question|問題] [first|先]:\n"[Did|有沒有] [anyone|任何人] [photograph|拍照] [them|它們] [before|在…之前] [they|它們] [were|被] [moved|移動]?"'},
 {scene:'warehouse',tint:'storm',
  t:'Sam [did|有]. [Nineteen|十九] [photos|照片], [time|時間]-[stamped|標記].\n\nThe *[policy|保單] *[covers|承保] [water|水] [damage|損害]\n[but|但] [not|不] [if|如果] the [goods|貨物] [were|被] [stored|存放] [outside|在外面].\n[They|它們] [were|是] [not|沒有].\nThat [one|一] [fact|事實] [makes|使] the *[claim|理賠] *[valid|有效的].'},
 {scene:'meeting',tint:'day',
  t:'An *[assessor|理賠查勘員] [comes|來] on [Thursday|星期四].\nHe [is|不是] not [there|在那裡] [to|去] [argue|爭論].\nHe [is|是] [there|在那裡] [to|去] *[verify|查證] [what|什麼] you *[submitted|提交].\n\nThe *[excess|自負額] [is|是] [twenty|二十] [thousand|千].\n[Below|低於] [that|那], [claiming|理賠] [costs|花費] [more|更多] [than|比] [it|它] *[recovers|收回].'},
 {scene:'meeting',tint:'warm',
  t:'The *[settlement|理賠金] [arrives|抵達] [in|在] [March|三月]:\n[one|一] [hundred|百] [and|和] [forty|四十] [thousand|千], [less|減去] the *[excess|自負額].\n\nDavid [writes|寫] [one|一] [line|行] [in|在] the [file|檔案]:\n"[Photograph|拍照] [everything|一切], [always|總是].\n[It|它] [is|是] [the|那個] [only|唯一] [part|部分] [we|我們] *[control|控制]."'}
],
quiz:[
 ['為什麼 David 先問有沒有拍照？',['他想看損失有多慘','照片是理賠最關鍵的證據','他要向客戶交代','保險公司要求'],1,'理賠成不成立看的是證據。第二頁的 nineteen time-stamped photos 就是關鍵。'],
 ['保單在什麼情況下不理賠？',['貨物存放在戶外','貨物超過六十箱','風暴等級不夠','超過七天'],0,'covers water damage but not if the goods were stored outside。'],
 ['assessor 來做什麼？',['爭論金額','查證申報的內容','重新包裝','拍照'],1,'He is there to verify what you submitted。not there to argue 已經先排除了 A。'],
 ['excess 在保險裡是什麼意思？',['超額賠償','自負額','附加保費','過剩庫存'],1,'excess（美式說 deductible）是被保人自己要負擔的那一段金額。'],
 ['為什麼金額低於二十萬就不值得理賠？',['保險公司會拒絕','低於自負額，理賠的成本比拿回的還多','需要更多文件','會影響保費'],1,'Below that, claiming costs more than it recovers。']
]},

/* ═══ 第 33 章 · 稽核 ═══ */
{
id:'c33', title:'The Auditor', zh:'稽核員',
blurb:'她只抽十五筆。但她知道要抽哪十五筆。',
long:true,
pages:[
 {scene:'meeting',tint:'day',
  t:'The *[auditor|稽核員] [arrives|抵達] [at|在] [nine|九點].\nHer [name|名字] [is|是] Ms. Ferreira.\nShe [asks|要求] [for|要] [a|一] [desk|桌子], [not|不是] [a|一間] [meeting|會議] [room|室].\n\nThe *[scope|範圍] [is|是] [narrow|窄的]: [purchase|採購] *[approvals|核准] [only|僅],\n[from|從] [January|一月] [to|到] [June|六月].'},
 {scene:'meeting',tint:'day',
  t:'She *[samples|抽樣] [fifteen|十五] [orders|訂單] [out|從] [of|其中] [four|四] [hundred|百].\n[Not|不是] [at|隨] [random|機] — [the|那些] [largest|最大的], [the|那些] [latest|最晚的],\n[and|和] [three|三] [that|那些] [were|被] *[amended|修改] [after|在…之後] *[approval|核准].\n\n"[Anyone|任何人] [can|能] [pass|通過] [a|一次] *[random|隨機的] [check|檢查],"\nshe [says|說]. "[That|那] [is|是] [not|不是] [the|那個] [point|重點]."'},
 {scene:'office',tint:'day',
  t:'[Thirteen|十三] [are|是] [clean|乾淨的].\n[Two|兩筆] [have|有] [no|沒有] *[evidence|證據] [of|的] *[approval|核准] [at|完] [all|全]\n— [just|只有] [an|一封] [email|信] [saying|說] "[go|去] [ahead|進行]".\n\nShe [calls|稱] [that|那] [a|一個] *[deficiency|缺失], [not|不是] [a|一個] [fraud|舞弊].\n"[The|那個] *[control|控管] [exists|存在]. [It|它] [was|被] [skipped|跳過].\n[Write|寫] [down|下] [why|為什麼]."'},
 {scene:'office',tint:'warm',
  t:'You [write|寫] [it|它] [down|下]: [both|兩筆] [were|是] [urgent|緊急的],\n[both|兩筆] [were|被] [approved|核准] [verbally|口頭地], [nobody|沒有人] *[documented|記錄] [it|它].\n\nHer *[finding|稽核發現] [is|是] [one|一] [sentence|句] [long|長]:\n"*[Verbal|口頭的] *[approvals|核准] [are|是] [not|不] [recorded|記錄].\n*[Remediate|改善] [by|在…之前] [Q4|第四季]."\n[Nobody|沒有人] [is|被] [named|點名].'}
],
quiz:[
 ['稽核的範圍是什麼？',['全公司所有流程','一月到六月的採購核准','員工出勤','庫存盤點'],1,'The scope is narrow: purchase approvals only, from January to June。scope 是稽核文件的核心詞。'],
 ['她為什麼不隨機抽樣？',['隨機太慢','她想找特定的人','有問題的通常集中在特定條件','公司規定'],2,'她挑最大的、最晚的、核准後被改過的——Anyone can pass a random check。'],
 ['deficiency 和 fraud 的差別是？',['完全一樣','deficiency 是控管沒被執行，fraud 是刻意舞弊','deficiency 比較嚴重','fraud 不用寫進報告'],1,'The control exists. It was skipped——她明確區分了兩者。'],
 ['remediate 是什麼意思？',['重新測試','改善缺失','移除紀錄','調解'],1,'remediate 是針對缺失採取改善措施，SOX 與稽核報告的標準用字。'],
 ['最後一句「Nobody is named」暗示什麼？',['沒有人要負責','問題被定位在流程，不是個人','稽核失敗','報告還沒寫完'],1,'她的 finding 寫的是制度層面的缺失，這是專業稽核的寫法。']
]},

/* ═══ 第 34 章 · 一模一樣的圖 ═══ */
{
id:'c34', title:'The Same Drawing', zh:'一模一樣的圖',
blurb:'對手的型錄上，那張圖連我們畫錯的地方都一樣。',
long:true,
pages:[
 {scene:'office',tint:'day',
  t:'Priya [finds|發現] [it|它] [on|在] [a|一份] *[catalogue|型錄] [online|線上].\n[Our|我們的] [carton|紙箱] [drawing|圖面], [another|另一家] [company|公司]\'s [name|名字].\n\n[Not|不是] [similar|相似的]. *[Identical|一模一樣的].\n[Down|甚至] [to|到] [a|一個] [small|小的] [error|錯誤] [in|在] [the|那個] [corner|角落]\n[that|那個] [we|我們] [never|從未] [corrected|修正].'},
 {scene:'office',tint:'day',
  t:'That [error|錯誤] [is|是] [the|那個] [evidence|證據].\n[A|一個] [coincidence|巧合] [does|不會] not *[reproduce|複製] [a|一個] [mistake|錯誤].\n\nThe [file|檔案] [was|被] [sent|寄] [to|給] [six|六] *[suppliers|供應商] [in|在] [April|四月].\n[One|其中一家] [of|的] [them|它們] [now|現在] [works|合作] [with|與] [that|那家] [company|公司].\n[The|那個] [trail|線索] [is|是] [short|短的].'},
 {scene:'meeting',tint:'day',
  t:'[Legal|法務] [explains|解釋] [the|那些] [options|選項].\n[We|我們] [could|可以] [send|寄] [a|一封] *[cease and desist|停止侵權通知] [letter|信].\n[We|我們] [could|可以] [open|展開] [a|一場] *[dispute|爭議] [and|而且] *[claim|主張] *[infringement|侵權].\n\n[Both|兩者] [take|花] [months|數月]. [Both|兩者] [cost|花費] [more|更多]\n[than|比] [the|那個] [drawing|圖面] [is|是] [worth|值得].'},
 {scene:'meeting',tint:'warm',
  t:'David [chooses|選擇] [something|某件事] [simpler|更簡單的].\nHe [emails|寄信給] [the|那個] *[supplier|供應商] [one|一] [line|行]:\n"[We|我們] [know|知道]. [We|我們] [are|正在] [removing|移除] [you|你] [from|從] [the|那份] [list|名單]."\n\n[Two|兩] [weeks|週] [later|之後] [the|那個] *[catalogue|型錄] [page|頁]\n[quietly|悄悄地] *[disappears|消失]. [Nobody|沒有人] [ever|曾經] [replies|回覆].'}
],
quiz:[
 ['他們怎麼確定圖是被抄的？',['尺寸一樣','連我們沒修正的錯誤都一樣','對方承認了','法務查證過'],1,'A coincidence does not reproduce a mistake——錯誤才是最強的證據。'],
 ['identical 和 similar 的差別？',['沒有差別','identical 是一模一樣，similar 只是相似','similar 比較嚴重','identical 只用在人'],1,'第一頁刻意寫 Not similar. Identical.'],
 ['cease and desist 是什麼？',['停業通知','要求停止侵權行為的正式信函','解約書','和解協議'],1,'cease and desist letter 是法律程序的第一步，要求對方立即停止。'],
 ['為什麼不走法律途徑？',['證據不足','耗時且成本高於圖面的價值','法務不同意','對方在國外'],1,'Both take months. Both cost more than the drawing is worth。'],
 ['David 的做法為什麼有效？',['對方怕被告','切斷合作關係比訴訟更快也更痛','他認識對方老闆','他公開了這件事'],1,'一封信、兩週後型錄頁就消失了——商業關係的槓桿比訴訟快得多。']
]},

/* ═══ 第 35 章 · 六十天 ═══ */
{
id:'c35', title:'Sixty Days', zh:'六十天',
blurb:'他不是不想付。是他已經付不出來了。',
long:true,
pages:[
 {scene:'room',tint:'dawn',
  t:'The Dahan [account|帳款] [is|是] [sixty|六十] [days|天] ~[overdue|逾期].\n[Three|三] [reminders|催款通知]. [No|沒有] [reply|回覆].\n\nTheir [phone|電話] [still|仍然] [works|通].\nTheir [website|網站] [still|仍然] [takes|接受] [orders|訂單].\n[But|但] [the|那個] *[receivable|應收帳款] [has|沒有] not [moved|動] [since|自從] [May|五月].'},
 {scene:'office',tint:'day',
  t:'You *[chase|追討] [it|它] [again|再一次].\n[This|這] [time|次] [somebody|某人] [answers|接了]:\nthe [company|公司] [has|已經] [gone|進入] [into|到] *[administration|重整程序].\n\n[That|那] [means|意味著] [an|一位] *[administrator|管理人] [now|現在] [decides|決定]\n[who|誰] [gets|拿到] [paid|付款], [and|而且] [in|按] [what|什麼] *[order|順序].'},
 {scene:'meeting',tint:'day',
  t:'*[Secured|有擔保的] *[creditors|債權人] [come|排] [first|第一].\n[Banks|銀行], [usually|通常]. [Then|然後] [staff|員工] [wages|薪資].\n*[Unsecured|無擔保的] *[creditors|債權人] — [us|我們] — [come|排] [last|最後].\n\n[The|那個] *[administrator|管理人] [estimates|估計] [eight|八] [pence|便士] [in|每] [the|一] [pound|英鎊].\n[Eight|八] [per cent|百分比] [of|的] [what|什麼] [we|我們] [are|被] [owed|欠].'},
 {scene:'meeting',tint:'dusk',
  t:'David *[writes|沖銷] [the|那筆] [rest|其餘] *[off|掉].\n[Not|不是] [because|因為] [he|他] [wants|想要] [to|去],\n[but|而是] [because|因為] [carrying|背著] [it|它] [on|在] [the|那本] [books|帳上]\n[makes|使] [every|每個] [forecast|預測] [wrong|錯誤].\n\n[Then|然後] [he|他] [changes|更改] [one|一] [rule|規定]:\n[new|新] [clients|客戶] [get|得到] [a|一個] *[credit limit|信用額度] [of|為] [thirty|三十] [days|天],\n[not|不是] [sixty|六十].'}
],
quiz:[
 ['為什麼三次催款都沒有回應？',['他們換了地址','公司已經進入重整程序','信被歸類成垃圾信','聯絡人離職了'],1,'the company has gone into administration。'],
 ['receivable 是什麼？',['應付帳款','應收帳款','可接受的','收據'],1,'accounts receivable 是別人欠你的錢。應付是 payable，方向相反。'],
 ['在重整程序裡誰最後拿到錢？',['銀行','員工','無擔保債權人','管理人'],2,'Unsecured creditors — us — come last。'],
 ['「eight pence in the pound」是什麼意思？',['每英鎊多付八便士','大約只能拿回八%','八英鎊的手續費','付款延後八週'],1,'Eight per cent of what we are owed——下一句直接解釋了。'],
 ['David 為什麼要沖銷這筆帳？',['法律規定','留在帳上會讓所有預測失真','可以節稅','客戶要求'],1,'carrying it on the books makes every forecast wrong。']
]},

/* ═══ 第 36 章 · 新規定 ═══ */
{
id:'c36', title:'New Rules', zh:'新規定',
blurb:'法規在明年一月生效。我們的庫存撐不到那時候。',
long:true,
pages:[
 {scene:'meeting',tint:'day',
  t:'A new *[regulation|法規] [takes|生] *[effect|效] [in|在] [January|一月].\n[All|所有] [cartons|紙箱] [sold|銷售] [here|這裡] [must|必須] [be|被]\n*[certified|認證] [as|為] *[recyclable|可回收的], [with|附] [a|一個] *[label|標示].\n\n[Our|我們的] [current|目前的] [stock|庫存] [is|是] [not|不] *[certified|認證的].\n[It|它] [is|是] [recyclable|可回收的]. [It|它] [is|沒有] [just|只是] [not|沒有] [certified|認證].'},
 {scene:'meeting',tint:'day',
  t:'[There|有] [is|是] [a|一個] *[threshold|門檻]: [companies|公司] [under|低於]\n[fifty|五十] [staff|員工] [are|被] *[exempt|豁免] [until|直到] [the|那個] [following|次] [year|年].\n[We|我們] [have|有] [fifty|五十]-[four|四].\n\n[Four|四] [people|人] [decide|決定] [whether|是否] [we|我們] [are|被]\n*[exempt|豁免] [or|或] [not|不]. [Nobody|沒有人] [finds|覺得] [that|那] [funny|好笑].'},
 {scene:'warehouse',tint:'day',
  t:'*[Certification|認證] [takes|需要] [eight|八] [weeks|週] [and|而且]\n[must|必須] [be|被] [done|完成] [by|由] [the|那個] *[supplier|供應商], [not|不是] [by|由] [us|我們].\n[If|如果] [we|我們] [apply|申請] [in|在] [October|十月], [we|我們] *[comply|符合規定].\n[If|如果] [we|我們] [wait|等], [we|我們] [do|沒有] [not|有].\n\n[The|那個] *[penalty|罰則] [is|是] [per|每] *[unit|單位] [sold|售出],\n[not|不是] [per|每] *[breach|違規]. [That|那] [detail|細節] [matters|很重要].'},
 {scene:'warehouse',tint:'warm',
  t:'You [apply|申請] [on|在] [the|那] [fourth|四] [of|日] [October|十月].\n[The|那些] [labels|標示] [arrive|抵達] [in|在] [December|十二月].\n\n[In|在] [February|二月] [a|一家] [competitor|競爭對手] [is|被] [fined|罰款]\n[for|因為] [selling|銷售] [uncertified|未認證的] [stock|庫存].\n[The|那個] [amount|金額] [is|是] [not|不] [published|公開],\n[but|但] [their|他們的] [prices|價格] [go|上] [up|漲] [in|在] [March|三月].'}
],
quiz:[
 ['公司目前的紙箱有什麼問題？',['不可回收','可回收但沒有認證','尺寸不符','來源不明'],1,'It is recyclable. It is just not certified——可回收和「經認證」是兩回事。'],
 ['exempt 是什麼意思？',['被罰款','被豁免','被檢驗','被出口'],1,'exempt 是免除適用某項規定。多益法規類文章的高頻字。'],
 ['為什麼四個人的差別很重要？',['要裁員四人','豁免門檻是五十人，公司有五十四人','四個人負責決定','四人請假'],1,'門檻是 under fifty，他們有 fifty-four——只差四個人就不能豁免。'],
 ['罰則怎麼計算？',['每次違規罰一次','依售出的每一個單位計算','按年營業額','固定金額'],1,'per unit sold, not per breach——這個差別會讓金額差好幾個數量級。'],
 ['最後一段暗示了什麼？',['競爭對手倒閉了','罰款讓對手的成本上升，反映在價格上','認證沒有用','政府放寬了規定'],1,'被罰之後三月漲價——代價最後轉嫁到價格上。']
]},

/* ═══ 第 37 章 · 那個連結 ═══ */
{
id:'c37', title:'The Link', zh:'那個連結',
blurb:'信看起來完全正常。只有網域少了一個字母。',
long:true,
pages:[
 {scene:'room',tint:'night',
  t:'The [email|信] [looks|看起來] [normal|正常的].\n[Our|我們的] [logo|標誌]. [Our|我們的] [wording|措辭]. [Our|我們的] [signature|簽名檔].\n[Subject|主旨]: "[Password|密碼] [expiring|即將到期] — [action|行動] [required|必要的]".\n\n[The|那個] *[link|連結] [goes|前往] [to|到] [a|一個] *[domain|網域]\n[one|一個] [letter|字母] [different|不同] [from|從] [ours|我們的].'},
 {scene:'office',tint:'day',
  t:'[Four|四] [people|人] [clicked|點擊] [it|它].\n[Two|兩個] [entered|輸入] [their|他們的] *[credentials|帳號密碼].\n[One|一個] [of|的] [them|他們] [has|有] *[access|存取權] [to|到] [the|那個] [payment|付款] [system|系統].\n\n[We|我們] [have|有] [about|大約] [an|一] [hour|小時] [before|在…之前] [anything|任何事] [is|被] [used|使用].\n[Maybe|也許] [less|更少].'},
 {scene:'office',tint:'day',
  t:'You *[reset|重設] [both|兩個] [accounts|帳號] [first|先],\n[then|然後] *[revoke|撤銷] [every|每一個] [active|有效的] *[session|連線階段].\n[Then|然後] you *[alert|通知] [everyone|每個人] — [but|但] [not|不] [by|用] [email|信].\n\n"[If|如果] [they|他們] [are|在] [in|裡面] [the|那個] [mailbox|信箱],"\nSam [says|說], "[the|那封] [warning|警告] [goes|去] [to|到] [them|他們] [too|也]."'},
 {scene:'meeting',tint:'warm',
  t:'[Nothing|沒有東西] [is|被] [taken|取走]. [This|這] [time|次].\n\nThe *[report|報告] [is|是] [two|兩] [pages|頁].\n[One|一] *[recommendation|建議]: [payment|付款] [changes|變更] [now|現在] [need|需要]\n[a|一] [second|第二人] [person|人], [and|而且] [never|從不] [by|透過] [email|信] [alone|單獨].\n\nDavid [signs|簽核] [it|它] [the|同] [same|一] [day|天].\n[He|他] [has|沒有] [not|有] [done|做過] [that|那樣] [before|之前].'}
],
quiz:[
 ['這封信哪裡有問題？',['文法錯誤','沒有簽名檔','網域比正版少一個字母','沒有主旨'],2,'The link goes to a domain one letter different from ours——這是釣魚信最典型的手法。'],
 ['credentials 是什麼？',['信用評等','推薦信','帳號與密碼','資格證明'],2,'在資安語境裡 credentials 指登入用的帳密。在人事語境才是資格證明。'],
 ['為什麼不用 email 通知大家？',['太慢','攻擊者可能已經在信箱裡，會看到警告','公司規定','系統當機'],1,'If they are in the mailbox, the warning goes to them too。'],
 ['revoke sessions 的目的是什麼？',['刪除帳號','讓已經登入的連線失效','重設密碼','封鎖網域'],1,'改密碼不會踢掉已經登入的連線，所以要另外撤銷。這是資安處理的標準順序。'],
 ['最後一句想說什麼？',['David 平常不簽文件','這次事件讓他破例當天就核准了改流程','報告寫得太長','他不同意這個建議'],1,'He has not done that before——強調這次的急迫程度。']
]},

/* ═══ 第 38 章 · 滯期費 ═══ */
{
id:'c38', title:'Demurrage', zh:'滯期費',
blurb:'船準時到了。但沒有人算過卸貨要花幾天。',
long:true,
pages:[
 {scene:'port',tint:'dawn',
  t:'The [vessel|船] [arrives|抵達] [on|在] [the|那] [second|二日].\n[The|那個] *[charter|租船契約] [allows|允許] [five|五] [days|天] [of|的] *[laytime|裝卸時間]\n— [the|那個] [free|免費的] [period|期間] [for|用於] *[discharge|卸貨].\n\n[After|之後] [that|那], *[demurrage|滯期費] [begins|開始] [to|去] *[accrue|累計]:\n[four|四] [thousand|千] [a|每] [day|天], [weekends|週末] [included|包含].'},
 {scene:'port',tint:'day',
  t:'The [port|港口] [is|是] *[congested|壅塞的].\n[Six|六] [vessels|船], [three|三] *[berths|泊位].\n[Our|我們的] [ship|船] [waits|等待] [two|兩] [days|天] [before|在…之前] [it|它] [can|能] [berth|靠泊].\n\n[The|那個] [question|問題] [is|是] [whether|是否] [that|那段] [waiting|等待] [time|時間]\n[counts|算] [against|進] [the|那個] *[laytime|裝卸時間].\n[It|它] [depends|取決] [on|於] [one|一] [clause|條款].'},
 {scene:'meeting',tint:'day',
  t:'The [clause|條款] [says|說] *[laytime|裝卸時間] [starts|開始]\n[when|當] the *[notice of readiness|備裝通知] [is|被] *[tendered|遞交],\n"[whether|不論] [in|在] [berth|泊位] [or|或] [not|不在]".\n\n[Those|那] [six|六] [words|字] [cost|花] [us|我們] [eight|八] [thousand|千].\n[The|那個] [master|船長] *[tendered|遞交] [on|在] [arrival|抵達時], [not|不是] [on|在] [berthing|靠泊時].'},
 {scene:'port',tint:'warm',
  t:'You [do|沒有] not *[dispute|爭議] [it|它]. [The|那個] [clause|條款] [is|是] [clear|清楚的].\n[You|你] *[negotiate|談判] [instead|反而]: [the|那個] [agent|代理] *[waives|免除]\n[one|一] [day|天] [because|因為] [the|那個] *[discharge|卸貨] [gear|機具] [failed|故障]\n[for|有] [six|六] [hours|小時] [on|在] [their|他們的] [side|那一方].\n\n[Next|下個] [contract|合約], [that|那] [phrase|片語] [comes|被] [out|拿掉].'}
],
quiz:[
 ['laytime 是什麼？',['航行時間','契約允許的免費裝卸時間','船員休息時間','靠泊等待時間'],1,'the free period for discharge——超過才開始算滯期費。'],
 ['demurrage 什麼時候開始計算？',['船抵達時','靠泊時','laytime 用完之後','卸貨完成後'],2,'After that, demurrage begins to accrue。'],
 ['「whether in berth or not」這句的效果是？',['等泊時間不算','等泊時間也算進 laytime','船長可以自行決定','需要港口同意'],1,'不論有沒有靠泊，遞交備裝通知就開始計時——所以等的那兩天也算。'],
 ['他們為什麼不爭議？',['金額太小','條款寫得很清楚，爭不贏','沒有時間','律師建議'],1,'The clause is clear——他改用談判而不是爭議。'],
 ['最後拿到什麼結果？',['全額免除','免除一天，因為對方機具故障六小時','延後付款','換一艘船'],1,'the agent waives one day because the discharge gear failed。']
]},

/* ═══ 第 39 章 · 推薦信 ═══ */
{
id:'c39', title:'The Reference', zh:'推薦信',
blurb:'她問我三個問題。第三個最難回答。',
long:true,
pages:[
 {scene:'office',tint:'day',
  t:'Priya *[resigned|辭職] [in|在] [August|八月].\nHer *[notice period|預告期] [is|是] [one|一] [month|個月].\nThe *[replacement|接替者] [starts|開始] [in|在] [three|三] [weeks|週],\n[which|這] [leaves|留下] [one|一] [week|週] [of|的] ~[handover|交接].\n\n[Her|她的] [new|新] [employer|雇主] [asks|要求] [for|要] [a|一份] *[reference|推薦／查核].'},
 {scene:'room',tint:'day',
  t:'[It|它] [is|不是] not [a|一封] [letter|信]. [It|它] [is|是] [a|一通] [phone|電話] [call|通話].\n[Three|三] [questions|問題], [the|那位] [woman|女士] [says|說],\n[and|而且] [everything|一切] [is|是] *[confidential|保密的].\n\n"[Would|會] [you|你] [re|重]-[employ|雇用] [her|她]?" — [easy|容易的].\n"[Any|任何] [concerns|疑慮] [about|關於] [attendance|出勤]?" — [none|沒有].'},
 {scene:'room',tint:'dusk',
  t:'"[Is|是] [there|那裡] [anything|任何事] [you|你] [would|會] [want|想要] [to|去] [know|知道],\n[if|如果] [you|你] [were|是] [me|我]?"\n\n[That|那] [is|是] [the|那個] [third|第三個] [question|問題].\n[It|它] [is|是] [designed|設計] [to|去] [find|找出] [the|那個] [thing|事情]\n[nobody|沒有人] [puts|放] [in|在] [writing|書面].'},
 {scene:'office',tint:'warm',
  t:'You [could|可以] *[mention|提起] [the|那個] [March|三月] [dispute|爭執].\n[You|你] [could|可以] *[decline|婉拒] [to|去] [answer|回答].\n\n[You|你] [say|說]: "[She|她] [will|會] [tell|告訴] [you|你] [when|當] [something|某事] [is|是] [wrong|錯的].\n[Some|有些] [managers|主管] [find|覺得] [that|那] [difficult|困難的]."\n\n[The|那位] [woman|女士] [laughs|笑了]. "[That|那] [is|是] [why|為什麼] [we|我們] [want|想要] [her|她]."'}
],
quiz:[
 ['交接只剩多久？',['一個月','三週','一週','沒有交接'],2,'預告期一個月，接替者三週後才到，所以只剩 one week of handover。要自己算。'],
 ['reference 在這裡是什麼？',['參考資料','前雇主的查核','編號','推薦產品'],1,'employment reference 是新雇主向前雇主查核。這裡是用電話進行。'],
 ['第三個問題的目的是什麼？',['測試你的英文','套出不會寫進書面的資訊','確認出勤紀錄','確認薪資'],1,'designed to find the thing nobody puts in writing。'],
 ['他最後怎麼回答？',['提起三月的爭執','拒絕回答','把她的直言包裝成優點','說她沒有缺點'],2,'She will tell you when something is wrong——他把可能被視為缺點的特質誠實講出來，但用對的框架。'],
 ['對方為什麼笑？',['他答錯了','那正是他們想要的特質','問題問完了','他講得太久'],1,'That is why we want her——他誠實講的那件事，剛好是對方要找的。']
]}

);

/* ── 統計 ─────────────────────────────────────────
   8 章 · 32 頁 · 約 1,500 字英文
   新增重點字 120 個（理賠 · 稽核 · 智財 · 呆帳 ·
   法規 · 資安 · 海事滯期費 · 推薦信）
   小考 40 題
   美術成本：0 張新圖
   ─────────────────────────────────────────────── */
