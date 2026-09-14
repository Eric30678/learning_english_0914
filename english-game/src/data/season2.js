/* ═══════════════════════════════════════════════════════
   season2.js — 第二季（51–65 集｜多益 600–700）
   載入順序：content.js → scenes-extra.js → interludes.js → season2.js

   跟第一季的差別只有兩個
   ──────────────────────────────────────────────────────
   1. 選項拉長到 9–14 字（第一季鎖 6–9 字）
   2. 主題從「把事情講清楚」升到「處理人和立場」
      帶人、跨部門、客戶與合約

   不變的四條
   ──────────────────────────────────────────────────────
   敘述一句一行 ｜ 生字 2–3% 且可猜 ｜ 四種選項類型固定
   解說用中文，講機制不講文法
   ═══════════════════════════════════════════════════════ */

CONTENT.episodes.push(

/* ═══ 單元六 · 帶人（51–56）═══ */
{id:51,scene:'office',actor:'sam',stage:'S2',
n:'Sam has been here two months.\nYou still check everything\nhe does. Today you have three\njobs and no time for the\nMorita report. He has done\nreports like this before.',
goal:'Hand it over so he can actually do it.',w:['hand over','format','unclear'],
o:[
['Here\'s the Morita report. Same format as last month — ask if anything\'s unclear.','ok','他當天就交了','Sam：「Same as last month?\nEasy.」下午四點\n他把檔案寄給你。','交付要給三樣：是什麼、參考哪份、卡住找誰。三樣到齊，對方就不用回頭問你。'],
['Can you do the Morita report? It\'s basically the same as before.','mid','他不知道「之前」是哪一份','Sam 翻了半小時的\n舊檔案，挑錯一份。','basically the same 對你來說很清楚，對只做過兩個月的人來說不是。指名哪一份。'],
['Sorry to give you this, I know you\'re busy too, but could you?','mid','他先學到的是歉意','Sam 說沒問題，\n但整件事聽起來\n像在求他幫忙。','交付工作不是請託。過度的歉意會讓對方以為這件事本來不該是他的。'],
['Just do the Morita report. I\'ll fix it later if it\'s wrong.','bad','他不會想弄對','Sam 交了一份\n明顯沒檢查過的。\n你自己改到八點。','先宣告你會收拾，對方就沒有理由做到好。這句話等於把品質的責任收回自己身上。']]},

{id:52,scene:'office',actor:'sam',stage:'S2',
n:'Sam\'s report came in on time.\nThe numbers are right.\nBut the summary is at the\nbottom, and the first page\nis full of detail nobody\nwill read.',
goal:'Fix it without taking the work back.',w:['summary','lead with','structure'],
o:[
['The numbers are solid. Next time lead with the summary — it reads faster.','ok','下一份就對了','Sam：「Oh — so the\nconclusion goes first?」\n他的下一份是對的。','先肯定做對的部分，再給一個具體到可以照做的動作。回饋要能被執行，不能只是被理解。'],
['It\'s good, but maybe the order could be a little different?','mid','他猜了三次','Sam 改了三個版本，\n沒有一個是你要的。','maybe、a little、different，三個模糊詞疊在一起，對方只能用猜的。'],
['Sorry, your English is fine, it\'s just the structure I mean.','mid','他開始懷疑自己的英文','Sam 之後寫東西\n變得很小心，\n但速度慢了一半。','提到「你的英文」就會被記住，即使你講的是反話。回饋只講那件事本身。'],
['This is hard to follow. Can you redo the whole thing?','bad','他重做了一份一樣的','Sam 不知道哪裡不好，\n只好整份重打。','hard to follow 是你的感受，不是他的指令。整份重做的成本，通常換不到你要的改變。']]},

{id:53,scene:'meeting',actor:'david',stage:'S2',
n:'Sam missed one line in the\ncontract summary. The client\nspotted it this morning.\nYou signed it off last week\nwithout reading that page.\nDavid asks what happened.',
goal:'Answer so Sam can survive this.',w:['sign off','miss','on me'],
o:[
['Sam missed one line, but I signed it off. So it\'s on me.','ok','事情停在你這裡','David 點頭：「Fine.\nFix it today.」\n沒有人去找 Sam。','你簽了名就是你的責任，這是英文職場的預設。扛下來的成本比你想的低，效果比你想的大。'],
['Sam made the error. I\'ll make sure he checks more carefully.','bad','Sam 三個月都很緊繃','David 記住了 Sam 的名字，\n而且是用不好的方式。','把新人的名字單獨推出去，他之後每一份文件都會做得很慢。而且大家會記得你會這樣做。'],
['Sam is still learning. He didn\'t know about that rule.','mid','聽起來像在幫他找藉口','David：「And who\ntaught him the rule?」','解釋對方為什麼不會，等於承認沒有人教。話題會轉回你身上，但是用比較難看的方式。'],
['Sorry about this. We\'ll be more careful from now on.','mid','他不知道誰要改什麼','David：「Careful how?\nWho\'s fixing it?」','we 和 more careful 都沒有指名。檢討需要一個名字和一個動作。']]},

{id:54,scene:'office',actor:'sam',stage:'S2',
n:'Sam wants the Kato account.\nIt is bigger than anything\nhe has run alone. He is\nkeen and he has time.\nIf it goes wrong, the\nclient will call David.',
goal:'Let him try without leaving him alone.',w:['run','keen','check in'],
o:[
['Take it, but let\'s book thirty minutes each Friday to check in.','ok','兩邊都保住了','Sam 接了，而且\n每週五主動帶問題來。\n案子沒有出事。','放手和放生的差別就在那三十分鐘。定期的檢查點讓你不用一直盯，他也不用一直問。'],
['Honestly, I don\'t think you\'re quite ready for that one yet.','mid','他不會再開口','Sam 說「Okay.」\n之後三個月\n沒有再要過任何案子。','不給理由也不給路徑的拒絕，對方會理解成「我不被信任」，而不是「還不是時候」。'],
['Maybe ask David first? I\'m not really sure about it.','mid','你把自己排除了','Sam 去問了 David。\nDavid 反過來問你：\n「你怎麼看？」','把判斷推上去，但這件事你比 David 清楚。而且他會發現你沒有立場。'],
['Sure, go ahead. You\'ll figure it out as you go along.','bad','三週後客戶打給 David','Sam 卡在報價那一關\n不敢問，拖了十天。','figure it out 對有經驗的人是信任，對新人是遺棄。他不會來問，因為你說了他應該會。']]},

{id:55,scene:'office',actor:'sam',stage:'S2',
n:'Another team keeps sending\nSam small jobs. He says yes\nevery time. This week he\nhas taken four. His own\nwork is slipping and he\nhas not told anyone.',
goal:'Teach him to say no, not say it for him.',w:['slip','turn down','drop'],
o:[
['Tell them your week is full, and ask which one David should drop.','ok','他學會了一招','Sam 照做。\n對方自己撤回了兩件。\n他之後都這樣處理。','把拒絕變成一個需要對方回答的問題。這招他可以重複使用，而你只教了一次。'],
['Just say no next time. You don\'t have to take everything.','mid','他還是說不出口','Sam 點頭。\n隔天又接了兩件。','告訴對方該做什麼，但沒給他句子。新人卡住的通常不是道理，是開口的那一句話。'],
['It\'s part of the job, unfortunately. Everyone goes through this.','mid','他學會忍耐','Sam 不再提這件事。\n兩個月後他的\n自己的案子開始遲交。','把結構問題說成必經之路，對方就不會再求助。你也就看不到下一次。'],
['Give them to me. I\'ll deal with that department myself.','bad','明年還是同一個問題','你擋掉了這一次。\nSam 沒有學到任何\n可以自己用的東西。','替他擋很有效，但只有一次。你不在的時候，他會回到原點。']]},

{id:56,scene:'meeting',actor:'david',stage:'S2',
n:'David is planning next\nquarter. He asks who should\ntake the new account.\nSam ran the Morita job\nalone last month and it\nwent well. David has not\nmentioned his name.',
goal:'Put Sam forward with evidence, not with feelings.',w:['put forward','run','evidence'],
o:[
['Sam ran the Morita job alone last month. He\'s ready for more.','ok','David 當場列入考慮','David：「Did he?\nI didn\'t know that.」\n他把 Sam 加進名單。','推薦要給一件已經發生的事。做過什麼比是什麼樣的人有說服力，而且對方可以自己去查證。'],
['Sam has been working really hard. He deserves a chance.','mid','聽起來像在求情','David：「Hard at what?」\n你才開始補細節。','努力和值得都是評價。主管要的是可以驗證的紀錄，不是你的印象。'],
['I think Sam is quite good? Maybe consider him for it.','mid','這個建議沒有份量','David 點頭，\n然後繼續往下講。','用不確定的語氣推薦別人，對方會以為你只是隨口一提。'],
['If Sam doesn\'t get this, he\'ll probably start looking elsewhere.','bad','話題變成留才問題','David 的表情變了：\n「Is that a threat\nor a prediction?」','用離職風險爭取機會，會把一個正面的推薦變成一場談判。而且 Sam 什麼都沒說過。']]},

/* ═══ 單元七 · 跨部門（57–61）═══ */
{id:57,scene:'meeting',actor:'priya',stage:'S2',
n:'You need two days of\ndesign work before the 14th.\nDesign sits in another team\nand you do not know how\nthey take requests.\nPriya used to work there.',
goal:'Find the right door before you knock on it.',w:['request','resource','lead time'],
o:[
['We need two days of design before the 14th — who should I ask?','ok','她給了你名字和流程','Priya：「Talk to Nina,\nand send it as a ticket,\nnot an email.」','先問流程再提需求。在不熟的部門，走錯管道的請求通常會安靜地消失。'],
['Do you have any design resource available at the moment?','mid','你得再問一次日期','Priya：「For when?\nHow much?」','沒有數量也沒有期限，對方無法判斷。跨部門的請求要一次給足條件。'],
['Sorry to bother you, we have a small design request.','mid','small 讓它排到最後','Priya 說她問問看。\n兩週後還沒有下文。','自己把請求說成 small，對方就會照 small 排優先序。'],
['Design always says no. Can you push it through for us?','bad','她不想沾這件事','Priya 笑了一下，\n然後說她不太熟了。','先批評一個部門，再請在那裡待過的人幫忙，等於要求她選邊站。']]},

{id:58,scene:'meeting',actor:'david',stage:'S2',
n:'Sales promised a client\nthat we can deliver by\nFriday. Nobody asked us.\nFriday is possible, but\nonly if we skip the\nchecking stage.',
goal:'Push back with a choice, not a complaint.',w:['push back','skip','trade-off'],
o:[
['We can do it by Friday, or do it properly by Wednesday next week.','ok','David 自己去改日期','David：「Wednesday.\nI\'ll call Sales.」\n沒有人需要吵架。','把抗議變成兩個選項。對方選了哪一個都可以，重點是他知道代價是什麼。'],
['That timeline really isn\'t realistic for our team at the moment.','mid','他問到底哪裡不行','David：「Not realistic\nhow? What can you do?」','realistic 是判斷，不是資訊。拒絕一個日期的時候，要附上你能做到的那個日期。'],
['We\'ll try, but I can\'t promise anything at this stage.','mid','週五還是爆了','David 照原日期回覆客戶。\n週五交出去的東西\n沒有人檢查過。','we\'ll try 在英文會被當成同意。對方會照你沒有否認的那個版本去承諾。'],
['Whoever promised that date clearly didn\'t check with our team first.','bad','變成部門之間的事','David 花了兩天\n處理兩邊的情緒。\n日期一天都沒有動。','指出流程的錯是對的，但它換不到時間。先解決日期，再另外談流程。']]},

{id:59,scene:'meeting',actor:'priya',stage:'S2',
n:'Your part of the project\nis done. The next step\nbelongs to another team\nand it is four days late.\nThe final date has not\nmoved. Nobody has said\nanything about it.',
goal:'Get a date without starting a fight.',w:['follow up','land','original'],
o:[
['If your part lands Tuesday, we can still hit the original date.','ok','對方給了確切日期','Priya：「Tuesday\nis doable. I\'ll confirm\ntonight.」','把催促包裝成一個共同目標。你沒有問他為什麼晚，只講了時間怎麼還救得回來。'],
['When do you think your part will be ready, roughly?','mid','roughly 換來 roughly','Priya：「Soon-ish?\nEnd of next week maybe.」','你用什麼精度問，就會得到什麼精度的答案。要日期就提出一個日期讓他確認。'],
['No rush, just let me know whenever you get a chance.','mid','它排到所有事情後面','兩週後還是沒動。\n最終日期已經來不及了。','no rush 是禮貌，但對方會照字面理解。有截止日的事不要用沒有截止日的說法。'],
['We\'ve been waiting on your team for over a week already.','bad','他們開始算你的帳','Priya 回信列出\n你們晚交的三次紀錄。','一旦開始算帳，對方也會開始算。時間沒有變快，只是多了一份紀錄。']]},

{id:60,scene:'meeting',actor:'david',stage:'S2',
n:'You are presenting the\nplan. Someone from Finance\nstops you: the cost figure\nlooks too low. She is right\nthat it assumes the shop\ndelivers on time. Nine\npeople are watching.',
goal:'Defend the number without defending yourself.',w:['assume','figure','hold up'],
o:[
['That\'s fair. The figure assumes the shop delivers on time — here\'s why.','ok','她點頭，會議往前走','她：「Okay, note that\nas a risk and move on.」\n十秒解決。','先承認對方看到的是真的，再說明你的前提。承認一個限制不會削弱你，隱藏它才會。'],
['I\'m not sure. I\'d have to go back and check that.','mid','這個計畫被擱置了','主席說下週再談。\n你多花了一週\n才回到原點。','你其實知道答案。當場說不確定，代價是整件事要重開一次。'],
['Sorry, maybe I explained it badly. Let me try again.','mid','焦點跑到你身上','你重講了一次，\n但她的問題還在。','把對方的質疑接成自己的表達問題，會讓房間開始注意你，而不是注意那個數字。'],
['That\'s what the data says. I just reported what I found.','bad','她繼續追','她：「Data from where,\nunder what assumption?」\n氣氛僵了三分鐘。','把自己藏在資料後面，對方只會往資料後面繼續問。而且聽起來像不想負責。']]},

{id:61,scene:'room',actor:'phone',stage:'S2',label:'Email',
n:'You need to know who\nhandles supplier contracts.\nThree people have given you\nthree different names.\nYou are writing to someone\nyou have never met.',
goal:'Write the shortest email that gets an answer.',w:['handle','contract','point me'],
o:[
['Quick one — are you the right person for supplier contracts? Thanks.','ok','兩小時就回了','對方回：「Not me —\nit\'s Dan in Legal.\nCopying him in.」','陌生信件越短回覆率越高。只問一件事、而且是一個是非題，對方兩秒就能回。'],
['I hope this email finds you well. I have a small question.','mid','沉在信箱裡','三天沒有回覆。\n你又寄了一次。','開場的客套占掉了主旨之後最重要的兩行。不熟的人通常只讀前兩行。'],
['Sorry to disturb you, I was told to contact you about something.','mid','對方不知道要不要理你','回信：「About what,\nsorry?」','something 沒有給對方任何判斷依據，他得先花力氣問你才知道要不要處理。'],
['Nobody seems to know who handles this. Is it you?','bad','聽起來像在抱怨公司','對方回得很短，\n而且沒有幫你轉介。','抱怨組織混亂會讓收信的人覺得被牽連。他能幫你，但不會想多做一步。']]},

/* ═══ 單元八 · 客戶與合約（62–65）═══ */
{id:62,scene:'room',actor:'phone',stage:'S2',label:'Mr. Chen',
n:'Mr. Chen has written a\nlong email. The 8th delivery\nslipped by four days and\nhe found out from his own\nstaff, not from you.\nHe is not angry. He is\nasking what changed.',
goal:'Answer the real question, not the tone.',w:['slip','keep someone posted','root cause'],
o:[
['You\'re right, the 8th slipped. Here\'s what we\'re doing about it.','ok','他回了三個字','Mr. Chen：「Good.\nKeep me posted.」\n關係沒有受損。','客訴信真正在問的是「以後還會不會這樣」。承認事實加上具體動作，就把問題關掉了。'],
['We\'re very sorry for any inconvenience that this delay has caused.','mid','他又寄了一封','Mr. Chen：「I understand.\nBut what actually\nhappened?」','制式道歉沒有回答任何問題。客戶要的是原因和對策，不是措辭。'],
['Thank you for your patience. We\'ll look into it shortly.','mid','事情懸著','兩週後他再問一次。\n你才發現沒有人在查。','look into it 沒有時間也沒有負責人。對客戶來說，等於什麼都沒發生。'],
['The delay came from our supplier\'s side, not from our team.','bad','他開始考慮換廠商','Mr. Chen 沒有回信。\n下一季他多問了\n兩家報價。','對客戶來說，供應鏈的每一段都是你。指認上游等於承認你管不住它。']]},

{id:63,scene:'room',actor:'phone',stage:'S2',label:'客戶',
n:'A new client wants the\nsame boxes but fifteen\npercent cheaper. The margin\nis already thin. You can\ndrop the second delivery\nand save most of that.\nDavid trusts your call.',
goal:'Protect the price by changing the package.',w:['margin','drop','separately'],
o:[
['At that price we\'d drop the second delivery. Same money, less service.','ok','他選了原價','對方想了一下：\n「Actually, keep the\ntwo deliveries.」','價格談不下來的時候，就談內容。把折扣換成減項，對方會自己重新評估。'],
['That\'s lower than we usually go, but let me ask David.','mid','你先示弱了','對方聽到還有空間，\n又往下砍了五個百分點。','暗示價格可以談，就等於開了一道門。而且把決定權交出去會拖慢整件事。'],
['We\'ll see what we can do for you this time.','mid','他以為談成了','兩天後他以為\n拿到折扣了。\n你得再解釋一次。','see what we can do 在英文聽起來像答應。模糊的善意會製造誤會。'],
['Nobody else will give you that price, to be honest.','bad','他去問了別家','對方笑了一下。\n一週後他拿別家的\n報價回來壓你。','宣稱市場上沒有更好的，等於邀請對方去查證。而且通常查得到。']]},

{id:64,scene:'room',actor:'phone',stage:'S2',label:'客戶',
n:'The client has asked for\nfive extra design changes.\nNone of them were in the\nagreement. Each one takes\nhalf a day. They assume\nit is included.',
goal:'Say no to free, not no to the work.',w:['scope','quote','separately'],
o:[
['That\'s outside what we agreed, but I can quote it separately.','ok','他付了','對方：「Fair enough.\nSend me the quote.」\n工作照做，錢也收到。','不要拒絕工作，只拒絕免費。給一個報價，對方就能自己決定要不要。'],
['That wasn\'t really in the original scope we agreed on.','mid','對話停住了','對方：「So… can you\ndo it or not?」','只說不在範圍內，沒有說接下來怎麼辦。對方不知道這是拒絕還是抱怨。'],
['I\'ll see if we can somehow squeeze it in this month.','mid','下次會有第六件','你做完了五件。\n下個月他又提了三件。','一次免費的例外會變成新的預設。範圍一旦鬆掉，很難再收回來。'],
['We\'ve already done a lot of extra work for you for free.','bad','變成翻舊帳','對方：「You never\nsaid anything\nat the time.」','當時沒講、事後才算，聽起來像追討。而且那些工作已經發生了，換不回來。']]},

{id:65,scene:'meeting',actor:'phone',stage:'S2',label:'Mr. Chen',
n:'The contract ends this\nmonth. Mr. Chen wants to\nrenew. March did not go\nwell — two late deliveries\nand one wrong count.\nHe has not mentioned it.\nNeither has anyone else.',
goal:'Renew on better terms by naming what went wrong.',w:['renew','terms','buffer'],
o:[
['Before we renew, can we look at what went wrong in March?','ok','他反而加了預算','Mr. Chen：「I was hoping\nyou\'d bring that up.」\n新約多了一週緩衝。','主動提出自己的失誤，是續約談判裡最強的一手。它讓你有資格要求改變條件。'],
['So, are you happy to continue with the same terms?','mid','問題留到明年','對方說好。\n三月的狀況\n明年會再發生一次。','照原條件續約很輕鬆，代價是所有已知的問題都被續了一年。'],
['We\'d love to keep working with you, if that\'s possible.','mid','你把位置放低了','Mr. Chen 開始\n提幾個小要求。','續約的時候先表達依賴，對方會自然地往下談條件。'],
['After this year, I think we\'ve earned a better rate.','bad','他想起三月了','Mr. Chen：「Earned?\nLet\'s talk about March\nfirst.」','用「我們應得」開場，對方會立刻翻出你的紀錄。先談表現，再談價錢。']]}

);

/* ── 第二季場景重新指派 ── */
[[51,'office'],[52,'office'],[53,'meeting'],[54,'office'],[55,'office'],[56,'meeting'],
 [57,'meeting'],[58,'meeting'],[59,'meeting'],[60,'meeting'],[61,'room'],
 [62,'room'],[63,'room'],[64,'room'],[65,'meeting']]
.forEach(([id,sc])=>{ const e=CONTENT.episodes.find(x=>x.id===id); if(e) e.scene=sc; });

/* ── 第二季章節 ───────────────────────────────────── */
Object.assign(CONTENT.interludes, {

51:{
  title:'Chapter 9 — Half a Step Up',
  pages:[
    'In April, David changed\nnothing officially.\nHe just stopped checking\nyour work first.',
    'Sam started coming to you\ninstead of to him.\nSmall questions at first.\nThen bigger ones.',
    'Nobody called it a promotion.\nBut you now sign things off,\nand your name is on them\nwhether you read them or not.'
  ],
  gloss:[
    ['officially','正式地'],
    ['instead of','而不是'],
    ['promotion','升遷'],
    ['sign off','簽核、放行']
  ],
  recycle:[51,53]
},

56:{
  title:'Chapter 10 — Next Quarter',
  pages:[
    'David has started planning\nthe next quarter.\nThere is one new account\nand nobody assigned to it.',
    'You could take it.\nYou have taken everything\nelse this year, and\nit would be easy to say yes.',
    'Sam ran the Morita job alone\nlast month. It went well.\nDavid has not mentioned\nhis name once.'
  ],
  gloss:[
    ['quarter','季'],
    ['account','客戶（業務往來）'],
    ['assign','指派'],
    ['run a job','獨立負責一個案子']
  ],
  recycle:[56]
},

61:{
  title:'Chapter 11 — The Other Floor',
  pages:[
    'Design and Legal sit on\nthe fourth floor.\nYou have been there twice\nin eight months.',
    'Requests go in through a\nsystem nobody explained to you.\nThree people have given you\nthree different names.',
    'Priya used to work up there.\nShe says the trick is\nknowing who actually decides,\nnot who answers the phone.'
  ],
  gloss:[
    ['request','需求、申請'],
    ['go in through','經由…提出'],
    ['the trick is','訣竅在於'],
    ['decide','做決定']
  ],
  recycle:[57,61]
},

65:{
  title:'Chapter 12 — March',
  pages:[
    'The contract ends this month.\nMr. Chen wants to renew,\nand nobody in your office\nthinks that is a problem.',
    'But March was bad.\nTwo late deliveries and\none wrong count. He paid\nanyway and said nothing.',
    'You could let it go.\nHe has not brought it up.\nThe easy version of this\nmeeting is already written.'
  ],
  gloss:[
    ['renew','續約'],
    ['bring up','提起'],
    ['let it go','算了、放過'],
    ['anyway','還是、照樣']
  ],
  recycle:[65]
}

});
