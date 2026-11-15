// Build items.js entries from Commons category picks: node make-items.mjs all.json picks.json
import fs from 'fs';
const [allPath, picksPath] = process.argv.slice(2);
const all = JSON.parse(fs.readFileSync(allPath)), keys = Object.keys(all);
const picks = JSON.parse(fs.readFileSync(picksPath));
const items = picks.map(([cat, i, name, set, fx, fy, fact]) => {
  const c = all[keys[cat]][i];
  const file = c.title.replace(/^File:/, '').replace(/ /g, '_');
  const src = c.w > 1280 ? c.thumb.split('?')[0].replace(/\/\d+px-/, '/1280px-') : c.thumb.split('?')[0].replace(/\/thumb\//, '/').replace(/\/[^/]+$/, '');
  return { name, set, src, focus: [fx, fy], fact, credit: { author: c.artist.slice(0, 80), license: c.license, page: c.page } };
});
console.log(JSON.stringify(items, null, 1));
