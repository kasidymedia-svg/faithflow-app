document.addEventListener('DOMContentLoaded', () => {
  const splash = document.getElementById('splash');
  const content = document.getElementById('content');
  const year = document.getElementById('year') || document.getElementById('year');
  if(year) year.textContent = new Date().getFullYear();

  // Fade in text quickly
  setTimeout(()=>{ document.querySelectorAll('.fade-text').forEach(el=>el.style.opacity=1); }, 200);

  // Transition to main content after 5 seconds
  setTimeout(()=>{
    splash.style.display = 'none';
    content.classList.remove('hidden');
    showDevotion();
  }, 5000);

  // Devotions (sample 30 entries can be expanded)
  const devotions = [
    { title: "Day 1: God Strengthens You", text: "God renews your strength every morning. Lean on Him and walk in hope." },
    { title: "Day 2: God’s Peace Today", text: "God’s peace steadies you in the noise. Breathe and trust His calming presence." },
    { title: "Day 3: God Sees You", text: "God notices your small steps. He honors faithfulness, even when unseen." },
    // ... remaining devotions omitted for brevity in this package sample
  ];

  const verses = [
    "Psalm 46:10 — Be still, and know that I am God.",
    "Isaiah 40:31 — Those who hope in the Lord will renew their strength.",
    "Philippians 4:6 — Do not be anxious about anything; pray about everything."
  ];

  function dayOfYear(d=new Date()){ const start=new Date(d.getFullYear(),0,0); return Math.floor((d-start)/(1000*60*60*24)); }
  const todayIndex = dayOfYear() % devotions.length;

  window.showDevotion = function(){
    const item = devotions[todayIndex];
    document.getElementById('devotion-title').textContent = item.title;
    document.getElementById('devotion-text').textContent = item.text + "\n\n" + verses[Math.floor(Math.random()*verses.length)];
  };
});