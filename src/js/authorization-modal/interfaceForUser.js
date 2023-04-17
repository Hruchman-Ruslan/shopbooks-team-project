import {
  reversEntrance,
  reversExit,
  userDisplayName,
  btnsLogOut,
  USER_DATA_KEY_STORAGE,
} from './refsForm';

export function showNavigationToUser(userData) {
  if (userData) {
    reversEntrance.forEach(el => {
      el.classList.remove('js-hidden');
    });
    reversExit.forEach(el => {
      el.classList.add('js-hidden');
    });
  } else {
    reversEntrance.forEach(el => {
      el.classList.add('js-hidden');
    });
    reversExit.forEach(el => {
      el.classList.remove('js-hidden');
    });
  }
}

export function writeUserName(userData) {
  userDisplayName.forEach(el => {
    el.textContent = userData.displayName;
  });
}

const onBtnLogOut = () => {
  localStorage.removeItem(USER_DATA_KEY_STORAGE);
  showNavigationToUser(false);
};

btnsLogOut.forEach(el => {
  el.addEventListener('click', onBtnLogOut);
});
