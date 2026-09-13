const mobileBtn = document.querySelector('.btn-mobile');
const navLinks = document.getElementById('nav-links');
const icon = document.querySelector('.btn-mobile i')

mobileBtn.addEventListener('click', () => {
    navLinks.classList.toggle('show');
    icon.classList.toggle('fa-times');
    icon.classList.toggle('fa-bars');
});

const backToTopBtn = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    if (window.scrollY > 0) {
        header.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.boxShadow = 'none';
    }

    backToTopBtn.classList.toggle('show', window.scrollY > 400);
})

const navAnchors = document.querySelectorAll('#nav-links a');
const headerOffset = 96;

function smoothScrollTo(target, duration = 800) {
    const startY = window.scrollY;
    const endY = target.getBoundingClientRect().top + startY - headerOffset;
    const distance = endY - startY;
    let startTime = null;

    function animateScroll(currentTime) {
        if (startTime === null) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        const ease = 1 - Math.pow(1 - progress, 3);

        window.scrollTo(0, startY + distance * ease);

        if (progress < 1) requestAnimationFrame(animateScroll);
    }

    requestAnimationFrame(animateScroll);
}

navAnchors.forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
        const target = document.querySelector(anchor.getAttribute('href'));
        if (!target) return;

        e.preventDefault();

        navLinks.classList.remove('show');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');

        smoothScrollTo(target);
    });
});

backToTopBtn.addEventListener('click', () => {
    smoothScrollTo(document.getElementById('home'));
});

const sections = document.querySelectorAll('#home, #trending, #about, #products');

const activeLinkObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;

            navAnchors.forEach((link) => link.classList.remove('active'));

            const activeLink = document.querySelector(`#nav-links a[href="#${entry.target.id}"]`);
            activeLink.classList.add('active');
        });
    },
    { threshold: 0.5 }
);

sections.forEach((section) => activeLinkObserver.observe(section));

const revealTargets = document.querySelectorAll(
    '.trending-card, .product-card, .about-info, .about-image, .home-actions'
);
revealTargets.forEach((el) => el.classList.add('reveal'));

const revealTextTargets = document.querySelectorAll(
    '.title, .home-title, .home-descripition'
);
revealTextTargets.forEach((el) => el.classList.add('reveal-text'));

const revealObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            entry.target.classList.toggle('is-visible', entry.isIntersecting);
        });
    },
    { threshold: 0.15 }
);

revealTargets.forEach((el) => revealObserver.observe(el));
revealTextTargets.forEach((el) => revealObserver.observe(el));