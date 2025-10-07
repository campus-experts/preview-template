// Mobile navigation toggle
document.addEventListener('DOMContentLoaded', function () {
  const mobileToggle = document.getElementById('mobile-nav-toggle');
  const mobileNav = document.getElementById('mobile-nav');

  if (mobileToggle && mobileNav) {
    mobileToggle.addEventListener('click', function () {
      mobileNav.classList.toggle('d-none');
      mobileNav.classList.toggle('d-flex');

      // Update aria-expanded
      const isExpanded = mobileNav.classList.contains('d-flex');
      mobileToggle.setAttribute('aria-expanded', isExpanded);

      // Update toggle icon
      const icon = mobileToggle.querySelector('svg');
      if (isExpanded) {
        icon.outerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" style="pointer-events: none;"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>`;
      } else {
        icon.outerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" style="pointer-events: none;"><path d="M4 5h16"/><path d="M4 12h16"/><path d="M4 19h16"/></svg>`;
      }
    });

    // Close mobile nav when clicking on a link
    const mobileNavLinks = mobileNav.querySelectorAll('a');
    mobileNavLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        mobileNav.classList.add('d-none');
        mobileNav.classList.remove('d-flex');
        mobileToggle.setAttribute('aria-expanded', 'false');

        // Reset toggle icon
        const icon = mobileToggle.querySelector('svg');
        icon.outerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" style="pointer-events: none;"><path d="M4 5h16"/><path d="M4 12h16"/><path d="M4 19h16"/></svg>`;
      });
    });
  }

  // Set active navigation state
  function setActiveNavigation() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('#navbar nav a');

    navLinks.forEach(function (link) {
      const linkPath = new URL(link.href).pathname;

      // Remove any existing active class
      link.classList.remove('nav-active');

      // Check if this is the current page
      if (currentPath === linkPath) {
        link.classList.add('nav-active');
      }
    });
  }

  // Set active navigation on load
  setActiveNavigation();

  // Close mobile nav when clicking outside
  document.addEventListener('click', function (event) {
    if (
      mobileNav &&
      mobileToggle &&
      !mobileNav.contains(event.target) &&
      !mobileToggle.contains(event.target) &&
      mobileNav.classList.contains('d-flex')
    ) {
      mobileNav.classList.add('d-none');
      mobileNav.classList.remove('d-flex');
      mobileToggle.setAttribute('aria-expanded', 'false');

      // Reset toggle icon
      const icon = mobileToggle.querySelector('svg');
      icon.outerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" style="pointer-events: none;"><path d="M4 5h16"/><path d="M4 12h16"/><path d="M4 19h16"/></svg>`;
    }
  });

  // Close mobile nav on escape key
  document.addEventListener('keydown', function (event) {
    if (
      event.key === 'Escape' &&
      mobileNav &&
      mobileNav.classList.contains('d-flex')
    ) {
      mobileNav.classList.add('d-none');
      mobileNav.classList.remove('d-flex');
      mobileToggle.setAttribute('aria-expanded', 'false');

      // Reset toggle icon and focus
      const icon = mobileToggle.querySelector('svg');
      icon.outerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" style="pointer-events: none;"><path d="M4 5h16"/><path d="M4 12h16"/><path d="M4 19h16"/></svg>`;
      mobileToggle.focus();
    }
  });
});
