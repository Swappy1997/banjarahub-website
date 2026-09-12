// Each post: {file, kind:'feed'|'story', ground, band:[colors]|null, html}
const LOGO = `<img src="logo.png" alt="">`;
const foot = (name, cta, ctaClass) => `
  <div class="foot">
    <div class="who">${LOGO}<div class="t"><b>BanjaraHub</b><span>@thebanjarahub</span></div></div>
    ${cta ? `<div class="cta ${ctaClass}">${cta}</div>` : ''}
  </div>`;

const band = (cols) => `<div class="band top">${cols.map(c=>`<i style="background:${c}"></i>`).join('')}</div>`;
const CREAMD = ['#FFF8F2','#D9941F','#F2D0D5','#FFF8F2','#D9941F','#F2D0D5','#FFF8F2','#D9941F','#F2D0D5','#FFF8F2','#D9941F','#F2D0D5','#FFF8F2','#D9941F','#F2D0D5','#FFF8F2','#D9941F'];
const MARD   = ['#8B1A2E','#D9941F','#1F3A5C','#8B1A2E','#D9941F','#1F3A5C','#8B1A2E','#D9941F','#1F3A5C','#8B1A2E','#D9941F','#1F3A5C','#8B1A2E','#D9941F','#1F3A5C','#8B1A2E','#D9941F'];

module.exports = [
{
  file:'01-welcome', kind:'feed', ground:'g-maroon', extra: band(CREAMD),
  html:`<div class="inner">
    <div class="eyebrow"><i style="background:#D9941F"></i> New here?</div>
    <h1>Welcome to<br>your own<br>corner of<br>the internet.</h1>
    <div class="body">India's first app made only for the Banjara community —
      matrimony, Banjara Bazar and community, in one place.</div>
    <div class="chipline">
      <span class="chip">Gor Boli · Mondays</span>
      <span class="chip">Bazar · Wednesdays</span>
      <span class="chip">Match stories · Fridays</span>
      <span class="chip">Shout-outs · Sundays</span>
    </div>
  </div>${foot('','Follow us','cta-light')}`
},
{
  file:'02-three-worlds', kind:'feed', ground:'g-cream', extra: band(MARD),
  html:`<div class="inner">
    <div class="eyebrow" style="color:var(--maroon)"><i style="background:#8B1A2E"></i> What is BanjaraHub?</div>
    <h1 class="sm" style="color:var(--maroon)">Three worlds,<br>one app.</h1>
    <div class="rows" style="color:var(--ink)">
      <div class="row"><div class="ic">💍</div><div><b>Matrimony</b><span>Verified Banjara profiles. Matching by gotra and location.</span></div></div>
      <div class="row"><div class="ic">🛍️</div><div><b>Banjara Bazar</b><span>Buy and sell inside your own community. Secure payments.</span></div></div>
      <div class="row"><div class="ic">🤝</div><div><b>Community Connect</b><span>Events, updates and people from across India.</span></div></div>
    </div>
  </div>${foot('','banjarahub.com','cta-dark')}`
},
{
  file:'03-matches', kind:'feed', ground:'g-maroon', extra:null,
  html:`<div class="inner">
    <div class="eyebrow"><i style="background:#D9941F"></i> Matrimony</div>
    <div class="big" style="margin-top:56px">500+</div>
    <h1 class="sm" style="margin-top:16px">Banjara couples.<br>One app.</h1>
    <div class="hi">500+ जोड़ियां — एक ही ऐप पर।</div>
    <div class="rule"></div>
    <div class="body" style="margin-top:0">Every match starts with one profile.<br>Yours could be next.</div>
  </div>${foot('','Join free','cta-light')}`
},
{
  file:'04-profile-tips', kind:'feed', ground:'g-cream', extra:null,
  html:`<div class="inner">
    <div class="eyebrow" style="color:var(--maroon)"><i style="background:#8B1A2E"></i> Profile tips</div>
    <h1 class="sm" style="color:var(--maroon)">Your profile<br>gets 3 seconds.</h1>
    <div class="nums tight" style="color:var(--ink)">
      <div class="num"><em>01</em><p>A clear face photo — no filters, no group photos</p></div>
      <div class="num"><em>02</em><p>Write how you actually speak, not a resume</p></div>
      <div class="num"><em>03</em><p>Mention your gotra and native place</p></div>
      <div class="num"><em>04</em><p>Say what you want in a partner, honestly</p></div>
      <div class="num"><em>05</em><p>Complete it 100% — full profiles get seen far more</p></div>
    </div>
  </div>${foot('','Open the app','cta-dark')}`
},
{
  file:'05-gorboli', kind:'feed', ground:'g-indigo', extra: band(CREAMD),
  html:`<div class="inner">
    <div class="eyebrow"><i style="background:#D9941F"></i> Gor Boli · word of the week</div>
    <div class="word" style="margin-top:80px">[ Word ]</div>
    <div class="wmean">[ meaning in English ]</div>
    <div class="whin">[ हिंदी अर्थ ]</div>
    <div class="rule"></div>
    <div class="body" style="margin-top:0">Our language lives when we speak it.<br>Use it in a sentence in the comments 👇</div>
  </div>${foot('','#GorBoli','cta-gold')}`
},
{
  file:'06-bazar-open', kind:'feed', ground:'g-cream', extra: band(MARD),
  html:`<div class="inner">
    <div class="eyebrow" style="color:var(--marigold)"><i style="background:#D9941F"></i> Banjara Bazar</div>
    <h1 style="color:var(--maroon)">The Bazar<br>is open.</h1>
    <div class="hi" style="color:var(--ink);opacity:.85">अब अपनी चीज़ें अपने ही समाज में बेचिए और खरीदिए।</div>
    <div class="body" style="color:var(--ink)">Traditional clothing, jewellery, home items — bought and sold
      inside our own community. Secure payments, no middleman.</div>
    <div class="chipline" style="color:var(--maroon)">
      <span class="chip">📸 Photo</span><span class="chip">📝 Title &amp; price</span><span class="chip">✅ Post</span>
    </div>
  </div>${foot('','Start selling','cta-gold')}`
},
{
  file:'07-safety', kind:'feed', ground:'g-dark', extra:null,
  html:`<div class="inner">
    <div class="eyebrow" style="color:#E8798C"><i style="background:#B02840"></i> Safety first</div>
    <h1 class="sm" style="margin-top:44px">Never send<br>money.<br>To anyone.<br>Ever.</h1>
    <div class="hi">पहला नियम — किसी को भी पैसे मत भेजिए।</div>
    <div class="rule"></div>
    <div class="body" style="margin-top:0">Every profile on BanjaraHub is verified and every chat stays
      private inside the app. If something feels wrong, report it — we read every report.</div>
  </div>${foot('','Save this','cta-dark')}`
},
{
  file:'08-milestone', kind:'feed', ground:'g-maroon', extra: band(CREAMD),
  html:`<div class="inner">
    <div class="eyebrow"><i style="background:#D9941F"></i> Thank you</div>
    <div class="big sm" style="margin-top:60px">10,000</div>
    <h1 class="sm" style="margin-top:8px">of us, in one place.</h1>
    <div class="hi">दस हज़ार लोग, एक ही जगह।</div>
    <div class="rule"></div>
    <div class="body" style="margin-top:0">From Maharashtra to Telangana to Rajasthan to Karnataka —
      thank you for showing up. We're only getting started.</div>
  </div>${foot('','banjarahub.com','cta-light')}`
},
{
  file:'09-sevalal', kind:'feed', ground:'g-dark', extra:null,
  html:`<div class="inner" style="justify-content:center;padding-bottom:120px">
    <div class="eyebrow" style="color:#D9941F;justify-content:center"><i style="background:#D9941F"></i> जय सेवालाल</div>
    <h1 class="sm" style="text-align:center">Sant Sevalal<br>Maharaj</h1>
    <div class="hi" style="text-align:center">सेवालाल महाराज को कोटि कोटि नमन।</div>
    <div class="body" style="text-align:center;margin-left:auto;margin-right:auto">
      Truth, service, and care for the people around you.<br>
      Everything we are building here stands on that.</div>
  </div>${foot('','','')}`
},
{
  file:'10-download', kind:'feed', ground:'g-cream', extra: band(MARD),
  html:`<div class="inner">
    <div class="eyebrow" style="color:var(--maroon)"><i style="background:#8B1A2E"></i> Free · Android &amp; iOS</div>
    <h1 class="sm" style="color:var(--maroon)">Your people<br>are already<br>inside.</h1>
    <div class="body" style="color:var(--ink)">Search <b>BanjaraHub</b> on the Play Store or App Store —
      or just open banjarahub.com. Joining takes two minutes.</div>
    <div class="chipline" style="color:var(--maroon)">
      <span class="chip">💍 Matrimony</span><span class="chip">🛍️ Bazar</span><span class="chip">🤝 Community</span>
    </div>
  </div>${foot('','Download free','cta-dark')}`
},
/* ---------- stories ---------- */
{
  file:'S1-story-poll', kind:'story', ground:'g-maroon', extra: band(CREAMD),
  html:`<div class="inner">
    <div class="eyebrow"><i style="background:#D9941F"></i> Your call</div>
    <h1 style="margin-top:60px">What should<br>we post<br>more of?</h1>
    <div class="body">Tap your answer 👇<br>Poll sticker goes here.</div>
    <div style="height:420px"></div>
    <div class="chipline"><span class="chip">Culture</span><span class="chip">Matrimony</span><span class="chip">Bazar</span></div>
  </div>${foot('','@thebanjarahub','cta-light')}`
},
{
  file:'S2-story-word', kind:'story', ground:'g-indigo', extra: band(CREAMD),
  html:`<div class="inner">
    <div class="eyebrow"><i style="background:#D9941F"></i> Gor Boli</div>
    <div class="word" style="margin-top:120px">[ Word ]</div>
    <div class="wmean">[ meaning ]</div>
    <div class="rule"></div>
    <div class="body" style="margin-top:0">Quiz sticker: which one is right?</div>
    <div style="height:340px"></div>
    <div class="body" style="opacity:.75">Reply with a word your grandmother used.</div>
  </div>${foot('','#GorBoli','cta-gold')}`
},
{
  file:'S3-story-bazar', kind:'story', ground:'g-cream', extra: band(MARD),
  html:`<div class="inner">
    <div class="eyebrow" style="color:var(--marigold)"><i style="background:#D9941F"></i> Bazar find of the week</div>
    <h1 class="sm" style="color:var(--maroon);margin-top:40px">[ Product<br>name ]</h1>
    <div class="body" style="color:var(--ink)">₹[price] · by [seller], [city]</div>
    <div style="flex:1;border:5px dashed rgba(139,26,46,.35);border-radius:12px;margin:44px 0 40px;
        display:flex;align-items:center;justify-content:center;color:rgba(139,26,46,.55);font-size:34px;
        letter-spacing:.1em;text-transform:uppercase">Product photo here</div>
    <div class="body" style="color:var(--maroon);margin-top:0">Link sticker → Shop now</div>
  </div>${foot('','Banjara Bazar','cta-gold')}`
}
];
