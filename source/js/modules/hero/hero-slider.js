import Swiper from '../../vendor/swiper';

const initSwiperHero = () => {
  let swiper = new Swiper('.swiper-hero', {
    loop: true,
    allowTouchMove: true,
    pagination: {
      el: '.hero__pagination',
      type: 'bullets',
      clickable: true,
    },
  });

  return swiper;
};

export {initSwiperHero};
