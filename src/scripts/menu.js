// Toggle mobile navigation for the header
const btn = document.querySelector('.hamburger');
const menu = document.getElementById('navbar-default');

if (btn && menu) {
  // initialize aria-expanded according to initial state
  const initExpanded = menu.classList.contains('hidden') ? 'false' : 'true';
  btn.setAttribute('aria-expanded', initExpanded);

  btn.addEventListener('click', () => {
    // Toggle Tailwind 'hidden' class to show/hide the menu
    menu.classList.toggle('hidden');

    // Update aria-expanded for accessibility
    const expanded = menu.classList.contains('hidden') ? 'false' : 'true';
    btn.setAttribute('aria-expanded', expanded);
  });

  // Close menu with Escape key when open
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !menu.classList.contains('hidden')) {
      menu.classList.add('hidden');
      btn.setAttribute('aria-expanded', 'false');
    }
  });

  // Close menu when any link inside it is clicked (mobile)
  menu.addEventListener('click', (e) => {
    const target = e.target;
    if (target && (target.tagName === 'A' || target.closest('a'))) {
      // hide menu and update aria
      menu.classList.add('hidden');
      btn.setAttribute('aria-expanded', 'false');
    }
  });
}