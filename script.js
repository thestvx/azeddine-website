// بيانات المنتجات
const products = [
    { id: 1, brand: "Rolex", name: "ساعة رولكس صبمارينر", price: 3200000, category: "watches", img: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?q=80&w=800", desc: "أيقونة الساعات السويسرية للغوص. صبمارينر ديت مصنوعة من فولاذ أويستر مع مينا أسود كلاسيكي لا يفقد بريقه مع مرور الزمن." },
    { id: 2, brand: "Audemars Piguet", name: "ساعة رويال أوك", price: 7500000, category: "watches", img: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=800", desc: "رويال أوك أوتوماتيك، التحفة الفنية بهيكل مثمن الأضلاع ومينا (Tapisserie) الذي يعكس أعلى درجات التعقيد السويسري." },
    { id: 3, brand: "Patek Philippe", name: "ساعة نوتيلوس 5711", price: 18000000, category: "watches", img: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?q=80&w=800", desc: "الساعة الأكثر طلباً في العالم. تصميم انسيابي ساحر يجسد قمة الرقي والفخامة في عالم الساعات الراقية." },
    { id: 4, brand: "Tom Ford", name: "عطر عود وود - 100 مل", price: 65000, category: "perfumes", img: "https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=800", desc: "توليفة خشبية نادرة جداً من مجموعة برايفت بليند، تعتمد على خشب العود المعتق لتمنحك هالة من الفخامة الدافئة." },
    { id: 5, brand: "Chanel", name: "عطر كوكو نوار - 100 مل", price: 48000, category: "perfumes", img: "https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=800", desc: "عطر نسائي راقي بتركيبة فريدة داخل زجاجة سوداء ملكية، يمزج بين الجرأة والأنوثة الطاغية." },
    { id: 6, brand: "Dior", name: "عطر سوفاج إلكسير - 60 مل", price: 45000, category: "perfumes", img: "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?q=80&w=800", desc: "الإصدار الأكثر تركيزاً وعمقاً. يجمع بين التوابل الحارة والأخشاب الغنية ليصنع بصمة عطرية قوية لا تُنسى." },
    { id: 7, brand: "Louis Vuitton", name: "حقيبة سفر كيبال 50", price: 420000, category: "accessories", img: "https://images.unsplash.com/photo-1547949003-9792a18a2601?q=80&w=800", desc: "حقيبة السفر الجلدية الأيقونية من لويس فيتون. مساحة رحبة وتصميم يجسد أناقة السفر الراقي." },
    { id: 8, brand: "Cartier", name: "نظارات شمسية سانتوس", price: 185000, category: "accessories", img: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=800", desc: "نظارات مطلية بالذهب بتصميم مستوحى من مجموعة سانتوس دي كارتييه، توفر حماية فائقة بأسلوب بالغ الأناقة." },
    { id: 9, brand: "Hermès", name: "حزام جلدي بحرف H", price: 195000, category: "accessories", img: "https://images.unsplash.com/photo-1624222247344-550fb60583dc?q=80&w=800", desc: "حزام هيرميس الكلاسيكي من الجلد الطبيعي مع المشبك الأيقوني، يضفي هيبة ووقاراً على إطلالتك الرسمية." },
    { id: 10, brand: "Tiffany & Co.", name: "خاتم ألماس سوليتير", price: 1250000, category: "jewelry", img: "https://images.unsplash.com/photo-1605100804763-247f66126e28?q=80&w=800", desc: "خاتم بلاتيني كلاسيكي مرصع بحجر ألماس حر فائق النقاء، رمز الحب الأبدي والفخامة المطلقة." },
    { id: 11, brand: "Van Cleef & Arpels", name: "قلادة فينتاج ألهامبرا", price: 580000, category: "jewelry", img: "https://images.unsplash.com/photo-1599643478524-fb66f7fa0656?q=80&w=800", desc: "القلادة الأيقونية بتصميم زهرة البرسيم الرباعية، مصنوعة من الذهب الخالص لتضفي لمسة ساحرة على عنقك." },
    { id: 12, brand: "Cartier", name: "سوار ذهبي لوف", price: 1150000, category: "jewelry", img: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=800", desc: "سوار (LOVE) الكلاسيكي من كارتييه، مصاغ من الذهب الأصفر الخالص، تصميم يعبر عن قوة الارتباط والأناقة." }
];

// استرجاع السلة من Local Storage أو إنشاء مصفوفة فارغة
let cart = JSON.parse(localStorage.getItem('azzCart')) || [];

// إعدادات الفلتر والبحث والترتيب
let currentFilter = 'all';
let currentSearch = '';
let currentSort = 'default';

// تأثير الشريط العلوي عند التمرير
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// مراقب حركة التمرير
const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
        }
    });
}, { root: null, threshold: 0.1 });

function initScrollAnimations() {
    document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
}

// التنقل بين الصفحات
function showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
    document.getElementById(pageId + '-page').classList.add('active');
    if (pageId === 'home') { window.scrollTo({ top: 0, behavior: 'smooth' }); }
}

// تنسيق السعر
function formatPrice(price) {
    return price.toLocaleString('en-US') + ' د.ج';
}

// تطبيق الفلاتر والبحث والترتيب
function applyFilters() {
    let filtered = products;

    // 1. فلتر الأقسام
    if (currentFilter !== 'all') {
        filtered = filtered.filter(p => p.category === currentFilter);
    }

    // 2. فلتر البحث (بالاسم أو الماركة)
    if (currentSearch.trim() !== '') {
        const query = currentSearch.toLowerCase();
        filtered = filtered.filter(p => 
            p.name.toLowerCase().includes(query) || 
            p.brand.toLowerCase().includes(query)
        );
    }

    // 3. الترتيب
    if (currentSort === 'low-high') {
        filtered.sort((a, b) => a.price - b.price);
    } else if (currentSort === 'high-low') {
        filtered.sort((a, b) => b.price - a.price);
    } else {
        filtered.sort((a, b) => a.id - b.id); // الافتراضي
    }

    renderProducts('main-grid', filtered);
}

// دالة عرض المنتجات في الشبكة
function renderProducts(gridId, productsList) {
    const grid = document.getElementById(gridId);
    if (!grid) return;
    
    grid.innerHTML = '';
    
    if(productsList.length === 0) {
        grid.innerHTML = '<div style="grid-column: 1 / -1; text-align: center; padding: 50px; font-size: 1.5rem; color: var(--text-muted);">عذراً، لم نتمكن من العثور على منتجات تطابق بحثك.</div>';
        return;
    }

    productsList.forEach((product, index) => {
        const delay = index * 0.08;
        const card = `
            <div class="product-card" style="animation-delay: ${delay}s" onclick="viewProduct(${product.id})">
                <span class="product-brand-tag">${product.brand}</span>
                <div class="product-img">
                    <img src="${product.img}" alt="${product.name}">
                    <button class="add-to-cart-btn" onclick="event.stopPropagation(); addToCart(${product.id})">
                        <i class="fas fa-shopping-cart" style="margin-left:8px;"></i> أضف للسلة
                    </button>
                </div>
                <div class="product-info">
                    <h3 class="product-name">${product.name}</h3>
                    <p class="product-price">${formatPrice(product.price)}</p>
                </div>
            </div>
        `;
        grid.innerHTML += card;
    });
}

// التهيئة عند بدء الموقع
document.addEventListener('DOMContentLoaded', () => {
    applyFilters(); // عرض مبدئي
    updateCartUI(); // تحديث السلة من Local Storage

    // برمجة أزرار التصنيفات
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            filterBtns.forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            currentFilter = e.target.dataset.filter;
            applyFilters();
        });
    });

    // برمجة مربع البحث
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            currentSearch = e.target.value;
            applyFilters();
        });
    }

    // برمجة قائمة الترتيب
    const sortSelect = document.getElementById('sort-select');
    if (sortSelect) {
        sortSelect.addEventListener('change', (e) => {
            currentSort = e.target.value;
            applyFilters();
        });
    }

    initScrollAnimations();
});

// نظام الإشعارات المنبثقة (Toast Notification)
function showToast(message) {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<i class="fas fa-check-circle"></i> <span>${message}</span>`;
    container.appendChild(toast);
    setTimeout(() => toast.remove(), 4000);
}

// السلة (Local Storage & Logic)
function toggleCart() {
    document.getElementById('cart-sidebar').classList.toggle('open');
    document.getElementById('overlay').classList.toggle('active');
}

function saveCart() {
    localStorage.setItem('azzCart', JSON.stringify(cart));
}

function addToCart(id, quantity = 1) {
    const product = products.find(p => p.id === id);
    const existingItem = cart.find(item => item.id === id);

    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({ ...product, quantity });
    }
    
    saveCart();
    updateCartUI();
    showToast(`تمت إضافة "${product.name}" للسلة بنجاح`);
}

function changeQty(id, delta) {
    const item = cart.find(item => item.id === id);
    if (item) {
        item.quantity += delta;
        if (item.quantity <= 0) {
            removeFromCart(id);
        } else {
            saveCart();
            updateCartUI();
        }
    }
}

function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    saveCart();
    updateCartUI();
}

function updateCartUI() {
    const cartItemsContainer = document.getElementById('cart-items');
    const totalPriceEl = document.getElementById('total-price');
    const cartCountEl = document.getElementById('cart-badge');

    cartItemsContainer.innerHTML = '';
    let total = 0;
    let count = 0;

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = `
            <div style="text-align:center; color:var(--text-muted); margin-top:80px;">
                <i class="fas fa-box-open" style="font-size:4rem; margin-bottom:20px; opacity:0.3;"></i>
                <p style="font-size:1.3rem;">السلة فارغة حالياً</p>
                <p style="font-size:0.9rem; margin-top:10px;">اكتشف مجموعتنا الفاخرة وأضف منتجاتك المفضلة</p>
            </div>
        `;
    } else {
        cart.forEach(item => {
            const itemTotal = item.price * item.quantity;
            total += itemTotal;
            count += item.quantity;
            
            cartItemsContainer.innerHTML += `
                <div class="cart-item">
                    <span class="remove-item" onclick="removeFromCart(${item.id})"><i class="fas fa-times"></i></span>
                    <img src="${item.img}" alt="${item.name}">
                    <div class="cart-item-info">
                        <div class="cart-item-title">${item.brand} | ${item.name}</div>
                        <div class="cart-qty-controls">
                            <button class="cart-qty-btn" onclick="changeQty(${item.id}, 1)"><i class="fas fa-plus"></i></button>
                            <span class="cart-qty-val">${item.quantity}</span>
                            <button class="cart-qty-btn" onclick="changeQty(${item.id}, -1)"><i class="fas fa-minus"></i></button>
                        </div>
                        <div class="cart-item-price" style="text-align: left;">${formatPrice(itemTotal)}</div>
                    </div>
                </div>
            `;
        });
    }

    totalPriceEl.textContent = formatPrice(total);
    cartCountEl.textContent = count;
    
    // أنيميشن للأيقونة
    if (count > 0) {
        cartCountEl.classList.add('pop');
        setTimeout(() => cartCountEl.classList.remove('pop'), 300);
    }
}

// عرض تفاصيل منتج معين (صفحة المنتج)
function viewProduct(id) {
    const product = products.find(p => p.id === id);
    const container = document.getElementById('product-details-container');

    container.innerHTML = `
        <div class="pd-image">
            <span class="product-brand-tag" style="top:30px; right:30px; font-size:1.2rem;">${product.brand}</span>
            <img src="${product.img}" alt="${product.name}">
        </div>
        <div class="pd-info">
            <h4 class="pd-brand">${product.brand}</h4>
            <h2 class="pd-title">${product.name}</h2>
            <p class="pd-price">${formatPrice(product.price)}</p>
            <p class="pd-desc">${product.desc}</p>
            
            <div class="pd-actions">
                <input type="number" id="qty-input" class="qty-input" value="1" min="1">
                <button class="btn-gold hover-glow" style="flex: 1;" onclick="addFromDetails(${product.id})">
                    <i class="fas fa-shopping-bag" style="margin-left: 10px;"></i> إضافة للسلة
                </button>
            </div>

            <div class="guarantee-list">
                <p><i class="fas fa-certificate"></i> شهادة الأصالة والضمان الدولي مرفقة</p>
                <p><i class="fas fa-truck-fast"></i> توصيل VIP مؤمن عبر كافة ولايات الوطن</p>
                <p><i class="fas fa-gift"></i> تغليف ملكي فاخر يليق بمكانتك</p>
            </div>
        </div>
    `;

    // عرض منتجات مشابهة (لا تشمل المنتج الحالي)
    const relatedProducts = products.filter(p => p.category === product.category && p.id !== id);
    const displayRelated = (relatedProducts.length > 0 ? relatedProducts : products.filter(p => p.id !== id)).sort(() => 0.5 - Math.random()).slice(0, 3);
    
    renderProducts('related-grid', displayRelated);
    
    showPage('product');
}

function addFromDetails(id) {
    const qty = parseInt(document.getElementById('qty-input').value) || 1;
    if(qty > 0) addToCart(id, qty);
}

// عملية الدفع (وهمية للتجربة)
function checkout() {
    if (cart.length === 0) {
        showToast("السلة فارغة، لا يمكن إتمام الطلب.");
        return;
    }
    showToast("جاري توجيهك لصفحة الدفع الآمن...");
    setTimeout(() => {
        cart = [];
        saveCart();
        updateCartUI();
        toggleCart();
        showPage('home');
        showToast("تم تأكيد طلبك بنجاح! شكراً لثقتكم بـ Azz Luxury.");
    }, 2000);
}
