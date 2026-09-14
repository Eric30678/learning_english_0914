/* ═══════════════════════════════════════════════════════
   listening-2.js — 聽力題庫第二批
   載入順序：content.js → scenes-extra.js → listening.js → listening-2.js

   補到真實考試的量（Part 1–4 共 100 題）
   ──────────────────────────────────────────────────────
   第一批 47 題 ＋ 本批 71 題 ＝ 118 題

   場景再換一批：藥局 · 銀行 · 搬家公司 · 火車站
                 IT 客服 · 圖書館 · 博物館 · 碼頭
   新角色：Ms. Alvarez（銀行）· Ray（搬家）· Tanaka（碼頭）

   跟第一批完全不重疊的句子與情節。字彙照舊沿用前面章節。
   ═══════════════════════════════════════════════════════ */

/* ── 新增場景：碼頭 ── */
Object.assign(CONTENT.scenes, {
port: `<svg viewBox="0 0 360 130" shape-rendering="crispEdges" xmlns="http://www.w3.org/2000/svg">
<rect x="0" y="0" width="360" height="44" fill="#9dc4de"/><rect x="0" y="0" width="360" height="16" fill="#b7d8ee"/>
<rect x="0" y="28" width="360" height="6" fill="#8ab6d4"/>
<rect x="0" y="44" width="360" height="34" fill="#3f6b86"/><rect x="0" y="44" width="360" height="3" fill="#527f9a"/>
<rect x="0" y="56" width="360" height="2" fill="#35607a" fill-opacity=".6"/>
<rect x="0" y="66" width="360" height="2" fill="#35607a" fill-opacity=".6"/>
<rect x="196" y="20" width="140" height="26" fill="#7a2f2a"/><rect x="196" y="20" width="140" height="4" fill="#98413a"/>
<rect x="206" y="8" width="26" height="12" fill="#d9d2c4"/><rect x="212" y="2" width="6" height="6" fill="#d9d2c4"/>
<rect x="240" y="12" width="30" height="8" fill="#c2955c"/><rect x="274" y="12" width="30" height="8" fill="#4f8a5e"/>
<rect x="240" y="4" width="30" height="8" fill="#4a6fb0"/>
<rect x="196" y="46" width="140" height="6" fill="#5c2320"/>
<rect x="58" y="4" width="6" height="60" fill="#d9b44a"/><rect x="58" y="4" width="80" height="6" fill="#d9b44a"/>
<rect x="132" y="10" width="4" height="22" fill="#d9b44a"/><rect x="124" y="32" width="20" height="14" fill="#3f4a5c"/>
<rect x="40" y="58" width="42" height="10" fill="#2f3a4a"/>
<rect x="0" y="78" width="360" height="52" fill="#7d8390"/><rect x="0" y="78" width="360" height="3" fill="#8f95a2"/>
<rect x="0" y="96" width="360" height="2" fill="#6b7280"/><rect x="0" y="118" width="360" height="2" fill="#6b7280"/>
<rect x="0" y="84" width="360" height="3" fill="#d9b44a" fill-opacity=".45"/>
<rect x="18" y="88" width="44" height="26" fill="#c2955c"/><rect x="18" y="88" width="44" height="5" fill="#d4a86e"/>
<rect x="30" y="96" width="20" height="4" fill="#8a6133"/><rect x="14" y="114" width="52" height="4" fill="#000" fill-opacity=".22"/>
<rect x="70" y="94" width="38" height="20" fill="#4f8a5e"/><rect x="70" y="94" width="38" height="4" fill="#66a878"/>
<rect x="66" y="114" width="46" height="4" fill="#000" fill-opacity=".2"/>
<rect x="296" y="90" width="46" height="24" fill="#4a6fb0"/><rect x="296" y="90" width="46" height="5" fill="#5d82c4"/>
<rect x="310" y="99" width="20" height="4" fill="#38548a"/><rect x="292" y="114" width="54" height="4" fill="#000" fill-opacity=".2"/>
<g transform="translate(160,66)">
<rect x="6" y="0" width="16" height="6" fill="#d9821f"/><rect x="7" y="2" width="14" height="12" fill="#eec08f"/>
<rect x="7" y="2" width="4" height="12" fill="#d19a6b"/><rect x="6" y="0" width="16" height="5" fill="#f0942e"/>
<rect x="12" y="7" width="2" height="2" fill="#2a1c14"/><rect x="17" y="7" width="2" height="2" fill="#2a1c14"/>
<rect x="4" y="16" width="20" height="22" fill="#4f6f9c"/><rect x="4" y="16" width="6" height="22" fill="#3d5a82"/>
<rect x="4" y="16" width="20" height="4" fill="#e8c84a"/>
<rect x="0" y="18" width="4" height="16" fill="#3d5a82"/><rect x="24" y="18" width="4" height="16" fill="#4f6f9c"/>
<rect x="0" y="34" width="4" height="4" fill="#d19a6b"/><rect x="24" y="34" width="4" height="4" fill="#eec08f"/>
<rect x="6" y="38" width="7" height="14" fill="#2a3140"/><rect x="15" y="38" width="7" height="14" fill="#232936"/></g>
<rect x="152" y="116" width="44" height="4" fill="#000" fill-opacity=".22"/>
</svg>`
});

/* ═══ PART 1 · 再加 10 題 ═══════════════════════════════ */
CONTENT.listening.part1.push(
 {scene:'port', tint:'day', answer:1,
  options:[
   'A ship is leaving the harbour.',
   'Containers have been left on the quay.',
   'The crane is lifting a container.',
   'Workers are painting the hull.'],
  note:'貨櫃放在碼頭上。C 的吊車在畫面裡沒有在作業，A、D 的動作都沒發生。'},

 {scene:'port', tint:'dusk', answer:3,
  options:[
   'The vessel has departed.',
   'Cargo is being weighed.',
   'Two men are talking by the water.',
   'A person is wearing a safety helmet.'],
  note:'只有一個人，而且戴著安全帽。C 說兩個人——人數在 Part 1 是高頻陷阱。'},

 {scene:'counter', tint:'warm', answer:0,
  options:[
   'A member of staff is at the counter.',
   'Shelves are being restocked.',
   'A customer is paying by card.',
   'The door has been propped open.'],
  note:'a member of staff 是刻意的籠統說法。Part 1 的正解常常不指定身分。'},

 {scene:'street', tint:'night', answer:2,
  options:[
   'Traffic is heavy in both directions.',
   'The pavement is being repaired.',
   'A building is lit from inside.',
   'Pedestrians are waiting to cross.'],
  note:'窗戶亮著。A、D 都是夜間街景的合理想像，但畫面上沒有車也沒有行人在等。'},

 {scene:'airport', tint:'day', answer:1,
  options:[
   'Bags are moving along a belt.',
   'Information is displayed on a screen.',
   'A queue has formed at the desk.',
   'The gate has been closed.'],
  note:'看板上有資訊。注意 B 用 is displayed 被動——狀態描述比動作描述更常是正解。'},

 {scene:'warehouse', tint:'night', answer:3,
  options:[
   'The lights are on throughout the building.',
   'Someone is operating a machine.',
   'The shutters have been raised.',
   'The area is poorly lit.'],
  note:'夜間場景，光線很暗。A 與畫面相反，B、C 的動作沒發生。'},

 {scene:'room', tint:'day', answer:0,
  options:[
   'A chair has been pushed under the desk.',
   'Papers are scattered on the floor.',
   'A window is being opened.',
   'The room is being cleaned.'],
  note:'B、C、D 都是房間場景的常見誘答，但都沒有發生。'},

 {scene:'meeting', tint:'dusk', answer:2,
  options:[
   'The blinds have been lowered.',
   'Someone is erasing the board.',
   'Chairs are placed around a table.',
   'A presentation is in progress.'],
  note:'椅子繞著桌子。D 的 in progress 需要有人在講、有畫面在放，圖上都沒有。'},

 {scene:'office', tint:'dawn', answer:1,
  options:[
   'Staff are arriving for work.',
   'Monitors have been left on.',
   'The floor is being mopped.',
   'Someone is answering the phone.'],
  note:'螢幕亮著。清晨的辦公室沒有人——A、C、D 都需要人。'},

 {scene:'counter', tint:'dusk', answer:3,
  options:[
   'The till is being emptied.',
   'A sign has been taken down.',
   'Goods are being delivered.',
   'Items are arranged on shelves.'],
  note:'貨架上排著商品。前三個都是打烊或收貨的動作，畫面裡都沒有。'}
);

/* ═══ PART 2 · 再加 28 題 ═══════════════════════════════ */
CONTENT.listening.part2.push(
 /* ── number ×8 ── */
 {skill:'number', q:'How many people are coming to the seminar?', answer:1,
  options:['At half past five.','Fifty-two, at the last count.','For two days.'],
  note:'How many 要人數。at the last count 是「目前統計到」的自然說法。'},

 {skill:'number', q:'When does the lease expire?', answer:2,
  options:['Thirteen months ago.','About three thousand.','On the thirtieth.'],
  note:'thirteen / thirty 又出現了，而且 A 還把時間講成過去式——租約到期是未來的事。'},

 {skill:'number', q:'What is the room number?', answer:0,
  options:['Nine eighteen.','Nine people.','Eighteen euros.'],
  note:'房號英文習慣兩位兩位唸（nine eighteen ＝ 918），不是 nine hundred eighteen。'},

 {skill:'number', q:'How long is the flight?', answer:2,
  options:['Three times a week.','Terminal three.','Just under three hours.'],
  note:'How long 要時間長度。三個選項都有 three，只有一個是長度。'},

 {skill:'number', q:'What is the extension for accounts?', answer:1,
  options:['At four o\'clock.','Four four two.','Two accounts, I think.'],
  note:'分機號碼逐字唸。注意 double four 也是常見的唸法（four four ＝ double four）。'},

 {skill:'number', q:'How much did the repair come to?', answer:0,
  options:['Six thousand, including parts.','About six days.','At six, I think.'],
  note:'come to 在這裡是「總共多少」。including parts 是報價的常見補充。'},

 {skill:'number', q:'Which platform does the train leave from?', answer:2,
  options:['In forty minutes.','At four fifteen.','Platform fourteen.'],
  note:'forty / fourteen / four fifteen 三個一起放。只有一個回答了月台。'},

 {skill:'number', q:'By what percentage did costs rise?', answer:1,
  options:['Eighty people attended.','Around eight.','Back in August.'],
  note:'eight / eighty / August 開頭都很像。要抓的是百分比。'},

 /* ── sound ×6 ── */
 {skill:'sound', q:'Did you send the form to the whole team?', answer:2,
  options:['There is a hole in the box.','I filled it in yesterday.','Only to the managers.'],
  note:'whole / hole 同音。A 抓了音、B 抓了 form，只有 C 回答了範圍。'},

 {skill:'sound', q:'Is the site accessible by road?', answer:0,
  options:['Yes, but the last part is gravel.','He rode there this morning.','It is quite a wide load.'],
  note:'road / rode 同音，load 只差一個子音。三個都在音上打轉，只有 A 回答了問題。'},

 {skill:'sound', q:'Can you hear the announcement from there?', answer:1,
  options:['It is over here somewhere.','Not very clearly, no.','I have not heard from her.'],
  note:'hear / here 同音。C 的 heard from her 又疊了一層——Part 2 很愛連放三個近音。'},

 {skill:'sound', q:'Who is going to lead the session?', answer:2,
  options:['I will read it on the train.','About lead times, yes.','Priya, as far as I know.'],
  note:'lead（帶領，liːd）、read（讀，riːd）、lead time（前置期，led）三個都放進來了。'},

 {skill:'sound', q:'Did they accept our offer?', answer:0,
  options:['With one small change.','Everything except the last item.','They are expecting it.'],
  note:'accept / except / expect 是多益最經典的三胞胎，聽力和 Part 5 都會考。'},

 {skill:'sound', q:'Did the weather affect the delivery?', answer:1,
  options:['The effect was quite small.','It arrived a day late.','We will have to effect a change.'],
  note:'affect 是動詞、effect 是名詞。A 用了名詞但沒回答問題，C 的 effect a change 是罕用的動詞用法，刻意混淆。'},

 /* ── reduce ×5 ── */
 {skill:'reduce', q:'Gonna need a hand with those boxes?', answer:0,
  options:['If you have got a minute, yes.','They weigh about ten kilos.','In the storage room.'],
  note:'Gonna ＝ going to，而且句首的 Are you 被整個吞掉了。口語很常這樣。'},

 {skill:'reduce', q:'Lemme know when the file is ready.', answer:1,
  options:['It is nearly full.','Will do.','On the shared drive.'],
  note:'Lemme ＝ Let me。Will do 是英語裡回應請求最短的說法。'},

 {skill:'reduce', q:'Didja get my email about Friday?', answer:2,
  options:['I will send it again.','Friday is fine.','The one with the schedule? Yes.'],
  note:'Didja ＝ Did you。B 聽起來合理，但他問的是「收到了沒」。'},

 {skill:'reduce', q:'Shoulda told you sooner, sorry.', answer:0,
  options:['It is fine, we can still fix it.','You told me on Monday.','I will tell him myself.'],
  note:'Shoulda ＝ should have。這是道歉的口語說法，要回應「沒關係」。'},

 {skill:'reduce', q:'Whaddaya think of the new layout?', answer:1,
  options:['Some time last quarter.','Better than the old one.','On the second floor.'],
  note:'Whaddaya ＝ What do you。四個音節壓成兩個，第一次聽幾乎抓不到。'},

 /* ── correct ×4 ── */
 {skill:'correct', q:'Send it to Dan — no, to Koh.', answer:2,
  options:['Dan is on leave this week.','I will copy them both in.','Koh in the warehouse?'],
  note:'改口之後才是指令。B 聽起來貼心，但他明確說了不要寄給 Dan。'},

 {skill:'correct', q:'It is on the third floor. Sorry, second.', answer:0,
  options:['Second, got it.','Third floor, thanks.','There are three floors.'],
  note:'B 抓了被更正掉的樓層。這種題只要記住「後面那個才算」。'},

 {skill:'correct', q:'We need it by Friday. Actually Thursday, if possible.', answer:1,
  options:['Friday should be fine.','Thursday will be tight, but I will try.','It takes two days.'],
  note:'Actually 之後是真正的期限。A 是最容易選錯的那一個。'},

 {skill:'correct', q:'The total is six hundred — sorry, six thousand.', answer:2,
  options:['Six hundred sounds right.','I will pay it today.','That is quite a difference.'],
  note:'數字改口是最容易漏的一種。A 抓錯數字，B 沒有察覺到差異。'},

 /* ── wh ×3 ── */
 {skill:'wh', q:'Where should I put the samples?', answer:1,
  options:['About twenty of them.','On the shelf by the door.','Yes, they arrived today.'],
  note:'Where 要位置。C 用 Yes 回答疑問詞問句——永遠是錯的。'},

 {skill:'wh', q:'When was the last inspection?', answer:0,
  options:['Back in April, I believe.','By the safety officer.','Every six months.'],
  note:'When 要時間點。B 答了誰做的、C 答了頻率——都很接近但不是答案。'},

 {skill:'wh', q:'Whose signature do we need on this?', answer:2,
  options:['On the last page.','Three copies, please.','The site manager\'s.'],
  note:'Whose 要「誰的」。A 答位置——注意 Whose 和 Where 的開頭音很接近。'},

 /* ── statement ×2 ── */
 {skill:'statement', q:'I think we have been overcharged.', answer:1,
  options:['It was charged last week.','Send me the invoice and I will check.','The charger is in the drawer.'],
  note:'A 和 C 都只抓了 charge 這個字的音。適當回應是提出下一步。'},

 {skill:'statement', q:'The printer is out of paper again.', answer:0,
  options:['There is more in the cupboard.','It prints double-sided.','I ordered it on Tuesday.'],
  note:'陳述問題要接解法。B、C 都答了沒被問的事。'}
);

/* ═══ PART 3 · 再加 6 組（18 題）═════════════════════════ */
CONTENT.listening.part3.push(
 /* ── L1 · 24 字 · 藥局 ── */
 {level:1, words:24, intro:'Questions refer to the following conversation.',
  scene:'counter', tint:'day',
  lines:[
   ['M','I have a prescription to collect. The name is Tanaka.'],
   ['W','It is not ready yet, I am afraid. Give us twenty minutes.'],
   ['M','I will wait, then.']],
  qs:[
   {q:'Where are the speakers?', answer:1,
    options:['At a clinic','At a pharmacy','At a post office','At a bank'],
    note:'prescription to collect ＝ 領處方藥。地點要靠關鍵名詞推出來，不會有人直接說 pharmacy。'},
   {q:'What will the man do next?', answer:0,
    options:['Wait at the shop','Come back tomorrow','Call the doctor','Go to another branch'],
    note:'I will wait, then。「下一步」的答案幾乎都在最後一句。'},
   {q:'How long is the wait?', answer:2,
    options:['Two minutes','Twelve minutes','Twenty minutes','An hour'],
    note:'twenty minutes。twelve / twenty 是另一組要分辨的數字。'}]},

 /* ── L2 · 50 字 · 銀行 ── */
 {level:2, words:50, intro:'Questions refer to the following conversation.',
  scene:'counter', tint:'day',
  lines:[
   ['W','I would like to open an account, but I have only brought my passport.'],
   ['M','We also need proof of address — a utility bill or a tenancy agreement.'],
   ['W','My name is not on the bills. The flat is rented in my colleague\'s name.'],
   ['M','Then bring the tenancy agreement with both names on it.'],
   ['W','It only has his. I will ask the landlord for a letter.']],
  qs:[
   {q:'What does the woman want to do?', answer:0,
    options:['Open a bank account','Change her address','Pay a bill','Rent a flat'],
    note:'第一句就講了。主旨題的答案通常在開頭。'},
   {q:'What is the problem?', answer:2,
    options:['Her passport has expired','The bank is closing','She cannot prove where she lives','She has no money to deposit'],
    note:'她只有護照，缺的是 proof of address。'},
   {q:'What will she do next?', answer:1,
    options:['Bring a utility bill','Ask the landlord for a letter','Use her colleague\'s account','Come back with her passport'],
    note:'I will ask the landlord for a letter。前面兩個方案都被她自己排除了。'}]},

 /* ── L2 · 52 字 · 搬家公司 ── */
 {level:2, words:52, intro:'Questions refer to the following conversation.',
  scene:'room', tint:'day',
  lines:[
   ['M','This is Ray from Hoshi Removals. I am calling about your quote.'],
   ['W','Yes — three rooms, ground floor, moving on the eighth.'],
   ['M','The eighth is a public holiday. There is a surcharge of thirty per cent.'],
   ['W','I did not realise. Could we do the ninth instead?'],
   ['M','The ninth is clear. Same price as the original quote.']],
  qs:[
   {q:'Why is the man calling?', answer:1,
    options:['To cancel a booking','To discuss a quote','To ask for payment','To confirm an address'],
    note:'I am calling about your quote。'},
   {q:'What is the problem with the eighth?', answer:3,
    options:['No vans are available','The woman is away','The building is closed','It is a public holiday and costs more'],
    note:'a public holiday，而且有 30% 附加費。兩個資訊要一起記。'},
   {q:'What do they agree on?', answer:2,
    options:['Paying the surcharge','Moving two rooms only','Changing the date to the ninth','Getting a new quote'],
    note:'The ninth is clear. Same price as the original quote。'}]},

 /* ── L3 · 76 字 · 火車站 ── */
 {level:3, words:76, intro:'Questions refer to the following conversation.',
  scene:'street', tint:'dusk',
  lines:[
   ['W','Excuse me, the board says the six forty is delayed. Do you know how long?'],
   ['M','About thirty-five minutes. There is engineering work outside the station.'],
   ['W','I have a connection at eight. Will I still make it?'],
   ['M','You should, but it will be close. If you miss it, the next one is at nine ten.'],
   ['W','Is the later one direct?'],
   ['M','No, you would change once. It adds about forty minutes.']],
  qs:[
   {q:'Why is the train delayed?', answer:2,
    options:['Bad weather','A signal failure','Engineering work','A staff shortage'],
    note:'engineering work outside the station。'},
   {q:'What is the woman worried about?', answer:0,
    options:['Missing her connection','Losing her ticket','Finding a seat','Paying extra'],
    note:'I have a connection at eight. Will I still make it?'},
   {q:'What is true about the nine ten train?', answer:1,
    options:['It is faster','It requires a change','It is cancelled','It goes from another station'],
    note:'you would change once，而且多花四十分鐘。direct 的反面就是要轉車。'}]},

 /* ── L3 · 80 字 · IT 客服 ── */
 {level:3, words:80, intro:'Questions refer to the following conversation.',
  scene:'room', tint:'night',
  lines:[
   ['M','Helpdesk, this is Ito speaking.'],
   ['W','Hi, I cannot log in. It says my password has expired.'],
   ['M','That happens every ninety days. Can you see a reset link on the screen?'],
   ['W','I clicked it twice. Nothing arrives in my inbox.'],
   ['M','Check the junk folder. If it is not there, the address on file may be the old one.'],
   ['W','It might be. I changed my surname in March.'],
   ['M','That would explain it. I will update it and send a new link.']],
  qs:[
   {q:'What is the woman\'s problem?', answer:1,
    options:['Her computer will not start','She cannot log in','She lost a file','Her screen is broken'],
    note:'I cannot log in. It says my password has expired。'},
   {q:'Why might the reset link not arrive?', answer:3,
    options:['The system is down','She typed it wrongly','Her inbox is full','Her email address on file is out of date'],
    note:'the address on file may be the old one，而她三月改了姓。兩句要串起來。'},
   {q:'What will the man do?', answer:0,
    options:['Update her details and resend the link','Reset the whole system','Transfer her to another team','Visit her desk'],
    note:'I will update it and send a new link。'}]},

 /* ── L4 · 106 字 · 三人 · 碼頭 ── */
 {level:4, words:106, intro:'Questions refer to the following conversation among three speakers.',
  scene:'port', tint:'dawn',
  lines:[
   ['W','The vessel berths at five, but we are one driver short for the morning shift.'],
   ['M','Can Tanaka cover it? He finished at ten last night.'],
   ['W','He would be under the eleven-hour rest rule. We cannot put him back on at five.'],
   ['M2','I can come in early, but I am on the afternoon list as well.'],
   ['W','Then we would be short at two instead. That is worse — the second vessel arrives then.'],
   ['M','What about agency cover? They need four hours\' notice.'],
   ['W','It is half past twelve now. Call them before one and we are covered.'],
   ['M2','I will call. Better than moving people around all day.']],
  qs:[
   {q:'What is the main problem?', answer:0,
    options:['They are short of a driver for the morning','A vessel has been delayed','Tanaka has resigned','The agency is closed'],
    note:'one driver short for the morning shift。B、C 都沒有依據。'},
   {q:'Why can Tanaka not work at five?', answer:2,
    options:['He is on holiday','He is on the afternoon list','A rest period rule applies','He has no licence'],
    note:'under the eleven-hour rest rule。他十點才下班，五點上工不合規定。'},
   {q:'What do they decide to do?', answer:1,
    options:['Move the afternoon shift','Call the agency before one o\'clock','Ask Tanaka anyway','Delay the second vessel'],
    note:'They need four hours\' notice，現在十二點半，所以要在一點前打。時間計算是這題的關鍵。'}]}
);

/* ═══ PART 4 · 再加 5 組（15 題）═════════════════════════ */
CONTENT.listening.part4.push(
 /* ── L1 · 40 字 · 車站廣播 ── */
 {level:1, words:40, intro:'Questions refer to the following announcement.',
  scene:'street', tint:'day',
  lines:[
   ['M','Attention, please. The nine twenty service to Hualien will depart from platform four today, not platform two. Passengers already waiting on platform two should cross using the lift at the north end.']],
  qs:[
   {q:'What has changed?', answer:1,
    options:['The departure time','The platform','The destination','The ticket price'],
    note:'platform four today, not platform two。'},
   {q:'Which platform should passengers use?', answer:2,
    options:['Platform two','Platform nine','Platform four','Platform twenty'],
    note:'四個選項全部是廣播裡出現過的數字——這是廣播題最常見的設計。'},
   {q:'How should passengers cross?', answer:0,
    options:['By using the lift at the north end','By the footbridge','Across the track','Through the main hall'],
    note:'using the lift at the north end。'}]},

 /* ── L2 · 58 字 · 博物館導覽 ── */
 {level:2, words:58, intro:'Questions refer to the following talk.',
  scene:'meeting', tint:'day',
  lines:[
   ['W','Welcome, everyone. The tour lasts about an hour and finishes in the gift shop. Photography is allowed except in the second gallery, where the loan items are displayed. Please keep bags in front of you in the narrow corridors. If you need to leave early, the side exit is beside the lift.']],
  qs:[
   {q:'How long does the tour last?', answer:1,
    options:['Half an hour','About an hour','Two hours','It is not stated'],
    note:'lasts about an hour。'},
   {q:'Where is photography not allowed?', answer:2,
    options:['In the gift shop','In the corridors','In the second gallery','Near the lift'],
    note:'allowed except in the second gallery。except 這個字沒聽到就會答反。'},
   {q:'Why are the loan items mentioned?', answer:0,
    options:['To explain the photography rule','To recommend a highlight','To warn about crowds','To announce a closure'],
    note:'where the loan items are displayed——那是不能拍照的原因。這是推論題。'}]},

 /* ── L3 · 78 字 · 電話語音選單 ── */
 {level:3, words:78, intro:'Questions refer to the following recorded message.',
  scene:'room', tint:'night',
  lines:[
   ['W','Thank you for calling Riverside Services. Our office hours are eight thirty to five, Monday to Friday. For deliveries and tracking, press one. For accounts and invoices, press two. To speak to a technician, press three — please note that technical support closes at four. If you are calling about a fault reported in the last twenty-four hours, do not press anything. Stay on the line and you will be connected first.']],
  qs:[
   {q:'What should a caller do to reach accounts?', answer:1,
    options:['Press one','Press two','Press three','Stay on the line'],
    note:'For accounts and invoices, press two。四個選項都在錄音裡，要抓對配對。'},
   {q:'When does technical support close?', answer:2,
    options:['At eight thirty','At five','At four','At midnight'],
    note:'technical support closes at four——比辦公時間早一小時，這是刻意設計的細節題。'},
   {q:'What should callers with a recent fault do?', answer:3,
    options:['Press three','Call back tomorrow','Press one','Wait without pressing anything'],
    note:'do not press anything. Stay on the line——指令是反直覺的，所以常被答錯。'}]},

 /* ── L3 · 82 字 · 健身房公告 ── */
 {level:3, words:82, intro:'Questions refer to the following announcement.',
  scene:'counter', tint:'day',
  lines:[
   ['M','A quick notice for members. The pool will be closed for cleaning on Tuesday and Wednesday next week. The gym floor stays open as usual. Members who booked classes on those two days have been moved to the same class on Thursday, and we have emailed everyone affected. If Thursday does not suit you, speak to reception and we will add a credit to your account instead of a refund.']],
  qs:[
   {q:'What will be closed?', answer:0,
    options:['The pool','The gym floor','Reception','The whole building'],
    note:'The pool will be closed。而且特別說健身區照常——A 和 B 是對照設計。'},
   {q:'What happened to bookings on those days?', answer:2,
    options:['They were cancelled','They were refunded','They were moved to Thursday','They were doubled'],
    note:'have been moved to the same class on Thursday。'},
   {q:'What is offered to members who cannot attend?', answer:1,
    options:['A full refund','A credit on their account','A free personal session','A guest pass'],
    note:'a credit to your account instead of a refund——instead of 之後才是實際做法。'}]},

 /* ── L4 · 118 字 · 渡輪安全廣播 ── */
 {level:4, words:118, intro:'Questions refer to the following announcement.',
  scene:'port', tint:'day',
  lines:[
   ['W','Good morning and welcome aboard. Before we leave the berth, please listen carefully. Life jackets are stored under every bench on the passenger deck, not in the overhead racks. If you hear seven short blasts followed by one long blast, go to the muster station on deck three, using the stairs and not the lift. Vehicle decks are closed once we are under way, so please take anything you need with you now. The crossing takes about ninety minutes, though in strong winds it can be closer to two hours. Refreshments are served from the counter at the rear, and the observation deck at the front stays open throughout.']],
  qs:[
   {q:'Where are the life jackets kept?', answer:1,
    options:['In the overhead racks','Under the benches','At the muster station','On the vehicle deck'],
    note:'under every bench, not in the overhead racks——刻意用 not 排除了最直覺的答案。'},
   {q:'What should passengers do if they hear the alarm signal?', answer:3,
    options:['Return to their vehicles','Take the lift to deck three','Stay seated','Use the stairs to the muster station'],
    note:'using the stairs and not the lift。B 剛好是被否定掉的那個選項。'},
   {q:'How long might the crossing take in strong winds?', answer:2,
    options:['Ninety minutes','Seven minutes','About two hours','Three hours'],
    note:'in strong winds it can be closer to two hours。90 分鐘是正常狀況，不是答案。'}]}
);

/* ── 統計 ─────────────────────────────────────────
   本批新增
     Part 1　10 題（含新增的碼頭場景）
     Part 2　28 題　number 8 · sound 6 · reduce 5 · correct 4 · wh 3 · statement 2
     Part 3　6 組（24 / 50 / 52 / 76 / 80 / 106 字）· 18 題 · 含一組三人對話
     Part 4　5 組（40 / 58 / 78 / 82 / 118 字）· 15 題
     小計 71 題

   兩批合計 118 題
     Part 1　18 · Part 2　44 · Part 3　29 · Part 4　27
   真實多益：Part 1 六題、Part 2 二十五題、Part 3 三十九題、Part 4 三十題
   ─────────────────────────────────────────────── */
