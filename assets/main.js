// Scroll-reveal animations. Respects prefers-reduced-motion via CSS fallback.
(function () {
  const items = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window)) {
    items.forEach((el) => el.classList.add('in'));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });

  items.forEach((el, i) => {
    el.style.transitionDelay = (Math.min(i % 6, 5) * 60) + 'ms';
    io.observe(el);
  });
})();
