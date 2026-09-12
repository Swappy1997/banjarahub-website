const { chromium } = require('playwright');
const posts = require('./posts.js');
const path = require('path'), fs = require('fs');
const DIR = __dirname, OUT = path.join(DIR, '..');

(async () => {
  const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome' });
  const page = await browser.newPage({ viewport: { width: 1080, height: 1350 }, deviceScaleFactor: 1 });
  for (const p of posts) {
    const h = p.kind === 'story' ? 1920 : 1350;
    await page.setViewportSize({ width: 1080, height: h });
    const html = `<!doctype html><html><head><meta charset="utf-8">
      <link rel="stylesheet" href="base.css"></head><body>
      <div class="post ${p.kind} ${p.ground}">${p.extra || ''}${p.html}</div></body></html>`;
    fs.writeFileSync(path.join(DIR, '_tmp.html'), html);
    await page.goto('file://' + path.join(DIR, '_tmp.html'));
    await page.evaluate(() => document.fonts.ready);
    const el = await page.$('.post');
    await el.screenshot({ path: path.join(OUT, p.file + '.png') });
    // overflow check
    const of = await page.evaluate(() => {
      const post = document.querySelector('.post'), inner = document.querySelector('.inner');
      return { postH: post.getBoundingClientRect().height, scroll: post.scrollHeight,
               innerBottom: Math.round(inner.getBoundingClientRect().bottom) };
    });
    const warn = of.scroll > of.postH + 1 ? '  ⚠ OVERFLOW' : '';
    console.log(p.file.padEnd(20), `${of.scroll}/${of.postH}` + warn);
  }
  await browser.close();
})();
