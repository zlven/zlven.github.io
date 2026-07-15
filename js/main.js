/* ============================================
   学术主页 - JavaScript
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  // --- 移动端菜单 ---
  const toggle = document.getElementById('navToggle');
  const links = document.getElementById('navLinks');

  if (toggle && links) {
    toggle.addEventListener('click', () => {
      toggle.classList.toggle('active');
      links.classList.toggle('active');
    });
    links.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        toggle.classList.remove('active');
        links.classList.remove('active');
      });
    });
  }

  // --- 滚动显示动画 ---
  const revealObserver = new IntersectionObserver(
    entries => entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); revealObserver.unobserve(e.target); }
    }),
    { threshold: 0.1 }
  );
  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

  // --- 当前年份 ---
  const yr = document.getElementById('currentYear');
  if (yr) yr.textContent = new Date().getFullYear();
});
