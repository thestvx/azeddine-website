/* ============================================
   AZZ LUXURY — SCRIPT.JS
   ============================================ */

// ── PRODUCTS DATA ──
const products = [
  {
    id: 1, category: 'accessories',
    name: 'ساعة كلاسيك بريميوم',
    price: 28500, oldPrice: 35000,
    badge: 'جديد', badgeType: 'new',
    img: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=480&h=600&fit=crop&q=80',
    desc: 'ساعة فاخرة مصنوعة من الستانلس ستيل مع حزام جلد إيطالي أصيل. آلية سويسرية دقيقة مضمونة لسنوات.',
    tags: ['ذهبي', 'جلد إيطالي', 'سويسري']
  },
  {
    id: 2, category: 'tech',
    name: 'سماعات نويز كانسلينج',
    price: 18900, oldPrice: null,
    badge: 'الأكثر مبيعاً', badgeType: 'hot',
    img: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=480&h=600&fit=crop&q=80',
    desc: 'سماعات لاسلكية بتقنية إلغاء الضوضاء الفعّالة مع بطارية تدوم 40 ساعة وصوت بجودة Hi-Fi.',
    tags: ['لاسلكي', 'Hi-Fi', 'بريميوم']
  },
  {
    id: 3, category: 'lifestyle',
    name: 'حذاء رياضي فاخر',
    price: 12500, oldPrice: 15000,
    badge: 'تخفيض', badgeType: 'sale',
    img: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=480&h=600&fit=crop&q=80',
    desc: 'حذاء رياضي مصنوع من أجود أنواع الجلد الطبيعي بتصميم عصري يجمع بين الراحة والأناقة.',
    tags: ['جلد طبيعي', 'رياضي', 'عصري']
  },
  {
    id: 4, category: 'accessories',
    name: 'خاتم ذهبي مرصّع',
    price: 9800, oldPrice: null,
    badge: 'جديد', badgeType: 'new',
    img: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=480&h=600&fit=crop&q=80',
    desc: 'خاتم ذهبي فاخر مزيّن بأحجار كريمة طبيعية، مثالي للمناسبات الخاصة والإهداء.',
    tags: ['ذهب 18K', 'أحجار كريمة', 'هدية']
  },
  {
    id: 5, category: 'tech',
    name: 'ساعة ذكية إليت',
    price: 22000, oldPrice: null,
    badge: 'الأكثر مبيعاً', badgeType: 'hot',
    img: 'https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=480&h=600&fit=crop&q=80',
    desc: 'ساعة ذكية بشاشة AMOLED وإطار من التيتانيوم مع ميزات صحية متقدمة وعمر بطارية 7 أيام.',
    tags: ['AMOLED', 'تيتانيوم', 'صحة']
  },
  {
    id: 6, category: 'lifestyle',
    name: 'حقيبة يد كلاسيكية',
    price: 16500, oldPrice: null,
    badge: 'جديد', badgeType: 'new',
    img: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=480&h=600&fit=crop&q=80',
    desc: 'حقيبة يد فاخرة بجلد العجل الإيطالي مع أقفال ذهبية اللون وتصميم كلاسيكي لا يعلو عليه الزمن.',
    tags: ['جلد عجل', 'كلاسيكي', 'إيطالي']
  },
  {
    id: 7, category: 'accessories',
    name: 'سلسلة ذهبية دقيقة',
    price: 7200, oldPrice: 8500,
    badge: 'تخفيض', badgeType: 'sale',
    img: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=480&h=600&fit=crop&q=80',
    desc: 'سلسلة ذهبية دقيقة مصنوعة من الذهب عيار 18 قيراط بتصميم أنيق مناسب للارتداء اليومي.',
    tags: ['ذهب 18K', 'يومي', 'أنيق']
  },
  {
    id: 8, category: 'tech',
    name: 'قلم ذكي فاخر',
    price: 8900, oldPrice: null,
    badge: null, badgeType: null,
    img: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=480&h=600&fit=crop&q=80',
    desc: 'قلم ذكي بتقنية الضغط المتعدد المستويات للكتابة والرسم على الأجهزة اللوحية بدقة احترافية.',
    tags: ['ذكي', 'احترافي', 'دقيق']
  }
];

// ── STATE ──
let cart = [];
let activeFilter = 'all';
let currentProduct = null;
let modalQty = 1;

// ── INIT ──
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  renderProducts('all');
  setupNav();
  setupCart();
  setupModal();
  setupFilters();
  setupScrollEffects();
});

// ─────────────────────────────────────────
// THEME TOGGLE
// ─────────────────────────────────────────
function initTheme() {
  const toggle = document.getElementById('theme-toggle');
  const html = document.documentElement;
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  let theme = prefersDark ? 'dark' : 'light';
  html.setAttribute('data-theme', theme);
  updateThemeIcon(theme, toggle);

  toggle.addEventListener('click', () => {
    theme = theme === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', theme);
    updateThemeIcon(theme, toggle);
  });
}

function updateThemeIcon(theme, btn) {
  if (theme === 'dark') {
    btn.innerHTML = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <circle cx="12" cy="12" r="5"/>
      <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
    </svg>`;
  } else {
    btn.innerHTML = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
    </svg>`;
  }
}

// ─────────────────────────────────────────
// RENDER PRODUCTS
// ─────────────────────────────────────────
function getCategoryLabel(cat) {
  const labels = { accessories: 'إكسسوارات', tech: 'تقنية', lifestyle: 'نمط حياة' };
  return labels[cat] || cat;
}

function renderProducts(filter) {
  const grid = document.getElementById('products-grid');
  if (!grid) return;
  const filtered = filter === 'all' ? products : products.filter(p => p.category === filter);

  grid.innerHTML = filtered.map(p => `
    <article class="product-card fade-in" onclick="openModal(${p.id})" role="button" tabindex="0" aria-label="${p.name}">
      <div class="product-img-wrap">
        <img
          src="${p.img}"
          alt="${p.name}"
          width="480"
          height="600"
          loading="lazy"
          decoding="async"
          onerror="this.src='https://picsum.photos/seed/${p.id}/480/600'"
        >
        ${p.badge ? `<span class="product-badge product-badge--${p.badgeType}">${p.badge}</span>` : ''}
        <div class="product-overlay" aria-hidden="true">
          <button
            class="product-quick-view"
            onclick="event.stopPropagation(); openModal(${p.id})"
          >عرض سريع</button>
        </div>
      </div>
      <div class="product-info">
        <span class="product-category">${getCategoryLabel(p.category)}</span>
        <h3 class="product-name">${p.name}</h3>
        <div class="product-price-row">
          <div class="product-price-group">
            ${p.oldPrice ? `<span class="product-price-old">${p.oldPrice.toLocaleString('ar-DZ')} دج</span>` : ''}
            <span class="product-price">${p.price.toLocaleString('ar-DZ')} دج</span>
          </div>
          <button
            class="product-add-btn"
            onclick="event.stopPropagation(); addToCart(${p.id}, 1)"
            aria-label="أضف ${p.name} إلى السلة"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M12 5v14M5 12h14"/>
            </svg>
          </button>
        </div>
      </div>
    </article>
  `).join('');

  // keyboard support for product cards
  grid.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        card.click();
      }
    });
  });
}

// ─────────────────────────────────────────
// FILTER TABS
// ─────────────────────────────────────────
function setupFilters() {
  const tabs = document.querySelectorAll('.filter-tab');
  tabs.forEach(btn => {
    btn.addEventListener('click', () => {
      tabs.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');
      activeFilter = btn.dataset.filter;
      renderProducts(activeFilter);
    });
  });
}

// ─────────────────────────────────────────
// CART
// ─────────────────────────────────────────
function setupCart() {
  const toggleBtn = document.getElementById('cart-toggle');
  const closeBtn  = document.getElementById('cart-close');
  const overlay   = document.getElementById('cart-overlay');

  if (toggleBtn) toggleBtn.addEventListener('click', openCart);
  if (closeBtn)  closeBtn.addEventListener('click', closeCart);
  if (overlay)   overlay.addEventListener('click', closeCart);

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      closeCart();
      closeModal();
    }
  });
}

function openCart() {
  const sidebar = document.getElementById('cart-sidebar');
  const overlay = document.getElementById('cart-overlay');
  sidebar.classList.add('open');
  sidebar.setAttribute('aria-hidden', 'false');
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeCart() {
  const sidebar = document.getElementById('cart-sidebar');
  const overlay = document.getElementById('cart-overlay');
  sidebar.classList.remove('open');
  sidebar.setAttribute('aria-hidden', 'true');
  overlay.classList.remove('open');
  document.body.style.overflow = '';
}

function addToCart(productId, qty) {
  qty = qty || modalQty || 1;
  const product = products.find(p => p.id === productId);
  if (!product) return;

  const existing = cart.find(c => c.id === productId);
  if (existing) {
    existing.qty += qty;
  } else {
    cart.push({ id: product.id, name: product.name, price: product.price, img: product.img, qty: qty });
  }

  updateCartUI();
  showToast('✦ تمت إضافة "' + product.name + '" إلى السلة');
}

function removeFromCart(productId) {
  cart = cart.filter(c => c.id !== productId);
  updateCartUI();
}

function updateQty(productId, delta) {
  const item = cart.find(c => c.id === productId);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) {
    removeFromCart(productId);
  } else {
    updateCartUI();
  }
}

function updateCartUI() {
  const totalItems = cart.reduce((sum, c) => sum + c.qty, 0);
  const totalPrice = cart.reduce((sum, c) => sum + c.price * c.qty, 0);

  const countEl  = document.getElementById('cart-count');
  const itemsEl  = document.getElementById('cart-items');
  const footerEl = document.getElementById('cart-footer');
  const totalEl  = document.getElementById('cart-total-price');

  if (countEl) countEl.textContent = totalItems;

  if (!itemsEl) return;

  if (cart.length === 0) {
    itemsEl.innerHTML = `
      <div class="cart-empty">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1">
          <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
          <line x1="3" y1="6" x2="21" y2="6"/>
          <path d="M16 10a4 4 0 0 1-8 0"/>
        </svg>
        <p>سلتك فارغة</p>
        <span>أضف منتجات رائعة لتبدأ تجربتك</span>
      </div>`;
    if (footerEl) footerEl.style.display = 'none';
  } else {
    itemsEl.innerHTML = cart.map(c => `
      <div class="cart-item">
        <img
          class="cart-item-img"
          src="${c.img}"
          alt="${c.name}"
          width="64" height="64"
          loading="lazy"
          onerror="this.src='https://picsum.photos/seed/${c.id}/64/64'"
        >
        <div class="cart-item-info">
          <p class="cart-item-name">${c.name}</p>
          <p class="cart-item-price">${c.price.toLocaleString('ar-DZ')} دج</p>
          <div class="cart-item-controls">
            <button class="qty-btn" onclick="updateQty(${c.id}, -1)" aria-label="تقليل الكمية">−</button>
            <span class="qty-display">${c.qty}</span>
            <button class="qty-btn" onclick="updateQty(${c.id}, 1)" aria-label="زيادة الكمية">+</button>
            <button class="cart-item-remove" onclick="removeFromCart(${c.id})" aria-label="حذف المنتج">✕ حذف</button>
          </div>
        </div>
      </div>`).join('');

    if (footerEl) footerEl.style.display = 'block';
    if (totalEl) totalEl.textContent = totalPrice.toLocaleString('ar-DZ') + ' دج';
  }
}

// ─────────────────────────────────────────
// PRODUCT MODAL
// ─────────────────────────────────────────
function setupModal() {
  const closeBtn = document.getElementById('modal-close');
  const overlay  = document.getElementById('modal-overlay');

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  if (overlay) {
    overlay.addEventListener('click', e => {
      if (e.target === overlay) closeModal();
    });
  }
}

function openModal(productId) {
  currentProduct = products.find(p => p.id === productId);
  if (!currentProduct) return;
  modalQty = 1;

  const related = products
    .filter(p => p.category === currentProduct.category && p.id !== currentProduct.id)
    .slice(0, 3);

  const contentEl = document.getElementById('modal-content');
  if (!contentEl) return;

  contentEl.innerHTML = `
    <div class="modal-product-inner">
      <div class="modal-product-img">
        <img
          src="${currentProduct.img}"
          alt="${currentProduct.name}"
          width="450" height="540"
          loading="lazy"
          onerror="this.src='https://picsum.photos/seed/${currentProduct.id}/450/540'"
        >
      </div>
      <div class="modal-product-details">
        <span class="modal-product-category">${getCategoryLabel(currentProduct.category)}</span>
        <h2 class="modal-product-name">${currentProduct.name}</h2>
        <div>
          ${currentProduct.oldPrice ? `<span class="product-price-old">${currentProduct.oldPrice.toLocaleString('ar-DZ')} دج</span>` : ''}
          <p class="modal-product-price">${currentProduct.price.toLocaleString('ar-DZ')} دج</p>
        </div>
        <div class="modal-divider"></div>
        <p class="modal-product-desc">${currentProduct.desc}</p>
        <div class="product-tags">
          ${currentProduct.tags.map(t => `<span class="product-tag">${t}</span>`).join('')}
        </div>
        <div class="modal-divider"></div>
        <div class="qty-selector">
          <label>الكمية:</label>
          <div class="qty-controls">
            <button onclick="changeModalQty(-1)" aria-label="تقليل الكمية">−</button>
            <span id="modal-qty-display">1</span>
            <button onclick="changeModalQty(1)" aria-label="زيادة الكمية">+</button>
          </div>
        </div>
        <button
          class="modal-add-btn"
          id="modal-add-btn"
          onclick="addToCartFromModal()"
        >
          أضف إلى السلة — <span id="modal-total-price">${currentProduct.price.toLocaleString('ar-DZ')} دج</span>
        </button>
      </div>
    </div>
    ${related.length > 0 ? `
    <div class="related-products">
      <h3>منتجات مشابهة</h3>
      <div class="related-grid">
        ${related.map(r => `
          <div class="related-card" onclick="openModal(${r.id})" role="button" tabindex="0" aria-label="${r.name}">
            <img
              src="${r.img}"
              alt="${r.name}"
              width="200" height="200"
              loading="lazy"
              onerror="this.src='https://picsum.photos/seed/${r.id}/200/200'"
            >
            <div class="related-card-info">
              <p class="related-card-name">${r.name}</p>
              <p class="related-card-price">${r.price.toLocaleString('ar-DZ')} دج</p>
            </div>
          </div>`).join('')}
      </div>
    </div>` : ''}
  `;

  const overlay = document.getElementById('modal-overlay');
  overlay.classList.add('open');
  overlay.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';

  // focus trap
  setTimeout(() => {
    const closeBtn = document.getElementById('modal-close');
    if (closeBtn) closeBtn.focus();
  }, 100);
}

function closeModal() {
  const overlay = document.getElementById('modal-overlay');
  overlay.classList.remove('open');
  overlay.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
  currentProduct = null;
  modalQty = 1;
}

function changeModalQty(delta) {
  modalQty = Math.max(1, modalQty + delta);
  const qtyEl   = document.getElementById('modal-qty-display');
  const totalEl = document.getElementById('modal-total-price');
  if (qtyEl) qtyEl.textContent = modalQty;
  if (totalEl && currentProduct) {
    totalEl.textContent = (currentProduct.price * modalQty).toLocaleString('ar-DZ') + ' دج';
  }
}

function addToCartFromModal() {
  if (!currentProduct) return;
  addToCart(currentProduct.id, modalQty);
  closeModal();
}

// ─────────────────────────────────────────
// TOAST
// ─────────────────────────────────────────
function showToast(msg) {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.textContent = msg;
  toast.classList.add('show');
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => toast.classList.remove('show'), 3500);
}
window.showToast = showToast;

// ─────────────────────────────────────────
// NAVIGATION
// ─────────────────────────────────────────
function setupNav() {
  const hamburger = document.getElementById('nav-hamburger');
  const mobileMenu = document.getElementById('mobile-menu');

  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      const isOpen = hamburger.classList.toggle('open');
      mobileMenu.classList.toggle('open', isOpen);
      hamburger.setAttribute('aria-expanded', String(isOpen));
    });

    mobileMenu.querySelectorAll('.mobile-nav-link').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('open');
        mobileMenu.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Scrolled class for sticky nav shadow
  const header = document.getElementById('nav-header');
  if (header) {
    window.addEventListener('scroll', () => {
      header.classList.toggle('scrolled', window.scrollY > 60);
    }, { passive: true });
  }

  // Active link on scroll
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');
  if (sections.length && navLinks.length) {
    window.addEventListener('scroll', () => {
      let current = '';
      sections.forEach(section => {
        if (window.scrollY >= section.offsetTop - 120) {
          current = section.id;
        }
      });
      navLinks.forEach(link => {
        const href = link.getAttribute('href');
        link.classList.toggle('active', href === '#' + current);
      });
    }, { passive: true });
  }
}

// ─────────────────────────────────────────
// SCROLL REVEAL FALLBACK
// ─────────────────────────────────────────
function setupScrollEffects() {
  // CSS scroll-driven animations handle modern browsers.
  // IntersectionObserver fallback for older browsers.
  if (!CSS.supports('animation-timeline', 'scroll()')) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('.fade-in').forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(16px)';
      el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      observer.observe(el);
    });
  }
}

// ─────────────────────────────────────────
// NEWSLETTER
// ─────────────────────────────────────────
function handleNewsletter(e) {
  e.preventDefault();
  showToast('✦ شكراً! تم الاشتراك في النشرة الأسبوعية بنجاح');
  e.target.reset();
}
window.handleNewsletter = handleNewsletter;

// ─────────────────────────────────────────
// GLOBAL EXPOSE (used in inline HTML onclick)
// ─────────────────────────────────────────
window.openModal        = openModal;
window.closeModal       = closeModal;
window.addToCart        = addToCart;
window.addToCartFromModal = addToCartFromModal;
window.removeFromCart   = removeFromCart;
window.updateQty        = updateQty;
window.changeModalQty   = changeModalQty;
window.openCart         = openCart;
window.closeCart        = closeCart;
