
const $=(s,r=document)=>r.querySelector(s), $$=(s,r=document)=>[...r.querySelectorAll(s)];
const modal=$('#demoModal');
$$('[data-demo]').forEach(b=>b.addEventListener('click',e=>{e.preventDefault();modal?.classList.add('open');document.body.style.overflow='hidden'}));
$('.modal-close')?.addEventListener('click',()=>{modal.classList.remove('open');document.body.style.overflow=''});
modal?.addEventListener('click',e=>{if(e.target===modal){modal.classList.remove('open');document.body.style.overflow=''}});
$('#demoForm')?.addEventListener('submit',e=>{e.preventDefault();$('.form-success').style.display='block'});
$('.menu-btn')?.addEventListener('click',()=>$('.mobile-menu')?.classList.toggle('open'));
const p=location.pathname.split('/').pop()||'index.html';$$('[data-nav]').forEach(a=>{if(a.getAttribute('href')===p)a.classList.add('active')});
