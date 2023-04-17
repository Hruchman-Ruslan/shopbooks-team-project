import { foundationItems } from './support-ukraine-arr';
// import { refs } from '../refs';

const refs = {
  foundationList: document.querySelector('.swiper-wrapper'),
};

function makeFoundationList({ img1x, img2x, title, url }, index) {
  return `<div class="support__ukraine-item swiper-slide">
            <div class="support__ukraine-number">${index}</div>
            <a
              class "support__ukraine-link"
              href="${url}"
              target="_blank"
              rel="noopener noreferrer"
            >
              <picture class="support__ukraine-logo">
                <source
                  srcset="
                    ${img1x} 1x,
                    ${img2x} 2x
                  "
                  type="image/png"
                />

                <img
                   class="support__ukraine-img" 
                   src="${img1x}"
                   alt="${title}"
                  height="32"
                  loading="lazy"
                />
              </picture>
            </a>
          </div>`;
}

const markup = foundationItems
  .map((el, index) => {
    let number = (index + 1).toString().padStart(2, '0');
    return makeFoundationList(el, number);
  })
  .join('');

refs.foundationList.innerHTML += markup;
