(()=>{
  const panel=document.getElementById('okcChatPanel'),
    launch=document.getElementById('okcChatLaunch'),
    close=document.getElementById('okcChatClose'),
    form=document.getElementById('okcChatForm'),
    input=document.getElementById('okcChatInput'),
    messages=document.getElementById('okcChatMessages');
  if(!panel||!launch||!form||!messages)return;

  const open=()=>{panel.hidden=false;launch.setAttribute('aria-expanded','true');input?.focus()};
  const shut=()=>{panel.hidden=true;launch.setAttribute('aria-expanded','false')};
  launch.addEventListener('click',()=>panel.hidden?open():shut());
  close?.addEventListener('click',shut);

  function add(text,kind){
    const p=document.createElement('p');
    p.className=kind==='user'?'user-message':'bot-message';
    p.textContent=text;
    messages.appendChild(p);
    messages.scrollTop=messages.scrollHeight;
  }

  function reply(question){
    const t=question.toLowerCase().normalize('NFKC');

    if(/admission|admit|join|ভর্তি|ভর্তির|এডমিশন/.test(t))
      return 'For admission, please complete the Admission Form on our website or contact our team at 01325-505488. Our team will guide you through the process and suitable batch.';

    if(/admission fee|ভর্তি ফি|ভর্তির ফি|admission charge/.test(t))
      return 'The admission fee at Osmani Karate Club Sylhet is ৳1,500. For admission help, please call or WhatsApp 01325-505488.';

    if(/monthly|মাসিক|প্রতি মাস|মাসে কত|monthly fee/.test(t))
      return 'The monthly training fee is ৳1,200. For payment instructions or confirmation, please contact 01325-505488.';

    if(/fee|fees|price|payment|বেতন|ফি|টাকা|খরচ/.test(t))
      return 'Our admission fee is ৳1,500 and the monthly training fee is ৳1,200. For payment instructions or any confirmation, please contact 01325-505488.';

    if(/what is karate|karate meaning|কারাতে কি|কারাতে কী|কারাতে বলতে কি/.test(t))
      return 'Karate is a Japanese martial art. It teaches discipline, respect, self-control, basic self-defence skills and physical fitness.';

    if(/benefit|advantage|উপকার|সুবিধা|কেন কারাতে|কারাতে শিখলে/.test(t))
      return 'Karate practice can help improve fitness, balance, coordination, focus, confidence, discipline and awareness. Students learn step by step in a supervised class.';

    if(/who can|age|children|kids|adult|কারা ভর্তি|বয়স|বাচ্চা|শিশু|বড়রা/.test(t))
      return 'Children, teenagers and adults who are interested in learning Karate can contact our team. We can help you check the suitable batch. Call 01325-505488.';

    if(/where|location|address|কোথায়|কোথায়|ঠিকানা|লোকেশন/.test(t))
      return 'Our training location is Uposhohor ABC Point, House No. 23, 2nd Floor, opposite Fulcoli, Sylhet, Bangladesh. Please contact us before visiting.';

    if(/schedule|time|class|batch|সময়|সময়|ক্লাস|ব্যাচ/.test(t))
      return 'Class days and times may change. Please call or WhatsApp 01325-505488 to confirm the latest schedule and available batches.';

    if(/sensei|coach|founder|trainer|প্রশিক্ষক|সেন্সেই|কোচ|প্রতিষ্ঠাতা/.test(t))
      return 'The club leadership includes Muntasir Fahim and Sensei Naim Shariar. Visit the About page to learn more about the club and its leadership.';

    if(/belt|grading|exam|পরীক্ষা|বেল্ট|গ্রেডিং/.test(t))
      return 'Students learn step by step and may progress through Karate belt levels based on training, skills and grading requirements. Please ask your Sensei about your current level and next grading.';

    if(/first class|bring|uniform|কি আনব|কী আনব|প্রথম ক্লাস|ইউনিফর্ম/.test(t))
      return 'For your first class, please wear comfortable sports clothing. Contact the club at 01325-505488 for guidance about class requirements and uniform.';

    if(/self.defen[cs]e|আত্মরক্ষা|আত্মরক্ষার/.test(t))
      return 'Karate training introduces controlled techniques, awareness and discipline that can support personal safety. Training is taught progressively under instructor supervision.';

    if(/hello|hi|assalamu|সালাম|আসসালামু/.test(t))
      return 'Wa Alaikum Assalam! Welcome to Osmani Karate Club Sylhet. You can ask me about admission, admission fee, monthly fee, Karate, benefits, classes, belt levels or our location.';

    return 'Thank you for your question! I can answer common questions about admission, fees, Karate, training, belt levels and location. For anything else, please contact our club team on WhatsApp: 01325-505488.';
  }

  function send(q){
    const clean=q.trim();
    if(!clean)return;
    add(clean,'user');
    window.setTimeout(()=>add(reply(clean),'bot'),180);
  }

  form.addEventListener('submit',e=>{
    e.preventDefault();
    send(input.value);
    input.value='';
    input.focus();
  });
  document.querySelectorAll('.okc-chat-chips [data-question]')
    .forEach(b=>b.addEventListener('click',()=>send(b.dataset.question)));
})();