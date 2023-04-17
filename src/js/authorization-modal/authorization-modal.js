import { initializeApp } from 'firebase/app';
import firebaseConfig from '../firebase/firebaseConfig';

import { btnsGroupForChangeForm, formSignUp, formSignIn } from './refsForm';
import {
  onBtnReplaceForm,
  closeModalForm,
  onFormSubmitSignUp,
  onFormSubmitSignIn,
} from './form';

btnsGroupForChangeForm.addEventListener('click', onBtnReplaceForm);
closeModalForm();

formSignUp.addEventListener('submit', onFormSubmitSignUp);
formSignIn.addEventListener('submit', onFormSubmitSignIn);
