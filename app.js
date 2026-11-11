'use strict';
const config = window.HAMLET_CONFIG;
const cta = document.querySelector('#cta');
const ctaNote = document.querySelector('#ctaNote');
const privateNote = document.querySelector('#privateNote');
let rating = 0;
const ratings = ['Niet tevreden', 'Weinig tevreden', 'Matig tevreden', 'Tevreden', 'Heel tevreden'];
const path = 'M12 3l2.8 5.7 6.3.9-4.55 4.43 1.08 6.26L12 17.34l-5.63 2.95 1.08-6.26L2.9 9.6l6.3-.9L12 3z';
for (let i = 1; i <= 5; i++) {
  const label = document.createElement('label');
  label.className = 'star-option';
  // Safe: only the loop index and literal strings are interpolated, never user input.
  label.innerHTML = `<input type="radio" name="rating" value="${i}" aria-label="${i} ${i === 1 ? 'ster' : 'sterren'}: ${ratings[i - 1]}"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="${path}"/></svg>`;
  label.querySelector('input').addEventListener('change', () => {
    rating = i;
    document.querySelectorAll('.star-option').forEach((el, index) => el.classList.toggle('selected', index < i));
    document.querySelector('#ratingText').textContent = `${i}/5 — ${ratings[i - 1]}`;
    updateCta();
  });
  document.querySelector('#stars').append(label);
}
function getReviewUrl() {
  const value = config.reviewUrl;
  if (!value) return null;
  try {
    const url = new URL(value);
    const host = url.hostname;
    return url.protocol === 'https:' && (/^(?:[a-z0-9-]+\.)*google\.com$/.test(host) || host === 'g.page' || host === 'maps.app.goo.gl') ? url.href : null;
  } catch { return null; }
}
function updateCta() {
  if (!rating) {
    cta.hidden = true;
    privateNote.hidden = true;
    ctaNote.hidden = false;
    ctaNote.textContent = 'Kies je sterren om verder te gaan.';
    return;
  }
  // Same button and same Google destination for every score; the private message is an optional extra.
  const url = getReviewUrl();
  cta.hidden = !url;
  ctaNote.hidden = Boolean(url);
  ctaNote.textContent = url ? '' : 'De link werkt even niet. Probeer het later opnieuw.';
  if (url) cta.setAttribute('href', url);
  privateNote.hidden = !config.email;
  document.querySelector('#privateLink').setAttribute('href', 'prive-bericht.html?note=' + rating);
}
updateCta();
