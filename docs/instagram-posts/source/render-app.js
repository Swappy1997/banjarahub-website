const { chromium } = require('playwright');
const items = require('./appposts.js');
const path = require('path'), fs = require('fs');
const DIR = __dirname, OUT = path.join(DIR, '..');
(async () => {
  const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome' });
  const ctx = await browser.newContext({ viewport:{width:1080,height:1350}, deviceScaleFactor:1 });
  const page = await ctx.newPage();
  for (const p of items) {
    const html = `<!doctype html><html><head><meta charset="utf-8">
      <link rel="stylesheet" href="base.css"><link rel="stylesheet" href="app.css"></head><body>
      <div class="post feed ${p.ground}">${p.extra||''}${p.html}</div></body></html>`;
    fs.writeFileSync(path.join(DIR,'_tmpa.html'), html);
    await page.goto('file://' + path.join(DIR,'_tmpa.html'));
    await page.evaluate(() => document.fonts.ready);
    const el = await page.$('.post');
    await el.screenshot({ path: path.join(OUT, p.file + '.png') });
    const m = await page.evaluate(() => {
      const post=document.querySelector('.post'), st=document.querySelector('.stage');
      const sc=st.querySelector('.scale').getBoundingClientRect();
      const foot=document.querySelector('.foot').getBoundingClientRect();
      return { over: Math.round(sc.bottom - foot.top), h: post.scrollHeight };
    });
    console.log(p.file.padEnd(18), m.over > 0 ? `⚠ phone overlaps footer by ${m.over}px` : `ok (${-m.over}px clear)`);
  }
  await browser.close();
})();
