import { onEscCloseForm } from '../authorization-modal/form';

const btnEl = document.querySelector('#open');

const bodyEl = document.querySelector('.menu');

const btnCloseEl = document.querySelector('#close');

const body = document.body;

const btnLogEl = document.querySelector('.menu__authenticator-button');

btnEl.addEventListener('click', toggleMenu);
btnCloseEl.addEventListener('click', toggleMenu);

function toggleMenu() {
  bodyEl.classList.toggle('active');
  btnCloseEl.classList.toggle('hidden');
  btnEl.classList.toggle('close');
  body.classList.toggle('noscroll');
  body.classList.add('modal-open');
}

document.addEventListener('keydown', ({ code }) => {
  if (code === 'Escape') {
    bodyEl.classList.remove('active');
    btnEl.classList.remove('close');
    btnCloseEl.classList.remove('hidden');
    body.classList.remove('noscroll');
  }
});

btnLogEl.addEventListener('click', handleFormAvtorisation);
const formEl = document.querySelector('.backdrop--form');

function handleFormAvtorisation() {
  formEl.classList.remove('is-hidden');
  body.classList.add('modal-open');
  bodyEl.classList.remove('active');
  btnCloseEl.classList.remove('hidden');
  btnEl.classList.remove('close');

  document.addEventListener('keydown', onEscCloseForm);
}
