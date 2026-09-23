// Small progressive enhancements for the portfolio page.

document.addEventListener('DOMContentLoaded', () => {
  // Keep the footer year current automatically.
  const yearStamp = document.getElementById('year-stamp');
  if (yearStamp) {
    const year = new Date().getFullYear();
    yearStamp.textContent = `Mirza Monir · Shahbagh, Dhaka, Bangladesh · © ${year}`;
  }

  // Optional light/dark toggle, remembered for this browser only.
  const root = document.documentElement;
  const saved = localStorage.getItem('theme');
  if (saved === 'light' || saved === 'dark') {
    root.setAttribute('data-theme', saved);
  }

  const toggle = document.createElement('button');
  toggle.textContent = root.getAttribute('data-theme') === 'dark' ? '☀️' : '🌙';
  toggle.setAttribute('aria-label', 'Toggle light and dark theme');
  Object.assign(toggle.style, {
    position: 'fixed',
    top: '16px',
    right: '16px',
    border: 'none',
    background: 'transparent',
    fontSize: '1.2rem',
    cursor: 'pointer',
    opacity: '0.7',
  });
  toggle.addEventListener('click', () => {
    const current = root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
    const next = current === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    toggle.textContent = next === 'dark' ? '☀️' : '🌙';
    try { localStorage.setItem('theme', next); } catch (e) { /* storage unavailable */ }
  });
  document.body.appendChild(toggle);
});
