export const spinnerWrap = document.querySelector('.spinner__wrap');

window.addEventListener('load', handleWrapLoad);

function handleWrapLoad(e) {
  spinnerWrap.classList.add('hide');
  setTimeout(() => {
    spinnerWrap.remove();
  }, 600);
}
