import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
import 'tui-pagination/dist/tui-pagination.min.css';
import { createBooksMarkup } from './shopping-list';


export function getPagination(booksContainer) {
  const paginationContainer = document.getElementById('pagination');
  const totalItems = booksContainer.childElementCount;
  const itemsPerPage = 3; // Устанавливаем количество элементов на странице равным 3

  const pagination = new Pagination(paginationContainer, {
    totalItems: totalItems,
    itemsPerPage: itemsPerPage,
    visiblePages: 5, // Устанавливаем количество видимых страниц в пагинации
    firstItemClassName: 'tui-first-child',
    lastItemClassName: 'tui-last-child',
    template: {
      page: '<a href="#" class="tui-page-btn">{{page}}</a>',
      currentPage:
        '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
      moveButton:
        '<a href="#" class="tui-page-btn tui-{{type}}">' +
        '<span class="tui-ico-{{type}}">{{type}}</span>' +
        '</a>',
      disabledMoveButton:
        '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
        '<span class="tui-ico-{{type}}">{{type}}</span>' +
        '</span>',
      moreButton:
        '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
        '<span class="tui-ico-ellip">...</span>' +
        '</a>',
    },
  });

  pagination.on('afterMove', (event) => {
    const scrollY = window.scrollY;

    const currentPage = event.page;
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    const booksItems = Array.from(booksContainer.children);
    booksItems.forEach((item, index) => {
      if (index >= startIndex && index < endIndex) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
    window.scrollTo(0, scrollY);
  });
 
  pagination.movePageTo(1); 
};

              
