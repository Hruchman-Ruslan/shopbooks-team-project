import {
  btnsGroupForChangeForm,
  formSignUp,
  formSignIn,
  formChangeFoto,
  USER_DATA_KEY_STORAGE,
  btnChangeFoto,
} from './refsForm';
import {
  onBtnReplaceForm,
  closeModalForm,
  onFormSubmitSignUp,
  onFormSubmitSignIn,
  onFormSubmitChangeFoto,
} from './form';
import { showNavigationToUser, writeUserName } from './interfaceForUser';
import { handleFormAvtorisation } from '../header/checkbox';

btnsGroupForChangeForm.addEventListener('click', onBtnReplaceForm);
closeModalForm();

formSignUp.addEventListener('submit', onFormSubmitSignUp);
formSignIn.addEventListener('submit', onFormSubmitSignIn);
formChangeFoto.addEventListener('submit', onFormSubmitChangeFoto);

let userData = localStorage.getItem(USER_DATA_KEY_STORAGE)
  ? JSON.parse(localStorage.getItem(USER_DATA_KEY_STORAGE))
  : null;
showNavigationToUser(userData);
userData && writeUserName(userData);
// window.addEventListener('beforeunload', e => {
//   localStorage.removeItem(USER_DATA_KEY_STORAGE);
// });

btnChangeFoto.addEventListener('click', handleFormAvtorisation);
