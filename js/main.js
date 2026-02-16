/**
 * AI LAB - Mohamed Abdelbasit Portfolio
 * Terminal loader · Particles · Typing · Modal
 */

document.addEventListener('DOMContentLoaded', () => {
  initTerminalLoader();
  initParticles();
  initTyping();
  initTheme();
  initSmoothScroll();
  initScrollReveal();
  initActiveNav();
  initMobileNav();
  initLucide();
});

// ========== TERMINAL LOADER ==========
function initTerminalLoader() {
  const loader = document.getElementById('loader');
  if (!loader) return;

  const run = async () => {
    await delay(3200);
    loader.classList.add('hidden');
  };

  run();
}

function delay(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

// ========== NEURAL PARTICLES ==========
function initParticles() {
  const canvas = document.getElementById('particles');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let animationId;
  let particles = [];

  const resize = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    initParticleArray();
  };

  const initParticleArray = () => {
    const count = Math.min(80, Math.floor((canvas.width * canvas.height) / 15000));
    particles = [];
    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        r: Math.random() * 1.5 + 0.5,
      });
    }
  };

  const draw = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const electric = 'rgba(0, 212, 255, 0.6)';
    const electricDim = 'rgba(0, 212, 255, 0.15)';

    particles.forEach((p, i) => {
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
      if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = electric;
      ctx.fill();

      particles.slice(i + 1).forEach((p2) => {
        const dx = p.x - p2.x;
        const dy = p.y - p2.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.strokeStyle = electricDim;
          ctx.globalAlpha = 1 - dist / 120;
          ctx.lineWidth = 0.5;
          ctx.stroke();
          ctx.globalAlpha = 1;
        }
      });
    });

    animationId = requestAnimationFrame(draw);
  };

  resize();
  window.addEventListener('resize', resize);
  draw();
}

// ========== TYPING ANIMATION ==========
function initTyping() {
  const el = document.getElementById('typing-text');
  if (!el) return;

  const text = 'Turning real-world problems into intelligent AI solutions';
  let i = 0;

  const type = () => {
    if (i < text.length) {
      el.textContent += text[i];
      i++;
      setTimeout(type, 50);
    } else {
      setTimeout(() => {
        el.textContent = '';
        i = 0;
        setTimeout(type, 1500);
      }, 3000);
    }
  };

  setTimeout(type, 800);
}

// ========== THEME TOGGLE ==========
function initTheme() {
  const toggle = document.querySelector('.theme-toggle');
  const html = document.documentElement;

  const saved = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (saved) {
    html.setAttribute('data-theme', saved);
  } else {
    html.setAttribute('data-theme', 'dark');
  }

  toggle?.addEventListener('click', () => {
    const next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
  });
}

// ========== SMOOTH SCROLL ==========
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href === '#') return;
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) target.scrollIntoView({ behavior: 'smooth' });
      document.querySelector('.nav-links')?.classList.remove('active');
    });
  });
}

// ========== SCROLL REVEAL ==========
function initScrollReveal() {
  const els = document.querySelectorAll(
    '.section-title, .about-me-content, .why-card, .problem-card, .case-study, .skills-section, .voluntary-card, .achievement-featured, .achievement-card, .timeline-item, .cta-strip, .hero-console, .hero-right'
  );

  const obs = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) e.target.classList.add('reveal-visible');
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
  );

  els.forEach((el, i) => {
    el.classList.add('reveal');
    const delay = (i % 5) + 1;
    if (el.classList.contains('why-card') || el.classList.contains('problem-card') || el.classList.contains('case-study') || el.classList.contains('achievement-card')) {
      el.classList.add('reveal-delay-' + Math.min(delay, 5));
    }
    obs.observe(el);
  });
}

// ========== ACTIVE NAV ON SCROLL ==========
function initActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const links = document.querySelectorAll('.nav-links a');

  const handler = () => {
    const top = window.scrollY + 120;
    let current = '';
    sections.forEach((sec) => {
      const offset = sec.offsetTop;
      const height = sec.offsetHeight;
      if (top >= offset && top < offset + height) current = sec.getAttribute('id');
    });
    links.forEach((a) => {
      a.classList.remove('nav-active');
      if (a.getAttribute('href') === '#' + current) a.classList.add('nav-active');
    });
  };

  window.addEventListener('scroll', handler);
  handler();
}

// Achievement cards link directly to certificates — no modal

// ========== MOBILE NAV ==========
function initMobileNav() {
  const toggle = document.querySelector('.nav-mobile-toggle');
  const links = document.querySelector('.nav-links');

  toggle?.addEventListener('click', () => links?.classList.toggle('active'));

  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) links?.classList.remove('active');
  });
}

// ========== LUCIDE ICONS ==========
function initLucide() {
  if (typeof lucide !== 'undefined') lucide.createIcons();
  else window.addEventListener('load', () => lucide?.createIcons?.());
}
