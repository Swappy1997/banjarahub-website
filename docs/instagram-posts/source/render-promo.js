const { chromium } = require('playwright');
const items = require('./promo.js');
const path = require('path'), fs = require('fs');
const DIR = __dirname, OUT = path.join(DIR, '..', '..', 'promo');
const SIZE = { poster:[1240,1754], story:[1080,1920], sq:[1080,1080],
               fbcover:[1640,856], link:[1200,630], feature:[1024,500] };
(async () => {
  const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome' });
  for (const p of items) {
    const [w,h] = SIZE[p.kind];
    const ctx = await browser.newContext({ viewport:{width:w,height:h}, deviceScaleFactor: p.scale || 1 });
    const page = await ctx.newPage();
    const html = `<!doctype html><html><head><meta charset="utf-8">
      <link rel="stylesheet" href="base.css"><link rel="stylesheet" href="promo.css"></head><body>
      <div class="post ${p.kind} ${p.ground} ${p.land?'land':''}">${p.extra||''}${p.html}</div></body></html>`;
    fs.writeFileSync(path.join(DIR,'_tmpp.html'), html);
    await page.goto('file://' + path.join(DIR,'_tmpp.html'));
    await page.evaluate(() => document.fonts.ready);
    const el = await page.$('.post');
    await el.screenshot({ path: path.join(OUT, p.file + '.png') });
    const of = await page.evaluate(() => { const q=document.querySelector('.post');
      return { s:q.scrollHeight, h:Math.round(q.getBoundingClientRect().height) }; });
    console.log(p.file.padEnd(32), `${w}x${h}` + (p.scale?` @${p.scale}x`:''),
      of.s > of.h+1 ? '  ⚠ OVERFLOW '+of.s+'/'+of.h : '  ok');
    await ctx.close();
  }
  await browser.close();
})();
