const LOGO = `<img src="logo.png" alt="">`;
const foot = (cta, cls) => `<div class="foot"><div class="who">${LOGO}<div class="t"><b>BanjaraHub</b><span>@thebanjarahub</span></div></div>${cta?`<div class="cta ${cls}">${cta}</div>`:''}</div>`;
const band = (cols) => `<div class="band top">${cols.map(c=>`<i style="background:${c}"></i>`).join('')}</div>`;
const CREAMD = Array(17).fill(0).map((_,i)=>['#FFF8F2','#D9941F','#F2D0D5'][i%3]);
const MARD   = Array(17).fill(0).map((_,i)=>['#8B1A2E','#D9941F','#1F3A5C'][i%3]);

/* ---- the app screens, markup copied from index.html ---- */
const screenProfile = `
<div class="phone phone-main">
  <div class="phone-notch"></div>
  <div class="screen-profile">
    <div class="sp-header">
      <div class="sp-header-title">My Profile</div>
      <div style="width:20px;height:20px;border-radius:50%;background:rgba(255,255,255,0.2);"></div>
    </div>
    <div class="sp-avatar">👰</div>
    <div class="sp-name">Priya Rathod</div>
    <div class="sp-meta">25 yrs · Nagpur · B.Tech</div>
    <div class="sp-cards">
      <div class="sp-card">
        <div class="sp-card-label">New Matches</div>
        <div class="sp-match-row">
          <div class="sp-match-ava">👩</div>
          <div class="sp-match-info">
            <div class="sp-match-name">Kavita Banjara</div>
            <div class="sp-match-detail">24 · Pune · MBA</div>
          </div>
          <button class="sp-match-btn">Connect</button>
        </div>
      </div>
      <div class="sp-card">
        <div class="sp-card-label">Profile Complete</div>
        <div style="height:5px;background:var(--light-gray);border-radius:3px;overflow:hidden;">
          <div style="height:100%;width:78%;background:var(--maroon);border-radius:3px;"></div>
        </div>
        <div style="font-size:9px;color:var(--mid-gray);margin-top:5px;font-family:'Poppins',sans-serif;">78% — Add more photos to get noticed</div>
      </div>
    </div>
    <div class="sp-bottom-nav">
      <div class="sp-nav-item"><div class="sp-nav-dot active"></div></div>
      <div class="sp-nav-item"><div class="sp-nav-dot"></div></div>
      <div class="sp-nav-item"><div class="sp-nav-dot"></div></div>
      <div class="sp-nav-item"><div class="sp-nav-dot"></div></div>
    </div>
  </div>
</div>`;

const screenBrowse = `
<div class="phone phone-main">
  <div class="phone-notch"></div>
  <div class="screen-explore">
    <div class="se-top">
      <div class="se-top-title">Find Your Match</div>
      <div class="se-search">Search by gotra, city, profession…</div>
    </div>
    <div class="se-grid">
      <div class="se-card"><div class="se-card-img">👩</div><div class="se-card-body"><div class="se-card-name">Kavita B.</div><div class="se-card-detail">24 · Pune</div></div></div>
      <div class="se-card"><div class="se-card-img">👨</div><div class="se-card-body"><div class="se-card-name">Rahul R.</div><div class="se-card-detail">27 · Nagpur</div></div></div>
      <div class="se-card"><div class="se-card-img">👩‍🦱</div><div class="se-card-body"><div class="se-card-name">Sunita P.</div><div class="se-card-detail">23 · Hyderabad</div></div></div>
      <div class="se-card"><div class="se-card-img">🧑</div><div class="se-card-body"><div class="se-card-name">Ajay C.</div><div class="se-card-detail">29 · Bengaluru</div></div></div>
    </div>
    <div class="se-bottom-nav">
      <div class="sp-nav-item"><div class="sp-nav-dot"></div></div>
      <div class="sp-nav-item"><div class="sp-nav-dot active"></div></div>
      <div class="sp-nav-item"><div class="sp-nav-dot"></div></div>
      <div class="sp-nav-item"><div class="sp-nav-dot"></div></div>
    </div>
  </div>
</div>`;

const screenBazar = `
<div class="phone phone-main">
  <div class="phone-notch"></div>
  <div class="screen-explore">
    <div class="se-top">
      <div class="se-top-title">Banjara Bazar</div>
      <div class="se-search">Search clothing, jewellery, home…</div>
    </div>
    <div class="se-grid">
      <div class="se-card"><div class="se-card-img">👗</div><div class="se-card-body"><div class="se-card-name">Phetiya set</div><div class="se-card-detail">₹2,400 · Nanded</div></div></div>
      <div class="se-card"><div class="se-card-img">💍</div><div class="se-card-body"><div class="se-card-name">Silver bangles</div><div class="se-card-detail">₹1,150 · Nagpur</div></div></div>
      <div class="se-card"><div class="se-card-img">👜</div><div class="se-card-body"><div class="se-card-name">Lambani bag</div><div class="se-card-detail">₹690 · Kalaburagi</div></div></div>
      <div class="se-card"><div class="se-card-img">🪞</div><div class="se-card-body"><div class="se-card-name">Mirror cushion</div><div class="se-card-detail">₹450 · Hyderabad</div></div></div>
    </div>
    <div class="se-bottom-nav">
      <div class="sp-nav-item"><div class="sp-nav-dot"></div></div>
      <div class="sp-nav-item"><div class="sp-nav-dot"></div></div>
      <div class="sp-nav-item"><div class="sp-nav-dot active"></div></div>
      <div class="sp-nav-item"><div class="sp-nav-dot"></div></div>
    </div>
  </div>
</div>`;

const chatRow = (ava, grad, name, time, msg, unread) => `
  <div style="display:flex;align-items:center;gap:10px;padding:8px 0;border-bottom:1px solid var(--light-gray);">
    <div style="width:36px;height:36px;border-radius:50%;background:linear-gradient(135deg,var(--maroon-tint),${grad});display:flex;align-items:center;justify-content:center;font-size:16px;flex-shrink:0;">${ava}</div>
    <div style="flex:1;min-width:0;">
      <div style="display:flex;justify-content:space-between;align-items:center;">
        <div style="font-size:10px;font-weight:700;color:var(--charcoal);font-family:'Recoleta',serif;">${name}</div>
        <div style="font-size:8px;color:var(--mid-gray);font-family:'Poppins',sans-serif;">${time}</div>
      </div>
      <div style="font-size:8px;color:var(--mid-gray);font-family:'Poppins',sans-serif;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${msg}</div>
    </div>
    ${unread?`<div style="width:8px;height:8px;border-radius:50%;background:var(--maroon);flex-shrink:0;"></div>`:''}
  </div>`;

const screenChat = `
<div class="phone phone-main" style="background:#111;border-color:#222;">
  <div class="dynamic-island"></div>
  <div style="background:var(--off-white);min-height:400px;position:relative;padding-bottom:30px;">
    <div style="display:flex;justify-content:space-between;align-items:center;padding:4px 14px 0;background:var(--maroon);">
      <div style="font-size:8px;color:white;font-family:'Poppins',sans-serif;">9:41</div>
      <div style="display:flex;gap:4px;align-items:center;">
        <div style="width:12px;height:7px;border:1px solid white;border-radius:2px;position:relative;"><div style="position:absolute;right:-3px;top:50%;transform:translateY(-50%);width:2px;height:4px;background:white;border-radius:1px;"></div><div style="width:70%;height:100%;background:white;border-radius:1px;"></div></div>
      </div>
    </div>
    <div style="background:var(--maroon);padding:8px 14px 14px;display:flex;justify-content:space-between;align-items:center;">
      <div style="font-size:13px;color:white;font-family:'Recoleta',serif;font-weight:700;">Messages</div>
      <div style="width:22px;height:22px;border-radius:50%;background:rgba(255,255,255,0.2);display:flex;align-items:center;justify-content:center;"><div style="font-size:12px;color:white;">+</div></div>
    </div>
    <div style="padding:8px 10px;">
      ${chatRow('👩','var(--maroon)','Kavita Banjara','2m ago','Hello, saw your profile…',true)}
      ${chatRow('👩‍🦱','var(--maroon-mid)','Sunita Pawar','1h ago','Namaste! I am from…',false)}
      ${chatRow('👰','var(--maroon-light)','Anita Rathod','3h ago','Thank you for connecting!',false)}
    </div>
    <div style="position:absolute;bottom:36px;left:50%;transform:translateX(-50%);background:var(--maroon);color:white;font-size:8px;padding:4px 10px;border-radius:10px;font-family:'Poppins',sans-serif;white-space:nowrap;">🔒 Private — stays in the app</div>
  </div>
  <div style="background:var(--off-white);padding:6px 0 8px;display:flex;justify-content:center;"><div class="home-indicator"></div></div>
</div>`;

const stage = (screen, scale) => `<div class="glow"></div><div class="stage"><div class="scale" style="transform:scale(${scale})">${screen}</div></div>`;

module.exports = [
{
  file:'11-app-profile', kind:'feed', ground:'g-maroon', extra:band(CREAMD),
  html:`<div class="inner" style="justify-content:flex-start;padding-top:150px">
    <div class="eyebrow"><i style="background:#D9941F"></i> Inside the app</div>
    <h1 class="sm" style="font-size:66px;margin-top:20px">Your profile.<br>Your people.</h1>
    ${stage(screenProfile, 1.68)}
  </div>${foot('Download free','cta-light')}`
},
{
  file:'12-app-browse', kind:'feed', ground:'g-cream', extra:band(MARD),
  html:`<div class="inner" style="justify-content:flex-start;padding-top:150px;color:var(--ink)">
    <div class="eyebrow" style="color:var(--maroon)"><i style="background:#8B1A2E"></i> Matrimony</div>
    <h1 class="sm" style="color:var(--maroon);font-size:66px;margin-top:20px">Search by gotra,<br>city, profession.</h1>
    ${stage(screenBrowse, 1.68)}
  </div>${foot('banjarahub.com','cta-dark')}`
},
{
  file:'13-app-chat', kind:'feed', ground:'g-dark', extra:null,
  html:`<div class="inner" style="justify-content:flex-start;padding-top:150px">
    <div class="eyebrow" style="color:#E8798C"><i style="background:#B02840"></i> Private messaging</div>
    <h1 class="sm" style="font-size:66px;margin-top:20px">Your number<br>stays yours.</h1>
    ${stage(screenChat, 1.68)}
  </div>${foot('100% private','cta-dark')}`
},
{
  file:'14-app-bazar', kind:'feed', ground:'g-cream', extra:band(MARD),
  html:`<div class="inner" style="justify-content:flex-start;padding-top:150px;color:var(--ink)">
    <div class="eyebrow" style="color:var(--marigold)"><i style="background:#D9941F"></i> Banjara Bazar</div>
    <h1 class="sm" style="color:var(--maroon);font-size:66px;margin-top:20px">Our own market,<br>in your pocket.</h1>
    ${stage(screenBazar, 1.68)}
  </div>${foot('Start selling','cta-gold')}`
},
{
  file:'15-app-trio', kind:'feed', ground:'g-maroon', extra:band(CREAMD),
  html:`<div class="inner" style="justify-content:flex-start;padding-top:140px">
    <div class="eyebrow"><i style="background:#D9941F"></i> Three worlds, one app</div>
    <h1 class="sm" style="font-size:62px;margin-top:18px">This is<br>BanjaraHub.</h1>
    <div class="glow"></div>
    <div class="stage" style="margin-top:44px">
      <div class="scale" style="transform:scale(1.45)">
        <div class="trio">
          <div class="side" style="transform:rotate(-6deg) translateY(40px) scale(.94)">${screenBrowse}</div>
          ${screenProfile}
          <div class="side" style="transform:rotate(6deg) translateY(40px) scale(.94)">${screenBazar}</div>
        </div>
      </div>
    </div>
  </div>${foot('Android & iOS','cta-light')}`
}
];
