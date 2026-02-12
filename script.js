// Initialize AOS (Animate On Scroll)
AOS.init({
    duration: 800,
    easing: 'ease-out',
    once: true,
    offset: 100
});

// Mobile Navigation Toggle
const burger = document.getElementById('burger');
const navLinks = document.getElementById('navLinks');

if (burger) {
    burger.addEventListener('click', () => {
        burger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
}

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        burger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Animated Counter for Stats
function animateCounter(element, target, duration = 2000) {
    let startTime = null;
    const startValue = 0;

    function animate(currentTime) {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);

        const currentValue = Math.floor(progress * target);
        element.textContent = currentValue + '%';

        if (progress < 1) {
            requestAnimationFrame(animate);
        } else {
            element.textContent = target + '%';
        }
    }

    requestAnimationFrame(animate);
}

// Intersection Observer for Counter Animation
const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px'
};

const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
            const target = parseInt(entry.target.getAttribute('data-target'));
            animateCounter(entry.target, target);
            entry.target.classList.add('counted');
        }
    });
}, observerOptions);

// Observe all stat numbers
document.querySelectorAll('.stat-number').forEach(stat => {
    counterObserver.observe(stat);
});

// Parallax Effect for Hero Background
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroSection = document.querySelector('.hero');

    if (heroSection && scrolled < window.innerHeight) {
        const heroBg = document.querySelector('.hero-bg');
        if (heroBg) {
            heroBg.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    }
});

// Add hover sound effect simulation (visual feedback)
document.querySelectorAll('.today-card, .rule-item').forEach(card => {
    card.addEventListener('mouseenter', function () {
        this.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
    });
});

// Navbar background on scroll - DISABLED to keep transparent
// window.addEventListener('scroll', () => {
//     const navbar = document.getElementById('navbar');
//     if (window.scrollY > 50) {
//         navbar.style.background = 'rgba(28, 37, 65, 0.98)';
//         navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
//     } else {
//         navbar.style.background = 'rgba(28, 37, 65, 0.95)';
//         navbar.style.boxShadow = 'none';
//     }
// });

// Animated Shape Blur Effect
const canvas = document.getElementById('shapeCanvas');
if (canvas) {
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;
    let time = 0;

    function drawMorphingShape() {
        ctx.clearRect(0, 0, width, height);

        const centerX = width / 2;
        const centerY = height / 2;
        const baseRadius = 150;

        // Create gradient
        const gradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, baseRadius * 1.5);
        gradient.addColorStop(0, 'rgba(58, 134, 255, 0.8)');
        gradient.addColorStop(0.5, 'rgba(28, 37, 65, 0.6)');
        gradient.addColorStop(1, 'rgba(11, 19, 43, 0.3)');

        ctx.fillStyle = gradient;
        ctx.beginPath();

        // Draw morphing blob
        for (let angle = 0; angle < Math.PI * 2; angle += 0.1) {
            const noise1 = Math.sin(angle * 3 + time) * 20;
            const noise2 = Math.cos(angle * 5 - time * 0.5) * 15;
            const noise3 = Math.sin(angle * 2 + time * 0.3) * 25;
            const radius = baseRadius + noise1 + noise2 + noise3;

            const x = centerX + Math.cos(angle) * radius;
            const y = centerY + Math.sin(angle) * radius;

            if (angle === 0) {
                ctx.moveTo(x, y);
            } else {
                ctx.lineTo(x, y);
            }
        }

        ctx.closePath();
        ctx.fill();

        time += 0.02;
        requestAnimationFrame(drawMorphingShape);
    }

    drawMorphingShape();
}

console.log('A1 Investment Company - Website Loaded Successfully');
