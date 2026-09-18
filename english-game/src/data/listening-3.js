/* ═══════════════════════════════════════════════════════
   listening-3.js — 聽力題庫第三批：短題加量
   載入順序：… → listening.js → listening-2.js → listening-3.js

   只補 Part 1（照片）和 Part 2（應答）——最短、最適合零碎時間。
   Part 1 用了還沒出過照片題的場景：咖啡館 · 走廊 · 大廳 · 工廠
                                    · 辦公桌 · 賣場
   Part 2 補真實考試比重最高、前兩批偏少的題型：
     wh 疑問詞 · yesno 間接回答 · choice 選擇疑問
     suggest 提議請求 · tag 附加／否定問句 · statement 陳述
   ═══════════════════════════════════════════════════════ */

/* ═══ PART 1 · 再加 12 題 ═══════════════════════════════ */
CONTENT.listening.part1.push(
 {scene:'cafe', tint:'day', answer:2,
  options:[
   'A waiter is pouring coffee.',
   'All the tables are occupied.',
   'A woman is sitting near a window.',
   'A menu is being written on a board.'],
  note:'窗邊坐著一位女性。服務生、客滿、正在寫菜單——畫面裡都沒有。'},

 {scene:'cafe', tint:'warm', answer:0,
  options:[
   'Some items are displayed on shelves.',
   'Customers are standing in a line.',
   'The woman is drinking from a cup.',
   'The window has been covered.'],
  note:'右邊架上擺著東西。杯子在桌上，她並沒有拿起來喝——「東西在場」不等於「動作在發生」。'},

 {scene:'corridor', tint:'day', answer:3,
  options:[
   'A man is opening a door.',
   'People are walking down the hallway.',
   'A notice is being put up.',
   'A man is standing between two doors.'],
  note:'他站在兩扇門中間，手沒有碰門。hallway 只有一個人，不是 people。'},

 {scene:'corridor', tint:'night', answer:1,
  options:[
   'The light has been switched off.',
   'A notice has been posted on the wall.',
   'A man is sweeping the floor.',
   'Both doors are standing open.'],
  note:'牆上貼著告示，用現在完成被動描述狀態。燈是亮著的，門是關著的。'},

 {scene:'lobby', tint:'day', answer:1,
  options:[
   'Visitors are signing in at the desk.',
   'A person is behind the reception desk.',
   'A plant is being watered.',
   'The blinds have been pulled down.'],
  note:'櫃檯後面有一個人。訪客、澆花、放下百葉窗都沒有發生——窗戶是清楚的。'},

 {scene:'lobby', tint:'dusk', answer:3,
  options:[
   'A man is handing over a key.',
   'The lobby is crowded with guests.',
   'A screen is being installed.',
   'A potted plant has been placed near the desk.'],
  note:'盆栽放在櫃檯旁邊。crowded 與畫面相反；螢幕已經掛好，不是 being installed。'},

 {scene:'factory', tint:'day', answer:0,
  options:[
   'Boxes are lined up on a conveyor.',
   'A worker is lifting a box.',
   'The machines have been taken apart.',
   'Several workers are wearing gloves.'],
  note:'箱子排在輸送帶上。只有一個工人，而且兩手垂著——沒有在搬。'},

 {scene:'factory', tint:'night', answer:2,
  options:[
   'A worker is seated at the control panel.',
   'Boxes are being loaded onto a truck.',
   'Lights are hanging from the ceiling.',
   'The line has been shut down for repairs.'],
  note:'天花板吊著燈。工人站在最右邊，不是坐在控制台前。「為了維修而停機」是圖上看不出來的推測。'},

 {scene:'desk', tint:'day', answer:3,
  options:[
   'Someone is typing on a keyboard.',
   'The papers have been thrown away.',
   'A monitor is being carried.',
   'Some documents are lying on a desk.'],
  note:'桌上放著文件。畫面裡沒有人——任何需要人的動作都可以直接刪掉。'},

 {scene:'shopfloor', tint:'day', answer:1,
  options:[
   'A customer is paying at the counter.',
   'Shelves are lined with products.',
   'The clerk is stacking boxes.',
   'The ceiling lights are being replaced.'],
  note:'兩邊架上都是商品。櫃檯只有店員，沒有客人。'},

 {scene:'shopfloor', tint:'dusk', answer:0,
  options:[
   'There is a register on the counter.',
   'The store has closed for the day.',
   'Two clerks are working together.',
   'Shoppers are pushing carts.'],
  note:'櫃檯上有收銀機。只有一位店員；「已經打烊」從圖上判斷不出來。'},

 {scene:'office', tint:'day', answer:2,
  options:[
   'All the desks are occupied.',
   'A man is watering a plant.',
   'Two people are working at desks.',
   'The window is being cleaned.'],
  note:'兩個人在桌前工作。中間那張桌子沒人——All 這種全稱字在 Part 1 幾乎都錯。'}
);

/* ═══ PART 2 · 再加 30 題 ═══════════════════════════════ */
CONTENT.listening.part2.push(
 {skill:'wh', q:'Who is responsible for ordering supplies?', answer:1,
  options:['Mostly paper and ink.','Karen in the front office.','Yes, I ordered them.'],
  note:'Who 要人。答「買了什麼」的不對；Wh 問句不能用 Yes 開頭回答。'},

 {skill:'wh', q:'Where can I get my parking ticket validated?', answer:2,
  options:['About two hours.','The car park is full.','At the reception desk.'],
  note:'Where 要地點。car park 是 parking 的相關字——重複或相關字的選項要先懷疑。'},

 {skill:'wh', q:'When will the new printer arrive?', answer:0,
  options:['Sometime next Tuesday.','It prints in colour.','From a supplier in Taoyuan.'],
  note:'When 要時間。答功能、答來源的都答錯了疑問詞。'},

 {skill:'wh', q:'How did the presentation go?', answer:2,
  options:['By taxi.','At two o\'clock.','Better than I expected.'],
  note:'How did it go 問結果好不好。答 By taxi 是把 go 聽成交通方式。'},

 {skill:'wh', q:'Why was the shipment delayed?', answer:0,
  options:['There was a problem at customs.','To the main warehouse.','It weighs about a ton.'],
  note:'正解沒有用 Because 開頭——真實考試裡這很常見，不要只等 because。'},

 {skill:'wh', q:'Which hotel are you staying at?', answer:1,
  options:['For three nights.','The one near the station.','I booked it online.'],
  note:'Which 要挑一個。the one near… 是回答 Which 的標準句型。'},

 {skill:'wh', q:'What time does the bank open on Saturdays?', answer:0,
  options:['It\'s closed on weekends.','A savings account.','Near the post office.'],
  note:'正解沒報時間，而是推翻前提：週末不開。這種回答常常就是正解。'},

 {skill:'wh', q:'How often do you visit the factory?', answer:2,
  options:['Two hours by train.','It\'s quite large.','About once a month.'],
  note:'How often 問頻率。How long、How far、How big 是它的近親，聽的時候要抓第二個字。'},

 {skill:'yesno', q:'Have you finished the budget report?', answer:1,
  options:['It was a good report.','I\'m still waiting for the sales figures.','About ten thousand dollars.'],
  note:'沒說 Yes 也沒說 No，而是給原因——等於「還沒」。'},

 {skill:'yesno', q:'Is Mr. Park in the office today?', answer:1,
  options:['The office is on the tenth floor.','He\'s working from home.','Yes, it\'s a nice park.'],
  note:'Park 是人名，拿 park 當公園的是近音陷阱。'},

 {skill:'yesno', q:'Did you get the tickets for the concert?', answer:2,
  options:['It starts at eight.','I\'ve never been there.','They were sold out.'],
  note:'賣完了＝沒買到。間接回答要自己把意思補完。'},

 {skill:'yesno', q:'Are you coming to the staff dinner?', answer:0,
  options:['I haven\'t decided yet.','The dinner was delicious.','About twenty people.'],
  note:'「還沒決定」是萬用正解，幾乎可以回應任何是非題。'},

 {skill:'yesno', q:'Can I pay by credit card?', answer:1,
  options:['A new card.','Only cash, I\'m afraid.','Yes, I paid it yesterday.'],
  note:'用 Yes 開頭、又重複 pay 的過去式——開頭對了不代表內容對。'},

 {skill:'yesno', q:'Do you know who took my stapler?', answer:2,
  options:['It\'s on sale.','I took the bus.','Try asking Linda.'],
  note:'叫你去問別人＝我不知道。took 重複出現在誘答裡。'},

 {skill:'choice', q:'Would you like tea or coffee?', answer:0,
  options:['Either is fine.','Yes, please.','At the café.'],
  note:'A or B 的問題不能答 Yes。Either / Neither / Whichever 是常見正解。'},

 {skill:'choice', q:'Should we take the train or drive?', answer:2,
  options:['Yes, we should.','It was a long drive.','The train is faster at this hour.'],
  note:'正解沒有直接說 train，而是說理由——選擇題也可以間接回答。'},

 {skill:'choice', q:'Do you want the report today or tomorrow morning?', answer:0,
  options:['Tomorrow is fine.','It\'s a long report.','This morning, yes.'],
  note:'誘答把 today 和 morning 拼成 this morning——聽到熟悉的字不等於聽懂。'},

 {skill:'choice', q:'Is the meeting in Room A or Room B?', answer:1,
  options:['Yes, it\'s a big room.','It\'s been moved to the lobby.','About an hour.'],
  note:'兩個都不是——「第三個答案」在選擇疑問句裡很常是正解。'},

 {skill:'suggest', q:'Why don\'t we order lunch in today?', answer:0,
  options:['Good idea. I\'m starving.','Because it\'s raining.','I ordered it last week.'],
  note:'Why don\'t we 是提議，不是問原因——答 Because 正好踩中陷阱。'},

 {skill:'suggest', q:'Could you help me move these chairs?', answer:2,
  options:['They\'re very comfortable.','I moved last year.','Sure, where do they go?'],
  note:'請求要接答應或拒絕。moved 被拿去當「搬家」用，是字面陷阱。'},

 {skill:'suggest', q:'Would you mind closing the window?', answer:1,
  options:['It\'s a big window.','Not at all.','I\'d like one, too.'],
  note:'Would you mind…? 字面是「你介意嗎」，答應要說 Not at all——形式是否定，意思是好。'},

 {skill:'suggest', q:'Let\'s go over the contract before lunch.', answer:1,
  options:['It was signed in May.','OK, I\'ll bring a copy.','Lunch is at noon.'],
  note:'Let\'s 是提議。重複 lunch 的那個是字面陷阱。'},

 {skill:'suggest', q:'How about meeting at the station?', answer:2,
  options:['About ten minutes.','The station is quite old.','That works for me.'],
  note:'How about 是提議，不是問數量或狀況。That works for me 是很常見的同意說法。'},

 {skill:'tag', q:'You\'ve been to Tainan before, haven\'t you?', answer:0,
  options:['Just once, for work.','It\'s in the south.','Yes, I\'d like to.'],
  note:'附加問句當成一般是非題處理就好。Yes, I\'d like to 回答的是「想不想去」。'},

 {skill:'tag', q:'Isn\'t the store open until ten?', answer:1,
  options:['About ten items.','Only on Fridays.','Yes, the store sells it.'],
  note:'否定問句照事實回答。ten 在誘答裡被換成數量。'},

 {skill:'tag', q:'The seminar starts at nine, doesn\'t it?', answer:2,
  options:['It was very useful.','Room three-oh-five.','No, it\'s been pushed back to ten.'],
  note:'pushed back ＝ 延後。答「很有用」的時態不對——研討會還沒開始。'},

 {skill:'statement', q:'I left my umbrella on the train.', answer:0,
  options:['You could call the lost property office.','It\'s supposed to rain.','The next train is at six.'],
  note:'說出困擾，要接解決辦法。rain 和 train 在誘答裡都被拿來混淆。'},

 {skill:'statement', q:'The copier is jammed again.', answer:2,
  options:['Twenty copies, please.','Yes, it\'s jam.','I\'ll call the technician.'],
  note:'jammed ＝ 卡紙。jam 果醬是近音陷阱，copies 是相關字陷阱。'},

 {skill:'statement', q:'We\'re running low on printer paper.', answer:0,
  options:['I\'ll order some this afternoon.','The printer is upstairs.','It\'s a long run.'],
  note:'running low ＝ 快用完。run 被拿去做字面陷阱。'},

 {skill:'statement', q:'This soup is cold.', answer:1,
  options:['I prefer tea.','Let me heat it up for you.','It\'s from the kitchen.'],
  note:'抱怨要接處理動作。另外兩個都只是跟食物有關的閒話。'}
);
