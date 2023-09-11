import Swiper from '../../vendor/swiper';
import {createVideo, showButton} from './videoplayer';

const initSwiperHero = () => {
  let swiper = new Swiper('.swiper-hero', {
    loop: true,
    pagination: {
      el: '.hero__pagination',
      type: 'bullets',
      centeredSlides: true,
      slidesPerView: 1,
      clickable: true,
    },
    breakpoints: {
      320: {
        allowTouchMove: true,
      },
      768: {
        allowTouchMove: true,
      },
      1200: {
        allowTouchMove: false,
      },
    },
    on: {
      slideChange() {
        if (document.querySelector('.video__wrapper iframe')) {
          document.querySelector('.video__wrapper iframe').remove();
          createVideo(document.querySelector('.video__wrapper'));
          showButton();
        }
      },
    },
  });

  return swiper;
};

export {initSwiperHero};
