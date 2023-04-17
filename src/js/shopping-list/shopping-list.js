import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
import 'tui-pagination/dist/tui-pagination.min.css';


const booksData = [
    {
      title: 'Книга 1',
      author: 'Автор 1',
      description: 'Описание 1'
    },
    {
      title: 'Книга 2',
      author: 'Автор 2',
      description: 'Описание 2'
    },
    {
      title: 'Книга 3',
      author: 'Автор 3',
      description: 'Описание 3'
    },
    {
      title: 'Книга 4',
      author: 'Автор 2',
      description: 'Описание 4'
    },
    {
      title: 'Книга 5',
      author: 'Автор 2',
      description: 'Описание 5'
    },
    {
      title: 'Книга 6',
      author: 'Автор 2',
      description: 'Описание 4'
    },
    {
      title: 'Книга 7',
      author: 'Автор 2',
      description: 'Описание 4'
    },
    {
      title: 'Книга 8',
      author: 'Автор 2',
      description: 'Описание 4'
    },
    {
      title: 'Книга 9',
      author: 'Автор 2',
      description: 'Описание 4'
    },
    {
      title: 'Книга 10',
      author: 'Автор 2',
      description: 'Описание 4'
    },
  ];
if (localStorage.getItem('test')) {
    books = JSON.parse(localStorage.getItem('test'));
    renderBooks(); 
}
const itemsPerPage = 3; 
let pageNo = 1; 

// Функция для рендеринга списка книг
function renderBooks() {
    const listTitleElement = document.getElementById('shoopinglist__emptylist');
    if (booksData.length === 0) {
        listTitleElement.style.display = "block"; 
    } else {
        listTitleElement.style.display = "none";
         
    }
  const startIndex = (pageNo - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const booksList = document.getElementById('shoppingList');

  booksList.innerHTML = '';

  // Итерируем по подмассиву книг для текущей страницы и создаем элементы для каждой книги
  for (let i = startIndex; i < endIndex && i < booksData.length; i++) {
    const book = booksData[i];
    const bookElement = document.createElement('div');
    bookElement.classList.add('book');
    bookElement.innerHTML = `
    <div class="shoppinglist__galery-bookone">
          <div class="shoppinglist__galery-booktitle">
          <div class="shoppinglist__galery-imgavtor">
              <img class="shoppinglist__galery-img" srcset="./images/shoopinglist/13booktitle.jpg 1x, ./images/shoopinglist/13booktitle@2x.jpg 2x" src="./images/shoopinglist/13booktitle.jpg" alt="booktitle">  
          </div>
              <div class="shoppinglist__galery-booknamewithamazon">
                  <p class="shoppinglist__galery-bookname">${book.title}</p>
                  <p class="shoppinglist__galery-bookautor">Hardcover fiction</p>
              </div>
          </div> 
 
      <div class="shoopinglist__displaynone">
      <div class="shoopinglist__galery-flex">
          
                <ul class="shoppinglist__galery-href">
                  <li class="shoopinglist__galery-hrefli"><a href="" class="shoppinglist__galery-link" target="_blank" rel="noopener noreferrer" aria-label="amazon">
                      <img class="shoopinglist__galery-img1" src="./images/shoopinglist/amazon/1amazon.png" srcset="./images/shoopinglist/amazon/1amazon.png 1x, ./images/shoopinglist/amazon/1amazon@2x.png 2x" alt="amazon">
                  </a></li>
                  <li class="shoopinglist__galery-hrefli"><a href="" class="shoppinglist__galery-link" target="_blank" rel="noopener noreferrer" aria-label="instagram">
                      <img class="shoopinglist__galery-img2" src="./images/shoopinglist/amazon/1openbook.png" srcset="./images/shoopinglist/amazon/1openbook.png 1x, ./images/shoopinglist/amazon/1openbook@2x.png 2x" alt="amazon">
                  </a></li>
                  <li class="shoopinglist__galery-hrefli"><a href="" class="shoppinglist__galery-link" target="_blank" rel="noopener noreferrer" aria-label="instagram">
                      <img class="shoopinglist__galery-img3" src="./images/shoopinglist/amazon/2booksshop.png" srcset="./images/shoopinglist/amazon/2booksshop.png 1x, ./images/shoopinglist/amazon/2booksshop@2x.png 2x" alt="amazon">
                  </a></li>
              </ul>      
               <p class="shoppinglist__galery-avtor">${book.author}</p>
          </div>
      <p class="shoppinglist__galery-bookdescription">${book.description}</p>
  </div>
      <button class="shoopinglist__btnclose" type="button" id="button">
          <svg class="shoppinglist__galery-icon">
          <use href="./images/sprite.svg#trash"></use> 
       </svg></button> 
      </div>  
   </div>
    `;
    booksList.appendChild(bookElement); // Добавляем созданный элемент книги в список книг
  }
}

// Функция для обновления пагинации
function updatePagination() {
  const totalItems = booksData.length; // Общее количество книг
  const totalPages = Math.ceil(totalItems / itemsPerPage); // Количество страниц

    // Инициализируем или обновляем пагинацию
    const pagination = new Pagination('pagination', {
      totalItems: totalItems, // Общее количество элементов
      itemsPerPage: itemsPerPage, // Количество элементов на одной странице
      visiblePages: 2, // Количество видимых страниц в пагинации
      page: pageNo, // Текущая страница
      centerAlign: true, // Выравнивание пагинации по центру
      template: {
        // Кастомный шаблон для отображения номеров страниц
        page: '<a href="#" class="tui-page-btn">{{page}}</a>',
        currentPage: '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
        moveButton:
          '<a href="#" class="tui-page-btn tui-{{type}}">' +
          '<span class="tui-ico-{{type}}"></span>' +
          '</a>',
        disabledMoveButton:
          '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
          '<span class="tui-ico-{{type}}"></span>' +
          '</span>'
      }
    });
  
    // Обработчик события изменения страницы
    pagination.on('afterMove', event => {
      pageNo = event.page; 
      renderBooks(); 
    });
  }
  
  // Инициализируем пагинацию при загрузке страницы
  document.addEventListener('DOMContentLoaded', () => {
    renderBooks(); 
    updatePagination(); 
  });


//   <h2>${book.title}</h2>
//       <p><strong>Автор:</strong> ${book.author}</p>
//       <p><strong>Описание:</strong> ${book.description}</p>


//   
// localStorage.setItem('test', JSON.stringify(test));


// Массив объектов книг
// let books = [];

// Получение данных из localStorage, если они есть
// if (localStorage.getItem('test')) {
//     books = JSON.parse(localStorage.getItem('test'));
//     renderBookList(); // Вызываем функцию рендеринга списка книг при загрузке страницы
// }

// Функция для рендеринга списка книг на странице с использованием Handlebars
// function renderBookList() {
//     const bookList = document.getElementById('shoppingList');
//     const listTitleElement = document.getElementById('shoopinglist__emptylist');
//     const bookTemplate = Handlebars.innerHTML;
//     const compiledTemplate = Handlebars.compile(bookTemplate);
//     bookList.innerHTML = compiledTemplate({ test });


//     if (books.length === 0) {
//         listTitleElement.style.display = "block"; // Показываем заголовок, если список пуст
//     } else {
//         listTitleElement.style.display = "none"; // Скрываем заголовок, если список не пуст
//     }
   
// }


// // Функция для удаления книги из списка
// function deleteBook(event) {
//     const bookId = event.target.dataset.id;
//     const updatedBooks = books.filter(book => book.id !== parseInt(bookId));
//     localStorage.setItem('test', JSON.stringify(updatedBooks));
//     renderBookList();
// }
// // Обработчик события клика на кнопку удаления книги
// document.getElementById('button').addEventListener('click', function(event) {
// if (event.target.classList.contains('delete-button')) {
// deleteBook(event);
// }
// });
// window.addEventListener('load', function () {
// // Проверяем наличие данных в localStorage
// if (localStorage.getItem('test')) {
// // Если данные есть, то загружаем их в массив books
// const storedBooks = JSON.parse(localStorage.getItem('test'));
// books.push(...storedBooks);
// }
// // Отрисовываем список книг на странице
// renderBookList();
// });