import Swiper, { Navigation } from 'swiper';

export const swiper = new Swiper('.swiper', {
  modules: [Navigation],
  direction: 'vertical',
  rewind: true,
  slidesPerView: 4,
  spaceBetween: 20,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    768: {
      slidesPerView: 6,
    },
  },
});
