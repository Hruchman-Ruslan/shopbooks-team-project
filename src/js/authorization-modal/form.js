import { initializeApp } from 'firebase/app';
import firebaseConfig from '../firebase/firebaseConfig';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import {
  USER_DATA_KEY_STORAGE,
  btnsGroupForChangeForm,
  formsForRegistration,
  bodyEl,
  backdropEl,
  btnsClose,
  formSignUp,
  formSignIn,
  formChangeFoto,
  btnForModal,
} from './refsForm';
import {
  postFirebase,
  writeNameUser,
  writeFotoUser,
} from '../firebase/fetchFirebase';
import { optionsNotiflix } from './libraryOptions';
import {
  showNavigationToUser,
  writeUserName,
  changeUserFoto,
} from './interfaceForUser';

const app = initializeApp(firebaseConfig);

const QUERY_PARAMETER_FOR_CREATE_USER = 'signUp';
const QUERY_PARAMETER_FOR_SIGN_IN_USER = 'signInWithPassword';
let formData = {};

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

// To close the registration form
export const onEscCloseForm = ({ code }) => {
  if (code === 'Escape') {
    onBtnClose();
  }
};
const onBackdropClick = e => {
  if (e.currentTarget !== e.target) {
    return;
  }
  onBtnClose();
};
const onBtnClose = () => {
  bodyEl.removeAttribute('class');
  backdropEl.classList.add('is-hidden');
  document.removeEventListener('keydown', onEscCloseForm);
};

export function closeModalForm() {
  backdropEl.addEventListener('click', onBackdropClick);
  btnsClose.forEach(el => el.addEventListener('click', onBtnClose));
}

// submit for forms - sign...
export const onFormSubmitSignUp = e => {
  e.preventDefault();

  if (!formData.name || !formData.password) {
    Notify.warning(
      '💩 DO NOT play with spaces, all fields must be filled (╬▔皿▔)╯',
      optionsNotiflix
    );
    e.currentTarget.reset();
    return;
  }

  postFirebase(formData, QUERY_PARAMETER_FOR_CREATE_USER)
    .then(res => {
      writeNameUser(res.idToken, formData.name);
    })
    .then(res => {
      Notify.success(res, optionsNotiflix);
      changeElem(btnsGroupForChangeForm);
      changeElem(formsForRegistration);
    })
    .catch(error => {
      const message = JSON.parse(error.request.response);
      Notify.failure(message.error.message, optionsNotiflix);
    })
    .finally(() => {
      formData = {};
    });
  e.currentTarget.reset();
};

const onFormData = e => {
  formData[e.target.name] = e.target.value.trim();
};
formSignUp.addEventListener('input', onFormData);
formSignIn.addEventListener('input', onFormData);
formChangeFoto.addEventListener('input', onFormData);

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

  postFirebase(formData, QUERY_PARAMETER_FOR_SIGN_IN_USER)
    .then(res => {
      Notify.success(`CONGRATULATIONS, ${res.displayName}!`, optionsNotiflix);
      localStorage.setItem(USER_DATA_KEY_STORAGE, JSON.stringify(res));
      writeUserName(res);
      btnForModal.removeAttribute('disabled');

      setTimeout(onBtnClose, 1500);
      setTimeout(() => showNavigationToUser(res), 1500);
    })
    .catch(error => {
      const message = JSON.parse(error.request.response);
      Notify.failure(message.error.message, optionsNotiflix);
    })
    .finally(() => {
      formData = {};
    });

  e.currentTarget.reset();
};

// Change user foto
export const onFormSubmitChangeFoto = e => {
  e.preventDefault();

  const userData = JSON.parse(localStorage.getItem(USER_DATA_KEY_STORAGE));

  writeFotoUser(userData.idToken, formData.link)
    .then(res => {
      Notify.success(
        `${res.displayName} to see your new profile picture: log out and log back into your profile.`,
        optionsNotiflix
      );
      setTimeout(onBtnClose, 1500);
    })
    .catch(error => {
      Notify.failure(
        `${userData.displayName} needs to enter his profile again.`,
        optionsNotiflix
      );
    })
    .finally(() => {
      formData = {};
    });

  e.currentTarget.reset();
};
