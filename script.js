/* ==========================================================================
   DITCHFEES INTERACTIVE SCRIPT
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // Sticky Navbar Scroll Effect
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 40) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });
  }

  // Mobile Menu Toggle
  const mobileToggle = document.querySelector('.mobile-toggle');
  const navLinks = document.querySelector('.nav-links');
  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
      navLinks.classList.toggle('mobile-open');
    });
  }

  // Lead Form Submission Handler (Both Forms)
  const forms = document.querySelectorAll('.lead-form');
  forms.forEach((form) => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const parentCard = form.closest('.form-card-glass, .form-card-solid');
      if (parentCard) {
        const successMsg = parentCard.querySelector('.form-success-msg');
        if (successMsg) {
          form.style.display = 'none';
          successMsg.style.display = 'block';
        }
      }
    });
  });

  // Duplicate Logo Marquee Track for Seamless Infinite Scroll
  const marqueeTrack = document.querySelector('.marquee-track');
  if (marqueeTrack) {
    const clone = marqueeTrack.innerHTML;
    marqueeTrack.innerHTML += clone + clone;
  }
});
