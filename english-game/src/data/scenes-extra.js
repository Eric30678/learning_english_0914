/* ═══════════════════════════════════════════════════════
   scenes-extra.js
   新增兩個場景，並把 31–50 集重新分配到不同場景。

   載入順序（index.html）：
     <script src="content.js"></script>
     <script src="scenes-extra.js"></script>   ← 放在後面
     <script>…引擎…</script>

   設計約束：
   新場景裡的角色站位刻意對齊 office 的座標
   （david≈90 / priya≈168 / sam≈284），
   所以 CONTENT.actors 的泡泡座標不用改，引擎也不用動。
   ═══════════════════════════════════════════════════════ */

/* ── 光線：疊一層半透明色，換氣氛不換景 ──────────────
   定義放在這裡（而不是 chapters.js），因為聽力模式
   只載入 content.js + scenes-extra.js，也需要用到。
   ─────────────────────────────────────────────────── */
CONTENT.tints = {
  day:   null,
  dusk:  ['#e08a4a', 0.16],
  night: ['#141a2e', 0.42],
  dark:  ['#05070c', 0.62],
  storm: ['#3a4a5e', 0.34],
  dawn:  ['#8fa8d9', 0.20],
  warm:  ['#ffb46b', 0.12]
};

Object.assign(CONTENT.scenes, {

/* ── 會議室：31–40 集的主場景 ───────────────────── */
meeting: `<svg viewBox="0 0 360 130" shape-rendering="crispEdges" xmlns="http://www.w3.org/2000/svg">
<rect x="0" y="0" width="360" height="8" fill="#1f2733"/><rect x="0" y="8" width="360" height="32" fill="#3c4a5e"/>
<rect x="0" y="40" width="360" height="30" fill="#354256"/><rect x="0" y="70" width="360" height="16" fill="#2d3848"/>
<rect x="0" y="84" width="360" height="10" fill="#27303e"/><rect x="0" y="92" width="360" height="2" fill="#4c5c72"/>
<rect x="112" y="0" width="8" height="12" fill="#1f2733"/><rect x="96" y="12" width="40" height="5" fill="#39475c"/>
<rect x="100" y="17" width="32" height="6" fill="#ffe8bd"/><rect x="92" y="23" width="48" height="4" fill="#ffe8bd" fill-opacity=".25"/>
<rect x="238" y="0" width="8" height="12" fill="#1f2733"/><rect x="222" y="12" width="40" height="5" fill="#39475c"/>
<rect x="226" y="17" width="32" height="6" fill="#ffe8bd"/><rect x="218" y="23" width="48" height="4" fill="#ffe8bd" fill-opacity=".25"/>

<rect x="14" y="16" width="102" height="60" fill="#2b3646"/><rect x="18" y="20" width="94" height="52" fill="#eef2f5"/>
<rect x="24" y="26" width="34" height="3" fill="#4a7ab8"/><rect x="24" y="33" width="52" height="3" fill="#4a7ab8"/>
<rect x="24" y="40" width="26" height="3" fill="#4a7ab8"/><rect x="64" y="44" width="38" height="22" fill="#d9694f" fill-opacity=".22"/>
<rect x="64" y="44" width="38" height="3" fill="#d9694f"/><rect x="24" y="50" width="30" height="3" fill="#3f8a5e"/>
<rect x="24" y="57" width="20" height="3" fill="#3f8a5e"/><rect x="112" y="72" width="6" height="4" fill="#2b3646"/>

<rect x="252" y="14" width="92" height="62" fill="#1f2733"/><rect x="256" y="18" width="84" height="54" fill="#8fc3e0"/>
<rect x="256" y="18" width="84" height="18" fill="#a9d4ea"/><rect x="298" y="18" width="4" height="54" fill="#1f2733"/>
<rect x="256" y="44" width="84" height="4" fill="#1f2733"/><rect x="262" y="52" width="22" height="12" fill="#6b8fa8"/>
<rect x="308" y="50" width="26" height="20" fill="#6b8fa8"/>

<rect x="0" y="94" width="360" height="36" fill="#4a4152"/><rect x="0" y="94" width="360" height="3" fill="#5b5065"/>

<g data-actor="david" style="cursor:pointer"><rect x="38" y="60" width="88" height="62" fill="transparent"/>
<g transform="translate(90,64)"><rect x="6" y="0" width="16" height="6" fill="#3a2b22"/><rect x="7" y="2" width="14" height="12" fill="#eec08f"/>
<rect x="7" y="2" width="4" height="12" fill="#d19a6b"/><rect x="6" y="0" width="16" height="5" fill="#3a2b22"/>
<rect x="6" y="4" width="2" height="5" fill="#3a2b22"/><rect x="20" y="4" width="2" height="5" fill="#3a2b22"/>
<rect x="12" y="7" width="2" height="2" fill="#2a1c14"/><rect x="17" y="7" width="2" height="2" fill="#2a1c14"/>
<rect x="11" y="14" width="6" height="2" fill="#d19a6b"/><rect x="4" y="16" width="20" height="22" fill="#4a6fb0"/>
<rect x="4" y="16" width="6" height="22" fill="#38548a"/><rect x="11" y="16" width="6" height="4" fill="#ece3d2"/>
<rect x="0" y="18" width="4" height="16" fill="#38548a"/><rect x="24" y="18" width="4" height="12" fill="#4a6fb0"/>
<rect x="0" y="34" width="4" height="4" fill="#d19a6b"/><rect x="26" y="28" width="4" height="4" fill="#eec08f"/>
<rect x="29" y="24" width="8" height="3" fill="#d9d2c4"/></g>
<rect x="62" y="120" width="50" height="4" fill="#000" fill-opacity=".22"/></g>

<g data-actor="priya" style="cursor:pointer"><rect x="134" y="60" width="88" height="62" fill="transparent"/>
<g transform="translate(160,68)"><rect x="5" y="0" width="18" height="8" fill="#4a2f3a"/><rect x="7" y="3" width="14" height="12" fill="#f0c79a"/>
<rect x="7" y="3" width="4" height="12" fill="#d3a375"/><rect x="4" y="4" width="4" height="10" fill="#4a2f3a"/>
<rect x="20" y="4" width="4" height="10" fill="#4a2f3a"/><rect x="12" y="8" width="2" height="2" fill="#2a1c14"/>
<rect x="17" y="8" width="2" height="2" fill="#2a1c14"/><rect x="11" y="15" width="6" height="2" fill="#d3a375"/>
<rect x="4" y="17" width="20" height="18" fill="#c98ea8"/><rect x="4" y="17" width="6" height="18" fill="#a86f88"/>
<rect x="0" y="19" width="4" height="12" fill="#a86f88"/><rect x="24" y="19" width="4" height="12" fill="#c98ea8"/></g>
</g>

<g data-actor="sam" style="cursor:pointer"><rect x="232" y="60" width="88" height="62" fill="transparent"/>
<g transform="translate(272,68)"><rect x="6" y="0" width="16" height="6" fill="#241a16"/><rect x="7" y="2" width="14" height="12" fill="#e8b884"/>
<rect x="7" y="2" width="4" height="12" fill="#c9925f"/><rect x="6" y="0" width="16" height="5" fill="#241a16"/>
<rect x="6" y="4" width="2" height="6" fill="#241a16"/><rect x="20" y="4" width="2" height="6" fill="#241a16"/>
<rect x="12" y="7" width="2" height="2" fill="#2a1c14"/><rect x="17" y="7" width="2" height="2" fill="#2a1c14"/>
<rect x="11" y="14" width="6" height="2" fill="#c9925f"/><rect x="4" y="16" width="20" height="18" fill="#5aa06a"/>
<rect x="4" y="16" width="6" height="18" fill="#427a50"/><rect x="11" y="16" width="6" height="4" fill="#ece3d2"/>
<rect x="0" y="18" width="4" height="12" fill="#427a50"/><rect x="24" y="18" width="4" height="12" fill="#5aa06a"/></g>
</g>

<rect x="126" y="98" width="234" height="10" fill="#8a6440"/><rect x="126" y="96" width="234" height="3" fill="#b58857"/>
<rect x="126" y="108" width="234" height="22" fill="#6f4f33"/><rect x="126" y="108" width="234" height="2" fill="#5a3f29"/>
<rect x="150" y="88" width="22" height="10" fill="#ece3d2"/><rect x="152" y="86" width="16" height="3" fill="#ffffff"/>
<rect x="262" y="88" width="24" height="10" fill="#1b1826"/><rect x="265" y="90" width="18" height="6" fill="#7fd4e8"/>
<rect x="196" y="88" width="26" height="8" fill="#d9d2c4"/><rect x="204" y="84" width="10" height="5" fill="#b9b2a4"/>
<rect x="207" y="86" width="4" height="2" fill="#7fd4e8"/>
<rect x="316" y="86" width="10" height="12" fill="#d9694f"/>

<rect x="0" y="0" width="28" height="130" fill="#141a24" fill-opacity=".14" style="pointer-events:none"/>
<g data-mark="1" transform="translate(90,44)" style="pointer-events:none"><rect x="0" y="0" width="22" height="14" fill="#ffe6b8"/>
<rect x="0" y="0" width="22" height="4" fill="#fff4dd"/><rect x="6" y="14" width="5" height="4" fill="#ffe6b8"/>
<rect x="4" y="6" width="3" height="3" fill="#7a5a41"/><rect x="9" y="6" width="3" height="3" fill="#7a5a41"/>
<rect x="14" y="6" width="3" height="3" fill="#7a5a41"/></g></svg>`,

/* ── 倉庫出貨區：41–50 集的主場景 ───────────────── */
warehouse: `<svg viewBox="0 0 360 130" shape-rendering="crispEdges" xmlns="http://www.w3.org/2000/svg">
<rect x="0" y="0" width="360" height="10" fill="#1d2029"/><rect x="0" y="10" width="360" height="76" fill="#3a3f4d"/>
<rect x="0" y="10" width="360" height="2" fill="#4c5263"/><rect x="24" y="10" width="3" height="76" fill="#333845"/>
<rect x="72" y="10" width="3" height="76" fill="#333845"/><rect x="120" y="10" width="3" height="76" fill="#333845"/>
<rect x="168" y="10" width="3" height="76" fill="#333845"/><rect x="216" y="10" width="3" height="76" fill="#333845"/>
<rect x="264" y="10" width="3" height="76" fill="#333845"/><rect x="312" y="10" width="3" height="76" fill="#333845"/>
<rect x="0" y="84" width="360" height="4" fill="#2b2f3a"/>

<rect x="248" y="16" width="98" height="70" fill="#4a5262"/><rect x="248" y="16" width="98" height="5" fill="#5c657a"/>
<rect x="248" y="26" width="98" height="4" fill="#3e4655"/><rect x="248" y="38" width="98" height="4" fill="#3e4655"/>
<rect x="248" y="50" width="98" height="4" fill="#3e4655"/><rect x="248" y="62" width="98" height="4" fill="#3e4655"/>
<rect x="248" y="74" width="98" height="4" fill="#3e4655"/><rect x="244" y="16" width="4" height="70" fill="#2b303b"/>

<rect x="150" y="0" width="4" height="14" fill="#1d2029"/><rect x="136" y="14" width="32" height="6" fill="#2b303b"/>
<rect x="140" y="20" width="24" height="7" fill="#ffe3a8"/><rect x="128" y="27" width="48" height="5" fill="#ffe3a8" fill-opacity=".2"/>
<rect x="120" y="32" width="64" height="5" fill="#ffe3a8" fill-opacity=".1"/>

<rect x="0" y="88" width="360" height="42" fill="#5a5f6b"/><rect x="0" y="88" width="360" height="3" fill="#6b7180"/>
<rect x="40" y="104" width="60" height="3" fill="#4c5159" fill-opacity=".7"/><rect x="200" y="116" width="80" height="3" fill="#4c5159" fill-opacity=".7"/>
<rect x="0" y="96" width="360" height="2" fill="#d9b44a" fill-opacity=".35"/>

<rect x="14" y="60" width="66" height="8" fill="#a9793f"/><rect x="14" y="68" width="66" height="4" fill="#8a6133"/>
<rect x="18" y="44" width="28" height="16" fill="#c2955c"/><rect x="18" y="44" width="28" height="4" fill="#d4a86e"/>
<rect x="24" y="48" width="16" height="3" fill="#8a6133"/><rect x="48" y="44" width="28" height="16" fill="#c2955c"/>
<rect x="48" y="44" width="28" height="4" fill="#d4a86e"/><rect x="54" y="48" width="16" height="3" fill="#8a6133"/>
<rect x="30" y="28" width="28" height="16" fill="#c2955c"/><rect x="30" y="28" width="28" height="4" fill="#d4a86e"/>
<rect x="36" y="32" width="16" height="3" fill="#8a6133"/>
<rect x="10" y="72" width="74" height="4" fill="#000" fill-opacity=".2"/>

<rect x="130" y="100" width="34" height="20" fill="#c2955c"/><rect x="130" y="100" width="34" height="5" fill="#d4a86e"/>
<rect x="138" y="106" width="18" height="3" fill="#8a6133"/><rect x="126" y="120" width="42" height="4" fill="#000" fill-opacity=".25"/>
<rect x="168" y="106" width="28" height="16" fill="#a9793f"/><rect x="168" y="106" width="28" height="4" fill="#c2955c"/>
<rect x="172" y="112" width="8" height="6" fill="#2b2f3a" fill-opacity=".5"/>
<rect x="166" y="122" width="34" height="4" fill="#000" fill-opacity=".25"/>

<g data-actor="david" style="cursor:pointer"><rect x="38" y="58" width="88" height="64" fill="transparent"/>
<g transform="translate(90,62)"><rect x="6" y="0" width="16" height="6" fill="#3a2b22"/><rect x="7" y="2" width="14" height="12" fill="#eec08f"/>
<rect x="7" y="2" width="4" height="12" fill="#d19a6b"/><rect x="6" y="0" width="16" height="5" fill="#3a2b22"/>
<rect x="6" y="4" width="2" height="5" fill="#3a2b22"/><rect x="20" y="4" width="2" height="5" fill="#3a2b22"/>
<rect x="12" y="7" width="2" height="2" fill="#2a1c14"/><rect x="17" y="7" width="2" height="2" fill="#2a1c14"/>
<rect x="11" y="14" width="6" height="2" fill="#d19a6b"/><rect x="4" y="16" width="20" height="22" fill="#4a6fb0"/>
<rect x="4" y="16" width="6" height="22" fill="#38548a"/><rect x="4" y="16" width="20" height="4" fill="#e8c84a"/>
<rect x="0" y="18" width="4" height="16" fill="#38548a"/><rect x="24" y="18" width="4" height="16" fill="#4a6fb0"/>
<rect x="0" y="34" width="4" height="4" fill="#d19a6b"/><rect x="24" y="34" width="4" height="4" fill="#eec08f"/>
<rect x="6" y="38" width="7" height="14" fill="#2f3a4a"/><rect x="15" y="38" width="7" height="14" fill="#27303e"/>
<rect x="26" y="24" width="10" height="13" fill="#ece3d2"/><rect x="28" y="27" width="6" height="2" fill="#8a8478"/>
<rect x="28" y="31" width="6" height="2" fill="#8a8478"/></g>
<rect x="82" y="116" width="40" height="4" fill="#000" fill-opacity=".25"/></g>

<g data-actor="sam" style="cursor:pointer"><rect x="232" y="58" width="88" height="64" fill="transparent"/>
<g transform="translate(284,62)"><rect x="6" y="0" width="16" height="6" fill="#241a16"/><rect x="7" y="2" width="14" height="12" fill="#e8b884"/>
<rect x="7" y="2" width="4" height="12" fill="#c9925f"/><rect x="6" y="0" width="16" height="5" fill="#241a16"/>
<rect x="6" y="4" width="2" height="6" fill="#241a16"/><rect x="20" y="4" width="2" height="6" fill="#241a16"/>
<rect x="12" y="7" width="2" height="2" fill="#2a1c14"/><rect x="17" y="7" width="2" height="2" fill="#2a1c14"/>
<rect x="11" y="14" width="6" height="2" fill="#c9925f"/><rect x="4" y="16" width="20" height="22" fill="#5aa06a"/>
<rect x="4" y="16" width="6" height="22" fill="#427a50"/><rect x="4" y="16" width="20" height="4" fill="#e8c84a"/>
<rect x="0" y="18" width="4" height="14" fill="#427a50"/><rect x="24" y="16" width="4" height="14" fill="#5aa06a"/>
<rect x="0" y="32" width="4" height="4" fill="#c9925f"/><rect x="24" y="12" width="4" height="4" fill="#e8b884"/>
<rect x="6" y="38" width="7" height="14" fill="#2f3a4a"/><rect x="15" y="38" width="7" height="14" fill="#27303e"/></g>
<rect x="276" y="116" width="40" height="4" fill="#000" fill-opacity=".25"/>
<rect x="300" y="70" width="30" height="18" fill="#c2955c"/><rect x="300" y="70" width="30" height="4" fill="#d4a86e"/>
<rect x="306" y="76" width="18" height="3" fill="#8a6133"/><rect x="296" y="88" width="38" height="4" fill="#000" fill-opacity=".2"/></g>

<rect x="0" y="0" width="28" height="130" fill="#12151c" fill-opacity=".16" style="pointer-events:none"/>
<g data-mark="1" transform="translate(90,42)" style="pointer-events:none"><rect x="0" y="0" width="22" height="14" fill="#ffe6b8"/>
<rect x="0" y="0" width="22" height="4" fill="#fff4dd"/><rect x="6" y="14" width="5" height="4" fill="#ffe6b8"/>
<rect x="4" y="6" width="3" height="3" fill="#7a5a41"/><rect x="9" y="6" width="3" height="3" fill="#7a5a41"/>
<rect x="14" y="6" width="3" height="3" fill="#7a5a41"/></g></svg>`

});

/* ── 場景重新指派 ────────────────────────────────────
   原則：每個單元有主場景，但保留少數集數用別的場景，
   免得連續十集畫面完全不動。
   ─────────────────────────────────────────────────── */
const SCENE_MAP = {
  /* 單元四 · 職場溝通 → 會議室 */
  31:'meeting', 32:'meeting', 33:'meeting', 34:'meeting', 35:'meeting',
  36:'meeting', 37:'office',  38:'meeting', 39:'meeting', 40:'meeting',

  /* 單元五 · 連續劇 → 倉庫為主，穿插辦公室與家裡 */
  41:'meeting',   42:'warehouse', 43:'office',    44:'office',    45:'room',
  46:'meeting',   47:'office',    48:'warehouse', 49:'warehouse', 50:'meeting'
};

CONTENT.episodes.forEach(e => {
  if (SCENE_MAP[e.id]) e.scene = SCENE_MAP[e.id];
});

/* ── 各場景的閒置台詞 ───────────────────────────────
   點非目標角色時顯示。沒設定就用引擎的預設值。
   ─────────────────────────────────────────────────── */
CONTENT.idleByScene = {
  meeting:{
    david:'David 在白板前停住，\n手上的筆還沒放下。',
    priya:'Priya 低頭寫筆記。\n她把筆記本往你這邊挪了一點。',
    sam:'Sam 坐得很直。\n他還在記每一句話。'
  },
  warehouse:{
    david:'David 拿著點貨單，\n一格一格對。',
    sam:'Sam 蹲在棧板旁邊：\n「這排我數過兩次了。」'
  }
};
