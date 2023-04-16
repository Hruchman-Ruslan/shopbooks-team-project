import { initializeApp } from 'firebase/app';
import firebaseConfig from '../firebase/firebaseConfig';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import {
  btnsGroupForChangeForm,
  formsForRegistration,
  bodyEl,
  backdropEl,
  btnClose,
  formSignUp,
  formSignIn,
} from './refsForm';
import { createNewUser } from '../firebase/fetchFirebace';
import { optionsNotiflix } from './libraryOptions';

const app = initializeApp(firebaseConfig);

const formData = {};
const QUERY_PARAMETER_FOR_CREATE_USER = 'signUp';
const QUERY_PARAMETER_FOR_SIGN_IN_USER = 'signInWithPassword';

export const onBtnReplaceForm = e => {
  if (e.currentTarget === e.target) {
    return;
  }

  changeElem(e.currentTarget);
  changeElem(formsForRegistration);
};

function changeElem(arrEl) {
  const childrenBtns = [...arrEl.children];
  childrenBtns.forEach(el => {
    if (!el.dataset.sign) {
      el.dataset.sign = 'active';
    } else {
      el.dataset.sign = '';
    }
  });
}

// Для закриття форми реєстрації
const onBackdropClick = e => {
  if (e.currentTarget !== e.target) {
    return;
  }
  onBtnClose();
};
const onBtnClose = () => {
  bodyEl.removeAttribute('class');
  backdropEl.classList.add('is-hidden');
};

export function closeModalForm() {
  backdropEl.addEventListener('click', onBackdropClick);
  btnClose.addEventListener('click', onBtnClose);
}

// Сабміт форм
export const onFormSubmitSignUp = e => {
  e.preventDefault();

  if (!formData.name || !formData.password) {
    Notify.warning(
      '💩 DO NOT play with spaces, all fields must be filled (╬▔皿▔)╯',
      optionsNotiflix
    );
    return;
  }

  createNewUser(formData)
    .then(res => {
      Notify.success(res, optionsNotiflix);
      changeElem(btnsGroupForChangeForm);
      changeElem(formsForRegistration);
    })
    .catch(error => {
      const message = JSON.parse(error.request.response);
      console.log(message.error.message);
      Notify.failure(message.error.message, optionsNotiflix);
    });

  e.currentTarget.reset();
};

const onFormData = e => {
  formData[e.target.name] = e.target.value.trim();
};
formSignUp.addEventListener('input', onFormData);
formSignIn.addEventListener('input', onFormData);

// Sign in
export const onFormSubmitSignIn = e => {
  e.preventDefault();

  if (!formData.password) {
    Notify.warning(
      '💩 DO NOT play with spaces, all fields must be filled (╬▔皿▔)╯',
      optionsNotiflix
    );
    return;
  }

  e.currentTarget.reset();
};
