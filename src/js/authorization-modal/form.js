import { initializeApp } from 'firebase/app';
import firebaseConfig from '../firebase/firebaseConfig';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

import {
  formsForRegistration,
  bodyEl,
  backdropEl,
  btnClose,
  formSignUp,
  formSignIn,
} from './refsForm';
import { createNewUser } from '../firebase/fetchFirebace';

const app = initializeApp(firebaseConfig);
const auth = getAuth();

const formData = {};

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
export const onFormSubmit = e => {
  e.preventDefault();

  if (!formData.name || !formData.mail || !formData.password) {
    alert('fake');
    return;
  }

  createNewUser(formData).then(console.log);

  // createUserWithEmailAndPassword(auth, formData.mail, formData.password)
  //   .then(userCredential => {
  //     // Signed in
  //     const user = userCredential.user;
  //     console.log(user);
  //     // ...
  //   })
  //   .catch(error => {
  //     const errorCode = error.code;
  //     const errorMessage = error.message;
  //     // ..
  //   });

  e.currentTarget.reset();
};

const onFormData = e => {
  formData[e.target.name] = e.target.value.trim();
};

formSignUp.addEventListener('input', onFormData);
