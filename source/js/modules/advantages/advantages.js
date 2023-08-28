const sliderAdvantages = document.querySelector('.advantages__swiper');
const buttonNext = document.querySelector('.advantages__swiper-next');
const buttonPrev = document.querySelector('.advantages__swiper-prev');
let mySwiper;

const createAdvantagesSlider = () => {
  if (sliderAdvantages && innerWidth > 1199) {
    // eslint-disable-next-line
    mySwiper = new Swiper(sliderAdvantages, {
      loop: true,
      slidesPerView: 3,
      spaceBetween: 30,
      allowTouchMove: true,
      init: true,
      navigation: {
        nextEl: buttonNext,
        prevEl: buttonPrev,
      },
    });
  }
};

const destroySwiperIfNeeded = () => {
  if (window.innerWidth <= 1200 && mySwiper) {
    mySwiper.destroy();
    document.querySelector('.advantages__swiper').style.display = 'block';
  } else if (mySwiper && !mySwiper.initialized) {
    createAdvantagesSlider();
  }
};

const handleResize = () => {
  destroySwiperIfNeeded();
};

window.addEventListener('resize', handleResize);


export {createAdvantagesSlider, handleResize};
