import Swiper from '../../vendor/swiper';

const createPhotogallerySlider = () => {
  // eslint-disable-next-line no-new
  new Swiper('.swiper-photogallery', {
    slidesPerView: 'auto',
    navigation: {
      nextEl: '.photogallery__swiper-next',
      prevEl: '.photogallery__swiper-prev',
    },
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 5.19,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 5.19,
      },
      1200: {
        slidesPerView: 5,
        spaceBetween: 5.19,
      },
    },
  });
};

export {createPhotogallerySlider};
