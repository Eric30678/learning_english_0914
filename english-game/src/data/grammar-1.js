/* ═══════════════════════════════════════════════════════
   grammar-1.js — 文法故事（第 1–8 集）
   一個連續的職場故事：陳米亞到基隆一家小貿易公司上班的第一年。
   每集一個文法重點，故事寫成多益 Part 6 的樣子（email、公告、備忘錄），
   每個空格是 Part 5 的四選一。

   欄位
   ──────────────────────────────────────────────────────
   id     編號（錯題紀錄用，不要改）
   t      集名
   topic  這集的文法重點
   lesson 重點說明（每一項一段，可含 <b>）
   head   文件抬頭（email 的 From / To / Subject），沒有就省略
   text   正文。[字|中文] 可點看中文；{1} {2}… 是空格；空一行分段
   qs     每個空格：o 四個選項、a 正解索引、why 解說
   zh     全文翻譯（做完才顯示）
   ═══════════════════════════════════════════════════════ */
var GRAMMAR = [

{ id:'g01', t:'第一天', topic:'詞性（一）：形容詞與副詞',
  lesson:[
   '多益 Part 5 最常考「詞性」：四個選項長得很像，只差在字尾，例如 quick / quickly / quickness / quicker。',
   '<b>形容詞</b>修飾名詞，或放在 be 動詞、look、seem、feel 後面：a <b>quiet</b> room、She looks <b>nervous</b>.',
   '<b>副詞</b>修飾動詞、形容詞或其他副詞，常以 -ly 結尾：She spoke <b>quietly</b>. It was <b>extremely</b> busy.',
   '做法：找出空格「在修飾誰」。修飾名詞 → 形容詞；修飾動詞或形容詞 → 副詞。'],
  text:`Mia Chen had never felt so {1} in her life. It was her first day at Harbor Line Trading, a small [shipping|海運] company near Keelung [Port|港口].

She [arrived|抵達] {2} early, at 8:15, and waited in the [lobby|大廳]. At 8:30, a tall man walked in {3}. "You must be Mia," he said with a {4} [smile|微笑]. "I'm Daniel Ho, the office [manager|經理]."

Mr. Ho [showed her around|帶她參觀] the office. Everyone looked {5}, but they all stopped to say hello. "We are a small team," he [explained|解釋], "so we work very {6} with each other."`,
  qs:[
   {o:['nervous','nervously','nervousness','nerve'], a:0, why:'felt 後面接形容詞，描述她的感覺：feel + 形容詞。'},
   {o:['surprise','surprising','surprisingly','surprised'], a:2, why:'空格修飾後面的副詞 early，要用副詞 surprisingly（出乎意料地早）。'},
   {o:['quick','quickly','quickness','quicker'], a:1, why:'修飾動詞 walked，用副詞 quickly。'},
   {o:['friend','friendly','friendliness','friendship'], a:1, why:'空格在 a 和名詞 smile 中間，要形容詞。friendly 雖然是 -ly 結尾，其實是形容詞——別被字尾騙了。'},
   {o:['busy','busily','business','busier'], a:0, why:'look（看起來）後面接形容詞。business 是名詞「生意」；busier 後面要有 than。'},
   {o:['close','closely','closeness','closed'], a:1, why:'修飾動詞 work，用副詞 closely（密切地）。close 當副詞是「靠近」，意思不對。'}],
  zh:`陳米亞這輩子從沒這麼緊張過。今天是她在海線貿易上班的第一天，那是一家靠近基隆港的小型海運公司。

她出乎意料地早到，八點十五分就在大廳等。八點半，一個高個子男人快步走進來。「妳一定是米亞，」他友善地笑著說，「我是何丹尼，辦公室經理。」

何經理帶她參觀辦公室。每個人看起來都很忙，但都停下來打招呼。「我們是小團隊，」他解釋，「所以大家合作得非常密切。」`},

{ id:'g02', t:'門禁卡', topic:'詞性（二）：名詞與動詞',
  lesson:[
   '<b>名詞</b>放在 a / the、所有格（my / her）、形容詞、介系詞後面，或當主詞、受詞。',
   '常見名詞字尾：-tion、-sion、-ment、-ance / -ence、-ity、-ness；指人的：-er / -or / -ant。',
   '<b>動詞</b>放在主詞後面；情態動詞（can / will / must / should）和 please 後面接<b>原形動詞</b>。',
   '有些字名詞、動詞同形（access、contact、request），看位置決定。'],
  head:['From: Raj Patel, IT Department','To: Mia Chen','Subject: Your access card'],
  text:`Hi Mia,

Welcome to the team! Your [access card|門禁卡] is ready for {1}. Please bring your ID to the IT office on the second floor, and I will {2} your details before I give you the card.

The card gives you {3} to the main office and the meeting rooms. For [security|安全] reasons, it does not open the [warehouse|倉庫]. If you need to go there, please ask Tina for {4}.

One more thing: our new system sends an [automatic|自動的] {5} to your phone every time you use the card. If you get a message but did not use your card, please {6} me [immediately|立刻].

Best,
Raj`,
  qs:[
   {o:['collect','collection','collector','collected'], a:1, why:'介系詞 for 後面接名詞。ready for collection＝可以領取了。collector 是「收藏家」，指人。'},
   {o:['confirmation','confirm','confirming','confirmed'], a:1, why:'情態動詞 will 後面接原形動詞 confirm（確認）。'},
   {o:['access','accessible','accessibly','accessed'], a:0, why:'give 人 + 東西，空格是「東西」，要名詞。access 在這裡是名詞「進入的權限」。'},
   {o:['permit','permission','permissive','permitted'], a:1, why:'ask for 後面接名詞 permission（許可）。permit 當名詞是「許可證」，可數，前面要有 a。'},
   {o:['notify','notification','notified','notifying'], a:1, why:'an automatic ___：冠詞 + 形容詞後面要名詞 notification（通知）。'},
   {o:['contact','contacted','contactable','contacting'], a:0, why:'please 後面接原形動詞，是祈使句。'}],
  zh:`嗨米亞：

歡迎加入！妳的門禁卡可以領了。請帶身分證到二樓資訊室，我確認完妳的資料就會把卡交給妳。

這張卡可以進主辦公室和會議室。為了安全，它打不開倉庫；需要去的話，請找蒂娜取得許可。

還有一件事：新系統會在妳每次刷卡時，自動傳一則通知到妳手機。如果收到訊息但妳沒刷卡，請立刻聯絡我。

拉吉`},

{ id:'g03', t:'會議改期', topic:'時態（一）：現在、進行、過去、未來',
  lesson:[
   '時態題先找<b>時間線索</b>。',
   '<b>現在簡單式</b>：習慣、事實、時刻表——usually、always、every Monday。時刻表上的未來也可以用：The shop opens at 9.',
   '<b>現在進行式</b>（be + V-ing）：此刻正在發生——now、right now、at the moment。',
   '<b>過去簡單式</b>：過去某個時間點——yesterday、last Friday、two days ago。',
   '<b>未來式</b>（will / be going to）：tomorrow、next week。'],
  head:['MEMO','To: All sales staff','From: Daniel Ho','Date: Monday, March 3','Re: Weekly meeting'],
  text:`We usually {1} every Monday at 10 a.m. This week, [however|然而], the meeting will be on Wednesday, because several of you {2} a [trade fair|商展] in Taichung right now.

Last Friday, Ms. Walker from Brightway Foods {3} us to ask about a new [contract|合約]. She {4} our office next Thursday to [discuss|討論] the details, so we need to prepare our [proposal|提案] before then.

At Wednesday's meeting, Tina {5} the numbers from last [quarter|季]. Please read the [attached|附加的] report before you come. The meeting room {6} at 9:45, so please don't arrive too early.`,
  qs:[
   {o:['meet','meets','are meeting','met'], a:0, why:'usually、every Monday 是習慣，用現在簡單式；主詞 We 是複數，用原形 meet。'},
   {o:['attend','attended','are attending','will attend'], a:2, why:'right now 表示「此刻正在」，用現在進行式 are attending（正在參加）。'},
   {o:['calls','called','has called','is calling'], a:1, why:'Last Friday 是明確的過去時間，用過去簡單式。有明確過去時間時不能用現在完成式。'},
   {o:['visited','visits','will visit','was visiting'], a:2, why:'next Thursday 是未來，用 will visit。'},
   {o:['present','presented','will present','has presented'], a:2, why:'會議在週三，還沒發生，用未來式 will present（報告）。'},
   {o:['opened','opens','has opened','opening'], a:1, why:'會議室幾點開，像時刻表，未來的時間表用現在簡單式 opens。'}],
  zh:`我們通常每週一早上十點開會。但這週會議改到週三，因為你們有幾位現在正在台中參加商展。

上週五，晴路食品的沃克女士打電話來詢問新合約。她下週四會來辦公室討論細節，所以我們得在那之前準備好提案。

週三的會議上，蒂娜會報告上一季的數字。來之前請先看附件報告。會議室九點四十五分才開，所以請不要太早到。`},

{ id:'g04', t:'倉庫', topic:'時態（二）：現在完成式',
  lesson:[
   '<b>現在完成式</b>（have / has + 過去分詞）：從過去<b>持續到現在</b>，或過去發生、<b>影響到現在</b>。',
   '線索：<b>since</b> + 時間點（since 2019、since last summer）、<b>for</b> + 一段時間（for six years）、already、yet、so far、recently。',
   '<b>陷阱</b>：有明確的過去時間（yesterday、in 2009、last year、ago），一律用過去式，不能用現在完成式。'],
  text:`On Thursday, Tina took Mia to the [warehouse|倉庫]. "I {1} here for six years," Tina said, "and this is still my [favourite|最喜歡的] place."

The warehouse manager, Mr. Lin, {2} the company in 2009. He knows every [shelf|架子]. "We {3} three new [forklifts|堆高機] since last summer," he told Mia, "so things move much faster now."

Mia asked about the yearly [stock check|盤點]. "We {4} it yet," Mr. Lin said. "We usually do it in April. Last year it {5} four whole days."

Before they left, Tina checked her list. "So far, we {6} two problems: a broken [pallet|棧板] and a [missing|不見的] box. Not bad for one morning."`,
  qs:[
   {o:['work','worked','have worked','am worked'], a:2, why:'for six years，而且她現在還在這裡工作——從過去持續到現在，用現在完成式。'},
   {o:['has joined','joined','joins','was joining'], a:1, why:'in 2009 是明確的過去時間，用過去簡單式 joined。'},
   {o:['buy','bought','have bought','are buying'], a:2, why:'since last summer（從去年夏天以來），搭配現在完成式。'},
   {o:['didn\'t start','haven\'t started','don\'t start','won\'t started'], a:1, why:'yet 用在現在完成式的否定句：haven\'t started yet（還沒開始）。'},
   {o:['has taken','takes','took','is taking'], a:2, why:'Last year 是明確的過去時間，用過去式 took（花了）。'},
   {o:['found','have found','find','had found'], a:1, why:'So far（到目前為止）是現在完成式的典型線索。'}],
  zh:`週四，蒂娜帶米亞去倉庫。「我在這裡工作六年了，」蒂娜說，「這裡還是我最喜歡的地方。」

倉庫主管林先生 2009 年進公司，每個架子他都熟。「從去年夏天到現在，我們買了三台新堆高機，」他告訴米亞，「所以現在東西搬得快多了。」

米亞問起年度盤點。「我們還沒開始，」林先生說，「通常四月做。去年花了整整四天。」

離開前蒂娜看了看清單。「到目前為止發現兩個問題：一個壞掉的棧板和一個不見的箱子。一個早上來說不算差。」`},

{ id:'g05', t:'新印表機', topic:'被動語態',
  lesson:[
   '主詞自己「做」動作 → 主動；主詞「被」做 → <b>被動：be + 過去分詞</b>。',
   '判斷：主詞能不能自己做這件事？印表機不會自己安裝 → The printer <b>was installed</b>.',
   '時態照樣要對：is made / was made / has been made / will be made / should be made。',
   '情態動詞 + 被動：should <b>be</b> reported、must <b>be</b> signed。'],
  head:['NOTICE','New printer on the second floor'],
  text:`A new [colour|彩色] printer {1} on the second floor last Tuesday. It {2} in the corner next to the kitchen, where the old [copier|影印機] used to be.

All staff can use the printer, but each print job {3} to your [department|部門]. To print, simply [tap|輕碰] your [access card|門禁卡] on the [reader|讀卡機].

The old copier {4} to our Taichung office next week. Until then, it has {5} to the [storage room|儲藏室].

If the printer stops working, please do not try to fix it yourself. Problems should {6} to the IT department.`,
  qs:[
   {o:['installed','was installed','has installed','installing'], a:1, why:'印表機不會自己安裝，要被動；last Tuesday 是過去 → was installed。'},
   {o:['places','is placed','placing','has placed'], a:1, why:'印表機是「被放在」角落，被動的現在式 is placed。'},
   {o:['charges','is charged','charging','charged'], a:1, why:'費用是「被記到」各部門，被動 is charged。只寫 charged 缺少 be 動詞。'},
   {o:['will send','will be sent','sends','sent'], a:1, why:'影印機是「被送走」，next week 是未來 → will be sent。'},
   {o:['moved','been moved','move','moving'], a:1, why:'has 後面接過去分詞；影印機是被搬的，所以是 has been moved。'},
   {o:['report','reported','be reported','reporting'], a:2, why:'should 後面接原形；問題是「被回報」，所以 should be reported。'}],
  zh:`公告：二樓新印表機

上週二，一台新的彩色印表機裝在二樓，就在茶水間旁邊的角落，原本放舊影印機的地方。

所有同仁都能使用，但每次列印都會記到你的部門。要列印，只要把門禁卡輕碰讀卡機即可。

舊影印機下週會送到台中辦公室，在那之前先搬到儲藏室。

印表機故障時請不要自己修，問題請回報資訊部。`},

{ id:'g06', t:'客戶來訪', topic:'主詞與動詞一致',
  lesson:[
   '動詞要跟「真正的主詞」一致，不是跟最靠近的名詞：The list <b>of products</b> <b>is</b> ready.（主詞是 list）',
   '<b>Each / Every</b> + 單數名詞 → 單數動詞；Each of + 複數名詞 → 還是單數（主詞是 Each）。',
   '<b>A number of</b> + 複數（許多）→ 複數動詞；<b>The number of</b> + 複數（…的數量）→ 單數動詞。',
   '<b>Neither A nor B / Either A or B</b> → 動詞跟靠近的 B 一致。'],
  text:`Ms. Walker arrived on Thursday afternoon. The [samples|樣品] from our new [supplier|供應商] {1} already on the table.

"Each of these items {2} been tested for [quality|品質]," Mr. Ho [explained|解釋]. Ms. Walker looked carefully. "The number of [options|選擇] {3} [impressive|令人印象深刻的]," she said. "But a number of my customers {4} asked for [organic|有機的] products."

Mia checked her notes. "Neither the green tea nor the [dried fruits|果乾] {5} organic yet," she said, "but our supplier plans to change that next year."

Ms. Walker smiled. "Every company I work with {6} it has a plan. Yours actually sounds real."`,
  qs:[
   {o:['is','are','was','be'], a:1, why:'主詞是 samples（複數），from our new supplier 只是修飾，動詞用 are。'},
   {o:['have','has','having','are'], a:1, why:'Each of + 複數名詞，真正的主詞是 Each（單數）→ has been tested。'},
   {o:['is','are','were','have'], a:0, why:'The number of + 複數名詞，主詞是 number（數量），單數 → is。'},
   {o:['has','have','is','was'], a:1, why:'A number of + 複數名詞＝「許多」，複數 → have asked。'},
   {o:['is','are','be','being'], a:1, why:'Neither A nor B，動詞跟靠近的 B 一致：the dried fruits 是複數 → are。'},
   {o:['say','says','have said','saying'], a:1, why:'Every company 是單數，動詞用 says；I work with 只是修飾 company 的子句。'}],
  zh:`沃克女士週四下午到了。新供應商的樣品已經擺在桌上。

「這裡每一項都做過品質檢驗，」何經理解釋。沃克女士仔細看了看。「選擇的數量很可觀，」她說，「不過我有不少客戶在問有機產品。」

米亞看了看筆記。「綠茶和果乾目前都還不是有機的，」她說，「但供應商打算明年改。」

沃克女士笑了。「跟我合作的每家公司都說自己有計畫。你們的聽起來倒是真的。」`},

{ id:'g07', t:'颱風', topic:'介系詞 vs 連接詞',
  lesson:[
   '看空格<b>後面接什麼</b>：接名詞（片語）→ 介系詞；接完整句子（主詞 + 動詞）→ 連接詞。',
   '原因：<b>because of / due to</b> + 名詞；<b>because / since</b> + 句子。',
   '讓步：<b>despite / in spite of</b> + 名詞；<b>although / even though</b> + 句子。',
   '時間：<b>during</b> + 名詞；<b>while</b> + 句子。<b>by</b> + 時間點；<b>until</b> 可接時間點也可接句子。'],
  head:['From: Daniel Ho','To: All staff','Subject: Typhoon Aru — office closed tomorrow'],
  text:`Dear all,

{1} the strong winds [expected|預計的] tomorrow, the Keelung city government has closed all offices. Our office will also be closed.

{2} the office is closed, our customers still need answers. Please check your email from home {3} the morning, and reply to anything [urgent|緊急的].

{4} the storm, our warehouse team [secured|固定好] all outdoor [containers|貨櫃] this afternoon. Thank you, Mr. Lin!

Please do not come in {5} you receive a message from me saying it is safe. {6} the office reopens, we will hold a short meeting to check for any [damage|損壞].

Stay safe,
Daniel`,
  qs:[
   {o:['Because','Because of','Although','Despite'], a:1, why:'後面 the strong winds expected tomorrow 是名詞片語，不是句子，用介系詞 Because of。'},
   {o:['Despite','Even though','Due to','During'], a:1, why:'後面 the office is closed 是完整句子，語意是「雖然」，用連接詞 Even though。'},
   {o:['while','during','since','until'], a:1, why:'the morning 是名詞，「在…期間」用介系詞 during。'},
   {o:['Before','Although','Because','Unless'], a:0, why:'the storm 是名詞。四個選項只有 Before 能當介系詞，意思也對：在暴風雨來之前。'},
   {o:['until','by','during','despite'], a:0, why:'後面是句子，意思是「直到收到訊息才來」，用 until。by 後面不能接句子。'},
   {o:['As soon as','Due to','In spite of','Because of'], a:0, why:'後面是完整句子，要連接詞；As soon as（一…就）意思也對。'}],
  zh:`各位好：

由於明天預計有強風，基隆市政府已宣布停班，我們公司也會休息。

雖然辦公室關閉，客戶還是需要回覆。上午請在家收信，緊急的事請回覆。

暴風雨來之前，倉庫團隊今天下午已經把戶外貨櫃全部固定好了。謝謝林先生！

在收到我通知安全之前，請不要進公司。辦公室一恢復上班，我們會開個短會檢查有沒有損壞。

注意安全，
丹尼`},

{ id:'g08', t:'第一份報價單', topic:'代名詞',
  lesson:[
   '<b>主格</b> I / he / she / it / we / they：當主詞。<b>受格</b> me / him / her / us / them：放在動詞或介系詞後面。',
   '<b>所有格</b> my / her / its / our / their：後面<b>一定接名詞</b>。',
   '<b>所有格代名詞</b> mine / hers / ours / theirs：後面<b>不接名詞</b>，自己就代表「某人的東西」。',
   '<b>反身代名詞</b> myself / herself / themselves：主詞和受詞是同一人，或 by herself（獨自）。',
   'its 是所有格；it\'s ＝ it is。'],
  text:`The next week, Mr. Ho asked Mia to prepare a [quotation|報價單] for Brightway Foods by {1}. Tina offered to help, but Mia wanted to try it on {2} own first.

She looked at two old quotations from other [suppliers|供應商]. The first one was clear and simple, but the second one had far too many pages. "The first supplier did a better job — {3} is much easier to read," she thought.

When she finished, she sent the file to Tina. Tina wrote back: "Good work! I made a few small changes to the prices, so please check {4} before you send it."

Ms. Walker replied the same afternoon. "Thank you for your quotation," she wrote. "{5} team will [review|審閱] it this week and send {6} our answer by Friday."`,
  qs:[
   {o:['she','her','herself','hers'], a:2, why:'by herself＝獨自完成。要做報價單的是 Mia 自己，指回同一個人，用反身代名詞 herself。'},
   {o:['she','her','hers','herself'], a:1, why:'on one\'s own（靠自己）：own 前面要所有格 her。'},
   {o:['their','theirs','they','them'], a:1, why:'空格後面直接是動詞 is，沒有名詞，要用所有格代名詞 theirs（＝他們的報價單）。their 後面一定要接名詞。'},
   {o:['it','they','them','their'], a:2, why:'指前面的 prices（複數），放在動詞 check 後面當受詞 → them。'},
   {o:['We','Our','Ours','Us'], a:1, why:'後面有名詞 team，要用所有格 Our。'},
   {o:['you','your','yours','yourself'], a:0, why:'send 人 + 東西：send you our answer，「人」放受格 you。'}],
  zh:`隔週，何經理要米亞自己幫晴路食品準備一份報價單。蒂娜說要幫忙，但米亞想先靠自己試試看。

她看了兩份其他供應商的舊報價單。第一份清楚簡單，第二份頁數多得誇張。「第一家做得比較好——他們的好讀多了。」她想。

做完後她把檔案寄給蒂娜。蒂娜回信：「做得好！我改了幾個價格，寄出前請再檢查一下。」

沃克女士當天下午就回覆了。「謝謝你們的報價，」她寫道，「我們團隊這週會審閱，週五前把答覆寄給你們。」`}

];
