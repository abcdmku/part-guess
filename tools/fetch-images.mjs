// Download each pick's full image, falling back to the next candidates, and write items.js.
import fs from 'fs';
import { execFileSync } from 'child_process';
const [candPath, picksPath] = process.argv.slice(2);
const cands = JSON.parse(fs.readFileSync(candPath)), keys = Object.keys(cands);
const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120 Safari/537.36';
const slug = s => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
fs.mkdirSync('images', { recursive: true }); fs.mkdirSync('.tmp', { recursive: true });
const items = [];
for (const line of fs.readFileSync(picksPath, 'utf8').split('\n').filter(Boolean)) {
  const [ci, pi, fact] = line.split('|');
  const [set, name] = keys[ci].split('|');
  const out = `images/${slug(name)}.jpg`;
  const list = cands[keys[ci]];
  const order = [+pi, ...list.map((_, i) => i).filter(i => i !== +pi)];
  let ok = fs.existsSync(out);
  for (const i of order) {
    if (ok) break;
    try {
      const r = await fetch(list[i].image, { headers: { 'User-Agent': UA }, signal: AbortSignal.timeout(15000) });
      const buf = Buffer.from(await r.arrayBuffer());
      if (!r.ok || buf.length < 8000) throw new Error('bad ' + r.status);
      fs.writeFileSync('.tmp/in', buf);
      execFileSync('ffmpeg', ['-loglevel', 'error', '-y', '-i', '.tmp/in', '-filter_complex',
        "[0]scale='min(1100,iw)':-2,format=rgba[f];color=white[c];[c][f]scale2ref[c2][f2];[c2][f2]overlay=shortest=1,format=yuvj420p",
        '-frames:v', '1', '-q:v', '3', out]);
      ok = true; if (i !== +pi) console.log('fallback', name, i);
    } catch (e) { console.log('fail', name, i, e.message.slice(0, 60)); }
  }
  if (ok) items.push({ name, set, img: out, fact });
}
fs.writeFileSync('items.js', '// Each item is one isolated photo. Add a new "set" (e.g. "Engines") and it shows up as a filter.\n// focus: [x%, y%] to zoom on, defaults to the centre.\nwindow.ITEMS = ' + JSON.stringify(items, null, 1) + ';\n');
console.log(items.length, 'items');
