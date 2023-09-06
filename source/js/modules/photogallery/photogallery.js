import Swiper from '../../vendor/swiper';

const createPhotogallerySlider = () => {
  let swiper = new Swiper('.swiper-photogallery', {
    slidesPerView: 'auto',
    navigation: {
      nextEl: '.photogallery__swiper-next',
      prevEl: '.photogallery__swiper-prev',
    },
    breakpoints: {
      320: {
        slidesPerView: 'auto',
        spaceBetween: 5.19,
      },
      768: {
        slidesPerView: 'auto',
        spaceBetween: 5.19,
      },
      1200: {
        slidesPerView: 'auto',
        spaceBetween: 5.19,
      },
    },
  });

  return swiper;
};

export {createPhotogallerySlider};
