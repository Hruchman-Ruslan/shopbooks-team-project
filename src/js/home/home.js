import NewsApiBooksService from '../api-service/api-service';
import { Notify } from 'notiflix';
import renderModal from '../pop-up/pop-up';
import renderCardListByCategory from '../category/renderCatdListByCategory';
import updateTitle from '../category/updateTitle';
import renderBestSellersBooks from './renderBestSellersBooks';


const refs = {
  container: document.querySelector('.gallery__list'),
};
const newsApiBooksService = new NewsApiBooksService();
newsApiBooksService.getTopBooks().then(renderBestSellersBooks).catch(onError);
refs.container.addEventListener('click', onClick);

function onError() {
  Notify.failure('an error occurred, please try again later');
}

function onClick(e) {

  if (e.target.nodeName === 'A') {
    const searchCategotyByLink = e.target.textContent;
    const nameCategory = searchCategotyByLink.trim(); 
    newsApiBooksService.getBooksByCategory(nameCategory).then(renderCardListByCategory, updateTitle(nameCategory)).catch(onError);
  } 
  else if (e.target.nodeName === 'BUTTON') {
    if (e.target.classList.contains('card-container__link')) {
      const searchCardById = e.target.dataset.id;
      renderModal(searchCardById);
      return;
    }
    const searchCategotyByBtn =
      e.target.previousElementSibling.previousElementSibling.textContent;
    const nameCategory = searchCategotyByBtn.trim(); 
    newsApiBooksService.getBooksByCategory(nameCategory).then(renderCardListByCategory,updateTitle(nameCategory)).catch(onError);
    scrollPage();
  }
}

function scrollPage(){
  window.scrollTo(0, 0);
}