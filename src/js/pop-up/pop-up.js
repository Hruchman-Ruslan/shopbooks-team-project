import NewsApiBooksService from '../api-service/api-service';

export default function renderModal(id) {
  const api = new NewsApiBooksService();
  const refs = {
    bodyRef: document.querySelector('body'),
    modalRef: document.querySelector('.modal'),
    backdropRef: document.querySelector('.backdrop'),

    book_nameRef: document.querySelector('.modal_book_name'),
    authorRef: document.querySelector('.modal_author'),
    discriptionRef: document.querySelector('.modal_discription'),

    buttonRef: document.querySelector('.modal_button'),
    info_textRef: document.querySelector('.modal_info_text'),
    imgRef: document.querySelector('.modal_img'),
    coverImg: document.querySelector('.modal_img_placeholder'),
    itemsRef: document.querySelectorAll('.modal_item'),
    closeRef: document.querySelector('.modal_closes'),
    scrollRef: document.querySelector('.btn__up'),
  };
  refs.bodyRef.classList.add('no-scroll');
  refs.scrollRef.style.display = 'none';
  if (!localStorage.getItem('basket')) {
    localStorage.setItem('basket', '[]');
  }
  let storage = JSON.parse(localStorage.getItem('basket'));
  refs.scrollRef.classList.add('is-hidden');
  const markup = refs.modalRef.innerHTML;

  api.getBooksById(id).then(load);
  function load(data) {
    renderBtn();
    refs.backdropRef.classList.remove('is-hidden');
    if (data.book_image) {
      refs.coverImg.src = data.book_image;
      refs.coverImg.style = 'height:100%; width:100%';
    }
    if (data.title) {
      refs.book_nameRef.innerText = data.title;
    }

    if (data.author) {
      refs.authorRef.innerText = data.author;
    }

    if (data.description) {
      refs.discriptionRef.innerText = data.description;
    }

    data.buy_links.map(shop => {
      if (shop.name === 'Amazon') {
        refs.itemsRef[0].classList.remove('is-hidden');
        refs.itemsRef[0].firstElementChild.href = shop.url;
      }
      if (shop.name === 'Apple Books') {
        refs.itemsRef[1].classList.remove('is-hidden');
        refs.itemsRef[1].firstElementChild.href = shop.url;
      }
      if (shop.name === 'Bookshop') {
        refs.itemsRef[2].classList.remove('is-hidden');
        refs.itemsRef[2].firstElementChild.href = shop.url;
      }
    });

    refs.closeRef.addEventListener('click', closeModal);
    refs.backdropRef.addEventListener('click', closeModal);
    window.addEventListener('keydown', closeModal);
    function removeFromStorage() {
      const newBasket = storage.filter(el => el == JSON.stringify(id));

      localStorage.setItem('basket', newBasket);
      refs.buttonRef.removeEventListener('click', removeFromStorage);
      storage = newBasket;
      renderBtn();
    }
    function addToStorage() {
      storage.push(data._id);

      localStorage.setItem('basket', JSON.stringify(storage));
      refs.buttonRef.removeEventListener('click', addToStorage);

      renderBtn();
    }
    function renderBtn() {
      if (storage.includes(data._id)) {
        refs.buttonRef.innerText = 'remove from the shopping list';
        refs.info_textRef.classList.remove('is-hidden');
        refs.buttonRef.addEventListener('click', removeFromStorage);
      } else {
        refs.buttonRef.innerText = 'add to shopping list';
        refs.info_textRef.classList.add('is-hidden');
        refs.buttonRef.addEventListener('click', addToStorage);
      }
    }
  }

  function closeModal(e) {
    if (
      e.target == refs.backdropRef ||
      e.target == refs.closeRef ||
      e.key == 'Escape'
    ) {
      refs.modalRef.innerHTML = markup;
      refs.bodyRef.classList.remove('no-scroll');
      refs.backdropRef.classList.add('is-hidden');
      refs.closeRef.removeEventListener('click', closeModal);
      refs.backdropRef.removeEventListener('click', closeModal);
      window.removeEventListener('keydown', closeModal);
      refs.scrollRef.style.display = '';
    }
  }
}
