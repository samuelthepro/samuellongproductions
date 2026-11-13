// Senior booking form: senior-intake.html and the Book section on seniors.html.
// Answers go to the contact form's Web3Forms inbox with the same lead_* fields.
// Each form sets data-label (subject), data-where (analytics), data-status (status
// element id) and, optionally, data-cta (lead_cta when no ?from= or ?src= is in the URL).
(function () {
  function init(form) {
    var status = document.getElementById(form.getAttribute('data-status'));
    var other = form.querySelector('.intake-other');
    var label = form.getAttribute('data-label') || 'Seniors';
    var where = form.getAttribute('data-where') || 'intake';
    var params = new URLSearchParams(location.search);
    var src = params.get('src') ? 'src-' + params.get('src') : '';
    var tag = (params.get('from') || src).replace(/[^a-z0-9-]/gi, '').slice(0, 60);

    function track(name, data) { if (window.slp) window.slp.track(name, data); }
    function picked(name) {
      var el = form.querySelector('input[name="' + name + '"]:checked');
      return el ? el.value : '';
    }

    // "If other, what school?" only shows once Other is picked
    function update() { if (other) other.hidden = picked('School') !== 'Other'; }
    form.addEventListener('change', update);
    update();

    // One entry per question, in page order; a hidden follow-up is left out
    function answers() {
      var out = {}, seen = {};
      [].forEach.call(form.elements, function (el) {
        var name = el.name;
        if (!name || seen[name] || el.type === 'submit') return;
        if (name === 'botcheck') { seen[name] = true; if (el.checked) out.botcheck = 'on'; return; }
        if (el.type !== 'hidden' && el.closest('[hidden]')) return;
        seen[name] = true;
        var v = el.type === 'radio' ? picked(name) : (el.value || '').trim();
        if (v) out[name] = v;
      });
      return out;
    }

    var started = false;
    form.addEventListener('focusin', function () {
      if (started) return;
      started = true;
      track('intake-start', { form: where });
    });

    // Error text is built from DOM nodes so nothing from the API response is parsed as HTML
    function showEmailFallback(lead) {
      var link = document.createElement('a');
      link.href = 'mailto:samuel@samuellongproductions.com';
      link.style.color = '#fff';
      link.textContent = 'samuel@samuellongproductions.com';
      status.style.color = '#ffb3a0';
      status.textContent = '';
      status.appendChild(document.createTextNode(lead + ' Please email '));
      status.appendChild(link);
      status.appendChild(document.createTextNode(' or text (769) 231-7878 instead.'));
    }

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var btn = form.querySelector('button[type="submit"]');
      var data = answers();
      // Same attribution fields as the contact form (where the visitor came from)
      var lead = window.slp && window.slp.lead ? window.slp.lead() : {};
      var cta = tag || form.getAttribute('data-cta');
      if (cta) lead.lead_cta = cta;
      Object.keys(lead).forEach(function (k) { data[k] = lead[k]; });
      var school = data['School'] === 'Other' ? (data['Other school'] || 'Other') : data['School'];
      var details = [data['Session type'], school].filter(Boolean);
      details.push('via ' + (window.slp ? window.slp.source() : 'unknown'));
      data.subject = 'New inquiry: ' + label + ' (' + details.join(', ') + ')';
      status.style.color = 'var(--muted)';
      status.textContent = 'Sending…';
      btn.disabled = true; btn.style.opacity = '.6';
      fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(data)
      })
      .then(function (res) { return res.json(); })
      .then(function (json) {
        if (json.success) {
          track('intake-sent', { form: where, session: data['Session type'] || 'unspecified' });
          form.style.display = 'none';
          status.style.color = 'var(--text)';
          status.innerHTML = "<strong>Thank you. Got it.</strong>I'll be in touch about your senior session, usually within a day.";
          status.scrollIntoView({ behavior: 'smooth', block: 'center' });
        } else {
          showEmailFallback(String(json.message || 'Something went wrong').replace(/[.\s]+$/, '') + '.');
          btn.disabled = false; btn.style.opacity = '1';
        }
      })
      .catch(function () {
        showEmailFallback('Network error.');
        btn.disabled = false; btn.style.opacity = '1';
      });
    });
  }

  function start() { [].forEach.call(document.querySelectorAll('form[data-intake]'), init); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start);
  else start();
})();
