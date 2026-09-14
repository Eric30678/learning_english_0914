/* ═══════════════════════════════════════════════════════
   chapters-7.js — 第七輯（8 章）
   載入順序：… → chapters-6.js → chapters-7.js → dict.js

   八個新領域，八種文件
   ──────────────────────────────────────────────────────
   招標 · 產品召回 · 新品上市 · 辦公室裝修
   匯率與跨境付款 · 證照複訓 · 能源帳單 · 併購實地查核

   這些是多益 Part 7 的常見題材，共同點是「文件很多」——
   投標須知、召回公告、行銷簡報、工程報價、匯款水單、
   訓練紀錄、電費帳單、保密協議。每一種都有自己的固定用字。

   一章 4 頁 · 約 190 字 · 重點字 15 個 · 小考 5 題
   共 120 個新重點字。
   ═══════════════════════════════════════════════════════ */

CONTENT.chapters.push(

/* ═══ 第 40 章 · 招標 ═══ */
{
id:'c40', title:'The Tender', zh:'投標',
blurb:'我們的價格最低。第三名得標。',
long:true,
pages:[
 {scene:'meeting',tint:'day',
  t:'The *[tender|招標] [closes|截止] [on|在] [the|那] [twelfth|十二日].\n[Four|四] [companies|公司] [will|會] *[bid|投標].\n\n[The|那份] *[specification|規格書] [runs|長達] [to|到] [sixty|六十] [pages|頁].\n[Page|第] [fifty|五十]-[one|一頁] [lists|列出] [the|那些] *[criteria|評選標準]\n[and|和] [their|它們的] *[weighting|權重].'},
 {scene:'meeting',tint:'day',
  t:'[Price|價格] [is|是] [only|只有] [forty|四十] [per cent|百分比].\n[Delivery|交期] [is|是] [thirty|三十]. *[Sustainability|永續性] [is|是] [twenty|二十].\n[The|那個] [last|最後] [ten|十] [is|是] "*[references|實績推薦]".\n\n[We|我們] [read|讀] [the|那些] [first|前] [forty|四十] [pages|頁] [carefully|仔細地]\n[and|而且] [skim|略讀] [the|那個] [rest|其餘]. [That|那] [is|是] [the|那個] [mistake|錯誤].'},
 {scene:'office',tint:'day',
  t:'[We|我們] *[submit|提交] [two|兩] [days|天] [early|提早], [price|價格] [lowest|最低].\n[A|一] *[clarification|釋疑] [request|要求] [arrives|抵達]: [they|他們] [want|想要]\n[three|三] *[references|實績推薦] [from|從] [the|那] [last|過去] [two|兩] [years|年].\n\n[We|我們] [send|寄] [two|兩]. [The|那個] [third|第三個] [client|客戶] [never|從未] [replies|回覆].\n[Two|兩個] [out|中] [of|的] [three|三] [is|是] [not|不] *[compliant|符合規定的].'},
 {scene:'meeting',tint:'dusk',
  t:'[The|那個] *[award|得標] [goes|去] [to|到] [the|那個] [third|第三] [-lowest|低] [bidder|投標者].\n[We|我們] [are|被] [told|告知] [we|我們] [were|是] *[unsuccessful|未得標的].\n\nDavid [asks|要求] [for|要] *[feedback|回饋意見] — [they|他們] [must|必須] [give|給] [it|它].\n[The|那個] [answer|回答] [is|是] [one|一] [line|行]:\n"[Scored|得分] [zero|零] [on|在] [references|實績]."\n[Ten|十] [per cent|百分比]. [That|那] [was|是] [the|那個] [whole|整個] [gap|差距].'}
],
quiz:[
 ['評選標準裡價格佔多少？',['百分之二十','百分之三十','百分之四十','百分之百'],2,'Price is only forty per cent——價格最低不等於得標，這是招標題最常考的觀念。'],
 ['weighting 是什麼意思？',['重量','評分權重','等待時間','搬運'],1,'weighting 是各項評分標準所佔的比重。'],
 ['他們為什麼不符合規定？',['遲交','價格太高','只提供兩份實績推薦，要求是三份','規格不符'],2,'they want three references. We send two。'],
 ['compliant 是什麼意思？',['有競爭力的','符合規定的','完整的','願意配合的'],1,'compliant bid 是符合投標須知所有要求的標。不 compliant 通常直接出局。'],
 ['這次失標的根本原因是什麼？',['價格算錯','只仔細看了前四十頁，漏掉第五十一頁的標準','交期太長','對手削價'],1,'We read the first forty pages carefully and skim the rest. That is the mistake。']
]},

/* ═══ 第 41 章 · 召回 ═══ */
{
id:'c41', title:'The Recall', zh:'召回',
blurb:'一萬兩千個裡面，大概有六百個有問題。但沒有人知道是哪六百個。',
long:true,
pages:[
 {scene:'warehouse',tint:'storm',
  t:'A [retailer|零售商] [reports|回報] [three|三] *[faulty|有瑕疵的] [cartons|紙箱].\n[The|那個] [base|底部] [gives|裂] [way|開] [under|在…之下] [ten|十] [kilos|公斤].\n\n[All|全部] [three|三] [come|來] [from|自] [the|那個] [same|同一] *[batch|批次].\n[That|那個] *[batch|批次] [was|是] [twelve|十二] [thousand|千] [units|單位].\n[We|我們] [do|不] [not|知道] [know|知道] [how|如何] [many|多少] [are|是] *[affected|受影響的].'},
 {scene:'meeting',tint:'storm',
  t:'[Every|每] [carton|紙箱] [has|有] [a|一個] *[serial number|序號].\n[The|那些] [first|前] [four|四] [digits|位數] [give|給] [the|那個] [production|生產] [week|週].\n[That|那] [narrows|縮小] [it|它] [to|到] [about|大約] [six|六] [hundred|百].\n\nSam *[traces|追溯] [where|哪裡] [they|它們] [went|去]:\n[four|四] [retailers|零售商], [two|兩] [warehouses|倉庫], [one|一] [export|出口] [order|訂單].'},
 {scene:'meeting',tint:'day',
  t:'[Legal|法務] [says|說] [the|那個] *[liability|責任] [is|是] [limited|有限的]\n[if|如果] [we|我們] *[notify|通知] [buyers|買家] [within|在…之內] [forty|四十]-[eight|八] [hours|小時].\n\n[We|我們] [issue|發布] [a|一份] *[recall|召回] *[notice|公告], [not|不是] [a|一份] *[press release|新聞稿].\n[The|那個] *[scope|範圍] [is|是] [one|一] [batch|批次], [one|一] [week|週], [one|一] [fault|瑕疵].\n[Anything|任何事] [wider|更廣] [would|會] [frighten|驚嚇] [people|人] [unnecessarily|不必要地].'},
 {scene:'warehouse',tint:'warm',
  t:'[Three|三] [hundred|百] [and|和] [ten|十] [come|回] [back|來]. [Eleven|十一] [are|是] [faulty|有瑕疵的].\n[The|那個] *[defect|瑕疵] [rate|率] [is|是] [under|低於] [four|四] [per cent|百分比].\n\n[The|那個] *[root cause|根本原因] [is|是] [a|一] [glue|膠] [temperature|溫度] [setting|設定]\n[that|那個] [drifted|偏移] [over|在…期間] [one|一] [shift|班].\n[Now|現在] [it|它] [is|被] [logged|記錄] [every|每] [two|兩] [hours|小時].'}
],
quiz:[
 ['他們怎麼把範圍縮小到六百個？',['全部檢查','用序號前四碼判斷生產週','問零售商','靠估計'],1,'The first four digits give the production week。'],
 ['trace 在這裡是什麼意思？',['描圖','追溯去向','追蹤包裹','追究責任'],1,'trace where they went——追查貨流到哪裡去了。'],
 ['為什麼發召回公告而不是新聞稿？',['比較便宜','範圍要精準，避免不必要的恐慌','法務規定','沒有時間'],1,'Anything wider would frighten people unnecessarily。'],
 ['四十八小時內通知有什麼作用？',['可以免費召回','限制公司的責任範圍','延後處理','取消訂單'],1,'the liability is limited if we notify buyers within forty-eight hours。'],
 ['最後找到的根本原因是？',['材料不良','某一班的膠溫設定飄移','機器老舊','包裝錯誤'],1,'a glue temperature setting that drifted over one shift——而且現在改成每兩小時記錄一次。']
]},

/* ═══ 第 42 章 · 上市 ═══ */
{
id:'c42', title:'The Launch', zh:'上市',
blurb:'廣告很成功。成功到我們沒有貨可以賣。',
long:true,
pages:[
 {scene:'meeting',tint:'day',
  t:'The new [line|產品線] *[launches|上市] [in|在] [May|五月].\nThe *[campaign|行銷活動] [runs|進行] [for|有] [six|六] [weeks|週]\n[across|橫跨] [three|三] *[channels|通路]: [email|信件], [trade|業界] [press|媒體], [and|和] [a|一場] [fair|展會].\n\nThe *[target|目標] *[audience|受眾] [is|是] [small|小型] [retailers|零售商],\n[not|不是] [the|那些] [big|大] [chains|連鎖].'},
 {scene:'office',tint:'day',
  t:'[Two|兩] [weeks|週] [in|進行], the *[metrics|數據指標] [look|看起來] [strong|強勁].\n*[Open rates|開信率] [are|是] [double|兩倍] [the|那個] [average|平均].\n*[Pre-orders|預購] [pass|超過] [four|四] [hundred|百] [in|在] [ten|十] [days|天].\n\n[Nobody|沒有人] [checks|查看] [stock|庫存] [levels|水位] [until|直到] [the|那] [third|第三] [week|週].\n[We|我們] [have|有] [two|兩] [hundred|百] [and|和] [twenty|二十].'},
 {scene:'warehouse',tint:'storm',
  t:'[You|你] [can|可以] *[fulfil|履行] [the|那些] [first|前] [orders|訂單] [and|而且]\n[delay|延遲] [the|那些] [rest|其餘] — [or|或] [pause|暫停] [the|那個] *[campaign|行銷活動].\n\n[Pausing|暫停] [costs|花費] [the|那個] [remaining|剩餘的] *[spend|預算支出].\n[Delaying|延遲] [costs|花費] [something|某樣東西] [harder|更難] [to|去] [price|標價]:\n[the|那些] [retailers|零售商] [who|他們] [tried|嘗試] [us|我們] [once|一次].'},
 {scene:'meeting',tint:'warm',
  t:'[You|你] [pause|暫停] [the|那場] [fair|展會] [and|而且] [keep|保留] [the|那個] [email|信件] [channel|通路],\n[because|因為] [email|信件] [can|可以] [be|被] [stopped|停止] [the|同] [same|一] [day|天].\n\n[The|那個] *[conversion|轉換] [rate|率] [drops|下降]. [The|那個] *[reach|觸及] [drops|下降].\n[But|但] [every|每一個] [order|訂單] [taken|接下的] [ships|出貨] [on|準] [time|時].\n\nDavid [says|說] [one|一] [thing|事情]: "[Next|下] [time|次], [stock|庫存] [first|先]."'}
],
quiz:[
 ['目標受眾是誰？',['大型連鎖','小型零售商','一般消費者','出口商'],1,'small retailers, not the big chains。'],
 ['三週後發現什麼問題？',['開信率下滑','預購四百但庫存只有二二〇','通路出錯','預算超支'],1,'Pre-orders pass four hundred。We have two hundred and twenty。'],
 ['暫停行銷的代價是什麼？',['剩下的預算白花','要賠違約金','失去所有客戶','沒有代價'],0,'Pausing costs the remaining spend。'],
 ['為什麼選擇停展會、留 email？',['展會比較貴','email 可以當天喊停','展會沒有效果','客戶不去展會'],1,'email can be stopped the same day——可逆性才是判斷依據。'],
 ['這一章的教訓是什麼？',['行銷預算要充足','上市前先確認庫存','email 比展會有效','預購要設上限'],1,'Next time, stock first。']
]},

/* ═══ 第 43 章 · 裝修 ═══ */
{
id:'c43', title:'The Fit-Out', zh:'裝修',
blurb:'交屋清單上有六十一項。其中一項沒有人看得懂。',
long:true,
pages:[
 {scene:'office',tint:'dawn',
  t:'The new [floor|樓層] [needs|需要] a *[fit-out|裝修工程] [before|在…之前] [we|我們] [move|搬] [in|進去].\n[Three|三] *[contractors|承包商] [quote|報價]. [The|那些] [prices|價格] [differ|相差] [by|達] [forty|四十] [per cent|百分比].\n\n[The|那份] [cheapest|最便宜的] *[excludes|不含] [flooring|地板].\n[The|那份] [most|最] [expensive|貴的] [includes|包含] [a|一份] [two|兩]-[year|年] *[warranty|保固].'},
 {scene:'office',tint:'day',
  t:'The *[landlord|房東] [must|必須] [approve|核准] [any|任何] [work|工程]\n[that|那個] [touches|接觸] [the|那些] [walls|牆], [and|而且] [a|一份] *[permit|許可] [is|是] [needed|需要的]\n[for|為了] [the|那個] [electrical|電力] [changes|變更].\n\n[Noise|噪音] [is|被] *[restricted|限制] [to|到] [weekdays|平日] [before|在…之前] [six|六點].\n[That|那] [adds|增加] [two|兩] [weeks|週] [to|到] [the|那個] [schedule|時程].'},
 {scene:'meeting',tint:'day',
  t:'[The|那個] [work|工程] [is|被] *[phased|分階段的]: [floor|地板], [then|然後] [power|電力], [then|然後] [furniture|家具].\n[Each|每] [phase|階段] [has|有] [a|一次] *[handover|驗收移交] [and|而且] [a|一份] *[snag list|缺失清單].\n\n[The|那份] [final|最終] [list|清單] [has|有] [sixty|六十]-[one|一] [items|項].\n[Sixty|六十] [are|是] [small|小的]. [One|一] [says|寫著] "[riser|管道間] [access|通道] [blocked|阻擋]"\n[and|而且] [nobody|沒有人] [in|在] [the|那個] [room|房間] [knows|知道] [what|什麼] [that|那] [means|意味著].'},
 {scene:'office',tint:'warm',
  t:'[It|它] [means|意味著] [the|那個] [panel|配電盤] [cannot|不能] [be|被] [reached|接近]\n[without|沒有] [moving|移動] [a|一面] [wall|牆] [we|我們] [have|已經] [just|剛剛] [built|建好].\n\n[The|那個] *[contractor|承包商] [fixes|修正] [it|它] [at|由] [their|他們的] [cost|費用]\n[because|因為] [it|它] [is|是] [on|在] [the|那份] *[snag list|缺失清單] [before|在…之前] *[completion|完工].\n\n[One|一] [line|行] [on|在] [one|一份] [list|清單], [written|寫] [by|由] [someone|某人] [who|他] [looked|看] [up|上].'}
],
quiz:[
 ['最便宜的報價為什麼便宜？',['品質較差','不含地板工程','工期較長','沒有保固'],1,'The cheapest excludes flooring——報價要先比範圍，再比價格。'],
 ['snag list 是什麼？',['採購清單','完工前的缺失清單','人員名單','材料清單'],1,'snag list（美式說 punch list）是驗收時列出的待修缺失。'],
 ['為什麼工期多了兩週？',['材料延誤','噪音限制只能平日六點前施工','缺工','房東不核准'],1,'Noise is restricted to weekdays before six. That adds two weeks。'],
 ['那一項缺失的實際意思是？',['管道間被雜物擋住','配電盤被新建的牆擋住，無法維修','電梯無法使用','樓梯被封'],1,'the panel cannot be reached without moving a wall we have just built。'],
 ['為什麼承包商要自費修正？',['他們同意賠償','缺失在完工前就列進清單了','房東要求','法律規定'],1,'it is on the snag list before completion——這正是 snag list 存在的意義。']
]},

/* ═══ 第 44 章 · 匯率 ═══ */
{
id:'c44', title:'The Rate', zh:'匯率',
blurb:'同一筆錢，差三週付，差了四萬。',
long:true,
pages:[
 {scene:'room',tint:'dawn',
  t:'The *[invoice|發票] [is|是] [in|以] [euros|歐元]: [eighty|八十] [thousand|千].\n[Payment|付款] *[terms|條件] [are|是] [thirty|三十] [days|天].\n\n[The|那個] *[exchange rate|匯率] [moved|變動] [three|三] [per cent|百分比] [last|上] [month|個月].\n[On|在] [this|這筆] [amount|金額] [that|那] [is|是] [about|大約]\n[eighty|八十] [thousand|千] [in|以] [local|當地] *[currency|貨幣].'},
 {scene:'room',tint:'day',
  t:'[You|你] [can|可以] [pay|付] [now|現在] [at|以] [today|今天]\'s [rate|匯率],\n[or|或] [wait|等待] [and|而且] [accept|接受] [whatever|不論什麼] [the|那個] [rate|匯率] [is|是] [then|到時].\n\n[Waiting|等待] [is|是] [not|不是] [saving|節省]. [It|它] [is|是] [betting|下注].\n[The|那家] [bank|銀行] [offers|提供] [a|一份] *[forward|遠期] [contract|合約]:\n[a|一個] [rate|匯率] *[locked in|鎖定] [today|今天], [settled|交割] [in|在] [thirty|三十] [days|天].'},
 {scene:'office',tint:'day',
  t:'[The|那個] [locked|鎖定的] [rate|匯率] [is|是] [slightly|略微] [worse|較差] [than|比] [today|今天]\'s.\n[That|那個] [difference|差額] [is|是] [the|那個] *[spread|價差] — [what|什麼] [the|那家] [bank|銀行] [takes|收取].\n\n[There|還] [is|是] [also|也] [a|一筆] *[transfer|匯款] *[fee|費用], [and|而且] [the|那個]\n*[beneficiary|受款人] [bank|銀行] [may|可能] [deduct|扣除] [its|它的] [own|自己的].\n[Ask|要求] [for|要] "[OUR|匯款人全額負擔]" [charges|費用] [if|如果] [the|那個] [supplier|供應商] [must|必須] [receive|收到] [the|那個] [full|全] [amount|額].'},
 {scene:'office',tint:'warm',
  t:'[You|你] [take|採取] [the|那份] *[forward|遠期] [contract|合約].\n[Three|三] [weeks|週] [later|之後] [the|那個] [rate|匯率] [moves|變動] [the|那個] [other|另一個] [way|方向].\n\n[You|你] [would|會] [have|有] [saved|省下] [forty|四十] [thousand|千] [by|藉由] [waiting|等待].\nDavid [does|沒有] not [mention|提起] [it|它].\n\n"[We|我們] [were|不是] [not|不是] [trying|試圖] [to|去] [win|贏]," [he|他] [says|說] [later|後來].\n"[We|我們] [were|是] [trying|試圖] [to|去] [know|知道] [the|那個] [number|數字]."'}
],
quiz:[
 ['為什麼等待付款不算節省？',['手續費更高','匯率可能往任何方向走，等於在下注','會逾期','銀行不接受'],1,'Waiting is not saving. It is betting。'],
 ['forward contract 的作用是？',['延後付款','用今天談好的匯率在未來交割','取消付款','分期付款'],1,'a rate locked in today, settled in thirty days。'],
 ['spread 是什麼？',['擴散','銀行在匯率上賺的價差','匯款手續費','稅金'],1,'That difference is the spread — what the bank takes。'],
 ['如果要讓供應商收到全額，該怎麼指定費用？',['BEN','SHA','OUR','不用指定'],2,'Ask for "OUR" charges——匯款人負擔所有費用。這是跨境付款的標準術語。'],
 ['David 最後那句話的意思是？',['他後悔了','鎖匯的目的是消除不確定性，不是賺價差','他覺得銀行騙人','下次要等'],1,'We were not trying to win. We were trying to know the number。']
]},

/* ═══ 第 45 章 · 複訓 ═══ */
{
id:'c45', title:'The Refresher', zh:'複訓',
blurb:'他做這件事十九年了。證照上週過期。',
long:true,
pages:[
 {scene:'warehouse',tint:'day',
  t:'Koh\'s *[certification|證照] *[expired|到期] [on|在] [the|那] [third|三日].\n[He|他] [has|已經] [driven|開] [a|一台] [forklift|堆高機] [for|有] [nineteen|十九] [years|年].\n\n[That|那] [does|沒] [not|有] [matter|關係]. [Without|沒有] [a|一張] *[valid|有效的] [card|證],\n[he|他] [cannot|不能] [operate|操作] [one|一台] [on|在] [site|工地].\n[The|那個] [insurer|保險公司] [would|會] [refuse|拒絕] [any|任何] [claim|理賠].'},
 {scene:'office',tint:'day',
  t:'The *[refresher|複訓] [course|課程] [is|是] [one|一] [day|天]:\n[half|一半] *[theory|學科], [half|一半] *[practical|術科].\n[The|那個] *[pass mark|及格分數] [is|是] [eighty|八十] [per cent|百分比].\n\n[It|它] [must|必須] [be|被] [run|舉辦] [by|由] [an|一家] *[accredited|經認證的] [provider|訓練機構].\n[The|那個] [nearest|最近的] [one|一家] [has|有] [a|一個] [three|三]-[week|週] [wait|等候].'},
 {scene:'office',tint:'day',
  t:'[There|有] [is|是] [a|一個] *[waiver|例外許可] [for|給] [operators|操作員] [with|有]\n[over|超過] [ten|十] [years|年] [of|的] [continuous|連續] *[records|紀錄].\n[Koh|Koh] [has|有] [nineteen|十九] [years|年] — [but|但] [the|那些] [records|紀錄]\n[from|從] [his|他的] [first|第一份] [employer|雇主] [are|是] [gone|不見的].\n\n[The|那家] [company|公司] [closed|倒閉] [in|在] [two|二〇] [thousand|〇] [and|] [nine|九].\n[Nine|九] [years|年] [cannot|不能] [be|被] *[verified|查證].'},
 {scene:'warehouse',tint:'warm',
  t:'[He|他] [takes|參加] [the|那個] [course|課程]. [He|他] [scores|得] [ninety|九十]-[six|六].\n\n[The|那個] [only|唯一] [question|題目] [he|他] [gets|答] [wrong|錯]\n[is|是] [about|關於] [a|一種] [machine|機器] [nobody|沒有人] [has|已經] [used|使用] [since|自從] [two|二〇] [thousand|〇] [and|] [twelve|一二].\n\n[Sam|Sam] [puts|放] [a|一份] *[reminder|提醒] [in|在] [the|那個] [system|系統]:\n[ninety|九十] [days|天] [before|在…之前] [every|每一張] [card|證] *[expires|到期].'}
],
quiz:[
 ['為什麼十九年經驗不算數？',['他技術退步了','沒有有效證照就不能操作，保險也不理賠','公司換老闆','機器換新了'],1,'Without a valid card, he cannot operate one on site。'],
 ['accredited provider 是什麼？',['政府機關','經認證的訓練機構','保險公司','原廠'],1,'accredited 指經過主管機關認可。訓練必須由這種機構舉辦才有效。'],
 ['他為什麼不能用例外許可？',['年資不足','前雇主倒閉，九年的紀錄無法查證','沒有申請','不符合職務'],1,'the records from his first employer are gone。'],
 ['他唯一答錯的題目是關於什麼？',['安全規範','一台從二〇一二年就沒人用的機器','裝載重量','速度限制'],1,'a machine nobody has used since two thousand and twelve——這是對複訓內容的一個安靜的批評。'],
 ['Sam 做了什麼預防措施？',['幫大家報名','在系統設定證照到期前九十天提醒','改用外包','買保險'],1,'a reminder... ninety days before every card expires。']
]},

/* ═══ 第 46 章 · 電表 ═══ */
{
id:'c46', title:'The Meter', zh:'電表',
blurb:'帳單漲了六成。用電量沒有變。',
long:true,
pages:[
 {scene:'warehouse',tint:'dawn',
  t:'The [electricity|電力] [bill|帳單] [rises|上升] [sixty|六十] [per cent|百分比] [in|在] [one|一] [quarter|季].\n[The|那個] *[consumption|用電量] [is|是] [almost|幾乎] [unchanged|不變的].\n\n[The|那個] [first|第一個] [thing|事情] [you|你] [check|查] [is|是] [the|那個] *[tariff|費率].\n[We|我們] [were|被] [moved|移] [to|到] [a|一個] [standard|標準] [rate|費率]\n[when|當] [the|那份] [fixed|固定] [contract|合約] [ended|結束] [in|在] [March|三月].'},
 {scene:'warehouse',tint:'day',
  t:'[Half|一半] [of|的] [our|我們的] [use|用量] [falls|落] [in|在] *[peak|尖峰] [hours|時段].\n[The|那個] *[off-peak|離峰] [rate|費率] [is|是] [less|少] [than|於] [half|一半].\n\n[The|那些] [big|大] [users|用電設備] [are|是] [the|那台] [compressor|壓縮機] [and|和] [the|那些] [chargers|充電器].\n[The|那些] [chargers|充電器] [run|運轉] [all|整] [day|天] [because|因為] [nobody|沒有人] [thought|想過]\n[about|關於] [when|何時] [they|它們] [run|運轉].'},
 {scene:'office',tint:'day',
  t:'[Moving|移動] [the|那些] [chargers|充電器] [to|到] [nights|夜間] [is|是] [free|免費的].\n[It|它] [saves|省下] [about|大約] [eleven|十一] [per cent|百分比].\n\n*[Insulating|加裝隔熱] [the|那個] [roof|屋頂] [costs|花費] [four|四] [hundred|百] [thousand|千]\n[and|而且] [saves|省下] [eighteen|十八] [per cent|百分比]. [The|那個] *[payback|回收期] [is|是] [six|六] [years|年].\n\n[The|那個] [lease|租約] [has|還有] [four|四] [years|年] [left|剩下].'},
 {scene:'warehouse',tint:'warm',
  t:'[You|你] [do|做] [the|那個] [free|免費的] [one|一項] [and|而且] [write|寫] [up|下] [the|那個] [other|另一個].\n[The|那份] [note|說明] [goes|去] [in|在] [the|那個] [lease|租約] [renewal|續約] [file|檔案]:\n"[If|如果] [we|我們] [renew|續約] [for|為] [ten|十] [years|年], [insulate|加裝隔熱]."\n\n[Four|四] [years|年] [later|之後] [somebody|某人] [opens|打開] [that|那個] [file|檔案].\n[It|它] [is|不是] not [your|你的] [name|名字] [on|在] [it|它] [any|不] [more|再].\n[The|那個] [roof|屋頂] [gets|被] [done|做] [anyway|還是].'}
],
quiz:[
 ['帳單為什麼變貴？',['用電量增加','固定費率合約到期，改成標準費率','設備老化','政府加稅'],1,'The consumption is almost unchanged——漲的是費率不是用量。'],
 ['tariff 在這裡是什麼意思？',['關稅','電價費率','稅金','帳單'],1,'electricity tariff 是電價方案。tariff 在貿易語境才是關稅。'],
 ['把充電器改到夜間為什麼有效？',['設備比較涼','離峰費率不到尖峰的一半','夜間沒人用','可以充比較久'],1,'The off-peak rate is less than half。'],
 ['payback 是什麼？',['退款','投資回收期','報復','分期付款'],1,'payback period 是省下的錢補回投資成本所需的時間。'],
 ['為什麼當下不做屋頂隔熱？',['太貴','回收期六年，但租約只剩四年','房東不同意','技術不成熟'],1,'The payback is six years. The lease has four years left。']
]},

/* ═══ 第 47 章 · 實地查核 ═══ */
{
id:'c47', title:'Due Diligence', zh:'實地查核',
blurb:'買方不是在找優點。他們在找理由砍價。',
long:true,
pages:[
 {scene:'meeting',tint:'day',
  t:'A [larger|更大的] [group|集團] [wants|想要] [to|去] *[acquire|收購] [sixty|六十] [per cent|百分比]\n[of|的] [the|那家] [company|公司]. [David|David] [would|會] [keep|保留] [a|一個] [forty|四十] [per cent|百分比] *[stake|股份].\n\n[Before|在…之前] [anything|任何事] [is|被] [agreed|同意],\n[they|他們] [run|進行] *[due diligence|實地查核]:\n[eight|八] [weeks|週] [of|的] [questions|問題].'},
 {scene:'meeting',tint:'day',
  t:'[Everything|一切] [goes|放] [into|到] [a|一個] *[data room|資料室] —\n[contracts|合約], [accounts|帳目], [staff|員工] [records|紀錄], [insurance|保險], [disputes|爭議].\n\n[They|他們] [ask|要求] [for|要] [a|一份] *[disclosure|揭露] [letter|書]:\n[everything|一切] [we|我們] [know|知道] [that|那個] [could|可能] [become|成為] [a|一個] [problem|問題].\n[Leaving|留] [something|某樣東西] [out|在外面] [is|是] [worse|更糟] [than|比] [disclosing|揭露] [it|它].'},
 {scene:'office',tint:'day',
  t:'[They|他們] [find|找到] [three|三] [things|事情]:\n[the|那個] [March|三月] [recall|召回], [the|那筆] [Dahan|大漢] [write|沖]-[off|銷],\n[and|和] [one|一份] [supplier|供應商] [contract|合約] [that|那個] [renews|續約] [automatically|自動地].\n\n[None|沒有一個] [is|是] [a|一個] [surprise|意外], [because|因為] [all|全部] [three|三]\n[were|被] [in|在] [the|那份] *[disclosure|揭露] [letter|書].\n[That|那] [is|是] [the|那個] [whole|整個] [point|重點].'},
 {scene:'meeting',tint:'warm',
  t:'The *[valuation|估值] [drops|下降] [by|達] [four|四] [per cent|百分比],\n[not|不是] [the|那個] [twenty|二十] [they|他們] [opened|開場] [with|以].\n\n[There|有] [is|是] [an|一項] *[indemnity|補償條款] [on|關於] [the|那個] [recall|召回]\n[capped|上限] [at|在] [two|兩] [years|年], [and|而且] [a|一項] *[warranty|保證條款] [that|那個]\n[the|那些] [accounts|帳目] [are|是] [true|真實的].\n\n[Completion|交割] [is|是] [in|在] [November|十一月].\nDavid [signs|簽署] [it|它] [with|用] [the|那支] [same|同一] [pen|筆] [he|他] [always|總是] [uses|使用].'}
],
quiz:[
 ['due diligence 是什麼？',['盡職調查／實地查核','法律訴訟','保險理賠','品質檢驗'],0,'買方在交易前對目標公司做的全面查核。多益商業文章的高頻詞。'],
 ['disclosure letter 的作用是？',['宣傳公司優點','主動揭露所有可能的問題','列出資產清單','保密協議'],1,'everything we know that could become a problem。'],
 ['為什麼主動揭露比隱瞞好？',['可以加分','被找到才發現會更糟，而且失去信任','法律規定','買方要求'],1,'Leaving something out is worse than disclosing it——而且因為都揭露了，估值只掉四趴。'],
 ['最後估值下降多少？',['百分之二十','百分之四','百分之六十','沒有下降'],1,'The valuation drops by four per cent, not the twenty they opened with。'],
 ['indemnity 是什麼？',['股份','補償條款','保證金','分紅'],1,'indemnity 是一方同意補償另一方特定損失的條款，這裡針對召回，上限兩年。']
]}

);

/* ── 統計 ─────────────────────────────────────────
   8 章 · 32 頁 · 約 1,500 字英文
   新增重點字 120 個（招標 · 召回 · 上市 · 裝修 ·
   匯率 · 複訓 · 能源 · 併購查核）
   小考 40 題
   美術成本：0 張新圖
   ─────────────────────────────────────────────── */
