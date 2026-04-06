// بيانات المنتجات بأسماء حقيقية وأسعار دقيقة تقريبية بالسوق الموازي للدينار الجزائري
const products = [
    { 
        id: 1, 
        brand: "Rolex",
        name: "ساعة رولكس صبمارينر ديت", 
        price: 4200000, 
        category: "watches", 
        img: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&q=80&w=800", 
        desc: "ساعة رولكس صبمارينر (Submariner Date) أيقونة ساعات الغوص، مصنوعة من فولاذ أويستر ستيل والذهب الأصفر عيار 18. تتميز بمينا أسود وإطار سيراكروم دوار، ما يعكس قوة التصميم ودقة الحركة الميكانيكية السويسرية الاستثنائية." 
    },
    { 
        id: 2, 
        brand: "Tom Ford",
        name: "عطر توم فورد عود وود - 100 مل", 
        price: 95000, 
        category: "perfumes", 
        img: "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80&w=800", 
        desc: "عطر (Oud Wood) من توم فورد برايفت بليند، توليفة خشبية نادرة جداً ومميزة تعتمد على خشب العود المعتق، مع مزيج ساحر من الهيل، خشب الصندل، والفيتيفير، ليمنحك هالة من الفخامة والدفء." 
    },
    { 
        id: 3, 
        brand: "Louis Vuitton",
        name: "حقيبة سفر كيبال 50", 
        price: 600000, 
        category: "accessories", 
        img: "https://images.unsplash.com/photo-1584916201218-f4242ceb4809?auto=format&fit=crop&q=80&w=800", 
        desc: "حقيبة (Keepall Bandoulière 50) الأيقونية من لويس فيتون. مصنوعة من قماش المونوغرام الشهير مع حواف من الجلد الطبيعي وحزام كتف قابل للتعديل. الخيار الأول لرجال الأعمال وللسفر بأناقة لا تضاهى." 
    },
    { 
        id: 4, 
        brand: "Cartier",
        name: "نظارات شمسية كارتييه سانتوس", 
        price: 285000, 
        category: "accessories", 
        img: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&q=80&w=800", 
        desc: "نظارات (Santos de Cartier) الشمسية المطلية بالذهب الأملس، مع عدسات عالية الجودة مضادة للانعكاس. تصميم الطيار الكلاسيكي بلمسة كارتييه العريقة البارزة في البراغي الأيقونية." 
    },
    { 
        id: 5, 
        brand: "Audemars Piguet",
        name: "ساعة رويال أوك أوتوماتيك", 
        price: 7500000, 
        category: "watches", 
        img: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&q=80&w=800", 
        desc: "تحفة أوديمار بيغيه (Royal Oak Selfwinding) الكلاسيكية بمينا نقش التابيسري (Grande Tapisserie). هيكل مثمن الأضلاع من الفولاذ المقاوم للصدأ المصقول يدوياً، تمثل قمة التعقيد الرياضي الفاخر." 
    },
    { 
        id: 6, 
        brand: "Maison Francis Kurkdjian",
        name: "عطر باکارات روج 540 إكستريت - 200 مل", 
        price: 190000, 
        category: "perfumes", 
        img: "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&q=80&w=800", 
        desc: "الإصدار المركّز (Extrait de Parfum) من الأيقونة العطرية بلكارات روج 540. هالة عطرية ساحرة تمزج بين الياسمين المصري، الزعفران، واللوز المغربي المر، لثبات يدوم لأيام مع انتشار يلفت كل الأنظار." 
    },
    { 
        id: 7, 
        brand: "Bottega Veneta",
        name: "محفظة جلدية إنترشياتو", 
        price: 145000, 
        category: "accessories", 
        img: "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&q=80&w=800", 
        desc: "محفظة رجالية ثنائية الطي من بوتيغا فينيتا، مصنوعة في إيطاليا باستخدام تقنية النسج (Intrecciato) الحصرية من أرقى أنواع جلد العجل الناعم. تجمع بين البساطة والرقي الحقيقي الملموس." 
    },
    { 
        id: 8, 
        brand: "Patek Philippe",
        name: "ساعة باتيك فيليب نوتيلوس 5711", 
        price: 24000000, 
        category: "watches", 
        img: "https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?auto=format&fit=crop&q=80&w=800", 
        desc: "الأسطورة (Nautilus 5711)، إحدى أندر الساعات وأكثرها طلباً في العالم. تصميم انسيابي خلاب مستوحى من كوة السفن البحرية مع مينا متدرج متقن للغاية، استثمار تتوارثه الأجيال." 
    },
    { 
        id: 9, 
        brand: "Cartier",
        name: "سوار كارتييه لوف المرصع", 
        price: 2600000, 
        category: "jewelry", 
        img: "https://images.unsplash.com/photo-1605100804763-247f66126e28?auto=format&fit=crop&q=80&w=800", 
        desc: "سوار (LOVE) الأيقوني من كارتييه، مصاغ من الذهب الأصفر عيار 18 قيراط ومرصع بـ 4 أحجار من الألماس بقطع بريليانت النقي. رمز الحب الأبدي والأناقة الباريسية الفارهة." 
    },
    { 
        id: 10, 
        brand: "Van Cleef & Arpels",
        name: "قلادة فينتاج ألهامبرا", 
        price: 720000, 
        category: "jewelry", 
        img: "https://images.unsplash.com/photo-1599643478524-fb66f7fa0656?auto=format&fit=crop&q=80&w=800", 
        desc: "قلادة (Vintage Alhambra) الفاخرة من فان كليف آند آربلز، صممت على شكل زهرة البرسيم الرباعية التي ترمز للحظ، مرصعة بحجر العقيق اليماني (أونيكس) ومحاطة بالذهب الأصفر اللامع." 
    },
    { 
        id: 11, 
        brand: "Creed",
        name: "عطر كريد أفينتوس - 100 مل", 
        price: 118000, 
        category: "perfumes", 
        img: "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?auto=format&fit=crop&q=80&w=800", 
        desc: "عطر (Aventus) الأسطوري للرجال. مزيج مفعم بالقوة والنجاح، يفتتح بنفحات الأناناس الملكي والبرغموت، لينتهي بقاعدة رجولية من طحلب البلوط والمسك والفانيليا." 
    },
    { 
        id: 12, 
        brand: "Hermès",
        name: "حزام هيرميس الجلدي بوجهين", 
        price: 215000, 
        category: "accessories", 
        img: "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?auto=format&fit=crop&q=80&w=800", 
        desc: "حزام (H Belt) الكلاسيكي من هيرميس. مصنوع من الجلد التوغو المقاوم للخدش بوجهين (أسود وبني)، مع مشبك (H) المميز المطلي بالبلاديوم، ليناسب جميع إطلالاتك الرسمية واليومية المرموقة." 
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

// مراقب الانيميشن (Scroll Reveal)
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

// عرض المنتجات
function renderProducts(gridId, productsList, limit = null) {
    const grid = document.getElementById(gridId);
    if (!grid) return;
    grid.innerHTML = '';
    
    const items = limit ? productsList.slice(0, limit) : productsList;

    items.forEach((product, index) => {
        const delay = (index % 4) * 0.15;
        const cardHtml = `
            <div class="product-card reveal" style="transition-delay: ${delay}s" onclick="viewProduct(${product.id})">
                <span class="product-brand">${product.brand}</span>
                <div class="product-img">
                    <img src="${product.img}" alt="${product.name}">
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

    setTimeout(() => {
        grid.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
    }, 50);
}

// التهيئة عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', () => {
    renderProducts('featured-grid', products, 6);
    renderProducts('shop-grid', products);

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
                    <img src="${item.img}" alt="${item.name}">
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
    
    const shuffled = displayRelated.sort(() => 0.5 - Math.random()).slice(0, 3);
    
    renderProducts('related-grid', shuffled);
    showPage('product');
}

function addFromDetails(id) {
    const qtyInput = document.getElementById('qty-input');
    const qty = parseInt(qtyInput.value) || 1;
    if(qty > 0) addToCart(id, qty);
}
