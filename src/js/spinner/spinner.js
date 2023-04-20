import { containerEl, btnAllCategory } from '../category/category';
import { formSignUp, formSignIn } from '../authorization-modal/refsForm';

export const spinnerWrap = document.querySelector('.spinner__wrap');

// function showSpinner() {
//   spinnerWrap.style.display = 'flex';
// }

window.addEventListener('load', hideSpinner);
btnAllCategory.addEventListener('click', slawSpinner);
containerEl.addEventListener('click', activeSpinner);
formSignUp.addEventListener('submit', activeSpinner);
formSignIn.addEventListener('submit', activeSpinner);

function hideSpinner() {
  setTimeout(() => {
    spinnerWrap.style.display = 'none';
  }, 2500);
}

function activeSpinner() {
  spinnerWrap.style.display = 'flex';
  setTimeout(() => {
    spinnerWrap.style.display = 'none';
  }, 700);
}

function slawSpinner() {
  spinnerWrap.style.display = 'flex';
  setTimeout(() => {
    spinnerWrap.style.display = 'none';
  }, 2500);
}
