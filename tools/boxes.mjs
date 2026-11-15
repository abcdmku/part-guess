// Measure each image's part bounding box (non-white area) and store it in items.js as box: [x, y, w, h] in %.
import fs from 'fs';
import { spawnSync } from 'child_process';
const src = fs.readFileSync('items.js', 'utf8'); const w = {}; new Function('window', src)(w);
for (const it of w.ITEMS) {
  const err = spawnSync('ffmpeg', ['-hide_banner', '-loop', '1', '-i', it.img, '-frames:v', '4', '-vf', 'negate,cropdetect=limit=30:round=2:skip=0', '-f', 'null', '-'], { encoding: 'utf8' }).stderr;
  const [W, H] = err.match(/, (\d{2,5})x(\d{2,5})/).slice(1).map(Number);
  const m = [...err.matchAll(/crop=(\d+):(\d+):(\d+):(\d+)/g)].pop();
  if (m) { const [cw, ch, cx, cy] = m.slice(1).map(Number); it.box = [cx / W, cy / H, cw / W, ch / H].map(v => Math.round(v * 1000) / 10); }
  it.aspect = Math.round(W / H * 1000) / 1000;
  console.log(it.name, W, H, it.box);
}
fs.writeFileSync('items.js', src.split('window.ITEMS')[0] + 'window.ITEMS = ' + JSON.stringify(w.ITEMS, null, 1) + ';\n');
