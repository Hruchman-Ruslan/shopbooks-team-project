import axios from 'axios';
import NewsApiBooksService from '../api-service/api-service';
import {removeFromStorage} from '../pop-up/pop-up';
import { getPagination } from './tuipagination';


// const qwer = new NewsApiBooksService();
// import amazon from '../images/shoopinglist/amazon.png';
// import amazon2x from '../images/shoopinglist/1amazon@2x.png';
// import openbook from '../images/shoopinglist/amazon/1openbook.png';
// import openbook2x from '../images/shoopinglist/amazon/1openbook@2x.png';
// import bookshop from '../images/shoopinglist/amazon/2booksshop.png';
// import bookshop2x from '../images/shoopinglist/amazon/2booksshop@2x.png';
// import sprite from '../images/sprite.svg';
const storage = JSON.parse(localStorage.getItem('basket'));
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
                <img class="shoppinglist__galery-img" srcset="${bookData.book_image} 1x, ${bookData.book_image} 2x" src="${bookData.book_image}" alt="booktitle" height:100% width:100%>  
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
                    <img class="shoopinglist__galery-img1"
                       src="./images/shoopinglist/amazon/1amazon.png"
                        srcset="./images/shoopinglist/amazon/1amazon.png 1x, 
                        ./images/shoopinglist/amazon/1amazon@2x.png 2x" 
                        alt="amazon">
                    </a></li>
                    <li class="shoopinglist__galery-hrefli">
                    <a href="${ bookData.buy_links.find(link => link.name === 'Apple Books').url
                        ? bookData.buy_links.find(link => link.name === 'Apple Books').url
                        : 'https://www.apple.com/ua/apple-books/'
                    };
                    })}">
                    <img class="shoopinglist__galery-img2" 
                      src="./images/shoopinglist/amazon/1openbook.png" 
                      srcset="./images/shoopinglist/amazon/1openbook.png 1x, 
                      ./images/shoopinglist/amazon/1openbook@2x.png 2x"
                       alt="amazon">
                    </a></li>
                    <li class="shoopinglist__galery-hrefli"><a href="${
                      bookData.buy_links.find(link => link.name === 'Bookshop').url
                        ? bookData.buy_links.find(link => link.name === 'Bookshop').url
                        : 'https://bookshop.org/'
                    };
                    })}">
                    <img class="shoopinglist__galery-img3"
                    src="./images/shoopinglist/amazon/2booksshop.png" 
                    srcset="./images/shoopinglist/amazon/2booksshop.png 1x, 
                    ./images/shoopinglist/amazon/2booksshop@2x.png 2x" 
                    alt="amazon">
                    </a></li>
                </ul>      
                 <p class="shoppinglist__galery-avtor">${bookData.author}</p>
            </div>
        <p class="shoppinglist__galery-bookdescription">${bookData.description ? bookData.description : 'N/A'}</p>
    </div>
        <button class="shoopinglist__btnclose" type="button" id="button" data-id="${bookData.id}>
        <svg class="shoppinglist__galery-icon">
          <use href="./images/sprite.svg#trash"></use> 
            </button>  
         </div> `;
          }).join('');

          booksContainer.insertAdjacentHTML('beforeend', booksMarkup);
          getPagination(booksContainer);
 }
}

const basketKeys = JSON.parse(localStorage.getItem('basket'));
createBooksMarkup(basketKeys);





// function removeFromStorage() {
//     const newBasket = storage.filter(el => el == JSON.stringify(id));
//     localStorage.setItem('basket', newBasket);
//   }


// const shoppingDelBtn = document.querySelector('.shoopinglist__btnclose');
// shoppingDelBtn.addEventListener('click', deleteBookFromShopList);



// function deleteBookFromShopList(event) {
//   if (
    
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