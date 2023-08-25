import Swiper from '../../vendor/swiper';

const createReviewsSlider = () => {
  // eslint-disable-next-line no-new
  new Swiper('.swiper-reviews', {
    slidesPerView: 1,
    allowTouchMove: true,
    navigation: {
      nextEl: '.reviews__swiper-next',
      prevEl: '.reviews__swiper-prev',
    },
  });
};

export {createReviewsSlider};
