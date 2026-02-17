// Header scroll effect
const header = document.querySelector('[data-header]');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('is-scrolled');
  } else {
    header.classList.remove('is-scrolled');
  }
});

// Reveal Observer
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-inview');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('[data-reveal]').forEach(el => revealObserver.observe(el));

// Burger Menu
const burger = document.querySelector('[data-burger]');
const nav = document.querySelector('[data-nav]');

if (burger && nav) {
  burger.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('is-open');
    burger.setAttribute('aria-expanded', String(isOpen));
  });

  nav.addEventListener('click', (e) => {
    if (e.target.closest('a')) {
      nav.classList.remove('is-open');
      burger.setAttribute('aria-expanded', 'false');
    }
  });
}

// Stats Animation
function animateValue(obj, start, end, duration) {
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    obj.innerHTML = Math.floor(progress * (end - start) + start);
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
}

const statsSection = document.querySelector('.legend__stats');
if (statsSection) {
  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      document.querySelectorAll('[data-count]').forEach(el => {
        animateValue(el, 0, parseInt(el.dataset.count), 1500);
      });
      observer.disconnect();
    }
  }, { threshold: 0.5 });
  observer.observe(statsSection);
}
// Shutter Text Animation Logic
function initShutterText() {
  const elements = document.querySelectorAll('[data-shutter]');

  elements.forEach(el => {
    const text = el.textContent.trim();
    const characters = text.split('');
    el.innerHTML = '';
    el.classList.add('shutter-text');

    characters.forEach((char, i) => {
      const charContainer = document.createElement('div');
      charContainer.className = 'shutter-char';

      const delay = i * 0.04;
      const charContent = char === ' ' ? '&nbsp;' : char;

      charContainer.innerHTML = `
        <span class="shutter-char__main" style="animation-delay: ${delay + 0.3}s">${charContent}</span>
        <span class="shutter-layer shutter-layer--top" style="animation-delay: ${delay}s">${charContent}</span>
        <span class="shutter-layer shutter-layer--middle" style="animation-delay: ${delay + 0.1}s">${charContent}</span>
        <span class="shutter-layer shutter-layer--bottom" style="animation-delay: ${delay + 0.2}s">${charContent}</span>
      `;

      el.appendChild(charContainer);
    });
  });
}

// Initialize everything
document.addEventListener('DOMContentLoaded', () => {
  initShutterText();

  // Sequential Border Flow Observer
  const flowContainers = document.querySelectorAll('.cards4, .code');

  const flowObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const container = entry.target;
        const items = container.querySelectorAll('.card, .rule');

        items.forEach((item, index) => {
          setTimeout(() => {
            item.classList.add('border-active');
          }, index * 400); // 400ms delay between each item
        });

        flowObserver.unobserve(container); // Run once
      }
    });
  }, { threshold: 0.2 });

  flowContainers.forEach(container => flowObserver.observe(container));
});
