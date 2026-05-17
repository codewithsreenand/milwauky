/* ==========================================================================
   MILWAUKY CHERUVATHUR - DYNAMIC SCRIPTS
   Core: JavaScript Logic, GSAP Timeline reveals, Video managers, Drawers
   ========================================================================== */

// 1. PRODUCT INVENTORY & ASSETS DATABASE
const PRODUCTS_DATABASE = [
    // Trackpants
    {
        id: 1,
        title: "Signature Onyx Trackpant (Ver. I)",
        category: "trackpants",
        price: "₹1,299",
        image: "products/@milwauky_cheruvathur 🖤🔥Track pant available ❗️Size-m,l,xl,xxl.....%23fashion %23trackpant %23gym %23c (1).jpg",
        sizes: ["M", "L", "XL", "XXL"],
        description: "Curated activewear tailored for high comfort. Constructed from heavy-blend premium double knit cotton, this trackpant blends athletic functionality with a modern, relaxed streetwear shape."
    },
    {
        id: 2,
        title: "Signature Onyx Trackpant (Ver. II)",
        category: "trackpants",
        price: "₹1,299",
        image: "products/@milwauky_cheruvathur 🖤🔥Track pant available ❗️Size-m,l,xl,xxl.....%23fashion %23trackpant %23gym %23c (2).jpg",
        sizes: ["M", "L", "XL", "XXL"],
        description: "Sophisticated streetwear styling featuring flexible rib cuffs and signature tailoring. Engineered for everyday durability with deep zipped pocket enclosures for convenience."
    },
    {
        id: 3,
        title: "Signature Onyx Trackpant (Core)",
        category: "trackpants",
        price: "₹1,299",
        image: "products/@milwauky_cheruvathur 🖤🔥Track pant available ❗️Size-m,l,xl,xxl.....%23fashion %23trackpant %23gym %23c.jpg",
        sizes: ["M", "L", "XL", "XXL"],
        description: "The core piece of our athletic-street collections. Clean, sophisticated branding overlay with a tailored structure that maintains its fit even after heavy washing cycles."
    },

    // Denims
    {
        id: 4,
        title: "Vintage Classic Wash Denim",
        category: "denims",
        price: "₹2,499",
        image: "products/Order now......%23fashionista %23milwaukycheruvathur.jpg",
        sizes: ["30", "32", "34", "36"],
        description: "Authentic heavy-duty denim. Finished in an elegant washed indigo tint with minor distressed details at the pockets, offering a classic aesthetic that fits every gender profile effortlessly."
    },
    {
        id: 5,
        title: "Distressed Cyberpunk Denim",
        category: "denims",
        price: "₹2,799",
        image: "products/Order now......%23fashionista %23milwaukycheruvathur (5).jpg",
        sizes: ["30", "32", "34", "36"],
        description: "Bold distressed patches, raw edge accents, and an architectural knee stitching. Designed to sit low on the hips for an elegant oversized draping over chunky sneakers."
    },
    {
        id: 6,
        title: "Relaxed Fit Cargo Denim",
        category: "denims",
        price: "₹2,699",
        image: "products/Order now........%23fashion %23milwaukycheruvathur (4).jpg",
        sizes: ["30", "32", "34", "36"],
        description: "Fused style elements matching military utility pockets onto a clean-wash blue denim frame. Features adjustable ankle straps to adapt your look from straight-leg to jogger style in seconds."
    },

    // Streetwear
    {
        id: 7,
        title: "Retro Oversized Street Shirt",
        category: "streetwear",
        price: "₹1,699",
        image: "products/Order now......%23fashionista %23milwaukycheruvathur (1).jpg",
        sizes: ["S", "M", "L", "XL"],
        description: "Retro checkered box-shirt featuring a relaxed collar structure and thick flannel texture. Perfect as a lightweight overlay jacket over high-end graphic tees."
    },
    {
        id: 8,
        title: "Urban Utility Cargo Shorts",
        category: "streetwear",
        price: "₹1,499",
        image: "products/Order now......%23fashionista %23milwaukycheruvathur (2).jpg",
        sizes: ["M", "L", "XL"],
        description: "Tough ripstop cargo shorts with specialized drop pockets. Styled for summer heat, blending casual leisure fits with functional tactical elements."
    },
    {
        id: 9,
        title: "Vintage Heavyweight Tee",
        category: "streetwear",
        price: "₹1,199",
        image: "products/Order now......%23fashionista %23milwaukycheruvathur (3).jpg",
        sizes: ["S", "M", "L", "XL"],
        description: "Thick 260 GSM organic cotton tee with a structural ribbed collar. Cut in an oversized, premium block silhouette that defines vintage luxury sportswear."
    },
    {
        id: 10,
        title: "Acid Wash Street Hoodie",
        category: "streetwear",
        price: "₹2,299",
        image: "products/Order now......%23fashionista %23milwaukycheruvathur (4).jpg",
        sizes: ["M", "L", "XL"],
        description: "Custom acid-treated heavyweight hoodie. Every piece features a unique wash pattern with double-lined hood framing and robust front pocket stitchwork."
    },
    {
        id: 11,
        title: "Bespoke Unisex Cargo Pants",
        category: "streetwear",
        price: "₹1,999",
        image: "products/Order now......%23fashionista %23milwaukycheruvathur (6).jpg",
        sizes: ["30", "32", "34", "36"],
        description: "Versatile streetwear cargos built from tactical canvas. Multi-pocket blueprint with reinforced stress points, maintaining a clean architectural drape."
    },
    {
        id: 12,
        title: "Casual Core Boxy Tee",
        category: "streetwear",
        price: "₹999",
        image: "products/Order now......%23fashionista %23milwaukycheruvathur (7).jpg",
        sizes: ["S", "M", "L", "XL"],
        description: "Your everyday premium essential. Light-wash, highly breathable cotton with dropped shoulder seams for a premium, laid-back casual fit."
    },
    {
        id: 13,
        title: "Vintage Oversized Checked Jacket",
        category: "streetwear",
        price: "₹2,599",
        image: "products/Order now........%23fashion %23milwaukycheruvathur (1).jpg",
        sizes: ["M", "L", "XL"],
        description: "Cozy checks meet high-end street. Thick insulating inner weave with standard designer buttons, optimized to look classy under cold weather settings."
    },
    {
        id: 14,
        title: "Premium Casual Chino Pants",
        category: "streetwear",
        price: "₹1,899",
        image: "products/Order now........%23fashion %23milwaukycheruvathur (2).jpg",
        sizes: ["30", "32", "34", "36"],
        description: "Polished chino trousers tailored with smart flex-waist systems. Equally elegant for high-end boutique meets and relaxed lounge evenings."
    },
    {
        id: 15,
        title: "Street-Fit Corduroy Shirt",
        category: "streetwear",
        price: "₹1,799",
        image: "products/Order now........%23fashion %23milwaukycheruvathur (3).jpg",
        sizes: ["M", "L", "XL"],
        description: "Sumptuous micro-rib corduroy fabric. High tactile depth with luxury bone buttons, tailored to drape perfectly whether worn open or closed."
    },
    {
        id: 16,
        title: "Milwauky Varsity Bomber",
        category: "streetwear",
        price: "₹3,499",
        image: "products/Order now........%23fashion %23milwaukycheruvathur (5).jpg",
        sizes: ["M", "L", "XL"],
        description: "The ultimate showstopper fit. Premium satin lining, embroidered heritage script, and contrasting leather-trim button loops for that classic vintage model aesthetic."
    },
    {
        id: 17,
        title: "Heritage Luxury Knitwear",
        category: "streetwear",
        price: "₹2,899",
        image: "products/Order now........%23fashion %23milwaukycheruvathur.jpg",
        sizes: ["M", "L", "XL"],
        description: "Intricately knitted heavy cotton sweater. Styled with an old-school crewneck frame, perfect for vintage high-fashion lookbook layering."
    }
];

// 2. VIDEO REELS DATABASE
const VIDEOS_DATABASE = [
    {
        title: "The Denim Movement",
        path: "product_videos/Denim..Here are a few options for your caption, depending on the vibe you want to go for on your.mp4"
    },
    {
        title: "Couture in Motion",
        path: "product_videos/Music idan 😌  .  Fit from @milwauky_cheruvathur.mp4"
    },
    {
        title: "Urban Performance",
        path: "product_videos/Uiiiii⚽️Fit; @milwauky_cheruvathur.mp4"
    }
];

// 3. SELECTION S// 4. LUXURY PRELOADER ANIMATION TIMELINE
document.addEventListener("DOMContentLoaded", () => {
    const progressBar = document.getElementById("progress-bar");
    const progressNumber = document.getElementById("progress-number");
    const preloader = document.getElementById("preloader");
    
    let currentPercent = 0;
    const intervalTime = 15; // ms
    
    const loadingInterval = setInterval(() => {
        currentPercent += 1;
        if (progressBar) progressBar.style.width = currentPercent + "%";
        if (progressNumber) progressNumber.textContent = currentPercent + "%";
        
        if (currentPercent >= 100) {
            clearInterval(loadingInterval);
            
            // Initiate GSAP reveal sequence
            setTimeout(() => {
                // Fade out/Slide up preloader screen
                gsap.to(preloader, {
                    y: "-100%",
                    duration: 1.2,
                    ease: "power4.inOut",
                    onComplete: () => {
                        preloader.style.display = "none";
                        // Trigger hero entry animations
                        triggerHeroEntrance();
                    }
                });
            }, 300);
        }
    }, intervalTime);
});

// 5b. MOBILE BACKGROUND VIDEO PLAYLIST SYSTEM (CONSECUTIVE CYCLING)
const mobileVideo = document.getElementById("hero-mobile-video");
if (mobileVideo) {
    const mobilePlaylist = [
        "product_videos/Denim..Here are a few options for your caption, depending on the vibe you want to go for on your.mp4",
        "product_videos/Music idan 😌  .  Fit from @milwauky_cheruvathur.mp4",
        "product_videos/Uiiiii⚽️Fit; @milwauky_cheruvathur.mp4"
    ];
    let currentMobileIndex = 0;
    
    mobileVideo.addEventListener("ended", () => {
        currentMobileIndex = (currentMobileIndex + 1) % mobilePlaylist.length;
        
        // Fade out slightly during source swap for cinematic smoothness
        gsap.to(mobileVideo, {
            opacity: 0,
            duration: 0.4,
            onComplete: () => {
                mobileVideo.src = mobilePlaylist[currentMobileIndex];
                mobileVideo.load();
                
                // Play and fade back in
                mobileVideo.play()
                    .then(() => {
                        gsap.to(mobileVideo, { opacity: 0.45, duration: 0.4 });
                    })
                    .catch(e => {
                        console.log("Mobile video playlist autoplay catch: ", e);
                        gsap.to(mobileVideo, { opacity: 0.45, duration: 0.4 });
                    });
            }
        });
    });
}

// 5. GSAP HERO ENTRANCE EFFECTS
function triggerHeroEntrance() {
    const tl = gsap.timeline();
    
    tl.from(".navbar", {
        y: -30,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
    });
    
    tl.from(".vintage-badge", {
        opacity: 0,
        y: 20,
        duration: 0.6,
        ease: "power2.out"
    }, "-=0.6");

    tl.from(".hero-title span", {
        opacity: 0,
        y: 40,
        stagger: 0.2,
        duration: 1,
        ease: "power4.out"
    }, "-=0.5");
    
    tl.from(".hero-desc", {
        opacity: 0,
        y: 20,
        duration: 0.8,
        ease: "power3.out"
    }, "-=0.7");
    
    tl.from(".hero-metrics", {
        opacity: 0,
        y: 20,
        duration: 0.8,
        ease: "power3.out"
    }, "-=0.7");
    
    tl.from(".hero-cta-group", {
        opacity: 0,
        y: 20,
        duration: 0.8,
        ease: "power3.out"
    }, "-=0.7");

    tl.from(".vintage-cinema-frame", {
        opacity: 0,
        scale: 0.95,
        duration: 1.2,
        ease: "power3.out"
    }, "-=1.2");
}

// 6. HERO VIDEO SWITCHER & CONTROLLER
const heroVideo = document.getElementById("hero-main-video");
const heroPlayPauseBtn = document.getElementById("hero-play-pause");
const heroMuteBtn = document.getElementById("hero-mute");
const videoTabs = document.querySelectorAll(".video-tab");

// Initialize first video in the hero
if (heroVideo && VIDEOS_DATABASE.length > 0) {
    heroVideo.querySelector("source").src = VIDEOS_DATABASE[0].path;
    heroVideo.load();
    heroVideo.play().catch(e => console.log("Autoplay blocked by browser. User interaction needed."));
}

// Video selector tabs
videoTabs.forEach(tab => {
    tab.addEventListener("click", () => {
        const index = parseInt(tab.getAttribute("data-video-index"));
        
        // Update active tab state
        videoTabs.forEach(t => t.classList.remove("active"));
        tab.classList.add("active");
        
        // Crossfade video transition
        gsap.to(heroVideo, {
            opacity: 0,
            duration: 0.4,
            onComplete: () => {
                heroVideo.querySelector("source").src = VIDEOS_DATABASE[index].path;
                heroVideo.load();
                
                // Play and fade back in
                heroVideo.play().then(() => {
                    gsap.to(heroVideo, { opacity: 0.95, duration: 0.4 });
                    updatePlayPauseIcon(false);
                }).catch(err => {
                    gsap.to(heroVideo, { opacity: 0.95, duration: 0.4 });
                });
            }
        });
    });
});

// Play / Pause Toggle
if (heroPlayPauseBtn && heroVideo) {
    heroPlayPauseBtn.addEventListener("click", () => {
        if (heroVideo.paused) {
            heroVideo.play();
            updatePlayPauseIcon(false);
        } else {
            heroVideo.pause();
            updatePlayPauseIcon(true);
        }
    });
}

function updatePlayPauseIcon(isPaused) {
    const icon = heroPlayPauseBtn.querySelector("i");
    if (isPaused) {
        icon.className = "fas fa-play";
    } else {
        icon.className = "fas fa-pause";
    }
}

// Mute / Unmute Toggle
if (heroMuteBtn && heroVideo) {
    heroMuteBtn.addEventListener("click", () => {
        if (heroVideo.muted) {
            heroVideo.muted = false;
            heroMuteBtn.querySelector("i").className = "fas fa-volume-up";
        } else {
            heroVideo.muted = true;
            heroMuteBtn.querySelector("i").className = "fas fa-volume-mute";
        }
    });
}

// 7. SCROLL-SENSITIVE FLOATING HEADER
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

// Mobile navbar drawer toggle
const mobileToggle = document.getElementById("mobile-toggle");
const mobileMenu = document.getElementById("mobile-menu");
const mobileLinks = document.querySelectorAll(".mobile-link");

if (mobileToggle) {
    mobileToggle.addEventListener("click", () => {
        mobileToggle.classList.toggle("open");
        mobileMenu.classList.toggle("open");
    });
}

// Close mobile menu on clicking any navigation links
mobileLinks.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        mobileToggle.classList.remove("open");
        mobileMenu.classList.remove("open");
        
        const targetId = link.getAttribute("data-target");
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            const navbarHeight = 80;
            window.scrollTo({
                top: targetElement.offsetTop - navbarHeight,
                behavior: "smooth"
            });
        }
    });
});

// Desktop header smooth scroll
const navLinks = document.querySelectorAll(".nav-links .nav-link");
navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        navLinks.forEach(l => l.classList.remove("active"));
        link.classList.add("active");
        
        const targetId = link.getAttribute("data-target");
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            const navbarHeight = 80;
            window.scrollTo({
                top: targetElement.offsetTop - navbarHeight,
                behavior: "smooth"
            });
        }
    });
});

// 8. DYNAMIC PRODUCT GRID INJECTOR & FILTERING
const catalogGrid = document.getElementById("catalog-grid");
const filterButtons = document.querySelectorAll(".filter-btn");

function renderCatalog(filter = "all") {
    if (!catalogGrid) return;
    
    // Clear current catalog
    catalogGrid.innerHTML = "";
    
    // Filter database
    const filteredProducts = PRODUCTS_DATABASE.filter(item => {
        if (filter === "all") return true;
        return item.category === filter;
    });
    
    // Render cards
    filteredProducts.forEach(product => {
        const cardHTML = `
            <div class="product-card" data-id="${product.id}" data-category="${product.category}">
                <div class="product-image-container">
                    <img class="product-card-image" src="${product.image}" alt="${product.title}" loading="lazy">
                    <div class="product-card-overlay">
                        <span class="quick-view-badge"><i class="fas fa-eye"></i> View Details</span>
                    </div>
                    <span class="product-tag free-shipping"><i class="fas fa-truck"></i> Free Shipping</span>
                </div>
                <div class="product-info">
                    <span class="product-category">${product.category}</span>
                    <h4 class="product-title" title="${product.title}">${product.title}</h4>
                    <div class="product-meta-row">
                        <span class="product-price">${product.price}</span>
                        <span class="product-sizes-badge">Sizes: ${product.sizes.join(', ')}</span>
                    </div>
                </div>
            </div>
        `;
        catalogGrid.innerHTML += cardHTML;
    });

    // Attach click events to the new product cards to launch details drawer
    const productCards = document.querySelectorAll(".product-card");
    productCards.forEach(card => {
        card.addEventListener("click", () => {
            const productId = parseInt(card.getAttribute("data-id"));
            openProductDrawer(productId);
        });
    });
    
    // Product cards are rendered instantly with full crystal clear opacity
}

// Category filter trigger buttons
filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        filterButtons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        
        const filterValue = btn.getAttribute("data-filter");
        renderCatalog(filterValue);
    });
});

// Category quick-links in the collection cards
const selectFilterLinks = document.querySelectorAll(".select-filter");
selectFilterLinks.forEach(link => {
    link.addEventListener("click", (e) => {
        const filterVal = link.getAttribute("data-filter");
        
        // Find corresponding filter button and trigger it
        filterButtons.forEach(b => {
            if (b.getAttribute("data-filter") === filterVal) {
                b.click();
            }
        });
    });
});

// Initial Catalog Render
renderCatalog();

// 9. COUTURE CINEMA REEL VIDEOS SYSTEM
const reelCards = document.querySelectorAll(".reel-card");
const smartphoneVideos = document.querySelectorAll(".reel-video");

// Assign reel videos sources on load
smartphoneVideos.forEach((video, index) => {
    if (VIDEOS_DATABASE[index]) {
        video.querySelector("source").src = VIDEOS_DATABASE[index].path;
        video.load();
    }
});

// Cinema vertical player controls
reelCards.forEach(card => {
    const video = card.querySelector(".reel-video");
    const playBtn = card.querySelector(".play-toggle");
    const soundBtn = card.querySelector(".sound-toggle");
    
    // Play/Pause Control
    if (playBtn && video) {
        playBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            if (video.paused) {
                // Pause all other phone videos first to prevent audio overlaps!
                smartphoneVideos.forEach(v => {
                    if (v !== video) {
                        v.pause();
                        v.closest(".phone-screen").querySelector(".play-toggle i").className = "fas fa-play";
                    }
                });
                
                video.play();
                playBtn.querySelector("i").className = "fas fa-pause";
            } else {
                video.pause();
                playBtn.querySelector("i").className = "fas fa-play";
            }
        });
    }
    
    // Sound On/Off Control
    if (soundBtn && video) {
        video.muted = true; // start muted
        soundBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            if (video.muted) {
                video.muted = false;
                soundBtn.querySelector("i").className = "fas fa-volume-up";
            } else {
                video.muted = true;
                soundBtn.querySelector("i").className = "fas fa-volume-mute";
            }
        });
    }
    
    // Tap on smartphone screen to trigger play/pause
    const screen = card.querySelector(".phone-screen");
    if (screen && video) {
        screen.addEventListener("click", () => {
            playBtn.click();
        });
    }
});

// 10. PRODUCT DETAILED DRAWER MECHANISM
const drawer = document.getElementById("product-drawer");
const drawerOverlay = document.getElementById("drawer-overlay");
const drawerClose = document.getElementById("drawer-close");

const drawerImg = document.getElementById("drawer-product-image");
const drawerCategory = document.getElementById("drawer-product-category");
const drawerTitle = document.getElementById("drawer-product-title");
const drawerPrice = document.getElementById("drawer-product-price");
const drawerDesc = document.getElementById("drawer-product-description");
const drawerSizesGrid = document.getElementById("drawer-sizes-grid");
const drawerWhatsAppBtn = document.getElementById("drawer-whatsapp-btn");

function openProductDrawer(id) {
    const product = PRODUCTS_DATABASE.find(item => item.id === id);
    if (!product) return;
    
    selectedProduct = product;
    selectedSize = product.sizes[0]; // default to first size
    
    // Populate details in the drawer DOM
    drawerImg.src = product.image;
    drawerImg.alt = product.title;
    drawerCategory.textContent = product.category;
    drawerTitle.textContent = product.title;
    drawerPrice.textContent = product.price;
    drawerDesc.textContent = product.description;
    
    // Populate sizes grid
    drawerSizesGrid.innerHTML = "";
    product.sizes.forEach((size, idx) => {
        const sizeBtn = document.createElement("button");
        sizeBtn.className = `size-btn ${idx === 0 ? 'active' : ''}`;
        sizeBtn.textContent = size;
        
        sizeBtn.addEventListener("click", () => {
            document.querySelectorAll(".size-btn").forEach(b => b.classList.remove("active"));
            sizeBtn.classList.add("active");
            selectedSize = size;
            updateWhatsAppLink();
        });
        
        drawerSizesGrid.appendChild(sizeBtn);
    });
    
    // Initialize checkout API link
    updateWhatsAppLink();
    
    // Slide drawer in
    drawer.classList.add("open");
    document.body.style.overflow = "hidden"; // disable background body scrolling
}

function closeProductDrawer() {
    drawer.classList.remove("open");
    document.body.style.overflow = ""; // enable background body scrolling
}

if (drawerClose) drawerClose.addEventListener("click", closeProductDrawer);
if (drawerOverlay) drawerOverlay.addEventListener("click", closeProductDrawer);

// WhatsApp custom API link generator
function updateWhatsAppLink() {
    if (!selectedProduct || !selectedSize) return;
    
    const formattedMessage = `Hello Milwauky Cheruvathur! ✨ I am visiting your unisex website and would like to order:
    
🛍️ *Product:* ${selectedProduct.title}
💰 *Price:* ${selectedProduct.price}
📏 *Selected Size:* ${selectedSize}
🚚 *Shipping:* India-Wide Free Delivery

Please let me know if this fit is in stock and how I can proceed with payment. Thank you!`;

    const encodedText = encodeURIComponent(formattedMessage);
    drawerWhatsAppBtn.href = `https://wa.me/917510796740?text=${encodedText}`;
    drawerWhatsAppBtn.target = "_blank";
}

// 11. GENERAL FORMS & ENQUIRIES HANDLER
const enquiryForm = document.getElementById("enquiry-form");
if (enquiryForm) {
    enquiryForm.addEventListener("submit", (e) => {
        e.preventDefault();
        
        const nameInput = document.getElementById("client-name").value.trim();
        const phoneInput = document.getElementById("client-phone").value.trim();
        const messageInput = document.getElementById("enquiry-message").value.trim();
        
        const whatsappMsg = `Hello Milwauky Cheruvathur Concierge! ✨ I have a direct shopping enquiry:
        
👤 *Client Name:* ${nameInput}
📞 *Contact Phone:* ${phoneInput}
💬 *Enquiry:* ${messageInput}`;

        const encodedMsg = encodeURIComponent(whatsappMsg);
        const url = `https://wa.me/917510796740?text=${encodedMsg}`;
        
        window.open(url, "_blank");
        enquiryForm.reset();
    });
}

// 12. LUXURY DIVIDERS SCROLL ANIMATION (GSAP SCROLLTRIGGER)
if (window.ScrollTrigger) {
    // Register scrolltrigger plugin
    gsap.registerPlugin(ScrollTrigger);
    
    // Rotating gold stars and diamonds on scroll
    gsap.to(".diamond", {
        scrollTrigger: {
            trigger: "body",
            start: "top top",
            end: "bottom bottom",
            scrub: 1
        },
        rotate: 360,
        ease: "none"
    });
    
    // Ticker Marquee Speed Alteration on Scroll
    gsap.to(".marquee-content", {
        scrollTrigger: {
            trigger: ".marquee-strip",
            start: "top bottom",
            end: "bottom top",
            scrub: 1
        },
        x: -250,
        ease: "none"
    });
}
