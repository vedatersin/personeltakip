(async () => {
  const targets = document.querySelectorAll('[data-include]');
  for (const el of targets) {
    const file = el.getAttribute('data-include');
    const res = await fetch(file);
    el.innerHTML = await res.text();
  }

  // Aktif menü işaretleme
  const current = location.pathname.split('/').pop();
  document.querySelectorAll('a[href]').forEach(a => {
    if (a.getAttribute('href') === current) {
      a.classList.add('active');
      a.closest('.menu-item')?.classList.add('active');
    }
  });
})();
