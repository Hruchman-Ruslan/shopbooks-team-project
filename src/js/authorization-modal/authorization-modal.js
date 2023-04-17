import {
  btnsGroupForChangeForm,
  formSignUp,
  formSignIn,
  USER_DATA_KEY_STORAGE,
} from './refsForm';
import {
  onBtnReplaceForm,
  closeModalForm,
  onFormSubmitSignUp,
  onFormSubmitSignIn,
} from './form';
import { showNavigationToUser, writeUserName } from './interfaceForUser';

btnsGroupForChangeForm.addEventListener('click', onBtnReplaceForm);
closeModalForm();

formSignUp.addEventListener('submit', onFormSubmitSignUp);
formSignIn.addEventListener('submit', onFormSubmitSignIn);

let userData = localStorage.getItem(USER_DATA_KEY_STORAGE)
  ? JSON.parse(localStorage.getItem(USER_DATA_KEY_STORAGE))
  : null;
showNavigationToUser(userData);
userData && writeUserName(userData);
window.addEventListener('beforeunload', () =>
  localStorage.removeItem(USER_DATA_KEY_STORAGE)
);
