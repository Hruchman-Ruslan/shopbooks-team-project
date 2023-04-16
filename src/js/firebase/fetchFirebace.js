import { initializeApp } from 'firebase/app';
import firebaseConfig from './firebaseConfig';

const app = initializeApp(firebaseConfig);

// Реєстрація нового користувача
export async function createNewUser(userData) {
  const { mail, password, name } = userData;
  let user = null;

  const newUser = {
    email: mail,
    password,
    returnSecureToken: true,
  };

  const url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${app._options.apiKey}`;
  const optionsForRegister = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
    },
    body: JSON.stringify(newUser),
  };

  const response = await fetch(url, optionsForRegister);
  const registerUser = await response.json();

  await writeNameUser(name, registerUser.idToken).then(res => {
    user = res;
  });
  return user;
}
export async function writeNameUser(name, idToken) {
  const userName = {
    idToken,
    displayName: name,
    returnSecureToken: true,
  };

  const url = `https://identitytoolkit.googleapis.com/v1/accounts:update?key=${app._options.apiKey}`;
  const optionsForName = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
    },
    body: JSON.stringify(userName),
  };

  const response = await fetch(url, optionsForName);
  const user = await response.json();

  return user;
}
