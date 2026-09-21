/* ═══════════════════════════════════════════════════════
   timed-mode.js — 限時模式（第三～五級故事、原本閱讀共用）

   三段難度，時間越來越短：
     普通：每分鐘 100 字，一頁 30～45 秒，每題 40 秒
     中等：每分鐘 150 字，一頁 20～30 秒，每題 30 秒
     困難：每分鐘 200 字，一頁 15～20 秒，每題 25 秒
   每頁時間 = 本頁字數 ÷ 閱讀速度，再限制在該難度的秒數範圍內。

   設定存在 localStorage 'pxtimed.v1'，所有頁面共用。
   切到別的分頁時計時會暫停。
   ═══════════════════════════════════════════════════════ */
var TimedMode = (function(){
  'use strict';
  const PRESETS = {
    easy: { label:'普通', wpm:100, min:30, max:45, perQ:40 },
    mid:  { label:'中等', wpm:150, min:20, max:30, perQ:30 },
    hard: { label:'困難', wpm:200, min:15, max:20, perQ:25 }
  };
  const ORDER = ['easy','mid','hard'];
  const SKEY = 'pxtimed.v1', LKEY = 'pxtimed.v1.log';
  let memSettings = { mode:'off', auto:false }, memLog = {};
  let app = 'story', stripEl = null, controlsEl = null, onChange = null;
  let run = null, cur = null, iv = null;

  function load(){ try{ return Object.assign({mode:'off',auto:false}, JSON.parse(localStorage.getItem(SKEY)||'{}')); }catch(e){ return memSettings; } }
  function store(s){ memSettings = s; try{ localStorage.setItem(SKEY, JSON.stringify(s)); }catch(e){} }
  function loadLog(){ try{ return JSON.parse(localStorage.getItem(LKEY)||'{}'); }catch(e){ return memLog; } }
  function storeLog(l){ memLog = l; try{ localStorage.setItem(LKEY, JSON.stringify(l)); }catch(e){} }

  const settings = () => load();
  const preset = () => PRESETS[settings().mode] || null;
  const isOn = () => !!preset();
  const now = () => Date.now();
  const mmss = t => { t = Math.max(0, Math.round(t)); return `${Math.floor(t/60)}:${String(t%60).padStart(2,'0')}`; };
  const countWords = text => String(text||'').split(/\s+/).filter(w=>/[A-Za-z]/.test(w)).length;
  function pageLimit(words){ const p = preset(); if(!p) return 0; return Math.min(p.max, Math.max(p.min, Math.round(words/p.wpm*60))); }
  function quizFactor(){ const p = preset(); return p ? p.perQ/30 : 1; }

  /* ── 畫面 ── */
  function injectStyle(){
    if(document.getElementById('tmStyle')) return;
    const st = document.createElement('style'); st.id = 'tmStyle';
    st.textContent = `
.tm-controls{display:flex;gap:8px 12px;align-items:center;flex-wrap:wrap;padding:0 13px 11px;font-size:12px;color:#c9c0d8}
.tm-controls label{display:flex;align-items:center;gap:6px}
.tm-controls select{font-family:inherit;font-size:12px;color:#f4eae0;background:#342d49;border:2px solid #58506e;padding:6px 8px;border-radius:0}
.tm-controls input{width:16px;height:16px;accent-color:#84b8ab;margin:0}
.tm-controls .tm-rule{flex-basis:100%;font-size:11px;color:#9b93ad;line-height:1.6}
.tm-controls input:disabled+span{opacity:.45}
.tm-strip{position:sticky;top:0;z-index:5;margin:0 12px 10px;padding:8px 10px 9px;background:#1d1a2b;border:3px solid #1b1826;outline:2px solid #3a3350;color:#e8e2d6}
.tm-row{display:flex;align-items:baseline;gap:10px;flex-wrap:wrap}
.tm-left{font-size:24px;line-height:28px;min-width:70px;font-variant-numeric:tabular-nums}
.tm-info{font-size:11px;line-height:1.6;color:#a79fb9;flex:1;min-width:150px}
.tm-gauge{height:8px;margin-top:7px;background:#2f2942;border:2px solid #3a3350}
.tm-gauge i{display:block;height:100%;background:#84b8ab;width:100%}
.tm-strip.warn .tm-left{color:#ffb46b}.tm-strip.warn .tm-gauge i{background:#ffb46b}
.tm-strip.over{border-color:#5a2a26}.tm-strip.over .tm-left{color:#f08a7a}.tm-strip.over .tm-gauge i{background:#f08a7a}
.tm-strip.paused .tm-left{color:#8f879e}
.tm-report{display:block;margin-top:6px;color:#e6d9b8}`;
    document.head.appendChild(st);
  }

  function renderControls(){
    if(!controlsEl) return;
    const s = settings(), p = preset();
    controlsEl.innerHTML = `<label>限時模式
        <select id="tmMode" aria-label="限時模式難度">
          <option value="off">關閉</option>
          ${ORDER.map(k=>`<option value="${k}">${PRESETS[k].label} · 每分鐘 ${PRESETS[k].wpm} 字</option>`).join('')}
        </select></label>
      <label><input type="checkbox" id="tmAuto"${s.auto?' checked':''}${p?'':' disabled'}><span>時間到自動翻頁</span></label>
      <span class="tm-rule">${p ? `每頁 ${p.min}～${p.max} 秒（依字數）、作答每題 ${p.perQ} 秒，時間到自動交卷。查單字也會計時。` : '開啟後每頁和小考都會倒數，適合讀第二遍時練速度。'}</span>`;
    const sel = controlsEl.querySelector('#tmMode'); sel.value = s.mode;
    sel.onchange = ()=>{ store(Object.assign(settings(), {mode:sel.value})); resetRun(); renderControls(); if(onChange) onChange(); };
    controlsEl.querySelector('#tmAuto').onchange = e=>{ store(Object.assign(settings(), {auto:e.target.checked})); };
  }

  function mount(opts){
    injectStyle();
    app = opts.app || app; onChange = opts.onChange || null;
    controlsEl = document.createElement('div'); controlsEl.className = 'tm-controls';
    opts.controlsAfter.after(controlsEl);
    stripEl = document.createElement('div'); stripEl.className = 'tm-strip'; stripEl.hidden = true;
    stripEl.setAttribute('role','timer');
    opts.stripBefore.before(stripEl);
    renderControls();
    document.addEventListener('visibilitychange', ()=>{
      if(!cur) return;
      if(document.hidden){ commit(); cur.paused = true; draw(); }
      else { cur.paused = false; cur.t0 = now(); }
    });
  }

  /* ── 計時 ── */
  function resetRun(){ stopTick(); run = null; cur = null; if(stripEl) stripEl.hidden = true; }
  function chapter(id){ if(!run || run.id !== id || run.finished) run = { id, mode: settings().mode, pages:{}, quiz:null, finished:false }; }
  function commit(){ if(cur && !cur.paused){ cur.rec.used += (now()-cur.t0)/1000; cur.t0 = now(); } }
  function stopTick(){ commit(); if(iv){ clearInterval(iv); iv = null; } }
  function used(){ return cur ? cur.rec.used + (cur.paused ? 0 : (now()-cur.t0)/1000) : 0; }

  function draw(){
    if(!cur || !stripEl) return;
    const r = cur.rec, u = used(), left = r.limit - u;
    stripEl.hidden = false;
    stripEl.classList.toggle('over', left < 0);
    stripEl.classList.toggle('warn', left >= 0 && left <= Math.max(5, r.limit*0.25));
    stripEl.classList.toggle('paused', !!cur.paused);
    const big = left >= 0 ? mmss(left) : '+' + mmss(-left);
    const label = preset() ? preset().label : '';
    let info;
    if(cur.type === 'quiz') info = `${label} · 作答 ${r.n} 題 × ${Math.round(r.limit/r.n)} 秒` + (left < 0 ? ' · 時間到' : ' · 時間到自動交卷');
    else if(left >= 0) info = `${label} · 本頁 ${r.words} 字 · 限時 ${r.limit} 秒`;
    else info = settings().auto ? '時間到，翻到下一頁' : `超過本頁 ${r.limit} 秒；讀完就翻頁，超時會記在成績裡`;
    if(cur.paused) info = '已暫停（離開了這個分頁）';
    stripEl.innerHTML = `<div class="tm-row"><span class="tm-left">${big}</span><span class="tm-info">${info}</span></div>
      <div class="tm-gauge"><i style="width:${Math.max(0, Math.min(1, left/r.limit))*100}%"></i></div>`;
  }

  function startTick(){
    if(iv) clearInterval(iv);
    iv = setInterval(()=>{
      draw();
      if(!cur || cur.paused || cur.fired) return;
      if(used() >= cur.rec.limit){
        if(cur.type === 'quiz'){ cur.fired = true; const cb = cur.onTimeout; cb && cb(); }
        else if(settings().auto){ cur.fired = true; const cb = cur.onTimeout; cb && cb(); }
      }
    }, 250);
  }

  function page(key, words, onTimeout){
    stopTick();
    if(!isOn() || !run){ cur = null; if(stripEl) stripEl.hidden = true; return; }
    if(run.quiz && !run.quiz.done){ cur = { type:'quiz', rec:run.quiz, t0:now(), onTimeout:run.quiz.onTimeout }; draw(); startTick(); return; }
    const rec = run.pages[key] || (run.pages[key] = { words, limit:pageLimit(words), used:0 });
    cur = { type:'page', rec, t0:now(), onTimeout, fired: rec.used >= rec.limit };
    draw(); startTick();
  }

  function quiz(n, onTimeout){
    stopTick();
    if(!isOn() || !run){ cur = null; if(stripEl) stripEl.hidden = true; return; }
    if(!run.quiz || run.quiz.done) run.quiz = { n, limit: n*preset().perQ, used:0, done:false, onTimeout };
    cur = { type:'quiz', rec:run.quiz, t0:now(), onTimeout };
    draw(); startTick();
  }

  function leave(){ stopTick(); cur = null; if(stripEl) stripEl.hidden = true; }

  /* 結束一章：停止計時，回傳這章的限時結果（沒開限時則回傳 null） */
  function finish(){
    stopTick(); cur = null; if(stripEl) stripEl.hidden = true;
    if(!run || !PRESETS[run.mode]) return null;
    run.finished = true;
    const pages = Object.values(run.pages);
    const words = pages.reduce((a,p)=>a+p.words, 0), secs = pages.reduce((a,p)=>a+p.used, 0);
    return {
      id: run.id, mode: run.mode, pages: pages.length, words, secs,
      wpm: secs > 0 ? Math.round(words/secs*60) : 0,
      over: pages.filter(p=>p.used > p.limit + 0.5).length,
      quiz: run.quiz ? { n:run.quiz.n, used:Math.min(run.quiz.used, run.quiz.limit), limit:run.quiz.limit, timedOut:run.quiz.used >= run.quiz.limit } : null
    };
  }

  /* 把結果寫成一段話，並和上次同難度的紀錄比較 */
  function report(sum, right, total){
    if(!sum) return '';
    const p = PRESETS[sum.mode], parts = [];
    if(sum.pages){
      parts.push(`限時閱讀（${p.label}）：${sum.pages} 頁共 ${sum.words} 字，用了 ${mmss(sum.secs)}，約每分鐘 ${sum.wpm} 字` + (sum.over ? `，${sum.over} 頁超時。` : '，每頁都在時間內。'));
    }
    if(sum.quiz){
      parts.push(sum.quiz.timedOut ? `作答時間到（${mmss(sum.quiz.limit)}），沒作答的題目算錯。` : `作答用了 ${mmss(sum.quiz.used)}，限時 ${mmss(sum.quiz.limit)}。`);
    }
    const log = loadLog(), k = `${app}:${sum.id}:${sum.mode}`, prev = log[k];
    if(prev && prev.wpm && sum.wpm) parts.push(`上次同難度每分鐘 ${prev.wpm} 字，這次 ${sum.wpm >= prev.wpm ? '進步' : '慢了'} ${Math.abs(sum.wpm - prev.wpm)} 字。`);
    if(sum.pages){ log[k] = { wpm:sum.wpm, over:sum.over, right, total, at:new Date().toISOString().slice(0,10) }; storeLog(log); }
    const idx = ORDER.indexOf(sum.mode);
    const good = total ? right/total >= 0.8 : true;
    if(sum.pages && !sum.over && good && !(sum.quiz && sum.quiz.timedOut)){
      parts.push(idx < ORDER.length-1 ? `這個難度很穩，連續幾章都這樣就可以換「${PRESETS[ORDER[idx+1]].label}」。` : '已經是多益的閱讀速度，繼續保持答對率。');
    } else if(sum.pages && total && !good){
      parts.push('答對率偏低時，先維持這個難度，把速度放慢一點。');
    }
    return parts.join('');
  }

  return { PRESETS, mount, isOn, settings, countWords, pageLimit, quizFactor, chapter, page, quiz, leave, finish, report, mmss };
})();
