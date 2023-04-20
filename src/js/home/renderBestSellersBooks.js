import { Notify } from 'notiflix';

const refs = {
  container: document.querySelector('.gallery__list'),
};

export default function renderBestSellersBooks(data) {
    if (data.length === 0) {
      Notify.failure('Oops, there is no books according to your request');
    }
  
    const markup = data
      .map(
        ({ list_name, books }) =>
          `<li class="gallery__item">
      <a class="gallery__link" href="#">${list_name}</a>
      <ul class="card-container">
      ${books
        .map(
          ({ book_image, title, author, _id }) =>
            `<li class="card-container__item">
      <button type="button"  data-id="${_id}" class="card-container__link">
          <div class="card-container__thumb">
          <img src="${book_image}" alt="book-image" loading="lazy" width="180px" height="256px" class="card-container__image" />
          <div class="overlay">
              <p class="overlay__text">quick view</p>
          </div>
          </div>
          <div class="desk">
          <h3 class="desk__subtitle">${title ? title : 'N/A'}</h3>
          <p class="desk__text">${author ? author : 'N/A'}</p>
          </div>
      </button>
      </li>`
        )
        .join('')}
  </ul>
  <button class="gallery__btn button" type="button">see more</button>
  </li>`
      )
      .join('');
  
    refs.container.innerHTML = markup;
  }