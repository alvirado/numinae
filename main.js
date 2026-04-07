// === STAR FIELD ===
const starsContainer = document.getElementById('stars');
if (starsContainer) {
  for (let i = 0; i < 120; i++) {
    const star = document.createElement('div');
    star.classList.add('star');
    const size = Math.random() * 2.5 + 0.5;
    star.style.cssText = `
      left: ${Math.random() * 100}%;
      top: ${Math.random() * 100}%;
      width: ${size}px;
      height: ${size}px;
      --d: ${Math.random() * 4 + 2}s;
      --delay: ${Math.random() * 4}s;
    `;
    starsContainer.appendChild(star);
  }
}

// === NAVBAR SCROLL EFFECT ===
const navbar = document.getElementById('navbar');
if (navbar) {
  window.addEventListener('scroll', () => {
    navbar.style.background = window.scrollY > 40
      ? 'rgba(13, 10, 32, 0.95)'
      : 'rgba(13, 10, 32, 0.7)';
  });
}

// === INTERSECTION OBSERVER — animate feature cards on scroll ===
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.05, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.feature-card').forEach(el => {
  el.classList.add('animate-in');
  observer.observe(el);
});
