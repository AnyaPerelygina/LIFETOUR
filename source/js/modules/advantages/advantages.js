const sliderAdvantages = document.querySelector('.advantages__swiper');
const buttonNext = document.querySelector('.advantages__swiper-next');
const buttonPrev = document.querySelector('.advantages__swiper-prev');
let mySwiper;

const createAdvantagesSlider = () => {
  if (sliderAdvantages && innerWidth > 1200) {
    // eslint-disable-next-line
    mySwiper = new Swiper(sliderAdvantages, {
      loop: true,
      navigation: {
        nextEl: buttonNext,
        prevEl: buttonPrev,
      },

      centeredSlides: true,
      breakpoints: {
        1200: {
          slidesPerView: 3.6,
          spaceBetween: 30,
        },
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
