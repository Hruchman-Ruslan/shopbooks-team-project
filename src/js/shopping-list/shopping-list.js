const Handlebars = require("handlebars");
const fs = require('fs');

// Read the contents of the template file
const templateSource = fs.readFileSync('product-card.hbs', 'utf-8');

// Compile the template
const template = Handlebars.compile(templateSource);
// const Handlebars = require("./templates/product-card.hbs");

const test = [
    {
        id: 1,
        title: 'Book 1',
        author: 'Author 1',
        description: 'Description 1',
        image: 'book1.jpg'
    },
    {
        id: 2,
        title: 'Book 1',
        author: 'Author 1',
        description: 'Description 1',
        image: 'book1.jpg'
    },
    {
        id: 3,
        title: 'Book 1',
        author: 'Author 1',
        description: 'Description 1',
        image: 'book1.jpg'
    },
    {
        id: 4,
        title: 'Book 1',
        author: 'Author 1',
        description: 'Description 1',
        image: 'book1.jpg'
    }
  ]

  const renderedBooks = template(test);

  // Create a new div element to hold the rendered books
  const bookListContainer = document.createElement('div');
  
  // Set the innerHTML of the div element to the rendered books
  bookListContainer.
  book
  innerHTML = renderedBooks;
  
  // Append the div element to the DOM
  document.body.appendChild(bookListContainer);


  
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