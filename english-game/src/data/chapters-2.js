/* ═══════════════════════════════════════════════════════
   chapters-2.js — 長篇文件體章節（第二輯 · 3 章）
   載入順序：… → chapters.js → chapters-2.js

   跟第一輯的三個差別
   ──────────────────────────────────────────────────────
   1. 篇幅：一章 200–240 字（第一輯約 110 字）
      練的是「讀完不中斷」的續航力，不是更難的字。
   2. 體例：email 往返、公司公告、徵才啟事
      這些正是多益 Part 7 的實際題型，讀故事等於練題型。
   3. 小考：改成 Part 7 型——主旨題、細節題、推論題、字義題
      不再只是「這個字是什麼意思」。

   新增標記
   ──────────────────────────────────────────────────────
   ~[word|中文]  回收字：前八章教過的，這裡換情境再遇一次
                 顯示為綠色底線，提醒「這個你學過」

   回收覆蓋率：第一輯 44 個重點字，本輯重用 31 個。
   ═══════════════════════════════════════════════════════ */

CONTENT.chapters.push(

/* ═══ 第 9 章 · Email 往返 ═══ */
{
id:'c9', title:'The Chen File', zh:'陳先生的檔案',
blurb:'續約信的附件裡，夾著一張十年前的掃描頁。',
long:true,
pages:[
 {scene:'room',tint:'dawn',
  t:'[From|寄件者]: Mr. Chen\n[Subject|主旨]: ~[Contract|合約] [renewal|續約]\n\n"Our ~[contract|合約] ~[expires|到期] on the 31st.\nI would like to [keep|維持] the same [terms|條件],\nwith one [change|更動] to the ~[order number|訂單編號]\n[format|格式]. Your [system|系統] uses [six|六] [digits|位數].\n[Ours|我們的] now uses [eight|八].\nI have [attached|附上] the [old|舊的] [agreement|協議]\nso you can [compare|比較]."'},
 {scene:'room',tint:'dawn',
  t:'[From|寄件者]: You\n[Subject|主旨]: RE: ~[Contract|合約] [renewal|續約]\n\n"Thank you for the ~[notice|通知].\nWe can change the [format|格式] from [April|四月].\nOne [question|問題], if you do not [mind|介意]:\nthe [page|頁] you ~[attached|附上] is from the\n~[contract|合約] [signed|簽署] [ten|十] [years|年] ago.\n[Where|哪裡] did you [get|取得] it?"'},
 {scene:'meeting',tint:'day',
  t:'[From|寄件者]: Mr. Chen\n\n"My [father|父親] [kept|留著] it.\nHe [signed|簽] the [first|第一份] one with your Mr. Lee.\nOn the [last|最後一] [page|頁] there is some\n~[handwriting|筆跡] that is [not|不是] his.\nThe ~[initials|姓名縮寫] are J.L.\nI have [always|一直] [wondered|好奇] [who|誰] that was.\nMy father [never|從來沒有] [said|說]."'},
 {scene:'meeting',tint:'warm',
  t:'You ~[realise|意識到] that [page|頁] is in your [drawer|抽屜].\nYou [take|拍] a [photo|照片] and [send|寄] it.\n\nHe [replies|回覆] in [four|四] [minutes|分鐘]:\n\n"[So|所以] he [wrote|寫] that [about|關於] us.\n\'He [always|總是] [pays|付款] [early|提早].\n[Do|要] not [make|讓] him [wait|等].\'\nMy father [would|會] have [liked|喜歡] to [know|知道]."'}
],
quiz:[
 ['這一連串信件的主要目的是什麼？',['取消合約','續約並更改一個格式','投訴出貨延遲','申請退款'],1,'第一封信講得很清楚：維持原條件（keep the same terms），只改訂單編號格式。'],
 ['訂單編號要怎麼改？',['從八位數改成六位數','從六位數改成八位數','改成英文字母','取消編號'],1,'Your system uses six digits. Ours now uses eight. 我方要配合對方的八位數。'],
 ['expire 在這裡最接近哪個意思？',['開始生效','到期失效','被取消','被延長'],1,'expire 是到期失效。護照、合約、優惠券都用它。'],
 ['從最後一封信可以推論出什麼？',['J.L. 就是 Mr. Lee','J.L. 是 Chen 的父親','J.L. 是現在的主管','沒有人知道 J.L. 是誰'],0,'第三頁說父親跟 your Mr. Lee 簽的，而筆跡的縮寫是 J.L.——推論題要把兩個線索接起來。'],
 ['Mr. Chen 為什麼說「我父親會很想知道」？',['他想看合約','他父親已經不在了','他父親在生氣','他父親還在公司'],1,'would have liked 是與事實相反的假設，暗示他父親已經無法知道了。這是 Part 7 常見的語氣推論。']
]},

/* ═══ 第 10 章 · 公司公告 ═══ */
{
id:'c10', title:'Notice to All Staff', zh:'致全體同仁',
blurb:'復工公告的最後一行沒有點名，但你知道寫的是誰。',
long:true,
pages:[
 {scene:'office',tint:'storm',
  t:'~[NOTICE|公告] TO ALL [STAFF|員工]\n[Issued|發布]: [Thursday|星期四], 9:00\n\n"The office will [reopen|重新開放] on [Friday|星期五].\nThe ~[typhoon|颱風] ~[warning|警報] was [lifted|解除]\nat [six|六點] this [morning|早上].\nThe [ground|一樓] [floor|樓層] is [still|仍然] ~[flooded|淹水]\nand will [stay|保持] [closed|關閉]."'},
 {scene:'office',tint:'storm',
  t:'"[Damage|損失] [report|報告]:\n— [Twelve|十二] [boxes|箱] of [paper|紙] [ruined|毀損]\n— One ~[forklift|堆高機] [battery|電池] [dead|沒電]\n— The [back|後] [door|門] will not [close|關上]\n\nAll [deliveries|送貨] are [moved|改到] to [Monday|星期一].\nIf you are [still|仍然] ~[stuck|受困] at [home|家],\nplease ~[stay put|待著別動] and [tell|告訴] your [manager|主管]."'},
 {scene:'office',tint:'day',
  t:'[Team|團隊] [chat|群組], 9:14\n\nPRIYA: "[Is|是] the [lift|電梯] [working|運作]?"\nSAM: "[Not|不] [yet|還沒]. [Stairs|樓梯] [only|只有]."\nPRIYA: "[Who|誰] ~[shut down|關閉] the [system|系統]\n[on|在] [Wednesday|星期三]? It [saved|救了] the [server|伺服器]."\nSAM: "[Not|不是] me. I was [at|在] [home|家]."'},
 {scene:'office',tint:'warm',
  t:'The ~[notice|公告] [ends|結束] with one [line|行]:\n\n"[Thanks|感謝] to [whoever|不論是誰] [came|來] in\non [Wednesday|星期三] and [turned|把] [everything|一切] [off|關掉].\nYou [saved|省下] us [three|三] [days|天] of [work|工作]."\n\nNo [name|名字]. You [read|讀] it [twice|兩次]\nand [go|去] [back|回] to your [desk|桌子].'}
],
quiz:[
 ['這則公告的主要目的是？',['宣布停班','宣布復工與現況','通知裁員','通知加薪'],1,'第一句就是 The office will reopen on Friday，其餘是配套說明。'],
 ['哪一個地方仍然不開放？',['三樓','停車場','一樓','倉庫'],2,'The ground floor is still flooded and will stay closed.'],
 ['lifted 在「The warning was lifted」裡是什麼意思？',['被舉起來','被解除','被延長','被忽略'],1,'lift a warning / lift a ban 是解除警報或禁令。這是字義題，不能照字面翻。'],
 ['從群組對話可以推論出什麼？',['Priya 關掉了系統','Sam 關掉了系統','關系統的人不在群組裡講','系統沒有被關掉'],2,'兩個人都否認，而公告用了 whoever——代表那個人沒有出面。'],
 ['公告最後為什麼不寫名字？',['公司禁止提名字','那個人沒有承認','系統當機','主管忘記了'],1,'第三頁兩人都說不是自己，第四頁用 whoever。合起來看，是當事人沒有出面認領。']
]},

/* ═══ 第 11 章 · 徵才啟事 ═══ */
{
id:'c11', title:'Position Available', zh:'職缺一則',
blurb:'公告貼出來的第三天，David 拿著一份申請書來找你。',
long:true,
pages:[
 {scene:'meeting',tint:'day',
  t:'[POSITION|職缺] [AVAILABLE|開放]\n[Internal|內部] [applicants|申請人] [only|限]\n\n"[Account|客戶] [Coordinator|協調專員], [full|全]-[time|職].\n[Two|兩] [years|年] of [experience|經驗] [required|必備].\nThe [role|職位] [includes|包含] [supplier|供應商] [contact|聯繫],\n[stock|庫存] [checks|清點], and [client|客戶] [visits|拜訪].\n[Apply|申請] by [Friday|星期五]. An ~[interview|面試] will\nbe [held|舉行] the [following|隔] [week|週]."'},
 {scene:'meeting',tint:'day',
  t:'[From|寄件者]: Sam\n[Subject|主旨]: [Application|申請]\n\n"I have been here [fourteen|十四] [months|個月], [not|不是] [two|兩] [years|年].\nI [know|知道] that. I am [applying|申請] ~[anyway|還是].\n\n[Last|上] [month|個月] I [ran|負責] the Morita [job|案子] [alone|獨自].\nIn [March|三月] I [found|找到] ~[container|貨櫃] 4419 [before|在…之前]\nthe [wrong|錯的] [ship|船] [left|離開].\nI [count|數] [things|東西] [twice|兩次]. That is [all|全部]."'},
 {scene:'meeting',tint:'day',
  t:'David [puts|放] the [letter|信] on your [desk|桌子].\n\n"He is [six|六] [months|個月] [short|不足].\n[Legally|法律上] I can [still|仍然] [take|錄用] him.\nYou [work|工作] with him [every|每] [day|天].\n[Would|會] you ~[turn him away|把他請走]?"\n\nYou [think|想起] [about|關於] the [man|男人] in the ~[suit|西裝]\nin the [coffee|咖啡] [shop|店], [sitting|坐] [very|很] [straight|挺直].'},
 {scene:'meeting',tint:'warm',
  t:'"He [nearly|差點] [left|離開] in [April|四月]," you [say|說].\n"He [stayed|留下]. He [never|從來沒有] ~[brought it up|提起這件事].\n\nThe [two|兩]-[year|年] [rule|規定] is [there|在那裡] [because|因為]\n[most|大部分] [people|人] [need|需要] [two|兩] [years|年].\nHe [did|做] it in [fourteen|十四] [months|個月]."\n\nDavid [nods|點頭] [once|一次] and [takes|拿走] the [letter|信] [back|回去].'}
],
quiz:[
 ['這個職缺的申請資格是什麼？',['任何人都可以申請','只限公司內部人員','只限主管','只限新人'],1,'Internal applicants only——這行小字是 Part 7 最常設陷阱的地方。'],
 ['Sam 在申請信裡承認了什麼？',['他沒有經驗','他年資不足兩年','他想加薪','他要離職'],1,'I have been here fourteen months, not two years. I know that.'],
 ['short 在「He is six months short」裡是什麼意思？',['矮的','短暫的','不足的','簡短的'],2,'be short 指數量不足。多益的字義題最愛考這種一字多義。'],
 ['從第三、四頁可以推論出什麼？',['David 已經決定不錄用','你知道 Sam 曾去面試別家','Sam 要求加薪','Priya 也申請了'],1,'你想起咖啡店裡穿西裝的那一幕，而且說他「差點在四月離開」——這是第七章的事。'],
 ['你最後的回答表達了什麼立場？',['規則不該有例外','Sam 用更短的時間達到了規則想要的結果','Sam 應該再等六個月','應該由 David 自己決定'],1,'The two-year rule is there because most people need two years. He did it in fourteen——重點在規則的目的，不是規則的字面。']
]}

);

/* ── 統計 ─────────────────────────────────────────
   3 章 · 12 頁 · 約 690 字英文（一章 200–240 字）
   回收字 31 個（來自第一輯 44 個重點字）
   小考 15 題，全部為 Part 7 題型：
     主旨 3 題 · 細節 4 題 · 字義 3 題 · 推論 5 題
   美術成本：0 張新圖
   ─────────────────────────────────────────────── */
