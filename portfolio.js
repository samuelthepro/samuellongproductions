/* portfolio.js: the three portfolio pages and the three pricing pages of samuellongproductions.com.
   html[data-page] names the set ("portfolio", the default, or "pricing"). portfolio.html and pricing.html
   ask photo or video (html[data-mode="choose"]) and their head scripts forward the old deep links
   (#greek, #video-greek, #greek-video) to the right page. The -video and -photo pages each hold the
   four categories; the open one lives in html[data-cat], set before first paint by the head script and
   here on every switch, and CSS shows the matching section and tab. */
(function () {
  var html = document.documentElement;
  var MODE = html.getAttribute('data-mode') || 'choose';
  var PAGE = html.getAttribute('data-page') === 'pricing' ? 'pricing' : 'portfolio';
  var CATS = ['weddings', 'seniors', 'greek', 'commercial'];
  var LABELS = { weddings: 'Weddings', seniors: 'Seniors', greek: 'Greek Life', commercial: 'Commercial' };
  if (MODE === 'photo') LABELS.weddings = PAGE === 'pricing' ? 'Engagement' : 'Wedding/Engagement'; // photo packages are engagement sessions; the photo portfolio's first category is wedding/engagement photos
  if (MODE === 'choose') LABELS.weddings = 'Weddings & engagements'; // photo opens engagements, video opens wedding films
  var REDUCE = !!(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  var HOLD = REDUCE; // the hero loop stays still under reduced motion or after the pause button

  function catFromHash() {
    var h = (location.hash || '').replace('#', '');
    if (h.indexOf('video-') === 0) h = h.slice(6);
    if (h.slice(-6) === '-video') h = h.slice(0, -6);
    return CATS.indexOf(h) !== -1 ? h : null;
  }
  function preCat() {
    try { var c = new URLSearchParams(location.search).get('cat'); return CATS.indexOf(c) !== -1 ? c : null; } catch (e) { return null; }
  }
  function track(name, data) { if (window.slp && window.slp.track) { try { window.slp.track(name, data); } catch (e) {} } }

  // ---------- hero loop (the question page and the video page) ----------
  function bgSync() {
    var v = document.getElementById('hero-bg-video'), b = document.getElementById('hero-bg-toggle');
    if (!v || !b) return;
    var playing = !v.paused;
    b.setAttribute('aria-label', playing ? 'Pause background video' : 'Play background video');
    b.querySelector('[data-icon="pause"]').style.display = playing ? '' : 'none';
    b.querySelector('[data-icon="play"]').style.display = playing ? 'none' : '';
  }
  window.slpBgToggle = function () {
    var v = document.getElementById('hero-bg-video');
    if (!v) return;
    if (v.paused) { HOLD = false; v.play().catch(function () {}); } else { HOLD = true; v.pause(); }
  };
  function bgStart() {
    var v = document.getElementById('hero-bg-video');
    if (!v) return;
    v.addEventListener('play', bgSync);
    v.addEventListener('pause', bgSync);
    if (!HOLD && v.paused) v.play().catch(function () {});
    bgSync();
  }

  // ---------- reveal on scroll, progress bar ----------
  var progress = document.getElementById('progress');
  var els = [].slice.call(document.querySelectorAll('[data-reveal],[data-fade]'));
  if ('IntersectionObserver' in window && !REDUCE) {
    els.forEach(function (el) {
      var d = parseInt(el.getAttribute('data-delay') || '0', 10);
      el.style.opacity = '0';
      el.style.transform = 'translateY(36px)';
      el.style.transition = 'opacity .9s ease, transform .9s cubic-bezier(.16,1,.3,1)';
      el.style.transitionDelay = d + 'ms';
    });
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.style.opacity = '1'; e.target.style.transform = 'none'; io.unobserve(e.target); }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -5% 0px' });
    els.forEach(function (el) { io.observe(el); });
    setTimeout(function () { els.forEach(function (el) { if (el.style.opacity === '0') { el.style.opacity = '1'; el.style.transform = 'none'; } }); }, 2400);
  }
  function progressSync() {
    if (!progress) return;
    var h = document.documentElement.scrollHeight - window.innerHeight;
    progress.style.transform = 'scaleX(' + (h > 0 ? Math.min(1, (window.scrollY || 0) / h) : 0) + ')';
  }

  // ---------- the question page ----------
  if (MODE === 'choose') {
    var pre = preCat();
    var ask = document.getElementById('hero-ask');
    if (pre && ask) ask.textContent = LABELS[pre] + ': photo or video? Pick one to start. You can switch at the top of either page any time.';
    [].forEach.call(document.querySelectorAll('a.choice[data-mode]'), function (a) {
      if (pre) a.setAttribute('href', PAGE + '-' + a.getAttribute('data-mode') + '.html#' + pre);
      a.addEventListener('click', function () { track(PAGE + '-choice', { mode: a.getAttribute('data-mode') }); });
    });
    window.addEventListener('scroll', progressSync, { passive: true });
    progressSync();
    bgStart();
    return;
  }

  // ---------- the video and photo pages ----------
  var OTHER = MODE === 'video' ? 'photo' : 'video';
  window._slpCat = catFromHash() || preCat() || 'weddings';

  function navHeight() { var n = document.querySelector('nav'); return n ? n.offsetHeight : 104; }
  // The fixed nav's height sets where the bar sticks; the bar's height sets where sections scroll to
  function measure() {
    html.style.setProperty('--nav-h', navHeight() + 'px');
    var wf = document.getElementById('wayfinder');
    if (wf) html.style.setProperty('--wf-h', wf.offsetHeight + 'px');
  }
  function stuckSync() {
    var wf = document.getElementById('wayfinder'), anchor = document.getElementById('wf-anchor');
    if (wf && anchor) wf.classList.toggle('is-stuck', anchor.getBoundingClientRect().top <= navHeight() + 1);
  }
  function scrollTarget() {
    var anchor = document.getElementById('wf-anchor');
    return anchor ? Math.max(0, anchor.getBoundingClientRect().top + window.scrollY - navHeight()) : 0;
  }
  // Scroll so the bar sits right under the nav with the section header below it. Smooth scrolls issued
  // while the page is still loading are dropped by Chrome, so deep links ask for an instant one.
  function scrollToBar(instant) {
    if (!document.getElementById('wf-anchor')) return;
    var y = scrollTarget();
    var startY = window.scrollY;
    var smooth = !instant && !REDUCE;
    window.scrollTo({ top: y, behavior: smooth ? 'smooth' : 'instant' });
    if (smooth) setTimeout(function () {
      if (Math.abs(window.scrollY - startY) < 4 && Math.abs(window.scrollY - y) > 4) window.scrollTo({ top: y, behavior: 'instant' });
      stuckSync();
    }, 500);
    else if (window.requestAnimationFrame) requestAnimationFrame(stuckSync);
  }
  function pauseVideos() {
    [].slice.call(document.querySelectorAll('video:not([data-bg])')).forEach(function (v) { v.pause(); });
  }
  function sync(instant) {
    var cat = window._slpCat;
    html.setAttribute('data-cat', cat);
    CATS.forEach(function (c) {
      var b = document.getElementById('wf-' + c);
      if (b) b.setAttribute('aria-pressed', c === cat ? 'true' : 'false');
    });
    var book = document.getElementById('wf-book');
    // The category name sits in its own span so a page can drop it where the bar is too narrow for it
    if (book) { book.innerHTML = 'Book<span class="wf-book-cat"> ' + LABELS[cat] + '</span>'; book.setAttribute('aria-label', 'Book ' + LABELS[cat]); book.setAttribute('href', 'contact.html?type=' + cat + '&from=' + PAGE + '-' + cat + '-' + MODE); }
    // The closing CTA at the foot of the page follows the same category and mode
    var cta = document.getElementById('cta-book');
    if (cta) { cta.textContent = 'Book ' + LABELS[cat]; cta.setAttribute('href', 'contact.html?type=' + cat + '&from=' + PAGE + '-closing-' + cat + '-' + MODE); }
    // The link to the other page of the set keeps the category
    var other = document.getElementById('wf-other');
    if (other) other.setAttribute('href', PAGE + '-' + OTHER + '.html#' + cat);
    // Keep the active category tab in view when the row scrolls (phones)
    var row = document.getElementById('wf-tabs'), active = document.getElementById('wf-' + cat);
    if (row && active && row.scrollWidth > row.clientWidth + 1) {
      var left = Math.max(0, active.offsetLeft - (row.clientWidth - active.offsetWidth) / 2);
      try { row.scrollTo({ left: left, behavior: (instant || REDUCE) ? 'instant' : 'smooth' }); } catch (e) { row.scrollLeft = left; }
    }
  }
  function show(cat, opts) {
    opts = opts || {};
    if (CATS.indexOf(cat) === -1) cat = 'weddings';
    pauseVideos();
    window._slpCat = cat;
    sync(!!opts.instant);
    var sec = document.getElementById(cat);
    if (sec) [].slice.call(sec.querySelectorAll('[data-fade],[data-reveal]')).forEach(function (e) { e.style.opacity = '1'; e.style.transform = 'none'; });
    if (opts.push) {
      var route = '#' + cat;
      if (location.hash !== route) {
        if (window.history && history.pushState) { try { history.pushState(null, '', route); } catch (e) {} }
        else location.hash = route;
      }
    }
    if (!opts.noScroll) scrollToBar(opts.instant);
  }
  // Bar handlers, plus the old names so nothing outside breaks
  window.slpPick = function (cat) { show(cat, { push: true }); };
  window.slpSetTab = function (t) { t = (t === 'photo') ? 'photo' : 'video'; if (t !== MODE) location.href = PAGE + '-' + t + '.html#' + window._slpCat; };
  window.slpCat = function (id, noScroll) { if (MODE === 'photo') show(id, { push: true, noScroll: !!noScroll }); else location.href = PAGE + '-photo.html#' + (CATS.indexOf(id) !== -1 ? id : 'weddings'); };
  window.slpVCat = function (id, noScroll) { if (MODE === 'video') show(id, { push: true, noScroll: !!noScroll }); else location.href = PAGE + '-video.html#' + (CATS.indexOf(id) !== -1 ? id : 'weddings'); };
  // Hash router: #greek opens Greek Life (the old #video-greek and #greek-video forms are accepted too), and with no
  // category in the hash, ?cat=greek does. Returns true for a hash deep link.
  function route() {
    var c = catFromHash();
    if (c) { show(c, { instant: true }); return true; }
    // ?cat=greek (the links on the Google Business Profile and its posts) opens that category in place
    show(preCat() || 'weddings', { noScroll: true });
    return false;
  }

  function onScroll() { progressSync(); stuckSync(); }
  window.addEventListener('scroll', onScroll, { passive: true });
  measure();
  window.addEventListener('resize', measure);
  window.addEventListener('load', measure);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(measure, function () {});
  onScroll();
  // Only one video plays at a time (the hero background loop is exempt)
  document.addEventListener('play', function (e) {
    var v = e.target;
    if (!v || v.tagName !== 'VIDEO' || v.hasAttribute('data-bg')) return;
    [].slice.call(document.querySelectorAll('video:not([data-bg])')).forEach(function (o) { if (o !== v) o.pause(); });
  }, true);
  if (route()) {
    // Late layout shifts (fonts, images) can move a deep-linked section; settle once the page has
    // loaded unless the visitor has started scrolling themselves
    var touched = false;
    ['wheel', 'touchstart', 'keydown', 'pointerdown'].forEach(function (ev) {
      window.addEventListener(ev, function () { touched = true; }, { passive: true, once: true });
    });
    var settle = function () {
      if (touched) return;
      if (Math.abs(scrollTarget() - window.scrollY) > 4) window.scrollTo({ top: scrollTarget(), behavior: 'instant' });
      stuckSync();
    };
    if (document.readyState === 'complete') settle();
    else window.addEventListener('load', function () { settle(); setTimeout(settle, 250); });
  }
  // Back and forward move between the categories this page pushed
  window.addEventListener('popstate', function () { route(); });
  bgStart();
})();
