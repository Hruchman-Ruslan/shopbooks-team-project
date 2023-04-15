import NewsApiBooksService from '../api-service/api-service';
import { Notify } from 'notiflix';
// import bestSellersCardTpl from '../templates/bestSellersCard.hbs'

const refs = {
    container: document.querySelector('.gallery__list'),

}

const newsApiBooksService =  new NewsApiBooksService();
console.log(newsApiBooksService);

newsApiBooksService.GetTopBooks()
.then(renderBestSellersBooks)
.catch(onError);


function renderBestSellersBooks(data){

    if (data.length === 0){
        Notify.failure('Oops, there is no books according to your request');
    }

    const markup = data.map(({list_name, books}) =>
    `<li class="gallery__item">
    <a class="gallery__link" href="#">${list_name}</a>
    <ul class="card-container">
    ${books.map(({ book_image, title, author }) =>
    `<li class="card-container__item">
    <button type="button" class="card-container__link" href="#">
        <div class="card-container__thumb">
        <img src="${book_image}" alt="book-image" loading="lazy" width="180px" height="256px" class="card-container__image" />
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
).join('')}
</ul>
<button class="gallery__btn" type="button">see more</button>
</li>`).join('');

    refs.container.innerHTML= markup;
   }

function onError(){
    Notify.failure('an error occurred, please try again later');
}   

const seeMore = document.querySelector('.gallery__list');
console.log(seeMore);
seeMore.addEventListener('click', onClick)

function onClick(e){

    if (e.target.nodeName === "A") {
        const searchCategotyByLink = e.target.textContent;
           console.log(searchCategotyByLink); 
        } else 
           
    
    if (e.target.nodeName === "IMG") {
        const searchCard = e.target.parentNode.nextElementSibling.firstElementChild.textContent;
           console.log(searchCard); 
           } else 

    if (e.target.nodeName === "BUTTON") {
        const searchCategotyByBtn = e.target.previousElementSibling.previousElementSibling.textContent;
        console.log(searchCategotyByBtn);   
      }
        

}