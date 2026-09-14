/* ═══════════════════════════════════════════════════════
   chapters.js — 純閱讀章節（第一輯 · 8 章）
   載入順序：content.js → scenes-extra.js → chapters.js

   標記規則
   ──────────────────────────────────────────────────────
   [word|中文]    可點的字，點了顯示中文
   *[word|中文]   本章重點字：粗底線、進小考、進手牌、
                  之後在關卡回收
   \n             換行（一行一個訊息，不要擠成一段）

   每頁 25–35 字，一章 6 頁，重點字 6–8 個。
   場景沿用 CONTENT.scenes，靠 tint 換光製造不同氣氛，
   所以新增一章的美術成本接近零。
   ═══════════════════════════════════════════════════════ */

CONTENT.tints = {
  day:   null,
  dusk:  ['#e08a4a', 0.16],
  night: ['#141a2e', 0.42],
  dark:  ['#05070c', 0.62],
  storm: ['#3a4a5e', 0.34],
  dawn:  ['#8fa8d9', 0.20],
  warm:  ['#ffb46b', 0.12]
};

CONTENT.chapters = [

/* ═══ 第 1 章 ═══ */
{
id:'c1', title:'The Last Truck', zh:'最後一班車',
blurb:'停電那晚，四十箱貨還在門邊。',
pages:[
 {scene:'warehouse',tint:'dusk',
  t:'It is [eight|八點] at [night|晚上].\n[Only|只有] you and Sam are here.\n[Forty|四十] [boxes|箱子] [wait|等] by the [door|門].\nThe [last|最後的] *[truck|貨車] comes at nine.'},
 {scene:'warehouse',tint:'dusk',
  t:'Sam [counts|數] the boxes [again|再一次].\nHe has counted [twice|兩次] [already|已經].\nYou [tell|告訴] him it is [fine|沒問題].\nHe counts *[anyway|還是照做].'},
 {scene:'warehouse',tint:'dark',
  t:'Then the [lights|燈] [go out|熄滅].\n[All|全部] of them.\nThe *[power cut|停電] [takes|波及] the\n[whole|整個] [street|街].'},
 {scene:'warehouse',tint:'dark',
  t:'You [find|找到] a *[torch|手電筒] in the\n[office|辦公室] [drawer|抽屜].\nThe [battery|電池] is [low|快沒電了].\nSam [gets|去拿] the *[ladder|梯子].'},
 {scene:'warehouse',tint:'dark',
  t:'Eight boxes are on the [top|最上面的] [shelf|架子].\n[Normally|平常] you use the *[forklift|堆高機].\n[Tonight|今晚] you *[pass them down|一個個遞下來]\n[by hand|用手].'},
 {scene:'warehouse',tint:'night',
  t:'The [driver|司機] *[backs up|倒車] to the door.\nYou *[sign for|簽收] the [load|一批貨]\nby [torchlight|手電筒的光].\nForty. Sam was [right|對的] to check.'}
],
quiz:[
 ['「停電」英文怎麼說？',['power cut','light off','dark time','no power'],0,'power cut 是整區斷電。美式常說 power outage。'],
 ['倉庫裡有兩根叉子、用來搬重物的機器？',['lifter','forklift','loader','box mover'],1,'fork（叉）+ lift（舉起），字面就是它的樣子。'],
 ['「簽收」貨物用哪個動詞？',['sign in','sign up','sign for','sign out'],2,'sign for 是簽名確認收到。文件的簽核放行是 sign off。'],
 ['司機把車倒退靠到門口？',['backs up','goes back','turns back','pulls back'],0,'back up 指車輛倒車。go back 是回去某地。'],
 ['torch 在英式英文裡是？',['火把','手電筒','打火機','探照燈'],1,'英式 torch 就是手電筒，美式說 flashlight。']
]},

/* ═══ 第 2 章 ═══ */
{
id:'c2', title:'The Wrong Address', zh:'送錯的那一箱',
blurb:'貨退回來了，箱子上貼著一張手寫的紙條。',
pages:[
 {scene:'counter',tint:'day',
  t:'A box came [back|回來] to us [today|今天].\nThe *[address|地址] was [wrong|錯的].\n[Someone|有人] has [written|寫] on it\nin [blue|藍色] [pen|筆].'},
 {scene:'counter',tint:'day',
  t:'The *[note|紙條] says:\n"[Waited|等了] three days.\n[Nobody|沒有人] came.\nI am at [number|號] [fifteen|十五]."'},
 {scene:'street',tint:'day',
  t:'Number fifteen is an [old|老舊的] [house|房子]\nwith a [green|綠色] [gate|門].\nYou *[knock|敲門] [twice|兩次].\nAn old [woman|女士] opens it.'},
 {scene:'street',tint:'day',
  t:'She did not [open|打開] the box.\nShe [kept|留著] it by the [window|窗戶]\nfor three days,\nin [case|萬一] [someone|有人] came.'},
 {scene:'street',tint:'warm',
  t:'You *[apologise|道歉].\nShe [waves|揮手] it [away|不在意]\nand makes you [tea|茶].\nThe box [sits|放著] [between|在…之間] you.'},
 {scene:'street',tint:'warm',
  t:'She [asks|問] about the [company|公司].\nYou [stay|待] [twenty|二十] minutes.\nOn the way back you *[realise|意識到]\nnobody had [ever|曾經] [called|打電話] her.'}
],
quiz:[
 ['「地址」英文是？',['address','addres','adress','addrese'],0,'address 兩個 d、兩個 s。多益常考拼字。'],
 ['她在箱子上留了一張紙條，「紙條」是？',['ticket','note','bill','card'],1,'note 是簡短的留言。bill 是帳單，ticket 是票。'],
 ['「敲門」用哪個動詞？',['hit','beat','knock','push'],2,'knock on the door 是固定說法。hit 和 beat 都是打擊。'],
 ['「道歉」的動詞？',['apology','apologise','sorry','regret'],1,'apology 是名詞，apologise 才是動詞（美式 apologize）。'],
 ['I realise that... 的 realise 是？',['實現','意識到','真實的','放棄'],1,'realise 有「意識到」和「實現」兩義，這裡是前者。']
]},

/* ═══ 第 3 章 ═══ */
{
id:'c3', title:'Typhoon Day', zh:'颱風天',
blurb:'公司只來了兩個人。其中一個不該來。',
pages:[
 {scene:'office',tint:'storm',
  t:'The *[typhoon|颱風] [warning|警報] came\n[last night|昨晚].\nThe city is [closed|停班停課].\nYou came in [anyway|還是來了].'},
 {scene:'office',tint:'storm',
  t:'The [guard|警衛] is [downstairs|樓下].\n[Nobody|沒有人] else is here.\n[Rain|雨] [hits|打] the [window|窗戶]\nlike [small|小的] [stones|石頭].'},
 {scene:'office',tint:'storm',
  t:'The [phone|電話] [rings|響] at ten.\nIt is Mr. Chen\'s driver.\nHe is *[stuck|受困] on the [bridge|橋].\nThe [road|路] is *[flooded|淹水].'},
 {scene:'office',tint:'storm',
  t:'He [asks|問] if he should [keep|繼續] going.\nThe [delivery|送貨] is for [tomorrow|明天].\nYou [tell|告訴] him to *[stay put|待著別動]\nand [turn|把] the [engine|引擎] [off|關掉].'},
 {scene:'office',tint:'storm',
  t:'Then you *[shut down|關閉] the [system|系統]\nand [write|寫] a [short|簡短的] *[notice|公告]:\n"[Closed|停止營業] today.\nAll [deliveries|送貨] [moved|改到] to Friday."'},
 {scene:'office',tint:'dusk',
  t:'At four the [wind|風] [drops|轉小].\nDavid [messages|傳訊息] you: "[Who|誰] [sent|寄] that\n[notice|公告]?" You [type|打字] "Me."\nHe [replies|回覆]: "[Good|好]. Go [home|回家]."'}
],
quiz:[
 ['「颱風警報」的警報是？',['alarm','warning','alert','signal'],1,'weather warning 是氣象警報的固定說法。'],
 ['車子受困在橋上，「受困」用？',['stuck','caught','locked','held'],0,'stuck 指動彈不得。I\'m stuck in traffic 是常用句。'],
 ['你叫他「待著別動」？',['stand by','stay put','hold on','sit down'],1,'stay put 是留在原地不要移動。hold on 是電話上的稍等。'],
 ['「關閉系統」的動詞片語？',['shut down','close up','turn off','put away'],0,'shut down 用在系統、機器、工廠。turn off 偏向單一開關。'],
 ['公司貼的那張「公告」是？',['news','notice','report','message'],1,'notice 是正式的告示。多益聽力和閱讀都很常出現。']
]},

/* ═══ 第 4 章 ═══ */
{
id:'c4', title:'The Three A.M. Email', zh:'凌晨三點的信',
blurb:'信是 Mr. Chen 寄的，但那不是他的語氣。',
pages:[
 {scene:'room',tint:'night',
  t:'You [wake|醒] at [six|六點] and [check|查看]\nyour *[inbox|收件匣].\n[There|那裡] is a [mail|信] from Mr. Chen.\nThe *[timestamp|時間戳記] says 3:04.'},
 {scene:'room',tint:'night',
  t:'It is [three|三] [lines|行] [long|長].\nNo [greeting|問候語].\nNo [name|名字] at the [end|結尾].\nIt [just|只是] [asks|問] for the [price|價格] [list|表].'},
 {scene:'room',tint:'dawn',
  t:'Mr. Chen [always|總是] [writes|寫] "[Dear|親愛的]".\nHe always [signs|簽] his name.\nThis one [reads|讀起來] like\n[someone|某人] in a [hurry|匆忙].'},
 {scene:'room',tint:'dawn',
  t:'You do not [send|寄] the list.\nYou [reply|回覆] with one [question|問題]:\n"[Which|哪一個] [branch|分店] is this for?"\n[Then|然後] you [wait|等].'},
 {scene:'office',tint:'day',
  t:'At nine he [calls|打電話].\nHis [daughter|女兒] [used|用了] his [laptop|筆電]\nfor a [school|學校] [project|作業].\nShe was *[logged in|登入著] as him.'},
 {scene:'office',tint:'day',
  t:'He is not [angry|生氣].\nHe says [most|大部分] [people|人] would have\n[sent|寄] the [file|檔案] *[without|沒有] [asking|問].\n"[Good|好] *[instinct|直覺]," he says.'}
],
quiz:[
 ['「收件匣」英文是？',['inbox','mailbox','postbox','letterbox'],0,'inbox 是電子信箱的收件匣。mailbox 多指實體信箱。'],
 ['信件上顯示的「時間戳記」？',['timeline','timetable','timestamp','timing'],2,'timestamp 是系統記錄的時間標記。'],
 ['她用他的帳號「登入著」？',['logged in','signed up','checked in','turned on'],0,'log in 是登入帳號。sign up 是註冊。'],
 ['He says most people would have sent it without asking. 這句是什麼意思？',['大部分人會先問再寄','大部分人不問就寄了','沒有人會寄','他要你不要問'],1,'without asking = 沒有先問。這是虛擬語氣，講一件沒發生的事。'],
 ['「直覺」英文是？',['instant','instinct','insist','install'],1,'instinct 直覺。四個字長得很像，多益字彙題愛考這種。']
]},

/* ═══ 第 5 章 ═══ */
{
id:'c5', title:'The Man Who Never Ordered', zh:'沒下過單的那個人',
blurb:'他要退一件我們從來沒賣過的東西。',
pages:[
 {scene:'counter',tint:'day',
  t:'A man [comes|來] in at [eleven|十一點].\nHe [wants|想要] a *[refund|退款].\nHe [puts|放] a [small|小的] [box|盒子]\non the [counter|櫃檯].'},
 {scene:'counter',tint:'day',
  t:'We have [never|從來沒有] [sold|賣過] that [item|品項].\nYou [check|查] the [system|系統] [twice|兩次].\nHe has a *[receipt|收據].\nOur [name|名字] is on it.'},
 {scene:'counter',tint:'day',
  t:'The [date|日期] is from [March|三月].\nThe [price|價格] is [right|正確的].\nBut the *[order number|訂單編號] is\n[eight|八] [digits|位數]. Ours are [six|六].'},
 {scene:'counter',tint:'day',
  t:'You [search|搜尋] the [name|名字] [online|線上].\n[There|那裡] is [another|另一家] [company|公司]\nwith a *[similar|相似的] name,\n[two|兩] [cities|城市] [away|之外].'},
 {scene:'counter',tint:'warm',
  t:'You could just *[turn him away|把他請走].\n[Instead|反而] you [print|印] the [address|地址],\n[draw|畫] him a [small|小的] [map|地圖],\nand [call|打電話] them to [say|說] he is [coming|要過去].'},
 {scene:'counter',tint:'warm',
  t:'[Two|兩] [weeks|星期] [later|之後] that [company|公司]\n[sends|寄] us a [box|箱子] of [coffee|咖啡]\nand a [note|紙條]:\n"[Thanks|謝謝] for *[sorting it out|處理好這件事]."'}
],
quiz:[
 ['「退款」名詞是？',['return','refund','repay','rebate'],1,'refund 是退錢。return 是退貨的動作。'],
 ['他手上那張「收據」？',['receipt','recipe','reception','receive'],0,'receipt 收據（p 不發音）。recipe 是食譜，很多人搞混。'],
 ['「訂單編號」英文是？',['order number','buy number','sell code','item line'],0,'order number 是多益閱讀最常出現的欄位名稱之一。'],
 ['另一家公司名字「相似」？',['same','similar','simple','single'],1,'similar 是相似但不完全相同。same 是完全一樣。'],
 ['You could just turn him away. 這句是？',['你可以退他錢','你可以把他請走','你可以叫他等','你可以幫他訂'],1,'turn someone away 是拒絕、把人打發走。']
]},

/* ═══ 第 6 章 ═══ */
{
id:'c6', title:'Container 4419', zh:'四四一九號貨櫃',
blurb:'清單上有它，船上沒有。港口的燈亮了一整夜。',
pages:[
 {scene:'warehouse',tint:'dawn',
  t:'The [ship|船] [leaves|離開] at [noon|中午].\nAt [five|五點] in the [morning|早晨]\none *[container|貨櫃] is *[missing|不見的].\nNumber 4419.'},
 {scene:'warehouse',tint:'dawn',
  t:'It is on the *[manifest|艙單].\nIt is not on the [ship|船].\nThe [crane|起重機] [operator|操作員] says\nhe [never|從未] [saw|看見] it.'},
 {scene:'warehouse',tint:'dawn',
  t:'You [walk|走] the [row|排] [twice|兩次].\n[Rows|排] of [steel|鋼] in the [half|半] [light|光].\n4417. 4418. 4420.\nThe [gap|空隙] is [exactly|正好] one [box|箱] [wide|寬].'},
 {scene:'warehouse',tint:'day',
  t:'Sam [checks|查] the [gate|閘口] [log|紀錄].\n4419 came in on [Tuesday|星期二].\nIt has [never|從來沒有] [left|離開].\nSo it is [still|仍然] [inside|裡面] the [port|港口].'},
 {scene:'warehouse',tint:'day',
  t:'It is [two|兩] [rows|排] [over|過去],\n[loaded|裝上] [onto|到…上面] the [wrong|錯的] [ship|船],\n[bound|開往] for [Manila|馬尼拉].\nThat ship leaves in [forty|四十] [minutes|分鐘].'},
 {scene:'warehouse',tint:'warm',
  t:'They [get|把] it [off|弄下來] with [ten|十] minutes [left|剩下].\nSam [writes|寫] the [numbers|數字] in his [book|本子].\nHe has [started|開始] doing that.\nYou do not [say|說] [anything|任何事].'}
],
quiz:[
 ['海運用的「貨櫃」是？',['container','package','crate','carrier'],0,'container 是標準貨櫃。多益和海事文件都用這個字。'],
 ['清單上有但實體不見了，「不見的」？',['lost','missing','gone','absent'],1,'missing 指找不到但可能還在。lost 語氣更重。'],
 ['船上記載所有貨物的「艙單」？',['menu','manual','manifest','manifest list'],2,'manifest 是艙單／載貨清單，海運與空運都用。'],
 ['It has never left. 表示？',['它剛離開','它從沒離開過','它會離開','它不會離開'],1,'現在完成式 have never + 過去分詞，表示到現在為止都沒發生。'],
 ['bound for Manila 的意思是？',['被綁在馬尼拉','開往馬尼拉','來自馬尼拉','停在馬尼拉'],1,'bound for 是「開往、前往」，機場和港口的公告很常見。']
]},

/* ═══ 第 7 章 ═══ */
{
id:'c7', title:'Sam in a Suit', zh:'穿西裝的 Sam',
blurb:'週三下午三點，他不該在那家咖啡店。',
pages:[
 {scene:'counter',tint:'day',
  t:'You [see|看見] Sam [through|透過] the [glass|玻璃].\n[Wednesday|星期三], [three|三點] in the [afternoon|下午].\nHe is [wearing|穿著] a *[suit|西裝].\nSam does not [own|擁有] a suit.'},
 {scene:'counter',tint:'day',
  t:'[Across|對面] from him is a [woman|女士]\nwith a [folder|資料夾].\nShe is [asking|問] [questions|問題].\nHe is [sitting|坐] [very|很] [straight|挺直].'},
 {scene:'counter',tint:'day',
  t:'It is an *[interview|面試].\nYou [know|知道] the [look|樣子].\nYou [had|有過] it [yourself|自己],\n[eighteen|十八] [months|個月] [ago|之前].'},
 {scene:'counter',tint:'dusk',
  t:'You [could|可以] [walk|走] in.\nYou [could|可以] *[bring it up|提起這件事] on [Monday|星期一].\n[Instead|反而] you [buy|買] your [coffee|咖啡]\n[somewhere|某處] [else|別的].'},
 {scene:'office',tint:'day',
  t:'On Monday he [is|在] at his [desk|桌子]\nat [eight|八點], as [always|一如往常].\nHe does not [mention|提起] it.\n[Neither|也不] do you.'},
 {scene:'office',tint:'warm',
  t:'In [April|四月] he [turns|轉為] [down|拒絕] the [other|另一個] [job|工作].\nHe [never|從來沒有] [tells|告訴] you.\nYou [only|只] [find out|發現] [because|因為]\nDavid *[lets it slip|說溜嘴] in a [meeting|會議].'}
],
quiz:[
 ['「面試」英文是？',['interview','meeting','test','review'],0,'interview 面試。job interview 是完整說法。'],
 ['「提起某件事」的片語？',['bring up','put up','take up','make up'],0,'bring something up 是把話題提出來。'],
 ['He turns down the job. 他？',['接受了工作','拒絕了工作','轉職了','被裁員了'],1,'turn down 是拒絕。turn down the volume 則是調小聲，一字多義。'],
 ['Neither do you. 的意思是？',['你也沒有','你有','你不知道','你會'],0,'Neither do I / Neither do you 表示「我／你也沒有」。'],
 ['let it slip 是什麼意思？',['讓它掉下去','不小心說溜嘴','放它走','讓它過去'],1,'let slip 指無意間洩漏了不該說的話。']
]},

/* ═══ 第 8 章 ═══ */
{
id:'c8', title:'The Last Page', zh:'最後一頁',
blurb:'十年前的合約，最後一頁有人用鉛筆寫了一行字。',
pages:[
 {scene:'meeting',tint:'night',
  t:'They are [clearing|清空] the [old|舊的] *[file cabinet|檔案櫃].\n[Most|大部分] of it [goes|進] in the [bin|垃圾桶].\nYou [open|打開] one [folder|資料夾]\nfrom [ten|十] [years|年] [ago|之前].'},
 {scene:'meeting',tint:'night',
  t:'It is a *[contract|合約] with Mr. Chen.\nThe [first|第一] one, [signed|簽署] in [March|三月].\n[Same|相同的] [boxes|箱子]. [Same|相同的] [price|價格],\n[almost|幾乎].'},
 {scene:'meeting',tint:'night',
  t:'On the [last|最後一] [page|頁] [someone|有人] has\n[written|寫] in [pencil|鉛筆]:\n"[He|他] [always|總是] [pays|付款] [early|提早].\n[Do|要] not [make|讓] him [wait|等]."'},
 {scene:'meeting',tint:'night',
  t:'The *[handwriting|筆跡] is not David\'s.\nThe *[initials|姓名縮寫] are [J.L.|J.L.]\nYou [ask|問] Priya.\nShe says that [desk|桌子] was [hers|她的] [before|之前].'},
 {scene:'meeting',tint:'dawn',
  t:'J.L. [left|離開] in [twenty|二十]-[fourteen|十四].\n[Nobody|沒有人] [talks|談] about [him|他] [much|很多].\nBut the [note|註記] is [still|仍然] [true|真的].\nMr. Chen [still|仍然] pays [early|提早].'},
 {scene:'meeting',tint:'dawn',
  t:'You [keep|留下] that [page|頁].\n[Not|不是] the *[contract|合約] — it has *[expired|到期].\n[Just|只有] the [page|頁] with the [pencil|鉛筆]\n[line|那行字] on it.'}
],
quiz:[
 ['辦公室放文件的「檔案櫃」？',['file cabinet','paper box','folder shelf','document case'],0,'file cabinet（英式 filing cabinet）是四抽的鐵櫃。'],
 ['「合約」英文是？',['contact','contract','contrast','contact list'],1,'contract 合約，contact 是聯絡。只差一個 r，多益超愛考。'],
 ['handwriting 指的是？',['打字','筆跡','簽名','手稿'],1,'handwriting 是手寫的字跡。signature 才是簽名。'],
 ['initials 是什麼？',['開頭第一句','姓名縮寫','起始日期','初版'],1,'initials 是姓名各字首字母，例如 John Lee 就是 J.L.'],
 ['The contract has expired. 表示？',['合約生效了','合約到期失效了','合約續約了','合約遺失了'],1,'expire 是到期失效。護照、合約、優惠券都用這個字。']
]}

];

/* ── 統計 ─────────────────────────────────────────
   8 章 · 48 頁 · 約 1,400 字英文
   可點單字 約 330 個字次（去重約 240）
   重點字 46 個 · 小考 40 題
   美術成本：0 張新圖（沿用 6 個場景 + 7 種光線）
   ─────────────────────────────────────────────── */
