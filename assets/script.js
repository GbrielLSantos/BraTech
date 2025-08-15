// Mobile menu
const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');
if (burger && menu){
  burger.addEventListener('click', () => {
    const open = menu.style.display === 'flex';
    menu.style.display = open ? 'none' : 'flex';
    burger.setAttribute('aria-expanded', String(!open));
  });
}

// Scroll reveal
const revealEls = document.querySelectorAll('.reveal');
const onScroll = () => {
  const vh = window.innerHeight;
  revealEls.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < vh - 60) el.classList.add('visible');
  });
};
document.addEventListener('scroll', onScroll);
window.addEventListener('load', () => {
  onScroll();
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
});

// Contact form (mailto fallback)
function sendForm(e){
  e.preventDefault();
  const data = new FormData(e.target);
  const subject = "[Site] Solicitação: Bratech - " + data.get('servico');
  const body = "Nome: " + data.get('nome') + "\nE-mail: " + data.get('email') + "\nServiço: " + data.get('servico') + "\nMensagem: " + (data.get('mensagem') || "");
  const params = new URLSearchParams({subject, body});
  window.location.href = "mailto:contato@bratech.com?" + params.toString();
  return false;
}