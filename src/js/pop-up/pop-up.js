import NewsApiBooksService from '../api-service/api-service';

const refs = {
  modalRef: document.querySelector('.modal'),
  backdropRef: document.querySelector('.backdrop'),
  coverRef: document.querySelector('.modal_cover'),
  book_nameRef: document.querySelector('.modal_book_name'),
  authorRef: document.querySelector('.modal_author'),
  discriptionRef: document.querySelector('.modal_discription'),
  shopsRef: document.querySelector('.modal_shops'),
  buttonRef: document.querySelector('.modal_button'),
  info_textRef: document.querySelector('.modal_info_text'),
  imgRef: document.querySelector('.modal_img'),
  coverImg: document.querySelector('.modal_img_placeholder'),
  itemsRef: document.querySelectorAll('.modal_item'),
};

const api = new NewsApiBooksService();
function renderModal(id) {
  api.GetBooksById(id).then(load);
  function load(data) {
    console.log(data);
    if (data.book_image) {
      refs.coverImg.src = data.book_image;
      refs.coverImg.style = 'height:100%; width:100%';
    }
    if (data.title) {
      refs.book_nameRef.innerText = data.title;
    }

    if (data.author) {
      refs.autorRef.innerText = data.author;
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
  }
}
renderModal('643282b1e85766588626a080');

function closeModal() {
  refs.modalRef.innerHTML = `<div class="modal_top_section">
            <div class="modal_cover">
                <img src="/Logotype.b4addec0.svg" alt="bookcover" class="modal_img_placeholder">
            </div>
            <div class="modal_info_section">
                <p class="modal_book_name">N/A</p>
                <p class="modal_author">N/A</p>
                <p class="modal_discription">N/A</p>
                <ul class="modal_shops">
                    <li class="modal_item is-hidden" style="width: 62px">
                        <a href="">
                            <img src="/amazon.db4f508c.png" alt="amazon" class="modal_shop_img" style="height: 19px; width: 62px">
                        </a>
                    </li>
                    <li class="modal_item is-hidden" style="width: 32px">
                        <a href="">
                            <img src="/apple-books.0196ca03.png" alt="amazon" class="modal_shop_img" style="height: 32px; width: 33px"></a>
                    </li>
                    <li class="modal_item is-hidden" style="width: 38px">
                        <a href="">
                            <img src="/bookshop.a838b065.png" alt="amazon" class="modal_shop_img" style="height: 38px; width: 36px"></a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="modal_bottom_container">
            <button class="modal_button">remove from the shopping list</button>
            <p class="modal_info_text ">Сongratulations! You have added the book to the shopping list. To
                delete, press
                the button “Remove from the shopping list”.</p>
        </div>`;
}
closeModal();
