import Swiper from 'swiper';
import 'swiper/css/bundle';

const featuresSwiperEl = document.querySelector('.features-swiper-container');

let featuresSwiper;

featuresSwiper = new Swiper('.features-swiper-container', {
  direction: 'horizontal',
  loop: false,
  grabCursor: true,
  slidesPerView: 1,
  initialSlide: 0,
  spaceBetween: 20,
  grabCursor: true,
  allowTouchMove: true,
  speed: 500,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    1440: {
      loop: false,
      initialSlide: 0,
      slidesPerView: 4,
    },
  },
  on: {
    init: () => {
      document
        .querySelector('.features-swiper-container')
        .classList.add('show');
    },
    slideChange: () => {
      updateFeaturesArrows();
    },
  },
});

updateFeaturesArrows();

function updateFeaturesArrows() {
  if (featuresSwiper) {
    featuresLeftArrow.disabled = featuresSwiper.isBeginning;
    featuresRightArrow.disabled = featuresSwiper.isEnd;
  }
}

featuresLeftArrow.addEventListener('click', () => {
  featuresSwiper.slidePrev();
});

featuresRightArrow.addEventListener('click', () => {
  featuresSwiper.slideNext();
});
