// List JPEG photos in Commons categories: node category.mjs "Spark plugs" ...
const cats = process.argv.slice(2);
const UA = 'part-guess-game/0.1 (educational quiz)';
const sleep = ms => new Promise(r => setTimeout(r, ms));
async function api(params) {
  const u = new URL('https://commons.wikimedia.org/w/api.php');
  for (const [k, v] of Object.entries({ format: 'json', formatversion: '2', ...params })) u.searchParams.set(k, v);
  for (let t = 0; t < 6; t++) {
    await sleep(1500 + t * 5000);
    const txt = await (await fetch(u, { headers: { 'User-Agent': UA } })).text();
    try { return JSON.parse(txt); } catch { console.error('retry'); }
  }
  throw new Error('rate limited');
}
const out = {};
for (const c of cats) {
  const j = await api({ action: 'query', generator: 'categorymembers', gcmtitle: 'Category:' + c, gcmtype: 'file', gcmlimit: '40',
    prop: 'imageinfo', iiprop: 'url|size|mime|extmetadata', iiurlwidth: '1200' });
  out[c] = (j.query?.pages || []).map(p => ({ p, ii: p.imageinfo?.[0] }))
    .filter(({ ii }) => ii && ii.mime === 'image/jpeg' && ii.width >= 900)
    .slice(0, 12).map(({ p, ii }) => {
      const m = ii.extmetadata || {};
      return { title: p.title, w: ii.width, h: ii.height, thumb: ii.thumburl, page: ii.descriptionurl,
        license: m.LicenseShortName?.value, licenseUrl: m.LicenseUrl?.value,
        artist: (m.Artist?.value || '').replace(/<[^>]+>/g, '').trim() };
    });
  console.error(c, out[c].length);
}
console.log(JSON.stringify(out, null, 1));
