const LOGO = `<img src="logo.png" alt="">`;
const QR   = `<img src="qr.png" alt="QR code for banjarahub.com">`;
const band = (cols) => `<div class="band top">${cols.map(c=>`<i style="background:${c}"></i>`).join('')}</div>`;
const CREAMD = Array(17).fill(0).map((_,i)=>['#FFF8F2','#D9941F','#F2D0D5'][i%3]);
const MARD   = Array(17).fill(0).map((_,i)=>['#8B1A2E','#D9941F','#1F3A5C'][i%3]);
const foot = (cta, cls) => `<div class="foot"><div class="who">${LOGO}<div class="t"><b>BanjaraHub</b><span>@thebanjarahub</span></div></div>${cta?`<div class="cta ${cls}">${cta}</div>`:''}</div>`;

const qrblock = (head, sub) => `<div class="qrblock">${QR}<div class="qt"><b>${head}</b><span>${sub}</span><em>banjarahub.com</em></div></div>`;

module.exports = [
/* ---------------- A4 posters (print at 300dpi) ---------------- */
{
  file:'poster-A4-maroon', kind:'poster', scale:2, ground:'g-maroon', extra:band(CREAMD),
  html:`<div class="inner">
    <div class="brandline">${LOGO}<div><b>BanjaraHub</b><span>Gor · Banjara · Lambani</span></div></div>
    <h1>One app for<br>our community.</h1>
    <div class="hi">अपने समाज का अपना ऐप — मुफ़्त डाउनलोड करें।</div>
    <div class="prows">
      <div class="prow"><div class="ic">💍</div><div><b>Matrimony</b><span>Verified Banjara profiles · matching by gotra &amp; location</span></div></div>
      <div class="prow"><div class="ic">🛍️</div><div><b>Banjara Bazar</b><span>Buy and sell inside our own community</span></div></div>
      <div class="prow"><div class="ic">🤝</div><div><b>Community Connect</b><span>Events, updates and people across India</span></div></div>
    </div>
    ${qrblock('Scan to download','कैमरा खोलिए और स्कैन कीजिए।<br>Android &amp; iPhone — free.')}
  </div>
  <div class="pfoot"><span>connect@banjarahub.com</span><span>@thebanjarahub</span></div>`
},
{
  file:'poster-A4-cream', kind:'poster', scale:2, ground:'g-cream', extra:band(MARD),
  html:`<div class="inner" style="color:var(--ink)">
    <div class="brandline" style="color:var(--maroon)"><img src="logo.png" style="background:#8B1A2E"><div><b>BanjaraHub</b><span style="color:var(--ink);opacity:.6">Gor · Banjara · Lambani</span></div></div>
    <h1 style="color:var(--maroon)">अपने समाज में<br>अपना जीवनसाथी</h1>
    <div class="hi" style="opacity:.85">India's first app built only for the Banjara community.</div>
    <div class="prows">
      <div class="prow"><div class="ic">💍</div><div><b style="color:var(--maroon)">Matrimony</b><span>Verified profiles · gotra &amp; location matching</span></div></div>
      <div class="prow"><div class="ic">🛍️</div><div><b style="color:var(--maroon)">Banjara Bazar</b><span>Community marketplace, secure payments</span></div></div>
      <div class="prow"><div class="ic">🤝</div><div><b style="color:var(--maroon)">Community Connect</b><span>Events, news and people</span></div></div>
    </div>
    <div class="qrblock" style="background:#8B1A2E">${QR}<div class="qt"><b style="color:#FFF8F2">स्कैन कीजिए</b><span style="color:#FFF8F2">Free on Android &amp; iPhone.<br>No typing — just scan.</span><em style="color:#D9941F">banjarahub.com</em></div></div>
  </div>
  <div class="pfoot" style="color:var(--ink)"><span>connect@banjarahub.com</span><span>@thebanjarahub</span></div>`
},
/* ---------------- WhatsApp status (1080x1920) ---------------- */
{
  file:'whatsapp-status-1-matrimony', kind:'story', ground:'g-maroon', extra:band(CREAMD),
  html:`<div class="inner">
    <div class="eyebrow"><i style="background:#D9941F"></i> BanjaraHub</div>
    <h1 style="margin-top:40px">अपने समाज में<br>अपना<br>जीवनसाथी।</h1>
    <div class="body">India's first matrimonial app built only for the Banjara community.
      Verified profiles, gotra matching, private chat.</div>
    <div class="qrblock" style="margin-top:70px;margin-bottom:0">${QR}<div class="qt"><b>Scan &amp; install</b><span>Free · Android &amp; iPhone</span><em>banjarahub.com</em></div></div>
  </div>${foot('Forward this','cta-light')}`
},
{
  file:'whatsapp-status-2-threeworlds', kind:'story', ground:'g-cream', extra:band(MARD),
  html:`<div class="inner" style="color:var(--ink)">
    <div class="eyebrow" style="color:var(--maroon)"><i style="background:#8B1A2E"></i> One download</div>
    <h1 style="color:var(--maroon);margin-top:30px">Three worlds,<br>one app.</h1>
    <div class="rows">
      <div class="row"><div class="ic">💍</div><div><b style="color:var(--maroon)">Matrimony</b><span>Verified Banjara profiles</span></div></div>
      <div class="row"><div class="ic">🛍️</div><div><b style="color:var(--maroon)">Banjara Bazar</b><span>Buy &amp; sell in the community</span></div></div>
      <div class="row"><div class="ic">🤝</div><div><b style="color:var(--maroon)">Community</b><span>Events, updates, people</span></div></div>
    </div>
    <div class="qrblock" style="background:#8B1A2E;margin-top:60px;margin-bottom:0">${QR}<div class="qt"><b style="color:#FFF8F2">Scan to download</b><span style="color:#FFF8F2">मुफ़्त · Android &amp; iPhone</span><em style="color:#D9941F">banjarahub.com</em></div></div>
  </div>${foot('banjarahub.com','cta-dark')}`
},
{
  file:'whatsapp-status-3-bazar', kind:'story', ground:'g-dark', extra:band(CREAMD),
  html:`<div class="inner">
    <div class="eyebrow" style="color:#D9941F"><i style="background:#D9941F"></i> Banjara Bazar</div>
    <h1 style="margin-top:40px">Sell to<br>your own<br>community.</h1>
    <div class="hi">अब अपनी चीज़ें अपने ही समाज में बेचिए।</div>
    <div class="body">Traditional clothing, jewellery, home items. Photo → price → post.
      No shop, no website, no middleman.</div>
    <div class="qrblock" style="margin-top:60px;margin-bottom:0">${QR}<div class="qt"><b>Start selling</b><span>Free listing in 2 minutes</span><em>banjarahub.com</em></div></div>
  </div>${foot('Banjara Bazar','cta-gold')}`
},
/* ---------------- WhatsApp forward square + ads (1080x1080) ---------------- */
{
  file:'whatsapp-forward-square', kind:'sq', ground:'g-maroon', extra:band(CREAMD),
  html:`<div class="inner">
    <div class="eyebrow"><i style="background:#D9941F"></i> Gor · Banjara · Lambani</div>
    <h1 style="font-size:74px;margin-top:24px">हमारे समाज का<br>अपना ऐप।</h1>
    <div class="body" style="font-size:31px;margin-top:20px">Matrimony · Banjara Bazar · Community Connect<br>Free on Android &amp; iPhone.</div>
    <div class="qrblock" style="margin-top:40px;margin-bottom:0;padding:26px 32px">
      <img src="qr.png" style="width:190px;height:190px;flex:0 0 190px">
      <div class="qt"><b style="font-size:44px">Scan &amp; install</b><span style="font-size:26px">स्कैन कीजिए और डाउनलोड कीजिए।</span><em style="font-size:24px">banjarahub.com</em></div></div>
  </div>${foot('','')}`
},
{
  file:'ad-square-matrimony', kind:'sq', ground:'g-cream', extra:band(MARD),
  html:`<div class="inner" style="color:var(--ink)">
    <div class="eyebrow" style="color:var(--maroon)"><i style="background:#8B1A2E"></i> Banjara Matrimony</div>
    <h1 style="color:var(--maroon);font-size:80px">500+ Banjara<br>couples found<br>each other here.</h1>
    <div class="body">Verified profiles · gotra &amp; location matching · private messaging.<br>Free to join.</div>
  </div>${foot('Download free','cta-dark')}`
},
{
  file:'ad-square-bazar', kind:'sq', ground:'g-dark', extra:band(CREAMD),
  html:`<div class="inner">
    <div class="eyebrow" style="color:#D9941F"><i style="background:#D9941F"></i> Banjara Bazar</div>
    <h1 style="font-size:80px">Your craft.<br>Your community.<br>No middleman.</h1>
    <div class="body">List a product in two minutes and sell straight to Banjara homes across India.</div>
  </div>${foot('Start selling','cta-gold')}`
},
/* ---------------- landscape ---------------- */
{
  file:'facebook-cover', kind:'fbcover', ground:'g-maroon', extra:null, land:true,
  html:`<div class="lt">
      <div class="eyebrow"><i style="background:#D9941F"></i> India's first Banjara community app</div>
      <h1>Matrimony.<br>Banjara Bazar.<br>Community Connect.</h1>
      <div class="body">One app for the Gor Banjara community. Free on Android and iPhone.</div>
    </div>
    <div class="lr"><img class="qrsm" src="qr.png"><div class="lockup">${LOGO}<b>banjarahub.com</b></div></div>`
},
{
  file:'link-share-1200x630', kind:'link', ground:'g-cream', extra:null, land:true,
  html:`<div class="lt" style="color:var(--ink)">
      <div class="eyebrow" style="color:var(--maroon)"><i style="background:#8B1A2E"></i> banjarahub.com</div>
      <h1 style="color:var(--maroon)">One app for the<br>Banjara community.</h1>
      <div class="body">Find your life partner, shop at Banjara Bazar,<br>and stay connected with your people.</div>
    </div>
    <div class="lr" style="color:var(--maroon)"><img class="qrsm" src="qr.png" style="background:#8B1A2E"><div class="lockup"><img src="logo.png" style="background:#8B1A2E"><b>Free · Android &amp; iOS</b></div></div>`
},
{
  file:'playstore-feature-1024x500', kind:'feature', ground:'g-maroon', extra:null, land:true,
  html:`<div class="lt">
      <div class="eyebrow"><i style="background:#D9941F"></i> Gor · Banjara · Lambani</div>
      <h1>Matrimony, Bazar and<br>Community — in one app.</h1>
      <div class="body">India's first app built only for the Banjara community.</div>
    </div>
    <div class="lr"><div class="lockup">${LOGO}<b>BanjaraHub</b></div></div>`
}
];
