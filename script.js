// بيانات المنتجات الفاخرة المدمجة
const products = [
    { 
        id: 1, 
        name: "ساعة كرونوغراف ذهبية عيار 18", 
        price: 18500, 
        category: "watches", 
        img: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&q=80&w=800", 
        desc: "ساعة يد فاخرة بتصميم كلاسيكي لا يبلى مع الزمن، مطلية بالذهب الخالص عيار 18. تتميز بحركة ميكانيكية دقيقة مع زجاج ياقوتي مقاوم للخدش، مصممة خصيصاً لترافقك في أفخم المناسبات وتعكس ذوقك الرفيع اللامتناهي." 
    },
    { 
        id: 2, 
        name: "عطر ليالي الشرق الملكي", 
        price: 1250, 
        category: "perfumes", 
        img: "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80&w=800", 
        desc: "توليفة عطرية نادرة تجمع بين دهن العود المعتق ونفحات الورد الجوري والزعفران. هذا العطر الاستثنائي مصمم ليترك بصمة فخمة ومميزة في كل مكان تخطو إليه، يدوم طويلاً ويمنحك إحساساً بالتفرد." 
    },
    { 
        id: 3, 
        name: "حقيبة سفر جلدية كلاسيكية", 
        price: 4500, 
        category: "accessories", 
        img: "https://images.unsplash.com/photo-1584916201218-f4242ceb4809?auto=format&fit=crop&q=80&w=800", 
        desc: "حقيبة مصنوعة يدوياً بحرفية عالية من أفضل أنواع الجلود الطبيعية. تتميز بتفاصيل معدنية ذهبية ومساحة داخلية ذكية ومبطنة بأفخم أنواع الحرير، تضفي لمسة من الرقي المطلق على إطلالتك أثناء التنقل." 
    },
    { 
        id: 4, 
        name: "نظارة شمسية فينتدج", 
        price: 1800, 
        category: "accessories", 
        img: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&q=80&w=800", 
        desc: "نظارة شمسية بتصميم إيطالي فريد يوفر حماية 100% من الأشعة فوق البنفسجية. الإطار مصنوع من مواد خفيفة وعالية المتانة مع لمسات ذهبية أنيقة تبرز ملامح الوجه بجاذبية تامة." 
    },
    { 
        id: 5, 
        name: "ساعة أوتوماتيكية سيلفر إديشن", 
        price: 14200, 
        category: "watches", 
        img: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&q=80&w=800", 
        desc: "تحفة فنية تعمل بنظام أوتوماتيكي معقد يمكن رؤية تفاصيله الدقيقة. إطار وهيكل من الفولاذ المقاوم للصدأ المصقول بعناية، مقاومة للماء وتناسب الاستخدام اليومي بأسلوب فاخر." 
    },
    { 
        id: 6, 
        name: "مجموعة عطور القصر", 
        price: 3800, 
        category: "perfumes", 
        img: "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&q=80&w=800", 
        desc: "صندوق خشبي فاخر مبطن بالمخمل الأسود، يحتوي على ثلاثة عطور حصرية مصممة لكبار الشخصيات. تنوع مثالي يناسب فترات الصباح، المساء، والمناسبات الرسمية الكبرى." 
    },
    { 
        id: 7, 
        name: "محفظة بطاقات جلد التمساح", 
        price: 950, 
        category: "accessories", 
        img: "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&q=80&w=800", 
        desc: "محفظة بطاقات أنيقة وصغيرة الحجم مصنوعة من جلد التمساح الطبيعي الفاخر. تصميم عصري يحافظ على بطاقاتك مرتبة وآمنة مع لمسة جمالية استثنائية." 
    },
    { 
        id: 8, 
        name: "ساعة بلاتينيوم المرصعة بالألماس", 
        price: 45000, 
        category: "watches", 
        img: "https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?auto=format&fit=crop&q=80&w=800", 
        desc: "الإصدار الأرقى والأكثر فخامة. ساعة بلاتينية مرصعة بأحجار الألماس النقي (VVS). بريق لا يضاهى وهندسة دقيقة تجعل منها استثماراً وقطعة متوارثة عبر الأجيال." 
    }
];

let cart = [];

// التنقل بين الصفحات
function showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
    document.getElementById(pageId + '-page').classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// عرض المنتجات
function renderProducts(gridId, productsList, limit = null) {
    const grid = document.getElementById(gridId);
    if (!grid) return;
    grid.innerHTML = '';
    
    const items = limit ? productsList.slice(0, limit) : productsList;

    items.forEach(product => {
        grid.innerHTML += `
            <div class="product-card" onclick="viewProduct(${product.id})">
                <div class="product-img">
                    <img src="${product.img}" alt="${product.name}">
                    <button class="add-to-cart-btn" onclick="event.stopPropagation(); addToCart(${product.id})">
                        <i class="fas fa-shopping-bag" style="margin-left: 5px;"></i> أضف للسلة
                    </button>
                </div>
                <div class="product-info">
                    <h3 class="product-name">${product.name}</h3>
                    <p class="product-price">${product.price.toLocaleString('en-US')} ر.س</p>
                </div>
            </div>
        `;
    });
}

// التهيئة عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', () => {
    // عرض المنتجات المميزة بالرئيسية
    renderProducts('featured-grid', products, 4);
    
    // عرض جميع المنتجات في صفحة المتجر
    renderProducts('shop-grid', products);

    // برمجة أزرار الفلترة في المتجر
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
});

// التحكم بالسلة
function toggleCart() {
    const sidebar = document.getElementById('cart-sidebar');
    const overlay = document.getElementById('overlay');
    
    sidebar.classList.toggle('open');
    overlay.classList.toggle('active');
    
    // منع السكرول للصفحة الأساسية عند فتح السلة
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
    
    // فتح السلة تلقائياً عند إضافة منتج لإظهار التفاعل للمستخدم
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
        cartItemsContainer.innerHTML = '<p style="text-align: center; color: var(--text-muted); margin-top: 2rem;">السلة فارغة حالياً</p>';
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
                        <div style="color: var(--text-muted); font-size: 0.9rem; margin-top: 5px;">الكمية: ${item.quantity}</div>
                        <div class="cart-item-actions">
                            <span class="cart-item-price">${itemTotal.toLocaleString('en-US')} ر.س</span>
                            <span class="remove-item" onclick="removeFromCart(${item.id})">
                                <i class="fas fa-trash-alt"></i> حذف
                            </span>
                        </div>
                    </div>
                </div>
            `;
        });
    }

    totalPriceEl.textContent = total.toLocaleString('en-US') + ' ر.س';
    cartCountEl.textContent = count;
}

// تفاصيل المنتج
function viewProduct(id) {
    const product = products.find(p => p.id === id);
    const container = document.getElementById('product-details-container');

    container.innerHTML = `
        <div class="pd-image">
            <img src="${product.img}" alt="${product.name}">
        </div>
        <div class="pd-info">
            <h2 class="pd-title">${product.name}</h2>
            <p class="pd-price">${product.price.toLocaleString('en-US')} ر.س</p>
            <p class="pd-desc">${product.desc}</p>
            <div class="pd-actions">
                <input type="number" id="qty-input" class="qty-input" value="1" min="1">
                <button class="btn-gold" style="flex: 1;" onclick="addFromDetails(${product.id})">أضف إلى السلة</button>
            </div>
            <div style="margin-top: 2rem; color: var(--text-muted); font-size: 0.95rem;">
                <p><i class="fas fa-check" style="color: var(--gold); margin-left: 5px;"></i> منتج أصلي ومضمون 100%</p>
                <p><i class="fas fa-truck" style="color: var(--gold); margin-left: 5px;"></i> شحن سريع وآمن داخل المملكة</p>
            </div>
        </div>
    `;

    // عرض المنتجات المشابهة (من نفس التصنيف، باستثناء المنتج الحالي)
    const relatedProducts = products.filter(p => p.category === product.category && p.id !== id);
    // إذا لم يكن هناك منتجات مشابهة كافية، جلب منتجات عشوائية
    const displayRelated = relatedProducts.length > 0 ? relatedProducts : products.filter(p => p.id !== id);
    
    renderProducts('related-grid', displayRelated, 3);

    // الانتقال لصفحة المنتج
    showPage('product');
}

function addFromDetails(id) {
    const qtyInput = document.getElementById('qty-input');
    const qty = parseInt(qtyInput.value) || 1;
    addToCart(id, qty);
}
