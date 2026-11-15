// Image search via DuckDuckGo: node ddg.mjs "query" -> JSON list of {image, w, h, title}
const q = process.argv[2];
const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120 Safari/537.36';
const html = await (await fetch('https://duckduckgo.com/?q=' + encodeURIComponent(q) + '&iax=images&ia=images', { headers: { 'User-Agent': UA } })).text();
const vqd = html.match(/vqd=["']?([\d-]+)/)?.[1];
if (!vqd) { console.error('no vqd'); process.exit(1); }
const r = await fetch(`https://duckduckgo.com/i.js?l=us-en&o=json&q=${encodeURIComponent(q)}&vqd=${vqd}&f=,,,,,&p=1`, { headers: { 'User-Agent': UA, Referer: 'https://duckduckgo.com/' } });
const j = await r.json();
console.log(JSON.stringify(j.results.slice(0, 12).map(x => ({ image: x.image, thumb: x.thumbnail, w: x.width, h: x.height, title: x.title })), null, 1));
