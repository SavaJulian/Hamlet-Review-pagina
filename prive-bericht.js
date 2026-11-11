'use strict';
const config = window.HAMLET_CONFIG;
const ratings = ['Niet tevreden', 'Weinig tevreden', 'Matig tevreden', 'Tevreden', 'Heel tevreden'];
const params = new URLSearchParams(location.search);
const parsedNote = Number.parseInt(params.get('note'), 10);
const note = Number.isInteger(parsedNote) && parsedNote >= 1 && parsedNote <= 5 ? parsedNote : 0;
document.querySelector('#context').textContent = note ? `Jouw score: ${note}/5 — ${ratings[note - 1]}` : '';
document.querySelector('#context').hidden = !note;
const form = document.querySelector('#form');
const email = document.querySelector('#email');
const name = document.querySelector('#name');
const comment = document.querySelector('#comment');
form.addEventListener('submit', event => {
  event.preventDefault();
  if (!comment.value.trim()) { comment.setCustomValidity('Schrijf even wat je wilt vertellen.'); comment.reportValidity(); return; }
  comment.setCustomValidity('');
  const visitorName = name.value.trim();
  const visitorEmail = email.value.trim();
  const subject = 'Bericht van een leerling — Hamlet Gitaarles';
  const body = `Dag Hamlet,\n\nScore: ${note ? note + '/5' : 'Niet ingevuld'}\nNaam: ${visitorName || 'Niet ingevuld'}\nE-mail: ${visitorEmail}\n\n${comment.value.trim()}\n\nGroetjes${visitorName ? ',\n' + visitorName : ','}`;
  const link = document.querySelector('#mailtoLink');
  link.href = `mailto:${config.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  link.click();
  document.querySelector('#mailStatus').textContent = 'Je e-mail staat klaar. Verstuur hem vanuit je mailapp. Opent die niet? Mail dan naar ' + config.email + '.';
});
comment.addEventListener('input', () => comment.setCustomValidity(''));
