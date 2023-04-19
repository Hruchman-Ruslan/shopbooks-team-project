import { containerEl } from '../category/category';
export const spinnerWrap = document.querySelector('.spinner__wrap');

// function showSpinner() {
//   spinnerWrap.style.display = 'flex';
// }

window.addEventListener('load', hideSpinner);
containerEl.addEventListener('click', activeSpinner);

function hideSpinner() {
  setTimeout(() => {
    spinnerWrap.style.display = 'none';
  }, 2500);
}

function activeSpinner() {
  spinnerWrap.style.display = 'flex';
  setTimeout(() => {
    spinnerWrap.style.display = 'none';
  }, 1500);
}

//document.addEventListener('DOMContentLoaded', showSpinner);

// function handleWrapLoad() {
// spinnerWrap.classList.add('hide');
// setTimeout(() => {
// spinnerWrap.classList.add('hide');
// spinnerWrap.remove();
// }, 2500);
// }
// export default window.onload = function () {
//   let spinnerWrap = document.querySelector('.spinner__wrap');
//   spinnerWrap.style.display = 'none';
// };
