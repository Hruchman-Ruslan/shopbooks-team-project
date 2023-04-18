const title = document.querySelector('.gallery__title');

export default function updateTitle(nameCategory) {

    const words = nameCategory.split(' ').filter(Boolean);
    const lastWord = words[words.length - 1];
    let str = words.slice(0, words.length - 1).join(' ');
    const result = `<h1 class="gallery__title">
      ${str} <span class="gallery__title--span">${lastWord}</span>
    </h1>`;
    const title = document.querySelector('.gallery__title');
    title.innerHTML = result;
  }