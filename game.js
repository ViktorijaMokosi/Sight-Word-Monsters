
const WORDS=["and", "a", "in", "it", "they", "he", "I", "so", "to", "out", "have", "are", "the", "is", "Mr", "on", "for", "at", "but", "came", "she", "my", "go", "you", "down", "your", "what", "as", "his", "Mrs", "that", "with", "can", "up", "day", "we", "like", "no", "do", "now", "could", "some", "was", "said", "had", "this", "went", "not", "made", "be", "by", "don't", "into", "about", "when", "were", "saw", "here", "then", "mum", "them", "dad", "make", "me", "time", "oh", "too", "house", "come", "there", "their", "big", "it's", "will", "back", "see", "old", "called", "all", "her", "from", "him", "get", "just", "very", "one", "little", "asked", "got", "put", "help", "if", "people", "look", "looked", "of", "an", "children", "am", "red", "let", "or", "lots", "stop", "wind", "duck", "away", "place", "been", "trees", "these", "floppy", "I'll", "find", "did", "bed", "box", "still", "king", "rabbit", "play", "take", "need", "three", "began", "every", "I've", "giant", "man", "bad", "fox", "let's", "must", "thing", "long", "way", "great", "keep", "eat", "before", "any", "right", "fly", "ran", "run", "end", "next", "much", "things", "along", "gave", "narrator", "feet", "tea", "because", "only", "night", "why", "dog", "fun", "its", "gran", "best", "think", "plants", "may", "sleep", "each", "even", "many", "white", "cried", "cat", "sun", "well", "fast", "fish", "miss", "grandad", "say", "green", "sea", "he's", "suddenly", "inside", "sat", "top", "tell", "last", "wish", "than", "morning", "again", "queen", "really", "we're", "everyone", "liked", "hot", "yes", "fell", "eggs", "that's", "across", "tree", "please", "baby", "key"];
const CHARACTERS=[{"id": "pasiepunas", "name": "Pašiepūnas", "pos": "0% 0%", "audioKey": "pasiepunas", "english": "I love silly jokes, funny faces, and making words giggle!", "rate": 1.05, "pitch": 1.25, "praise": ["Woo-hoo!", "Ha-ha!", "Yes!", "Got it!"], "oops": ["Oops! Try again!", "Hee-hee! One more try!"]}, {"id": "skruzdeliukas", "name": "Skruzdeliukas", "pos": "50% 0%", "audioKey": "skruzdeliukas", "english": "I'm tiny, speedy, and I can carry a word bigger than my head!", "rate": 1.12, "pitch": 1.38, "praise": ["Zip-zip!", "Super!", "Yes!", "Got it!"], "oops": ["Uh-oh! Try again!", "Oops! One more try!"]}, {"id": "bambunas", "name": "Bambūnas", "pos": "100% 0%", "audioKey": "bambunas", "english": "Hmph! I like grumbling, broccoli, and being right... especially about words!", "rate": 0.72, "pitch": 0.68, "praise": ["Hmph... good.", "Not bad.", "Fine!", "Correct."], "oops": ["Grrrrr... try again.", "Hmph. One more try."]}, {"id": "burziombynas", "name": "Buržiombynas", "pos": "0% 100%", "audioKey": "burziombynas", "english": "I burp, I bounce, and I munch crunchy words for breakfast!", "rate": 0.86, "pitch": 0.78, "praise": ["Boom! Super!", "Oh yeah!", "Boing!", "Yes!"], "oops": ["Oooops! Try again!", "Whoopsie! One more try!"]}, {"id": "subinickis", "name": "Subiničkis", "pos": "50% 100%", "audioKey": "subinickis", "english": "I'm pear-shaped, super wiggly, and my bottom always finds the funniest chair!", "rate": 0.84, "pitch": 1.16, "praise": ["Boing!", "Yippee!", "Wiggle, wiggle! Super!", "Yes!"], "oops": ["Oopsie! Try again!", "Boing... one more try!"]}, {"id": "pampampickis", "name": "Pampampičkis", "pos": "100% 100%", "audioKey": "pampampickis", "english": "I love dancing, pink sparkles, and shouting pam-pam when I get a word right!", "rate": 1.08, "pitch": 1.42, "praise": ["Pam-pam-pam!", "Yaaay! Super!", "Woo-hoo!", "Amazing!"], "oops": ["Oh! One more try!", "Oops! You can do it!"]}];
const RECORDED_AUDIO={"pasiepunas": "audio/pasiepunas-recorded-intro.mp3", "skruzdeliukas": "audio/skruzdeliukas-recorded-intro.mp3", "bambunas": "audio/bambunas-recorded-intro.mp3", "burziombynas": "audio/burziombynas-recorded-intro.mp3", "subinickis": "audio/subinickis-recorded-intro.mp3", "pampampickis": "audio/pampampickis-recorded-intro.mp3"};

const CHARACTER_AI_AUDIO={"bambunas":{"good":["audio/bambunas-good-01.mp3","audio/bambunas-good-02.mp3","audio/bambunas-good-03.mp3","audio/bambunas-good-04.mp3","audio/bambunas-good-05.mp3","audio/bambunas-good-06.mp3"],"wrong":["audio/bambunas-wrong-01.mp3","audio/bambunas-wrong-02.mp3","audio/bambunas-wrong-03.mp3"],"intro":"audio/bambunas-intro.mp3"},"pasiepunas":{"good":["audio/pasiepunas-good-01.mp3","audio/pasiepunas-good-02.mp3","audio/pasiepunas-good-03.mp3","audio/pasiepunas-good-04.mp3","audio/pasiepunas-good-05.mp3","audio/pasiepunas-good-06.mp3"],"wrong":["audio/pasiepunas-wrong-01.mp3","audio/pasiepunas-wrong-02.mp3","audio/pasiepunas-wrong-03.mp3"],"intro":"audio/pasiepunas-intro.mp3"},"skruzdeliukas":{"good":["audio/skruzdeliukas-good-01.mp3","audio/skruzdeliukas-good-02.mp3","audio/skruzdeliukas-good-03.mp3","audio/skruzdeliukas-good-04.mp3","audio/skruzdeliukas-good-05.mp3","audio/skruzdeliukas-good-06.mp3"],"wrong":["audio/skruzdeliukas-wrong-01.mp3","audio/skruzdeliukas-wrong-02.mp3","audio/skruzdeliukas-wrong-03.mp3"],"intro":"audio/skruzdeliukas-intro.mp3"},"burziombynas":{"good":["audio/burziombynas-good-01.mp3","audio/burziombynas-good-02.mp3","audio/burziombynas-good-03.mp3","audio/burziombynas-good-04.mp3","audio/burziombynas-good-05.mp3","audio/burziombynas-good-06.mp3"],"wrong":["audio/burziombynas-wrong-01.mp3","audio/burziombynas-wrong-02.mp3","audio/burziombynas-wrong-03.mp3"],"intro":"audio/burziombynas-intro.mp3"},"subinickis":{"good":["audio/subinickis-good-01.mp3","audio/subinickis-good-02.mp3","audio/subinickis-good-03.mp3","audio/subinickis-good-04.mp3","audio/subinickis-good-05.mp3","audio/subinickis-good-06.mp3"],"wrong":["audio/subinickis-wrong-01.mp3","audio/subinickis-wrong-02.mp3","audio/subinickis-wrong-03.mp3"],"intro":"audio/subinickis-intro.mp3"},"pampampickis":{"good":["audio/pampampickis-good-01.mp3","audio/pampampickis-good-02.mp3","audio/pampampickis-good-03.mp3","audio/pampampickis-good-04.mp3","audio/pampampickis-good-05.mp3","audio/pampampickis-good-06.mp3"],"wrong":["audio/pampampickis-wrong-01.mp3","audio/pampampickis-wrong-02.mp3","audio/pampampickis-wrong-03.mp3"],"intro":"audio/pampampickis-intro.mp3"}};
let selected=null, roundWords=[], queue=[], target="", solved=0, rounds=0, locked=false;

const $=s=>document.querySelector(s);
function show(id){document.querySelectorAll('.screen').forEach(x=>x.classList.remove('active'));$('#'+id).classList.add('active');}
function pic(el,c){el.style.backgroundPosition=c.pos;}
function speak(text, rate=.82, pitch=1.08, onend=null){
  speechSynthesis.cancel();
  const u=new SpeechSynthesisUtterance(text); u.lang='en-GB'; u.rate=rate; u.pitch=pitch;
  const voices=speechSynthesis.getVoices();
  u.voice=voices.find(v=>v.lang.startsWith('en-GB')) || voices.find(v=>v.lang.startsWith('en')) || null;
  if(onend){
    let finished=false;
    const complete=()=>{if(!finished){finished=true;onend();}};
    u.onend=complete; u.onerror=complete;
  }
  speechSynthesis.speak(u);
}
function playAudioData(src,onend=null){
  speechSynthesis.cancel();
  const a=new Audio(src);
  let finished=false;
  const complete=()=>{if(!finished){finished=true;if(onend) onend();}};
  a.onended=complete; a.onerror=complete;
  a.play().catch(complete);
}
function playRecordedIntro(c, thenEnglish=true, onComplete=null){
  speechSynthesis.cancel();
  const pack=CHARACTER_AI_AUDIO[c.id];
  if(pack){
    playAudioData(pack.intro, ()=>{ if(onComplete) onComplete(); });
    return;
  }
  const a=new Audio(RECORDED_AUDIO[c.audioKey]);
  a.onended=()=>{
    if(thenEnglish){
      setTimeout(()=>speak(c.english,c.rate,c.pitch,()=>{ if(onComplete) onComplete(); }),180);
    } else if(onComplete) onComplete();
  };
  a.play().catch(()=>{
    if(thenEnglish) speak(c.english,c.rate,c.pitch,()=>{ if(onComplete) onComplete(); });
    else if(onComplete) onComplete();
  });
}

let audioCtx=null;
function getAudioCtx(){if(!audioCtx)audioCtx=new(window.AudioContext||window.webkitAudioContext)();if(audioCtx.state==='suspended')audioCtx.resume();return audioCtx}
function tone(f,d=.12,type='sine',v=.05,delay=0,end=null){try{const c=getAudioCtx(),o=c.createOscillator(),g=c.createGain(),t=c.currentTime+delay;o.type=type;o.frequency.setValueAtTime(f,t);if(end)o.frequency.exponentialRampToValueAtTime(Math.max(20,end),t+d);g.gain.setValueAtTime(.0001,t);g.gain.exponentialRampToValueAtTime(v,t+.015);g.gain.exponentialRampToValueAtTime(.0001,t+d);o.connect(g);g.connect(c.destination);o.start(t);o.stop(t+d+.02)}catch(e){}}
function noise(d=.12,v=.03,delay=0){try{const c=getAudioCtx(),n=Math.floor(c.sampleRate*d),b=c.createBuffer(1,n,c.sampleRate),x=b.getChannelData(0);for(let i=0;i<n;i++)x[i]=(Math.random()*2-1)*(1-i/n);const s=c.createBufferSource(),g=c.createGain();s.buffer=b;g.gain.value=v;s.connect(g);g.connect(c.destination);s.start(c.currentTime+delay)}catch(e){}}
function monsterEffect(id,good=true){if(!good){tone(180,.12,'triangle',.04,0,110);return}
 if(id==='pasiepunas'){tone(520,.07,'square',.035);tone(760,.07,'square',.035,.08);tone(980,.09,'square',.03,.16)}
 else if(id==='skruzdeliukas'){tone(900,.05,'sine',.035);tone(1250,.05,'sine',.03,.06);tone(1550,.06,'sine',.025,.12)}
 else if(id==='bambunas'){tone(125,.28,'sawtooth',.04,0,80)}
 else if(id==='burziombynas'){tone(95,.16,'square',.05,0,55);noise(.11,.03,.08);tone(180,.12,'triangle',.035,.16,110)}
 else if(id==='subinickis'){tone(230,.12,'sine',.05,0,500);tone(500,.14,'sine',.04,.12,260)}
 else if(id==='pampampickis'){tone(660,.08,'triangle',.035);tone(880,.08,'triangle',.035,.09);tone(1100,.14,'triangle',.04,.18)}
}
function animateMonster(id){const el=$('#gamePic'),m={pasiepunas:'fx-tease',skruzdeliukas:'fx-zip',bambunas:'fx-grumble',burziombynas:'fx-bounce',subinickis:'fx-wiggle',pampampickis:'fx-party'},cl=m[id]||'jump';el.className='heroPic miniMonster';void el.offsetWidth;el.classList.add(cl);setTimeout(()=>el.classList.remove(cl),850)}

function shuffle(a){for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a}
function sample5(){return shuffle([...WORDS]).slice(0,5)}

const holder=$('#characters');
CHARACTERS.forEach(c=>{
 const b=document.createElement('button'); b.className='character';
 b.innerHTML=`<div class="charpic"></div><div class="charname">${c.name}</div>`;
 pic(b.querySelector('.charpic'),c);
 b.onclick=()=>choose(c); holder.appendChild(b);
});

function setStartReady(ready){
 const btn=$('#startGame');
 btn.disabled=!ready;
 btn.textContent=ready?'▶ Play!':'🎙️ Klausyk prisistatymo...';
 btn.style.opacity=ready?'1':'.55';
 btn.style.cursor=ready?'pointer':'not-allowed';
}
function choose(c){
 selected=c; pic($('#introPic'),c); $('#introName').textContent=c.name;
 $('#introText').textContent=c.english;
 show('intro'); setStartReady(false);
 setTimeout(()=>playRecordedIntro(c,true,()=>setStartReady(true)),250);
}
$('#hearIntro').onclick=()=>{
 setStartReady(false);
 playRecordedIntro(selected,true,()=>setStartReady(true));
};
$('#startGame').onclick=()=>{
 if($('#startGame').disabled) return;
 speechSynthesis.cancel();pic($('#gamePic'),selected);show('game');newRound();
};

function newRound(){
 rounds++; solved=0; roundWords=sample5(); queue=shuffle([...roundWords]);
 renderWords(); nextTarget(); updateProgress();
}
function renderWords(){
 const box=$('#words'); box.innerHTML='';
 roundWords.forEach(w=>{
  const b=document.createElement('button'); b.className='word'; b.textContent=w; b.dataset.word=w;
  b.onclick=()=>answer(b,w); box.appendChild(b);
 });
}
function setAnswerLocked(value){
 locked=value;
 document.querySelectorAll('#words .word').forEach(btn=>{btn.disabled=value;});
 $('#listen').disabled=value;
}
const WORD_VOICE_STORAGE='sight-word-monsters-word-voice';
let preferredWordVoice='';
try{preferredWordVoice=localStorage.getItem(WORD_VOICE_STORAGE)||'';}catch(e){}
function voiceKey(v){return JSON.stringify([v.voiceURI,v.name,v.lang]);}
function englishWordVoices(){
 const voices=speechSynthesis.getVoices().filter(v=>/^en(?:-|_)/i.test(v.lang));
 const quality=v=>/natural|neural|premium|enhanced|google/i.test(v.name)?2:0;
 return voices.sort((a,b)=>(quality(b)+(b.lang==='en-GB'?1:0))-(quality(a)+(a.lang==='en-GB'?1:0))||a.name.localeCompare(b.name));
}
function selectedWordVoice(){
 const voices=englishWordVoices();
 return voices.find(v=>voiceKey(v)===preferredWordVoice)||voices[0]||null;
}
function refreshWordVoices(){
 const select=$('#wordVoice'),voices=englishWordVoices();
 select.innerHTML='';
 const automatic=document.createElement('option');automatic.value='';automatic.textContent='Automatinis pasirinkimas';select.appendChild(automatic);
 voices.forEach(v=>{const option=document.createElement('option');option.value=voiceKey(v);option.textContent=v.name+' ('+v.lang+')';select.appendChild(option);});
 select.value=voices.some(v=>voiceKey(v)===preferredWordVoice)?preferredWordVoice:'';
 $('#voiceHint').textContent=voices.length?'Pasirink balsą ir palygink tarimą. Pasirinkimas išsaugomas šiame įrenginyje.':'Anglų balsų sąrašas dar nepasiekiamas. Paklausyk numatytojo balso arba atverk šį žaidimą Safari.';
}
$('#wordVoice').onchange=()=>{
 preferredWordVoice=$('#wordVoice').value;
 try{localStorage.setItem(WORD_VOICE_STORAGE,preferredWordVoice);}catch(e){}
};
$('#testVoice').onclick=()=>{
 refreshWordVoices();
 const button=$('#testVoice');button.disabled=true;
 speakWord(()=>{button.disabled=false;},'The. Said. Have. Were. Could.');
};
refreshWordVoices();
speechSynthesis.addEventListener('voiceschanged',refreshWordVoices);
window.addEventListener('pageshow',refreshWordVoices);
$('#wordVoice').onfocus=refreshWordVoices;
function speakWord(onend=null,text=target){
 // Use a natural speaking speed and an unmodified pitch for teaching words.
 speechSynthesis.cancel();
 const u=new SpeechSynthesisUtterance(text);
 u.voice=selectedWordVoice();u.lang=u.voice?u.voice.lang:'en-GB';
 u.rate=.9; u.pitch=1; u.volume=1;
 let finished=false;
 const complete=()=>{if(!finished){finished=true;if(onend) onend();}};
 u.onend=complete;u.onerror=complete;
 speechSynthesis.speak(u);
}
function repeatTargetThenUnlock(){
 setTimeout(()=>speakWord(()=>setAnswerLocked(false)),220);
}
function nextTarget(){
 if(queue.length===0){
   setTimeout(finishGame,700);
   return;
 }
 target=queue.shift(); setAnswerLocked(true); $('#status').textContent='';
 setTimeout(()=>speakWord(()=>setAnswerLocked(false)),250);
}

function finishGame(){
  target="";
  pic($('#finishPic'),selected);
  $('#finishText').textContent='You found all 5 words! Amazing!';
  show('finish');
  setTimeout(()=>speak('Amazing! You found all five words! Super!',selected.rate,selected.pitch),250);
}

$('#playAgain').onclick=()=>{
  speechSynthesis.cancel();
  selected=null;
  roundWords=[];
  queue=[];
  target="";
  solved=0;
  rounds=0;
  locked=false;
  $('#status').textContent='';
  $('#progress').textContent='';
  show('choose');
};
function updateProgress(){$('#progress').textContent=`Words: ${solved} / 5`;}
$('#listen').onclick=()=>{
 if(!target||locked)return;
 setAnswerLocked(true);speakWord(()=>setAnswerLocked(false));
};

function answer(btn,w){
 if(locked)return;
 if(w===target){
   setAnswerLocked(true); solved++; btn.classList.add('good');
   animateMonster(selected.id); monsterEffect(selected.id,true);
   const msg=selected.praise[Math.floor(Math.random()*selected.praise.length)];
   $('#status').textContent='⭐ '+msg; updateProgress();
   if(CHARACTER_AI_AUDIO[selected.id]){
     const clips=CHARACTER_AI_AUDIO[selected.id].good;
     playAudioData(clips[Math.floor(Math.random()*clips.length)],()=>setTimeout(nextTarget,220));
   } else {
     speak(msg,selected.rate,selected.pitch,()=>setTimeout(nextTarget,220));
   }
 } else {
   setAnswerLocked(true);
   btn.classList.add('bad'); monsterEffect(selected.id,false);
   const msg=selected.oops[Math.floor(Math.random()*selected.oops.length)];
   $('#status').textContent=msg+' 👂';
   if(CHARACTER_AI_AUDIO[selected.id]){
     const clips=CHARACTER_AI_AUDIO[selected.id].wrong;
     playAudioData(clips[Math.floor(Math.random()*clips.length)],repeatTargetThenUnlock);
   } else {
     speak(msg,selected.rate,selected.pitch,repeatTargetThenUnlock);
   }
   setTimeout(()=>btn.classList.remove('bad'),450);
 }
}
window.addEventListener('beforeunload',()=>speechSynthesis.cancel());
