// Mirza Monir — Portfolio CV
// Small progressive enhancements. Safe to remove; the page works fully without JS.

document.addEventListener('DOMContentLoaded', function () {
  // Add a subtle "print / save as PDF" affordance via keyboard shortcut hint (no UI clutter).
  document.title = 'Mirza Monir — Portfolio CV';

  // Smooth-scroll for any in-page anchor links, if added later.
  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener('click', function (e) {
      var target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
});
