// بيانات المنتجات بأسماء دقيقة تتطابق حرفياً مع الصور وأسعار واقعية بالسوق (دينار جزائري)
const products = [
    { 
        id: 1, 
        brand: "Rolex",
        name: "ساعة رولكس صبمارينر", 
        price: 3200000, 
        category: "watches", 
        img: "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?auto=format&fit=crop&q=80&w=800", 
        desc: "ساعة رولكس الأيقونية مينا أسود مع سوار أويستر الفولاذي الفاخر. تصميم كلاسيكي يعكس قوة وأناقة الساعات السويسرية، مثالية للرجل العصري." 
    },
    { 
        id: 2, 
        brand: "Tom Ford",
        name: "عطر توم فورد عود وود - 100 مل", 
        price: 65000, 
        category: "perfumes", 
        img: "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80&w=800", 
        desc: "عطر (Oud Wood) من توم فورد برايفت بليند. توليفة خشبية نادرة جداً تعتمد على خشب العود المعتق، مع مزيج ساحر يمنحك هالة من الفخامة والدفء." 
    },
    { 
        id: 3, 
        brand: "Louis Vuitton",
        name: "حقيبة سفر لويس فيتون كيبال", 
        price: 420000, 
        category: "accessories", 
        img: "https://images.unsplash.com/photo-1547949003-9792a18a2601?auto=format&fit=crop&q=80&w=800", 
        desc: "حقيبة السفر الجلدية الأيقونية من لويس فيتون. مصنوعة من الجلد الفاخر باللون البني الكلاسيكي الذي يجسد الأناقة أثناء التنقل والسفر." 
    },
    { 
        id: 4, 
        brand: "Ray-Ban / Cartier",
        name: "نظارات شمسية كلاسيكية", 
        price: 85000, 
        category: "accessories", 
        img: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&q=80&w=800", 
        desc: "نظارات شمسية كلاسيكية بتصميم فريمر عصري (Retro). عدسات عالية الجودة مضادة للانعكاس توفر حماية فائقة وتضفي لمسة من الغموض والأناقة." 
    },
    { 
        id: 5, 
        brand: "Audemars Piguet",
        name: "ساعة أوديمار بيغيه رويال أوك", 
        price: 7500000, 
        category: "watches", 
        img: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&q=80&w=800", 
        desc: "تحفة أوديمار بيغيه (Royal Oak). هيكل مثمن الأضلاع من الفولاذ المقاوم للصدأ المصقول يدوياً مع مسامير بارزة، تمثل قمة التعقيد الرياضي الفاخر." 
    },
    { 
        id: 6, 
        brand: "Amouage / Niche",
        name: "مجموعة عطور النيش الفاخرة", 
        price: 185000, 
        category: "perfumes", 
        img: "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&q=80&w=800", 
        desc: "مجموعة حصرية من العطور الملكية المعبأة في زجاجات كريستالية راقية. تنوع مثالي يناسب فترات الصباح، المساء، والمناسبات الرسمية الكبرى." 
    },
    { 
        id: 7, 
        brand: "Bottega Veneta",
        name: "محفظة جلدية إنترشياتو", 
        price: 110000, 
        category: "accessories", 
        img: "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&q=80&w=800", 
        desc: "محفظة رجالية من بوتيغا فينيتا، مصنوعة يدوياً باستخدام تقنية النسج (Intrecciato) الحصرية من أرقى أنواع جلد العجل الناعم الأسود الفاخر." 
    },
    { 
        id: 8, 
        brand: "Patek Philippe",
        name: "ساعة باتيك فيليب نوتيلوس", 
        price: 18000000, 
        category: "watches", 
        img: "https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?auto=format&fit=crop&q=80&w=800", 
        desc: "الأسطورة (Nautilus)، إحدى أندر الساعات وأكثرها طلباً في العالم. تصميم انسيابي فضي خلاب مرصع بلمسات ألماسية دقيقة، استثمار تتوارثه الأجيال." 
    },
    { 
        id: 9, 
        brand: "Tiffany & Co.",
        name: "خاتم تيفاني ألماس سوليتير", 
        price: 1250000, 
        category: "jewelry", 
        img: "https://images.unsplash.com/photo-1605100804763-247f66126e28?auto=format&fit=crop&q=80&w=800", 
        desc: "خاتم سوليتير كلاسيكي مرصع بحجر ألماس حر فائق النقاء. مصاغ بعناية فائقة على قاعدة من البلاتين ليبرز بريق الألماسة ويخطف كل الأنظار." 
    },
    { 
        id: 10, 
        brand: "Van Cleef & Arpels",
        name: "قلادة فينتاج ألهامبرا", 
        price: 580000, 
        category: "jewelry", 
        img: "https://images.unsplash.com/photo-1599643478524-fb66f7fa0656?auto=format&fit=crop&q=80&w=800", 
        desc: "قلادة (Vintage Alhambra) الفاخرة، مصممة على شكل زهرة البرسيم الرباعية التي ترمز للحظ، متدلية بأناقة من سلسلة ذهبية رقيقة ولامعة." 
    },
    { 
        id: 11, 
        brand: "Dior",
        name: "عطر ديور سوفاج إلكسير - 100 مل", 
        price: 45000, 
        category: "perfumes", 
        img: "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?auto=format&fit=crop&q=80&w=800", 
        desc: "الإصدار الأكثر تركيزاً (Elixir) بلمسة زرقاء داكنة جذابة. يجمع بين التوابل الحارة، اللافندر، والأخشاب الغنية ليصنع بصمة عطرية رجولية قوية." 
    },
    { 
        id: 12, 
        brand: "Hermès",
        name: "حزام هيرميس الجلدي الفاخر", 
        price: 185000, 
        category: "accessories", 
        img: "https://images.unsplash.com/photo-1624222247344-550fb60583dc?auto=format&fit=crop&q=80&w=800", 
        desc: "حزام كلاسيكي فاخر من هيرميس. مصنوع من الجلد الطبيعي المقاوم للخدش، ليناسب جميع إطلالاتك الرسمية واليومية ويضيف لها هيبة ووقاراً." 
    }
];

let cart = [];

// تأثير السكرول للشريط العلوي
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// مراقب الانيميشن الخاص بالعناوين فقط (تم فصله عن الكروت لحل مشكلة عدم ظهور الفلترة)
const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
        }
    });
}, {
    root: null,
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
});

function initScrollAnimations() {
    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach(el => revealObserver.observe(el));
}

// التنقل بين الصفحات
function showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    
    const targetPage = document.getElementById(pageId + '-page');
    targetPage.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });

    setTimeout(() => {
        const pageReveals = targetPage.querySelectorAll('.reveal');
        pageReveals.forEach(el => {
            el.classList.remove('active');
            revealObserver.observe(el);
        });
    }, 100);
}

// دالة لتنسيق السعر بالدينار الجزائري
function formatPrice(price) {
    return price.toLocaleString('en-US') + ' د.ج';
}

// عرض المنتجات (مع حل مشكلة عدم الظهور في فئة الكل والاعتماد الكامل على CSS Keyframes)
function renderProducts(gridId, productsList, limit = null) {
    const grid = document.getElementById(gridId);
    if (!grid) return;
    grid.innerHTML = '';
    
    const items = limit ? productsList.slice(0, limit) : productsList;

    items.forEach((product, index) => {
        const delay = (index * 0.1); // تأخير متتابع بسيط للأنيميشن
        // أضفنا onerror كإجراء احتياطي إذا لم تظهر الصورة
        const cardHtml = `
            <div class="product-card" style="animation-delay: ${delay}s" onclick="viewProduct(${product.id})">
                <span class="product-brand">${product.brand}</span>
                <div class="product-img">
                    <img src="${product.img}" alt="${product.name}" onerror="this.src='https://images.unsplash.com/photo-1600003014755-ba31aa59c4b6?auto=format&fit=crop&q=80&w=800'">
                    <button class="add-to-cart-btn" onclick="event.stopPropagation(); addToCart(${product.id})">
                        <i class="fas fa-shopping-bag" style="margin-left: 8px;"></i> إضافة للسلة
                    </button>
                </div>
                <div class="product-info">
                    <h3 class="product-name">${product.name}</h3>
                    <p class="product-price">${formatPrice(product.price)}</p>
                </div>
            </div>
        `;
        grid.innerHTML += cardHtml;
    });
}

// التهيئة عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', () => {
    // عرض 6 منتجات في الرئيسية
    renderProducts('featured-grid', products, 6);
    
    // عرض جميع المنتجات في صفحة المتجر
    renderProducts('shop-grid', products);

    // برمجة أزرار الفلترة
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            filterBtns.forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            
            const filter = e.target.dataset.filter;
            if (filter === 'all') {
                renderProducts('shop-grid', products);
            } else {
                const filtered = products.filter(p => p.category === filter);
                renderProducts('shop-grid', filtered);
            }
        });
    });

    initScrollAnimations();
});

// التحكم بالسلة
function toggleCart() {
    const sidebar = document.getElementById('cart-sidebar');
    const overlay = document.getElementById('overlay');
    
    sidebar.classList.toggle('open');
    overlay.classList.toggle('active');
    
    if (sidebar.classList.contains('open')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }
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
    const itemElement = document.getElementById(`cart-item-${id}`);
    if(itemElement) {
        itemElement.style.opacity = '0';
        itemElement.style.transform = 'translateX(30px)';
        setTimeout(() => {
            cart = cart.filter(item => item.id !== id);
            updateCart();
        }, 300);
    }
}

function updateCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    const totalPriceEl = document.getElementById('total-price');
    const cartCountEl = document.querySelector('.cart-count');

    cartItemsContainer.innerHTML = '';
    let total = 0;
    let count = 0;

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<div style="text-align: center; color: var(--text-muted); margin-top: 3rem; font-size: 1.2rem;"><i class="fas fa-shopping-basket" style="font-size: 3rem; margin-bottom: 1rem; color: var(--border-color); display:block;"></i> سلة المشتريات فارغة</div>';
    } else {
        cart.forEach(item => {
            const itemTotal = item.price * item.quantity;
            total += itemTotal;
            count += item.quantity;
            
            cartItemsContainer.innerHTML += `
                <div class="cart-item" id="cart-item-${item.id}">
                    <img src="${item.img}" alt="${item.name}" onerror="this.src='https://images.unsplash.com/photo-1600003014755-ba31aa59c4b6?auto=format&fit=crop&q=80&w=100'">
                    <div class="cart-item-info">
                        <div class="cart-item-title">${item.brand} | ${item.name}</div>
                        <div style="color: var(--text-muted); font-size: 0.95rem; margin-top: 5px;">الكمية: ${item.quantity}</div>
                        <div class="cart-item-actions">
                            <span class="cart-item-price">${formatPrice(itemTotal)}</span>
                            <span class="remove-item" onclick="removeFromCart(${item.id})">
                                <i class="fas fa-trash-alt"></i> إزالة
                            </span>
                        </div>
                    </div>
                </div>
            `;
        });
    }

    totalPriceEl.textContent = formatPrice(total);
    
    cartCountEl.textContent = count;
    cartCountEl.style.transform = 'scale(1.5)';
    setTimeout(() => {
        cartCountEl.style.transform = 'scale(1)';
    }, 300);
}

// تفاصيل المنتج
function viewProduct(id) {
    const product = products.find(p => p.id === id);
    const container = document.getElementById('product-details-container');

    container.innerHTML = `
        <div class="pd-image">
            <span class="product-brand" style="font-size: 1rem; padding: 8px 20px;">${product.brand}</span>
            <img src="${product.img}" alt="${product.name}" onerror="this.src='https://images.unsplash.com/photo-1600003014755-ba31aa59c4b6?auto=format&fit=crop&q=80&w=800'">
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
            <div style="margin-top: 3rem; color: var(--text-muted); font-size: 1.1rem; line-height: 2.2; border-top: 1px solid var(--border-color); padding-top: 2rem;">
                <p><i class="fas fa-certificate" style="color: var(--gold); margin-left: 10px; width: 25px;"></i> مرفق بشهادة الأصالة والضمان الدولي</p>
                <p><i class="fas fa-truck-fast" style="color: var(--gold); margin-left: 10px; width: 25px;"></i> توصيل مأمن عبر شركات الشحن المختصة لجميع الولايات</p>
                <p><i class="fas fa-gift" style="color: var(--gold); margin-left: 10px; width: 25px;"></i> تغليف ملكي يحمل هوية العلامة التجارية</p>
            </div>
        </div>
    `;

    // المنتجات المشابهة
    const relatedProducts = products.filter(p => p.category === product.category && p.id !== id);
    const displayRelated = relatedProducts.length > 0 ? relatedProducts : products.filter(p => p.id !== id);
    
    // سحب 3 منتجات عشوائية لعرضها في الأسفل
    const shuffled = displayRelated.sort(() => 0.5 - Math.random()).slice(0, 3);
    
    renderProducts('related-grid', shuffled);
    showPage('product');
}

function addFromDetails(id) {
    const qtyInput = document.getElementById('qty-input');
    const qty = parseInt(qtyInput.value) || 1;
    if(qty > 0) addToCart(id, qty);
}
