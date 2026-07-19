(()=>{
  const header=document.querySelector('header');
  if(header){
    const brandLeaf=[...header.querySelectorAll('*')].find(el=>el.children.length===0&&/handycover\.com/i.test(el.textContent||''));
    if(brandLeaf)brandLeaf.textContent=brandLeaf.textContent.replace(/handycover\.com/i,'HandyCover.Online');
  }

})();
