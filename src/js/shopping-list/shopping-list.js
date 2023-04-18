// import 'tui-pagination/dist/tui-pagination.css';
// import 'tui-pagination/dist/tui-pagination.min.css';

// import { saveToLocalStorage } from './localStarage';
// import amazon from './images/shops/amazon.png';
// import amazon2x from '../images/shoopinglist/1amazon@2x.png';
// import ibook from '../images/shoopinglist/amazon/1openbook.png';
// import ibook2x from '../images/shoopinglist/amazon/1openbook@2x.png';
// import bookshop from '../images/shoopinglist/amazon/2booksshop.png';
// import bookshop2x from '../images/shoopinglist/amazon/2booksshop@2x.png';
// import sprite from '../../images/sprite.svg';

const shoppingUl = document.querySelector('.shoopinglist__galery');
const shoppingWrapper = document.querySelector('.shoopinglist__emptylist');
const localStorageKey = 'basket';
let bookArray = [];

function saveToLocalStorage(key, value) {
    try {
      const stringValue = JSON.stringify(value);
      localStorage.setItem(key, stringValue);
    } catch (error) {
      console.error('Error: ', error.message);
    }
  }


if (
  JSON.parse(localStorage.getItem(localStorageKey)) &&
  JSON.parse(localStorage.getItem(localStorageKey)).length > 0
) {
  shoppingWrapper.hidden = true;
//   shoppingWrapper.style.display = "none";
  bookArray = JSON.parse(localStorage.getItem(localStorageKey));
}

/* export function getUniqueBook(books) {
  return (uniqueBook = Array.from(
    new Set(books.map(item => JSON.stringify(item)))
  ).map(item => JSON.parse(item)));
} */

export function renderShoppingList(bookArray) {
  const markup = bookArray
    .map(book => {
      return `
      <li class="shopping-list--item" data-id="${book._id}">
        <div class="shopping-list--img-wrapper">
          <img
            class="shopping-list--img"
            src="${book.book_image}"
            alt=""
          />
          <p class="shopping-list--author__mobile">${book.author}</p>
        </div>
        <div class="shopping-list--info-wrapper">
          <h2 class="shopping-list--title">${book.title}</h2>
          <p class="shopping-list--category">
          ${book.list_name}
          </p>
        </div>
        <ul class="shopping-list--link-list">
          <li>
            <a href="${
              book.buy_links.find(link => link.name === 'Amazon').url
                ? book.buy_links.find(link => link.name === 'Amazon').url
                : 'https://www.amazon.com/ref=nav_logo'
            };
            })}">
            <img class="book-stores__img" srcset=" ${amazon} 1x, ${amazon2x}   2x
            "src="${amazon}" alt="Amazon" width="62" height="19">
            </a>
          </li>
          <li>
            <a href="${
              book.buy_links.find(link => link.name === 'Apple Books').url
                ? book.buy_links.find(link => link.name === 'Apple Books').url
                : 'https://www.apple.com/ua/apple-books/'
            };
            })}">
            <img class="book-stores__img" srcset=" ${ibook} 1x, ${ibook2x}   2x
            "src="${ibook}" alt="Apple Books" width="33" height="32">
            </a>
          </li>
          <li>
            <a href="${
              book.buy_links.find(link => link.name === 'Bookshop').url
                ? book.buy_links.find(link => link.name === 'Bookshop').url
                : 'https://bookshop.org/'
            };
            })}">
            <img class="book-stores__img" srcset=" ${bookshop} 1x, ${bookshop2x}   2x
            "src="${bookshop}" alt="Bookshops" width="38" height="36">
            </a>
          </li>
        </ul>
        <p class="shopping-list--description">
        ${book.description ? book.description : 'N/A'}
        </p>
        <p class="shopping-list--author">${book.author}</p>
        <button class="shoopinglist__btnclose" type="button">
          <div>
          <svg class="shoopinglist__btnclose-icon">
            <use href="${sprite + '#icon-dump'}"></use>
          </svg>
          </div>
        </button>
      </li>
      `;
    })
    .join('');
  shoppingUl.insertAdjacentHTML('beforeend', markup);
}
renderShoppingList();
function deleteBookFromShopList(event) {
  if (
    event.target.parentElement.parentElement.parentElement.classList.value ===
    'shoopinglist__btnclose'
  ) {
    let id =
      event.target.parentElement.parentElement.parentElement.parentElement.getAttribute(
        'data-id'
      );
    let ind = bookArray.findIndex(e => e._id === id);
    if (ind !== -1) {
      bookArray.splice(ind, 1);
      saveToLocalStorage(localStorageKey, bookArray);
    }
    if (bookArray.length === 0) {
      shoppingWrapper.hidden = false;
    }
    if (
      JSON.parse(localStorage.getItem(localStorageKey)) &&
      JSON.parse(localStorage.getItem(localStorageKey)).length >= 0
    ) {
      shoppingUl.innerHTML = '';
      renderShoppingList(JSON.parse(localStorage.getItem(localStorageKey)));
    }
  }
}

const shoppingDelBtn = document.querySelector('.shoopinglist__btnclose');
shoppingDelBtn.addEventListener('click', deleteBookFromShopList);