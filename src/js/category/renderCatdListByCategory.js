const containerGalleryList = document.querySelector('.gallery__list');

export default function renderCardListByCategory(data) {
  if (data.length === 0) {
    Notify.failure('Oops, there is no books found in this category');
  }

  const markupCard = data
    .map(
      ({ book_image, title, author, _id }) =>
        `<li class="a ">
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
