import Swiper from '../../vendor/swiper';

const createEducationSlider = () => {
  // eslint-disable-next-line no-new
  new Swiper('.swiper-education', {
    navigation: {
      nextEl: '.education__swiper-next',
      prevEl: '.education__swiper-prev',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        slidesPerColumn: 1,
      },
      768: {
        slidesPerView: 3,
        slidesPerColumn: 1,
        spaceBetween: 30,
      },
      1200: {
        slidesPerView: 4,
        slidesPerColumn: 1,
        spaceBetween: 30,
      },
    },
  });
};

export {createEducationSlider};
