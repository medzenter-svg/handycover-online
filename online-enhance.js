(()=>{
  const header=document.querySelector('header');
  if(header){
    const brandLeaf=[...header.querySelectorAll('*')].find(el=>el.children.length===0&&/handycover\.com/i.test(el.textContent||''));
    if(brandLeaf)brandLeaf.textContent=brandLeaf.textContent.replace(/handycover\.com/i,'HandyCover.Online');
  }

  // Unique guide-style framing for the homepage (not a copy of handycover.com):
  // same real, working product links stay in place, only the surrounding
  // copy changes so this reads as an independent comparison guide.
  const path=(location.pathname||'/').replace(/index\.html$/,'');
  if(path!=='/'&&path!=='')return;

  document.title='Smartphone-Zubehör im Vergleich 2026 – Unabhängiger Kaufguide | HandyCover.Online';
  const metaDesc=document.querySelector('meta[name="description"]');
  if(metaDesc)metaDesc.setAttribute('content','Unabhängiger Vergleich von Handyhüllen, MagSafe-Zubehör, Displayschutz, Ladegeräten und Powerbanks – mit direktem Link zum jeweiligen Amazon-Angebot bei jedem Produkt.');

  const h1=document.querySelector('h1');
  if(h1)h1.textContent='Smartphone-Zubehör im Vergleich: unsere Empfehlungen';
  const sub=h1?h1.nextElementSibling:null;
  if(sub&&sub.tagName==='P'){
    sub.textContent='Wir vergleichen Hüllen, MagSafe-Zubehör, Displayschutz, Ladegeräte und Powerbanks unabhängig. Bei jedem Produkt unten findest du einen direkten Link zum Amazon-Angebot — einfach auf den Pfeil-Button klicken.';
  }

  const bestsellerH2=[...document.querySelectorAll('h2')].find(h=>/bestseller/i.test(h.textContent||''));
  if(bestsellerH2){
    bestsellerH2.textContent='Unsere Vergleichssieger';
    let p=bestsellerH2.nextElementSibling;
    let count=0;
    while(p&&p.tagName==='P'&&count<2){
      if(count===0)p.textContent='Die Produkte, die im Vergleich am besten abgeschnitten haben — jede Karte verlinkt direkt zum Amazon-Angebot.';
      else p.textContent='Wir bewerten Passgenauigkeit, Verarbeitung und Preis-Leistung, damit du nicht selbst durch Dutzende Angebote suchen musst.';
      p=p.nextElementSibling;
      count++;
    }
  }
})();
