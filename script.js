/* 1. DETECTION FOR SAFARI */
const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
if (isSafari) {
    document.body.classList.add('is-safari');
}

/* 2. MOBILE MENU LOGIC */
const menuBtn = document.getElementById('mobile-menu-btn');
const closeBtn = document.getElementById('close-menu-btn');
const overlay = document.getElementById('mobile-overlay');

const closeMenu = () => {
    menuBtn.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = 'initial';
};

if (menuBtn) {
    menuBtn.addEventListener('click', () => {
        menuBtn.classList.toggle('active');
        overlay.classList.toggle('active');
        document.body.style.overflow = overlay.classList.contains('active') ? 'hidden' : 'initial';
    });
}

if (closeBtn) {
    closeBtn.addEventListener('click', closeMenu);
}

document.querySelectorAll('.mobile-nav-links a').forEach(link => {
    link.addEventListener('click', closeMenu);
});

/* 3. HERO CANVAS ANIMATION */
const canvas = document.getElementById('hero-canvas');
if (canvas) {
    const ctx = canvas.getContext('2d');
    const keywords = ["DESIGN", "EMPOWER", "V.01", "ICON", "P.C.C.", "CODE", "CREATE", "CHIC"];
    const fontSize = 10;
    let columns;
    let drops;

    function initCanvas() {
        const hero = document.querySelector('.hero');
        if (!hero) return;
        const rect = hero.getBoundingClientRect();
        canvas.width = rect.width;
        canvas.height = rect.height;
        columns = Math.floor(canvas.width / 60);
        drops = Array(columns).fill(0).map(() => Math.random() * canvas.height / fontSize);
    }

    function draw() {
        ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.font = "900 " + fontSize + "px 'Inter'";

        for (let i = 0; i < drops.length; i++) {
            const text = keywords[Math.floor(Math.random() * keywords.length)];
            const colors = ["#facee2", "#f3a6c9", "#e41e81"];
            ctx.fillStyle = colors[Math.floor(Math.random() * colors.length)];
            ctx.fillText(text, i * 60, drops[i] * fontSize);

            if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            drops[i]++;
        }
    }

    initCanvas();
    window.addEventListener('resize', initCanvas);
    setInterval(draw, 50);
}
