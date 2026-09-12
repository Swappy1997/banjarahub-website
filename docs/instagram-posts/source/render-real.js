const { chromium } = require('playwright');
const items = require('./realposts.js');
const path=require('path'), fs=require('fs');
const DIR=__dirname, OUT=path.join(DIR,'..');
(async()=>{
  const b = await chromium.launch({ executablePath:'/opt/pw-browsers/chromium-1194/chrome-linux/chrome' });
  const ctx = await b.newContext({ viewport:{width:1080,height:1350}, deviceScaleFactor:1 });
  const page = await ctx.newPage();
  for (const p of items){
    const html = `<!doctype html><html><head><meta charset="utf-8"><link rel="stylesheet" href="real.css"></head>
      <body><div class="rpost">${p.html}</div></body></html>`;
    fs.writeFileSync(path.join(DIR,'_tmpr.html'), html);
    await page.goto('file://'+path.join(DIR,'_tmpr.html'));
    await page.evaluate(()=>document.fonts.ready);
    await page.$eval('.rpost', ()=>{});
    const el = await page.$('.rpost');
    await el.screenshot({ path: path.join(OUT, p.file+'.png') });
    const m = await page.evaluate(()=>{
      const post=document.querySelector('.rpost');
      const car=document.querySelector('.caravan');
      const carTop = car ? car.getBoundingClientRect().top : 1350;
      let worst=0, who='';
      post.querySelectorAll('.fc,.play,.device,.sub,h1').forEach(n=>{
        const r=n.getBoundingClientRect();
        // ignore things inside the device screen
        if(n.closest('.screen')) return;
        const over = r.bottom - carTop;
        if(over>worst){worst=over;who=n.className||n.tagName;}
      });
      return {worst:Math.round(worst), who, scroll:post.scrollHeight};
    });
    console.log(p.file.padEnd(20), m.worst>10 ? `⚠ ${m.who} runs ${m.worst}px into caravan` : 'ok');
  }
  await b.close();
})();
