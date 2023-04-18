import axios from 'axios';
import NewsApiBooksService from '../api-service/api-service';
import renderModal from '../pop-up/pop-up';

// const qwer = new NewsApiBooksService();
// import amazon from './images/shops/amazon.png';
// import amazon2x from '../images/shoopinglist/1amazon@2x.png';
// import openbook from '../images/shoopinglist/amazon/1openbook.png';
// import openbook2x from '../images/shoopinglist/amazon/1openbook@2x.png';
// import bookshop from '../images/shoopinglist/amazon/2booksshop.png';
// import bookshop2x from '../images/shoopinglist/amazon/2booksshop@2x.png';
// import sprite from '../../images/sprite.svg';

const shoppingWrapper = document.querySelector('.shoopinglist__emptylist');
// let bookArray = [];
 export async function createBooksMarkup(bookIds) {
    const booksService = new NewsApiBooksService();
    const booksData = await Promise.all(bookIds.map(bookId => booksService.getBooksById(bookId)));
    const booksContainer = document.getElementById('shoppingList'); 
    if (booksData.length === 0) {
    shoppingWrapper.style.display = "block";
    } else {
        shoppingWrapper.style.display = "none";
        const booksMarkup = booksData.map(bookData => {
            return `<div class="shoppinglist__galery-bookone">
            <div class="shoppinglist__galery-booktitle">
            <div class="shoppinglist__galery-imgavtor">
                <img class="shoppinglist__galery-img" srcset="./images/shoopinglist/13booktitle.jpg 1x, ./images/shoopinglist/13booktitle@2x.jpg 2x" src="${bookData.book_image}" alt="booktitle">  
            </div>
                <div class="shoppinglist__galery-booknamewithamazon">
                    <p class="shoppinglist__galery-bookname">${bookData.title}</p>
                    <p class="shoppinglist__galery-bookautor">${bookData.list_name}</p>
                </div>
            </div> 
        <div class="shoopinglist__displaynone">
        <div class="shoopinglist__galery-flex">
                  <ul class="shoppinglist__galery-href">
                    <li class="shoopinglist__galery-hrefli"><a href="${
                      bookData.buy_links.find(link => link.name === 'Amazon').url
                        ? bookData.buy_links.find(link => link.name === 'Amazon').url
                        : 'https://www.amazon.com/ref=nav_logo'
                    };
                    })}">
                    
                    </a></li>
                    <li class="shoopinglist__galery-hrefli">
                    <a href="${ bookData.buy_links.find(link => link.name === 'Apple Books').url
                        ? bookData.buy_links.find(link => link.name === 'Apple Books').url
                        : 'https://www.apple.com/ua/apple-books/'
                    };
                    })}">
                    
                    </a></li>
                    <li class="shoopinglist__galery-hrefli"><a href="${
                      bookData.buy_links.find(link => link.name === 'Bookshop').url
                        ? bookData.buy_links.find(link => link.name === 'Bookshop').url
                        : 'https://bookshop.org/'
                    };
                    })}">
                
                    </a></li>
                </ul>      
                 <p class="shoppinglist__galery-avtor">${bookData.author}</p>
            </div>
        <p class="shoppinglist__galery-bookdescription">${bookData.description ? bookData.description : 'N/A'}</p>
    </div>
        <button class="shoopinglist__btnclose" type="button" id="button" data-id="${bookData.id}>
            </button>  
         </div> `;
          }).join('');

          booksContainer.insertAdjacentHTML('beforeend', booksMarkup);
   
 }
}

// Получение массива ключей из localStorage
const basketKeys = JSON.parse(localStorage.getItem('basket'));

// Вызов функции для создания разметки HTML для нескольких ключей
createBooksMarkup(basketKeys);









//  export function renderShoppingList(bookArray) {
//   const markup = bookArray.map(book => {
//       return `
//        <div class="shoppinglist__galery-bookone">
//           <div class="shoppinglist__galery-booktitle">
//           <div class="shoppinglist__galery-imgavtor">
//               <img class="shoppinglist__galery-img" srcset="./images/shoopinglist/13booktitle.jpg 1x, ./images/shoopinglist/13booktitle@2x.jpg 2x" src="${bookData.book_image}" alt="booktitle">  
//           </div>
//               <div class="shoppinglist__galery-booknamewithamazon">
//                   <p class="shoppinglist__galery-bookname">${bookData.title}</p>
//                   <p class="shoppinglist__galery-bookautor">${bookData.list_name}</p>
//               </div>
//           </div> 
 
//       <div class="shoopinglist__displaynone">
//       <div class="shoopinglist__galery-flex">
          
//                 <ul class="shoppinglist__galery-href">
//                   <li class="shoopinglist__galery-hrefli"><a href="${
//                     bookData.buy_links.find(link => link.name === 'Amazon').url
//                       ? bookData.buy_links.find(link => link.name === 'Amazon').url
//                       : 'https://www.amazon.com/ref=nav_logo'
//                   };
//                   })}">
//                   <img class="book-stores__img" srcset=" ${amazon} 1x, ${amazon2x}   2x
//                   "src="${amazon}" alt="Amazon" width="62" height="19">
//                   </a></li>
//                   <li class="shoopinglist__galery-hrefli"><a href="${
//                     bookData.buy_links.find(link => link.name === 'Apple Books').url
//                       ? bookData.buy_links.find(link => link.name === 'Apple Books').url
//                       : 'https://www.apple.com/ua/apple-books/'
//                   };
//                   })}">
//                   <img class="book-stores__img" srcset=" ${ibook} 1x, ${ibook2x}   2x
//                   "src="${ibook}" alt="Apple Books" width="33" height="32"></a></li>
//                   <li class="shoopinglist__galery-hrefli"><a href="${
//                     bookData.buy_links.find(link => link.name === 'Bookshop').url
//                       ? bookData.buy_links.find(link => link.name === 'Bookshop').url
//                       : 'https://bookshop.org/'
//                   };
//                   })}">
//                   <img class="book-stores__img" srcset=" ${bookshop} 1x, ${bookshop2x}   2x
//                   "src="${bookshop}" alt="Bookshops" width="38" height="36">
//                   </a></li>
//               </ul>      
//                <p class="shoppinglist__galery-avtor">${bookData.author}</p>
//           </div>
//       <p class="shoppinglist__galery-bookdescription">${bookData.description ? bookData.description : 'N/A'}</p>
//   </div>
//       <button class="shoopinglist__btnclose" type="button" id="button">
//           <svg class="shoppinglist__galery-icon">
//           <use href="${sprite + '#trash'}"></use> 
//        </svg></button>  
//        </div>
// //        `;
//     })
//     .join('');
//     bookElement.insertAdjacentHTML('beforeend', markup);
// }

// function deleteBookFromShopList(event) {
//   if (
//     // event.target.closest('.shoopinglist__btnclose')
//     event.target.parentElement.parentElement.parentElement.classList.value ===
//     'shoopinglist__btnclose'
//   ) {
//     let id =
//       event.target.parentElement.parentElement.parentElement.parentElement.getAttribute(
//         'data-id'
//       );
//     let ind = bookArray.findIndex(e => e._id === id);
//     if (ind !== -1) {
//       bookArray.splice(ind, 1);
//       saveToLocalStorage(localStorageKey, bookArray);
//     }
//     if (bookArray.length === 0) {
//       shoppingWrapper.hidden = false;
//     }
//     if (
//          JSON.parse(localStorage.getItem(localStorageKey))
//     ) {
//       bookElement.innerHTML = '';
//       renderShoppingList(JSON.parse(localStorage.getItem(localStorageKey)));
//     }
//   }
// }

// const shoppingDelBtn = document.querySelector('.shoopinglist__btnclose');
// shoppingDelBtn.addEventListener('click', deleteBookFromShopList);