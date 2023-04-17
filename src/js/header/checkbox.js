window.changeTheme = function (isChecked) {
  if (isChecked) {
    document.body.setAttribute('dark', '');
    localStorage.setItem('theme', 'dark');
  } else {
    document.body.removeAttribute('dark');
    localStorage.setItem('theme', 'light');
  }
};

function applySavedTheme() {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.setAttribute('dark', '');
    document.querySelector('#highload1').checked = true;
  } else {
    document.body.removeAttribute('dark');
    document.querySelector('#highload1').checked = false;
  }
}

applySavedTheme();
