// Search Wikimedia Commons for candidate photos of each part.
const parts = process.argv.slice(2);
const UA = 'part-guess-game/0.1 (educational quiz)';
const out = {};
for (const q of parts) {
  const u = new URL('https://commons.wikimedia.org/w/api.php');
  Object.entries({ action:'query', format:'json', generator:'search', gsrsearch:`${q} filetype:bitmap`, gsrnamespace:'6', gsrlimit:'8',
    prop:'imageinfo', iiprop:'url|size|extmetadata', iiurlwidth:'1000' }).forEach(([k,v])=>u.searchParams.set(k,v));
  let j;
  for (let t=0;t<6;t++){ await new Promise(r=>setTimeout(r,2000+t*4000)); const r = await fetch(u,{headers:{'User-Agent':UA}}); const txt=await r.text(); try{ j=JSON.parse(txt); break;}catch{ console.error('retry',q,txt.slice(0,60)); } }
  out[q] = Object.values(j.query?.pages ?? {}).sort((a,b)=>a.index-b.index).map(p => {
    const ii = p.imageinfo[0], m = ii.extmetadata;
    return { title:p.title, w:ii.width, h:ii.height, thumb:ii.thumburl, page:ii.descriptionurl,
      license:m.LicenseShortName?.value, artist:(m.Artist?.value||'').replace(/<[^>]+>/g,'').trim() };
  });
}
console.log(JSON.stringify(out, null, 1));
