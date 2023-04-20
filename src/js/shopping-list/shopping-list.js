import axios from 'axios';
import NewsApiBooksService from '../api-service/api-service';
import { getPagination } from './tuipagination';

import amazon from '../../images/shoopinglist/amazon/1amazon.png';
import amazon2x from '../../images/shoopinglist/amazon/1amazon@2x.png';
import openbook from '../../images/shoopinglist/amazon/1openbook.png';
import openbook2x from '../../images/shoopinglist/amazon/1openbook@2x.png';
import bookshop from '../../images/shoopinglist/amazon/2booksshop.png';
import bookshop2x from '../../images/shoopinglist/amazon/2booksshop@2x.png';
import sprite from '../../images/sprite.svg';

let basketKeys = JSON.parse(localStorage.getItem('basket'));
const shoppingWrapper = document.querySelector('.shoopinglist__emptylist');
const paginationContainer = document.getElementById('pagination');
const booksContainer = document.getElementById('shoppingList');
const booksgrid = document.getElementById('important');
export async function createBooksMarkup(bookIds) {
  const booksService = new NewsApiBooksService();
  const booksData = await Promise.all(
    bookIds.map(bookId => booksService.getBooksById(bookId))
  );

  if (booksData.length === 0) {
    shoppingWrapper.style.display = 'block';
    paginationContainer.style.display = 'none';
  } else {
    shoppingWrapper.style.display = 'none';
    const booksMarkup = booksData
      .map(bookData => {
        return `
            <div class="shoppinglist__galery-bookone">
            <div class="shoppinglist__galeryimportant">
            <div class="shoppinglist__galery-imgavtor">
                <img class="shoppinglist__galery-img" srcset="${
                  bookData.book_image
                } 1x, ${bookData.book_image} 2x" src="${
          bookData.book_image
        }" alt="booktitle" height:100% width:100%>
                <p class="shopping-list--author__mobile">${bookData.author}</p>
            </div>

                <div class="shoppinglist__galery-booknamewithamazon">
                    <h2 class="shoppinglist__galery-bookname">${
                      bookData.title
                    }</h2>
                    <p class="shoppinglist__galery-bookautor">${
                      bookData.list_name
                    }</p>
                </div>

                      <ul class="shoppinglist__galery-href">
                        <li class="shoopinglist__galery-hrefli"><a href="${
                          bookData.buy_links.find(
                            link => link.name === 'Amazon'
                          ).url
                            ? bookData.buy_links.find(
                                link => link.name === 'Amazon'
                              ).url
                            : 'https://www.amazon.com/ref=nav_logo'
                        };
                          })}" class="shoppinglist__galery-link" target="_blank" rel="noopener noreferrer" aria-label="amazon">
                            <img class="shoopinglist__galery-img1"
                             src="${amazon}"
                              srcset="${amazon} 1x,
                              ${amazon2x} 2x"
                              alt="amazon">
                        </a></li>
                        <li class="shoopinglist__galery-hrefli">
                        <a href="${
                          bookData.buy_links.find(
                            link => link.name === 'Apple Books'
                          ).url
                            ? bookData.buy_links.find(
                                link => link.name === 'Apple Books'
                              ).url
                            : 'https://www.apple.com/ua/apple-books/'
                        };
                    })}" class="shoppinglist__galery-link" target="_blank" rel="noopener noreferrer" aria-label="instagram">
                            <img class="shoopinglist__galery-img2"
                            src="${openbook}"
                            srcset="${openbook} 1x,
                            ${openbook2x} 2x"
                             alt="amazon">
                        </a></li>
                        <li class="shoopinglist__galery-hrefli">
                        <a href="${
                          bookData.buy_links.find(
                            link => link.name === 'Bookshop'
                          ).url
                            ? bookData.buy_links.find(
                                link => link.name === 'Bookshop'
                              ).url
                            : 'https://bookshop.org/'
                        };
                          })}" class="shoppinglist__galery-link" target="_blank" rel="noopener noreferrer" aria-label="instagram">
                            <img class="shoopinglist__galery-img3"
                             src="${bookshop}"
                             srcset="${bookshop} 1x,
                             ${bookshop2x} 2x"
                             alt="amazon">
                        </a></li>
                    </ul>
                    <p class="shoppinglist__galery-bookdescription">${
                      bookData.description ? bookData.description : 'N/A'
                    }</p>
                     <p class="shoppinglist__galery-avtor">${
                       bookData.author
                     }</p>

        <button class="shoopinglist__btnclose" data-id="${
          bookData._id
        }" id="button"  type="button">
        <svg class="shoppinglist__galery-icon">
          <use href="${sprite}#trash"></use>
          </svg>
          </button>
         </div>
         </div> `;
      })
      .join('');
    booksContainer.innerHTML = booksMarkup;

    const btnCloseList = document.querySelectorAll('.shoopinglist__btnclose');
    btnCloseList.forEach(btnClose => {
      btnClose.addEventListener('click', () => {
        const bookId = btnClose.getAttribute('data-id');
        basketKeys = basketKeys.filter(key => key !== bookId);
        localStorage.setItem('basket', JSON.stringify(basketKeys));

        const bookElem = btnClose.closest('.shoppinglist__galery-bookone');
        bookElem.remove();
        getPagination(booksContainer);
        if (basketKeys.length === 0) {
          shoppingWrapper.style.display = 'block';

          createBooksMarkup(basketKeys);
        }
      });
    });

    getPagination(booksContainer);
  }
}

createBooksMarkup(basketKeys);
