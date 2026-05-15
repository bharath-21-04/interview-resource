/* search.js — Spotlight search overlay
   Cmd/Ctrl+K to open · Arrow keys to navigate · Enter to go · Esc to close */

(function () {
  // ── Build DOM ───────────────────────────────────────────────────────────
  const overlay = document.createElement('div');
  overlay.id = 'spotlight';
  overlay.className = 'spotlight-overlay';
  overlay.style.display = 'none';
  overlay.setAttribute('role', 'dialog');
  overlay.setAttribute('aria-modal', 'true');
  overlay.setAttribute('aria-label', 'Search');

  overlay.innerHTML = `
    <div class="spotlight-modal" id="spotlight-modal">
      <div class="spotlight-header">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
          <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
        </svg>
        <input id="spotlight-input" class="spotlight-input" type="text"
               placeholder="Search topics, problems, concepts..." autocomplete="off" spellcheck="false">
        <button class="spotlight-esc" onclick="window._spotlightClose()">Esc</button>
      </div>
      <div id="spotlight-results" class="spotlight-results" role="listbox"></div>
      <div class="spotlight-footer">
        <span><kbd>&uarr;</kbd><kbd>&darr;</kbd> navigate</span>
        <span><kbd>&#9166;</kbd> open</span>
        <span><kbd>Esc</kbd> close</span>
      </div>
    </div>`;

  document.body.appendChild(overlay);

  const input   = document.getElementById('spotlight-input');
  const results = document.getElementById('spotlight-results');
  let activeIdx = -1;
  let filtered  = [];

  // ── Open / Close ────────────────────────────────────────────────────────
  window._spotlightOpen = function () {
    overlay.style.display = 'flex';
    input.value = '';
    activeIdx = -1;
    renderAll();
    requestAnimationFrame(() => input.focus());
    document.body.style.overflow = 'hidden';
  };

  window._spotlightClose = function () {
    overlay.style.display = 'none';
    document.body.style.overflow = '';
    input.blur();
  };

  // Close on backdrop click
  overlay.addEventListener('click', function (e) {
    if (e.target === overlay) window._spotlightClose();
  });

  // ── Keyboard shortcuts ──────────────────────────────────────────────────
  document.addEventListener('keydown', function (e) {
    const isMac = navigator.platform.toUpperCase().includes('MAC');
    const mod   = isMac ? e.metaKey : e.ctrlKey;

    // Cmd/Ctrl+K — toggle
    if (mod && e.key === 'k') {
      e.preventDefault();
      overlay.style.display === 'none' ? window._spotlightOpen() : window._spotlightClose();
      return;
    }

    // Only handle the rest if overlay is open
    if (overlay.style.display === 'none') return;

    if (e.key === 'Escape') { window._spotlightClose(); return; }

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      activeIdx = Math.min(activeIdx + 1, filtered.length - 1);
      updateActive();
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      activeIdx = Math.max(activeIdx - 1, 0);
      updateActive();
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (activeIdx >= 0 && filtered[activeIdx]) navigate(filtered[activeIdx]);
    }
  });

  // ── Search logic ────────────────────────────────────────────────────────
  input.addEventListener('input', function () {
    activeIdx = -1;
    renderSearch(this.value.trim());
  });

  function normalize(s) { return s.toLowerCase().replace(/[^a-z0-9\s]/g, ''); }

  function score(item, q) {
    const t = normalize(item.title);
    const s = normalize(item.sub);
    const nq = normalize(q);
    if (t.startsWith(nq)) return 100;
    if (t.includes(nq)) return 80;
    if (s.includes(nq)) return 60;
    // word match
    const words = nq.split(/\s+/);
    const hits = words.filter(w => t.includes(w) || s.includes(w)).length;
    return hits > 0 ? (hits / words.length) * 40 : 0;
  }

  function highlight(text, query) {
    if (!query) return escHtml(text);
    const re = new RegExp('(' + escRe(query) + ')', 'gi');
    return escHtml(text).replace(re, '<mark>$1</mark>');
  }

  function escHtml(s) { return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }
  function escRe(s)   { return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); }

  function renderAll() {
    filtered = typeof SEARCH_INDEX !== 'undefined' ? SEARCH_INDEX : [];
    const groups = groupBy(filtered);
    let html = '';
    for (const [g, items] of Object.entries(groups)) {
      html += `<div class="spotlight-group-label">${escHtml(g)}</div>`;
      items.forEach((item, i) => {
        html += renderItem(item, i, '');
      });
    }
    results.innerHTML = html || '<div class="spotlight-empty">No results</div>';
    rebind();
  }

  function renderSearch(q) {
    if (!q) { renderAll(); return; }
    if (typeof SEARCH_INDEX === 'undefined') { results.innerHTML = '<div class="spotlight-empty">Search index not loaded</div>'; return; }
    filtered = SEARCH_INDEX
      .map(item => ({ item, s: score(item, q) }))
      .filter(x => x.s > 0)
      .sort((a, b) => b.s - a.s)
      .map(x => x.item);

    if (!filtered.length) {
      results.innerHTML = `<div class="spotlight-empty">No results for "<strong>${escHtml(q)}</strong>"</div>`;
      return;
    }

    let html = '';
    filtered.forEach((item, i) => { html += renderItem(item, i, q); });
    results.innerHTML = html;
    rebind();
  }

  function renderItem(item, idx, q) {
    const title = q ? highlight(item.title, q) : escHtml(item.title);
    const sub   = q ? highlight(item.sub, q) : escHtml(item.sub);
    return `<a class="spotlight-item" data-idx="${idx}"
               href="${item.page}${item.anchor}"
               role="option" aria-selected="false">
      <div class="spotlight-item-icon">${escHtml(item.icon)}</div>
      <div class="spotlight-item-body">
        <div class="spotlight-item-title">${title}</div>
        <div class="spotlight-item-sub">${item.group} &middot; ${sub}</div>
      </div>
    </a>`;
  }

  function groupBy(items) {
    const m = {};
    items.forEach(item => {
      if (!m[item.group]) m[item.group] = [];
      m[item.group].push(item);
    });
    return m;
  }

  function rebind() {
    results.querySelectorAll('.spotlight-item').forEach(el => {
      el.addEventListener('mouseenter', () => {
        activeIdx = +el.dataset.idx;
        updateActive();
      });
    });
  }

  function updateActive() {
    results.querySelectorAll('.spotlight-item').forEach(el => {
      el.classList.toggle('sp-active', +el.dataset.idx === activeIdx);
    });
    const active = results.querySelector('.sp-active');
    if (active) active.scrollIntoView({ block: 'nearest' });
  }

  function navigate(item) {
    window._spotlightClose();
    window.location.href = item.page + item.anchor;
  }

  // ── Wire up topbar search btn if present ────────────────────────────────
  document.addEventListener('DOMContentLoaded', function () {
    const btn = document.querySelector('.topbar-search-btn');
    if (btn) btn.addEventListener('click', window._spotlightOpen);
  });

})();
