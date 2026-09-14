/* ═══════════════════════════════════════════════════════
   chapters-8.js — 第八輯（8 章）
   載入順序：… → chapters-7.js → chapters-8.js → dict.js

   這一輯專門把「新單字庫」裡的字寫進情境
   ──────────────────────────────────────────────────────
   vocab-extra 裡的字目前只出現在卡牌和配對裡——背過，
   但沒有在句子裡見過。這八章把其中約 120 個放進故事。

   系統會自動處理：章節一寫，dict.js 收割就抓到那個字，
   vocab-extra 的去重會把它從「新單字」移到「舊單字」。
   字會自己畢業，不用手動搬。

   八個題材對應新字庫裡尚未有情境的類別：
     數據簡報 · 保費 · 貸款 · 續租 · 就醫
     職前訓練 · 排放報告 · 記者會

   一章 4 頁 · 約 190 字 · 重點字 15 個 · 小考 5 題
   ═══════════════════════════════════════════════════════ */

CONTENT.chapters.push(

/* ═══ 第 48 章 · 數據簡報 ═══ */
{
id:'c48', title:'The Chart', zh:'那張圖',
blurb:'曲線很漂亮。但沒有人問過那條基準線是怎麼來的。',
long:true,
pages:[
 {scene:'meeting',tint:'day',
  t:'The [quarterly|季度的] [slide|投影片] [shows|顯示] [one|一條] [line|線].\n[It|它] *[soars|飆升] [from|從] [March|三月] [to|到] [June|六月],\n[then|然後] *[levels off|持平] [and|而且] [stays|保持] [flat|平的].\n\nDavid [asks|問] [what|什麼] the *[baseline|基準線] [is|是].\n[Nobody|沒有人] [in|在] [the|那個] [room|房間] [knows|知道].'},
 {scene:'meeting',tint:'day',
  t:'[The|那條] [line|線] [is|是] [measured|衡量] [against|對照] [last|去] [year|年]\'s\n[worst|最差的] [quarter|季], [not|不是] [the|那個] *[average|平均].\n[Against|對照] [the|那個] [average|平均], [it|它] [is|是] *[flat|持平的].\n\n"[The|那個] [shape|形狀] [is|是] [true|真的]," you [say|說].\n"[The|那個] [scale|尺度] [is|是] [doing|做] [the|那個] [work|工作]."'},
 {scene:'office',tint:'day',
  t:'[You|你] [redraw|重畫] [it|它] [with|用] [both|兩條] [lines|線].\n[The|那個] *[trend|趨勢] [is|是] [still|仍然] *[upward|向上的], [but|但] *[gradual|漸進的]\n[rather|而不是] [than|是] *[dramatic|劇烈的].\n\n[Two|兩個] [figures|數字] [go|進] [underneath|下方]: [the|那個] *[projection|推估值]\n[and|和] [the|那個] *[deviation|偏離] [from|從] [it|它]. [Eleven|十一] [per cent|百分比].'},
 {scene:'meeting',tint:'warm',
  t:'Finance [prefers|偏好] [the|那個] [first|第一] [version|版本].\nDavid [sends|寄出] [the|那個] [second|第二個].\n\n"[If|如果] [we|我們] *[outperform|表現優於] [the|那個] [plan|計畫] [next|下] [quarter|季],"\nhe [says|說], "[I|我] [want|想要] [them|他們] [to|去] [believe|相信] [it|它].\n[That|那] [only|只有] [works|行得通] [if|如果] [this|這] [one|一份] [was|是] [honest|誠實的]."'}
],
quiz:[
 ['那張圖的問題出在哪裡？',['數字造假','基準線選的是去年最差的一季','顏色誤導','漏了一個月'],1,'measured against last year\'s worst quarter, not the average——形狀是真的，尺度在說謊。'],
 ['level off 是什麼意思？',['急速上升','持平不再變動','歸零','翻倍'],1,'level off 指曲線走平。多益圖表題的高頻說法。'],
 ['重畫之後趨勢如何？',['變成下滑','仍然向上但是漸進的','完全持平','無法判斷'],1,'still upward, but gradual rather than dramatic。'],
 ['deviation 在這裡是什麼？',['偏差、與推估值的落差','標準差','轉向','異常事件'],0,'the projection and the deviation from it. Eleven per cent。'],
 ['David 為什麼寄第二版？',['第一版有錯','為了下次報好消息時別人會相信','Finance 要求','比較好看'],1,'That only works if this one was honest——他在保護未來的可信度。']
]},

/* ═══ 第 49 章 · 保費 ═══ */
{
id:'c49', title:'The Premium', zh:'保費',
blurb:'我們只申請過一次理賠。保費卻漲了四成。',
long:true,
pages:[
 {scene:'room',tint:'dawn',
  t:'The *[renewal notice|續保通知] [arrives|抵達] [in|在] [October|十月].\n[The|那個] *[premium|保費] [is|是] [forty|四十] [per cent|百分比] [higher|更高].\n\n[We|我們] [made|提出] [one|一次] ~[claim|理賠] [last|去] [year|年].\n[One|一次]. [The|那個] [broker|保險經紀] [says|說] [that|那] [is|不是] [not|不是] [the|那個] [point|重點].'},
 {scene:'meeting',tint:'day',
  t:'The *[underwriter|核保人] [looks|看] [at|在] [the|那個] *[risk profile|風險輪廓],\n[not|不是] [at|在] [one|一] [event|事件].\n[Our|我們的] [storage|倉儲] [changed|改變] [in|在] [May|五月].\n[More|更多] [stock|庫存], [same|相同的] [sprinklers|灑水系統].\n\n[That|那] [raised|提高] [the|那個] *[exposure|曝險], [not|不是] [the|那個] [claim|理賠].'},
 {scene:'meeting',tint:'day',
  t:'[There|有] [are|是] [three|三] [ways|方式] [down|降低].\n[Raise|提高] [the|那個] *[deductible|自負額] — [we|我們] [pay|付] [more|更多] [per|每] [event|事件].\n[Install|安裝] [more|更多] [sprinklers|灑水系統] — [capital|資本] [now|現在], [savings|節省] [later|之後].\n[Or|或] [split|拆分] [the|那個] [stock|庫存] [across|橫跨] [two|兩個] *[premises|場所].\n\n[The|那個] [third|第三個] [one|一個] [costs|花費] [nothing|什麼都沒有]. [Nobody|沒有人] [had|已經] [suggested|建議] [it|它].'},
 {scene:'warehouse',tint:'warm',
  t:'[We|我們] [move|移動] [a|一] [third|三分之一] [of|的] [it|它] [to|到] [the|那個] [second|第二] [site|據點].\n[The|那個] *[underwriter|核保人] [sends|派] [a|一位] *[surveyor|公證人] [in|在] [November|十一月].\n\n[The|那個] [renewal|續保] [comes|來] [in|進] [at|在] [nine|九] [per cent|百分比] [up|上升],\n[not|不是] [forty|四十].\n\n[The|那個] [broker|經紀] [writes|寫]: "[Most|大部分] [clients|客戶] [argue|爭論].\n[Very|很] [few|少] [move|移動] [the|那些] [boxes|箱子]."'}
],
quiz:[
 ['保費為什麼上漲？',['因為提出過理賠','因為庫存增加但消防設備沒變','因為通膨','因為換了保險公司'],1,'That raised the exposure, not the claim——關鍵不是理賠次數。'],
 ['underwriter 是什麼？',['理賠員','核保人','業務員','公證人'],1,'underwriter 決定要不要承保、保費多少。adjuster 才是理賠員。'],
 ['deductible 提高會怎樣？',['保費下降，但每次出事自己付更多','保費上升','理賠更快','範圍變廣'],0,'we pay more per event——自負額和保費是反向的。'],
 ['最後採取的做法是？',['提高自負額','加裝灑水系統','把庫存分到兩個場所','換保險公司'],2,'The third one costs nothing——而且沒有人想到過。'],
 ['經紀最後那句話的意思是？',['客戶都很難搞','多數人只會爭論保費，很少人真的改變風險本身','理賠很麻煩','搬東西沒有用'],1,'Very few move the boxes——爭論價格沒用，改變風險才有用。']
]},

/* ═══ 第 50 章 · 貸款 ═══ */
{
id:'c50', title:'The Loan', zh:'那筆貸款',
blurb:'帳上是賺的。但下個月付不出薪水。',
long:true,
pages:[
 {scene:'office',tint:'dawn',
  t:'The [year|年度] [is|是] *[profitable|有利可圖的] [on|在] [paper|紙上].\n[The|那個] [problem|問題] [is|是] *[liquidity|流動性].\n\n[Two|兩個] [large|大] *[receivables|應收帳款] [are|是] [not|不] [due|到期] [until|直到] [March|三月].\n[Payroll|薪資] [is|是] [due|到期] [every|每] [month|月].'},
 {scene:'meeting',tint:'day',
  t:'The [bank|銀行] [offers|提供] [a|一筆] [facility|授信額度] [of|為] [two|兩] [million|百萬].\n[Twelve|十二] [monthly|每月] *[instalments|分期], [fixed|固定] [interest|利息].\n[They|他們] [want|想要] *[collateral|擔保品]: [the|那個] [warehouse|倉庫] [lease|租約]\n[and|和] [a|一份] [personal|個人] [guarantee|保證].'},
 {scene:'meeting',tint:'day',
  t:'David [refuses|拒絕] [the|那個] [personal|個人] [guarantee|保證].\n"[If|如果] [the|那家] [company|公司] [cannot|不能] [stand|支撐] [behind|在…之後] [it|它],\n[it|它] [should|應該] [not|不] [borrow|借]."\n\n[We|我們] [go|去] [back|回] [with|帶著] [a|一份] [shorter|較短的] [term|期間]\n[and|而且] [a|一個] [smaller|較小的] [amount|金額]. [Nine|九] [months|個月], [one|一] [million|百萬].\n[The|那個] [rate|利率] [is|是] [higher|更高]. [The|那個] *[maturity|到期日] [is|是] [closer|更接近].'},
 {scene:'office',tint:'warm',
  t:'[Both|兩筆] *[receivables|應收帳款] [land|入帳] [in|在] [February|二月], [early|提早].\n[The|那筆] [loan|貸款] [is|被] *[settled|結清] [in|在] [seven|七] [months|個月],\n[two|兩] [ahead|提前] [of|於] *[maturity|到期].\n\n[There|有] [is|是] [an|一筆] [early|提前] [repayment|還款] [fee|費用].\n[It|它] [is|是] [less|少] [than|於] [three|三] [months|個月] [of|的] [interest|利息].\n[You|你] [pay|付] [it|它] [and|而且] [close|關閉] [the|那個] [account|帳戶].'}
],
quiz:[
 ['公司的問題是什麼？',['虧損','帳上有賺但現金週轉不過來','客戶倒閉','成本失控'],1,'profitable on paper. The problem is liquidity——獲利和現金流是兩回事。'],
 ['collateral 是什麼？',['利息','擔保品','違約金','分期'],1,'銀行要求的擔保品：倉庫租約與個人保證。'],
 ['David 為什麼拒絕個人保證？',['金額太高','公司自己撐不起就不該借','銀行不可信','不想簽名'],1,'If the company cannot stand behind it, it should not borrow。'],
 ['最後改成什麼條件？',['兩百萬十二期','一百萬九個月，利率較高','無擔保','取消貸款'],1,'Nine months, one million. The rate is higher。'],
 ['提前還款的決定合理嗎？',['不合理，白付違約金','合理，提前還款費低於三個月利息','無法判斷','銀行不允許'],1,'It is less than three months of interest——算過才決定。']
]},

/* ═══ 第 51 章 · 續租 ═══ */
{
id:'c51', title:'The Lease Renewal', zh:'續租',
blurb:'房東開了三成。我們手上有一份他不知道我們有的報告。',
long:true,
pages:[
 {scene:'meeting',tint:'day',
  t:'The *[leasehold|租賃產權] [ends|結束] [in|在] [June|六月].\n[The|那位] ~[landlord|房東] [opens|開價] [at|在] [thirty|三十] [per cent|百分比] [up|上漲].\n\n[The|那個] [market|市場] [nearby|附近] [is|是] [up|上漲] [about|大約] [twelve|十二].\n[He|他] [knows|知道] [moving|搬遷] [a|一個] [warehouse|倉庫] [is|是] [expensive|昂貴的].'},
 {scene:'warehouse',tint:'day',
  t:'[In|在] [April|四月] [we|我們] [paid|付費] [for|為了] [a|一份] *[site survey|現地勘查].\n[The|那位] *[surveyor|測量師] [found|發現] [damp|潮濕] [in|在] [the|那個] [north|北] [wall|牆]\n[and|而且] [a|一個] [roof|屋頂] [with|有] [four|四] [years|年] [left|剩下].\n\n[Neither|兩者都不] [is|是] [our|我們的] *[obligation|義務] [under|依據] [the|那份]\n*[tenancy agreement|租賃契約]. [Both|兩者] [are|是] [his|他的].'},
 {scene:'meeting',tint:'day',
  t:'[We|我們] [do|沒有] [not|有] [open|開場] [with|用] [the|那份] [report|報告].\n[We|我們] [ask|要求] [for|要] [a|一段] *[rent-free period|免租期] [instead|反而]:\n[three|三] [months|個月], [in|作為] [exchange|交換] [for|為了] [a|一份] [five|五]-[year|年] [term|約期].\n\n[He|他] [refuses|拒絕]. [Then|然後] [we|我們] [send|寄] [the|那份] [survey|勘查報告].\n[Two|兩] [days|天] [later|之後] [he|他] [calls|打電話].'},
 {scene:'warehouse',tint:'warm',
  t:'[The|那個] [settlement|協議] [is|是] [fourteen|十四] [per cent|百分比], [five|五] [years|年],\n[two|兩] [months|個月] *[rent-free|免租], [and|而且] [the|那個] [roof|屋頂] [done|完成] [by|在…之前] [March|三月].\n\n[Written|書面] [into|寫入] [the|那份] ~[contract|合約], [not|不是] [agreed|同意] [on|在] [the|那通] [phone|電話].\n\n"[Everything|一切] [on|在] [a|一通] [call|通話] [gets|被] [forgotten|遺忘],"\nDavid [says|說]. "[Write|寫] [it|它] [down|下來] [while|當] [he|他] [still|仍然] [feels|覺得] [reasonable|講理的]."'}
],
quiz:[
 ['房東開價高於市場多少？',['十二趴','十四趴','約十八趴','三十趴'],2,'他開 30%，市場約 12%——差距約 18 個百分點。要自己減。'],
 ['勘查報告發現什麼？',['牆面潮濕、屋頂剩四年壽命','面積不符','違建','管線老舊'],0,'damp in the north wall and a roof with four years left。'],
 ['那兩項是誰的責任？',['我們的','房東的','雙方各半','契約沒寫'],1,'Neither is our obligation under the tenancy agreement. Both are his。'],
 ['為什麼不一開始就拿出報告？',['報告還沒完成','先談自己要的條件，報告留作籌碼','法律不允許','怕房東生氣'],1,'先要免租期，被拒絕之後才送出報告——順序本身就是談判。'],
 ['最後那句話的重點是？',['房東不可信','趁對方還講理的時候立刻寫成白紙黑字','電話比較快','要錄音'],1,'Write it down while he still feels reasonable。']
]},

/* ═══ 第 52 章 · 出差生病 ═══ */
{
id:'c52', title:'The Clinic Visit', zh:'看診',
blurb:'出差第三天發燒。保險卡在飯店，人在診所。',
long:true,
pages:[
 {scene:'counter',tint:'dawn',
  t:'You [wake|醒] [with|帶著] [a|一] [fever|發燒] [on|在] [the|那] [third|三] [day|天].\n[The|那個] [hotel|飯店] [sends|送] [you|你] [to|到] [a|一間] [clinic|診所] [two|兩] [streets|街] [away|遠].\n\n[The|那個] *[outpatient|門診] [desk|櫃檯] [asks|要求] [for|要] [insurance|保險].\n[Your|你的] [card|卡] [is|是] [in|在] [the|那個] [room|房間] [safe|保險箱].'},
 {scene:'counter',tint:'day',
  t:'[They|他們] [take|接受] [payment|付款] [and|而且] [give|給] [a|一份] [detailed|詳細的] ~[receipt|收據]\n[for|為了] *[reimbursement|核銷] [later|之後].\n"[Keep|留著] [the|那份] *[diagnosis|診斷] [page|頁]," [the|那位] [nurse|護理師] [says|說].\n"[Without|沒有] [it|它], [the|那家] [insurer|保險公司] [will|會] [ask|要求] [for|要] [it|它] [anyway|還是]."'},
 {scene:'room',tint:'day',
  t:'The [doctor|醫生] [asks|問] [about|關於] *[symptoms|症狀] [and|和] [travel|旅行].\n[No|不用] *[antibiotic|抗生素] — [it|它] [is|是] [viral|病毒性的].\n[Rest|休息], [fluids|水分], [and|和] [something|某種東西] [for|為了] [the|那個] [fever|發燒].\n\n[The|那個] *[dosage|劑量] [is|是] [written|寫] [on|在] [the|那個] [box|盒子].\n[One|一顆] [every|每] [six|六] [hours|小時], [not|不是] [four|四]. [You|你] [read|讀] [it|它] [twice|兩次].'},
 {scene:'room',tint:'warm',
  t:'[You|你] [miss|錯過] [one|一場] [meeting|會議] [and|而且] [move|移動] [two|兩場].\n[Nobody|沒有人] [minds|介意]. [The|那位] [client|客戶] [reschedules|改期] [without|沒有] [being|被] [asked|要求].\n\n[Three|三] [weeks|週] [later|之後] [the|那筆] *[reimbursement|核銷] [arrives|抵達] [in|在] [full|全額].\n[The|那個] [only|唯一] [reason|原因] [is|是] [the|那張] [page|頁] [the|那位] [nurse|護理師] [mentioned|提到].'}
],
quiz:[
 ['在診所遇到什麼問題？',['沒有錢','保險卡放在飯店保險箱','語言不通','診所沒開'],1,'Your card is in the room safe。'],
 ['護理師建議留著什麼？',['收據','診斷頁','掛號單','藥袋'],1,'Keep the diagnosis page——後面證明這是核銷成功的關鍵。'],
 ['醫生為什麼不開抗生素？',['病人過敏','是病毒感染','沒有庫存','太貴'],1,'No antibiotic — it is viral。抗生素對病毒無效。'],
 ['dosage 是什麼？',['劑量','藥名','副作用','療程'],0,'One every six hours——服藥的量與頻率。'],
 ['核銷能全額通過的原因是？',['金額不高','保留了診斷文件','保險公司通融','客戶協助'],1,'The only reason is the page the nurse mentioned。']
]},

/* ═══ 第 53 章 · 職前訓練 ═══ */
{
id:'c53', title:'The Induction', zh:'職前訓練',
blurb:'兩天的課程，只有一頁是新人真的用得到的。',
long:true,
pages:[
 {scene:'meeting',tint:'day',
  t:'The *[induction|職前訓練] [runs|進行] [for|有] [two|兩] [days|天].\n[The|那份] *[syllabus|課程大綱] [has|有] [nineteen|十九] [topics|主題].\n\n[Sixteen|十六] [are|是] [policy|政策]. [Three|三] [are|是] [practical|實務的].\n[The|那些] [new|新] [hires|員工] [remember|記得] [the|那] [three|三個].'},
 {scene:'meeting',tint:'day',
  t:'You [are|被] [asked|要求] [to|去] [redesign|重新設計] [it|它].\n[The|那個] [first|第一] [question|問題] [is|不是] [not|不是] [what|什麼] [to|去] [teach|教],\n[but|而是] [what|什麼] [they|他們] [will|會] [need|需要] [in|在] [week|第] [one|一週].\n\n[You|你] [ask|問] [four|四] [people|人] [who|他們] [joined|加入] [last|去] [year|年].\n[All|全部] [four|四個] [say|說] [the|同] [same|樣] [thing|東西]: "[Who|誰] [to|去] [ask|問]."'},
 {scene:'office',tint:'day',
  t:'[The|那個] [new|新的] [version|版本] [is|是] [half|一半] [a|一] [day|天].\n[A|一] [floor|樓層] [map|地圖]. [A|一] [list|清單] [of|的] [names|名字] [with|帶] [photos|照片].\n[Three|三] *[prerequisite|先修的] [tasks|任務] [to|去] [complete|完成] [before|在…之前] [day|第] [two|二天].\n\n[The|那個] [policy|政策] [material|教材] [becomes|變成] [a|一份] [document|文件]\n[with|附] [a|一份] *[glossary|字彙表] [at|在] [the|那個] [back|後面].'},
 {scene:'meeting',tint:'warm',
  t:'[A|一位] *[mentor|導師] [is|被] [assigned|指派] [to|給] [each|每個] [new|新] [hire|員工]\n[for|為期] [six|六] [weeks|週]. [Not|不是] [a|一位] [manager|主管] — [someone|某人]\n[who|他] [joined|加入] [within|在…之內] [the|那] [last|過去] [year|年].\n\n[Six|六] [months|個月] [later|之後] [the|那個] *[retention|留任率] [of|的] [new|新] [staff|員工]\n[is|是] [the|那個] [highest|最高的] [it|它] [has|已經] [been|是].\n[Nobody|沒有人] [can|能] [prove|證明] [the|那個] [two|兩] [things|事情] [are|是] [connected|相關的].'}
],
quiz:[
 ['原本的職前訓練有什麼問題？',['太短','十九個主題裡十六個是政策','講師不好','沒有教材'],1,'Sixteen are policy. Three are practical——新人只記得那三個。'],
 ['去年進來的四個人一致說最需要什麼？',['薪資制度','知道該問誰','公司歷史','系統操作'],1,'All four say the same thing: "Who to ask."'],
 ['prerequisite 是什麼意思？',['先決條件、先修的','附加的','選修的','必修的'],0,'Three prerequisite tasks to complete before day two——第二天之前要先完成。'],
 ['導師的人選條件是什麼？',['資深主管','過去一年內才加入的人','外部講師','人資'],1,'Not a manager — someone who joined within the last year。'],
 ['最後一句的態度是什麼？',['確信改革有效','承認留任率上升與改革之間無法證明因果','認為改革失敗','不在乎結果'],1,'Nobody can prove the two things are connected——誠實地不誇大。']
]},

/* ═══ 第 54 章 · 排放報告 ═══ */
{
id:'c54', title:'The Emissions Report', zh:'排放報告',
blurb:'客戶要的不是數字。是有沒有人真的算過。',
long:true,
pages:[
 {scene:'office',tint:'dawn',
  t:'A [client|客戶] [asks|要求] [for|要] [our|我們的] *[carbon footprint|碳足跡].\n[Not|不是] [a|一份] [certificate|證書] — [the|那個] [actual|實際的] [number|數字].\n\n[Nobody|沒有人] [has|已經] [calculated|計算] [it|它].\n[The|那個] [first|第一] [reaction|反應] [is|是] [to|去] [buy|購買] [an|一份] *[offset|抵銷額度].'},
 {scene:'warehouse',tint:'day',
  t:'[An|一份] *[offset|抵銷] [without|沒有] [a|一個] [number|數字] [is|是] [meaningless|無意義的].\n[You|你] [start|開始] [with|用] [what|什麼] [can|能] [be|被] [measured|衡量]:\n[electricity|電力], [freight|貨運], [and|和] *[packaging|包裝] [waste|廢棄物].\n\n[Freight|貨運] [turns|結果] [out|是] [to|去] [be|是] [seventy|七十] [per cent|百分比] [of|的] [it|它].\n[Everyone|每個人] [had|已經] [assumed|假定] [it|它] [was|是] [the|那個] [building|建築].'},
 {scene:'meeting',tint:'day',
  t:'[Two|兩] [changes|改變] [cut|減少] [it|它] [by|達] [a|一] [fifth|五分之一].\n[Consolidating|整併] [shipments|出貨] [to|到] [weekly|每週], [and|而且] [switching|轉換]\n[one|一] [route|路線] [from|從] [air|空運] [to|到] [sea|海運].\n\n[Both|兩者] [also|也] [save|省下] [money|錢].\n[That|那] [is|不是] [not|不是] [a|一個] [coincidence|巧合] — [fuel|燃料] [is|是] [a|一個] [cost|成本]\n[and|而且] [an|一種] *[emission|排放] [at|在] [the|同] [same|一] [time|時間].'},
 {scene:'meeting',tint:'warm',
  t:'[The|那份] [report|報告] [is|是] [four|四] [pages|頁].\n[It|它] [says|說] [what|什麼] [was|被] [measured|衡量], [what|什麼] [was|被] [estimated|估算],\n[and|而且] [what|什麼] [was|被] [left|留] [out|在外面].\n\n[The|那個] [client|客戶] [replies|回覆]: "[This|這] [is|是] [the|那個] [first|第一份] [one|一份]\n[that|那個] [admits|承認] [what|什麼] [it|它] [does|沒有] [not|有] [know|知道]."\n[They|他們] [renew|續約] [for|為] [two|兩] [years|年].'}
],
quiz:[
 ['客戶要的是什麼？',['一張認證證書','實際的碳足跡數字','減碳承諾','抵銷額度'],1,'Not a certificate — the actual number。'],
 ['為什麼不能直接買抵銷額度？',['太貴','沒有數字的抵銷沒有意義','客戶不接受','法規禁止'],1,'An offset without a number is meaningless。'],
 ['排放的最大來源是什麼？',['建築物用電','貨運','包裝','員工通勤'],1,'Freight turns out to be seventy per cent——大家原本都以為是建築。'],
 ['為什麼減碳同時省錢？',['政府補助','燃料既是成本也是排放','可以賣碳權','員工變少'],1,'fuel is a cost and an emission at the same time。'],
 ['客戶為什麼續約？',['價格便宜','報告誠實地寫出哪些沒算到','報告最完整','有認證'],1,'the first one that admits what it does not know。']
]},

/* ═══ 第 55 章 · 記者會 ═══ */
{
id:'c55', title:'The Press Conference', zh:'記者會',
blurb:'十七分鐘的說明，全場只記得最後那個問題。',
long:true,
pages:[
 {scene:'meeting',tint:'day',
  t:'The *[press conference|記者會] [is|是] [at|在] [eleven|十一點].\n[Nine|九] [journalists|記者], [two|兩] [cameras|攝影機], [one|一位] *[moderator|主持人].\n\n[The|那個] [subject|主題] [is|是] [the|那個] [March|三月] ~[recall|召回].\n[The|那份] [prepared|準備好的] [statement|聲明] [runs|長達] [seventeen|十七] [minutes|分鐘].'},
 {scene:'meeting',tint:'day',
  t:'[Legal|法務] [wants|想要] [every|每] [sentence|句子] [checked|檢查].\n[Marketing|行銷] [wants|想要] [the|那個] [word|字] "[defect|瑕疵]" [replaced|替換].\n\nDavid [keeps|保留] [it|它].\n"[If|如果] [we|我們] [call|稱] [it|它] [something|某種東西] [else|別的],\n[the|那個] [headline|標題] [will|會] [use|使用] [the|那個] [real|真正的] [word|字] [anyway|還是]."'},
 {scene:'meeting',tint:'day',
  t:'[The|那份] [statement|聲明] [goes|進行] [fine|順利].\n[Then|然後] [a|一位] [reporter|記者] [asks|問] [how|如何] [many|多少] [units|單位] [were|被] [sold|售出]\n[before|在…之前] [the|那個] *[recall|召回] [notice|公告].\n\n[The|那個] [number|數字] [is|是] [in|在] [the|那份] [pack|資料袋].\nDavid [gives|給] [it|它] [without|沒有] [looking|查看] [it|它] [up|起來].\n[That|那] [is|是] [the|那個] [moment|時刻] [the|那些] [cameras|攝影機] [record|記錄].'},
 {scene:'office',tint:'warm',
  t:'The *[coverage|報導] [next|隔] [day|天] [is|是] [short|簡短的] [and|而且] [flat|平淡的].\n[Three|三] [outlets|媒體], [no|沒有] [follow|後]-[up|續].\n\n"[Boring|無聊] [is|是] [the|那個] [goal|目標]," David [says|說].\n"[If|如果] [they|他們] [had|有] [caught|抓到] [me|我] [hesitating|猶豫],\n[that|那] [would|會] [have|有] [been|是] [the|那個] [story|新聞]."'}
],
quiz:[
 ['行銷部門想改掉哪個字？',['recall','defect','notice','statement'],1,'Marketing wants the word "defect" replaced。'],
 ['David 為什麼堅持不改？',['法務要求','就算改了，標題還是會用真正的那個字','行銷沒有決定權','來不及改'],1,'the headline will use the real word anyway。'],
 ['記者會上最關鍵的一刻是什麼？',['聲明開頭','他不用查資料就報出數字','攝影機故障','主持人打斷'],1,'David gives it without looking it up. That is the moment the cameras record。'],
 ['coverage 在這裡是什麼意思？',['承保範圍','媒體報導','覆蓋率','掩護'],1,'在媒體語境是報導。在保險語境才是承保範圍——一字兩義。'],
 ['為什麼說「無聊就是目標」？',['沒有人想看','沒有破綻就不會變成新聞','媒體不重要','記者會失敗'],1,'If they had caught me hesitating, that would have been the story。']
]}

);

/* ── 統計 ─────────────────────────────────────────
   8 章 · 32 頁 · 約 1,500 字英文
   重點字 120 個，全部取自 vocab-extra——
   這些字因此從「新單字」畢業成「章節教過」。
   小考 40 題 · 美術成本 0 張新圖
   ─────────────────────────────────────────────── */
