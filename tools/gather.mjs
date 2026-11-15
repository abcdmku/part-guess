// For each "Set|Name" line in a file: search isolated product photos, drop watermarked stock sites,
// save candidates JSON and download small thumbs for contact sheets.
import fs from 'fs';
const [listPath, outDir] = process.argv.slice(2);
const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120 Safari/537.36';
const STOCK = /alamy|dreamstime|shutterstock|istock|123rf|depositphotos|freepik|vecteezy|gettyimages|adobe|stock|canstock|pond5|bigstock|colourbox|pngtree|cleanpng|pngwing|pngegg|clipart|vector|drawing/i;
const sleep = ms => new Promise(r => setTimeout(r, ms));
const lines = fs.readFileSync(listPath, 'utf8').split('\n').map(s => s.trim()).filter(Boolean);
const out = fs.existsSync(outDir + '/cands.json') ? JSON.parse(fs.readFileSync(outDir + '/cands.json')) : {};
fs.mkdirSync(outDir + '/th', { recursive: true });
const RETAIL = /media-amazon|walmartimages|shopify|homedepot|lowes|autozone|oreilly|advanceautoparts|rockauto|napa|harborfreight|grainger|mcmaster|ebayimg|summitracing|partsgeek|carparts|fcpeuro|ecstuning|acdelco|bosch|denso|ngk|milwaukeetool|dewalt|snapon|craftsman|stanley|klein|knipex|wera|irwin|fastenal|zoro/i;
async function search(q) {
  const h = await (await fetch('https://www.bing.com/images/search?q=' + encodeURIComponent(q) + '&qft=+filterui:imagesize-large&form=IRFLTR&first=1', { headers: { 'User-Agent': UA, 'Accept-Language': 'en-US' } })).text();
  const ms = [...h.matchAll(/ m="({[^"]+})"/g)].map(m => JSON.parse(m[1].replace(/&quot;/g, '"').replace(/&amp;/g, '&')));
  const res = ms.map(m => ({ image: m.murl, thumbnail: m.turl, title: m.t || '', url: m.purl || '', width: 999 }));
  return [...res.filter(x => RETAIL.test(x.image)), ...res.filter(x => !RETAIL.test(x.image))];
}
for (const line of lines) {
  const [set, name, query] = line.split('|');
  const key = set + '|' + name;
  if (out[key]) continue;
  let res;
  for (let t = 0; t < 4 && !res; t++) { try { res = await search((query || name).replace(/ isolated on white/, '') + ' product'); } catch (e) { console.error('retry', name, e.message); await sleep(4000); } }
  if (!res) continue;
  const c = res.filter(x => !STOCK.test(x.image + ' ' + x.title + ' ' + x.url) && x.width >= 500).slice(0, 8)
    .map(x => ({ image: x.image, thumb: x.thumbnail, w: x.width, h: x.height, title: x.title }));
  out[key] = c;
  const idx = Object.keys(out).indexOf(key);
  await Promise.all(c.map(async (x, i) => {
    try { const r = await fetch(x.thumb, { headers: { 'User-Agent': UA } }); if (r.ok) fs.writeFileSync(`${outDir}/th/${String(idx).padStart(2, '0')}_${i}.jpg`, Buffer.from(await r.arrayBuffer())); } catch {}
  }));
  fs.writeFileSync(outDir + '/cands.json', JSON.stringify(out, null, 1));
  console.log(idx, key, c.length);
  await sleep(400);
}
