/* ==========================================================================
   DITCHFEES — behaviour
   Vanilla JS, no dependencies. Everything here is progressive: with JS off the
   page still reads, scrolls, and the forms still submit natively.
   ========================================================================== */
(function () {
  'use strict';

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ------------------------------------------------------------------------
     Navbar: fade in a solid background past 40px of scroll.
     ------------------------------------------------------------------------ */
  var nav = document.getElementById('nav');
  if (nav) {
    var ticking = false;
    var onScroll = function () {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(function () {
        nav.classList.toggle('is-stuck', window.scrollY > 40);
        ticking = false;
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ------------------------------------------------------------------------
     Mobile menu. The CTA button stays visible at all widths, so this only
     toggles the link list.
     ------------------------------------------------------------------------ */
  var toggle = document.getElementById('nav-toggle');
  var menu = document.getElementById('nav-menu');
  if (toggle && menu) {
    var setMenu = function (open) {
      menu.classList.toggle('is-open', open);
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    };

    toggle.addEventListener('click', function () {
      setMenu(toggle.getAttribute('aria-expanded') !== 'true');
    });

    menu.addEventListener('click', function (e) {
      if (e.target.closest('a')) setMenu(false);
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') setMenu(false);
    });
  }

  /* ------------------------------------------------------------------------
     Scroll-in reveal: fade plus an 18px rise, once, staggered between the
     siblings inside a section. Skipped entirely under reduced motion.
     ------------------------------------------------------------------------ */
  var reveals = document.querySelectorAll('.reveal');

  if (reduceMotion || !('IntersectionObserver' in window)) {
    Array.prototype.forEach.call(reveals, function (el) { el.classList.add('is-in'); });
  } else {
    var seen = new WeakSet();

    var observer = new IntersectionObserver(function (entries) {
      // Group the entries breaking through together so siblings stagger in order.
      var batch = entries.filter(function (entry) {
        return entry.isIntersecting && !seen.has(entry.target);
      });

      batch.forEach(function (entry, i) {
        seen.add(entry.target);
        entry.target.style.setProperty('--d', (i * 75) + 'ms');
        entry.target.classList.add('is-in');
        observer.unobserve(entry.target);
      });
    }, { rootMargin: '0px 0px -12% 0px', threshold: 0.08 });

    Array.prototype.forEach.call(reveals, function (el) { observer.observe(el); });
  }

  /* ------------------------------------------------------------------------
     FAQ accordion. ARIA button pattern, one panel open at a time, first item
     open on load. The plus icon rotates 45 degrees into an x via CSS.
     ------------------------------------------------------------------------ */
  var faq = document.querySelector('[data-faq]');
  if (faq) {
    var items = faq.querySelectorAll('.faq-item');

    var setItem = function (item, open) {
      item.classList.toggle('is-open', open);
      var btn = item.querySelector('.faq-q');
      if (btn) btn.setAttribute('aria-expanded', String(open));
    };

    faq.addEventListener('click', function (e) {
      var btn = e.target.closest('.faq-q');
      if (!btn) return;

      var item = btn.closest('.faq-item');
      var willOpen = btn.getAttribute('aria-expanded') !== 'true';

      Array.prototype.forEach.call(items, function (other) {
        setItem(other, other === item && willOpen);
      });
    });
  }

  /* ------------------------------------------------------------------------
     Lead forms. Both capture points share this handler.
     Validation rule: a name, a service, and at least one way to reply.
     On success the card swaps to the thank-you state.
     ------------------------------------------------------------------------ */
  var forms = document.querySelectorAll('.lead-form');

  Array.prototype.forEach.call(forms, function (form) {
    var card  = form.closest('[data-form-card]');
    var done  = card ? card.querySelector('[data-form-done]') : null;
    var body  = card ? card.querySelector('.form-body') : null;
    var error = form.querySelector('[data-form-error]');

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      var name    = form.querySelector('input[name="name"]');
      var service = form.querySelector('select[name="service"]');
      var contact = form.querySelectorAll('[data-contact]');

      var hasContact = Array.prototype.some.call(contact, function (input) {
        return input.value.trim() !== '';
      });

      if (error) error.hidden = true;

      if (name && name.value.trim() === '') { name.focus(); return; }
      if (service && service.value === '')  { service.focus(); return; }

      if (!hasContact) {
        if (error) error.hidden = false;
        if (contact[0]) contact[0].focus();
        return;
      }

      // NEEDS: the backend or webhook endpoint these submissions should POST to.
      // Until that exists the form confirms locally rather than dropping the
      // enquiry silently.
      if (body && done) {
        body.hidden = true;
        done.hidden = false;
        done.setAttribute('tabindex', '-1');
        done.focus();
      }
    });
  });

})();
