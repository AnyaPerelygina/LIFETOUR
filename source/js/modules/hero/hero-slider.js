import Swiper from '../../vendor/swiper';

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
  });

  return swiper;
};

export {initSwiperHero};
