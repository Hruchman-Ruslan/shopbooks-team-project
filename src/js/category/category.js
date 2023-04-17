import NewsApiBooksService from '../api-service/api-service';
import { Notify } from 'notiflix';

const containerEl = document.querySelector('.categories__container');
const containerGalleryList = document.querySelector('.gallery__list');
const button = document.querySelector('.categories__btn');

const newsApiBooksService = new NewsApiBooksService();

containerEl.addEventListener('click', onClickCategory);

newsApiBooksService
  .getCategoryList()
  .then(renderCategoriesCard)
  .catch(erorrQuery);

function onClickCategory(event) {
  const title = document.querySelector('.gallery__title');
  if (event.target.nodeName !== 'BUTTON') {
    return;
  }

  const searchCategory = event.target.textContent;
  const nameCategory = searchCategory.trim();
  const words = nameCategory.split(' ').filter(Boolean);

  const lastWord = words[words.length - 1];

  let str = words.slice(0, words.length - 1).join(' ');

  const result = `<h1 class="gallery__title">
    ${str} <span class="gallery__title--span">${lastWord}</span>
    </h1>`;

  title.innerHTML = result;

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

function renderCardListByCategory(data) {
  console.log(data);

  const markupCard = data
    .map(
      ({ book_image, title, author, _id }) =>
        `<li class="card-container__item">
        <button type="button" data-id="${_id}" class="card-container__link">
          <div class="card-container__thumb">
            <img
              src="${book_image}"
              alt="book-image"
              loading="lazy"
              width="180px"
              height="256px"
              class="card-container__image"
            />
            <div class="overlay">
              <p class="overlay__text">quick view</p>
            </div>
          </div>
          <div class="desk">
            <h3 class="desk__subtitle">${title}</h3>
            <p class="desk__text">${author}</p>
          </div>
        </button>
      </li>`
    )
    .join('');
  containerGalleryList.innerHTML = markupCard;
}

function erorrQuery() {
  Notify.failure(
    'Sorry, there are no books matching your search query. Please try again.'
  );
}
