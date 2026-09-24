import { chromium } from '/opt/node22/lib/node_modules/playwright/index.mjs';
// cafe-demo.html -> 16:9 PDF deck, plus optional PNG previews of each slide (pass --png <dir>).
const out = '../Sparta-Labs-Cafe-Restaurant-Suite-Demo.pdf';
const pngDir = process.argv[2] === '--png' ? process.argv[3] : null;
const b = await chromium.launch();
const p = await b.newPage({ viewport: { width: 1600, height: 900 } });
await p.goto('file://' + process.cwd() + '/cafe-demo.html', { waitUntil: 'networkidle' });
await p.evaluate(() => document.fonts.ready);
await p.pdf({ path: out, width: '1600px', height: '900px', printBackground: true, preferCSSPageSize: true });
if (pngDir) {
  const slides = await p.$$('section.slide');
  for (let i = 0; i < slides.length; i++) await slides[i].screenshot({ path: `${pngDir}/slide-${String(i + 1).padStart(2, '0')}.png` });
}
await b.close();
console.log('pdf ok');
