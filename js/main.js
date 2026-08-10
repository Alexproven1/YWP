// Mobile nav toggle
document.addEventListener('click', (e) => {
  if (e.target.closest('.mobile-toggle')) {
    document.querySelector('.main-nav')?.classList.toggle('open');
  }
});

// Price tabs
document.addEventListener('click', (e) => {
  const tab = e.target.closest('.price-tab');
  if (!tab) return;
  const group = tab.closest('.price-tabs');
  group.querySelectorAll('.price-tab').forEach(t => t.classList.remove('active'));
  tab.classList.add('active');
  const target = tab.dataset.target;
  if (target) {
    document.querySelectorAll('.price-panel').forEach(p => p.hidden = true);
    document.querySelector(target).hidden = false;
  }
});
