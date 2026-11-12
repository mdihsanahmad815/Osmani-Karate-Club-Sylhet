(()=>{
 const menu=document.getElementById("v2Menu"),nav=document.getElementById("v2Nav");
 if(menu&&nav){menu.addEventListener("click",()=>{const open=nav.classList.toggle("open");menu.setAttribute("aria-expanded",String(open));menu.textContent=open?"×":"☰";});nav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{nav.classList.remove("open");menu.setAttribute("aria-expanded","false");menu.textContent="☰";}));}
 let installPrompt=null;
 window.addEventListener("beforeinstallprompt",e=>{e.preventDefault();installPrompt=e;let btn=document.getElementById("installApp");if(!btn){btn=document.createElement("button");btn.id="installApp";btn.className="v2-tool install-app";btn.textContent="Install App";document.querySelector(".nav-tools")?.appendChild(btn);}btn.hidden=false;btn.addEventListener("click",async()=>{if(!installPrompt)return;installPrompt.prompt();await installPrompt.userChoice;installPrompt=null;btn.hidden=true;},{once:true});});
 window.addEventListener("appinstalled",()=>{const btn=document.getElementById("installApp");if(btn)btn.hidden=true;});
 if("serviceWorker" in navigator && location.protocol!=="file:"){window.addEventListener("load",()=>navigator.serviceWorker.register("/service-worker.js").catch(err=>console.warn("PWA service worker registration failed",err)));}
})();
