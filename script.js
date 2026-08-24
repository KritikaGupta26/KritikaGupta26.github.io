document.getElementById('year').textContent = new Date().getFullYear();

const studies = document.querySelectorAll('.case-list details');
studies.forEach((study) => {
  study.addEventListener('toggle', () => {
    if (!study.open) return;
    studies.forEach((other) => {
      if (other !== study) other.open = false;
    });
  });
});

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const revealItems = document.querySelectorAll('.reveal');
if (reducedMotion || !('IntersectionObserver' in window)) {
  revealItems.forEach((item) => item.classList.add('is-visible'));
} else {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealItems.forEach((item) => observer.observe(item));
}
