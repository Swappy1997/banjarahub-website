const wordmark = `<div class="wordmark"><img src="logo.png" alt=""><b>banjara<i>Hub</i></b></div>`;
const corner   = `<div class="corner"><img src="logo.png" alt=""></div>`;
const caravan  = `<img class="caravan" src="caravan.png" alt="">`;
const playTri = `<svg class="tri" viewBox="0 0 40 44"><path d="M3 2 26 22 3 42Z" fill="#34A853"/><path d="M3 2 26 22 3 42Z" fill="none"/><path d="M3 2v40l12-10Z" fill="#4285F4"/><path d="M26 22 3 2l12 20Z" fill="#EA4335"/><path d="M26 22 3 42l12-20Z" fill="#FBBC04"/><path d="M26 22 37 16c3 2 3 10 0 12Z" fill="#FBBC04"/></svg>`;
const play = `<div class="play">${playTri}<div class="pt"><small>Download</small><strong>on Google Play Store</strong></div></div>`;
const card = (cls, ic, title, sub) => `<div class="fc ${cls}"><div class="ic">${ic}</div><b>${title}</b><span>${sub}</span></div>`;

const bars = `<div class="bars"><i style="height:5px"></i><i style="height:8px"></i><i style="height:11px"></i><i style="height:14px"></i></div>`;
const device = `
<div class="device"><div class="screen">
  <div class="island"></div>
  <div class="statusbar"><span>9:25</span><span class="rt">${bars}<span style="font-size:14px">📶</span><span class="batt"><i></i></span></span></div>
  <div class="aphead">
    <img class="lg" src="logo.png" alt=""><span class="nm">banjara<i>Hub</i></span>
    <span class="sp"></span><span class="rb">🔍</span><span class="rb">🔔</span>
  </div>
  <div class="credits">
    <div class="n">3</div>
    <div class="ct"><b>3 credits</b><span>Used to send interests</span></div>
    <div class="bc">Buy Credits</div>
  </div>
  <div class="sect"><span>Browse by Profession</span></div>
  <div class="profgrid">
    <div class="prof"><div class="av" style="background:#FBEFD7">👷</div><span>Engineer</span></div>
    <div class="prof"><div class="av" style="background:#DFF2E2">👩‍🏫</div><span>Teacher</span></div>
    <div class="prof"><div class="av" style="background:#F6EEDF">🧑‍💼</div><span>Government</span></div>
    <div class="prof"><div class="av" style="background:#EDE6FA">👩‍⚖️</div><span>Lawyer</span></div>
    <div class="prof"><div class="av" style="background:#DCEAFA">👩‍⚕️</div><span>Doctor</span></div>
    <div class="prof"><div class="av" style="background:#E4EEFB">👩‍💻</div><span>Business</span></div>
    <div class="prof"><div class="av" style="background:#EDE6FA">🧑‍💻</div><span>IT</span></div>
    <div class="prof"><div class="av" style="background:#DFF2E2">👨‍🌾</div><span>Farmer</span></div>
  </div>
  <div class="sect" style="margin-top:18px"><span>Browse by State</span></div>
  <div class="states">
    <div class="st" style="background:linear-gradient(160deg,#C9A227,#8A5A1E)"><div class="em">🏯</div><span>Karnataka</span></div>
    <div class="st" style="background:linear-gradient(160deg,#4E7CA8,#23405C)"><div class="em">🕌</div><span>Maharashtra</span></div>
    <div class="st" style="background:linear-gradient(160deg,#B5576B,#6E1224)"><div class="em">🛕</div><span>Telangana</span></div>
  </div>
  <div class="sect" style="margin-top:18px"><span>Suggested for You</span><a>View more</a></div>
  <div class="navbar">
    <div class="on"><span class="ni">🏠</span>Home</div>
    <div><span class="ni">🤍</span>Matches</div>
    <div><span class="ni">💬</span>Messages</div>
    <div><span class="ni">👤</span>Profile</div>
  </div>
</div></div>`;

module.exports = [
{
  file:'R1-hero-verified', html:`${corner}${wordmark}
    <h1>Matches Built on <em>Trust</em>,<br>Not Guesswork</h1>
    <div class="sub">Government ID verified profiles. Screenshots blocked. Your number never leaves the app.</div>
    <div style="display:flex;align-items:center;gap:30px;margin-top:34px;position:relative;z-index:2">
      <div style="display:flex;flex-direction:column;gap:20px;width:260px">
        ${card('c-amber','🛡️','ID Verified','Real people, real trust.')}
        ${card('c-blue','🔒','Screenshot Free','Your privacy is protected.')}
      </div>
      <div style="transform:scale(.62);transform-origin:top center;margin-top:-10px">${device}</div>
    </div>
    ${caravan}`
},
{
  file:'R2-six-features', html:`${corner}${wordmark}
    <h1 class="sm">Six Reasons Our People<br>Choose <em>banjaraHub</em></h1>
    <div class="cards" style="margin-top:34px">
      ${card('c-amber','🛡️','Government ID Verified','Real people, real trust.')}
      ${card('c-blue','🔒','Screenshot Free','Your privacy is our priority.')}
      ${card('c-violet','👰','Women Register Free','Because her dreams matter too.')}
      ${card('c-pink','📵','Personal Info Protected','Your data, our responsibility.')}
      ${card('c-green','🎚️','More Filters','Find exactly what you are looking for.')}
      ${card('c-maroon','🪙','No Subscription','Just credits, when you need them.')}
    </div>
    ${caravan}`
},
{
  file:'R3-women-free', html:`${corner}${wordmark}
    <h1>Women Register<br><em>Free.</em> Always.</h1>
    <div class="sub">महिलाओं के लिए रजिस्ट्रेशन पूरी तरह मुफ़्त।</div>
    <div class="fc c-violet" style="margin-top:44px;width:100%;position:relative;z-index:2;padding:38px 40px">
      <div class="ic" style="width:88px;height:88px;border-radius:26px;font-size:44px">👰</div>
      <b style="font-size:42px">Because her dreams matter too.</b>
      <span style="font-size:25px;margin-top:14px">No fee to create a profile, browse matches, or reply to an interest.
      Every woman on banjaraHub joins on her own terms.</span>
    </div>
    <div style="margin-top:42px">${play}</div>
    ${caravan}`
},
{
  file:'R4-credits', html:`${corner}${wordmark}
    <h1>No Subscription.<br>No <em>Expiry.</em></h1>
    <div class="sub">Buy credits once. Use them when you find someone worth reaching out to.</div>
    <div class="cards" style="grid-template-columns:1fr 1fr 1fr;gap:20px;margin-top:40px">
      ${card('c-amber','1️⃣','Buy credits','Pay only for what you use.')}
      ${card('c-green','2️⃣','Send an interest','One credit per interest sent.')}
      ${card('c-maroon','3️⃣','No clock running','Credits never expire on you.')}
    </div>
    <div class="fc c-blue" style="margin-top:26px;width:100%;position:relative;z-index:2;display:flex;align-items:center;gap:24px;padding:24px 30px">
      <div class="ic" style="margin-bottom:0;flex:0 0 74px">💳</div>
      <div><b style="font-size:29px">No monthly plan. No auto-renewal.</b>
      <span style="font-size:21px">Nothing is charged unless you choose to buy credits.</span></div>
    </div>
    <div style="margin-top:34px">${play}</div>
    ${caravan}`
},
{
  file:'R5-browse', html:`${corner}${wordmark}
    <h1 class="sm">Browse by Profession,<br>State and <em>City</em></h1>
    <div class="sub">Engineer, teacher, doctor, farmer — search the way families actually ask.</div>
    <div style="display:flex;align-items:flex-start;gap:34px;margin-top:30px;position:relative;z-index:2">
      <div style="transform:scale(.60);transform-origin:top left;margin-right:-208px">${device}</div>
      <div style="display:flex;flex-direction:column;gap:18px;width:300px;padding-top:16px">
        ${card('c-green','🎚️','More Filters','Profession, state, city, education.')}
        ${card('c-amber','🛡️','ID Verified','Every profile checked.')}
      </div>
    </div>
    ${caravan}`
},
{
  file:'R6-languages', html:`${corner}${wordmark}
    <h1>Your App, In <em>Your</em><br>Own Language</h1>
    <div class="sub">Marathi, Kannada and Telugu — so nobody in the family is left out.</div>
    <div class="cards" style="grid-template-columns:1fr 1fr 1fr;gap:22px;margin-top:44px">
      ${card('c-violet','अ','मराठी','Marathi')}
      ${card('c-green','ಅ','ಕನ್ನಡ','Kannada')}
      ${card('c-amber','అ','తెలుగు','Telugu')}
    </div>
    <div class="fc c-maroon" style="margin-top:28px;width:100%;position:relative;z-index:2;padding:32px 36px">
      <b style="font-size:34px">Switch anytime from your profile.</b>
      <span style="font-size:22px;margin-top:10px">Parents and elders can use banjaraHub without anyone translating for them.</span>
    </div>
    <div style="margin-top:34px">${play}</div>
    ${caravan}`
}
];
