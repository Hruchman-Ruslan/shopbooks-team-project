import NewsApiBooksService from '../api-service/api-service';
import { Notify } from 'notiflix';
import renderCardListByCategory from './renderCatdListByCategory';
import updateTitle from './updateTitle';

export const containerEl = document.querySelector('.categories__container');
const button = document.querySelector('.categories__btn');

const newsApiBooksService = new NewsApiBooksService();

containerEl.addEventListener('click', onClickCategory);

newsApiBooksService
  .getCategoryList()
  .then(renderCategoriesCard)
  .catch(erorrQuery);

function onClickCategory(event) {
  if (event.target.nodeName !== 'BUTTON') {
    return;
  }
  if (event.target.classList !== 'categories__btn--active') {
    button.classList.remove('categories__btn--active');
  } else {
    button.classList.add('categories__btn--active');
  }
  const searchCategory = event.target.textContent;
  const nameCategory = searchCategory.trim();
  updateTitle(nameCategory);

  newsApiBooksService
    .getBooksByCategory(nameCategory)
    .then(renderCardListByCategory)
    .catch(erorrQuery);
}

function renderCategoriesCard(data) {
  const listMarkup = data
    .map(
      ({ list_name }) =>
        `<li class = "categories__item">
      <button
        class="categories__btn">
      ${list_name}
      </button>`
    )
    .join('');

  containerEl.innerHTML = listMarkup;
}

function erorrQuery() {
  Notify.failure(
    'Sorry, there are no books matching your search query. Please try again.'
  );
}
