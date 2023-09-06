import Swiper from '../../vendor/swiper';

const createReviewsSlider = () => {
  let swiper = new Swiper('.swiper-reviews', {
    slidesPerView: 1,
    allowTouchMove: true,
    navigation: {
      nextEl: '.reviews__swiper-next',
      prevEl: '.reviews__swiper-prev',
    },
    breakpoints: {
      1200: {
        centeredSlides: true,
        slidesPerView: 'auto',
        spaceBetween: 30,
      },
      768: {
        slidesPerView: 'auto',
        spaceBetween: 30,
        initialSlide: 0,
      },
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
    },
  });

  return swiper;
};

export {createReviewsSlider};
