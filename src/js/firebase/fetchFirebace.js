import { initializeApp } from 'firebase/app';
import firebaseConfig from './firebaseConfig';
import axios from 'axios';

const app = initializeApp(firebaseConfig);

// Реєстрація нового користувача
export async function createNewUser(userData) {
  const { mail, password, name } = userData;

  const newUser = {
    email: mail,
    password,
    returnSecureToken: true,
  };

  const url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${app._options.apiKey}`;
  const response = await axios.post(url, newUser);

  await writeNameUser(response.data.idToken, name);
  return 'Registration was successful, you can log in';
}
export async function writeNameUser(idToken, name) {
  const userName = {
    idToken,
    displayName: name,
    returnSecureToken: true,
  };

  const url = `https://identitytoolkit.googleapis.com/v1/accounts:update?key=${app._options.apiKey}`;

  const response = await axios.post(url, userName);
}

// Зайти до профілю
