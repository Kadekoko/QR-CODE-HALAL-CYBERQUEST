
(function(){
  const $ = (sel, root=document) => root.querySelector(sel);
  const $$ = (sel, root=document) => [...root.querySelectorAll(sel)];
  function q(name){ try{ const u = new URL(location.href); return u.searchParams.get(name); }catch{return null;} }
  const STORE = 'hcq_session';
  function setSession(hours=10){ const now=Date.now(); const until=now+hours*3600*1000; localStorage.setItem(STORE, JSON.stringify({start:now, until})); return until; }
  function getSession(){ try{return JSON.parse(localStorage.getItem(STORE)||'');}catch{return null;} }
  function remainingSec(){ const s=getSession(); if(!s) return 0; return Math.max(0, Math.floor((s.until-Date.now())/1000)); }
  function fmt(sec){ const h=String(Math.floor(sec/3600)).padStart(2,'0'); const m=String(Math.floor((sec%3600)/60)).padStart(2,'0'); const s=String(sec%60).padStart(2,'0'); return `${h}:${m}:${s}`; }
  window.HCQ = { $, $$, q, setSession, getSession, remainingSec, fmt };
})();
