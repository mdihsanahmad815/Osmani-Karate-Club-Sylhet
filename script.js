(function(){
 const $=(s,r=document)=>r.querySelector(s), $$=(s,r=document)=>[...r.querySelectorAll(s)];
 const body=document.body;
 const saved=localStorage.getItem('okc-theme');
 if(saved==='dark') body.classList.add('dark');
 const theme=$('#theme'); if(theme) theme.addEventListener('click',()=>{body.classList.toggle('dark');localStorage.setItem('okc-theme',body.classList.contains('dark')?'dark':'light');});
 const lang=$('#lang');
 const dict={bn:{home:'হোম',about:'আমাদের সম্পর্কে',training:'প্রশিক্ষণ',gallery:'গ্যালারি',contact:'যোগাযোগ',join:'ভর্তি / যোগাযোগ',title:'শিখবো কারাতে — শিখাবো কারাতে — কারাতে শিখবে বাংলাদেশ 🇧🇩',desc:'Osmani Karate Club Sylhet — শৃঙ্খলা, আত্মবিশ্বাস, আত্মরক্ষা ও ফিটনেসের জন্য প্রশিক্ষণ।',aboutTitle:'আমাদের সম্পর্কে',trainingTitle:'আমাদের প্রশিক্ষণ',galleryTitle:'গ্যালারি',contactTitle:'যোগাযোগ করুন'},en:{home:'Home',about:'About',training:'Training',gallery:'Gallery',contact:'Contact',join:'Join / Contact',title:'Learn Karate — Teach Karate — Bangladesh Learns Karate 🇧🇩',desc:'Osmani Karate Club Sylhet — training for discipline, confidence, self-defence and fitness.',aboutTitle:'About Us',trainingTitle:'Our Training',galleryTitle:'Gallery',contactTitle:'Contact Us'}};
 let current=localStorage.getItem('okc-lang')||'bn';
 function applyLang(){const d=dict[current];$$('[data-key]').forEach(el=>{if(d[el.dataset.key])el.textContent=d[el.dataset.key]});if(lang)lang.textContent=current==='bn'?'EN':'বাং';document.documentElement.lang=current;localStorage.setItem('okc-lang',current)}
 if(lang){lang.addEventListener('click',()=>{current=current==='bn'?'en':'bn';applyLang()});applyLang()}
 const menu=$('.mobile-menu'),nav=$('nav');if(menu&&nav)menu.addEventListener('click',()=>nav.classList.toggle('open'));$$('nav a').forEach(a=>a.addEventListener('click',()=>nav&&nav.classList.remove('open')));
 const obs=new IntersectionObserver(es=>es.forEach(e=>e.isIntersecting&&e.target.classList.add('show')),{threshold:.12});$$('.reveal').forEach(x=>obs.observe(x));
 const slides=$('.slides');if(slides){const items=$$('.slide',slides);let i=0;const go=n=>{i=(n+items.length)%items.length;slides.style.transform=`translateX(-${i*100}%)`};const prev=$('.prev'),next=$('.next');if(prev)prev.onclick=()=>go(i-1);if(next)next.onclick=()=>go(i+1);setInterval(()=>go(i+1),5000)}
 const form=$('#admissionForm');if(form){form.addEventListener('submit',e=>{e.preventDefault();const n=$('#studentName')?.value.trim()||'আপনার';const notice=$('.notice');if(notice){notice.textContent=`ধন্যবাদ ${n}! আপনার তথ্য প্রস্তুত হয়েছে। ভর্তি নিশ্চিত করতে 01407-054906 নম্বরে কল করুন।`;notice.style.display='block'}form.reset()})}
 $$('[data-lightbox]').forEach(img=>img.addEventListener('click',()=>{const box=document.createElement('div');box.style.cssText='position:fixed;inset:0;background:rgba(0,10,25,.88);z-index:100;display:grid;place-items:center;padding:20px;cursor:zoom-out';box.innerHTML=`<img src="${img.dataset.lightbox}" style="max-width:96vw;max-height:90vh;border-radius:22px;box-shadow:0 30px 100px #000" alt="">`;box.onclick=()=>box.remove();document.body.appendChild(box)}));
})();
