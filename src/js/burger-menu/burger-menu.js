const btnEl = document.querySelector('#open');
console.log(btnEl);
const bodyEl = document.querySelector('.menu');
console.log(bodyEl);
const btnCloseEl = document.querySelector('#close');
console.log(btnCloseEl);
const body = document.body;
console.log(body);
const btnLogEl = document.querySelector('.menu__authenticator-button');
console.log(btnLogEl);


btnEl.addEventListener('click', toggleMenu);
btnCloseEl.addEventListener('click', toggleMenu);

function toggleMenu() {
    
    bodyEl.classList.toggle('active');
    btnCloseEl.classList.toggle('opacity');
    btnEl.classList.toggle('visible');
    body.classList.toggle('noscroll');
    
};

document.addEventListener('keydown', ({ code }) => {
    console.log(code);
    if (code === 'Escape') {
        bodyEl.classList.remove('active');
        btnEl.classList.remove('visible');
        btnCloseEl.classList.remove('opacity');
        body.classList.remove('noscroll');
        btnEl.removeEventListener('click', toggleMenu);
    }
})

// btnLogEl.addEventListener('click', handleFormAvtorisation);
// const formEl = document.querySelector('.backdrop--form');
// console.log(formEl);

// function handleFormAvtorisation() {
//     formEl.classList.remove('is-hidden');
// }