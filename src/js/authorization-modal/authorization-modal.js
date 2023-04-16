import { initializeApp } from 'firebase/app';
import firebaseConfig from '../firebase/firebaseConfig';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

import { btnsGroupForChangeForm, formSignUp, formSignIn } from './refsForm';
import { onBtnReplaceForm, closeModalForm, onFormSubmit } from './form';

btnsGroupForChangeForm.addEventListener('click', onBtnReplaceForm);
closeModalForm();

formSignUp.addEventListener('submit', onFormSubmit);
