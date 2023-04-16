
const btnEl = document.querySelector('#open');

const bodyEl = document.querySelector('.menu');

const btnCloseEl = document.querySelector('#close');

const body = document.body;

const btnLogEl = document.querySelector('.menu__authenticator-button');



btnEl.addEventListener('click', toggleMenu);
btnCloseEl.addEventListener('click', toggleMenu);

function toggleMenu() {
    
    bodyEl.classList.toggle('active');
    btnCloseEl.classList.toggle('opacity');
    btnEl.classList.toggle('visible');
    body.classList.toggle('noscroll');
    
};

document.addEventListener('keydown', ({ code }) => {
    
    if (code === 'Escape') {
        bodyEl.classList.remove('active');
        btnEl.classList.remove('visible');
        btnCloseEl.classList.remove('opacity');
        body.classList.remove('noscroll');
        btnEl.removeEventListener('click', toggleMenu);
    }
})

btnLogEl.addEventListener('click', handleFormAvtorisation);
const formEl = document.querySelector('.backdrop--form');


function handleFormAvtorisation() {
    formEl.classList.remove('is-hidden');

}