// script.js
// Animations simples pour les bulles et les cartes
document.querySelectorAll('.bubble').forEach(bubble => {
  bubble.addEventListener('mouseenter', () => {
    bubble.classList.add('active');
  });
  bubble.addEventListener('mouseleave', () => {
    bubble.classList.remove('active');
  });
});

// Effet de bascule 3D sur les cartes projet
const resetTransform = card => (card.style.transform = '');

document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('mousemove', e => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    card.style.transform = `rotateX(${ -y / 20 }deg) rotateY(${ x / 20 }deg)`;
  });
  card.addEventListener('mouseleave', () => resetTransform(card));
  card.addEventListener('click', () => resetTransform(card));
});
