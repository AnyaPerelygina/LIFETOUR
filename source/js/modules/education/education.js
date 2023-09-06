import Swiper from '../../vendor/swiper';

const createEducationSlider = () => {
  let swiper = new Swiper('.swiper-education', {
    navigation: {
      nextEl: '.education__swiper-next',
      prevEl: '.education__swiper-prev',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        slidesPerColumn: 1,
        allowTouchMove: true,
      },
      768: {
        slidesPerView: 3,
        slidesPerColumn: 1,
        spaceBetween: 30,
        allowTouchMove: true,
      },
      1200: {
        slidesPerView: 4,
        slidesPerColumn: 1,
        spaceBetween: 30,
        allowTouchMove: false,
      },
    },
  });

  return swiper;
};

export {createEducationSlider};
