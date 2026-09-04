document.addEventListener('DOMContentLoaded', function () {

  /* ---------------------------------------------------
     1. Navbar background on scroll
  --------------------------------------------------- */
  var mainNav = document.getElementById('mainNav');
  function handleNavScroll() {
    if (window.scrollY > 60) {
      mainNav.classList.add('scrolled');
    } else {
      mainNav.classList.remove('scrolled');
    }
  }
  handleNavScroll();
  window.addEventListener('scroll', handleNavScroll);

  /* ---------------------------------------------------
     2. Collapse mobile menu after clicking a nav link
  --------------------------------------------------- */
  var navLinks = document.querySelectorAll('#navMenu .nav-link, #navMenu .btn-order');
  var navMenuEl = document.getElementById('navMenu');
  navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      if (navMenuEl.classList.contains('show')) {
        var bsCollapse = bootstrap.Collapse.getOrCreateInstance(navMenuEl);
        bsCollapse.hide();
      }
    });
  });

  /* ---------------------------------------------------
     3. Menu filter buttons (All / Rice / Swallow / Grills / Drinks)
  --------------------------------------------------- */
  var filterButtons = document.querySelectorAll('.filter-btn');
  var menuItems = document.querySelectorAll('.menu-item');

  filterButtons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      filterButtons.forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');

      var filter = btn.getAttribute('data-filter');

      menuItems.forEach(function (item) {
        var category = item.getAttribute('data-category');
        if (filter === 'all' || filter === category) {
          item.classList.remove('hide');
        } else {
          item.classList.add('hide');
        }
      });
    });
  });

  /* ---------------------------------------------------
     4. Contact form validation (Bootstrap-style) + fake submit
  --------------------------------------------------- */
  var contactForm = document.getElementById('contactForm');
  var formSuccess = document.getElementById('formSuccess');

  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      e.stopPropagation();

      if (!contactForm.checkValidity()) {
        contactForm.classList.add('was-validated');
        formSuccess.classList.add('d-none');
        return;
      }

      // No backend connected yet — this simply confirms receipt in the UI.
      contactForm.classList.remove('was-validated');
      formSuccess.classList.remove('d-none');
      contactForm.reset();

      setTimeout(function () {
        formSuccess.classList.add('d-none');
      }, 6000);
    });
  }

  /* ---------------------------------------------------
     5. Back-to-top button
  --------------------------------------------------- */
  var backToTop = document.getElementById('backToTop');
  function handleBackToTop() {
    if (window.scrollY > 500) {
      backToTop.classList.add('show');
    } else {
      backToTop.classList.remove('show');
    }
  }
  handleBackToTop();
  window.addEventListener('scroll', handleBackToTop);

  backToTop.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  /* ---------------------------------------------------
     6. Footer year
  --------------------------------------------------- */
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

});
