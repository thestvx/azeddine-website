// 12 منتج فاخر وحقيقي بأسماء دقيقة وصور مطابقة 100%
const products = [
    { 
        id: 1, brand: "Rolex", name: "ساعة رولكس صبمارينر", price: 3200000, category: "watches", 
        img: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?q=80&w=800",
        desc: "أيقونة الساعات السويسرية للغوص. صبمارينر ديت مصنوعة من فولاذ أويستر مع مينا أسود كلاسيكي لا يفقد بريقه مع مرور الزمن." 
    },
    { 
        id: 2, brand: "Audemars Piguet", name: "ساعة رويال أوك", price: 7500000, category: "watches", 
        img: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=800",
        desc: "رويال أوك أوتوماتيك، التحفة الفنية بهيكل مثمن الأضلاع ومينا (Tapisserie) الذي يعكس أعلى درجات التعقيد السويسري." 
    },
    { 
        id: 3, brand: "Patek Philippe", name: "ساعة نوتيلوس 5711", price: 18000000, category: "watches", 
        img: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?q=80&w=800",
        desc: "الساعة الأكثر طلباً في العالم. تصميم انسيابي ساحر يجسد قمة الرقي والفخامة في عالم الساعات الراقية." 
    },
    { 
        id: 4, brand: "Tom Ford", name: "عطر عود وود - 100 مل", price: 65000, category: "perfumes", 
        img: "https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=800",
        desc: "توليفة خشبية نادرة جداً من مجموعة برايفت بليند، تعتمد على خشب العود المعتق لتمنحك هالة من الفخامة الدافئة." 
    },
    { 
        id: 5, brand: "Chanel", name: "عطر كوكو نوار - 100 مل", price: 48000, category: "perfumes", 
        img: "https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=800",
        desc: "عطر نسائي راقي بتركيبة فريدة داخل زجاجة سوداء ملكية، يمزج بين الجرأة والأنوثة الطاغية." 
    },
    { 
        id: 6, brand: "Dior", name: "عطر سوفاج إلكسير - 60 مل", price: 45000, category: "perfumes", 
        img: "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?q=80&w=800",
        desc: "الإصدار الأكثر تركيزاً وعمقاً. يجمع بين التوابل الحارة والأخشاب الغنية ليصنع بصمة عطرية قوية لا تُنسى." 
    },
    { 
        id: 7, brand: "Louis Vuitton", name: "حقيبة سفر كيبال 50", price: 420000, category: "accessories", 
        img: "https://images.unsplash.com/photo-1547949003-9792a18a2601?q=80&w=800",
        desc: "حقيبة السفر الجلدية الأيقونية من لويس فيتون. مساحة رحبة وتصميم يجسد أناقة السفر الراقي." 
    },
    { 
        id: 8, brand: "Cartier", name: "نظارات شمسية سانتوس", price: 185000, category: "accessories", 
        img: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=800",
        desc: "نظارات مطلية بالذهب بتصميم مستوحى من مجموعة سانتوس دي كارتييه، توفر حماية فائقة بأسلوب بالغ الأناقة." 
    },
    { 
        id: 9, brand: "Hermès", name: "حزام جلدي بحرف H", price: 195000, category: "accessories", 
        img: "https://images.unsplash.com/photo-1624222247344-550fb60583dc?q=80&w=800",
        desc: "حزام هيرميس الكلاسيكي من الجلد الطبيعي مع المشبك الأيقوني، يضفي هيبة ووقاراً على إطلالتك الرسمية." 
    },
    { 
        id: 10, brand: "Tiffany & Co.", name: "خاتم ألماس سوليتير", price: 1250000, category: "jewelry", 
        img: "https://images.unsplash.com/photo-1605100804763-247f66126e28?q=80&w=800",
        desc: "خاتم بلاتيني كلاسيكي مرصع بحجر ألماس حر فائق النقاء، رمز الحب الأبدي والفخامة المطلقة." 
    },
    { 
        id: 11, brand: "Van Cleef & Arpels", name: "قلادة فينتاج ألهامبرا", price: 580000, category: "jewelry", 
        img: "https://images.unsplash.com/photo-1599643478524-fb66f7fa0656?q=80&w=800",
        desc: "القلادة الأيقونية بتصميم زهرة البرسيم الرباعية، مصنوعة من الذهب الخالص لتضفي لمسة ساحرة على عنقك." 
    },
    { 
        id: 12, brand: "Cartier", name: "سوار ذهبي لوف", price: 1150000, category: "jewelry", 
        img: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=800",
        desc: "سوار (LOVE) الكلاسيكي من كارتييه، مصاغ من الذهب الأصفر الخالص، تصميم يعبر عن قوة الارتباط والأناقة." 
    }
];

let cart = [];

// تأثير الشريط العلوي عند التمرير
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// مراقب حركة التمرير لإظهار العناصر بسلاسة
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

// دالة عرض الصفحات والتنقل الداخلي
function showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
    document.getElementById(pageId + '-page').classList.add('active');
    
    if (pageId === 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

// تنسيق السعر
function formatPrice(price) {
    return price.toLocaleString('en-US') + ' د.ج';
}

// دالة عرض المنتجات في الشبكة
function renderProducts(gridId, productsList) {
    const grid = document.getElementById(gridId);
    if (!grid) return;
    grid.innerHTML = '';
    
    productsList.forEach((product, index) => {
        const delay = index * 0.08;
        const card = `
            <div class="product-card" style="animation-delay: ${delay}s" onclick="viewProduct(${product.id})">
                <span class="product-brand-tag">${product.brand}</span>
                <div class="product-img">
                    <img src="${product.img}" alt="${product.name}" onerror="this.src='https://images.unsplash.com/photo-1600003014755-ba31aa59c4b6?q=80&w=800'">
                    <button class="add-to-cart-btn" onclick="event.stopPropagation(); addToCart(${product.id})">
                        <i class="fas fa-cart-plus" style="margin-left:8px;"></i> أضف للسلة
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
    renderProducts('main-grid', products);

    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            filterBtns.forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            
            const category = e.target.dataset.filter;
            if (category === 'all') {
                renderProducts('main-grid', products);
            } else {
                const filtered = products.filter(p => p.category === category);
                renderProducts('main-grid', filtered);
            }
        });
    });

    initScrollAnimations();
});

// نظام الإشعارات المنبثقة (Toast Notification)
function showToast(message) {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<i class="fas fa-check-circle"></i> <span>${message}</span>`;
    
    container.appendChild(toast);
    
    // مسح الإشعار بعد انتهاء الأنيميشن
    setTimeout(() => {
        toast.remove();
    }, 3500);
}

// التحكم بالسلة
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
    
    // إظهار إشعار نجاح بدلاً من الفتح المزعج للسلة في كل مرة
    showToast(`تمت إضافة "${product.name}" للسلة بنجاح`);
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
        cartItemsContainer.innerHTML = `
            <div style="text-align:center; color:var(--text-muted); margin-top:50px;">
                <i class="fas fa-shopping-bag" style="font-size:4rem; margin-bottom:20px; opacity:0.2;"></i>
                <p style="font-size:1.2rem;">السلة فارغة حالياً</p>
            </div>
        `;
    } else {
        cart.forEach(item => {
            const itemTotal = item.price * item.quantity;
            total += itemTotal;
            count += item.quantity;
            
            cartItemsContainer.innerHTML += `
                <div class="cart-item">
                    <img src="${item.img}" alt="${item.name}">
                    <div class="cart-item-info">
                        <div class="cart-item-title">${item.brand} | ${item.name}</div>
                        <div style="color: var(--text-muted); font-size: 0.95rem;">الكمية: ${item.quantity}</div>
                        <div class="cart-item-actions">
                            <span class="cart-item-price">${formatPrice(itemTotal)}</span>
                            <span class="remove-item" onclick="removeFromCart(${item.id})"><i class="fas fa-trash-alt"></i> إزالة</span>
                        </div>
                    </div>
                </div>
            `;
        });
    }

    totalPriceEl.textContent = formatPrice(total);
    cartCountEl.textContent = count;
    
    // تحريك أيقونة السلة
    cartCountEl.style.transform = 'scale(1.4)';
    setTimeout(() => cartCountEl.style.transform = 'scale(1)', 300);
}

// عرض تفاصيل منتج معين (صفحة المنتج)
function viewProduct(id) {
    const product = products.find(p => p.id === id);
    const container = document.getElementById('product-details-container');

    container.innerHTML = `
        <div class="pd-image">
            <span class="product-brand-tag" style="top:30px; right:30px; font-size:1.1rem;">${product.brand}</span>
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
                    <i class="fas fa-shopping-bag" style="margin-left: 10px;"></i> أضف إلى السلة
                </button>
            </div>

            <div class="guarantee-list">
                <p><i class="fas fa-certificate"></i> مرفق بشهادة الأصالة والضمان الدولي</p>
                <p><i class="fas fa-truck-fast"></i> توصيل VIP مؤمن عبر كافة الولايات</p>
                <p><i class="fas fa-gift"></i> تغليف ملكي فاخر يليق بك</p>
            </div>
        </div>
    `;

    // عرض 3 منتجات مشابهة بشكل عشوائي
    const displayRelated = products.filter(p => p.id !== id).sort(() => 0.5 - Math.random()).slice(0, 3);
    renderProducts('related-grid', displayRelated);
    
    showPage('product');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function addFromDetails(id) {
    const qty = parseInt(document.getElementById('qty-input').value) || 1;
    if(qty > 0) addToCart(id, qty);
}
