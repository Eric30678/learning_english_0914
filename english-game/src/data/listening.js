/* ═══════════════════════════════════════════════════════
   listening.js — 聽力題庫 v2
   載入順序：content.js → scenes-extra.js → listening.js

   為什麼整個重做
   ──────────────────────────────────────────────────────
   v1 直接把閱讀章節的句子搬來唸，玩家練到的是「認出讀過的
   東西」，不是解析聲音。分數會虛高，換新內容就崩掉。

   v2 的原則：
     字彙重複 ✓（handle、clearance、stay put… 是設計好的回收）
     句子重複 ✗
     情節重複 ✗（知道結局，推論題就白做了）

   所以場景、事件、人物全部換新：
     機場 · 診所 · 車行 · 飯店 · 工地
     新角色：Dan（車行）Koh（工地）

   聽力才練得到的四種難點，各自做成題型
   ──────────────────────────────────────────────────────
   number   數字與時間：fifteen / fifty、報號碼、報金額
   sound    近音：whether / weather、leave / live、desk / disk
   reduce   縮讀：wanna、d'you、I'd've — 文字上不存在
   correct  改口：Actually… / I mean… — 書面英文沒有

   長度分四級，最後一級是真實考試的規格
   ──────────────────────────────────────────────────────
   Part 3　L1 30 字 → L2 55 字 → L3 75 字 → L4 100 字
   Part 4　L1 40 字 → L2 60 字 → L3 85 字 → L4 110 字
   真實多益 Part 3 約 60–100 字、Part 4 約 90–130 字。
   ═══════════════════════════════════════════════════════ */

/* ── 新增場景：機場 ── */
Object.assign(CONTENT.scenes, {
airport: `<svg viewBox="0 0 360 130" shape-rendering="crispEdges" xmlns="http://www.w3.org/2000/svg">
<rect x="0" y="0" width="360" height="10" fill="#1c222e"/><rect x="0" y="10" width="360" height="34" fill="#e4e8ee"/>
<rect x="0" y="44" width="360" height="30" fill="#d6dbe3"/><rect x="0" y="74" width="360" height="14" fill="#c4cad4"/>
<rect x="0" y="86" width="360" height="2" fill="#9aa3b0"/>
<rect x="196" y="12" width="152" height="66" fill="#2b3340"/><rect x="200" y="16" width="144" height="58" fill="#a9d4ea"/>
<rect x="200" y="16" width="144" height="20" fill="#c9e6f5"/><rect x="268" y="16" width="4" height="58" fill="#2b3340"/>
<rect x="200" y="44" width="144" height="4" fill="#2b3340"/>
<rect x="232" y="50" width="76" height="8" fill="#e8ecf2"/><rect x="252" y="44" width="20" height="8" fill="#e8ecf2"/>
<rect x="224" y="52" width="10" height="4" fill="#8a93a3"/><rect x="300" y="52" width="12" height="4" fill="#8a93a3"/>
<rect x="200" y="66" width="144" height="8" fill="#7d8796"/>
<rect x="16" y="14" width="120" height="56" fill="#14181f"/><rect x="20" y="18" width="112" height="48" fill="#1c2230"/>
<rect x="26" y="24" width="30" height="5" fill="#f2c14a"/><rect x="64" y="24" width="20" height="5" fill="#7fd4e8"/>
<rect x="92" y="24" width="32" height="5" fill="#8fdc9a"/>
<rect x="26" y="34" width="34" height="5" fill="#f2c14a"/><rect x="68" y="34" width="16" height="5" fill="#7fd4e8"/>
<rect x="92" y="34" width="28" height="5" fill="#8fdc9a"/>
<rect x="26" y="44" width="26" height="5" fill="#f2c14a"/><rect x="60" y="44" width="24" height="5" fill="#7fd4e8"/>
<rect x="92" y="44" width="30" height="5" fill="#d97f6b"/>
<rect x="26" y="54" width="32" height="5" fill="#f2c14a"/><rect x="66" y="54" width="18" height="5" fill="#7fd4e8"/>
<rect x="0" y="88" width="360" height="42" fill="#b8bfc9"/><rect x="0" y="88" width="360" height="3" fill="#c9d0d9"/>
<rect x="0" y="106" width="360" height="2" fill="#a2aab6"/><rect x="120" y="88" width="2" height="42" fill="#a2aab6"/>
<rect x="260" y="88" width="2" height="42" fill="#a2aab6"/>
<rect x="14" y="96" width="96" height="8" fill="#3f4a5c"/><rect x="14" y="96" width="96" height="3" fill="#53607a"/>
<rect x="18" y="104" width="6" height="14" fill="#2e3747"/><rect x="100" y="104" width="6" height="14" fill="#2e3747"/>
<rect x="14" y="84" width="96" height="12" fill="#4f5d73"/>
<rect x="130" y="96" width="96" height="8" fill="#3f4a5c"/><rect x="130" y="96" width="96" height="3" fill="#53607a"/>
<rect x="134" y="104" width="6" height="14" fill="#2e3747"/><rect x="216" y="104" width="6" height="14" fill="#2e3747"/>
<rect x="130" y="84" width="96" height="12" fill="#4f5d73"/>
<g transform="translate(272,52)">
<rect x="6" y="0" width="16" height="6" fill="#3a2b22"/><rect x="7" y="2" width="14" height="12" fill="#eec08f"/>
<rect x="7" y="2" width="4" height="12" fill="#d19a6b"/><rect x="6" y="0" width="16" height="5" fill="#3a2b22"/>
<rect x="12" y="7" width="2" height="2" fill="#2a1c14"/><rect x="17" y="7" width="2" height="2" fill="#2a1c14"/>
<rect x="4" y="16" width="20" height="22" fill="#4f6f9c"/><rect x="4" y="16" width="6" height="22" fill="#3d5a82"/>
<rect x="0" y="18" width="4" height="16" fill="#3d5a82"/><rect x="24" y="18" width="4" height="16" fill="#4f6f9c"/>
<rect x="0" y="34" width="4" height="4" fill="#d19a6b"/><rect x="24" y="34" width="4" height="4" fill="#eec08f"/>
<rect x="6" y="38" width="7" height="14" fill="#2a3140"/><rect x="15" y="38" width="7" height="14" fill="#232936"/></g>
<rect x="304" y="76" width="22" height="18" fill="#6b4a3a"/><rect x="304" y="76" width="22" height="4" fill="#8a6250"/>
<rect x="312" y="72" width="6" height="4" fill="#4a3228"/><rect x="300" y="94" width="30" height="4" fill="#000" fill-opacity=".18"/>
<rect x="264" y="98" width="44" height="4" fill="#000" fill-opacity=".16"/>
</svg>`
});

CONTENT.listening = {

/* ═══ PART 1 · 照片描述（8 題）═════════════════════════ */
part1: [
 {scene:'airport', tint:'day', answer:2,
  options:[
   'The passengers are boarding the aircraft.',
   'A woman is checking the departure board.',
   'A man is standing near the window.',
   'The seats are all occupied.'],
  note:'一個人站在窗邊。A、B 的動作沒發生，D 與畫面相反——座位是空的。'},

 {scene:'counter', tint:'day', answer:0,
  options:[
   'Someone is working behind the desk.',
   'A patient is filling in a form.',
   'The queue reaches the door.',
   'The lights have been turned off.'],
  note:'櫃檯後面有人。D 用完成被動 have been turned off，聽漏 off 就會選錯。'},

 {scene:'warehouse', tint:'dawn', answer:3,
  options:[
   'A vehicle is being unloaded.',
   'The workers are wearing helmets.',
   'The floor is being swept.',
   'Cartons have been placed on a pallet.'],
  note:'unloaded 和 loaded 只差一個字首。B 說 helmets 但圖上是反光背心。'},

 {scene:'street', tint:'dusk', answer:1,
  options:[
   'A car is turning at the corner.',
   'A street light is on.',
   'People are boarding a bus.',
   'The shops have closed for the night.'],
  note:'路燈亮著。C、D 都是黃昏街景的合理想像，但畫面裡沒有依據。'},

 {scene:'meeting', tint:'day', answer:2,
  options:[
   'Documents are being handed out.',
   'The projector is switched on.',
   'A whiteboard has been written on.',
   'Nobody is seated at the table.'],
  note:'白板上有寫過的痕跡。D 用 Nobody——全稱否定在 Part 1 幾乎都錯。'},

 {scene:'room', tint:'dawn', answer:0,
  options:[
   'A device is on the desk.',
   'The bed is being made.',
   'Curtains are covering the window.',
   'A lamp is lying on the floor.'],
  note:'device 是刻意的上位詞。Part 1 的正解常常用比較籠統的字，而不是具體的 phone。'},

 {scene:'office', tint:'storm', answer:1,
  options:[
   'Rain is coming through the window.',
   'The window is closed.',
   'Someone is carrying an umbrella.',
   'The desks have been cleared.'],
  note:'窗戶關著。A 的 coming through 沒有發生，只是外面在下雨。'},

 {scene:'airport', tint:'dusk', answer:3,
  options:[
   'An aircraft is taking off.',
   'The board is blank.',
   'Luggage is being weighed.',
   'A suitcase is next to a chair.'],
  note:'行李在椅子旁邊。B 說看板空白，但上面有幾行資訊——聽到 blank 要立刻對照畫面。'}
],

/* ═══ PART 2 · 應答問題（16 題）════════════════════════ */
part2: [
 {skill:'number', q:'What time does the flight board?', answer:0,
  options:['At fifteen past nine.','Gate fifty.','For nine passengers.'],
  note:'fifteen 重音在後（fif-TEEN），fifty 在前（FIF-ty）。B 用 fifty 混淆，C 答人數。'},

 {skill:'number', q:'How much is the deposit?', answer:2,
  options:['About ninety rooms.','At nine in the morning.','Nineteen hundred, I think.'],
  note:'ninety / nineteen / nine 三個放一起。分辨 -ty 和 -teen 的尾音是關鍵。'},

 {skill:'number', q:'Which gate does it leave from?', answer:1,
  options:['Thirty minutes from now.','B thirteen, I believe.','Thirteen euros each.'],
  note:'thirty 和 thirteen 又是一組。而且 A、C 都答錯了問題類型。'},

 {skill:'number', q:'How many cartons did you count?', answer:0,
  options:['Forty, not fourteen.','On the fourth floor.','Four days ago.'],
  note:'正解自己把混淆點講出來了——「先澄清再回答」在 Part 2 很常見。'},

 {skill:'sound', q:'Do you know whether the road is open?', answer:1,
  options:['The weather has improved.','It was closed this morning.','I left it on the desk.'],
  note:'whether / weather 同音。A 聽起來完全合理，但答錯了問題。'},

 {skill:'sound', q:'Where did they leave the keys?', answer:2,
  options:['They live on the fourth floor.','About two weeks ago.','In the top drawer.'],
  note:'leave / live 的母音長短不同（liːv / lɪv），講快了很難分。'},

 {skill:'sound', q:'Has the desk been moved yet?', answer:0,
  options:['Yes, to the back office.','The disk is nearly full.','He described it to me.'],
  note:'desk / disk / described 都以 d 和 s 開頭。近音誘答通常放在 B 和 C。'},

 {skill:'reduce', q:'Wanna share a taxi to the station?', answer:1,
  options:['It cost about three hundred.','Sure, if we are going the same way.','The station closes at midnight.'],
  note:'wanna = want to。口語縮讀在文字上不存在，只有聽才會遇到。'},

 {skill:'reduce', q:"D'you know if Dan's in today?", answer:2,
  options:['I will send it this afternoon.','On the second floor, I think.','He called in sick this morning.'],
  note:"D'you = Do you，Dan's = Dan is。兩個縮讀疊在一起，整句只剩五個音節。"},

 {skill:'reduce', q:"I'd've called, but my phone died.", answer:0,
  options:['No problem, I got your message.','It takes about an hour to charge.','I will call them tomorrow.'],
  note:"I'd've = I would have。這是英語口語最常見的三重縮讀之一。"},

 {skill:'correct', q:'The meeting is at three — sorry, at four.', answer:1,
  options:['Three people, then.','Four works better for me anyway.','It lasted three hours.'],
  note:'講者自己改口了，要抓後面那個數字。A 和 C 都抓了被取消的 three。'},

 {skill:'correct', q:'Put it in Zone B. Actually, no — Zone C.', answer:2,
  options:['Zone B is open until eight.','There are two zones.','C is the one open overnight, right?'],
  note:'Actually, no 之後才是真正的指令。真實對話很常這樣自我修正。'},

 {skill:'correct', q:'Dan is handling it. I mean Priya — Dan left in June.', answer:0,
  options:['Then I will email Priya.','Dan is very reliable.','In June or July?'],
  note:'I mean 之後才是正確資訊。B 抓了被更正掉的名字。'},

 {skill:'wh', q:'Why is the clinic closed this week?', answer:1,
  options:['Until the twenty-second.','They are moving to a new building.','On Fuxing Road.'],
  note:'Why 要原因。A 答期間、C 答地點——兩個都相關但答錯疑問詞。'},

 {skill:'statement', q:'I cannot get the machine to start.', answer:2,
  options:['It starts at nine.','About two years old.','Did you check it is plugged in?'],
  note:'陳述困境要接解法。A 抓了 start 這個字就答時間，是典型的字面陷阱。'},

 {skill:'statement', q:'This is not the room I booked.', answer:0,
  options:['Let me look at your reservation.','It is on the fifth floor.','For two nights, yes.'],
  note:'抱怨要接處理動作。B、C 都只回答了沒被問的細節。'}
],

/* ═══ PART 3 · 簡短對話（4 組，長度分級）═══════════════ */
part3: [
 {level:1, words:30, intro:'Questions refer to the following conversation.',
  scene:'counter', tint:'day',
  lines:[
   ['W','Have you been to this clinic before?'],
   ['M','First time. I have an appointment at eleven fifteen.'],
   ['W','Eleven fifty, actually. You are thirty-five minutes early.']],
  qs:[
   {q:'Where does this conversation take place?', answer:2,
    options:['At an airport','At a hotel','At a clinic','At a garage'],
    note:'clinic 在第一句就出現。地點題的線索通常在開頭。'},
   {q:'What mistake did the man make?', answer:0,
    options:['He misheard his appointment time','He came on the wrong day','He forgot his documents','He went to the wrong building'],
    note:'他說 eleven fifteen，實際是 eleven fifty——-teen 和 -ty 的差別。'}]},

 {level:2, words:55, intro:'Questions refer to the following conversation.',
  scene:'street', tint:'day',
  lines:[
   ['M','Your car is ready, but I had to replace the battery as well.'],
   ['W','How much does that add?'],
   ['M','Nineteen hundred. I would have called first, but the number on file was wrong.'],
   ['W','That is fine. Can I collect it before six?'],
   ['M','We close at five thirty on Fridays.']],
  qs:[
   {q:'What did the man replace?', answer:1,
    options:['A tyre','A battery','A window','A key'],
    note:'replace the battery as well。as well 表示這是原本沒預期的額外項目。'},
   {q:'Why did he not call the woman?', answer:2,
    options:['He was too busy','The car was not ready','The phone number on file was wrong','He forgot'],
    note:'the number on file was wrong。'},
   {q:'What problem does the woman have?', answer:0,
    options:['She cannot arrive before closing time','She cannot pay today','She lost her keys','She needs a different car'],
    note:'她問六點前能不能拿，但週五五點半就關——兩句時間要對起來。'}]},

 {level:3, words:75, intro:'Questions refer to the following conversation.',
  scene:'room', tint:'night',
  lines:[
   ['W','Reception, how can I help?'],
   ['M','I am in four oh two. The room is fine, but there is no hot water.'],
   ['W','Since when?'],
   ['M','Since last night. I did not want to call at two in the morning.'],
   ['W','I will send someone up now. If it cannot be fixed today, we will move you to five ten.'],
   ['M','Five ten is a twin, is it not? I would rather stay where I am.'],
   ['W','Then let us try the repair first.']],
  qs:[
   {q:'What is the man calling about?', answer:1,
    options:['A noisy room','No hot water','A lost key','A late checkout'],
    note:'there is no hot water。'},
   {q:'Why did he not call earlier?', answer:3,
    options:['The phone was broken','He was out','He thought it would fix itself','It was the middle of the night'],
    note:'I did not want to call at two in the morning——他是體貼，不是沒發現。'},
   {q:'Why does he not want to change rooms?', answer:0,
    options:['The other room has two single beds','It costs more','It is on a higher floor','It is further from the lift'],
    note:'Five ten is a twin——twin 是兩張單人床。這個字沒聽懂就答不出來。'}]},

 {level:4, words:101, intro:'Questions refer to the following conversation among three speakers.',
  scene:'warehouse', tint:'dawn',
  lines:[
   ['M','The crane is booked for Thursday morning, but clearance has not come through yet.'],
   ['W','How long does clearance usually take at this port?'],
   ['M','Two to five working days. We submitted the paperwork on Monday afternoon.'],
   ['W','So Thursday is possible, but nobody can promise it. Can we hold the booking?'],
   ['M2','We can hold it, but there is a cancellation fee once we pass Wednesday noon.'],
   ['W','Then we decide on Wednesday morning. If clearance is still not through by then, we push the whole lift to Monday.'],
   ['M','That costs us a week of storage.'],
   ['W','Less than paying for a crane we are not allowed to use.']],
  qs:[
   {q:'What is the main problem?', answer:2,
    options:['The crane is broken','Nobody applied for clearance','Clearance may not arrive before the crane booking','The fee is too high'],
    note:'申請已經送了（applied on Monday），問題是可能來不及。B 是誘答。'},
   {q:'What happens after Wednesday noon?', answer:1,
    options:['The crane is released','A cancellation fee applies','Clearance is rejected','The site closes'],
    note:'there is a cancellation fee after Wednesday noon。三人對話要記住誰說了什麼。'},
   {q:'What does the woman decide?', answer:0,
    options:['Decide by Wednesday morning, and delay if necessary','Cancel the crane immediately','Pay the fee now','Apply for clearance again'],
    note:'最後兩句是她的結論，而且她說明了理由：延一週比付錢租用不到的吊車便宜。'}]}
],

/* ═══ PART 4 · 簡短獨白（4 組，長度分級）═══════════════ */
part4: [
 {level:1, words:40, intro:'Questions refer to the following announcement.',
  scene:'airport', tint:'day',
  lines:[
   ['W','Good afternoon. This is a boarding announcement for flight KN four two nine to Osaka. We will begin boarding at gate B thirteen in about ten minutes. Passengers travelling with small children may board first.']],
  qs:[
   {q:'Where is the flight going?', answer:1,
    options:['Manila','Osaka','Taipei','Seoul'],
    note:'to Osaka。地名在廣播裡通常只說一次，要立刻抓住。'},
   {q:'Which gate will be used?', answer:2,
    options:['B thirty','B three','B thirteen','B nine'],
    note:'B thirteen。thirteen 和 thirty 是廣播題最常見的陷阱。'},
   {q:'Who may board first?', answer:0,
    options:['Passengers with small children','First class only','Members','Staff'],
    note:'Passengers travelling with small children may board first。'}]},

 {level:2, words:60, intro:'Questions refer to the following voicemail message.',
  scene:'street', tint:'dusk',
  lines:[
   ['M','Hi, this is Dan at Riverside Motors. Your car passed the inspection, but the rear tyre is worn and I would recommend replacing it before winter. That is eighteen hundred, fitted. No rush — give me a call when you have decided. We are open Saturday mornings until one.']],
  qs:[
   {q:'Why is the speaker calling?', answer:1,
    options:['The car failed the inspection','To recommend replacing a tyre','To arrange a pick-up time','To ask for payment'],
    note:'passed the inspection, but the rear tyre is worn——車子過了，只是建議換胎。A 聽反了。'},
   {q:'How much will the work cost?', answer:2,
    options:['Eight hundred','Eighty','Eighteen hundred','Eight thousand'],
    note:'eighteen hundred。-teen 的尾音又出現一次。'},
   {q:'When is the garage open at the weekend?', answer:0,
    options:['Saturday morning until one','All day Saturday','Sunday only','It is closed at weekends'],
    note:'open Saturday mornings until one。'}]},

 {level:3, words:85, intro:'Questions refer to the following announcement.',
  scene:'counter', tint:'day',
  lines:[
   ['W','Attention, please. The clinic will be closed for relocation from the fifteenth to the twenty-second of this month. During that period, urgent cases should go to the district hospital on Fuxing Road. Repeat prescriptions can still be collected from the pharmacy next door, between nine and four. Appointments already booked for those dates have been moved forward by one week, and patients should have received a text message confirming the new time.']],
  qs:[
   {q:'Why will the clinic close?', answer:3,
    options:['For staff training','Because of a public holiday','For repairs','Because it is moving'],
    note:'closed for relocation——relocation 就是搬遷。C 的 repairs 是合理但錯的猜測。'},
   {q:'Where can patients collect prescriptions?', answer:1,
    options:['At the district hospital','At the pharmacy next door','By post','At the clinic reception'],
    note:'from the pharmacy next door。急診去醫院、領藥在隔壁藥局——兩個地點要分開記。'},
   {q:'What happened to existing appointments?', answer:0,
    options:['They were moved one week earlier','They were cancelled','They were moved to the hospital','They were left unchanged'],
    note:'moved forward by one week。moved forward 是往前移，不是延後——這個片語很容易理解反。'}]},

 {level:4, words:110, intro:'Questions refer to the following talk.',
  scene:'warehouse', tint:'day',
  lines:[
   ['M','Before we go onto the floor, three things. First, high-visibility vests are required past the yellow line — no exceptions, and that includes visitors. Second, the forklift route runs along the east wall. If you hear two short horns, stop where you are and let it pass. Do not step aside, because you may step into its path. Third, the fire exit at the back has been blocked by pallets since Monday. That is being cleared this afternoon, but until then please use the side door near the office. If you are unsure about anything, ask Koh — he is the one in the orange helmet, not the yellow one.']],
  qs:[
   {q:'What should listeners do if they hear two short horns?', answer:1,
    options:['Move to one side','Stay where they are','Leave the building','Call the supervisor'],
    note:'stop where you are。而且他特別說 Do not step aside——最直覺的反應正好是錯的。'},
   {q:'Why must the side door be used?', answer:2,
    options:['The back exit is locked','The side door is nearer','The fire exit is blocked by pallets','The back of the building is closed'],
    note:'the fire exit at the back has been blocked by pallets。'},
   {q:'How can listeners identify Koh?', answer:0,
    options:['By his orange helmet','By his yellow helmet','By his high-visibility vest','He is near the side door'],
    note:'orange helmet, not the yellow one。結尾刻意放一個對比，聽到 yellow 就選會錯。'}]}
]

};

/* ── 統計 ─────────────────────────────────────────
   Part 1　8 題（含新增的機場場景）
   Part 2　16 題 · 技能標籤：
             number 4 · sound 3 · reduce 3 · correct 3 · wh 1 · statement 2
   Part 3　4 組（30 / 55 / 75 / 100 字）· 11 題 · 含一組三人對話
   Part 4　4 組（40 / 60 / 85 / 110 字）· 12 題
   合計 47 題 · 全新情境，字彙沿用前面章節
   ─────────────────────────────────────────────── */
