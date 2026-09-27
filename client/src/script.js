const iconPaths = {
  'arrow-up-right': '<path d="M7 17 17 7M8 7h9v9"/>',
  'arrow-right': '<path d="M4 12h16M13 5l7 7-7 7"/>',
  'arrow-down-right': '<path d="M5 5l14 14M19 10v9h-9"/>',
  'shield-check': '<path d="M12 3 5 6v5c0 4.5 2.9 8 7 10 4.1-2 7-5.5 7-10V6l-7-3Z"/><path d="m8.5 12 2.2 2.2 4.7-4.7"/>',
  clock: '<circle cx="12" cy="12" r="8.5"/><path d="M12 7v5l3 2"/>',
  'badge-check': '<path d="m12 3 2 1.3 2.4-.1 1.1 2.1 2.1 1.1-.1 2.4 1.3 2-1.3 2 .1 2.4-2.1 1.1-1.1 2.1-2.4-.1-2 1.3-2-1.3-2.4.1-1.1-2.1-2.1-1.1.1-2.4-1.3-2 1.3-2-.1-2.4 2.1-1.1 1.1-2.1 2.4.1 2-1.3Z"/><path d="m8.3 12 2.2 2.2 4.5-4.5"/>',
  'message-circle': '<path d="M20 11.5a7.8 7.8 0 0 1-8 7.5 8.4 8.4 0 0 1-3.3-.7L4 20l1.3-3.9A7.3 7.3 0 0 1 4 11.5 7.8 7.8 0 0 1 12 4a7.8 7.8 0 0 1 8 7.5Z"/><path d="M8 12h.01M12 12h.01M16 12h.01"/>',
  plane: '<path d="m3 11 18-7-7 18-3-8-8-3Z"/><path d="m11 14 4-4"/>',
  'package-check': '<path d="m4 7 8-4 8 4v10l-8 4-8-4V7Z"/><path d="M4 7 12 11l8-4M12 11v10"/><path d="m9 15 2 2 4-4"/>',
  'shopping-cart': '<circle cx="9" cy="19" r="1.5"/><circle cx="17" cy="19" r="1.5"/><path d="M3 4h2l2.1 10.2a2 2 0 0 0 2 1.6h7.7a2 2 0 0 0 1.9-1.4L20 8H6"/>',
  boxes: '<path d="m4 7 8-4 8 4-8 4-8-4Z"/><path d="M4 7v10l8 4 8-4V7M12 11v10M8 5l8 4"/>',
  'file-check': '<path d="M6 3h8l4 4v14H6z"/><path d="M14 3v5h4M8.5 14l2 2 4-4"/>',
  radio: '<path d="M4 12a8 8 0 0 1 16 0"/><path d="M7 12a5 5 0 0 1 10 0"/><path d="M10 12a2 2 0 0 1 4 0"/><path d="M12 12v8"/>',
  building: '<path d="M4 21V5l8-3 8 3v16M2 21h20M8 8h1M15 8h1M8 12h1M15 12h1M8 16h1M15 16h1"/>',
  lock: '<rect x="5" y="10" width="14" height="10" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3M12 14v2"/>',
  check: '<path d="m5 12 4 4L19 6"/>',
  mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m4 7 8 6 8-6"/>',
  instagram: '<rect x="4" y="4" width="16" height="16" rx="4"/><circle cx="12" cy="12" r="3.5"/><path d="M17.5 6.5h.01"/>',
  youtube: '<path d="M20.4 7.2a2.5 2.5 0 0 0-1.7-1.7C17.2 5 12 5 12 5s-5.2 0-6.7.5a2.5 2.5 0 0 0-1.7 1.7C3 8.7 3 12 3 12s0 3.3.6 4.8a2.5 2.5 0 0 0 1.7 1.7C6.8 19 12 19 12 19s5.2 0 6.7-.5a2.5 2.5 0 0 0 1.7-1.7C21 15.3 21 12 21 12s0-3.3-.6-4.8Z"/><path d="m10 9 5 3-5 3V9Z"/>',
  zap: '<path d="m13 2-9 12h7l-1 8 9-12h-7l1-8Z"/>',
  menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
  x: '<path d="m6 6 12 12M18 6 6 18"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
};

function hydrateIcons() {
  document.querySelectorAll('[data-icon]').forEach((node) => {
    const name = node.dataset.icon;
    const path = iconPaths[name];
    if (path) node.innerHTML = `<svg viewBox="0 0 24 24" aria-hidden="true">${path}</svg>`;
  });
}

hydrateIcons();

const header = document.querySelector('[data-header]');
const nav = document.querySelector('[data-nav]');
const menuToggle = document.querySelector('[data-menu-toggle]');

function closeMenu() {
  nav?.classList.remove('open');
  menuToggle?.setAttribute('aria-expanded', 'false');
  if (menuToggle) menuToggle.innerHTML = '<span class="icon" data-icon="menu"></span>';
  hydrateIcons();
}

menuToggle?.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.innerHTML = `<span class="icon" data-icon="${isOpen ? 'x' : 'menu'}"></span>`;
  hydrateIcons();
});

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', () => closeMenu());
});

window.addEventListener('scroll', () => {
  header?.classList.toggle('scrolled', window.scrollY > 12);
}, { passive: true });

const pricing = {
  za: { flag: '🇿🇦', label: 'Afrique du Sud', cities: 'Johannesburg · Cape Town · Durban · Pretoria', service: '10 – 25 €', logistics: '25 – 60 €', margin: '20 – 40 %', insurance: '5 – 10 €', delay: '7 – 14 jours' },
  rdc: { flag: '🇨🇩', label: 'Congo RDC', cities: 'Kinshasa · Lubumbashi', service: '15 – 30 €', logistics: '40 – 100 €', margin: '40 – 70 %', insurance: '10 – 20 €', delay: '10 – 21 jours' },
};

function updatePricing(country) {
  const data = pricing[country] || pricing.za;
  document.querySelectorAll('[data-country]').forEach((button) => button.classList.toggle('active', button.dataset.country === country));
  Object.entries(data).forEach(([key, value]) => {
    const target = document.querySelector(`[data-price="${key}"]`);
    if (target) target.textContent = value;
  });
}

document.querySelectorAll('[data-country]').forEach((button) => {
  button.addEventListener('click', () => updatePricing(button.dataset.country));
});

function toggleFaq(item) {
  const open = item.classList.toggle('open');
  const button = item.querySelector('button');
  button?.setAttribute('aria-expanded', String(open));
  const icon = button?.querySelector('[data-icon]');
  if (icon) {
    icon.dataset.icon = open ? 'x' : 'plus';
    icon.innerHTML = '';
  }
  hydrateIcons();
}

document.querySelectorAll('.faq-item').forEach((item) => {
  item.querySelector('button')?.addEventListener('click', () => toggleFaq(item));
});

const toast = document.querySelector('[data-toast]');
let toastTimer;
function showToast(message) {
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add('visible');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('visible'), 5200);
}

const form = document.querySelector('[data-quote-form]');
form?.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  const name = String(formData.get('name') || '');
  const email = String(formData.get('email') || '');
  const product = String(formData.get('product') || '');
  const country = String(formData.get('country') || '');
  const phone = String(formData.get('phone') || '');
  const message = String(formData.get('message') || '');
  const subject = encodeURIComponent(`Demande de devis — ${name || 'Tambo Connect'}`);
  const body = encodeURIComponent(`Bonjour Tambo Connect,\n\nJe souhaite un devis pour une livraison vers ${country}.\nNom : ${name}\nEmail : ${email}\nWhatsApp : ${phone}\nLien produit : ${product}\nMessage : ${message}\n\nMerci.`);
  const success = form.querySelector('[data-form-success]');
  if (success) success.hidden = false;
  showToast('Votre demande est prête à être envoyée. Votre messagerie va s’ouvrir.');
  window.location.href = `mailto:tamboshop@yahoo.com?subject=${subject}&body=${body}`;
});

const revealObserver = 'IntersectionObserver' in window ? new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: .1 }) : null;

document.querySelectorAll('.process-item, .destination-card, .service-card, .price-card, .quote-form, .faq-item').forEach((element, index) => {
  element.style.transitionDelay = `${Math.min(index * 35, 210)}ms`;
  element.classList.add('reveal-on-scroll');
  revealObserver?.observe(element);
});

if (revealObserver) {
  const style = document.createElement('style');
  style.textContent = '.reveal-on-scroll{opacity:0;transform:translateY(14px);transition:opacity 500ms var(--ease-out),transform 500ms var(--ease-out)}.reveal-on-scroll.is-visible{opacity:1;transform:translateY(0)}';
  document.head.appendChild(style);
}

const sections = [...document.querySelectorAll('main section[id]')];
const navLinks = [...document.querySelectorAll('.desktop-nav a')];
if ('IntersectionObserver' in window) {
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navLinks.forEach((link) => link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`));
      }
    });
  }, { rootMargin: '-35% 0px -55% 0px' });
  sections.forEach((section) => sectionObserver.observe(section));
}
