import { formsForRegistration } from './refsForm';

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
