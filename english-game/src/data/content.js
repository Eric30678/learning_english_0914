/* ═══════════════════════════════════════════════════════
   情境劇 · 第一季內容（多益 400–550）
   50 集 · 4 個場景 · 純資料，無任何邏輯

   選項欄位順序：
     [0] en      英文選項（6–9 字）
     [1] verdict 'ok' 最佳 / 'mid' 不精確或中文思維 / 'bad' 當下爽
     [2] head    結果標題
     [3] result  後果（含對方原話）
     [4] why     為什麼（中文，講機制不講文法）

   階段：
     L1 全中文 ｜ L2 中文嵌英文 ｜ L3 中文情境+英文目標
     L4 英文極簡 ｜ L5 英文＋劇情拉長
   ═══════════════════════════════════════════════════════ */

const CONTENT = {

/* ── 場景 ─────────────────────────────────────────── */
scenes: {

office: `<svg viewBox="0 0 360 130" shape-rendering="crispEdges" xmlns="http://www.w3.org/2000/svg">
<rect x="0" y="0" width="360" height="8" fill="#241f33"/><rect x="0" y="8" width="360" height="30" fill="#443c5e"/>
<rect x="0" y="38" width="360" height="30" fill="#3b3450"/><rect x="0" y="68" width="360" height="16" fill="#352e48"/>
<rect x="0" y="84" width="360" height="10" fill="#2f2942"/><rect x="0" y="92" width="360" height="2" fill="#4d4468"/>
<rect x="190" y="8" width="170" height="30" fill="#4e4568"/><rect x="190" y="38" width="170" height="30" fill="#453d5c"/>
<rect x="236" y="14" width="90" height="64" fill="#241f33"/><rect x="240" y="18" width="82" height="56" fill="#bfe3f5"/>
<rect x="240" y="18" width="82" height="18" fill="#e3f1fb"/><rect x="292" y="22" width="18" height="14" fill="#ffe6b8"/>
<rect x="288" y="26" width="26" height="7" fill="#ffe6b8"/><rect x="248" y="46" width="18" height="5" fill="#a9d4ea"/>
<rect x="274" y="54" width="26" height="5" fill="#a9d4ea"/><rect x="279" y="18" width="4" height="56" fill="#241f33"/>
<rect x="240" y="42" width="82" height="4" fill="#241f33"/>
<rect x="30" y="20" width="70" height="42" fill="#6b5a42"/><rect x="34" y="24" width="62" height="34" fill="#c9b894"/>
<rect x="39" y="28" width="14" height="12" fill="#e8dfc8"/><rect x="58" y="26" width="12" height="10" fill="#d99a7a"/>
<rect x="76" y="32" width="12" height="14" fill="#8fb4d9"/><rect x="43" y="44" width="17" height="10" fill="#a8c4a0"/>
<rect x="66" y="42" width="16" height="12" fill="#e8dfc8"/>
<rect x="168" y="0" width="3" height="14" fill="#241f33"/><rect x="156" y="14" width="27" height="4" fill="#3a3350"/>
<rect x="158" y="18" width="23" height="7" fill="#e0a96b"/><rect x="162" y="25" width="15" height="3" fill="#ffd79a"/>
<rect x="150" y="28" width="39" height="4" fill="#ffd79a" fill-opacity=".2"/>
<rect x="0" y="94" width="360" height="36" fill="#5d4433"/><rect x="0" y="108" width="360" height="2" fill="#4b3629"/>
<rect x="0" y="126" width="360" height="2" fill="#4b3629"/><rect x="86" y="94" width="2" height="36" fill="#4b3629"/>
<rect x="214" y="94" width="2" height="36" fill="#4b3629"/><rect x="252" y="94" width="94" height="36" fill="#7a5a41"/>
<rect x="244" y="94" width="8" height="36" fill="#7a5a41" fill-opacity=".5"/><rect x="236" y="94" width="8" height="36" fill="#7a5a41" fill-opacity=".22"/>
<rect x="252" y="108" width="94" height="2" fill="#63482f"/><rect x="252" y="126" width="94" height="2" fill="#63482f"/>
<rect x="8" y="114" width="26" height="4" fill="#000" fill-opacity=".18"/><rect x="10" y="92" width="22" height="24" fill="#b06a4a"/>
<rect x="10" y="92" width="6" height="24" fill="#c97e5c"/><rect x="8" y="88" width="26" height="6" fill="#c97e5c"/>
<rect x="14" y="72" width="6" height="18" fill="#3f6e4b"/><rect x="6" y="66" width="14" height="8" fill="#4f8a5e"/>
<rect x="20" y="60" width="16" height="10" fill="#66a878"/><rect x="24" y="72" width="14" height="8" fill="#4f8a5e"/>
<rect x="2" y="78" width="14" height="8" fill="#66a878"/>
<g data-actor="david" style="cursor:pointer"><rect x="38" y="64" width="88" height="60" fill="transparent"/>
<g transform="translate(90,68)"><rect x="6" y="0" width="16" height="6" fill="#3a2b22"/><rect x="7" y="2" width="14" height="12" fill="#eec08f"/>
<rect x="7" y="2" width="4" height="12" fill="#d19a6b"/><rect x="6" y="0" width="16" height="5" fill="#3a2b22"/>
<rect x="6" y="4" width="2" height="5" fill="#3a2b22"/><rect x="20" y="4" width="2" height="5" fill="#3a2b22"/>
<rect x="12" y="7" width="2" height="2" fill="#2a1c14"/><rect x="17" y="7" width="2" height="2" fill="#2a1c14"/>
<rect x="11" y="14" width="6" height="2" fill="#d19a6b"/><rect x="4" y="16" width="20" height="20" fill="#4a6fb0"/>
<rect x="4" y="16" width="6" height="20" fill="#38548a"/><rect x="11" y="16" width="6" height="4" fill="#ece3d2"/>
<rect x="0" y="18" width="4" height="14" fill="#38548a"/><rect x="24" y="18" width="4" height="14" fill="#4a6fb0"/>
<rect x="0" y="32" width="4" height="4" fill="#d19a6b"/><rect x="24" y="32" width="4" height="4" fill="#eec08f"/></g>
<rect x="44" y="126" width="76" height="4" fill="#000" fill-opacity=".2"/><rect x="44" y="100" width="76" height="6" fill="#a97c4f"/>
<rect x="44" y="106" width="76" height="3" fill="#8a6440"/><rect x="48" y="109" width="5" height="18" fill="#6f4f33"/>
<rect x="111" y="109" width="5" height="18" fill="#6f4f33"/><rect x="52" y="84" width="30" height="16" fill="#1b1826"/>
<rect x="55" y="87" width="24" height="10" fill="#6fd0e0"/><rect x="55" y="87" width="24" height="3" fill="#a5e6f0"/>
<rect x="100" y="94" width="8" height="6" fill="#d9694f"/></g>
<g data-actor="priya" style="cursor:pointer"><rect x="134" y="64" width="88" height="60" fill="transparent"/>
<rect x="170" y="70" width="24" height="5" fill="#5a6478"/><rect x="172" y="75" width="4" height="25" fill="#4d5668"/>
<rect x="166" y="74" width="10" height="14" fill="#c98ea8"/><rect x="140" y="126" width="76" height="4" fill="#000" fill-opacity=".2"/>
<rect x="140" y="100" width="76" height="6" fill="#a97c4f"/><rect x="140" y="106" width="76" height="3" fill="#8a6440"/>
<rect x="144" y="109" width="5" height="18" fill="#6f4f33"/><rect x="207" y="109" width="5" height="18" fill="#6f4f33"/>
<rect x="148" y="84" width="30" height="16" fill="#1b1826"/><rect x="151" y="87" width="24" height="10" fill="#3a3550"/>
<rect x="186" y="90" width="14" height="10" fill="#ece3d2"/><rect x="189" y="85" width="8" height="5" fill="#ffffff"/></g>
<g data-actor="sam" style="cursor:pointer"><rect x="232" y="64" width="88" height="60" fill="transparent"/>
<g transform="translate(284,68)"><rect x="6" y="0" width="16" height="6" fill="#241a16"/><rect x="7" y="2" width="14" height="12" fill="#e8b884"/>
<rect x="7" y="2" width="4" height="12" fill="#c9925f"/><rect x="6" y="0" width="16" height="5" fill="#241a16"/>
<rect x="6" y="4" width="2" height="6" fill="#241a16"/><rect x="20" y="4" width="2" height="6" fill="#241a16"/>
<rect x="12" y="7" width="2" height="2" fill="#2a1c14"/><rect x="17" y="7" width="2" height="2" fill="#2a1c14"/>
<rect x="11" y="14" width="6" height="2" fill="#c9925f"/><rect x="4" y="16" width="20" height="20" fill="#5aa06a"/>
<rect x="4" y="16" width="6" height="20" fill="#427a50"/><rect x="11" y="16" width="6" height="4" fill="#ece3d2"/>
<rect x="0" y="18" width="4" height="14" fill="#427a50"/><rect x="24" y="18" width="4" height="14" fill="#5aa06a"/>
<rect x="0" y="32" width="4" height="4" fill="#c9925f"/><rect x="24" y="32" width="4" height="4" fill="#e8b884"/></g>
<rect x="238" y="126" width="76" height="4" fill="#000" fill-opacity=".2"/><rect x="238" y="100" width="76" height="6" fill="#b98a5a"/>
<rect x="238" y="106" width="76" height="3" fill="#98704a"/><rect x="242" y="109" width="5" height="18" fill="#7d5a3c"/>
<rect x="305" y="109" width="5" height="18" fill="#7d5a3c"/><rect x="246" y="84" width="30" height="16" fill="#1b1826"/>
<rect x="249" y="87" width="24" height="10" fill="#6fd0e0"/><rect x="249" y="87" width="24" height="3" fill="#a5e6f0"/></g>
<rect x="0" y="0" width="30" height="130" fill="#1a1626" fill-opacity=".14" style="pointer-events:none"/>
<g data-mark="1" transform="translate(90,48)" style="pointer-events:none"><rect x="0" y="0" width="22" height="14" fill="#ffe6b8"/>
<rect x="0" y="0" width="22" height="4" fill="#fff4dd"/><rect x="6" y="14" width="5" height="4" fill="#ffe6b8"/>
<rect x="4" y="6" width="3" height="3" fill="#7a5a41"/><rect x="9" y="6" width="3" height="3" fill="#7a5a41"/>
<rect x="14" y="6" width="3" height="3" fill="#7a5a41"/></g></svg>`,

counter: `<svg viewBox="0 0 360 130" shape-rendering="crispEdges" xmlns="http://www.w3.org/2000/svg">
<rect x="0" y="0" width="360" height="8" fill="#2a2136"/><rect x="0" y="8" width="360" height="34" fill="#5b4a63"/>
<rect x="0" y="42" width="360" height="32" fill="#50405a"/><rect x="0" y="74" width="360" height="14" fill="#463850"/>
<rect x="0" y="86" width="360" height="2" fill="#6d5b78"/>
<rect x="14" y="16" width="120" height="60" fill="#3d3147"/><rect x="18" y="20" width="112" height="16" fill="#6b5578"/>
<rect x="18" y="40" width="112" height="16" fill="#6b5578"/><rect x="18" y="60" width="112" height="14" fill="#6b5578"/>
<rect x="22" y="22" width="14" height="12" fill="#d98f6b"/><rect x="40" y="22" width="12" height="12" fill="#8fb4d9"/>
<rect x="56" y="22" width="16" height="12" fill="#c9b894"/><rect x="76" y="22" width="12" height="12" fill="#a8c4a0"/>
<rect x="92" y="22" width="14" height="12" fill="#d9694f"/><rect x="110" y="22" width="14" height="12" fill="#e8dfc8"/>
<rect x="22" y="42" width="16" height="12" fill="#a8c4a0"/><rect x="42" y="42" width="12" height="12" fill="#e8dfc8"/>
<rect x="58" y="42" width="14" height="12" fill="#d98f6b"/><rect x="76" y="42" width="16" height="12" fill="#8fb4d9"/>
<rect x="96" y="42" width="12" height="12" fill="#c9b894"/><rect x="112" y="42" width="14" height="12" fill="#d9694f"/>
<rect x="22" y="62" width="14" height="10" fill="#c9b894"/><rect x="40" y="62" width="16" height="10" fill="#d9694f"/>
<rect x="60" y="62" width="12" height="10" fill="#a8c4a0"/><rect x="76" y="62" width="14" height="10" fill="#e8dfc8"/>
<rect x="238" y="14" width="100" height="50" fill="#2a2136"/><rect x="242" y="18" width="92" height="42" fill="#bfe3f5"/>
<rect x="242" y="18" width="92" height="14" fill="#e3f1fb"/><rect x="284" y="18" width="4" height="42" fill="#2a2136"/>
<rect x="0" y="88" width="360" height="42" fill="#6b5240"/><rect x="0" y="104" width="360" height="2" fill="#573f30"/>
<rect x="0" y="122" width="360" height="2" fill="#573f30"/><rect x="120" y="88" width="2" height="42" fill="#573f30"/>
<rect x="264" y="88" width="2" height="42" fill="#573f30"/>
<g data-actor="clerk" style="cursor:pointer"><rect x="150" y="40" width="90" height="72" fill="transparent"/>
<g transform="translate(182,46)"><rect x="6" y="0" width="16" height="7" fill="#c9563f"/><rect x="7" y="3" width="14" height="12" fill="#eec08f"/>
<rect x="7" y="3" width="4" height="12" fill="#d19a6b"/><rect x="6" y="0" width="16" height="4" fill="#e06a4f"/>
<rect x="12" y="8" width="2" height="2" fill="#2a1c14"/><rect x="17" y="8" width="2" height="2" fill="#2a1c14"/>
<rect x="11" y="15" width="6" height="2" fill="#d19a6b"/><rect x="4" y="17" width="20" height="20" fill="#e8e2d6"/>
<rect x="4" y="17" width="6" height="20" fill="#c9c2b2"/><rect x="11" y="17" width="6" height="4" fill="#c9563f"/>
<rect x="0" y="19" width="4" height="14" fill="#c9c2b2"/><rect x="24" y="19" width="4" height="14" fill="#e8e2d6"/>
<rect x="0" y="33" width="4" height="4" fill="#d19a6b"/><rect x="24" y="33" width="4" height="4" fill="#eec08f"/></g>
<rect x="140" y="82" width="110" height="10" fill="#a97c4f"/><rect x="140" y="92" width="110" height="5" fill="#8a6440"/>
<rect x="140" y="97" width="110" height="20" fill="#7d5a3c"/><rect x="140" y="117" width="110" height="3" fill="#000" fill-opacity=".2"/>
<rect x="150" y="68" width="26" height="14" fill="#1b1826"/><rect x="153" y="71" width="20" height="8" fill="#7fd4e8"/>
<rect x="216" y="72" width="20" height="10" fill="#d9d2c4"/><rect x="220" y="66" width="12" height="6" fill="#e8e2d6"/></g>
<rect x="0" y="0" width="26" height="130" fill="#1a1626" fill-opacity=".12" style="pointer-events:none"/>
<g data-mark="1" transform="translate(182,26)" style="pointer-events:none"><rect x="0" y="0" width="22" height="14" fill="#ffe6b8"/>
<rect x="0" y="0" width="22" height="4" fill="#fff4dd"/><rect x="6" y="14" width="5" height="4" fill="#ffe6b8"/>
<rect x="4" y="6" width="3" height="3" fill="#7a5a41"/><rect x="9" y="6" width="3" height="3" fill="#7a5a41"/>
<rect x="14" y="6" width="3" height="3" fill="#7a5a41"/></g></svg>`,

street: `<svg viewBox="0 0 360 130" shape-rendering="crispEdges" xmlns="http://www.w3.org/2000/svg">
<rect x="0" y="0" width="360" height="46" fill="#8fc3e0"/><rect x="0" y="0" width="360" height="18" fill="#a9d4ea"/>
<rect x="0" y="30" width="360" height="8" fill="#7fb4d4"/>
<rect x="12" y="10" width="60" height="60" fill="#4e4256"/><rect x="16" y="16" width="12" height="12" fill="#f2d9a0"/>
<rect x="34" y="16" width="12" height="12" fill="#3b3348"/><rect x="52" y="16" width="12" height="12" fill="#f2d9a0"/>
<rect x="16" y="34" width="12" height="12" fill="#3b3348"/><rect x="34" y="34" width="12" height="12" fill="#f2d9a0"/>
<rect x="52" y="34" width="12" height="12" fill="#3b3348"/><rect x="16" y="52" width="12" height="12" fill="#f2d9a0"/>
<rect x="34" y="52" width="12" height="12" fill="#3b3348"/>
<rect x="84" y="22" width="54" height="48" fill="#5d4a52"/><rect x="88" y="28" width="46" height="16" fill="#c9563f"/>
<rect x="88" y="50" width="20" height="20" fill="#f2d9a0"/><rect x="114" y="50" width="20" height="20" fill="#3b3348"/>
<rect x="248" y="6" width="70" height="64" fill="#46405c"/><rect x="254" y="14" width="14" height="14" fill="#f2d9a0"/>
<rect x="276" y="14" width="14" height="14" fill="#3b3348"/><rect x="298" y="14" width="14" height="14" fill="#f2d9a0"/>
<rect x="254" y="36" width="14" height="14" fill="#3b3348"/><rect x="276" y="36" width="14" height="14" fill="#f2d9a0"/>
<rect x="298" y="36" width="14" height="14" fill="#f2d9a0"/><rect x="254" y="56" width="58" height="14" fill="#2f2a40"/>
<rect x="0" y="70" width="360" height="10" fill="#7d7486"/><rect x="0" y="80" width="360" height="50" fill="#4a4556"/>
<rect x="0" y="80" width="360" height="3" fill="#5e5870"/>
<rect x="20" y="100" width="40" height="4" fill="#c9c2b2"/><rect x="100" y="100" width="40" height="4" fill="#c9c2b2"/>
<rect x="180" y="100" width="40" height="4" fill="#c9c2b2"/><rect x="260" y="100" width="40" height="4" fill="#c9c2b2"/>
<rect x="152" y="18" width="6" height="52" fill="#3b3348"/><rect x="144" y="12" width="22" height="8" fill="#2f2a40"/>
<rect x="147" y="20" width="16" height="5" fill="#ffd79a"/>
<g data-actor="passerby" style="cursor:pointer"><rect x="180" y="30" width="70" height="55" fill="transparent"/>
<g transform="translate(206,38)"><rect x="6" y="0" width="16" height="7" fill="#6b4a3a"/><rect x="7" y="3" width="14" height="12" fill="#e8b884"/>
<rect x="7" y="3" width="4" height="12" fill="#c9925f"/><rect x="12" y="8" width="2" height="2" fill="#2a1c14"/>
<rect x="17" y="8" width="2" height="2" fill="#2a1c14"/><rect x="11" y="15" width="6" height="2" fill="#c9925f"/>
<rect x="4" y="17" width="20" height="20" fill="#7a5f9c"/><rect x="4" y="17" width="6" height="20" fill="#5f4a7d"/>
<rect x="0" y="19" width="4" height="14" fill="#5f4a7d"/><rect x="24" y="19" width="4" height="14" fill="#7a5f9c"/>
<rect x="0" y="33" width="4" height="4" fill="#c9925f"/><rect x="24" y="33" width="4" height="4" fill="#e8b884"/>
<rect x="6" y="37" width="7" height="12" fill="#3b3348"/><rect x="15" y="37" width="7" height="12" fill="#2f2a40"/></g>
<rect x="200" y="88" width="34" height="4" fill="#000" fill-opacity=".22"/></g>
<rect x="0" y="0" width="26" height="130" fill="#1a1626" fill-opacity=".1" style="pointer-events:none"/>
<g data-mark="1" transform="translate(206,18)" style="pointer-events:none"><rect x="0" y="0" width="22" height="14" fill="#ffe6b8"/>
<rect x="0" y="0" width="22" height="4" fill="#fff4dd"/><rect x="6" y="14" width="5" height="4" fill="#ffe6b8"/>
<rect x="4" y="6" width="3" height="3" fill="#7a5a41"/><rect x="9" y="6" width="3" height="3" fill="#7a5a41"/>
<rect x="14" y="6" width="3" height="3" fill="#7a5a41"/></g></svg>`,

room: `<svg viewBox="0 0 360 130" shape-rendering="crispEdges" xmlns="http://www.w3.org/2000/svg">
<rect x="0" y="0" width="360" height="8" fill="#231d2e"/><rect x="0" y="8" width="360" height="32" fill="#3f3a52"/>
<rect x="0" y="40" width="360" height="30" fill="#383248"/><rect x="0" y="70" width="360" height="18" fill="#2f2a3e"/>
<rect x="0" y="86" width="360" height="2" fill="#514a68"/>
<rect x="30" y="16" width="86" height="58" fill="#231d2e"/><rect x="34" y="20" width="78" height="50" fill="#2b3a52"/>
<rect x="34" y="20" width="78" height="16" fill="#3a4d6b"/><rect x="70" y="20" width="4" height="50" fill="#231d2e"/>
<rect x="34" y="42" width="78" height="4" fill="#231d2e"/><rect x="84" y="26" width="10" height="10" fill="#f2ecc9"/>
<rect x="40" y="52" width="14" height="6" fill="#3f5472"/>
<rect x="248" y="18" width="70" height="50" fill="#4a3f5c"/><rect x="252" y="22" width="62" height="42" fill="#6b5a7d"/>
<rect x="258" y="28" width="16" height="14" fill="#e8dfc8"/><rect x="280" y="26" width="14" height="12" fill="#d98f6b"/>
<rect x="258" y="48" width="20" height="12" fill="#a8c4a0"/><rect x="284" y="46" width="16" height="14" fill="#8fb4d9"/>
<rect x="0" y="88" width="360" height="42" fill="#6b5240"/><rect x="0" y="104" width="360" height="2" fill="#573f30"/>
<rect x="0" y="122" width="360" height="2" fill="#573f30"/><rect x="96" y="88" width="2" height="42" fill="#573f30"/>
<rect x="230" y="88" width="2" height="42" fill="#573f30"/>
<rect x="20" y="92" width="120" height="30" fill="#7a5f9c"/><rect x="20" y="92" width="120" height="6" fill="#8f74b0"/>
<rect x="24" y="82" width="40" height="12" fill="#e8e2d6"/><rect x="20" y="118" width="120" height="4" fill="#000" fill-opacity=".2"/>
<g data-actor="phone" style="cursor:pointer"><rect x="176" y="50" width="90" height="72" fill="transparent"/>
<rect x="186" y="84" width="76" height="8" fill="#a97c4f"/><rect x="186" y="92" width="76" height="4" fill="#8a6440"/>
<rect x="192" y="96" width="5" height="22" fill="#6f4f33"/><rect x="251" y="96" width="5" height="22" fill="#6f4f33"/>
<rect x="186" y="118" width="76" height="4" fill="#000" fill-opacity=".2"/>
<rect x="206" y="56" width="24" height="30" fill="#1b1826"/><rect x="209" y="60" width="18" height="22" fill="#7fd4e8"/>
<rect x="209" y="60" width="18" height="6" fill="#a5e6f0"/><rect x="214" y="83" width="8" height="2" fill="#3a3550"/>
<rect x="240" y="76" width="14" height="10" fill="#d9694f"/><rect x="254" y="78" width="4" height="5" fill="#d9694f"/>
<rect x="196" y="44" width="6" height="6" fill="#ffd79a" fill-opacity=".7"/><rect x="234" y="44" width="6" height="6" fill="#ffd79a" fill-opacity=".7"/>
<rect x="215" y="38" width="6" height="6" fill="#ffd79a" fill-opacity=".9"/></g>
<rect x="0" y="0" width="26" height="130" fill="#1a1626" fill-opacity=".14" style="pointer-events:none"/>
<g data-mark="1" transform="translate(208,20)" style="pointer-events:none"><rect x="0" y="0" width="22" height="14" fill="#ffe6b8"/>
<rect x="0" y="0" width="22" height="4" fill="#fff4dd"/><rect x="6" y="14" width="5" height="4" fill="#ffe6b8"/>
<rect x="4" y="6" width="3" height="3" fill="#7a5a41"/><rect x="9" y="6" width="3" height="3" fill="#7a5a41"/>
<rect x="14" y="6" width="3" height="3" fill="#7a5a41"/></g></svg>`
},

/* ── 角色（mark 是對話泡泡的座標）───────────────── */
actors: {
  david:{label:'DAVID', mark:[90,48]},
  priya:{label:'PRIYA', mark:[168,52]},
  sam:{label:'SAM', mark:[284,48]},
  clerk:{label:'店員', mark:[182,26]},
  passerby:{label:'路人', mark:[206,18]},
  phone:{label:'電話', mark:[208,20]}
},

/* ── 50 集 ────────────────────────────────────────── */
episodes: [

/* ═══ 單元一 · 抵達（1–10）L1 → L2 ═══ */
{id:1,scene:'counter',actor:'clerk',stage:'L1',label:'店員',
n:'你出差的第一個早上。\n你點了熱拿鐵，\n拿到手的卻是冰的。\n店員已經在叫下一位了。',
goal:'換成熱的，不要拖到後面的人',w:['order','hot / iced','mine','wrong','instead'],
o:[
['Excuse me, I ordered it hot.','ok','十秒解決','店員看了一眼杯子：\n「Oh sorry! Let me make\nyou a hot one.」','直接講你點的是什麼，他一秒就知道哪裡出錯、也知道怎麼補。給對方可以執行的資訊，不是給他一個問題。'],
['Excuse me, this is not mine.','mid','他去找別人的杯子','店員：「Whose is it?」\n他開始翻櫃台上其他杯子。','not mine 的意思是「拿錯人了」，他會往杯子給錯客人的方向想。你的問題是品項做錯。'],
['Excuse me, something is wrong.','mid','他得問你三個問題','店員：「What\'s wrong?」\n你在一堆人面前\n解釋了半天。','something is wrong 在中文很自然，在英文等於什麼都沒說。對方只能靠問問題把資訊挖出來。'],
['Excuse me, you made it wrong.','bad','氣氛變了','店員的笑容收起來：\n「...Okay.」\n他換了一杯，沒再說話。','you made it 把焦點放在誰的錯。同樣換一杯，講事實和講責任會得到完全不同的臉色。']]},

{id:2,scene:'counter',actor:'clerk',stage:'L1',label:'店員',
n:'你在超市想買醬油，\n繞了三圈找不到。\n有個店員正在補貨。',
goal:'問到它在哪裡',w:['aisle','shelf','soy sauce','looking for','section'],
o:[
['Excuse me, where is the soy sauce?','ok','他直接指給你看','店員頭也沒抬：\n「Aisle five, bottom shelf.」\n你走過去就找到了。','問句直接指向你要的答案：位置。where 這個字逼出一個地點，對方沒有別的答法。'],
['Excuse me, do you have soy sauce?','mid','他說有，然後繼續補貨','店員：「Yeah, we do.」\n然後就低頭繼續了。','do you have 問的是有沒有，對方誠實回答了。你要的是位置，就要問位置。'],
['Excuse me, I want to buy soy sauce.','mid','他不知道你要他做什麼','店員抬頭看你，\n等了一秒：「...Okay?」','I want to buy 是在陳述你的計畫，不是求助。中文可以靠語氣暗示，英文需要一個真的問句。'],
['Excuse me, this store is confusing.','bad','他只能陪笑','店員笑了一下：\n「Sorry about that.」\n然後繼續補貨。','抱怨會得到道歉，不會得到答案。想要什麼就直接問什麼。']]},

{id:3,scene:'street',actor:'passerby',stage:'L1',label:'司機',
n:'你上了計程車，\n要去火車站，\n只剩二十分鐘。\n司機問：「Where to?」',
goal:'讓他知道去哪，也知道你在趕',w:['in a hurry','take me to','on time','traffic','drop off'],
o:[
['Train station, please. I\'m in a hurry.','ok','他抄了小路','司機看了後照鏡一眼：\n「No problem.」\n你提早八分鐘到。','先給目的地，再給關鍵條件。in a hurry 是司機聽得懂又不會被冒犯的請求。'],
['Please take me to the train station.','mid','他慢慢開','司機點頭上路，\n紅燈時滑手機。\n你到站只剩三分鐘。','沒有錯，只是少講了最重要的一件事。司機不知道你在趕，就會用一般速度開。'],
['Do you know the way to the station?','mid','他有點被冒犯','司機挑了一下眉：\n「...Yes.」\n一路無話。','問對方知不知道路，在英文裡像在質疑他的專業。要去哪直接講就好。'],
['Train station. Please drive fast.','bad','他開始跟你解釋','司機：「I can\'t drive fast\nin this traffic, sir.」','drive fast 是要求他違規，他只能拒絕。講「我在趕」讓他自己決定怎麼幫你。']]},

{id:4,scene:'room',actor:'phone',stage:'L1',label:'房東',
n:'你要租兩個月的房子。\n房東帶你看完一圈，\n停在客廳問：\n「So, what do you think?」',
goal:'問清楚每月實際要付多少',w:['rent','include','utilities','deposit','monthly'],
o:[
['Does the rent include water and power?','ok','他一次講清楚','房東：「Water yes,\nelectricity no. About\nthirty a month.」','問一個有明確答案的問題。include 讓對方只能回答含或不含，沒有模糊空間。'],
['Is there any other fee I should know?','mid','他說沒有','房東：「No, it\'s all in\nthe contract.」\n第一個月帳單多了兩筆。','any other fee 太籠統，對方可以誠實地說沒有——因為那些費用在他眼裡不算 other。'],
['I want to know about the money.','mid','他不知道你在問什麼','房東停頓了一下：\n「You mean the rent?」','the money 在英文裡太空泛。中文的「費用的部分」可以靠語境理解，英文需要指名哪一筆。'],
['The rent is a little bit expensive.','bad','他進入防守','房東：「This is the\nmarket price around here.」\n接下來十分鐘都在講地段。','還沒問清楚就先評價價格，對方會先替自己辯護。先把資訊問完，議價是後面的事。']]},

{id:5,scene:'counter',actor:'clerk',stage:'L1',label:'店員',
n:'你兩天前買的耳機，\n左邊完全沒聲音。\n收據還在。\n你回到店裡。',
goal:'換一副能用的',w:['return','exchange','receipt','refund','warranty'],
o:[
['Excuse me, the left side has no sound.','ok','他當場換給你','店員試了三秒：\n「Yeah, it\'s dead. Do you\nhave the receipt?」','具體描述故障，店員可以立刻自己驗證。能當場確認的問題，就會當場解決。'],
['Excuse me, I want to return this.','mid','他開始查政策','店員：「Okay, was there\na problem?」\n他去查退貨規定十分鐘。','先講你要什麼、不講為什麼，會讓對方進入流程模式。先講問題，往往能跳過流程。'],
['Excuse me, I have a problem with this.','mid','他得一步步問','店員：「What kind of\nproblem?」\n你們來回問答四輪。','a problem 是萬用詞，也因此不帶任何資訊。壞在哪裡就講哪裡。'],
['Excuse me, this is very bad quality.','bad','變成品牌問題','店員：「You\'d have to\ncontact the manufacturer.」\n你被推去走保固。','批評品質等於把矛頭指向製造商，店員就有理由把你轉出去。']]},

{id:6,scene:'counter',actor:'clerk',stage:'L2',label:'行員',
n:'你要開一個 account\n才能收薪水。\n行員抬頭問：\n「What can I do for you?」',
goal:'讓他知道你要開戶，不要繞圈子',w:['account','open an account','identification','form','sign'],
o:[
['Hi, I\'d like to open an account.','ok','十分鐘辦完','行員拿出表格：\n「Sure. Do you have\nyour passport?」','一句話講完你要什麼。銀行的服務是分流的，講對名稱就直接進對的流程。'],
['Hi, I want to save money here.','mid','他愣了一下','行員：「You mean a\nsavings account?」\n你得再確認一次。','存錢是目的，開戶是手續。英文的服務窗口聽的是手續名稱。'],
['Hi, can I have a bank card?','mid','你跳過了第一步','行員：「Do you have an\naccount with us?」','直接講最後一步，對方會以為你前面的步驟都完成了。'],
['Hi, is it difficult to open one?','bad','你們互看了三秒','行員笑：「Not really.」\n然後等你說下一句。','問難不難只會得到一句安慰，不會讓事情開始。']]},

{id:7,scene:'counter',actor:'clerk',stage:'L2',label:'櫃檯',
n:'你要寄一個 package\n回台灣，\n最在意的是多久會到。\n櫃檯把箱子放上磅秤。',
goal:'問到最快的到貨時間',w:['package','deliver','express','postage','weigh'],
o:[
['How fast can this get to Taiwan?','ok','他直接報兩個方案','「Express, five days.\nStandard, three weeks.」\n你當場就能選。','how fast 逼出時間，而且對方會自動把選項一起給你。'],
['I want to send this to Taiwan.','mid','他用了最慢的方案','他點頭開始貼標籤。\n你想改時已經貼好了。','只講目的地，對方會用預設選項。在意什麼就要說出來。'],
['This package, Taiwan, how many days?','mid','他停頓了兩秒','他聽懂了，\n但反應慢了半拍。','斷詞式英文對方猜得出來，但每次都會讓對話卡一下。'],
['Is the post office very slow here?','bad','他笑了一下','「Depends.」\n然後繼續秤重。','抱怨會換來敷衍，不會換來答案。']]},

{id:8,scene:'counter',actor:'clerk',stage:'L2',label:'店員',
n:'店員一直推薦最貴的\nunlimited plan。\n你只是要能查地圖、\n傳訊息而已。',
goal:'拿到夠用又便宜的方案',w:['plan','monthly fee','data','contract','unlimited'],
o:[
['I just need something simple and cheap.','ok','他直接跳到基本款','店員收起型錄：\n「Okay, this one\'s\nfifteen a month.」','同時給出兩個條件，對方就沒有推銷空間了。'],
['I want the cheapest one you have.','mid','流量兩天就用完','你拿到最便宜的，\n但只有 1GB。','只講價格，就會得到只符合價格的東西。便宜和夠用是兩件事。'],
['I don\'t want to spend too much.','mid','他反問你','店員：「How much is\ntoo much?」','too much 是相對詞，對方無法據此推薦。要給範圍或給需求。'],
['This plan is too expensive for me.','bad','他開始說服你','店員說明為什麼划算。\n五分鐘過去，你還在聽。','嫌貴會觸發對方的說服模式。講你要什麼，比講你不要什麼有效。']]},

{id:9,scene:'room',actor:'phone',stage:'L2',label:'診所',
n:'你 sore throat 痛了三天。\n診所接起電話：\n「Good morning,\nhow can I help?」',
goal:'這週內排到，並讓對方知道狀況',w:['appointment','available','symptom','sore throat','schedule'],
o:[
['I have a sore throat. Anything this week?','ok','一輪就約好','「We have Thursday\nat four. Does that work?」','症狀加時間範圍，對方一次就能判斷要排哪個診次。'],
['I want to see a doctor this week.','mid','你得再講一次','「Sure, what\'s the\nproblem?」','預約系統需要症狀來分診。少講那一項，對方一定會問。'],
['Is the doctor free? I feel very bad.','mid','他緊張起來','「Do you need\nemergency care?」','very bad 在醫療語境會被當成緊急訊號。症狀要講具體的那個詞。'],
['I need to see the doctor right now.','bad','你被推去急診','「If it\'s urgent, please\ngo to the ER.」\n你等了三小時。','誇大急迫不會插隊，只會被轉到更貴更慢的地方。']]},

{id:10,scene:'room',actor:'phone',stage:'L2',label:'櫃檯',
n:'晚上十一點，你住 502，\nair conditioning\n吹出來是溫的。\n你打給 front desk。',
goal:'讓人來處理，今晚能睡',w:['air conditioning','front desk','fix','room service','complain'],
o:[
['The air conditioning in 502 isn\'t cold.','ok','十五分鐘後有人來','「I\'ll send someone up\nright away.」\n他們換了一台。','房號、哪個設備、什麼症狀。三個資訊到齊，對方不用問任何問題就能派人。'],
['The air conditioner is not working well.','mid','他問了你兩輪','「Which room? What\nexactly is wrong?」','not working well 沒指出症狀，維修人員也不知道要帶什麼工具。'],
['Excuse me, I have a small problem.','mid','你還是得從頭講','「Certainly, what\'s\nthe problem?」','中文習慣先鋪陳再進主題，英文的服務電話習慣第一句就講事情。'],
['This hotel is not good. I can\'t sleep.','bad','他先處理你的情緒','櫃檯開始道歉，\n講了一長串。\n冷氣還沒進到維修流程。','批評整間飯店，對方只能先處理你的情緒，處理不了你的冷氣。']]},

/* ═══ 單元二 · 辦公室（11–20）L3 鋪墊期 ═══ */
{id:11,scene:'office',actor:'david',stage:'L3',
n:'主管把你帶到辦公室中間：\n「Everyone, this is our\nnew team member.」\n八個人轉頭看你。',
goal:'Make sure they remember your name.',w:['join','colleague','department','arrive','since'],
o:[
['Hi, I\'m Kevin. I just joined today.','ok','名字被記住了','三個人立刻說\n「Welcome, Kevin!」\n有人問你坐哪。','名字放最前面，而且只給一個資訊。第一次見面說太多，別人一句都記不住。'],
['Hello everyone, I am the new staff.','mid','沒有人知道你叫什麼','大家點頭微笑，\n然後就散了。','the new staff 既不是你的名字，也不是正確用法（staff 指全體員工）。'],
['Hi everyone. Please take care of me.','mid','場面有點奇怪','有人愣了一下\n才回「Uh, sure.」','「請多指教」是中文和日文的社交慣例，英文沒有對應說法。'],
['Hello. My English is not very good.','bad','期待值被你自己設定了','之後大家跟你講話\n都放得很慢，\n也很少找你聊天。','第一句就設定期待值，別人就會照那個期待對待你，而且會持續很久。']]},

{id:12,scene:'office',actor:'priya',stage:'L3',
n:'你要印雙面，\n按了五次都出單面。\nPriya 正好走過來拿資料。',
goal:'Ask how to print on both sides.',w:['copier','double-sided','paper jam','try','again'],
o:[
['Priya, how do I print double-sided?','ok','五秒解決','Priya 伸手按了兩個鍵：\n「This one, then this one.」','叫名字讓她知道在問她，問題縮到一個按鍵。越小的問題越容易被幫。'],
['Excuse me, how does this machine work?','mid','她從頭教你整台','你們花了四分鐘。','問題開得太大，對方只能從頭講起。你要的其實只有一個功能。'],
['Sorry to bother you, I have a question.','mid','前面那句是空轉的','Priya 等你講重點，\n你才開始描述問題。','中文的鋪陳在英文裡是多餘的一拍。要問就直接問，這不算沒禮貌。'],
['This machine is so old and slow.','bad','她笑著走掉了','「Yeah, it is.」\n你還是不會印雙面。','抱怨聽起來不像求助，對方會以為你只是在閒聊。']]},

{id:13,scene:'office',actor:'priya',stage:'L3',
n:'你寫了一封信要寄給客戶，\n不太確定語氣對不對。\nPriya 剛好不忙。',
goal:'Get her to check it quickly.',w:['draft','proofread','feedback','send','check'],
o:[
['Could you take a quick look at this?','ok','三十秒就好了','Priya：「Sure.」\n她改了兩個字：\n「Make this part shorter.」','quick 明確界定了你要占用的時間，對方很容易答應。'],
['Can you check my English for me?','mid','她只看文法','她逐字看了十分鐘，\n但沒注意到語氣\n才是問題。','你要的是「這樣講得體嗎」，講成 check my English 會得到文法檢查。'],
['You have time to check this email?','mid','聽起來有點催','Priya 停下來：\n「Uh, now?」','少了 do 的問句聽起來很急。口語可以省略，但對不熟的同事會顯得唐突。'],
['My English is bad. Please help me.','bad','她進入安慰模式','Priya 說「It\'s fine!」\n然後隨便看了一下\n就說沒問題。','自貶會讓對方進入安慰模式，而不是校對模式。你要的意見反而拿不到。']]},

{id:14,scene:'office',actor:'phone',stage:'L3',label:'電話',
n:'電話響，你接起來。\n對方：「Hi, is David there?」\nDavid 出去開會了，\n兩小時後回來。',
goal:'Take the message so David gets it.',w:['take a message','out of the office','call back','leave','back'],
o:[
['He\'s out. Can I take a message?','ok','事情接住了','「Yes, please — tell him\nthe samples arrived.」','兩句話做完兩件事：說明現況、接手處理。這是英文接電話的標準動作。'],
['He is not here. Please call again.','mid','那筆訂單跑掉了','對方：「...Okay.」\n他沒有再打來。','please call again 把責任全丟回對方，聽起來像在趕人。'],
['Sorry, I don\'t know where he is.','mid','對方要找別人講','「Is there someone else\nI can talk to?」','不知道同事在哪，會讓對方覺得這間公司內部沒在溝通。'],
['David? I think he went out somewhere.','bad','對話卡住','「Do you know when\nhe\'ll be back?」\n你答不出來。','I think 加 somewhere，兩個模糊詞疊在一起，等於沒有給任何資訊。']]},

{id:15,scene:'street',actor:'passerby',stage:'L3',label:'訊息',
n:'會議兩點開始，\n現在一點五十五分，\n你還在捷運上，\n最快兩點十五分到。',
goal:'Tell them how late you will be.',w:['running late','on my way','start','wait','traffic'],
o:[
['Running late. I\'ll be there by 2:15.','ok','會議照開','David 回：「No problem,\nwe\'ll start with the\nbudget part.」','給了明確時間點，別人就能重新安排議程。遲到不是問題，讓人無法規劃才是。'],
['Sorry, I will be late for the meeting.','mid','八個人在等','David 回：「How late?」\n你在車上又打了一次字。','late 沒有長度。五分鐘和四十分鐘要做的決定完全不同。'],
['Sorry! Sorry! I am coming very soon!','mid','會議變得很散','大家等了二十分鐘，\n有人開始滑手機。','道歉的字數多，資訊的字數少。very soon 不能拿來安排事情。'],
['The traffic here is really terrible.','bad','最重要的部分你錯過了','David 沒回。\n你到的時候會議\n已經開完重點了。','先講原因不講影響，對方會覺得你在找藉口，而且還是不知道要不要等你。']]},

{id:16,scene:'office',actor:'sam',stage:'L3',
n:'你的筆電充電器忘在家，\n電量剩 8%。\nSam 桌上有一個同型號的，\n他自己的插在牆上。',
goal:'Borrow it, and say when you will give it back.',w:['borrow','charger','spare','return','plug in'],
o:[
['Sam, can I borrow your charger till three?','ok','他直接推過來','Sam：「Sure, I don\'t\nneed it till later.」','加上歸還時間，這件事就變成一筆有期限的小事，對方答應的成本降到最低。'],
['Sam, could I use your charger please?','mid','他默默承擔了','三點他要用時\n不好意思開口，\n自己去茶水間找。','沒有期限的借用會把不確定性留給對方。他不會拒絕，但會默默承擔。'],
['Sam, I forgot my charger at home.','mid','他只回了一句喔不','Sam：「Oh no.」\n然後回頭繼續做事。','中文習慣先講困境、等對方主動提供。英文裡陳述困境就只是陳述困境。'],
['Sam, you\'re not using your charger, right?','bad','他改口說他要用','Sam 頓了一下：\n「Uh, I might need it\nlater actually.」','先替對方認定「你不需要」，等於把拒絕的空間堵住，對方會本能地想拿回來。']]},

{id:17,scene:'office',actor:'priya',stage:'L3',
n:'Priya 和兩個同事\n站在你桌邊：\n「We\'re getting lunch —\ncoming?」\n但你十二點半有電話。',
goal:'Say no today, but keep the door open.',w:['join','next time','call','later','maybe'],
o:[
['I can\'t today. Call at 12:30. Next time?','ok','隔週她又來問你','Priya：「Sure! We usually\ngo around noon.」\n這次你去了。','三段做完三件事：拒絕、給理由、留下次。最後兩個字讓這次拒絕不會被記成「他不想來」。'],
['Sorry, I can\'t. I am very busy today.','mid','之後兩週沒人問你','他們說「No worries」\n就走了。','very busy 是萬用理由，聽起來像客套。連續用兩次，對方就不會再問。'],
['Maybe. I will tell you later, okay?','mid','他們在電梯口等你','等了三分鐘才走。\n你在講電話，\n完全不知道。','maybe 在英文是「還沒決定」。對方會為這個 maybe 留位置、留時間。'],
['Thank you, but please go without me.','bad','距離被拉開了','三個人愣了一下才走。\n那句話太正式，\n像在跟客戶說話。','對同事用過度禮貌的句型會製造距離。同事之間的拒絕應該是輕的。']]},

{id:18,scene:'office',actor:'priya',stage:'L3',
n:'到職第二天，\n你輸入信箱一直顯示錯誤。\n不知道公司是誰在管系統。\n辦公室只有 Priya 在。',
goal:'Find out who can give you an account.',w:['account','log in','set up','password','IT department'],
o:[
['Priya, who sets up accounts for new people?','ok','二十分鐘就開好了','Priya：「That\'s IT —\nI\'ll send you\nMarco\'s email.」','你問的不是怎麼解決，而是誰負責。在不熟的組織裡，找對人比自己排除問題快十倍。'],
['Priya, I cannot log in to the system.','mid','兩個人一起卡住','她幫你試了五分鐘：\n「Maybe IT hasn\'t\nset you up yet.」','描述症狀，對方就會進入除錯模式。但新人打不開系統，通常根本還沒開帳號。'],
['Priya, do you know what my password is?','mid','空氣尷尬了兩秒','Priya 困惑：\n「Your password? No…」','密碼是只有你自己知道的東西。這個問法會讓對方不知道該怎麼回答。'],
['Priya, this system does not work at all.','bad','她回去做自己的事','Priya 笑了一下：\n「It works for me.」','批評系統會得到一句反駁，不會得到帳號。']]},

{id:19,scene:'office',actor:'priya',stage:'L3',
n:'主管要你用報表軟體\n做一份月報，\n你從來沒開過。\nPriya 很熟，但今天挺趕。',
goal:'Get her to show you once, not twice.',w:['show','step','save','click','file'],
o:[
['Could you show me once? I\'ll write it down.','ok','四分鐘結束','Priya 拉了椅子過來，\n操作一次讓你抄。\n之後你沒再問過。','once 界定了次數，write it down 讓對方知道你不會再來問第二次。'],
['Priya, can you teach me this software?','mid','拖到下班','Priya 面有難色：\n「The whole thing?\nThat takes a while.」','teach the software 是一個沒有邊界的請求。忙的人聽到沒有邊界的請求，第一反應是延後。'],
['Priya, I really don\'t understand this.','mid','你被安慰了','「It\'s confusing at first,\nyou\'ll get it.」\n然後她繼續做事。','表達挫折會換來安慰，不會換來教學。要幫忙就要提出一個具體的動作。'],
['Priya, is this software always so hard?','bad','對話結束了','Priya 聳肩：\n「You get used to it.」\n月報還是不會做。','抱怨工具會讓對話停在閒聊，沒有任何人會因此開始教你。']]},

{id:20,scene:'office',actor:'david',stage:'L3',
n:'五點半，你手上的事\n都做完了。\nDavid 還在講電話，\n兩個同事也還在位子上。',
goal:'Leave without seeming rude.',w:['finish','anything else','head home','tomorrow','see you'],
o:[
['I\'m done for today. Anything else before I go?','ok','準時走，沒人覺得奇怪','David 抬頭比了 OK：\n「Nope, see you\ntomorrow.」','先說明狀態，再給對方一個最後叫住你的機會。之後準時下班就成了慣例。'],
['Okay everyone, see you tomorrow!','mid','有件事沒交代','隔天 David 問：\n「Did you get the file\nout yesterday?」','直接道別沒有留下確認的縫隙。新人的前兩週特別需要那一句 anything else。'],
['Sorry, can I go home now, please?','mid','你被當小朋友','David：「Of course\nyou can.」\n之後他對你總帶著\n照顧的語氣。','請求許可會把自己放到下位。做完該做的事就可以走，這不需要批准。'],
['It\'s five thirty. My work time is finished.','bad','這句話被記住了','沒有人說什麼，\n但辦公室安靜了一下。','搬出時間規定等於預設對方會阻止你。還沒發生的衝突不用先擺出防禦姿態。']]},

/* ═══ 單元三 · 處理麻煩（21–30）L3 → L4 ═══ */
{id:21,scene:'room',actor:'phone',stage:'L3',label:'房東',
n:'你租的房子從週一開始\n就沒熱水，今天週三。\n你傳訊息給房東。',
goal:'Get someone to come today.',w:['landlord','repair','water heater','broken','since'],
o:[
['There\'s been no hot water since Monday.','ok','當天下午有人來','房東：「Since Monday?\nI\'ll call the plumber now.」','since Monday 把「已經三天」講清楚了。時間長度是製造急迫感最有效的方式，而且不帶情緒。'],
['The hot water is broken. Please fix it.','mid','三天沒消息','房東：「I\'ll look\ninto it.」','命令句會讓對方本能地放慢速度。而且沒講多久了，他不知道這件事有多急。'],
['Sorry to trouble you, something is wrong.','mid','來回傳了五則訊息','房東：「What\'s wrong?」\n才講到熱水器。','鋪陳一句、模糊一句，兩句話都沒有帶到事情本身。'],
['This apartment has many problems.','bad','熱水還是沒有','房東回了一長串，\n解釋這棟樓的狀況。','把單一故障升級成整體批評，對方會開始辯護，而不是開始修理。']]},

{id:22,scene:'office',actor:'phone',stage:'L3',label:'客戶',
n:'你跟客戶約好週四開會，\n但主管臨時要你出差。\n週五你有空。',
goal:'Move the meeting to Friday.',w:['reschedule','move','available','instead','confirm'],
o:[
['Could we move Thursday to Friday instead?','ok','一則訊息就搞定','客戶：「Friday works.\nSame time?」','同時給了取消哪天和改成哪天。對方只要回是或不是，不用自己想。'],
['Thursday doesn\'t work. When are you free?','mid','來回兩輪','客戶得翻自己的行事曆，\n回了三個時段。','把安排的工作推回給對方。是你要改期，就該由你提方案。'],
['I cannot come on Thursday. Sorry.','mid','事情懸在那裡','客戶：「Okay. So when?」\n你得再傳一次。','只取消不提替代，這個會議就從行事曆上消失了。'],
['Something happened, so Thursday is out.','bad','他改跟你同事聯絡','客戶回了個 OK，\n但語氣明顯冷掉。','something happened 什麼都沒說，對方會自行腦補——通常補成「他有更重要的事」。']]},

{id:23,scene:'room',actor:'phone',stage:'L3',label:'餐廳',
n:'你訂了今晚六人的位子，\n但兩個朋友臨時不來。\n現在下午四點。',
goal:'Change the booking from six to four.',w:['reservation','book','party of','cancel','change'],
o:[
['We booked six, but only four are coming.','ok','沒有額外費用','店家：「No problem,\nI\'ll change it to four.」','舊資訊和新資訊放在同一句，對方一次就能改。這是所有「更改預約」的通用句型。'],
['We cannot come tonight. Sorry about this.','mid','訂位被整個取消','晚上你們四個人\n在外面排隊四十分鐘。','人數變了不等於不去了。講錯動作，對方就會執行錯的動作。'],
['Hello, about tonight… some changes.','mid','你又解釋了一輪','店家：「What kind\nof changes?」','先預告有變更、再講變更內容，是中文的節奏。英文習慣把結論放第一句。'],
['Two people cancelled. It\'s not my fault.','bad','事情還是沒改','店家困惑：\n「...Okay?」\n氣氛怪怪的。','對方根本沒有在怪你。先自我防衛會讓一件小事變得緊張。']]},

{id:24,scene:'counter',actor:'clerk',stage:'L3',label:'櫃檯',
n:'轉盤上的行李都拿光了，\n你的沒出來。\n你搭的是 BR15。\n櫃檯有一個人。',
goal:'Get them to start looking now.',w:['luggage','baggage claim','flight number','find','lost'],
o:[
['My bag didn\'t arrive on flight BR15.','ok','五分鐘就找到了','他立刻查：「BR15…\nCan I see your tag?」','班機編號是他們查詢的唯一入口。少了它，前面三分鐘都在問基本資料。'],
['My bag is not here. What happened?','mid','你得從頭講一遍','他：「Which flight, sir?」','what happened 問的是一個他還不知道答案的問題。要先給資料，才能得到答案。'],
['Excuse me, I have a luggage problem.','mid','三輪對話才講到班機','他抬頭等你繼續。','a problem 是萬用詞，也因此不含任何可以動作的資訊。'],
['Your airline lost my luggage again.','bad','沒有人幫你加快','他的態度變得\n很公事公辦。','指控加上 again，會把一個原本願意幫你的人變成防守方。']]},

{id:25,scene:'street',actor:'passerby',stage:'L3',label:'路人',
n:'你要去 Baker Street 25 號，\n但走出捷運站\n完全分不清方向。\n還剩五分鐘。',
goal:'Ask for the way, and be quick.',w:['get to','turn left / right','block','straight','near'],
o:[
['Excuse me, where\'s Baker Street from here?','ok','三分鐘就到了','他指了一下：\n「Two blocks straight,\nthen turn left.」','from here 這三個字讓對方知道要給的是「從這裡出發」的路線，不是地址。'],
['Excuse me, do you know Baker Street?','mid','他繼續等公車','他：「Yeah.」\n你還是不知道往哪走。','do you know 問的是知不知道，對方誠實回答了。要方向就要問方向。'],
['Excuse me, I am lost. Help me.','mid','你得先解釋自己沒事','他有點警戒：\n「Uh… are you okay?」','I am lost 加 help me 在英文裡的戲劇性比中文強得多。'],
['Excuse me, this city is so confusing.','bad','公車來了，他走了','他笑著附和了一句。','閒聊型開場在趕時間的時候是最貴的選擇——對方隨時可以離開。']]},

{id:26,scene:'room',actor:'phone',stage:'L4',label:'客服',
n:'Your box is late.\nYou ordered it on Monday.\nThe shop says it was\ndelivered. But there is\nno box at your door.',
goal:'Ask them to find it.',w:['delivered'],
o:[
['It says delivered. I never got it.','ok','他開始查配送紀錄','「Left with a neighbour,\nit says.」\n隔壁真的有收。','「系統說送到」和「我沒收到」放同一句，客服就知道要查配送紀錄，而不是查有沒有出貨。'],
['My box is late. Can you check it?','mid','他問了你三個問題','「Order number? Date?\nAddress?」\n你一題一題答。','late 沒指出問題在哪。「還沒寄」和「寄了但不見」是兩條完全不同的流程。'],
['I have a problem with my box.','mid','他不知道從哪查起','「What kind of problem,\nsir?」','a problem 是萬用詞，也因此不含任何可以動作的資訊。'],
['Your shop is really very slow.','bad','他開始照稿道歉','客服念了一段制式道歉，\n才問你訂單編號。','批評服務會先啟動對方的道歉流程，你的包裹要排在那之後。']]},

{id:27,scene:'room',actor:'phone',stage:'L4',label:'客服',
n:'Your phone bill came today.\nIt is forty dollars more\nthan last month.\nYou did not change your plan.\nThey charged you for data\nyou did not use.',
goal:'Get the extra money back.',w:['charged'],
o:[
['I was charged for data I did not use.','ok','兩分鐘就查到了','「You\'re right, that\'s a\nsystem error. I\'ll\nrefund it.」','直接指出錯在哪一項。帳務問題只要講到哪一筆，對方就能查。'],
['My bill is too high this month.','mid','他反問你','「Compared to what, sir?」\n你得回頭翻上個月的帳單。','too high 是比較級卻沒有比較對象。要給數字或給項目。'],
['I think there is a mistake somewhere.','mid','他請你自己先核對','「Where exactly?」\n你說不上來。','somewhere 把找問題的工作丟回給自己。你已經知道是哪一筆了。'],
['You always charge people too much.','bad','沒有人幫你加快','客服語氣變得\n很公事公辦。','always 加上 people，把單一筆錯誤升級成對整間公司的指控。']]},

{id:28,scene:'room',actor:'phone',stage:'L4',label:'客服',
n:'Your internet stopped\nworking this morning.\nYou called them yesterday.\nThey sent an engineer.\nHe said it was fixed.\nIt is not fixed.',
goal:'Get them to send someone again today.',w:['engineer'],
o:[
['It stopped again today. Can someone come?','ok','三點有人按門鈴','「Again? Let me book an\nengineer for this\nafternoon.」','again 告訴對方上次沒修好，直接跳過重複的初階排查，然後你明確要求派人。'],
['My internet is still not working today.','mid','他叫你重開機','「Have you tried\nrestarting the router?」\n你照做三次。','只描述狀態、不提出要求，對方就會從最便宜的方案開始試。'],
['Sorry, I think there is still a problem.','mid','你得重講昨天的事','「Which problem is\nthat, sir?」','sorry 加 I think 加 a problem，三個模糊的東西疊在一起。'],
['This is the second time. Very bad service.','bad','網路還是沒修','客服把你轉給投訴部門。\n你又重講一次。','批評服務會被歸類成投訴案件，走的是另一條更慢的線。']]},

{id:29,scene:'street',actor:'phone',stage:'L4',label:'房東',
n:'You are standing outside\nyour apartment.\nYour keys are inside.\nThe door is locked.\nIt is nine at night.\nYour landlord lives\ntwenty minutes away.',
goal:'Get him to come tonight.',w:['locked'],
o:[
['I\'m locked out. Can you come tonight?','ok','半小時後他到了','房東：「Oh no. Give me\nhalf an hour.」\n他帶備份鑰匙來了。','locked out 是這個狀況的專用說法，一個詞就講完整件事，後面直接接請求。'],
['I cannot get into my apartment now.','mid','釐清了三輪','「Is the lock broken?\nDid you lose the key?」','講不進去，對方會先想是鎖壞了。鑰匙在裡面和鑰匙掉了，處理方式完全不同。'],
['Sorry to call so late. Small problem.','mid','前兩句是空轉的','房東：「What problem?」','中文習慣先道歉再進主題。晚上九點打電話，對方要的是趕快知道發生什麼事。'],
['This lock has always been a problem.','bad','你還站在門外','房東開始解釋\n這個鎖的狀況。','把鑰匙忘在裡面講成鎖的問題，對方會先辯護，不會先出門。']]},

{id:30,scene:'room',actor:'phone',stage:'L4',label:'Mia',
n:'You and Mia planned\ndinner tonight.\nYou booked a table for two.\nShe just texted you.\nSomething came up at work.\nShe cannot make it.',
goal:'Say it\'s fine, but set another day.',w:['came up'],
o:[
['No problem. Are you free next week?','ok','下週三你們去了','Mia：「Yes! Wednesday?」','放過這次，同時把下一次訂下來。取消的當下是最容易重約的時刻，過了就冷掉了。'],
['That is okay. We can do it sometime.','mid','三個月後還是沒吃到','Mia 說好。\n然後就沒有然後了。','sometime 在英文是真的「某個時候」，不是中文那種帶暗示的「改天」。'],
['It is fine, really. Do not worry.','mid','她有點內疚','接下來兩週\n她不太敢主動找你。','過度寬慰會把焦點留在她的歉意上。給一個新日期，比說三次沒關係有用。'],
['Again? You always cancel last minute.','bad','對話停在那裡','Mia 回了一句\n「Sorry.」','always 把一次取消變成一種指控。就算你是對的，這句話也解決不了今晚的飯。']]},

/* ═══ 單元四 · 職場溝通（31–40）L4 ═══ */
{id:31,scene:'office',actor:'david',stage:'L4',
n:'It is Wednesday morning.\nDavid asks how the report\nis going. You have finished\nhalf of it. The rest needs\ndata from Priya. She is\naway until Friday.',
goal:'Tell him where you are and what you need.',w:['behind'],
o:[
['Half is done. I need Priya\'s data Friday.','ok','當天下午就拿到了','David：「Okay. I\'ll ask\nher to send it before\nshe goes.」','進度、缺什麼、時間點。三個資訊到齊，主管就能動用你動不了的資源。'],
['It is going okay. Still working on it.','mid','週五來不及了','David 點頭走開。\n他來問成品時\n你才說缺資料。','okay 沒有給任何可以判斷的東西。主管聽到 okay 就會把這件事從腦中移除。'],
['Sorry, it is a little slow right now.','mid','他追問確切日期','「Slow how? Will it be\nready Monday?」','a little slow 是感受。進度回報要給比例、日期或缺口。'],
['I cannot finish it without Priya\'s data.','bad','話題變成你的態度','David 皺眉：\n「So what have you\nbeen doing?」','先講障礙不講進度，聽起來像在解釋為什麼沒做。順序反過來，感受完全不同。']]},

{id:32,scene:'office',actor:'david',stage:'L4',
n:'You want two days off\nthe week after next.\nThe big meeting is next week.\nDavid is walking back\nfrom a call. He is in a\ngood mood.',
goal:'Get the days off without worrying him.',w:['leave'],
o:[
['I was hoping to take Thursday and Friday off.','ok','當場過了','David：「Week after next?\nThat\'s fine, put it in\nthe calendar.」','I was hoping to 比 can I 軟，把請求包裝成可以討論的想法，具體日期讓他一秒就能判斷。'],
['Can I take two days off next week?','mid','你被反問到啞口無言','David：「Which days?\nWe\'ve got the meeting.」','沒有具體日期，對方一定會反問。而且 next week 剛好撞到會議。'],
['Would it be possible to have days off?','mid','事情被推遲','David：「Sure. Email me\nthe dates.」','客氣的字用太多，擠掉了真正的資訊。過度禮貌只會讓對方多花力氣搞懂你要什麼。'],
['Everyone else has taken leave this year.','bad','這句話他記得','David 的表情變了：\n「That\'s not how\nthis works.」','理由一旦建立在別人身上，對方要防守的就變成他的管理方式。']]},

{id:33,scene:'office',actor:'david',stage:'L4',
n:'It is five o\'clock on Friday.\nDavid asks if you can\nstay late. The job will\ntake three hours. You have\ntickets for a show at eight.\nYou said yes twice this month.',
goal:'Say no, but offer something else.',w:['cover'],
o:[
['I can\'t tonight. Can I start early Monday?','ok','你準時走了','David：「That works.\nI\'ll ask Sam for tonight.」','拒絕之後立刻給一個替代方案。對方要的是事情有人做，不是你今晚一定要在場。'],
['Sorry, I have plans tonight. Not possible.','mid','好案子給了別人','David 說「No worries」\n就找別人了。','乾淨的拒絕沒有錯，只是它沒有留下任何東西。留一扇門的成本很低。'],
['I will try, but I am not sure.','mid','八點他傳訊息問你','David 照這句話\n排了人力。\n你在看表演。','I will try 在中文是婉拒，在英文是「有機會」。對方會照這個機率去安排。'],
['I stayed late twice already this month.','bad','他記得你在算次數','David 沉默了一下：\n「Okay.」\n氣氛冷掉。','算帳式的拒絕會把一次協調變成一場清算。就算次數是真的，這句話也沒幫到你。']]},

{id:34,scene:'office',actor:'david',stage:'L4',
n:'David gave you a job this\nmorning. He spoke fast and\nthen left. You wrote down\nthree things. You are not\nsure about the second one.\nHe said something about\nthe figures.',
goal:'Ask again without looking careless.',w:['figures'],
o:[
['About the figures — do you mean last month\'s?','ok','十秒解決','David：「Last month\'s,\nyes. And add the totals.」','把不確定縮到一個點，而且自己先提出一個猜測。對方只要確認或修正，不用重講。'],
['Sorry, can you say that again please?','mid','他重講了三分鐘','你其實只有\n一個地方不懂。','要對方全部重講，成本高又浪費。問題越小，越容易被回答。'],
['Sorry, my English is not good enough.','mid','複雜的工作不找你了','David 之後跟你講話\n都放慢、用很簡單的字。','把理解落差歸到語言能力上，對方就會照這個前提重新評估你能做什麼。'],
['You spoke very fast this morning, David.','bad','你的問題還沒問','David 有點意外：\n「Did I?」','指出對方的問題不會讓你拿到答案，只會多一輪防守。']]},

{id:35,scene:'office',actor:'david',stage:'L4',
n:'You sent the wrong file\nto the customer.\nHe opened it an hour ago.\nYou only spotted it now.\nDavid does not know yet.\nYou can tell him now, or wait.',
goal:'Tell David before the customer does.',w:['spotted'],
o:[
['I sent the wrong file. I\'m fixing it now.','ok','二十秒結束','David：「Okay. Send the\nright one and copy me.」','承認加上已經在處理。主管要的不是道歉，是「這件事有人在管」。'],
['I think I sent the wrong one.','mid','他追問到底','David：「You think?\nDid you or didn\'t you?」','I think 用在自己做過的事情上是沒有意義的。你知道答案，模糊只會多一輪。'],
['There may be a small problem with the file.','mid','兩小時後客戶打來','David 點頭繼續做事，\n沒當一回事。','may be、small 把事情縮小了。對方會照你給的規模去決定要不要處理。'],
['The customer got the wrong file somehow.','bad','沒有人在補救','David：「Somehow?\nWho sent it?」\n五分鐘在釐清責任。','somehow 是在迴避主詞。對方一察覺你在閃，注意力就從問題轉到你身上。']]},

{id:36,scene:'office',actor:'david',stage:'L4',
n:'The report is due Thursday.\nIt is Tuesday afternoon.\nTwo of the numbers are\nstill wrong. You need one\nmore day to check them.\nDavid hates surprises\nnear a deadline.',
goal:'Ask for one more day, and make it easy to say yes.',w:['deadline'],
o:[
['Two numbers are wrong. Can I have Friday?','ok','他還謝謝你提早講','David：「Better right\nthan fast. Friday\'s fine.」','原因具體到他能自己判斷值不值得延，而且新日期由你提出，他只要點頭。'],
['I need more time for the report.','mid','你得補兩個資訊','David：「How much\nmore? And why?」','more time 沒有長度也沒有理由。延期請求需要這兩樣才能被批准。'],
['Sorry, the report may be a little late.','mid','後面全部卡住','David 照原時程\n排了下一步。','may be a little 讓對方低估了影響，他就不會重新安排。'],
['Thursday was never enough time for this.','bad','話題變成當初怎麼講的','David 的表情變了：\n「You agreed to Thursday.」','批評時程等於批評下決定的人。就算你是對的，這句話也換不到那一天。']]},

{id:37,scene:'office',actor:'priya',stage:'L4',
n:'You leave for a trip on\nMonday. You will be away\nfor five days. Three jobs\nare still open. Priya will\nlook after them. She does\nnot know where the files are.',
goal:'Make sure Priya can work without you.',w:['look after'],
o:[
['Here are the three jobs and where things are.','ok','五天後一切正常','Priya 一邊聽一邊記。\n你回來時三件事\n都在對的位置上。','交接要給的是清單和位置，不是保證。十五分鐘能講完的東西，就是這兩樣。'],
['Priya, can you look after my work?','mid','她不知道有那件事','週三客戶來電，\n她完全不知道\n有這件事存在。','my work 是一個沒有內容的詞。對方答應了，但不知道答應的是什麼。'],
['Sorry to give you extra work this week.','mid','重點只講了一半','你把十五分鐘\n花在客套上。','交接的時間很短，開場的歉意會直接吃掉資訊的空間。'],
['It should be fine. Nothing much is happening.','bad','沒有人轉出去','週二供應商來電改期，\nPriya 以為不重要。','先預判不會有事，等於叫對方不要當一回事。她就真的不會。']]},

{id:38,scene:'office',actor:'david',stage:'L4',
n:'David needs someone for\nthe Morita job. He asked\nyou first. You are already\nfull this month. Sam did\nthe same kind of work last\nyear. He handled it well.',
goal:'Say no, and give David a better answer.',w:['handled'],
o:[
['I\'m full, but Sam handled this last year.','ok','案子有人接了','David：「Did he?\nI\'ll talk to him.」\nSam 知道是你推薦的。','拒絕和解法放在同一句。主管要的是問題消失，你給了比自己接更好的版本。'],
['Sorry, I really cannot take anything more.','mid','案子晚了兩天開始','David 說 Okay 就走了。\n他花了兩天才找到人。','只拒絕不給方向，問題就整個留在對方手上。'],
['Maybe Sam can help? I am not sure.','mid','他沒有去找 Sam','maybe 和 not sure 讓\n這個建議聽起來\n沒什麼份量。','推薦別人的時候用不確定的語氣，對方會以為你只是隨口一說。'],
['Why does it always come to me first?','bad','之後他先問別人','David 愣了一下：\n「...I thought you\'d\nwant it.」','被第一個問通常是信任的訊號。把它讀成負擔，對方下次就不會再問。']]},

{id:39,scene:'office',actor:'david',stage:'L4',
n:'Eight people are in the\nmeeting. David has just\nexplained the new plan.\nHe asks if anyone has\nquestions. If the shop is\nlate again, the whole plan\nstops. Nobody has\nmentioned this risk.',
goal:'Raise the problem without sounding negative.',w:['mentioned','risk'],
o:[
['One thing — what if the shop is late?','ok','計畫改了','房間安靜了兩秒。\nDavid：「…Good point.\nLet\'s build in a week.」','用問句而不是斷言，把風險交給全場一起判斷。你沒有否定任何人，卻讓問題被看見。'],
['I think there might be a small risk.','mid','大家被 small 分心了','David：「What risk?」\n你才開始解釋。','三層削弱（I think、might、small）疊起來，聽的人會自動把重要性打折。'],
['Sorry, maybe this is a silly question.','mid','話題跳到下一項','有人低頭滑手機。','開場就替自己的意見貼上不重要的標籤，別人會照那個標籤處理它。'],
['This plan will not work if they\'re late.','bad','風險沒被討論','David 開始辯護計畫。\n十分鐘在爭論可行性。','斷言式的否定會觸發防守，尤其在八個人面前。同樣的內容，問句比斷句安全得多。']]},

{id:40,scene:'office',actor:'david',stage:'L4',
n:'You need new software\nfor the team. It costs\nthree hundred a month.\nIt would save about six\nhours a week. David\ncontrols the budget. You\nhave five minutes on Friday.',
goal:'Let the numbers do the work.',w:['budget','similar'],
o:[
['It costs three hundred, saves six hours.','ok','他當場算了一下','David：「That pays for\nitself. Send me the link.」','把想要變成一道算術。成本和效益放同一句，對方可以在三秒內做完判斷。'],
['Can we buy this software for the team?','mid','你臨時補資料','David：「How much?\nWhat does it do?」','先問能不能買，對方一定會反問數字。那些數字你早就有了，該先給。'],
['It would be really helpful if we had it.','mid','事情沒有往前','David：「A lot of things\nwould be helpful.」','helpful 是感受詞。預算決策需要的是可以比較的量，不是強度。'],
['Other teams already have better tools.','bad','變成資源分配的爭論','David 的表情變了：\n「Their budget is\nseparate.」','用別人有來爭取，會把討論帶到資源分配的政治，而不是這筆錢划不划算。']]},

/* ═══ 單元五 · 連續劇（41–50）L5 ═══ */
{id:41,scene:'office',actor:'david',stage:'L5',
n:'It is Monday morning.\nDavid has a new job for you.\nMr. Chen needs two thousand\nboxes by the 24th. That is\ntwo weeks from today. The\nshop usually needs three\nweeks. The time is very tight.',
goal:'Take the job, but say what worries you.',w:['tight'],
o:[
['I\'ll take it, but the shop needs three weeks.','ok','這句話後來救了你','David 想了一下：\n「Then call them today\nand find out.」','接下來，同時把最大的風險擺上檯面。這不是推託，是讓決策者掌握真實條件。'],
['Okay, no problem. I will start right away.','mid','兩週後這句被翻出來','David 很開心。\n他記得你說沒問題。','no problem 是一個承諾。在你還沒查證供應商之前，你沒有資格給這個承諾。'],
['Two weeks is very short. Is that possible?','mid','問題被丟回來','David：「That\'s what\nI\'m asking you.」','把判斷推給對方，但這件事的資訊在你手上。懷疑要附帶你打算怎麼查證。'],
['I will try my best to finish it.','bad','他照這個前提回覆客戶','David 點頭走開。\n他以為時程沒問題。','try my best 在中文是保守，在英文是接受。對方會照「他會做完」去安排。']]},

{id:42,scene:'room',actor:'phone',stage:'L5',label:'供應商',
n:'You called the shop on\nMonday. They said yes at\nfirst. Now it is Wednesday\nand they have called back.\nTheir machine is broken.\nThey can only deliver half\nby the 24th. The rest will\ntake two more weeks.',
goal:'Find out what you can still get.',w:['short notice'],
o:[
['Half by the 24th — can you confirm that?','ok','你拿到一個確定的數字','對方：「Yes, one\nthousand, guaranteed.」','壞消息裡一定有一塊是確定的。先把那塊釘死，剩下的才有得談。'],
['So the whole order will be late?','mid','來回三次才確認','對方：「No no,\nhalf is fine.」','把部分延遲聽成全部延遲，會浪費時間在釐清一個對方已經講清楚的事。'],
['That is not what we agreed on Monday.','mid','五分鐘沒進展','對方開始解釋\n機器怎麼壞的。','追究約定會讓對方進入辯護模式。機器已經壞了，現在要的是可用的數字。'],
['Okay. Please try your best for us.','bad','兩邊都沒講清楚','對方說好。\n24 號會來多少\n沒有人知道。','try your best 沒有數字。在供應鏈上，沒有數字的承諾等於沒有承諾。']]},

{id:43,scene:'office',actor:'phone',stage:'L5',label:'Mr. Chen',
n:'It is Thursday afternoon.\nYou have not told anyone\nabout the shop yet. Now\nyour phone is ringing.\nIt is Mr. Chen. He wants\nto know if everything is\non time. You know half the\norder is held up.',
goal:'Tell him the truth, and keep him.',w:['held up'],
o:[
['There is a delay. I will call you tomorrow.','ok','他反而放心了','Mr. Chen：「Okay.\nHow long, do you think?」\n你隔天真的打了。','承認延遲，同時給明確的下一步。客戶怕的不是延遲，是沒有人告訴他實話。'],
['I am not sure. Let me ask David first.','mid','他被晾在那裡','「When will you know?」\nDavid 開完會\n已經五點半。','你已經知道會延遲了。說不確定等於把已知的壞消息藏起來，只是換個說法。'],
['Sorry, something happened with your order.','mid','他自己腦補了','他沉默了一下：\n「Something?\nWhat something?」','something happened 什麼都沒說，對方只能自行推測——通常比實際更糟。'],
['Everything is fine. We are still on time.','bad','這句話會在第 46 集回來','他照這句話\n排了自己的開幕。','報喜不報憂在英文職場是最嚴重的錯誤之一。對方會照你的話去做承諾。']]},

{id:44,scene:'office',actor:'david',stage:'L5',
n:'It is Friday morning.\nPriya is off sick and will\nnot be back until Wednesday.\nShe was checking the numbers\nfor you. Sam is free this\nweek but he is new. The\nnumbers must be done by Monday.',
goal:'Get help before Monday, not after.',w:['off sick'],
o:[
['Priya is off sick. Can Sam check the numbers?','ok','他直接批了','David：「Good idea.\nShow him the file.」\nSam 週末前就看完了。','講缺口的同時給出人選。主管最省力的決策，是從「批准」開始，而不是從「想辦法」開始。'],
['Priya is off sick. This is a problem.','mid','他把問題丟回來','David：「Okay… so\nwhat do you need?」','只報問題，對方就得替你想解法。誰能補這個位置，你比他清楚。'],
['Sorry, things are a bit difficult right now.','mid','沒有人來幫你','David 說「Hang in\nthere.」然後回去\n做自己的事。','difficult 是感受詞。主管無法用感受調度人力，只能用它來評價你。'],
['I will handle it myself this weekend.','bad','你週末沒睡','週一精神很差。\n第 45 集那個算錯的\n數字就是這樣來的。','逞強在英文職場不加分。準確評估自己的量能，被視為專業能力的一部分。']]},

{id:45,scene:'room',actor:'phone',stage:'L5',label:'David',
n:'It is Saturday night.\nYou cannot sleep. You check\nthe order again. You asked\nthe shop for one thousand\nboxes. Mr. Chen ordered two\nthousand. You wrote down the\nwrong number on Monday.\nNobody knows yet.',
goal:'Tell David tonight, not Monday.',w:['quietly'],
o:[
['I ordered one thousand, not two. My mistake.','ok','週一八點你就打了','David：「Thanks for\ntelling me tonight.\nCall them at eight.」','自己的錯誤自己講，而且不繞。週末打擾主管的成本，遠低於週一才爆的成本。'],
['There may be a problem with the order.','mid','他以為是小事','David 週一才看到，\n中午才知道\n少了一千個。','may be a problem 讓對方低估規模，他就不會在該行動的時間行動。'],
['The order somehow says one thousand.','mid','二十分鐘在釐清責任','David：「Somehow?\nWho wrote it?」','somehow 是在迴避主詞。對方一察覺你在閃，注意力就從問題轉到你身上。'],
['I want to check something with you Monday.','bad','你插不進去了','週一你才講。\n供應商九點\n就排滿了單。','延後壞消息不會讓它變小，只會讓可以處理它的時間變少。']]},

{id:46,scene:'office',actor:'david',stage:'L5',
n:'It is Monday morning.\nDavid called you into the\nsmall room. He knows about\nthe shop and the wrong\nnumber. He is not shouting.\nHe asks one question: why\ndid you not say something\nearlier? He wanted a heads-up.',
goal:'Answer without excuses, and say what changes.',w:['shouting','heads-up'],
o:[
['I should have told you Wednesday. I\'m sorry.','ok','三十秒結束','David 點頭：「Okay.\nFrom now on, tell me\nthe same day.」','承認具體是哪一天沒講，比一般性的道歉有用一百倍。它證明你知道問題出在哪。'],
['I wanted to fix it first before telling you.','mid','他之後每天來確認','David：「And did you?」\n你答不出來。','這個理由很真實，也很常見，但它把主管的知情權換成了你的面子。'],
['The shop only told me on Wednesday too.','mid','房間更安靜了','David 的表情變了：\n「And today is Monday.」','把時間軸拿出來當擋箭牌，對方只要往前推一格就破了。'],
['Sorry, sorry. It will not happen again.','bad','考核時他提過這件事','David：「What won\'t\nhappen again?」\n你講不出具體的。','重複道歉但沒有內容，聽起來像在求過關，不像在理解問題。']]},

{id:47,scene:'office',actor:'phone',stage:'L5',label:'Mr. Chen',
n:'It is Monday afternoon.\nDavid says you must call\nMr. Chen yourself. One\nthousand boxes will arrive\non the 24th. The other\nthousand will come two weeks\nlater. Mr. Chen has a shop\nopening on the 30th.',
goal:'Move the date, and give him something.',w:['push back'],
o:[
['Half arrives on the 24th — enough to open?','ok','開幕保住了','Mr. Chen 想了三秒：\n「Actually… yes.\nI can open with a thousand.」','不要問他能不能接受延期，要問他真正在乎的那件事能不能成立。他要的是開幕，不是箱子。'],
['The order will be two weeks late. Sorry.','mid','他開始講違約','「Then I cannot open\non the 30th.」','只講延遲、不講手上有什麼，對方就會用最壞的版本理解。'],
['There may be a small delay, Mr. Chen.','mid','他當天才發現','他照小延遲排了人力。\n24 號只來一半。','small 是你給的規模，對方會照那個規模準備。少一千個箱子不是 small。'],
['The shop let us down. It\'s their fault.','bad','之後訂單由 David 經手','Mr. Chen：\n「You chose the shop.」','對客戶來說，供應鏈裡的每一段都是你。指認上游等於承認你管不住它。']]},

{id:48,scene:'room',actor:'phone',stage:'L5',label:'David',
n:'It is Tuesday. The shop\ncalls with an offer. They\ncan make the second thousand\nin one week, not two. But\nit will cost twenty percent\nmore. David controls the\nmoney. He is out until four.\nThe shop wants an answer by three.',
goal:'Get David\'s answer in time, without deciding for him.',w:['offer','extra'],
o:[
['Six hundred more, one week earlier. Your call?','ok','兩點五十分回覆了','David 在車上回：\n「Do it.」','一句話裡塞進成本、效益和決定權。主管在移動中只能處理這種長度的訊息。'],
['The shop has a new offer for us.','mid','三點已經過了','David 回：「What offer?」\n你們來回四則訊息。','預告有事但不講內容，在時間壓力下是最貴的溝通方式。'],
['Sorry to bother you, but something came up.','mid','產線排給別人了','David 四點才回電。\n供應商三點就排掉了。','有截止時間的事，開場就要講截止時間。客套放在後面。'],
['I told them yes. It saves the opening.','bad','六百塊沒有人核准過','客戶開幕順利，\n但下個月的帳上\nDavid 看到了它。','結果對了不代表流程對了。花不是你權限內的錢，那筆帳會記在別的地方。']]},

{id:49,scene:'office',actor:'sam',stage:'L5',
n:'It is the 24th. The boxes\narrived this morning. You\ncounted them with Sam.\nForty of them are damaged.\nMr. Chen\'s driver comes at\ntwo. It is now eleven. The\nshop cannot send more today.\nSam says the old boxes in\nstorage might fit.',
goal:'Solve it before two, with what you have.',w:['damaged','storage'],
o:[
['Sam, let\'s check the storage boxes right now.','ok','一點四十分裝好了','你們找到六十個\n還能用的。\n司機兩點準時載走。','剩三小時的時候，唯一有價值的動作是去驗證手上最接近的那個方案。'],
['Forty are damaged. What should we do?','mid','討論了二十分鐘','Sam 也不知道。\n才想到去倉庫看看。','把開放式問題丟給一個比你更新的人，只會讓兩個人一起卡住。'],
['Maybe he will not notice forty boxes.','mid','整批退回','司機當場點貨。\n數量不對，\n開幕延了三天。','僥倖是所有選項裡代價最高的一個，因為它把可以補救的時間也用掉了。'],
['Call the shop. This is their mistake again.','bad','你交不出貨','供應商說最快明天。\n兩點司機來了。','追究責任在剩三小時的時候完全沒有價值。那通電話換不到四十個箱子。']]},

{id:50,scene:'office',actor:'david',stage:'L5',
n:'It is Friday, one week later.\nEverything arrived. Mr. Chen\nopened his shop on time.\nDavid has called a short\nmeeting. Six people are in\nthe room. He asks what went\nwrong and what you would\nchange. Sam is watching.\nHe is new, like you were.',
goal:'Say the true thing, not the safe thing.',w:['went wrong','choice'],
o:[
['I waited two days. I should have told you.','ok','三個月後你帶了自己的案子','房間安靜了一下。\nDavid：「That\'s the whole\nlesson, right there.」','在別人面前講自己的錯，是最快建立信任的方式。而且 Sam 學到的那一課，是你給的。'],
['Next time I will be more careful.','mid','會議跳到下一項','David：「Careful\nabout what?」\n你講不出具體的。','careful 沒有內容。檢討會要的是一個可以被執行的改變，不是一個態度。'],
['A few small things went wrong, I think.','mid','下一季又發生一次','沒有人反駁，\n但也沒有人\n再談這件事。','把兩週的混亂講成 a few small things，等於宣告這裡沒有東西需要改。'],
['The shop\'s machine broke. That started it.','bad','Sam 低頭看筆記','David：「It did.\nAnd then?」\n你停在那裡。','起因是對的，但檢討會問的是你的部分。從外部因素開始講，通常就回不來了。']]}

]
};
