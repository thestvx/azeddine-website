// بيانات المنتجات بمسارات الصور المحلية الخاصة بك (21 منتج)
const products = [
    // قسم ساعات اليد (6 صور)
    { id: 1, brand: "Rolex", name: "ساعة رولكس صبمارينر", price: 3200000, category: "watches", img: "images/watches/01.jpg", desc: "أيقونة الساعات السويسرية للغوص، مصنوعة من فولاذ أويستر المتين مع مينا فاخر يعكس الفخامة والقوة." },
    { id: 2, brand: "Audemars Piguet", name: "ساعة رويال أوك", price: 7500000, category: "watches", img: "images/watches/02.jpg", desc: "التحفة الفنية بهيكل مثمن الأضلاع ومينا (Tapisserie) الذي يعكس أعلى درجات التعقيد الرياضي الفاخر." },
    { id: 3, brand: "Patek Philippe", name: "ساعة نوتيلوس", price: 18000000, category: "watches", img: "images/watches/03.jpg", desc: "الساعة الأكثر طلباً في العالم. تصميم انسيابي ساحر يجسد قمة الرقي والفخامة في عالم الساعات الراقية." },
    { id: 4, brand: "Cartier", name: "ساعة سانتوس دي كارتييه", price: 1450000, category: "watches", img: "images/watches/04.jpg", desc: "تصميم كلاسيكي مربع يعكس الأناقة الباريسية المطعمة بمسامير كارتييه الأيقونية، مثالية للإطلالات الرسمية." },
    { id: 5, brand: "Omega", name: "ساعة سبيدماستر", price: 1100000, category: "watches", img: "images/watches/05.jpg", desc: "ساعة الكرونوغراف الأسطورية، الخيار الأول لرواد الفضاء وعشاق الدقة السويسرية العالية." },
    { id: 6, brand: "Richard Mille", name: "ساعة ريتشارد ميل", price: 25000000, category: "watches", img: "images/watches/06.jpg", desc: "قمة التعقيد الميكانيكي والتصميم الرياضي الجريء، مصنوعة من أخف المواد وأصلبها لتجربة لا تضاهى." },

    // قسم العطور (6 صور)
    { id: 7, brand: "Emporio Armani", name: "عطر سترونجر ويذ يو إنتنسلي", price: 65000, category: "perfumes", img: "images/parfums/01.jpg", desc: "توليفة خشبية نادرة جداً من برايفت بليند، تعتمد على خشب العود المعتق لتمنحك هالة من الفخامة الدافئة." },
    { id: 8, brand: "Creed", name: "عطر كريد أفينتوس", price: 48000, category: "perfumes", img: "images/parfums/02.jpg", desc: "عطر نسائي راقي بتركيبة فريدة داخل زجاجة سوداء ملكية، يمزج بين الجرأة والجاذبية والأنوثة الطاغية." },
    { id: 9, brand: "Dior", name: "عطر ديور هوم إنتنس", price: 45000, category: "perfumes", img: "images/parfums/03.jpg", desc: "الإصدار الأكثر تركيزاً وعمقاً. يجمع بين التوابل الحارة والأخشاب الغنية ليصنع بصمة عطرية قوية لا تُنسى." },
    { id: 10, brand: "Tom Ford", name: "عطر توم فورد أومبري ليذر", price: 75000, category: "perfumes", img: "images/parfums/04.jpg", desc: "عطر النبلاء والملوك، يتميز بنفحات منعشة وقاعدة خشبية صلبة تعكس القوة والنجاح والثقة." },
    { id: 11, brand: "Dior", name: "عطر سوفاج", price: 95000, category: "perfumes", img: "images/parfums/05.jpg", desc: "عطر نيش آسر يمزج بين الياسمين، الزعفران، وأخشاب الأرز لثبات يدوم طويلاً وانتشار يلفت الأنظار." },
    { id: 12, brand: "Versace", name: "عطر فيرساتشي إيروس", price: 85000, category: "perfumes", img: "images/parfums/06.jpg", desc: "عطر شرقي فخم يجسد الفخامة العمانية بأرقى الزيوت العطرية الملكية والنفحات الدخانية العميقة." },

    // قسم الحقائب الفاخرة (9 صور)
    { id: 13, brand: "Louis Vuitton", name: "حقيبة كيبال", price: 420000, category: "accessories", img: "images/handbags/01.jpg", desc: "حقيبة السفر الجلدية الأيقونية من لويس فيتون بمساحة رحبة وتصميم يجسد أناقة التنقل الراقي." },
    { id: 14, brand: "Hermès", name: "حقيبة بيركين", price: 3500000, category: "accessories", img: "images/handbags/02.jpg", desc: "الحقيبة الأكثر حصريّة في العالم، مصنوعة يدوياً بحرفية عالية من أفخم أنواع الجلود ومزينة بأرقى المعادن." },
    { id: 15, brand: "Chanel", name: "حقيبة كلاسيك فلاب", price: 1850000, category: "accessories", img: "images/handbags/03.jpg", desc: "حقيبة شانيل الأيقونية المبطنة، مزينة بسلسلة ذهبية متشابكة بالجلد الساحر وشعار CC المزدوج." },
    { id: 16, brand: "Gucci", name: "حقيبة مارمونت", price: 550000, category: "accessories", img: "images/handbags/04.jpg", desc: "حقيبة كتف أنيقة بشعار غوتشي الذهبي الكلاسيكي (GG) وتصميم عصري جذاب يناسب كافة إطلالاتك." },
    { id: 17, brand: "Prada", name: "حقيبة غاليريا", price: 620000, category: "accessories", img: "images/handbags/05.jpg", desc: "حقيبة رسمية فخمة من جلد السافيانو المقاوم للخدش، الخيار الأمثل لإطلالة العمل وسيدات الأعمال." },
    { id: 18, brand: "Yves Saint Laurent", name: "حقيبة كيت", price: 480000, category: "accessories", img: "images/handbags/06.jpg", desc: "حقيبة سهرة ناعمة مزينة بشعار YSL الأيقوني وشرابة معدنية تتدلى بأناقة لتعزيز حضورك في المناسبات." },
    { id: 19, brand: "Bottega Veneta", name: "حقيبة كاسيت", price: 750000, category: "accessories", img: "images/handbags/07.jpg", desc: "حقيبة منسوجة بتقنية (الإنترشياتو) الشهيرة من جلد العجل المبطن ذو الملمس الفاخر والتصميم الفريد." },
    { id: 20, brand: "Dior", name: "حقيبة ليدي ديور", price: 950000, category: "accessories", img: "images/handbags/08.jpg", desc: "تحفة فنية تحمل طابع الأناقة الباريسية الكلاسيكية، مع حليات ديور المعدنية البارزة ونقشة كاناج العريقة." },
    { id: 21, brand: "Fendi", name: "حقيبة بيكابو", price: 820000, category: "accessories", img: "images/handbags/09.jpg", desc: "حقيبة عملية وأنيقة يمكن فتحها بأسلوب متدلي لإظهار البطانة الفاخرة المتباينة، لأسلوب يجمع بين الجدية والمرح." }
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
                    <img src="${product.img}" alt="${product.name}" onerror="this.src='https://images.unsplash.com/photo-1600003014755-ba31aa59c4b6?q=80&w=800'">
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
                    <img src="${item.img}" alt="${item.name}" onerror="this.src='https://images.unsplash.com/photo-1600003014755-ba31aa59c4b6?q=80&w=800'">
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
            <img src="${product.img}" alt="${product.name}" onerror="this.src='https://images.unsplash.com/photo-1600003014755-ba31aa59c4b6?q=80&w=800'">
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

    // عرض منتجات مشابهة (لا تشمل المنتج الحالي ونفس الفئة)
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
