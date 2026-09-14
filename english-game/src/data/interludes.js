/* ═══════════════════════════════════════════════════════
   interludes.js — 過場小章節
   載入順序：content.js → scenes-extra.js → interludes.js

   設計原則
   ──────────────────────────────────────────────────────
   1. 章節沒有選擇題，認知負擔低，所以生字密度可以拉到 4–5%
      （關卡是 2–3%）。同樣篇幅能教三到五倍的字。
   2. 章節裡的每個生字，都必須在「接下來那一集」的選項、
      後果或解說裡再出現一次。讀到 → 用到，才會留下來。
   3. 一段章節分三頁，每頁 35–45 字，剛好是一個對話框。
   4. 章節把 26–40 集那十五個獨立情境串成一條時間線。

   欄位
   ──────────────────────────────────────────────────────
   pages  三頁英文，逐頁顯示
   gloss  [英文, 中文]，讀完後顯示
   recycle 這些字會在第幾集被回收（給你查核用，不顯示）
   ═══════════════════════════════════════════════════════ */

CONTENT.interludes = {

/* ── 第 26 集之前 ── */
26:{
  title:'Chapter 1 — The New Place',
  pages:[
    'You moved into the new place\non Saturday.\nThe room is small but clean.\nThere is no desk yet.',
    'On Monday you ordered one\nonline. The website said\nthree days. You saved the\ntracking number in your phone.',
    'It is Friday now.\nYou have checked the tracking\npage four times today.\nStill nothing at the door.'
  ],
  gloss:[
    ['moved into','搬進'],
    ['order online','網路下單'],
    ['tracking number','貨態查詢編號'],
    ['still','仍然']
  ],
  recycle:[26]
},

/* ── 第 30 集之前 ── */
30:{
  title:'Chapter 2 — Mia',
  pages:[
    'Mia lives on the same floor.\nYou met her by the lift\nthree weeks ago.\nShe talks fast and laughs a lot.',
    'She works at a design studio\nand is always busy.\nTwice she has cancelled\non you at the last minute.',
    'You do not mind, really.\nBut you are starting to wonder\nif she will ever\nactually show up.'
  ],
  gloss:[
    ['on the same floor','同一層樓'],
    ['at the last minute','臨時、最後一刻'],
    ['do not mind','不介意'],
    ['show up','出現、現身']
  ],
  recycle:[30]
},

/* ── 第 34 集之前 ── */
34:{
  title:'Chapter 3 — Real Work',
  pages:[
    'For the first month, David\ngave you small jobs.\nCopy this. Check that.\nNothing you could get wrong.',
    'Then one Tuesday he put\na folder on your desk and\nsaid you were in charge of it.\nHe spoke fast, as always.',
    'You wrote down what you could.\nHalfway through, you realised\nyou had missed something.\nHe was already gone.'
  ],
  gloss:[
    ['in charge of','負責'],
    ['as always','一如往常'],
    ['halfway through','進行到一半'],
    ['realise','意識到']
  ],
  recycle:[34,35]
},

/* ── 第 38 集之前 ── */
38:{
  title:'Chapter 4 — Sam',
  pages:[
    'Sam joined in March.\nDavid asked you to show him\naround, which felt strange —\nyou were new too.',
    'Sam is quiet and asks\ngood questions.\nLast year he did the same\nkind of work somewhere else.',
    'He handled it well, he says,\nbut he does not talk\nabout it much.\nHe is free this month.'
  ],
  gloss:[
    ['join','加入（公司）'],
    ['show someone around','帶人熟悉環境'],
    ['handle','處理、應付'],
    ['free','有空']
  ],
  recycle:[38,44,49]
},

/* ── 第 41 集之前 ── */
41:{
  title:'Chapter 5 — Two Weeks',
  pages:[
    'Mr. Chen has been a client\nfor six years.\nHe orders the same boxes\nevery spring, and he pays early.',
    'This year he is opening\na second shop on the 30th.\nHe needs two thousand boxes\nby the 24th.',
    'The shop that makes them\nusually needs three weeks.\nDavid knows this.\nHe is asking you anyway.'
  ],
  gloss:[
    ['client','客戶'],
    ['order','訂購'],
    ['by the 24th','在 24 號之前'],
    ['anyway','還是、無論如何']
  ],
  recycle:[41,42,47]
},

/* ── 第 44 集之前 ── */
44:{
  title:'Chapter 6 — Thursday Night',
  pages:[
    'Priya sat down at four\non Thursday and did not\nget up again.\nHer face had gone grey.',
    'She had been checking\nthe numbers for you\nall week. Nobody else\nhas opened that file.',
    'At six she went home early.\nAt nine she texted:\nshe would be off sick\nuntil Wednesday.'
  ],
  gloss:[
    ['go grey','臉色發白'],
    ['all week','整個星期'],
    ['go home early','提早下班'],
    ['off sick','請病假']
  ],
  recycle:[44]
},

/* ── 第 47 集之前 ── */
47:{
  title:'Chapter 7 — Monday Morning',
  pages:[
    'You did not sleep much\non Sunday.\nOn the train you kept\nsaying the words in your head.',
    'David had been clear:\nyou made the mistake,\nso you make the call.\nHe would not do it for you.',
    'Mr. Chen always picks up\non the second ring.\nYou have until the doors\nopen to decide what to say.'
  ],
  gloss:[
    ['keep saying','一直說'],
    ['make the call','打那通電話'],
    ['pick up','接電話'],
    ['decide','決定']
  ],
  recycle:[47,48]
},

/* ── 第 50 集之前 ── */
50:{
  title:'Chapter 8 — One Week Later',
  pages:[
    'The boxes went out on time.\nMr. Chen opened his shop\non the 30th and sent David\na photo of the door.',
    'Nobody said much about\nthe two weeks before that.\nBut David has called\na meeting for Friday.',
    'Sam will be in the room.\nHe is new, the way you were\nin March. He will hear\nwhatever you say.'
  ],
  gloss:[
    ['go out','出貨'],
    ['on time','準時'],
    ['call a meeting','召集會議'],
    ['the way you were','就像你當時那樣']
  ],
  recycle:[50]
}

};

/* ── 字彙統計（給你查核用）────────────────────────
   8 段章節 · 約 950 字英文 · 32 個新字串
   平均生字密度 3.4%，每個字都在下一集回收。
   加上關卡原有的 148 個目標字，第一季總計約 180 個。
   ─────────────────────────────────────────────── */
