import { formsForRegistration, bodyEl, backdropEl, btnClose } from './refsForm';

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

const onBackdropClick = e => {
  if (e.currentTarget !== e.target) {
    return;
  }
  onBtnClose();
};
const onBtnClose = () => {
  bodyEl.removeAttribute('class');
  backdropEl.classList.add('is-hidden');
};

export function closeModalForm() {
  backdropEl.addEventListener('click', onBackdropClick);
  btnClose.addEventListener('click', onBtnClose);
}
