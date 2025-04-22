import Swiper from 'swiper';
import { Autoplay } from 'swiper/modules';
import 'swiper/css/bundle';
import { observeSwiperAutoplay } from './observer.js';

// Swiper.use([Autoplay]);

const featuresSwiperEl = document.querySelector('.features-swiper-container');

let featuresSwiper;

featuresSwiper = new Swiper('.features-swiper-container', {
  direction: 'horizontal',
  loop: true,
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

// observeSwiperAutoplay(featuresSwiper, featuresSwiperEl);
