/* site.js: first-touch attribution and engagement events for samuellongproductions.com.
   Cookieless. Attribution lives in sessionStorage for the current tab only (see privacy.html).
   Every inquiry sent through the contact form carries where the visitor came from, even when
   analytics is blocked. Umami (cookieless) loads only when UMAMI_ID is set below, and Vercel
   Web Analytics (also cookieless) loads alongside it; both skip Do Not Track and ?optout=1. */
(function () {
  var UMAMI_ID = 'ffe994d4-a7d7-4e8d-bc6c-d866c0c4e996';
  var HOST = 'www.samuellongproductions.com';

  // Visit any page with ?optout=1 once per browser to keep your own visits out of Umami and
  // Vercel Web Analytics (?optout=0 undoes it).
  try {
    var opt = new URLSearchParams(location.search).get('optout');
    if (opt === '1') localStorage.setItem('umami.disabled', '1');
    if (opt === '0') localStorage.removeItem('umami.disabled');
  } catch (e) {}

  // ---------- Umami ----------
  var queue = [];
  function ready() { return window.umami && typeof window.umami.track === 'function'; }
  function track(name, data) {
    if (window.va) { try { window.va('event', { name: name, data: data }); } catch (e) {} }
    if (!UMAMI_ID) return;
    if (!ready()) { queue.push([name, data]); return; }
    try { window.umami.track(name, data); } catch (e) {}
  }
  if (UMAMI_ID && location.hostname === HOST) {
    var s = document.createElement('script');
    s.defer = true;
    s.src = 'https://cloud.umami.is/script.js';
    s.setAttribute('data-website-id', UMAMI_ID);
    s.setAttribute('data-domains', HOST);
    s.setAttribute('data-do-not-track', 'true');
    s.onload = function () {
      var q = queue; queue = [];
      q.forEach(function (it) { try { window.umami.track(it[0], it[1]); } catch (e) {} });
    };
    document.head.appendChild(s);
  }

  // ---------- Vercel Web Analytics ----------
  // Page views and the same events as Umami, counted in the Vercel dashboard (project
  // samuellongproductions). Same rules: production host only, no Do Not Track, no ?optout=1.
  var skipVa = false;
  try {
    skipVa = localStorage.getItem('umami.disabled') === '1' ||
      navigator.doNotTrack === '1' || window.doNotTrack === '1';
  } catch (e) {}
  if (location.hostname === HOST && !skipVa) {
    window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };
    var v = document.createElement('script');
    v.defer = true;
    v.src = '/_vercel/insights/script.js';
    document.head.appendChild(v);
  }

  // ---------- Attribution ----------
  var store = null;
  try { store = window.sessionStorage; store.setItem('slp_t', '1'); store.removeItem('slp_t'); } catch (e) { store = null; }
  function get(k) { try { return store ? JSON.parse(store.getItem(k) || 'null') : null; } catch (e) { return null; } }
  function set(k, v) { try { if (store) store.setItem(k, JSON.stringify(v)); } catch (e) {} }

  var AI = /(^|\.)(chatgpt\.com|chat\.openai\.com|openai\.com|perplexity\.ai|gemini\.google\.com|bard\.google\.com|copilot\.microsoft\.com|claude\.ai|meta\.ai|you\.com|phind\.com)$/;
  var SEARCH = /(^|\.)(google\.[a-z.]+|bing\.com|duckduckgo\.com|yahoo\.com|ecosia\.org|search\.brave\.com|baidu\.com|yandex\.[a-z]+)$/;
  var SOCIAL = /(^|\.)(instagram\.com|facebook\.com|fb\.me|t\.co|x\.com|twitter\.com|tiktok\.com|linkedin\.com|lnkd\.in|youtube\.com|youtu\.be|pinterest\.[a-z.]+|threads\.net|snapchat\.com|reddit\.com)$/;
  var AI_UTM = /chatgpt|openai|perplexity|gemini|copilot|claude/i;
  var SOCIAL_UTM = /instagram|facebook|tiktok|youtube|linkedin|twitter|threads|snapchat|pinterest/i;

  function classify() {
    var p = new URLSearchParams(location.search);
    var utm = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content'].map(function (k) { return p.get(k) || ''; });
    var ref = document.referrer || '';
    var refHost = '';
    try { refHost = ref ? new URL(ref).hostname.replace(/^www\./, '') : ''; } catch (e) {}
    var via = (p.get('via') || '').replace(/[^a-z0-9.:=_-]/gi, '').slice(0, 80);
    var cls, detail = '';
    if (via && (refHost === 'slpmedia.pro' || /^slpmedia/.test(p.get('from') || ''))) {
      // slpmedia.pro passes along where its own visit started, so a lead an
      // AI assistant or a search sent to SLP Media still counts that way here
      detail = 'slpmedia.pro via ' + via;
      if (AI.test(via)) cls = 'ai-assistant';
      else if (SEARCH.test(via)) cls = 'search';
      else if (SOCIAL.test(via)) cls = 'social';
      else if (/^src=/.test(via)) cls = 'campaign';
      else cls = 'referral';
    } else if (utm[0]) {
      detail = utm.filter(Boolean).join(' / ');
      if (AI_UTM.test(utm[0])) cls = 'ai-assistant';
      else if (/qr|print/i.test(utm[0] + ' ' + utm[1])) cls = 'qr-card';
      else if (SOCIAL_UTM.test(utm[0]) || /social/i.test(utm[1])) cls = 'social';
      else if (/email/i.test(utm[0] + ' ' + utm[1])) cls = 'email';
      else cls = 'campaign';
    } else if (refHost && refHost.indexOf('samuellongproductions.com') === -1) {
      detail = refHost;
      if (AI.test(refHost)) cls = 'ai-assistant';
      else if (SEARCH.test(refHost)) cls = 'search';
      else if (SOCIAL.test(refHost)) cls = 'social';
      else cls = 'referral';
    } else if (/\/portfolio(-video)?(\.html)?$/.test(location.pathname) && /^#(video-)?greek$/.test(location.hash)) {
      // printed QR cards point at portfolio.html#video-greek, which forwards to portfolio-video.html#greek
      cls = 'qr-card (inferred)';
    } else {
      cls = 'direct';
    }
    return {
      cls: cls,
      detail: detail,
      landing: (location.pathname + location.search + location.hash).slice(0, 300),
      referrer: ref.slice(0, 300)
    };
  }

  var att = get('slp_att');
  if (!att) { att = classify(); set('slp_att', att); }

  var pages = get('slp_pages') || [];
  if (pages[pages.length - 1] !== location.pathname) pages.push(location.pathname);
  if (pages.length > 15) pages = pages.slice(-15);
  set('slp_pages', pages);

  function pageSlug() {
    var d = document.documentElement.getAttribute('data-landing');
    if (d) return d;
    var f = location.pathname.split('/').pop().replace(/\.html$/, '');
    return f || 'index';
  }
  function sourceLabel() { return att.cls + (att.detail ? ': ' + att.detail : ''); }

  window.slp = {
    track: track,
    source: function () { return att.cls; },
    sourceLabel: sourceLabel
  };

  // ---------- Contact form ----------
  var TYPES = { weddings: 'Weddings', wedding: 'Weddings', seniors: 'Seniors', senior: 'Seniors', greek: 'Greek Life', events: 'Events', event: 'Events', campus: 'Events', gala: 'Events', large: 'Events', commercial: 'Commercial', website: 'Website', websites: 'Website', other: 'Other' };
  // SLP Media's packages (slpmedia.pro/packages), by the ids its links carry in ?package=
  var PACKAGES = { 'small-party': 'Small party, $300', 'two-photographers': 'Two photographers, $1,450', 'full-team': 'Full team, $2,650', bigger: 'Bigger than the Full team package' };
  // Ids from before the 10/18/26 prices. An old link or cached page still counts as SLP Media, but the
  // email says it was an old package, so the quote goes by guest count, and the visitor sees no package line.
  var RETIRED = { photos: 'Old link: Photos, $500 (retired; quote by guest count)', 'photos-selfsearch': 'Old link: Photos + SelfSearch AI, $1,200 (retired; quote by guest count)' };

  function setupForm() {
    var form = document.getElementById('contactForm');
    if (!form) return;
    var params = new URLSearchParams(location.search);
    var select = form.querySelector('#project_type');
    var want = TYPES[(params.get('type') || '').toLowerCase()];
    if (select && want) select.value = want;

    var fromParam = (params.get('from') || '').replace(/[^a-z0-9-]/gi, '').slice(0, 60);
    if (fromParam) set('slp_cta', fromParam);
    var srcParam = (params.get('src') || '').replace(/[^a-z0-9-]/gi, '').slice(0, 60);
    if (!fromParam && srcParam) set('slp_cta', 'src-' + srcParam);

    function hidden(name) {
      var el = form.querySelector('input[name="' + name + '"]');
      if (!el) {
        el = document.createElement('input');
        el.type = 'hidden';
        el.name = name;
        form.appendChild(el);
      }
      return el;
    }

    // SLP Media (slpmedia.pro) books its events here. Its date check sends
    // ?date= and ?guests=, its package links send ?package=, and a visitor
    // who came from there sees the note above the form: same team, one form.
    var date = params.get('date') || params.get('event_date') || '';
    var dateInput = form.querySelector('#event_date');
    if (dateInput && /^\d{4}-\d{2}-\d{2}$/.test(date) && !dateInput.value) dateInput.value = date;
    var guests = parseInt(params.get('guests') || '', 10);
    var guestsInput = form.querySelector('#guests');
    if (guestsInput && guests > 0 && guests <= 20000 && !guestsInput.value) guestsInput.value = guests;
    var pkgKey = (params.get('package') || '').toLowerCase();
    var pkg = PACKAGES[pkgKey] || '';
    var oldPkg = RETIRED[pkgKey] || '';
    if (pkg || oldPkg) hidden('package').value = pkg || oldPkg;
    var refHost = '';
    try { refHost = document.referrer ? new URL(document.referrer).hostname.replace(/^www\./, '') : ''; } catch (e) {}
    var slpMedia = /^slpmedia/.test(fromParam) || !!(pkg || oldPkg) || refHost === 'slpmedia.pro';
    var note = document.getElementById('slp-media-note');
    if (note && slpMedia) {
      note.hidden = false;
      var line = document.getElementById('slp-media-package');
      if (line && pkg) line.textContent = 'Package you picked: ' + pkg + '. Say so in the message if you want a different one.';
      if (select && !select.value) select.value = 'Events';
    }

    function fill() {
      hidden('lead_source').value = sourceLabel();
      hidden('lead_landing_page').value = att.landing;
      hidden('lead_referrer').value = att.referrer || '(none)';
      hidden('lead_cta').value = get('slp_cta') || '(none)';
      hidden('lead_pages_viewed').value = (get('slp_pages') || []).join(' > ');
      var heard = form.querySelector('#heard_about');
      var named = heard && /chatgpt|gemini|perplexity|copilot|claude|ai assistant/i.test(heard.value) ? heard.value : '';
      if (!named && att.cls === 'ai-assistant') named = att.detail;
      hidden('assistant_named').value = named || '(none)';
      var type = select && select.value ? select.value : 'unspecified';
      var subj = form.querySelector('input[name="subject"]');
      if (subj) subj.value = 'New inquiry: ' + type + (slpMedia ? ', SLP Media' : '') + ' (via ' + att.cls + ')';
    }
    fill();

    var started = false;
    form.addEventListener('focusin', function () {
      if (started) return;
      started = true;
      track('form-start');
    });
    // Capture phase on document runs before the page's own submit handler reads the form.
    document.addEventListener('submit', function (e) { if (e.target === form) fill(); }, true);
  }

  // ---------- Clicks ----------
  document.addEventListener('click', function (e) {
    var a = e.target.closest ? e.target.closest('a[href]') : null;
    if (!a) return;
    var href = a.getAttribute('href') || '';
    var from = pageSlug();
    if (/^mailto:/i.test(href)) track('email-click', { from: from });
    else if (/instagram\.com/i.test(href)) track('outbound-instagram', { from: from });
    else if (/(^|\/)contact(\.html)?(\?|#|$)/.test(href) && !/contact$/.test(from)) {
      track('cta-contact', { from: from });
      if (href.indexOf('from=') === -1) set('slp_cta', from);
    }
  }, true);

  // ---------- Films ----------
  function setupVideos() {
    [].forEach.call(document.querySelectorAll('video[controls]'), function (v) {
      var started = false, half = false;
      function film() {
        var src = v.currentSrc || (v.querySelector('source') || {}).src || '';
        return src.split('/').pop().replace(/\.[a-z0-9]+$/i, '') || 'unknown';
      }
      v.addEventListener('play', function () {
        if (started) return;
        started = true;
        track('video-start', { film: film() });
      });
      v.addEventListener('timeupdate', function () {
        if (half || !v.duration) return;
        if (v.currentTime / v.duration >= 0.5) { half = true; track('video-50', { film: film() }); }
      });
    });
  }

  function init() {
    setupForm();
    setupVideos();
    if (document.documentElement.getAttribute('data-page') === '404') track('404', { path: location.pathname.slice(0, 200) });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
