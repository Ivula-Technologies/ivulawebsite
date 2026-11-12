(function () {
  var doc = document.documentElement;
  doc.classList.add('js');
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Header turns solid once you scroll past the top of the hero
  var header = document.querySelector('.site-header');
  function onScroll() { header.classList.toggle('solid', window.scrollY > 40 || nav.classList.contains('open')); }

  // Mobile menu
  var btn = document.getElementById('menuBtn');
  var nav = document.getElementById('nav');
  btn.addEventListener('click', function () {
    var open = nav.classList.toggle('open');
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    onScroll();
  });
  nav.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') { nav.classList.remove('open'); btn.setAttribute('aria-expanded', 'false'); onScroll(); }
  });
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Photos that fail to load leave the branded frame instead of a broken icon
  document.querySelectorAll('.ph img').forEach(function (img) {
    function broken() { img.classList.add('broken'); }
    if (img.complete && img.naturalWidth === 0 && img.getAttribute('src')) broken();
    img.addEventListener('error', broken);
  });

  // Videos: respect reduced motion; load the second video only when it is near the screen
  var heroVideo = document.querySelector('.hero-video');
  if (reduce && heroVideo) { heroVideo.removeAttribute('autoplay'); heroVideo.pause(); }
  var lazyVideos = document.querySelectorAll('video[data-lazy-video]');
  function loadVideo(v) {
    v.querySelectorAll('source[data-src]').forEach(function (s) { s.src = s.getAttribute('data-src'); s.removeAttribute('data-src'); });
    v.load();
    if (!reduce) { var p = v.play(); if (p && p.catch) p.catch(function () {}); }
  }
  if ('IntersectionObserver' in window) {
    var vio = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { loadVideo(en.target); vio.unobserve(en.target); } });
    }, { rootMargin: '400px 0px' });
    lazyVideos.forEach(function (v) { vio.observe(v); });
  } else { lazyVideos.forEach(loadVideo); }

  if (reduce) { document.querySelectorAll('.map .truck').forEach(function (t) { t.remove(); }); }

  // Quote form: sends to contact.php, which emails the office
  var form = document.getElementById('quote');
  var status = document.getElementById('formStatus');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    status.className = 'form-status'; status.textContent = '';
    var ok = true;
    ['q-name', 'q-phone'].forEach(function (id) {
      var el = document.getElementById(id);
      var bad = !el.value.trim();
      el.classList.toggle('invalid', bad);
      if (bad) ok = false;
    });
    var email = document.getElementById('q-email');
    if (email.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) { email.classList.add('invalid'); ok = false; } else { email.classList.remove('invalid'); }
    if (!ok) { status.classList.add('err'); status.textContent = 'Please add your name and a phone number we can reach you on.'; return; }

    var button = form.querySelector('button[type="submit"]');
    button.disabled = true; button.textContent = 'Sending...';
    fetch(form.getAttribute('action'), { method: 'POST', body: new FormData(form), headers: { 'Accept': 'application/json' } })
      .then(function (r) { return r.json().catch(function () { return { ok: false }; }); })
      .then(function (data) {
        if (data && data.ok) {
          form.reset();
          status.classList.add('ok');
          status.textContent = 'Thank you. Your request has reached our team and we will call you back shortly.';
        } else { throw new Error('send failed'); }
      })
      .catch(function () {
        status.classList.add('err');
        status.textContent = 'We could not send the form just now. Please call or WhatsApp 0706 444 868, or email valencelogisticsandclearing@gmail.com.';
      })
      .then(function () { button.disabled = false; button.textContent = 'Send request'; });
  });

  var y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
})();
