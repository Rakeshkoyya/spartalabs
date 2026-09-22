import { chromium } from '/opt/node22/lib/node_modules/playwright/index.mjs';
const b = await chromium.launch();
const p = await b.newPage();
await p.goto('file://' + process.cwd() + '/brochure.html', { waitUntil: 'networkidle' });
await p.evaluate(() => document.fonts.ready);
await p.pdf({ path: process.argv[2] || '../Sparta-Labs-Brochure.pdf', format: 'A4', printBackground: true, preferCSSPageSize: true });
await b.close();
