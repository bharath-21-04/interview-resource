/* main.js — shared interactive behaviour for all Interview Prep pages */

/* ── Problem-card accordion ─────────────────────────────────────────────── */
function toggle(header) {
  header.classList.toggle('open');
  const body = header.nextElementSibling;
  body.classList.toggle('open');
  const icon = header.querySelector('.toggle-icon');
  icon.textContent = body.classList.contains('open') ? '▼' : '▶';
}

/* ── Interview-question accordion ───────────────────────────────────────── */
function toggleIQ(header) {
  const body = header.nextElementSibling;
  body.classList.toggle('open');
  const icon = header.querySelector('.toggle-icon');
  icon.textContent = body.classList.contains('open') ? '▼' : '▶';
}

/* ── Tab switcher ────────────────────────────────────────────────────────── */
function switchTab(btn) {
  const tabs = btn.parentElement;
  const btns = tabs.querySelectorAll('.tab-btn');
  const idx  = Array.from(btns).indexOf(btn);
  btns.forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  btn.closest('.problem-card-body').querySelectorAll('.tab-pane')
     .forEach((p, i) => p.classList.toggle('active', i === idx));
  if (typeof Prism !== 'undefined') Prism.highlightAll();
}

/* ── Copy buttons on all <pre> blocks ───────────────────────────────────── */
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('pre').forEach(function (pre) {
    const btn = document.createElement('button');
    btn.className   = 'copy-btn';
    btn.textContent = 'Copy';
    btn.onclick = function () {
      const text = pre.querySelector('code') ? pre.querySelector('code').textContent : pre.textContent;
      navigator.clipboard.writeText(text).then(function () {
        btn.textContent = 'Copied!';
        setTimeout(function () { btn.textContent = 'Copy'; }, 1500);
      });
    };
    pre.style.position = 'relative';
    pre.appendChild(btn);
  });

  /* ── Generic problem-card search (looks for [id$="-search"] input) ─── */
  const searchInput = document.querySelector('input[id$="-search"]');
  const noResults   = document.getElementById('no-results');
  if (searchInput) {
    searchInput.addEventListener('input', function () {
      const q     = this.value.toLowerCase();
      const cards = document.querySelectorAll('.problem-card');
      let visible = 0;
      cards.forEach(function (card) {
        const text = card.textContent.toLowerCase();
        const tags = (card.dataset.tags || '');
        const show = !q || text.includes(q) || tags.includes(q);
        card.style.display = show ? '' : 'none';
        if (show) visible++;
      });
      if (noResults) noResults.style.display = visible === 0 ? '' : 'none';
    });
  }
});
