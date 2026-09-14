/* ═══════════════════════════════════════════════════════
   chapters-9.js — 第九輯（8 章）
   載入順序：… → chapters-8.js → chapters-9.js → dict.js

   繼續把新字庫的字寫進情境
   ──────────────────────────────────────────────────────
   第八輯處理了趨勢、保險、銀行、房地產、醫療、教育、
   環境、媒體。這一輯換八個還沒有情境的類別：

     餐飲零售 · 公共許可 · 績效考評 · 談判桌
     一場誤會（易混淆字）· 專案失控（片語動詞）
     接班 · 停工危機

   第 60 章特別一點：整個故事建立在一組易混淆字上。
   imply 和 infer 弄反了，一封信就變成另一個意思。

   一章 4 頁 · 約 190 字 · 重點字 15 個 · 小考 5 題
   ═══════════════════════════════════════════════════════ */

CONTENT.chapters.push(

/* ═══ 第 56 章 · 餐飲零售 ═══ */
{
id:'c56', title:'Shelf Life', zh:'保存期限',
blurb:'賣得最好的那一項，也是丟掉最多的那一項。',
long:true,
pages:[
 {scene:'counter',tint:'dawn',
  t:'The [shop|店] [does|做] [a|一次] *[inventory count|盤點] [every|每] [Monday|星期一].\n[Two|兩] [lines|品項] [sell|賣] [out|光] [by|在] [Friday|星期五].\n[One|一] [line|品項] [never|從未] [does|如此].\n\n[It|它] [is|是] *[perishable|易腐的] — [a|一個] [four|四]-[day|天] *[shelf life|保存期限].'},
 {scene:'counter',tint:'day',
  t:'[The|那個] [margin|毛利] [on|在] [it|它] [is|是] [the|那個] [highest|最高的] [in|在] [the|那個] [shop|店].\n[So|所以] [is|是] [the|那個] [waste|損耗].\n\n[Last|上] [quarter|季] [we|我們] [threw|丟] [away|掉] [eleven|十一] [per cent|百分比].\n[Nobody|沒有人] [had|已經] [put|放] [the|那] [two|兩個] [numbers|數字] [side|並] [by|排] [side|地].'},
 {scene:'warehouse',tint:'day',
  t:'[The|那個] *[wholesaler|批發商] [delivers|配送] [twice|兩次] [a|一] [week|週].\n[Three|三] [times|次] [would|會] [cost|花費] [more|更多] [per|每] [drop|趟]\n[but|但] [cut|減少] [the|那個] [order|訂貨] [size|量] [by|達] [a|一] [third|三分之一].\n\n[We|我們] [also|也] [move|移動] [it|它] [to|到] [the|那個] *[checkout counter|結帳櫃檯]\n[from|從] [the|那個] [back|後面] *[aisle display|走道陳列].'},
 {scene:'counter',tint:'warm',
  t:'[Waste|損耗] [drops|下降] [to|到] [four|四] [per cent|百分比] [in|在] [six|六] [weeks|週].\n[Sales|銷售] [rise|上升] [nine|九].\n\n[The|那位] [supplier|供應商] [asks|問] [what|什麼] [we|我們] [changed|改變].\n"[Nothing|沒有東西] [about|關於] [the|那個] [product|產品]," you [say|說].\n"[We|我們] [stopped|停止] [buying|購買] [four|四] [days|天] [of|的] [it|它] [at|一] [once|次]."'}
],
quiz:[
 ['那一項商品的問題是什麼？',['賣不好','毛利最高但損耗也最高','價格太貴','供應不穩'],1,'The margin on it is the highest. So is the waste。'],
 ['perishable 是什麼意思？',['易碎的','易腐的','可退貨的','限量的'],1,'四天的保存期限——食品類文章的高頻字。'],
 ['為什麼改成一週送三次？',['比較便宜','每趟成本較高，但單次訂貨量少三分之一','供應商要求','法規規定'],1,'cost more per drop but cut the order size by a third。'],
 ['另一個改變是什麼？',['降價','從走道陳列移到結帳櫃檯','改包裝','換供應商'],1,'move it to the checkout counter from the back aisle display。'],
 ['最後那句話的意思是？',['產品沒變，改的是進貨節奏','產品換了配方','停止銷售','改賣別的'],0,'We stopped buying four days of it at once。']
]},

/* ═══ 第 57 章 · 公共許可 ═══ */
{
id:'c57', title:'The Permit', zh:'那張許可',
blurb:'申請被退了三次。第四次我們換了一個問法。',
long:true,
pages:[
 {scene:'office',tint:'day',
  t:'The [new|新的] [loading|裝卸] [bay|區] [needs|需要] [a|一份] *[permit application|許可申請]\n[from|從] [the|那個] *[municipal|市政的] [office|辦公室].\n\n[It|它] [is|被] [rejected|駁回] [three|三] [times|次].\n[Each|每] [time|次] [the|那個] [reason|理由] [is|是] [a|一] [different|不同的] [box|欄位].'},
 {scene:'office',tint:'day',
  t:'[The|那份] [form|表格] [refers|參照] [to|到] [an|一項] *[ordinance|自治條例]\n[that|那項] [was|被] [amended|修訂] [in|在] [March|三月].\n[The|那個] [website|網站] [still|仍然] [shows|顯示] [the|那個] [old|舊的] [version|版本].\n\n[We|我們] [have|已經] [been|被] [answering|回答] [the|那個] [old|舊的] [question|問題]\n[three|三] [times|次] [in|用] [a|一個] [row|接一個].'},
 {scene:'street',tint:'day',
  t:'[You|你] [go|去] [in|進] [person|本人] [and|而且] [ask|問] [one|一個] [question|問題]:\n[not|不是] "[why|為什麼] [was|被] [this|這個] [rejected|駁回]",\n[but|而是] "[what|什麼] [would|會] [a|一份] [complete|完整的] [application|申請] [look|看起] [like|來]".\n\n[The|那位] [clerk|承辦人] [turns|轉] [the|那個] [screen|螢幕] [round|過來]\n[and|而且] [shows|展示] [one|一份] [that|那個] [passed|通過] [last|上] [week|週].'},
 {scene:'office',tint:'warm',
  t:'[The|那個] [difference|差別] [is|是] [two|兩] [attachments|附件] [and|和] [one|一個] [date|日期] [format|格式].\n[Nothing|沒有東西] [about|關於] [the|那個] [bay|裝卸區] [itself|本身].\n\n[The|那個] *[permit|許可] [comes|來] [through|通過] [in|在] [nine|九] [days|天].\n\n[You|你] [write|寫] [the|那個] [checklist|檢查清單] [into|到] [the|那個] [shared|共用] [folder|資料夾].\n[The|那個] [next|下一個] [person|人] [will|會] [not|不] [lose|失去] [three|三] [weeks|週].'}
],
quiz:[
 ['申請為什麼一直被退？',['資料造假','表格參照的條例三月修訂了，網站還是舊版','費用未繳','送錯單位'],1,'The website still shows the old version——他們三次都在回答舊問題。'],
 ['ordinance 是什麼？',['國家法律','地方自治條例','行政命令','國際條約'],1,'ordinance 是地方政府訂的條例。多益公共事務類文章會出現。'],
 ['他換了什麼問法？',['問為什麼被退','問一份完整的申請長什麼樣','要求主管出面','提出申訴'],1,'問題從「為什麼被拒」換成「什麼樣算合格」——問法決定了得到什麼答案。'],
 ['實際的差別是什麼？',['裝卸區設計要改','兩份附件和一個日期格式','要重新測量','要加繳費用'],1,'Nothing about the bay itself。'],
 ['最後他做了什麼？',['申訴','把檢查清單寫進共用資料夾','換承辦人','放棄申請'],1,'The next person will not lose three weeks。']
]},

/* ═══ 第 58 章 · 績效考評 ═══ */
{
id:'c58', title:'The Review', zh:'考評',
blurb:'三個字的評語，比三頁的表格有用。',
long:true,
pages:[
 {scene:'meeting',tint:'day',
  t:'The [annual|年度] [review|考評] [form|表格] [has|有] [three|三] [pages|頁]\n[and|和] [eleven|十一] [rating|評分] [scales|量表].\n\n[Every|每] [manager|主管] [fills|填] [them|它們] [in|入] [the|同] [same|一] [way|方式]:\n[everyone|每個人] [is|是] "[four|四] [out|分] [of|（滿分] [five|五分）]".'},
 {scene:'meeting',tint:'day',
  t:'You [write|寫] Sam\'s [differently|不一樣地].\n[Three|三] [words|字] [for|為了] [what|什麼] [he|他] [does|做] [well|好]:\n*[conscientious|盡責的], *[meticulous|一絲不苟], *[proactive|主動積極].\n\n[Then|然後] [one|一] [line|行] [for|為了] [what|什麼] [holds|阻礙] [him|他] [back|後退]:\n[he|他] [waits|等待] [to|去] [be|被] [asked|詢問].'},
 {scene:'office',tint:'day',
  t:'[That|那] [line|那行] [is|是] [harder|更難] [to|去] [write|寫] [than|比] [the|那] [three|三] [words|字].\n[It|它] [is|是] [also|也] [the|那個] [only|唯一] [part|部分] [he|他] [reads|讀] [twice|兩次].\n\n[He|他] [is|不是] [not|不是] [offended|被冒犯的]. [He|他] [asks|問] [for|要] [an|一個] [example|例子].\n[You|你] [give|給] [two|兩個]. [Both|兩個] [are|是] [from|從] [March|三月].'},
 {scene:'meeting',tint:'warm',
  t:'[Six|六] [months|個月] [later|之後] [he|他] [brings|帶] [you|你] [a|一個] [problem|問題]\n[before|在…之前] [anyone|任何人] [asks|問] [him|他] [about|關於] [it|它].\n\n[The|那個] [rating|評分] [scale|量表] [would|會] [have|有] [called|稱] [that|那]\n"[four|四] [out|分] [of|之] [five|五]" [both|兩次] [times|次].\n\n[Numbers|數字] [are|是] [easier|更容易] [to|去] [file|歸檔].\n[Sentences|句子] [are|是] [what|什麼] [people|人] [change|改變] [for|為了].'}
],
quiz:[
 ['考評表格的問題是什麼？',['太短','大家都填四分，看不出差別','項目太少','沒有人填'],1,'everyone is "four out of five"——量表被填成毫無鑑別度。'],
 ['meticulous 是什麼意思？',['懶散的','一絲不苟的','情緒化的','健談的'],1,'形容做事極度細心、不放過細節。'],
 ['Sam 讀了兩次的是哪一段？',['三個優點','指出他的限制那一行','評分','薪資'],1,'It is also the only part he reads twice。'],
 ['他的限制是什麼？',['技術不足','等別人來問他','不守時','不合群'],1,'he waits to be asked。'],
 ['最後兩句的意思是？',['數字比較客觀','數字方便歸檔，但真正讓人改變的是句子','句子太主觀','兩者都沒用'],1,'Numbers are easier to file. Sentences are what people change for。']
]},

/* ═══ 第 59 章 · 談判桌 ═══ */
{
id:'c59', title:'The Table', zh:'談判桌',
blurb:'我們讓了兩件不重要的事，換到一件很重要的。',
long:true,
pages:[
 {scene:'meeting',tint:'day',
  t:'[Four|四] [people|人] [on|在] [each|每] [side|方].\n[The|那份] [contract|合約] [has|有] [six|六] [open|未決的] [points|項目].\n\n[Before|在…之前] [we|我們] [go|去] [in|進去], [we|我們] [rank|排序] [them|它們]:\n[two|兩個] [we|我們] [must|必須] [have|擁有], [two|兩個] [we|我們] [want|想要],\n[two|兩個] [we|我們] [can|可以] [give|給] [away|掉].'},
 {scene:'meeting',tint:'day',
  t:'[They|他們] [open|開場] [with|用] [the|那個] [payment|付款] [term|條件].\n[We|我們] *[concede|讓步] [it|它] [in|在] [four|四] [minutes|分鐘].\n[Too|太] [fast|快], [someone|某人] [whispers|低聲說]. [No|不] — [on|刻意] [purpose|地].\n\n[Conceding|讓步] [something|某樣東西] [early|早] [buys|買到] [the|那個] [right|權利]\n[to|去] *[hold firm|堅持不讓] [later|之後], [and|而且] [they|他們] [know|知道] [it|它] [too|也].'},
 {scene:'meeting',tint:'day',
  t:'[The|那個] [point|項目] [that|那個] [matters|重要] [is|是] [the|那個] [liability|責任] [cap|上限].\n[We|我們] [do|沒有] [not|有] [argue|爭論] [about|關於] [fairness|公平].\n[We|我們] [put|提出] [a|一] [number|數字] [and|而且] [explain|說明] [how|如何] [it|它] [was|被] [reached|得出].\n\n[They|他們] [ask|要求] [for|要] [a|一次] [break|休息].\n[When|當] [they|他們] [come|回] [back|來], [the|那個] [number|數字] [has|已經] [moved|移動] [half|一半] [way|路].'},
 {scene:'meeting',tint:'warm',
  t:'[We|我們] *[strike a balance|取得平衡] [on|在] [the|那個] [last|最後一] [point|項]\n[and|而且] *[reach a consensus|達成共識] [before|在…之前] [six|六點].\n\n[Nothing|沒有東西] [is|被] [agreed|同意] [verbally|口頭地].\n[Everything|一切] [goes|進] [into|到] [the|那份] [revised|修訂的] [draft|草稿] [that|那個] [night|晚上].\n\n"[A|一場] [good|好的] [negotiation|談判]," David [says|說], "[is|是] [one|一場]\n[where|其中] [both|雙方] [sides|方] [can|能] [explain|解釋] [it|它] [to|給] [their|他們的] [own|自己的] [boss|老闆]."'}
],
quiz:[
 ['進場前他們做了什麼準備？',['擬好底價','把六個項目排出必要、想要、可讓','找律師','準備簡報'],1,'two we must have, two we want, two we can give away。'],
 ['為什麼在付款條件上讓得那麼快？',['那項不重要','早讓一項換取後面堅持的正當性','誤判','對方壓力大'],1,'Conceding something early buys the right to hold firm later。'],
 ['在責任上限那項他們怎麼談？',['強調公平','提出一個數字並說明怎麼算出來的','威脅退出','要求對方先開'],1,'We put a number and explain how it was reached——不談感受談算法。'],
 ['reach a consensus 是什麼意思？',['取得共識','達成交易','投票表決','放棄協商'],0,'固定搭配。多益商業文章常見。'],
 ['David 對好談判的定義是什麼？',['贏最多的一方','雙方都能向自己的老闆交代','最快結束的','不用讓步的'],1,'both sides can explain it to their own boss。']
]},

/* ═══ 第 60 章 · 一場誤會 ═══ */
{
id:'c60', title:'Imply and Infer', zh:'暗示與推論',
blurb:'一個字用反了，整封信就變成另一個意思。',
long:true,
pages:[
 {scene:'room',tint:'night',
  t:'The [email|信] [says|說]: "[We|我們] [would|會] *[imply|暗示] [from|從] [your|你的] [figures|數字]\n[that|那個] [the|那個] [second|第二] [site|據點] [is|是] [not|不] [viable|可行的]."\n\n[The|那個] [writer|寫信的人] [meant|意指] *[infer|推論] — [to|去] [draw|得出] [a|一個] [conclusion|結論].\n*[Imply|暗示] [means|意味著] [to|去] [suggest|暗指] [something|某事] [without|沒有] [saying|說] [it|它].'},
 {scene:'meeting',tint:'day',
  t:'[Read|讀] [as|作] [written|寫的], [the|那個] [sentence|句子] [says|說]:\n[we|我們] [are|正在] [hinting|暗示] [that|那個] [their|他們的] [project|專案] [will|會] [fail|失敗].\n\n[The|那個] [client|客戶] [reads|讀] [it|它] [that|那] [way|方式].\n[Two|兩] [hours|小時] [later|之後] [their|他們的] [director|總監] [calls|打電話] David.'},
 {scene:'meeting',tint:'day',
  t:'[There|有] [are|是] [two|兩種] [ways|方式] [to|去] [handle|處理] [it|它].\n[Argue|爭論] [that|那個] [the|那個] [meaning|意思] [was|是] [obvious|明顯的] [from|從] [context|上下文] —\n[or|或] [accept|接受] [that|那個] [the|那個] [sentence|句子] [said|說] [what|什麼] [it|它] [said|說].\n\nDavid [takes|採取] [the|那個] [second|第二個].\n"[If|如果] [one|一位] [reader|讀者] [took|取] [it|它] [that|那] [way|方式], [it|它] [was|是] [ambiguous|模稜兩可的]."'},
 {scene:'office',tint:'warm',
  t:'[The|那個] [correction|更正] [goes|寄] [out|出] [in|在] [twenty|二十] [minutes|分鐘].\n[One|一] [sentence|句], [no|沒有] [explanation|解釋] [of|關於] [grammar|文法].\n\n[Afterwards|事後] [he|他] [pins|釘] [four|四] [pairs|對] [to|到] [the|那個] [wall|牆]:\n*[imply|暗示] / *[infer|推論]　*[precede|先於] / *[proceed|繼續進行]\n*[discreet|謹慎的] / *[discrete|分立的]　*[assure|向人保證] / *[ensure|確保]\n\n"[These|這些] [four|四對] [have|已經] [cost|花費] [somebody|某人] [money|錢]."'}
],
quiz:[
 ['imply 和 infer 的差別是？',['完全一樣','imply 是說話者暗示，infer 是聽者推論','imply 比較正式','infer 只用在口語'],1,'第一頁直接解釋了：imply 是不明說地暗指，infer 是從資訊推出結論。'],
 ['那句話被讀成什麼意思？',['我們認為專案可行','我們在暗示對方的專案會失敗','我們需要更多數字','我們要退出'],1,'we are hinting that their project will fail。'],
 ['David 選擇怎麼處理？',['解釋文法','接受那句話確實有歧義','要求對方重讀','不回應'],1,'If one reader took it that way, it was ambiguous。'],
 ['precede 和 proceed 的差別？',['precede 先於，proceed 繼續進行','完全一樣','precede 是後於','proceed 是停止'],0,'precede 在…之前發生；proceed 繼續進行。拼字只差一點。'],
 ['assure 和 ensure 的差別？',['assure 向人保證，ensure 確保某事發生','完全一樣','assure 用於物','ensure 是投保'],0,'assure someone（對人）vs. ensure that（確保結果）。第三個 insure 才是投保。']
]},

/* ═══ 第 61 章 · 專案失控 ═══ */
{
id:'c61', title:'Scale It Back', zh:'縮回來',
blurb:'不是做不完。是一開始就答應了太多。',
long:true,
pages:[
 {scene:'meeting',tint:'storm',
  t:'The [project|專案] [was|被] [agreed|同意] [in|在] [January|一月] [with|有] [nine|九] [deliverables|交付項目].\n[By|到] [May|五月] [there|有] [are|是] [fourteen|十四].\n\n[Nobody|沒有人] [approved|核准] [the|那] [extra|額外的] [five|五項].\n[They|它們] *[crept in|悄悄跑進來] [one|一次] [conversation|對話] [at|一] [a|次] [time|地].'},
 {scene:'meeting',tint:'storm',
  t:'[Two|兩] [deadlines|期限] [have|已經] *[fallen through|告吹] [already|已經].\n[The|那個] [team|團隊] [is|正在] [working|工作] [weekends|週末] [to|去] *[keep up with|跟上] [it|它].\n\n[The|那個] [instinct|直覺] [is|是] [to|去] [add|增加] [people|人].\n[Adding|增加] [people|人] [to|到] [a|一個] [late|落後的] [project|專案] [makes|使] [it|它] [later|更晚]\n— [somebody|某人] [has|必須] [to|去] [explain|解釋] [everything|一切] [twice|兩次].'},
 {scene:'office',tint:'day',
  t:'[Instead|反而] [you|你] *[scale back|縮減規模].\n[Nine|九] [deliverables|交付項目] [go|回到] [back|回] [in|在] [scope|範圍] [internal|內].\n[Five|五項] [move|移動] [to|到] [a|一個] [second|第二] [phase|階段] [with|有] [its|它的] [own|自己的] [budget|預算].\n\n[Then|然後] [you|你] *[hammer out|磋商敲定] [the|那些] [dates|日期] [with|與] [the|那個] [client|客戶]\n[in|在] [one|一場] [meeting|會議], [not|不是] [six|六] [emails|封信].'},
 {scene:'office',tint:'warm',
  t:'[The|那個] [project|專案] *[winds down|逐步收尾] [in|在] [August|八月], [one|一] [month|月] [late|遲].\n[Phase|第] [two|二階段] [starts|開始] [in|在] [October|十月] [and|而且] [is|被] [paid|付款] [separately|分開].\n\n[In|在] [the|那個] [review|檢討] [David|David] [asks|問] [one|一] [question|問題]:\n"[Which|哪一次] [conversation|對話] [added|增加] [the|那] [first|第一] [extra|額外] [item|項目]?"\n\n[Nobody|沒有人] [remembers|記得]. [That|那] [is|是] [the|那個] [answer|答案].'}
],
quiz:[
 ['專案出了什麼問題？',['預算不足','交付項目從九項變成十四項，沒有人核准','人力離職','客戶違約'],1,'They crept in one conversation at a time——範圍蔓延。'],
 ['fall through 是什麼意思？',['掉下去','告吹、沒能實現','通過審核','分期進行'],1,'Two deadlines have fallen through already。'],
 ['為什麼不加人？',['沒有預算','加人到落後的專案會讓它更晚','找不到人','客戶反對'],1,'somebody has to explain everything twice——溝通成本會吃掉新增的產能。'],
 ['他們採取的做法是？',['加班趕工','縮回原範圍，五項移到第二階段','取消專案','換客戶'],1,'Nine deliverables go back in scope. Five move to a second phase。'],
 ['最後那個問題想說明什麼？',['要追究責任','沒有人記得起點，正是範圍蔓延最危險的地方','記憶力不好','會議太多'],1,'Nobody remembers. That is the answer。']
]},

/* ═══ 第 62 章 · 接班 ═══ */
{
id:'c62', title:'The Successor', zh:'接班',
blurb:'他做了十九年。交接只排了兩週。',
long:true,
pages:[
 {scene:'office',tint:'dawn',
  t:'Koh [is|正在] [retiring|退休] [in|在] [March|三月].\n[His|他的] *[tenure|年資] [on|在] [this|這個] [site|廠區] [is|是] [nineteen|十九] [years|年].\n\n[The|那份] [handover|交接] [plan|計畫] [allows|允許] [two|兩] [weeks|週].\n[Most|大部分] [of|的] [what|什麼] [he|他] [knows|知道] [is|沒有] [not|沒有] [written|寫] [down|下來].'},
 {scene:'warehouse',tint:'day',
  t:'[His|他的] *[successor|接班人] [is|是] [competent|有能力的] [and|而且] [reads|讀] [everything|一切].\n[That|那] [is|不是] [not|不是] [the|那個] [problem|問題].\n\n[The|那個] [problem|問題] [is|是] [things|事情] [like|像]:\n[which|哪個] [driver|司機] [will|會] [call|打電話] [if|如果] [something|某事] [looks|看起來] [wrong|不對],\n[and|而且] [which|哪個] [one|一個] [will|會] [not|不].'},
 {scene:'warehouse',tint:'day',
  t:'[You|你] [extend|延長] [the|那個] [overlap|重疊期] [to|到] [six|六] [weeks|週]\n[and|而且] [change|改變] [the|那個] [order|順序]:\n[the|那位] *[successor|接班人] [runs|執行] [the|那些] [days|日子], Koh [watches|觀看].\n\n[Not|不是] [the|那個] [other|另一個] [way|方式] [round|反過來].\n[You|你] [only|只有] [find|找到] [the|那些] [gaps|落差] [when|當] [somebody|某人] [is|正在] [actually|實際上] [doing|做] [it|它].'},
 {scene:'warehouse',tint:'warm',
  t:'[In|在] [week|第] [four|四週] [a|一個] [container|貨櫃] [arrives|抵達] [with|帶著] [the|那個] [seal|封條] [broken|破損].\n[The|那位] *[successor|接班人] [stops|停止] [the|那個] [unload|卸貨] [and|而且] [photographs|拍照] [it|它].\n\nKoh [says|說] [nothing|什麼都沒有]. [Afterwards|事後] [he|他] [tells|告訴] [you|你]:\n"[That|那個] [is|是] [the|那個] [one|一件事] [I|我] [was|正在] [worried|擔心] [about|關於]."\n\n[His|他的] *[legacy|留下的東西] [is|是] [not|不是] [the|那些] [files|檔案].\n[It|它] [is|是] [what|什麼] [somebody|某人] [else|其他人] [does|做] [without|沒有] [being|被] [told|告知].'}
],
quiz:[
 ['交接的難處是什麼？',['接班人能力不足','大部分的知識沒有被寫下來','時間太長','系統不同'],1,'Most of what he knows is not written down。'],
 ['tenure 在這裡是什麼意思？',['任期年資','租約','薪資','職稱'],0,'His tenure on this site is nineteen years。'],
 ['他們怎麼改交接方式？',['延長到六週，並讓接班人主導、Koh 在旁看','縮短時間','寫更多文件','找外部顧問'],0,'the successor runs the days, Koh watches。'],
 ['為什麼要接班人主導？',['Koh 想休息','只有真的在做的時候才會發現落差','公司規定','比較快'],1,'You only find the gaps when somebody is actually doing it。'],
 ['第四週發生什麼事證明交接成功？',['貨櫃準時到','接班人自己判斷停止卸貨並拍照','Koh 出手處理','客戶稱讚'],1,'That is the one I was worried about——他不用被教就做對了。']
]},

/* ═══ 第 63 章 · 停工 ═══ */
{
id:'c63', title:'Standstill', zh:'停擺',
blurb:'港口罷工的第四天，我們發現最脆弱的不是船。',
long:true,
pages:[
 {scene:'port',tint:'storm',
  t:'The [port|港口] [comes|陷] [to|入] [a|一個] *[standstill|停擺] [on|在] [Tuesday|星期二].\n[A|一場] [dispute|爭議] [over|關於] [shift|班次] [patterns|模式]. [No|沒有] [end|結束] [date|日期].\n\n[Four|四] [of|的] [our|我們的] [containers|貨櫃] [are|是] [inside|在裡面].\n[Two|兩個] [more|更多] [are|是] [on|在] [a|一艘] [vessel|船] [waiting|等待] [offshore|在外海].'},
 {scene:'meeting',tint:'storm',
  t:'[The|那個] [first|第一個] [instinct|直覺] [is|是] [to|去] [reroute|改道] [everything|一切].\n[The|那個] [nearest|最近的] [alternative|替代] [port|港口] [is|是] [six|六] [hours|小時] [by|走] [road|陸路]\n[and|而且] *[congested|壅塞的] [already|已經].\n\n[You|你] [check|查] [which|哪些] [customers|客戶] [actually|實際上] [need|需要] [stock|庫存] [this|這] [week|週].\n[Two|兩家] [do|需要]. [The|那些] [others|其他] [have|有] [four|四] [weeks|週] [of|的] [cover|庫存緩衝].'},
 {scene:'meeting',tint:'day',
  t:'[You|你] [reroute|改道] [only|只有] [what|什麼] [those|那] [two|兩家] [need|需要]\n[and|而且] [let|讓] [the|那些] [rest|其餘] [wait|等待].\n[The|那個] [cost|成本] [is|是] [a|一] [tenth|十分之一] [of|的] [moving|移動] [everything|一切].\n\n[Then|然後] [you|你] [write|寫] [to|給] [every|每個] [customer|客戶] [before|在…之前] [they|他們] [ask|問]:\n[what|什麼] [is|是] [held|被] [up|耽擱], [what|什麼] [is|是] [moving|移動], [and|而且] [when|何時] [you|你] [will|會] [write|寫] [again|再一次].'},
 {scene:'port',tint:'warm',
  t:'[The|那個] [dispute|爭議] [is|被] [settled|解決] [after|在…之後] [nine|九] [days|天].\n[Nothing|沒有東西] [we|我們] [did|做] [changed|改變] [that|那個].\n\n[What|什麼] [we|我們] [did|做] [change|改變] [is|是] [that|那個] [no|沒有] [customer|客戶] [called|打電話] [us|我們] [angry|生氣的].\n[Two|兩家] [of|的] [them|他們] [sent|寄] [their|他們的] [own|自己的] [updates|更新] [to|給] [us|我們].\n\n"*[Resilience|韌性] [is|不是] [not|不是] [about|關於] [the|那些] [boxes|箱子]," David [writes|寫].\n"[It|它] [is|是] [about|關於] [who|誰] [is|正在] [still|仍然] [talking|說話] [to|給] [you|你] [afterwards|事後]."'}
],
quiz:[
 ['港口停擺的原因是？',['天災','班次制度的勞資爭議','設備故障','海關檢查'],1,'A dispute over shift patterns。'],
 ['standstill 是什麼意思？',['站立','停擺、動彈不得','立場','僵局結束'],1,'come to a standstill 是完全停止運作。'],
 ['他們怎麼決定要改道哪些貨？',['全部改道','只改那兩家本週真的需要庫存的','照金額大小','隨機'],1,'The others have four weeks of cover——先查誰真的急。'],
 ['主動寫信給客戶的內容是什麼？',['道歉與賠償','什麼被卡住、什麼在動、下次何時再更新','要求延後付款','終止合約'],1,'三件事，而且包含「下次何時再告訴你」——這是最常被漏掉的一項。'],
 ['David 對韌性的定義是什麼？',['庫存要夠多','事後還有誰願意跟你說話','路線要多元','保險要足'],1,'It is about who is still talking to you afterwards。']
]}

);

/* ── 統計 ─────────────────────────────────────────
   8 章 · 32 頁 · 約 1,500 字英文
   重點字 120 個，多數取自 vocab-extra——寫進章節後
   會自動從「新單字」畢業成「章節教過」。
   小考 40 題 · 美術成本 0 張新圖
   ─────────────────────────────────────────────── */
