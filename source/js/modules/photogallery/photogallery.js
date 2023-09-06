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
        allowTouchMove: true,
      },
      768: {
        slidesPerView: 'auto',
        spaceBetween: 5.19,
        allowTouchMove: true,
      },
      1200: {
        slidesPerView: 'auto',
        spaceBetween: 5.19,
        allowTouchMove: false,
      },
    },
  });

  return swiper;
};

export {createPhotogallerySlider};
