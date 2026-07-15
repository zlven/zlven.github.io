/* ============================================
   个人学术网站 - JavaScript
   Personal Academic Website - Main Script
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  // --- 移动端菜单切换 ---
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      navToggle.classList.toggle('active');
      navLinks.classList.toggle('active');
    });

    // 点击链接后关闭菜单
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        navLinks.classList.remove('active');
      });
    });
  }

  // --- 滚动时导航栏效果 ---
  const navbar = document.querySelector('.navbar');
  let lastScroll = 0;

  window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;

    if (currentScroll > 100) {
      navbar.style.boxShadow = '0 1px 8px rgba(0,0,0,0.08)';
    } else {
      navbar.style.boxShadow = 'none';
    }

    lastScroll = currentScroll;
  });

  // --- 滚动显示动画 (Reveal on Scroll) ---
  const revealElements = document.querySelectorAll('.reveal');

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  revealElements.forEach(el => revealObserver.observe(el));

  // --- 技能条动画 ---
  const skillBars = document.querySelectorAll('.skill-bar-fill');

  const animateSkillBars = (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const bar = entry.target;
        const targetWidth = bar.getAttribute('data-width') || '0%';
        bar.style.width = targetWidth;
        skillBarObserver.unobserve(bar);
      }
    });
  };

  const skillBarObserver = new IntersectionObserver(animateSkillBars, {
    threshold: 0.3
  });

  skillBars.forEach(bar => skillBarObserver.observe(bar));

  // --- 表单提交处理 ---
  const contactForm = document.getElementById('contactForm');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;

      submitBtn.innerHTML = '✓ 已发送!';
      submitBtn.style.background = '#22c55e';
      submitBtn.disabled = true;

      // 这里可以添加实际的表单提交逻辑
      // 例如: 发送到 Formspree 或其他服务
      // const formData = new FormData(contactForm);
      // fetch('https://formspree.io/f/yourFormID', { method: 'POST', body: formData })

      setTimeout(() => {
        submitBtn.innerHTML = originalText;
        submitBtn.style.background = '';
        submitBtn.disabled = false;
        contactForm.reset();
      }, 3000);
    });
  }

  // --- 当前年份 ---
  const yearSpan = document.getElementById('currentYear');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // --- 平滑滚动 (降级时) ---
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href === '#') return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

});
