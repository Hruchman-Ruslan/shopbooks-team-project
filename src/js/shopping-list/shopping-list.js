import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
import 'tui-pagination/dist/tui-pagination.min.css';
import NewsApiBooksService from '../api-service/api-service';
// // const booksData = [
// //     {
// //       title: 'Книга 1',
// //       author: 'Автор 1',
// //       description: 'Описание 1'
// //     },
// //     {
// //       title: 'Книга 2',
// //       author: 'Автор 2',
// //       description: 'Описание 2'
// //     },
// //     {
// //       title: 'Книга 3',
// //       author: 'Автор 3',
// //       description: 'Описание 3'
// //     },
// //     {
// //       title: 'Книга 4',
// //       author: 'Автор 2',
// //       description: 'Описание 4'
// //     },
// //     {
// //       title: 'Книга 5',
// //       author: 'Автор 2',
// //       description: 'Описание 5'
// //     },
// //     {
// //       title: 'Книга 6',
// //       author: 'Автор 2',
// //       description: 'Описание 4'
// //     },
// //     {
// //       title: 'Книга 7',
// //       author: 'Автор 2',
// //       description: 'Описание 4'
// //     },
// //     {
// //       title: 'Книга 8',
// //       author: 'Автор 2',
// //       description: 'Описание 4'
// //     },
// //     {
// //       title: 'Книга 9',
// //       author: 'Автор 2',
// //       description: 'Описание 4'
// //     },
// //     {
// //       title: 'Книга 10',
// //       author: 'Автор 2',
// //       description: 'Описание 4'
// //     },
// //   ];
// // if (localStorage.getItem('booksData')) {
// //     books = JSON.parse(localStorage.getItem('booksData'));
// //     renderBooks(); 
// // }
// // const itemsPerPage = 3; 
// // let pageNo = 1; 

// // // Функция для рендеринга списка книг
// // function renderBooks() {
// //     const listTitleElement = document.getElementById('shoopinglist__emptylist');
// //     const paginationnone = document.getElementById('pagination');
// //     if (booksData.length === 0 ) {
// //         listTitleElement.style.display = "block"; 
// //         paginationnone.style.display = "none";
// //     } else {
// //         listTitleElement.style.display = "none";
// //         paginationnone.style.display = "block";
// //     }
// //   const startIndex = (pageNo - 1) * itemsPerPage;
// //   const endIndex = startIndex + itemsPerPage;
// //   const booksList = document.getElementById('shoppingList');

// //   booksList.innerHTML = '';

// //   // Итерируем по подмассиву книг для текущей страницы и создаем элементы для каждой книги
// //   for (let i = startIndex; i < endIndex && i < booksData.length; i++) {
// //     const book = booksData[i];
// //     const bookElement = document.createElement('div');
// //     bookElement.classList.add('book');
// //     bookElement.innerHTML = `
// //     <div class="shoppinglist__galery-bookone">
// //           <div class="shoppinglist__galery-booktitle">
// //           <div class="shoppinglist__galery-imgavtor">
// //               <img class="shoppinglist__galery-img" srcset="./images/shoopinglist/13booktitle.jpg 1x, ./images/shoopinglist/13booktitle@2x.jpg 2x" src="./images/shoopinglist/13booktitle.jpg" alt="booktitle">  
// //           </div>
// //               <div class="shoppinglist__galery-booknamewithamazon">
// //                   <p class="shoppinglist__galery-bookname">${book.title}</p>
// //                   <p class="shoppinglist__galery-bookautor">Hardcover fiction</p>
// //               </div>
// //           </div> 
 
// //       <div class="shoopinglist__displaynone">
// //       <div class="shoopinglist__galery-flex">
          
// //                 <ul class="shoppinglist__galery-href">
// //                   <li class="shoopinglist__galery-hrefli"><a href="" class="shoppinglist__galery-link" target="_blank" rel="noopener noreferrer" aria-label="amazon">
// //                       <img class="shoopinglist__galery-img1" src="./images/shoopinglist/amazon/1amazon.png" srcset="./images/shoopinglist/amazon/1amazon.png 1x, ./images/shoopinglist/amazon/1amazon@2x.png 2x" alt="amazon">
// //                   </a></li>
// //                   <li class="shoopinglist__galery-hrefli"><a href="" class="shoppinglist__galery-link" target="_blank" rel="noopener noreferrer" aria-label="instagram">
// //                       <img class="shoopinglist__galery-img2" src="./images/shoopinglist/amazon/1openbook.png" srcset="./images/shoopinglist/amazon/1openbook.png 1x, ./images/shoopinglist/amazon/1openbook@2x.png 2x" alt="amazon">
// //                   </a></li>
// //                   <li class="shoopinglist__galery-hrefli"><a href="" class="shoppinglist__galery-link" target="_blank" rel="noopener noreferrer" aria-label="instagram">
// //                       <img class="shoopinglist__galery-img3" src="./images/shoopinglist/amazon/2booksshop.png" srcset="./images/shoopinglist/amazon/2booksshop.png 1x, ./images/shoopinglist/amazon/2booksshop@2x.png 2x" alt="amazon">
// //                   </a></li>
// //               </ul>      
// //                <p class="shoppinglist__galery-avtor">${book.author}</p>
// //           </div>
// //       <p class="shoppinglist__galery-bookdescription">${book.description}</p>
// //   </div>
// //       <button class="shoopinglist__btnclose" type="button" id="button">
// //           <svg class="shoppinglist__galery-icon">
// //           <use href="./images/sprite.svg#trash"></use> 
// //        </svg></button> 
// //       </div>  
// //    </div>
// //     `;
// //     booksList.appendChild(bookElement); // Добавляем созданный элемент книги в список книг
// //   }
// // }

// // // Функция для обновления пагинации
// // function updatePagination() {
// //   const totalItems = booksData.length; // Общее количество книг
// //   const totalPages = Math.ceil(totalItems / itemsPerPage); // Количество страниц

// //     // Инициализируем или обновляем пагинацию
// //     const pagination = new Pagination('pagination', {
// //       totalItems: totalItems, // Общее количество элементов
// //       itemsPerPage: itemsPerPage, // Количество элементов на одной странице
// //       visiblePages: 2, // Количество видимых страниц в пагинации
// //       page: pageNo, // Текущая страница
// //       centerAlign: true, // Выравнивание пагинации по центру
// //       template: {
// //         // Кастомный шаблон для отображения номеров страниц
// //         page: '<a href="#" class="tui-page-btn">{{page}}</a>',
// //         currentPage: '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
// //         moveButton:
// //           '<a href="#" class="tui-page-btn tui-{{type}}">' +
// //           '<span class="tui-ico-{{type}}"></span>' +
// //           '</a>',
// //         disabledMoveButton:
// //           '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
// //           '<span class="tui-ico-{{type}}"></span>' +
// //           '</span>'
// //       }
// //     });
  
// //     // Обработчик события изменения страницы
// //     pagination.on('afterMove', event => {
// //       pageNo = event.page; 
// //       renderBooks(); 
// //     });
// //   }
  
// //   // Инициализируем пагинацию при загрузке страницы
// //   document.addEventListener('DOMContentLoaded', () => {
// //     renderBooks(); 
// //     updatePagination(); 
// //   });





// // Функция для удаления книги из списка
// // function deleteBook(event) {
// //     const bookId = event.target.dataset.id;
// //     const updatedBooks = books.filter(book => book.id !== parseInt(bookId));
// //     localStorage.setItem('booksData', JSON.stringify(updatedBooks));
// //     renderBooks();
// // }
// // // Обработчик события клика на кнопку удаления книги
// // document.getElementById('button').addEventListener('click', function(event) {
// // if (event.target.classList.contains('delete-button')) {
// // deleteBook(event);
// // }
// // });
// // window.addEventListener('load', function () {
// // // Проверяем наличие данных в localStorage
// // if (localStorage.getItem('booksData')) {
// // // Если данные есть, то загружаем их в массив books
// // const storedBooks = JSON.parse(localStorage.getItem('booksData'));
// // books.push(...storedBooks);
// // }
// // // Отрисовываем список книг на странице
// // renderBooks();
// // });

// // localStorage.setItem('test', JSON.stringify(test));


// // Массив объектов книг
// // let books = [];

// // Получение данных из localStorage, если они есть
// // if (localStorage.getItem('test')) {
// //     books = JSON.parse(localStorage.getItem('test'));
// //     renderBookList(); // Вызываем функцию рендеринга списка книг при загрузке страницы
// // }

//    // Получаем книги с сервера и сохраняем их в локальное хранилище
//    const newsApiBooksService = new NewsApiBooksService();

//    newsApiBooksService.GetTopBooks().then(renderBooks).catch(onError);

//    const itemsPerPage = 3; // Количество книг на одной странице

//         // Функция для отображения книг на странице
//         function renderBooks(books) {
//             const booksContainer = document.getElementById('shoppingList');
//             booksContainer.innerHTML = '';

//             const myFunction = ({ list_name, books }) => {
//               return books.map(({ book_image, title, author, _id }) => `<div class="shoppinglist__galery-bookone">
//               <div class="shoppinglist__galery-booktitle">
//               <div class="shoppinglist__galery-imgavtor">
//                   <img class="shoppinglist__galery-img" srcset="${book_image} 1x, ${book_image} 2x" src="${book_image}" alt="booktitle">  
//               </div>
//                   <div class="shoppinglist__galery-booknamewithamazon">
//                       <p class="shoppinglist__galery-bookname">${list_name}</p>
//                       <p class="shoppinglist__galery-bookautor">Hardcover fiction</p>
//                   </div>
//               </div> 
     
//           <div class="shoopinglist__displaynone">
//           <div class="shoopinglist__galery-flex">
              
//                     <ul class="shoppinglist__galery-href">
//                       <li class="shoopinglist__galery-hrefli"><a href="" class="shoppinglist__galery-link" target="_blank" rel="noopener noreferrer" aria-label="amazon">
//                           <img class="shoopinglist__galery-img1" src="./images/shoopinglist/amazon/1amazon.png" srcset="./images/shoopinglist/amazon/1amazon.png 1x, ./images/shoopinglist/amazon/1amazon@2x.png 2x" alt="amazon">
//                       </a></li>
//                       <li class="shoopinglist__galery-hrefli"><a href="" class="shoppinglist__galery-link" target="_blank" rel="noopener noreferrer" aria-label="instagram">
//                           <img class="shoopinglist__galery-img2" src="./images/shoopinglist/amazon/1openbook.png" srcset="./images/shoopinglist/amazon/1openbook.png 1x, ./images/shoopinglist/amazon/1openbook@2x.png 2x" alt="amazon">
//                       </a></li>
//                       <li class="shoopinglist__galery-hrefli"><a href="" class="shoppinglist__galery-link" target="_blank" rel="noopener noreferrer" aria-label="instagram">
//                           <img class="shoopinglist__galery-img3" src="./images/shoopinglist/amazon/2booksshop.png" srcset="./images/shoopinglist/amazon/2booksshop.png 1x, ./images/shoopinglist/amazon/2booksshop@2x.png 2x" alt="amazon">
//                       </a></li>
//                   </ul>      
//                    <p class="shoppinglist__galery-avtor">Harlan Coben</p>
//               </div>
//           <p class="shoppinglist__galery-bookdescription">David Burroughs was once a devoted father to his three-year-old son Matthew, living a dream life just a short drive away from the working-class suburb where he and his wife, Cheryl, first fell in love--until one fateful night when David woke suddenly to discover 
//           Matthew had been murdered while David was asleep just down the hall.</p>
//       </div>
//           <button class="shoopinglist__btnclose" type="button" id="button">
//               <svg class="shoppinglist__galery-icon">
//               <use href="./images/sprite.svg#trash"></use> 
//            </svg></button>  
//            </div>`).join('');
//             };
        
//             booksContainer.innerHTML = myFunction;
                
//             };
      

//         // Функция для обновления разметки пагинации
//         function updatePagination(totalItems, currentPage) {
//             const paginationContainer = document.getElementById('pagination');
//             paginationContainer.innerHTML = '';

//             const totalPages = Math.ceil(totalItems / itemsPerPage);
//             for (let i = 1; i <= totalPages; i++) {
//                 const pageElement = document.createElement('a');
//                 pageElement.href = '#';
//                 pageElement.className = 'tui-page-btn';
//                 pageElement.textContent = i;
//                 if (i === currentPage) {
//                     pageElement.className = 'tui-page-btn tui-is-selected';
//                 }
//                 pageElement.addEventListener('click', () => {
//                     pagination.movePageTo(i);
//                 });
//                 paginationContainer.appendChild(pageElement);
//             }
//         }

//         // Функция для удаления книги из локального хранилища и обновления разметки
//         function deleteBook(bookId) {
//             const books = JSON.parse(localStorage.getItem('books'));
//             const updatedBooks = books.filter(book => book._id !== bookId);
//             localStorage.setItem('books', JSON.stringify(updatedBooks));
//             renderBooks(updatedBooks);
//         }

//         // Инициализация пагинации
//         const totalBooks = JSON.parse(localStorage.getItem('books')).length;
//         const pagination = new tui.Pagination('pagination', {
//             totalItems: totalBooks,
//             itemsPerPage: itemsPerPage,
//             visiblePages: 5,
//             page: 1,
//             // centerAlign: true,
//             template: {
//                 page: '<a href="#" class="tui-page-btn">{{page}}</a>',
//                 currentPage: '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
//                 moveButton:
//                     '<a href="#" class="tui-page-btn tui-{{type}}">' +
//                     '<span class="tui-ico-{{type}}">{{type}}</span>' +
//                     '</a>',
//                 disabledMoveButton:
//                     '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
//                     '<span class="tui-ico-{{type}}">{{type}}</span>' +
//                     '</span>'
//             }
//         });

//         pagination.on('afterMove', event => {
//           const currentPage = event.page;
//           const startIndex = (currentPage - 1) * itemsPerPage;
//           const endIndex = startIndex + itemsPerPage;
//           const books = JSON.parse(localStorage.getItem('books'));
//           const booksToRender = books.slice(startIndex, endIndex);
//           renderBooks(booksToRender);
//       });

//         // Инициализация книг при загрузке страницы
//         window.onload = function() {
//             const books = JSON.parse(localStorage.getItem('books'));
//             const totalBooks = books.length;
//             const currentPage = pagination.getCurrentPage();
//             const startIndex = (currentPage - 1) * itemsPerPage;
//             const endIndex = startIndex + itemsPerPage;
//             const booksToRender = books.slice(startIndex, endIndex);
//             renderBooks(booksToRender);
//             updatePagination(totalBooks, currentPage);
//         }
//         function onError() {
//           console.log('an error occurred, please try again later');
//         }

// import { saveToLocalStorage } from './localStarage';
import amazon from '../images/shoopinglist/amazon/1amazon.png';
import amazon2x from '../images/shoopinglist/1amazon@2x.png';
import ibook from '../images/shoopinglist/amazon/1openbook.png';
import ibook2x from '../images/shoopinglist/amazon/1openbook@2x.png';
import bookshop from '../images/shoopinglist/amazon/2booksshop.png';
import bookshop2x from '../images/shoopinglist/amazon/2booksshop@2x.png';
import sprite from '../../images/sprite.svg';

const shoppingUl = document.querySelector('.shopping-list');
const shoppingWrapper = document.querySelector('.shoopinglist__emptylist');
const localStorageKey = 'basket';
let bookArray = [];

// function saveToLocalStorage(key, value) {
//     try {
//       const stringValue = JSON.stringify(value);
//       localStorage.setItem(key, stringValue);
//     } catch (error) {
//       console.error('Error: ', error.message);
//     }
//   }


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
        <button class="shopping-list--btn" type="button">
          <div>
          <svg class="shopping-list--btn__icon">
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

function deleteBookFromShopList(event) {
  if (
    event.target.parentElement.parentElement.parentElement.classList.value ===
    'shopping-list--btn'
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

const shoppingDelBtn = document.querySelector('.shopping-list');
shoppingDelBtn.addEventListener('click', deleteBookFromShopList);