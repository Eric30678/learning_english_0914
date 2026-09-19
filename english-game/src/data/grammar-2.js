/* ═══════════════════════════════════════════════════════
   grammar-2.js — 文法故事（第 9–16 集）
   接在 grammar-1.js 後面載入，欄位說明見 grammar-1.js。
   ═══════════════════════════════════════════════════════ */
GRAMMAR.push(

{ id:'g09', t:'比價', topic:'比較級與最高級',
  lesson:[
   '兩者比較用<b>比較級</b>：-er 或 more + 形容詞，後面常有 <b>than</b>。',
   '三者以上用<b>最高級</b>：the -est 或 the most，常見線索 <b>the</b>、of the three、of all、in the city。',
   '不規則：good – better – best、bad – worse – worst、little – less – least、many / much – more – most。',
   '加強比較級用 <b>much / far / even</b>（much better），不能用 very。'],
  text:`Mr. Ho asked Mia to [compare|比較] three shipping companies. She made a table and wrote a short report.

"BlueWave is {1} than the other two, but its ships are often late. SeaLink costs a little more, and its service is {2} better — they have never missed a date. Pacific Star is the {3} of the three. It is also the {4} company, so it has less [experience|經驗]."

She added a note at the end: "This year, our [shipments|貨運] to Japan are {5} than last year, so [reliability|可靠度] matters more than price. SeaLink is the {6} choice for us."`,
  qs:[
   {o:['cheap','cheaper','cheapest','more cheap'], a:1, why:'後面有 than，用比較級 cheaper。'},
   {o:['very','much','most','more'], a:1, why:'加強比較級 better 要用 much（far、even 也行），不能用 very。'},
   {o:['expensive','more expensive','most expensive','expensiver'], a:2, why:'the ___ of the three：三者比較，用最高級 the most expensive。長的形容詞用 most，不加 -est。'},
   {o:['newest','newer','new','more new'], a:0, why:'前面有 the，而且是三家公司互相比較，用最高級 newest。'},
   {o:['large','larger','largest','more large'], a:1, why:'後面有 than last year，用比較級 larger。'},
   {o:['good','better','best','well'], a:2, why:'前面有 the，是在三家裡選一家，用最高級 best。'}],
  zh:`何經理要米亞比較三家船運公司。她做了一張表，寫了簡短報告。

「藍浪比另外兩家便宜，但船常常誤點。海連貴一點，服務卻好得多——從沒延誤過。太平洋之星是三家中最貴的，也是最新的公司，所以經驗比較少。」

她在最後加了一段：「今年我們到日本的貨量比去年大，所以可靠度比價格重要。海連是對我們最好的選擇。」`},

{ id:'g10', t:'尾牙', topic:'不定詞（to V）與動名詞（V-ing）',
  lesson:[
   '後面接 <b>to V</b> 的動詞：decide、plan、hope、want、agree、offer、refuse、need、expect、promise。',
   '後面接 <b>V-ing</b> 的動詞：enjoy、finish、avoid、suggest、mind、consider、keep、practise。',
   '<b>介系詞後面一定接 V-ing</b>：interested in joining、before leaving、thank you for coming。',
   '最大陷阱：<b>look forward to + V-ing</b>——這裡的 to 是介系詞，不是不定詞。'],
  head:['From: Tina Wu','To: All staff','Subject: Year-end party'],
  text:`Hi everyone,

Mr. Ho has decided {1} this year's [year-end party|尾牙] at a [seafood|海鮮] restaurant near the port. We are planning {2} there on Friday, January 17.

I suggest {3} the train, because parking near the port is difficult. If you are interested in {4} a [performance|表演], please tell me by next Monday. Last year, Raj's magic show was the best part of the night — we all enjoyed {5} him make Mr. Ho's phone [disappear|消失]!

We look forward to {6} everyone there.

Tina`,
  qs:[
   {o:['hold','to hold','holding','held'], a:1, why:'decide 後面接 to V：decided to hold（決定舉辦）。'},
   {o:['meet','to meet','meeting','met'], a:1, why:'plan 後面接 to V：planning to meet。'},
   {o:['take','to take','taking','took'], a:2, why:'suggest 後面接 V-ing（或 that 子句），不能接 to V。'},
   {o:['give','to give','giving','gave'], a:2, why:'interested in——介系詞 in 後面接 V-ing。'},
   {o:['watch','to watch','watching','watched'], a:2, why:'enjoy 後面接 V-ing。'},
   {o:['see','to see','seeing','seen'], a:2, why:'look forward to 的 to 是介系詞，後面接 V-ing。這是 Part 5 最愛考的陷阱。'}],
  zh:`大家好：

何經理決定今年尾牙辦在港口附近的一家海鮮餐廳。我們預計一月十七日週五在那裡見。

港口附近很難停車，建議大家搭火車。有興趣表演的，請在下週一前告訴我。去年拉吉的魔術秀是整晚最精彩的部分——大家都很愛看他把何經理的手機變不見！

期待在那裡見到大家。

蒂娜`},

{ id:'g11', t:'大阪出差', topic:'時間介系詞',
  lesson:[
   '<b>at</b> + 時刻（at 7:40）；<b>on</b> + 星期、日期（on Tuesday、on March 11）；<b>in</b> + 月、年、季節、早上下午（in March、in the morning）。',
   '<b>by</b>：最晚在某時之前「完成」。<b>until</b>：一直「持續」到某時。',
   '<b>for</b> + 一段時間（for three nights）；<b>during</b> + 事件或期間（during the fair）；<b>within</b>：在…之內。',
   '<b>since</b> + 起點（since Monday），常配現在完成式。'],
  text:`In March, Mia went on her first [business trip|出差], to a food [fair|展覽] in Osaka. Her flight left {1} 7:40 in the morning {2} Tuesday, March 11.

The travel [agent|代辦人員]'s email was clear: "Please check in {3} 6:10 at the latest. Your hotel room is booked {4} three nights, and you can stay in the room {5} noon on Friday."

{6} the fair, Mia met more than twenty [buyers|買家]. She sent Mr. Ho a short report every evening.`,
  qs:[
   {o:['in','on','at','by'], a:2, why:'精確的時刻用 at。'},
   {o:['in','on','at','during'], a:1, why:'星期、日期用 on。'},
   {o:['until','by','at','for'], a:1, why:'at the latest（最晚）表示「在那之前完成」，用 by。until 是一直持續到某時。'},
   {o:['during','for','since','within'], a:1, why:'for + 一段時間（三晚）。'},
   {o:['by','until','in','since'], a:1, why:'「可以一直待到週五中午」是持續狀態，用 until。'},
   {o:['While','During','For','Since'], a:1, why:'the fair 是名詞（事件），用 During。While 後面要接句子。'}],
  zh:`三月，米亞第一次出差，去大阪參加食品展。她的班機在三月十一日週二早上七點四十分起飛。

旅行社的信寫得很清楚：「最晚請在六點十分前報到。飯店訂了三晚，房間可以住到週五中午。」

展覽期間米亞見了二十多位買家，每天晚上都寄一份簡短報告給何經理。`},

{ id:'g12', t:'面試', topic:'關係代名詞',
  lesson:[
   '<b>who</b>：指人，在子句裡當主詞。<b>which</b>：指事物。<b>that</b>：人事物都可以，但<b>逗號後面不能用 that</b>。',
   '<b>whose</b> + 名詞：表示「…的」（所有）：a man <b>whose</b> English was excellent。',
   '<b>whom</b>：指人，當受詞，最常出現在介系詞後面：to whom、with whom。',
   '做法：先看先行詞是人還是事物，再看空格在子句裡缺主詞、缺受詞，還是後面直接接名詞。'],
  text:`In April, the company needed a new [assistant|助理] {1} could speak Japanese. Mr. Ho asked Mia, {2} trip to Osaka had gone well, to help with the [interviews|面試].

The first person was a young man {3} English was excellent but {4} spoke only basic Japanese. The second was Ms. Sato, a woman {5} had worked for a Japanese [trading company|貿易公司] for five years.

After the interviews, Mr. Ho asked Mia which person she [preferred|比較喜歡]. "Ms. Sato," she said. "She's the person to {6} our Japanese customers will feel most [comfortable|自在的] talking."`,
  qs:[
   {o:['who','which','whose','whom'], a:0, why:'先行詞 assistant 是人，空格在子句裡當主詞（___ could speak），用 who。'},
   {o:['who','which','whose','that'], a:2, why:'空格後面接名詞 trip（米亞的出差），表示所有，用 whose。而且逗號後面不能用 that。'},
   {o:['who','whose','which','whom'], a:1, why:'後面直接接名詞 English（他的英文），用 whose。'},
   {o:['who','whose','which','where'], a:0, why:'先行詞是人，子句缺主詞（___ spoke），用 who。'},
   {o:['which','who','whose','where'], a:1, why:'先行詞 woman 是人，子句缺主詞，用 who。'},
   {o:['who','whom','whose','which'], a:1, why:'介系詞 to 後面，指人要用受格 whom（talk to whom）。'}],
  zh:`四月，公司需要一位會說日文的新助理。何經理請大阪出差很順利的米亞幫忙面試。

第一位是個年輕男生，英文很好，日文只會基礎。第二位是佐藤小姐，在日本貿易公司做了五年。

面試結束後，何經理問米亞比較喜歡誰。「佐藤小姐，」她說，「日本客戶跟她聊最自在。」`},

{ id:'g13', t:'客訴', topic:'-ed / -ing 形容詞與使役動詞',
  lesson:[
   '<b>-ed</b>：描述「人的感受」——I am <b>bored</b> / <b>disappointed</b> / <b>interested</b>。',
   '<b>-ing</b>：描述「讓人有這種感受的事物」——The movie is <b>boring</b>. It was a <b>disappointing</b> result.',
   '<b>使役</b>：have / get + 東西 + <b>過去分詞</b>＝請別人把東西處理好。We <b>had</b> the machine <b>repaired</b>.（機器被修）',
   '判斷：東西是「被」處理 → 過去分詞；人自己去做 → have + 人 + 原形（I had Tom check it）。'],
  head:['From: Mia Chen','To: Mr. Kevin Lau','Subject: Re: Damaged order #4471'],
  text:`Dear Mr. Lau,

Thank you for your email. You wrote that you were very {1} with your last order, and that the delivery was a very {2} [experience|經驗]. I [completely|完全] understand.

We were {3} to hear that half of the boxes arrived [damaged|損壞的]. We have already had new boxes {4} to you by [express|快遞], at no cost.

Last month we also had our [delivery process|配送流程] {5} by an outside company, and their report was {6}. We are now making changes to how we pack and deliver every order.

Kind regards,
Mia Chen`,
  qs:[
   {o:['disappointing','disappointed','disappoint','disappointment'], a:1, why:'描述「人（you）的感受」用 -ed：disappointed（感到失望）。'},
   {o:['frustrating','frustrated','frustrate','frustration'], a:0, why:'修飾 experience（讓人挫折的經驗），用 -ing。'},
   {o:['shocking','shocked','shock','shocks'], a:1, why:'主詞 We 是人，描述我們的感受，用 -ed：shocked。'},
   {o:['send','sent','sending','to send'], a:1, why:'have + 東西 + 過去分詞：箱子是「被寄出」，用 sent。'},
   {o:['check','checked','checking','to check'], a:1, why:'同樣是使役：流程是「被外部公司檢查」，had our process checked。'},
   {o:['surprising','surprised','surprise','surprisingly'], a:0, why:'修飾 report（讓人驚訝的報告），用 -ing。'}],
  zh:`劉先生您好：

謝謝您的來信。您提到對上一筆訂單非常失望，這次配送的經驗很令人挫折。我完全理解。

得知有一半的箱子送到時已損壞，我們很震驚。新的箱子已經安排快遞寄給您，不收任何費用。

上個月我們也請外部公司檢查配送流程，他們的報告很出人意料。我們正在改進每一筆訂單的包裝和配送方式。

陳米亞 敬上`},

{ id:'g14', t:'預算會議', topic:'數量詞',
  lesson:[
   '<b>可數複數</b>：many、(a) few、several、a number of。<b>不可數</b>：much、(a) little、an amount of。',
   '<b>a few / a little</b>＝有一些；<b>few / little</b>＝幾乎沒有（語氣偏否定）。',
   '<b>each / every</b> + 單數名詞；<b>all / most / many</b> + 複數名詞。',
   '總共兩個：一個是 one，剩下那一個是 <b>the other</b>。<b>another</b>＝再一個（還有其他的）。'],
  text:`In June, Mr. Ho called a [budget|預算] meeting. "We don't have {1} money left for the second half of the year," he said, "so we need to make {2} changes."

Tina had a few ideas. "We use too {3} paper," she said. "If {4} department saves just a little, it adds up."

Raj [suggested|建議] moving the office's files to the [cloud|雲端]. "We have two old [servers|伺服器]. One is already broken, and {5} one is ten years old."

Mr. Ho agreed. "Very {6} companies still keep their own servers these days. Let's move ours."`,
  qs:[
   {o:['many','much','few','a number of'], a:1, why:'money 不可數，否定句用 much。'},
   {o:['a little','much','a few','little'], a:2, why:'changes 是可數複數，要用 a few（一些）。a little、much、little 都接不可數。'},
   {o:['many','much','few','each'], a:1, why:'paper（紙張）不可數，too much。'},
   {o:['all','every','most','many'], a:1, why:'department 是單數，要用 every（each 也行）。all、most、many 後面要接複數。'},
   {o:['another','the other','other','others'], a:1, why:'總共只有兩台，一台說過了，剩下的「那一台」用 the other。'},
   {o:['few','little','much','a few'], a:0, why:'companies 可數，意思是「很少、幾乎沒有公司還…」，用 few。very a few 不合文法。'}],
  zh:`六月，何經理召開預算會議。「下半年剩的錢不多，」他說，「所以得做一些調整。」

蒂娜有幾個點子。「我們用的紙太多了，」她說，「如果每個部門都省一點，加起來就很可觀。」

拉吉建議把公司的檔案搬到雲端。「我們有兩台舊伺服器，一台已經壞了，另一台也用了十年。」

何經理同意。「現在很少公司還自己放伺服器了。我們也搬吧。」`},

{ id:'g15', t:'簽約', topic:'配對連接詞與條件句',
  lesson:[
   '<b>配對連接詞</b>——看到前半，就去找後半：<b>both</b> A <b>and</b> B、<b>either</b> A <b>or</b> B、<b>neither</b> A <b>nor</b> B、<b>not only</b> A <b>but (also)</b> B。',
   '<b>if</b>：如果。<b>unless</b>：除非（＝if not）。<b>as long as</b>：只要。',
   '<b>whether</b>：是否，常配 or not、或 A or B：ask whether it starts in August or September。'],
  text:`In July, Brightway Foods finally agreed to sign a one-year [contract|合約]. The contract [covers|涵蓋] both green tea {1} dried fruit.

Ms. Walker added one [condition|條件]. "We will always pay on time, {2} your deliveries are late. If a delivery is more than three days late, we will pay {3} the full price nor the delivery fee."

Mr. Ho asked {4} the contract could start in August or September. "Either month is fine," Ms. Walker said, "{5} you can start shipping [organic|有機的] tea by the end of the year."

The contract was signed in August. It was not only the company's biggest deal of the year {6} Mia's first real success.`,
  qs:[
   {o:['or','and','nor','but'], a:1, why:'both A and B 是固定配對。'},
   {o:['if','unless','whether','as long as'], a:1, why:'意思是「除非你們遲交，否則我們一定準時付」，用 unless（＝if not）。'},
   {o:['either','neither','both','not only'], a:1, why:'後面有 nor，配對的是 neither。'},
   {o:['that','whether','unless','either'], a:1, why:'「問是否在八月或九月開始」，用 whether…or。'},
   {o:['unless','as long as','whether','neither'], a:1, why:'「只要你們年底前能出有機茶，哪個月都可以」，用 as long as。unless 意思剛好相反。'},
   {o:['and','or','but also','nor'], a:2, why:'not only A but (also) B 是固定配對。'}],
  zh:`七月，晴路食品終於同意簽一年的合約，綠茶和果乾都包含在內。

沃克女士加了一個條件。「除非你們交貨延遲，否則我們一定準時付款。如果延遲超過三天，全額貨款和運費我們都不付。」

何經理問合約能不能從八月或九月開始。「哪個月都可以，」沃克女士說，「只要年底前能開始出有機茶就好。」

合約在八月簽定。這不只是公司今年最大的一筆生意，也是米亞第一次真正的成功。`},

{ id:'g16', t:'一年後', topic:'綜合複習',
  lesson:[
   '最後一集把前面的重點混在一起。做題時照順序問自己：',
   '1. 空格要什麼<b>詞性</b>？（修飾名詞、動詞，還是當主詞？）',
   '2. 動詞的<b>時態</b>和<b>主動 / 被動</b>？（找時間線索；主詞能不能自己做？）',
   '3. 空格後面是<b>名詞</b>還是<b>句子</b>？（介系詞 vs 連接詞）',
   '4. 有沒有<b>配對字</b>？（than、nor、but also、the + 最高級）'],
  text:`One year after her first nervous morning, Mia was called into Mr. Ho's office. "You {1} a lot since you joined us," he said. "The Brightway contract alone {2} our sales by fifteen per cent."

He handed her a letter. "From next month, you will be the {3} of our new Japan team. {4} the team is small, it is very [important|重要的] to us."

Mia read the letter {5}. She was so {6} that she forgot to say thank you. Mr. Ho laughed. "Go and tell Tina. She'll be even happier than you are."`,
  qs:[
   {o:['learn','learned','have learned','are learning'], a:2, why:'since you joined us（自從妳加入以來）→ 現在完成式 have learned。'},
   {o:['increase','increased','was increased','increasing'], a:1, why:'是合約「讓」業績增加，主動；說的是已經發生的事 → 過去式 increased。was increased 是被動，意思不對。'},
   {o:['lead','leader','leading','leadership'], a:1, why:'the 後面要名詞；指「人」用 leader。leadership 是「領導能力」。'},
   {o:['Despite','Although','Because of','During'], a:1, why:'後面是完整句子，語意是「雖然」，用連接詞 Although。'},
   {o:['careful','carefully','care','careless'], a:1, why:'修飾動詞 read，用副詞 carefully。'},
   {o:['exciting','excited','excite','excitement'], a:1, why:'描述人（She）的感受，用 -ed：excited。'}],
  zh:`距離那個緊張的第一個早上一年後，米亞被叫進何經理的辦公室。「妳進公司以來學了很多，」他說，「光是晴路那份合約，就讓我們業績成長了百分之十五。」

他遞給她一封信。「從下個月起，妳是我們新日本小組的負責人。小組雖然小，對我們非常重要。」

米亞仔細讀了那封信。她興奮到忘了說謝謝。何經理笑了。「去跟蒂娜說吧。她會比妳還開心。」`}

);
