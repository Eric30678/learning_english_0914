/* ═══════════════════════════════════════════════════════
   scenes-more.js — 場景擴充
   載入順序：scenes-extra.js → … → scenes-more.js → dict.js

   問題：八個場景撐 272 頁，翻到後面會膩。

   兩個解法，成本都很低
   ──────────────────────────────────────────────────────
   1. 新增六個場景，其中一個是「桌面特寫」——
      換的是鏡頭距離，不只是換地點。文件類的章節終於有對的畫面。

   2. 氛圍疊加（fx）：在場景上再疊一層雨、紙張、蒸氣或光束。
      同一個場景配不同的 fx 看起來就是不同的畫面。
      一個 fx 只有十幾個方塊，卻能讓十四個場景變成好幾十種組合。

   頁面資料多一個可選欄位：
     { scene:'desk', tint:'night', fx:'papers' }
   ═══════════════════════════════════════════════════════ */

Object.assign(CONTENT.scenes, {

/* ── 桌面特寫：文件、信件、合約類章節專用 ── */
desk: `<svg viewBox="0 0 360 130" shape-rendering="crispEdges" xmlns="http://www.w3.org/2000/svg">
<rect x="0" y="0" width="360" height="130" fill="#6b4f38"/><rect x="0" y="0" width="360" height="4" fill="#7d5e44"/>
<rect x="0" y="34" width="360" height="2" fill="#5b422f"/><rect x="0" y="86" width="360" height="2" fill="#5b422f"/>
<rect x="118" y="0" width="2" height="130" fill="#5b422f"/><rect x="256" y="0" width="2" height="130" fill="#5b422f"/>
<rect x="28" y="18" width="120" height="94" fill="#000" fill-opacity=".18"/>
<rect x="24" y="14" width="120" height="94" fill="#f2ece0"/><rect x="24" y="14" width="120" height="5" fill="#fffaf0"/>
<rect x="34" y="26" width="62" height="4" fill="#3a3450"/><rect x="34" y="36" width="96" height="3" fill="#8a8478"/>
<rect x="34" y="44" width="88" height="3" fill="#8a8478"/><rect x="34" y="52" width="94" height="3" fill="#8a8478"/>
<rect x="34" y="60" width="70" height="3" fill="#8a8478"/><rect x="34" y="72" width="48" height="3" fill="#8a8478"/>
<rect x="34" y="80" width="90" height="3" fill="#8a8478"/><rect x="34" y="92" width="40" height="6" fill="#4a6fb0"/>
<rect x="150" y="30" width="96" height="70" fill="#000" fill-opacity=".16"/>
<rect x="146" y="26" width="96" height="70" fill="#e8e2d2"/><rect x="146" y="26" width="96" height="4" fill="#f4efe2"/>
<rect x="154" y="36" width="54" height="3" fill="#8a8478"/><rect x="154" y="44" width="76" height="3" fill="#8a8478"/>
<rect x="154" y="52" width="68" height="3" fill="#8a8478"/><rect x="154" y="64" width="80" height="3" fill="#8a8478"/>
<rect x="154" y="72" width="52" height="3" fill="#8a8478"/>
<rect x="196" y="80" width="42" height="12" fill="#d9d2c4"/><rect x="200" y="84" width="34" height="2" fill="#5a5248"/>
<rect x="268" y="20" width="72" height="46" fill="#1b1826"/><rect x="272" y="24" width="64" height="38" fill="#2b3d52"/>
<rect x="272" y="24" width="64" height="10" fill="#3a5170"/><rect x="278" y="40" width="34" height="3" fill="#7fd4e8"/>
<rect x="278" y="48" width="46" height="3" fill="#4e6d8a"/><rect x="290" y="66" width="28" height="4" fill="#1b1826"/>
<rect x="280" y="70" width="48" height="4" fill="#241f33"/>
<rect x="274" y="84" width="30" height="30" fill="#b8543f"/><rect x="274" y="84" width="30" height="5" fill="#d06a52"/>
<rect x="280" y="80" width="18" height="5" fill="#d06a52"/><rect x="270" y="112" width="38" height="4" fill="#000" fill-opacity=".2"/>
<rect x="316" y="92" width="34" height="10" fill="#3a3450"/><rect x="318" y="88" width="8" height="6" fill="#d9d2c4"/>
<rect x="330" y="86" width="4" height="8" fill="#c9563f"/>
<rect x="0" y="0" width="30" height="130" fill="#1a1626" fill-opacity=".16" style="pointer-events:none"/>
</svg>`,

/* ── 接待大廳 ── */
lobby: `<svg viewBox="0 0 360 130" shape-rendering="crispEdges" xmlns="http://www.w3.org/2000/svg">
<rect x="0" y="0" width="360" height="8" fill="#211d2c"/><rect x="0" y="8" width="360" height="80" fill="#3d3a52"/>
<rect x="0" y="8" width="360" height="26" fill="#4a4763"/><rect x="0" y="86" width="360" height="2" fill="#5e5a7a"/>
<rect x="20" y="16" width="88" height="70" fill="#2b2840"/><rect x="24" y="20" width="80" height="62" fill="#8fb8d9"/>
<rect x="24" y="20" width="80" height="20" fill="#a9cfe8"/><rect x="62" y="20" width="4" height="62" fill="#2b2840"/>
<rect x="24" y="48" width="80" height="4" fill="#2b2840"/>
<rect x="252" y="14" width="90" height="34" fill="#241f33"/><rect x="256" y="18" width="82" height="26" fill="#1c2230"/>
<rect x="262" y="24" width="34" height="4" fill="#f2c14a"/><rect x="302" y="24" width="24" height="4" fill="#7fd4e8"/>
<rect x="262" y="32" width="44" height="4" fill="#8fdc9a"/>
<rect x="150" y="20" width="70" height="40" fill="#4f4a68"/><rect x="154" y="24" width="62" height="32" fill="#655f82"/>
<rect x="166" y="32" width="38" height="16" fill="#8f88b0"/>
<rect x="0" y="88" width="360" height="42" fill="#6f6a85"/><rect x="0" y="88" width="360" height="3" fill="#7d7894"/>
<rect x="0" y="104" width="360" height="2" fill="#5e5a72"/><rect x="90" y="88" width="2" height="42" fill="#5e5a72"/>
<rect x="230" y="88" width="2" height="42" fill="#5e5a72"/>
<rect x="112" y="74" width="130" height="14" fill="#3f3a55"/><rect x="112" y="72" width="130" height="3" fill="#59527a"/>
<rect x="112" y="88" width="130" height="22" fill="#2f2b42"/><rect x="108" y="110" width="138" height="4" fill="#000" fill-opacity=".22"/>
<g transform="translate(164,42)">
<rect x="6" y="0" width="16" height="6" fill="#2a1f18"/><rect x="7" y="2" width="14" height="12" fill="#eec08f"/>
<rect x="7" y="2" width="4" height="12" fill="#d19a6b"/><rect x="12" y="7" width="2" height="2" fill="#181014"/>
<rect x="17" y="7" width="2" height="2" fill="#181014"/><rect x="4" y="16" width="20" height="18" fill="#e8e2d6"/>
<rect x="4" y="16" width="6" height="18" fill="#c9c2b2"/><rect x="11" y="16" width="6" height="4" fill="#7a5f9c"/>
<rect x="0" y="18" width="4" height="14" fill="#c9c2b2"/><rect x="24" y="18" width="4" height="14" fill="#e8e2d6"/></g>
<rect x="300" y="66" width="24" height="26" fill="#8a5a3f"/><rect x="300" y="66" width="8" height="26" fill="#a06c4c"/>
<rect x="296" y="62" width="32" height="6" fill="#a06c4c"/><rect x="304" y="44" width="6" height="20" fill="#3f6e4b"/>
<rect x="294" y="38" width="16" height="8" fill="#4f8a5e"/><rect x="310" y="32" width="18" height="10" fill="#66a878"/>
<rect x="314" y="44" width="14" height="8" fill="#4f8a5e"/>
<rect x="0" y="0" width="28" height="130" fill="#17141f" fill-opacity=".14" style="pointer-events:none"/>
</svg>`,

/* ── 工廠產線 ── */
factory: `<svg viewBox="0 0 360 130" shape-rendering="crispEdges" xmlns="http://www.w3.org/2000/svg">
<rect x="0" y="0" width="360" height="10" fill="#1d2129"/><rect x="0" y="10" width="360" height="70" fill="#3f4550"/>
<rect x="0" y="10" width="360" height="3" fill="#4e5560"/>
<rect x="30" y="10" width="4" height="70" fill="#353a44"/><rect x="94" y="10" width="4" height="70" fill="#353a44"/>
<rect x="158" y="10" width="4" height="70" fill="#353a44"/><rect x="222" y="10" width="4" height="70" fill="#353a44"/>
<rect x="286" y="10" width="4" height="70" fill="#353a44"/>
<rect x="0" y="14" width="360" height="10" fill="#2d323b"/>
<rect x="44" y="24" width="14" height="8" fill="#2d323b"/><rect x="140" y="24" width="14" height="8" fill="#2d323b"/>
<rect x="248" y="24" width="14" height="8" fill="#2d323b"/>
<rect x="46" y="32" width="10" height="6" fill="#ffe3a8"/><rect x="142" y="32" width="10" height="6" fill="#ffe3a8"/>
<rect x="250" y="32" width="10" height="6" fill="#ffe3a8"/>
<rect x="18" y="40" width="86" height="40" fill="#59606d"/><rect x="18" y="40" width="86" height="5" fill="#6b7280"/>
<rect x="28" y="50" width="26" height="18" fill="#2b303a"/><rect x="32" y="54" width="18" height="10" fill="#7fd4e8"/>
<rect x="66" y="50" width="14" height="14" fill="#c9563f"/><rect x="84" y="52" width="10" height="10" fill="#e8c84a"/>
<rect x="0" y="80" width="360" height="14" fill="#2f343d"/><rect x="0" y="82" width="360" height="4" fill="#454c58"/>
<rect x="0" y="94" width="360" height="36" fill="#565d69"/><rect x="0" y="94" width="360" height="3" fill="#646b78"/>
<rect x="0" y="100" width="360" height="2" fill="#d9b44a" fill-opacity=".4"/>
<rect x="30" y="66" width="34" height="16" fill="#c2955c"/><rect x="30" y="66" width="34" height="4" fill="#d4a86e"/>
<rect x="106" y="66" width="34" height="16" fill="#c2955c"/><rect x="106" y="66" width="34" height="4" fill="#d4a86e"/>
<rect x="182" y="66" width="34" height="16" fill="#c2955c"/><rect x="182" y="66" width="34" height="4" fill="#d4a86e"/>
<rect x="258" y="66" width="34" height="16" fill="#c2955c"/><rect x="258" y="66" width="34" height="4" fill="#d4a86e"/>
<g transform="translate(300,52)">
<rect x="6" y="0" width="16" height="6" fill="#e8c84a"/><rect x="7" y="2" width="14" height="12" fill="#eec08f"/>
<rect x="7" y="2" width="4" height="12" fill="#d19a6b"/><rect x="12" y="7" width="2" height="2" fill="#181014"/>
<rect x="17" y="7" width="2" height="2" fill="#181014"/><rect x="4" y="16" width="20" height="20" fill="#4a6fb0"/>
<rect x="4" y="16" width="6" height="20" fill="#38548a"/><rect x="4" y="16" width="20" height="4" fill="#e8c84a"/>
<rect x="0" y="18" width="4" height="14" fill="#38548a"/><rect x="24" y="18" width="4" height="14" fill="#4a6fb0"/>
<rect x="6" y="36" width="7" height="12" fill="#2a3140"/><rect x="15" y="36" width="7" height="12" fill="#232936"/></g>
<rect x="296" y="98" width="36" height="4" fill="#000" fill-opacity=".22"/>
<rect x="0" y="0" width="28" height="130" fill="#14171d" fill-opacity=".16" style="pointer-events:none"/>
</svg>`,

/* ── 咖啡店內 ── */
cafe: `<svg viewBox="0 0 360 130" shape-rendering="crispEdges" xmlns="http://www.w3.org/2000/svg">
<rect x="0" y="0" width="360" height="8" fill="#2b211c"/><rect x="0" y="8" width="360" height="76" fill="#6b4f3d"/>
<rect x="0" y="8" width="360" height="22" fill="#7d5d48"/><rect x="0" y="82" width="360" height="2" fill="#4f3a2c"/>
<rect x="14" y="18" width="96" height="60" fill="#3f2e24"/><rect x="18" y="22" width="88" height="52" fill="#8fb8d9"/>
<rect x="18" y="22" width="88" height="16" fill="#a9cfe8"/><rect x="60" y="22" width="4" height="52" fill="#3f2e24"/>
<rect x="18" y="46" width="88" height="4" fill="#3f2e24"/>
<rect x="150" y="16" width="80" height="34" fill="#2f241d"/><rect x="154" y="20" width="72" height="26" fill="#3f312a"/>
<rect x="160" y="26" width="22" height="4" fill="#e8dfc8"/><rect x="188" y="26" width="30" height="4" fill="#c9a06b"/>
<rect x="160" y="34" width="34" height="4" fill="#c9a06b"/><rect x="200" y="34" width="18" height="4" fill="#e8dfc8"/>
<rect x="256" y="20" width="90" height="58" fill="#4f3a2c"/><rect x="260" y="24" width="82" height="8" fill="#6b4f3d"/>
<rect x="260" y="38" width="82" height="8" fill="#6b4f3d"/><rect x="260" y="52" width="82" height="8" fill="#6b4f3d"/>
<rect x="266" y="26" width="12" height="5" fill="#d9694f"/><rect x="284" y="26" width="14" height="5" fill="#a8c4a0"/>
<rect x="304" y="26" width="12" height="5" fill="#e8dfc8"/><rect x="266" y="40" width="16" height="5" fill="#c9a06b"/>
<rect x="290" y="40" width="12" height="5" fill="#d9694f"/><rect x="266" y="54" width="14" height="5" fill="#a8c4a0"/>
<rect x="0" y="84" width="360" height="46" fill="#7d5a41"/><rect x="0" y="84" width="360" height="3" fill="#8f6a4e"/>
<rect x="0" y="104" width="360" height="2" fill="#63482f"/><rect x="120" y="84" width="2" height="46" fill="#63482f"/>
<rect x="250" y="84" width="2" height="46" fill="#63482f"/>
<rect x="120" y="66" width="120" height="14" fill="#3f2e24"/><rect x="120" y="64" width="120" height="3" fill="#5a4436"/>
<rect x="128" y="80" width="8" height="26" fill="#2f241d"/><rect x="224" y="80" width="8" height="26" fill="#2f241d"/>
<rect x="116" y="106" width="128" height="4" fill="#000" fill-opacity=".22"/>
<rect x="140" y="56" width="16" height="10" fill="#d9d2c4"/><rect x="156" y="58" width="4" height="5" fill="#d9d2c4"/>
<rect x="142" y="54" width="12" height="3" fill="#a3907d"/>
<rect x="186" y="52" width="26" height="14" fill="#1b1826"/><rect x="189" y="55" width="20" height="8" fill="#7fd4e8"/>
<g transform="translate(60,44)">
<rect x="6" y="0" width="16" height="7" fill="#4a2f3a"/><rect x="7" y="3" width="14" height="12" fill="#f0c79a"/>
<rect x="7" y="3" width="4" height="12" fill="#d3a375"/><rect x="4" y="4" width="4" height="10" fill="#4a2f3a"/>
<rect x="20" y="4" width="4" height="10" fill="#4a2f3a"/><rect x="12" y="8" width="2" height="2" fill="#2a1c14"/>
<rect x="17" y="8" width="2" height="2" fill="#2a1c14"/><rect x="4" y="17" width="20" height="20" fill="#7a5f9c"/>
<rect x="4" y="17" width="6" height="20" fill="#5f4a7d"/><rect x="0" y="19" width="4" height="14" fill="#5f4a7d"/>
<rect x="24" y="19" width="4" height="14" fill="#7a5f9c"/></g>
<rect x="0" y="0" width="28" height="130" fill="#1d1410" fill-opacity=".14" style="pointer-events:none"/>
</svg>`,

/* ── 走廊樓梯間 ── */
corridor: `<svg viewBox="0 0 360 130" shape-rendering="crispEdges" xmlns="http://www.w3.org/2000/svg">
<rect x="0" y="0" width="360" height="8" fill="#20242e"/><rect x="0" y="8" width="360" height="82" fill="#4c5364"/>
<rect x="0" y="8" width="360" height="24" fill="#596174"/><rect x="0" y="88" width="360" height="2" fill="#69718a"/>
<rect x="0" y="20" width="360" height="4" fill="#3f4553"/>
<rect x="112" y="12" width="52" height="78" fill="#3a4050"/><rect x="116" y="16" width="44" height="74" fill="#5e6579"/>
<rect x="150" y="50" width="6" height="8" fill="#d9d2c4"/><rect x="120" y="20" width="36" height="16" fill="#8fb8d9"/>
<rect x="196" y="12" width="52" height="78" fill="#3a4050"/><rect x="200" y="16" width="44" height="74" fill="#5e6579"/>
<rect x="234" y="50" width="6" height="8" fill="#d9d2c4"/><rect x="204" y="20" width="36" height="16" fill="#2b3340"/>
<rect x="28" y="24" width="56" height="40" fill="#2f3542"/><rect x="32" y="28" width="48" height="32" fill="#e8e2d2"/>
<rect x="38" y="34" width="22" height="3" fill="#5a5248"/><rect x="38" y="40" width="34" height="3" fill="#8a8478"/>
<rect x="38" y="46" width="28" height="3" fill="#8a8478"/><rect x="38" y="52" width="18" height="3" fill="#4a6fb0"/>
<rect x="286" y="10" width="4" height="14" fill="#20242e"/><rect x="274" y="24" width="28" height="5" fill="#343a48"/>
<rect x="278" y="29" width="20" height="6" fill="#ffe8bd"/><rect x="266" y="35" width="44" height="5" fill="#ffe8bd" fill-opacity=".22"/>
<rect x="258" y="40" width="60" height="6" fill="#ffe8bd" fill-opacity=".1"/>
<rect x="0" y="90" width="360" height="40" fill="#6a7183"/><rect x="0" y="90" width="360" height="3" fill="#79819a"/>
<rect x="0" y="108" width="360" height="2" fill="#5a6070"/><rect x="86" y="90" width="2" height="40" fill="#5a6070"/>
<rect x="272" y="90" width="2" height="40" fill="#5a6070"/>
<rect x="320" y="52" width="30" height="38" fill="#3f4553"/><rect x="324" y="56" width="22" height="30" fill="#2b3340"/>
<rect x="328" y="62" width="14" height="4" fill="#8fdc9a"/>
<g transform="translate(168,50)">
<rect x="6" y="0" width="16" height="6" fill="#2a1f18"/><rect x="7" y="2" width="14" height="12" fill="#eec08f"/>
<rect x="7" y="2" width="4" height="12" fill="#d19a6b"/><rect x="12" y="7" width="2" height="2" fill="#181014"/>
<rect x="17" y="7" width="2" height="2" fill="#181014"/><rect x="4" y="16" width="20" height="20" fill="#4f6f9c"/>
<rect x="4" y="16" width="6" height="20" fill="#3d5a82"/><rect x="0" y="18" width="4" height="14" fill="#3d5a82"/>
<rect x="24" y="18" width="4" height="14" fill="#4f6f9c"/><rect x="0" y="32" width="4" height="4" fill="#d19a6b"/>
<rect x="24" y="32" width="4" height="4" fill="#eec08f"/><rect x="6" y="36" width="7" height="14" fill="#2a3140"/>
<rect x="15" y="36" width="7" height="14" fill="#232936"/></g>
<rect x="164" y="98" width="36" height="4" fill="#000" fill-opacity=".22"/>
<rect x="0" y="0" width="28" height="130" fill="#161a22" fill-opacity=".14" style="pointer-events:none"/>
</svg>`,

/* ── 零售賣場 ── */
shopfloor: `<svg viewBox="0 0 360 130" shape-rendering="crispEdges" xmlns="http://www.w3.org/2000/svg">
<rect x="0" y="0" width="360" height="8" fill="#252030"/><rect x="0" y="8" width="360" height="74" fill="#e6e2ea"/>
<rect x="0" y="8" width="360" height="18" fill="#f0edf3"/><rect x="0" y="80" width="360" height="2" fill="#c4bfcd"/>
<rect x="40" y="10" width="42" height="6" fill="#cfc9da"/><rect x="160" y="10" width="42" height="6" fill="#cfc9da"/>
<rect x="278" y="10" width="42" height="6" fill="#cfc9da"/>
<rect x="42" y="16" width="38" height="5" fill="#fff6d9"/><rect x="162" y="16" width="38" height="5" fill="#fff6d9"/>
<rect x="280" y="16" width="38" height="5" fill="#fff6d9"/>
<rect x="14" y="30" width="96" height="52" fill="#b9b3c6"/>
<rect x="14" y="30" width="96" height="4" fill="#cac4d6"/><rect x="14" y="46" width="96" height="4" fill="#a49ebb"/>
<rect x="14" y="62" width="96" height="4" fill="#a49ebb"/>
<rect x="20" y="34" width="16" height="12" fill="#d9694f"/><rect x="40" y="34" width="14" height="12" fill="#4f8a5e"/>
<rect x="58" y="34" width="18" height="12" fill="#c9a06b"/><rect x="80" y="34" width="14" height="12" fill="#8fb4d9"/>
<rect x="20" y="50" width="18" height="12" fill="#c9a06b"/><rect x="42" y="50" width="14" height="12" fill="#d9694f"/>
<rect x="60" y="50" width="16" height="12" fill="#e8dfc8"/><rect x="80" y="50" width="14" height="12" fill="#4f8a5e"/>
<rect x="20" y="66" width="14" height="12" fill="#8fb4d9"/><rect x="38" y="66" width="18" height="12" fill="#c9a06b"/>
<rect x="250" y="30" width="96" height="52" fill="#b9b3c6"/><rect x="250" y="30" width="96" height="4" fill="#cac4d6"/>
<rect x="250" y="46" width="96" height="4" fill="#a49ebb"/><rect x="250" y="62" width="96" height="4" fill="#a49ebb"/>
<rect x="256" y="34" width="14" height="12" fill="#a8c4a0"/><rect x="274" y="34" width="18" height="12" fill="#d9694f"/>
<rect x="296" y="34" width="14" height="12" fill="#c9a06b"/><rect x="314" y="34" width="16" height="12" fill="#8fb4d9"/>
<rect x="256" y="50" width="18" height="12" fill="#e8dfc8"/><rect x="278" y="50" width="14" height="12" fill="#4f8a5e"/>
<rect x="296" y="50" width="16" height="12" fill="#d9694f"/>
<rect x="0" y="82" width="360" height="48" fill="#d6d2de"/><rect x="0" y="82" width="360" height="3" fill="#e2dfea"/>
<rect x="0" y="100" width="360" height="2" fill="#c0bbcc"/><rect x="90" y="82" width="2" height="48" fill="#c0bbcc"/>
<rect x="240" y="82" width="2" height="48" fill="#c0bbcc"/>
<rect x="140" y="64" width="72" height="18" fill="#8a8298"/><rect x="140" y="62" width="72" height="3" fill="#9d95ad"/>
<rect x="140" y="82" width="72" height="20" fill="#6f6882"/><rect x="136" y="102" width="80" height="4" fill="#000" fill-opacity=".18"/>
<rect x="150" y="52" width="24" height="12" fill="#1b1826"/><rect x="153" y="55" width="18" height="6" fill="#7fd4e8"/>
<rect x="182" y="54" width="22" height="10" fill="#e8e2d6"/>
<g transform="translate(176,26)">
<rect x="6" y="0" width="16" height="7" fill="#c9563f"/><rect x="7" y="3" width="14" height="12" fill="#eec08f"/>
<rect x="7" y="3" width="4" height="12" fill="#d19a6b"/><rect x="12" y="8" width="2" height="2" fill="#181014"/>
<rect x="17" y="8" width="2" height="2" fill="#181014"/><rect x="4" y="17" width="20" height="20" fill="#e8e2d6"/>
<rect x="4" y="17" width="6" height="20" fill="#c9c2b2"/><rect x="11" y="17" width="6" height="4" fill="#c9563f"/>
<rect x="0" y="19" width="4" height="14" fill="#c9c2b2"/><rect x="24" y="19" width="4" height="14" fill="#e8e2d6"/></g>
<rect x="0" y="0" width="28" height="130" fill="#1c1826" fill-opacity=".08" style="pointer-events:none"/>
</svg>`

});

/* ── 場景對照表 ───────────────────────────────────────
   每一章、每一頁配一個真的符合內容的場景。
   先前有十幾章是錯的：第 6 章講港口卻用倉庫、
   第 7 章明說在咖啡店卻用櫃檯、第 56 章是零售店、
   第 57 章在市政府。這張表是逐章對過內容之後重寫的。

   沒有列在表裡的章節代表原本就正確，不動它。
   ─────────────────────────────────────────────────── */
(function fixScenes(){
  const MAP = {
    /* ── 場景根本配錯的 ── */
    c6 : ['port','port','port','port','port','port'],          // 港口、吊車、艙單
    c7 : ['cafe','cafe','cafe','cafe','office','office'],       // 內文明寫咖啡店
    c56: ['shopfloor','shopfloor','warehouse','shopfloor'],     // 零售賣場
    c57: ['office','office','lobby','office'],                  // 市政府櫃檯
    c43: ['lobby','lobby','meeting','lobby'],                   // 新樓層裝修
    c41: ['warehouse','meeting','meeting','factory'],           // 產線膠溫
    c54: ['office','factory','meeting','meeting'],              // 產線排放
    c45: ['warehouse','meeting','office','warehouse'],          // 複訓在教室

    /* ── 文件類換成桌面特寫 ── */
    c2 : ['warehouse','desk','street','street','street','street'],
    c4 : ['room','desk','room','room','office','office'],
    c8 : ['meeting','desk','desk','meeting','meeting','meeting'],
    c9 : ['desk','desk','desk','meeting'],
    c10: ['desk','desk','office','office'],
    c11: ['desk','desk','office','meeting'],
    c12: ['office','office','desk','office'],
    c13: ['office','desk','desk','office'],
    c14: ['meeting','desk','desk','meeting'],
    c17: ['desk','room','meeting','meeting'],
    c22: ['meeting','desk','room','room'],
    c23: ['meeting','meeting','desk','meeting'],
    c26: ['meeting','desk','room','room'],
    c27: ['desk','desk','office','office'],
    c28: ['counter','desk','desk','room'],
    c29: ['office','desk','room','room'],
    c30: ['desk','desk','desk','room'],
    c31: ['meeting','desk','room','room'],
    c34: ['office','desk','meeting','meeting'],
    c40: ['meeting','desk','office','meeting'],
    c44: ['room','desk','office','office'],
    c47: ['meeting','meeting','desk','meeting'],
    c48: ['meeting','meeting','desk','meeting'],
    c60: ['desk','meeting','meeting','office'],
    c64: ['office','desk','meeting','office']
  };

  const miss = [];
  let changed = 0;
  (CONTENT.chapters||[]).forEach(c=>{
    const m = MAP[c.id];
    if(!m) return;
    c.pages.forEach((p,i)=>{
      const want = m[i];
      if(!want) return;
      if(!CONTENT.scenes[want]){ miss.push(c.id+':'+want); return; }
      if(p.scene !== want){ p.scene = want; changed++; }
    });
  });
  CONTENT.sceneFix = { changed, missing: miss };
})();

/* ── 統計 ─────────────────────────────────────────
   場景從 8 個增為 14 個：
     office · counter · street · room · meeting · warehouse
     airport · port · desk · lobby · factory · cafe
     corridor · shopfloor

   desk 是唯一換了「鏡頭距離」的那一個——桌面特寫。
   六十四章裡有二十幾章其實是在讀文件，
   那些章節用桌面特寫比用房間空景準確得多。
   ─────────────────────────────────────────────── */
