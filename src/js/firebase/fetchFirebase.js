import { initializeApp } from 'firebase/app';
import firebaseConfig from './firebaseConfig';
import axios from 'axios';

const app = initializeApp(firebaseConfig);

// Реєстрація нового користувача
export async function postFirebase(userData, queryParameter) {
  const { mail, password } = userData;

  const newUser = {
    email: mail,
    password,
    returnSecureToken: true,
  };

  const url = `https://identitytoolkit.googleapis.com/v1/accounts:${queryParameter}?key=${app._options.apiKey}`;
  const response = await axios.post(url, newUser);

  return response.data;
}
export async function writeNameUser(idToken, name) {
  const userName = {
    idToken,
    displayName: name,
    returnSecureToken: true,
  };

  const url = `https://identitytoolkit.googleapis.com/v1/accounts:update?key=${app._options.apiKey}`;

  await axios.post(url, userName);
  return 'Registration was successful, you can log in';
}

export async function writeFotoUser(idToken, photoUrl) {
  const linkForUserFoto = {
    idToken,
    photoUrl,
    returnSecureToken: true,
  };

  const url = `https://identitytoolkit.googleapis.com/v1/accounts:update?key=${app._options.apiKey}`;

  const response = await axios.post(url, linkForUserFoto);
  return response.data;
}
