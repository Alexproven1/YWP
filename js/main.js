// =========================================================
// YWP Replica — Shared JS
// =========================================================

// Mobile nav toggle
document.addEventListener('click', (e) => {
  if (e.target.closest('.mobile-toggle')) {
    document.querySelector('.main-nav')?.classList.toggle('open');
  }
});

// Book Now mega menu
document.addEventListener('click', (e) => {
  const trigger = e.target.closest('.book-now-trigger');
  if (trigger) {
    e.preventDefault();
    const menu = document.querySelector('.mega-menu');
    if (menu) {
      menu.classList.toggle('open');
    }
    return;
  }
  // Close mega menu on outside click
  if (!e.target.closest('.mega-menu') && !e.target.closest('.book-now-trigger')) {
    document.querySelector('.mega-menu.open')?.classList.remove('open');
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

// =========================================================
// PERSISTENT BASKET (24hr localStorage)
// =========================================================
const PBasket = {
  KEY: 'ywp_basket',
  TTL: 24 * 60 * 60 * 1000, // 24 hours

  load() {
    try {
      const raw = localStorage.getItem(this.KEY);
      if (!raw) return { items: [], timestamp: Date.now() };
      const data = JSON.parse(raw);
      // Expire after 24hrs
      if (Date.now() - data.timestamp > this.TTL) {
        this.clear();
        return { items: [], timestamp: Date.now() };
      }
      return data;
    } catch (e) {
      return { items: [], timestamp: Date.now() };
    }
  },

  save(data) {
    data.timestamp = Date.now();
    localStorage.setItem(this.KEY, JSON.stringify(data));
    this.updateMiniBasket();
  },

  addBooking(booking) {
    const data = this.load();
    data.items.push(booking);
    this.save(data);
  },

  getItems() {
    return this.load().items;
  },

  getTotal() {
    return this.getItems().reduce((sum, item) => sum + (item.total || 0), 0);
  },

  getCount() {
    return this.getItems().length;
  },

  removeItem(index) {
    const data = this.load();
    data.items.splice(index, 1);
    this.save(data);
  },

  clear() {
    localStorage.removeItem(this.KEY);
    this.updateMiniBasket();
  },

  updateMiniBasket() {
    const badge = document.querySelector('.basket-badge');
    const count = this.getCount();
    if (badge) {
      badge.textContent = count;
      badge.style.display = count > 0 ? 'flex' : 'none';
    }
  }
};

// Init basket badge on page load
document.addEventListener('DOMContentLoaded', () => {
  PBasket.updateMiniBasket();
});
