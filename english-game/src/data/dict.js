/* ═══════════════════════════════════════════════════════
   dict.js — 共用字典
   載入順序：… chapters-*.js → listening-*.js → dict.js（最後）

   解決什麼問題
   ──────────────────────────────────────────────────────
   聽力文字稿裡有 477 個字是閱讀章節沒教過的。
   把聽力改成閱讀會毀掉聽力練習，所以改成「加一層」：
   答完題目之後顯示的文字稿，字也可以點。

   字典有兩個來源
   ──────────────────────────────────────────────────────
   1. 自動收割：把 CONTENT.chapters 裡所有 [字|中文] 標記
      掃進字典，共約 1,160 筆，不用重打一次
   2. 手動補充：下面 LISTENING_WORDS 是聽力獨有的字，
      依出現頻率挑選，優先收 TOEIC 常見的
   ═══════════════════════════════════════════════════════ */

CONTENT.dict = {};

/* ── 1. 從閱讀章節自動收割 ── */
(function harvest(){
  if(!CONTENT.chapters) return;
  const re = /[*~]?\[([^\]|]+)\|([^\]]+)\]/g;
  let n = 0;
  CONTENT.chapters.forEach(c => c.pages.forEach(p => {
    let m;
    while((m = re.exec(p.t)) !== null){
      const k = m[1].toLowerCase().trim();
      if(k && !CONTENT.dict[k]){ CONTENT.dict[k] = m[2]; n++; }
    }
  }));
  CONTENT.dictHarvested = n;
})();

/* ── 2. 聽力獨有的字（依出現頻率排序挑選）── */
const LISTENING_WORDS = {
/* 交通與場站 */
'platform':'月台','station':'車站','passengers':'乘客','passenger':'乘客',
'aircraft':'飛機','boarding':'登機','board':'看板／登機','gate':'登機門',
'departed':'已離開','departure':'出發','connection':'轉乘班次','ticket':'車票',
'delayed':'延誤的','cancelled':'取消的','vehicle':'車輛','bus':'公車',
'suitcase':'行李箱','luggage':'行李','belt':'輸送帶','terminal':'航廈',

/* 海事 */
'vessel':'船舶','deck':'甲板','harbour':'港口','quay':'碼頭岸邊',
'hull':'船殼','cargo':'貨物','containers':'貨櫃','container':'貨櫃',
'berths':'靠泊','berth':'泊位','crossing':'航程','muster':'集合',
'jackets':'救生衣','overhead':'頭頂上的','racks':'置物架','winds':'強風',
'crane':'起重機','lifting':'吊起','unloaded':'已卸貨','pallets':'棧板','pallet':'棧板',

/* 醫療 */
'clinic':'診所','pharmacy':'藥局','hospital':'醫院','patients':'病人','patient':'病人',
'prescriptions':'處方藥','prescription':'處方','appointments':'預約','district':'區域',
'relocation':'搬遷',

/* 住宿與服務 */
'reception':'接待櫃檯','booking':'預訂','holiday':'假日','members':'會員',
'twin':'兩張單人床的房型','surcharge':'附加費','tenancy':'租賃','utility':'水電等公用事業',
'flat':'公寓','landlord':'房東','pool':'游泳池','gym':'健身房','credit':'帳戶抵用額',

/* 車輛與維修 */
'garage':'修車廠','tyre':'輪胎','replace':'更換','replacing':'更換',
'inspection':'檢查','battery':'電池','rear':'後面的','fitted':'含安裝',

/* 辦公與行政 */
'press':'按','screen':'螢幕','link':'連結','reset':'重設','update':'更新',
'documents':'文件','folder':'資料夾','junk':'垃圾（郵件）','surname':'姓',
'extension':'分機','signature':'簽名','samples':'樣品','printer':'印表機',
'cupboard':'櫃子','overcharged':'超收','agency':'人力仲介','shift':'班次',
'cover':'代班','licence':'執照','percentage':'百分比','monitors':'螢幕',
'presentation':'簡報','projector':'投影機','whiteboard':'白板','till':'收銀機',

/* 安全與工地 */
'helmet':'安全帽','helmets':'安全帽','safety':'安全','high-visibility':'高可視度的',
'horns':'喇叭聲','blocked':'被阻擋的','exit':'出口','workers':'工人',
'shutters':'捲門','engineering':'工程','signal':'訊號','fault':'故障',

/* 場館與活動 */
'gallery':'展廳','loan':'借展','corridors':'走廊','gift':'禮品',
'session':'場次','announcement':'廣播／公告','attention':'注意',
'welcome':'歡迎','photography':'攝影','blinds':'百葉窗',

/* 動作與狀態 */
'occupied':'被占用的','seated':'就座的','placed':'放置','arranged':'排列',
'displayed':'顯示','swept':'清掃過','mopped':'拖過地','erasing':'擦掉',
'scattered':'散落的','propped':'撐開','restocked':'已補貨','emptied':'清空',
'weighed':'秤過重','cleared':'清空','lit':'照亮的','poorly':'不良地',
'pushed':'推','lowered':'降下','raised':'升起','turning':'轉彎',
'carrying':'攜帶','filling':'填寫','checking':'查看','operating':'操作',
'collect':'領取','bring':'帶來','forgot':'忘記','recommend':'建議',
'stays':'保持','applies':'適用','improved':'改善',

/* 常用形容詞與副詞 */
'blank':'空白的','heavy':'繁忙的／重的','wide':'寬的','technical':'技術的',
'public':'公共的','urgent':'緊急的','worn':'磨損的','clear':'沒問題的',
'actually':'其實','quite':'相當','poorly':'不良地','directly':'直接地',

/* 數字與量 */
'hundred':'百','thirty':'三十','thirteen':'十三','ninety':'九十','nineteen':'十九',
'fifty':'五十','fifteen':'十五','forty':'四十','fourteen':'十四','eighty':'八十',
'euros':'歐元','deposit':'訂金','total':'總計',

/* 其他名詞 */
'goods':'商品','bill':'帳單','passport':'護照','pedestrians':'行人',
'pavement':'人行道','device':'裝置','curtains':'窗簾','umbrella':'傘',
'lamp':'檯燈','shelves':'架子','chairs':'椅子','desks':'辦公桌',
'children':'兒童','class':'課程','rest':'休息','area':'區域',
'north':'北邊','front':'前方','support':'支援','information':'資訊',
'queue':'排隊的人','customer':'顧客','card':'卡片','machine':'機器',
'form':'表單','managers':'主管','colleague':'同事','driver':'司機',

/* 近音組（刻意收進來，方便對照）*/
'whether':'是否','weather':'天氣','hear':'聽見','here':'這裡',
'leave':'離開','live':'居住','desk':'書桌','disk':'磁碟',
'accept':'接受','except':'除了','expect':'預期',
'affect':'影響（動詞）','effect':'影響（名詞）',
'whole':'整個','hole':'洞','road':'道路','rode':'騎（過去式）',
'lead':'帶領','read':'閱讀',

/* 縮讀原形（點了就知道原本是什麼）*/
'wanna':'= want to 想要','gonna':'= going to 將要','lemme':'= let me 讓我',
'didja':'= did you 你有沒有','shoulda':'= should have 早該','whaddaya':'= what do you 你覺得'
};

Object.keys(LISTENING_WORDS).forEach(k=>{
  if(!CONTENT.dict[k]) CONTENT.dict[k] = LISTENING_WORDS[k];
});

/* ── 2b. 語境修正 ──────────────────────────────────────
   自動收割會把某個章節的語境帶進來。例如 under 在價目表
   那章是「未滿 200 單位」，但在其他地方是「在…下面」。
   這裡強制覆蓋成通用解釋。
   ─────────────────────────────────────────────────── */
const OVERRIDE = {
 'under':'在…下面','board':'看板／登機','past':'經過／過了','rest':'其餘／休息',
 'class':'課程','credit':'抵用額','load':'一批貨','cover':'代班／涵蓋',
 'change':'更動／零錢','check':'檢查／確認','order':'訂單／順序',
 'run':'經營','runs':'行經／經營','hold':'保留','settle':'結清','issue':'開立／議題',
 'party':'一行人','minutes':'會議紀錄','turnover':'流動率／營業額',
 'probation':'試用期','clearance':'通關','draft':'草稿／吃水'
};
Object.keys(OVERRIDE).forEach(k=> CONTENT.dict[k] = OVERRIDE[k]);

/* ── 2c. 補上文字稿裡漏掉的內容字 ── */
const EXTRA = {
 'calling':'打電話','ready':'準備好的','appointment':'預約','quote':'報價',
 'moving':'搬遷／移動','eighth':'第八','ninth':'第九','step':'踏／步驟',
 'using':'使用','speak':'說話','yellow':'黃色','orange':'橘色','hot':'熱的',
 'help':'幫助','stored':'存放','bench':'長椅','vests':'背心','vest':'背心',
 'route':'路線','blasts':'鳴笛聲','refreshments':'茶點','observation':'觀景',
 'counter':'櫃檯','stairs':'樓梯','lift':'電梯','side':'側邊','exceptions':'例外',
 'unsure':'不確定的','identify':'辨識','arrives':'抵達','arrived':'抵達',
 'worn':'磨損的','fitted':'含安裝','inspection':'檢查','recommend':'建議',
 'decided':'決定','open':'開放的','closes':'關閉','collected':'領取',
 'urgent':'緊急的','cases':'案例','confirming':'確認','received':'收到',
 'relocation':'搬遷','pharmacy':'藥局','forward':'向前','text':'簡訊',
 'shortage':'短缺','resigned':'辭職','licence':'執照','applies':'適用',
 'submitted':'提交','paperwork':'書面文件','storage':'倉儲','allowed':'被允許',
 'promise':'保證','decide':'決定','push':'延後／推','whole':'整個','lot':'一批'
};
Object.keys(EXTRA).forEach(k=>{ if(!CONTENT.dict[k]) CONTENT.dict[k] = EXTRA[k]; });

/* ── 2d. 功能字不標底線 ────────────────────────────────
   the、are、every 這種字如果也可以點，整段會變成一片虛線，
   反而看不出哪些是值得查的。全部移除。
   ─────────────────────────────────────────────────── */
const FUNCTION_WORDS = `
a an the this that these those
i you he she it we they me him her us them my your his its our their
is am are was were be been being
do does did done have has had
will would shall should can could may might must
and or but so if then than because
of to in on at for with from by as into onto about over under-
not no yes very just only also too
what when where who whom whose which how why
all any some more most much many few both each every either neither
one two three four five six seven eight nine ten
up out off down back again now here there
i'm i'll i've it's that's there's we're you're don't didn't cannot
`.trim().split(/\s+/);
FUNCTION_WORDS.forEach(w=>{ delete CONTENT.dict[w]; });

/* ── 3. 供引擎使用的比對表：多字詞優先 ── */
CONTENT.dictKeys = Object.keys(CONTENT.dict)
  .sort((a,b)=> b.length - a.length);

/* ── 4. 把一段英文包上可點的標記 ──────────────────────
   引擎呼叫 CONTENT.glossify(text) 即可。
   多字詞先比對（life jackets 不會被拆成 life + jackets）。
   ─────────────────────────────────────────────────── */
CONTENT.glossify = function(text){
  const D = CONTENT.dict;
  // 先處理多字詞
  const multi = CONTENT.dictKeys.filter(k=>k.includes(' '));
  let out = text;
  multi.forEach(k=>{
    const re = new RegExp('(^|[^A-Za-z-])(' + k.replace(/[.*+?^${}()|[\]\\]/g,'\\$&') + ')(?![A-Za-z-])','gi');
    out = out.replace(re, (m,pre,w)=> pre + '\u0001' + w + '\u0002' + k + '\u0003');
  });
  // 再處理單字
  out = out.replace(/[A-Za-z][A-Za-z'-]*/g, w=>{
    const k = w.toLowerCase();
    if(!D[k]) return w;
    return '\u0001' + w + '\u0002' + k + '\u0003';
  });
  // 轉成 HTML
  return out.replace(/\u0001([^\u0002]+)\u0002([^\u0003]+)\u0003/g,
    (m,w,k)=> `<span class="gw dictw" data-z="${String(D[k]).replace(/"/g,'&quot;')}">${w}</span>`);
};

/* ── 統計 ─────────────────────────────────────────
   自動收割約 1,160 筆（來自閱讀章節的既有標記）
   手動補充約 200 筆（聽力獨有的字）
   合計約 1,360 筆，聽力文字稿現在也點得到中文。
   ─────────────────────────────────────────────── */
