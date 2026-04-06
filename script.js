// قائمة المنتجات الجديدة بالكامل (الاسم يطابق الصورة تماماً)
const products = [
    { 
        id: 1, 
        brand: "Rolex",
        name: "ساعة رولكس صبمارينر", 
        price: 3200000, 
        category: "watches", 
        img: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?q=80&w=800", // صورة ساعة فضية
        desc: "ساعة فاخرة بهيكل من الفولاذ المقاوم للصدأ ومينا أسود أنيق، تصميم كلاسيكي يعبر عن الفخامة." 
    },
    { 
        id: 2, 
        brand: "Audemars Piguet",
        name: "ساعة أوديمار بيغيه", 
        price: 7500000, 
        category: "watches", 
        img: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=800", // صورة ساعة فاخرة (هيكل ذهبي وفضي)
        desc: "تحفة فنية تتميز بتصميم رياضي فاخر ومينا معقد يبرز دقة الصناعة السويسرية." 
    },
    { 
        id: 3, 
        brand: "Chanel",
        name: "عطر شانيل كوكو نوار", 
        price: 48000, 
        category: "perfumes", 
        img: "https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=800", // صورة زجاجة شانيل سوداء
        desc: "عطر نسائي راقي بتركيبة فريدة وزجاجة سوداء ملكية تعكس الغموض والجاذبية." 
    },
    { 
        id: 4, 
        brand: "Tom Ford",
        name: "عطر توم فورد", 
        price: 65000, 
        category: "perfumes", 
        img: "https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=800", // صورة زجاجة توم فورد
        desc: "عطر نيش استثنائي بتوليفة خشبية دافئة تلائم أصحاب الذوق الرفيع والمناسبات الخاصة." 
    },
    { 
        id: 5, 
        brand: "Ray-Ban",
        name: "نظارات شمسية كلاسيكية", 
        price: 35000, 
        category: "accessories", 
        img: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=800", // صورة نظارة شمسية دائرية
        desc: "نظارات شمسية بإطار معدني ذهبي وعدسات داكنة لحماية فائقة وأناقة لا مثيل لها." 
    },
    { 
        id: 6, 
        brand: "Vintage",
        name: "حقيبة ظهر جلدية", 
        price: 55000, 
        category: "accessories", 
        img: "https://images.unsplash.com/photo-1547949003-9792a18a2601?q=80&w=800", // صورة حقيبة ظهر قماش وجلد
        desc: "حقيبة عملية وعصرية مصنوعة من أجود أنواع المواد والجلود، بمساحات واسعة وتصميم أنيق." 
    },
    { 
        id: 7, 
        brand: "Tiffany & Co",
        name: "خاتم ألماس سوليتير", 
        price: 1250000, 
        category: "jewelry", 
        img: "https://images.unsplash.com/photo-1605100804763-247f66126e28?q=80&w=800", // صورة خاتم ألماس
        desc: "خاتم خطوبة كلاسيكي مزين بحجر ألماس نقي ولامع يخطف الأنظار." 
    },
    { 
        id: 8, 
        brand: "Cartier",
        name: "قلادة ذهبية أنيقة", 
        price: 450000, 
        category: "jewelry", 
        img: "https://images.unsplash.com/photo-1599643478524-fb66f7fa0656?q=80&w=800", // صورة قلادة ذهبية
        desc: "قلادة نسائية ناعمة مصاغة من الذهب الخالص لتعطي لمسة جمالية مبهرة لإطلالتك." 
    }
];

let cart = [];

// تأثير الشريط العلوي عند النزول
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// الانيميشن (Scroll Reveal)
const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
        }
    });
}, { root: null, threshold: 0.1 });

function initScrollAnimations() {
    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach(el => revealObserver.observe(el));
}

// دالة عرض الصفحات
function showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
    document.getElementById(pageId + '-page').classList.add('active');
    
    if (pageId === 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

// دالة تنسيق السعر (دينار جزائري)
function formatPrice(price) {
    return price.toLocaleString('en-US') + ' د.ج';
}

// الدالة المسؤولة عن رسم المنتجات في الشبكة (هنا تم حل المشكلة تماماً)
function renderProducts(gridId, productsList) {
    const grid = document.getElementById(gridId);
    if (!grid) return;
    
    // مسح المنتجات السابقة
    grid.innerHTML = '';
    
    // إضافة المنتجات من جديد
    productsList.forEach((product, index) => {
        const delay = index * 0.1; // تأخير حركي لجمالية الظهور
        
        const card = `
            <div class="product-card" style="animation-delay: ${delay}s" onclick="viewProduct(${product.id})">
                <span class="product-brand">${product.brand}</span>
                <div class="product-img">
                    <img src="${product.img}" alt="${product.name}">
                    <button class="add-to-cart-btn" onclick="event.stopPropagation(); addToCart(${product.id})">
                        إضافة للسلة
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

// عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', () => {
    // 1. عرض جميع المنتجات عند فتح الموقع
    renderProducts('main-grid', products);

    // 2. برمجة أزرار الفلترة بدقة عالية
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            // تفعيل لون الزر المضغوط
            filterBtns.forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            
            // جلب قيمة الفلتر
            const category = e.target.dataset.filter;
            
            // فلترة القائمة وعرضها
            if (category === 'all') {
                renderProducts('main-grid', products);
            } else {
                const filteredProducts = products.filter(p => p.category === category);
                renderProducts('main-grid', filteredProducts);
            }
        });
    });

    initScrollAnimations();
});

// دوال السلة (إضافة، حذف، فتح/إغلاق)
function toggleCart() {
    document.getElementById('cart-sidebar').classList.toggle('open');
    document.getElementById('overlay').classList.toggle('active');
}

function addToCart(id, quantity = 1) {
    const product = products.find(p => p.id === id);
    const existingItem = cart.find(item => item.id === id);

    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({ ...product, quantity });
    }
    
    updateCart();
    if (!document.getElementById('cart-sidebar').classList.contains('open')) {
        toggleCart();
    }
}

function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    updateCart();
}

function updateCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    const totalPriceEl = document.getElementById('total-price');
    const cartCountEl = document.querySelector('.cart-count');

    cartItemsContainer.innerHTML = '';
    let total = 0;
    let count = 0;

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p style="text-align:center; color:gray; margin-top:20px;">السلة فارغة</p>';
    } else {
        cart.forEach(item => {
            const itemTotal = item.price * item.quantity;
            total += itemTotal;
            count += item.quantity;
            
            cartItemsContainer.innerHTML += `
                <div class="cart-item">
                    <img src="${item.img}" alt="${item.name}">
                    <div class="cart-item-info">
                        <div class="cart-item-title">${item.name}</div>
                        <div style="color: gray; font-size: 0.9rem;">الكمية: ${item.quantity}</div>
                        <div class="cart-item-actions">
                            <span class="cart-item-price">${formatPrice(itemTotal)}</span>
                            <span class="remove-item" onclick="removeFromCart(${item.id})">حذف</span>
                        </div>
                    </div>
                </div>
            `;
        });
    }

    totalPriceEl.textContent = formatPrice(total);
    cartCountEl.textContent = count;
}

// عرض تفاصيل منتج معين
function viewProduct(id) {
    const product = products.find(p => p.id === id);
    const container = document.getElementById('product-details-container');

    container.innerHTML = `
        <div class="pd-image">
            <img src="${product.img}" alt="${product.name}">
        </div>
        <div class="pd-info">
            <h4 class="pd-brand">${product.brand}</h4>
            <h2 class="pd-title">${product.name}</h2>
            <p class="pd-price">${formatPrice(product.price)}</p>
            <p class="pd-desc">${product.desc}</p>
            <div class="pd-actions">
                <input type="number" id="qty-input" class="qty-input" value="1" min="1">
                <button class="btn-gold" style="flex: 1;" onclick="addToCart(${product.id}, parseInt(document.getElementById('qty-input').value))">
                    أضف إلى السلة
                </button>
            </div>
        </div>
    `;

    // عرض منتجات مشابهة عشوائية
    const displayRelated = products.filter(p => p.id !== id).sort(() => 0.5 - Math.random()).slice(0, 3);
    renderProducts('related-grid', displayRelated);
    
    showPage('product');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
