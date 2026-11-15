// Fetch each Wikipedia article's lead image plus its Commons license and author.
const titles = process.argv.slice(2);
const UA = 'part-guess-game/0.1 (educational quiz)';
const sleep = ms => new Promise(r => setTimeout(r, ms));
async function api(host, params) {
  const u = new URL(`https://${host}/w/api.php`);
  for (const [k, v] of Object.entries({ format: 'json', formatversion: '2', ...params })) u.searchParams.set(k, v);
  for (let t = 0; t < 6; t++) {
    await sleep(1500 + t * 5000);
    const txt = await (await fetch(u, { headers: { 'User-Agent': UA } })).text();
    try { return JSON.parse(txt); } catch { console.error('retry', host); }
  }
  throw new Error('rate limited');
}
const a = await api('en.wikipedia.org', { action: 'query', prop: 'pageimages', piprop: 'name', redirects: '1', titles: titles.join('|') });
const files = a.query.pages.map(p => ({ article: p.title, file: p.pageimage }));
const b = await api('commons.wikimedia.org', { action: 'query', prop: 'imageinfo', iiprop: 'url|size|extmetadata', iiurlwidth: '1200',
  titles: files.filter(f => f.file).map(f => 'File:' + f.file).join('|') });
const info = Object.fromEntries((b.query.pages || []).map(p => [p.title.replace(/^File:/, '').replace(/ /g, '_'), p]));
console.log(JSON.stringify(files.map(f => {
  const p = info[f.file], ii = p?.imageinfo?.[0], m = ii?.extmetadata || {};
  return { ...f, w: ii?.width, h: ii?.height, thumb: ii?.thumburl, page: ii?.descriptionurl,
    license: m.LicenseShortName?.value, artist: (m.Artist?.value || '').replace(/<[^>]+>/g, '').trim() };
}), null, 1));
