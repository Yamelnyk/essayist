import Swiper from 'swiper';
import 'swiper/css';
import { Mousewheel } from 'swiper/modules';
import { Scrollbar } from 'swiper/modules';

import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

/* -------------MOBAIL_MENU----------- */

const mobileMenuBtn = document.querySelector('.mobile-menu-open-btn');
const mobileMenuCloseBtn = document.querySelector('.mobile-menu-close-btn');
const mobileMenu = document.querySelector('.mobile-menu');
const menuLink = document.querySelectorAll('.menu-link-mobile');

mobileMenuBtn.addEventListener('click', () => {
  mobileMenu.classList.add('is-open');
  document.body.style.overflow = 'hidden';
});

mobileMenuCloseBtn.addEventListener('click', () => {
  mobileMenu.classList.remove('is-open');
  document.body.style.overflow = 'auto';
});

menuLink.forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('is-open');
    document.body.style.overflow = 'auto';
  });
});

/* --------- Reviews ----------- */

document.addEventListener('click', event => {
  if (event.target.classList.contains('myBtn')) {
    const reviewBlock = event.target.closest('.reviews-block-text');

    const reviewTitle = reviewBlock.querySelector(
      '.reviews-block-title'
    ).textContent;
    const fullReviewText = reviewBlock.querySelector('.text').textContent;

    if (window.innerWidth >= 768) {
      const modal = document.getElementById('reviewModal');

      document.querySelector('.modal-title').textContent = reviewTitle;
      document.querySelector('.modal-text').textContent =
        fullReviewText.replace('...', '');
      modal.style.display = 'flex';

      document.querySelector('.close').onclick = () =>
        (modal.style.display = 'none');
      window.onclick = e => {
        if (e.target === modal) {
          modal.style.display = 'none';
        }
      };
    } else {
      const dots = reviewBlock.querySelector('.dots');
      const moreText = reviewBlock.querySelector('.more');

      if (dots.style.display === 'none') {
        dots.style.display = 'inline';
        event.target.textContent = 'Read more';
        moreText.style.display = 'none';
      } else {
        dots.style.display = 'none';
        event.target.textContent = 'Collapse';
        moreText.style.display = 'inline';
      }
    }
  }
});

/* ------------- SWIPER ----------- */

// const swiper = new Swiper('.tab-list-swiper', {
//   modules: [Mousewheel],
//   speed: 800,
//   slidesPerView: 'auto',
//   spaceBetween: 8,
//   rewind: true,
//   slideToClickedSlide: true,
//   mousewheel: {
//     invert: true,
//   },
//   breakpoints: {
//     320: {
//       slidesPerView: 2.2,
//       spaceBetween: 4,
//       mousewheel: false,
//     },
//     400: {
//       slidesPerView: 2.5,
//       mousewheel: false,
//     },
//     421: {
//       slidesPerView: 2.7,
//       mousewheel: false,
//     },
//     500: {
//       slidesPerView: 3,
//       mousewheel: false,
//     },
//     600: {
//       slidesPerView: 4,
//     },
//   },
// });

const swiper = new Swiper('.swiper-container', {
  modules: [Mousewheel, Scrollbar],
  slidesPerView: 'auto', // Авто-ширина слайдів
  spaceBetween: 10, // Відстань між кнопками
  slideToClickedSlide: true, // Вільна прокрутка

  mousewheel: {
    invert: true,
  },
  freeMode: true,
  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true,
    // dragSize: 'auto', // Можливість тягнути скролбар
  },
  // breakpoints: {
  //   320: {
  //     slidesPerView: 2,
  //   },
  //   375: {
  //     slidesPerView: 2.5,
  //   },

  //   490: {
  //     slidesPerView: 3.5,
  //   },
  //   620: {
  //     slidesPerView: 4,
  //   },
  // },
});

const faqAccordion = document.querySelector('.faq-accordion-container');

/* ------------- FAQ-ACCORDION ----------- */

new Accordion(faqAccordion, {
  duration: 600,
  openOnInit: [0],

  elementClass: 'ac-faq',
  triggerClass: 'faq-ac-title',
  panelClass: 'ac-text',
  activeClass: 'is-active-faq',

  showMultiple: true,
});

// const swiperAboutme = new Swiper(swiperContainer, {
//   wrapperClass: 'swiper-wrapper-aboutme',
//   slideClass: 'swiper-slide-aboutme',
//   slideActiveClass: 'swiper-slide-active-aboutme',

//   direction: 'horizontal',
//   loop: true,
//   modules: [Navigation, Keyboard],

//   slidesPerView: 1,
//   spaceBetween: 0,
//   breakpoints: {
//     320: {
//       slidesPerView: 2,
//     },

//     768: {
//       slidesPerView: 3,
//     },

//     1440: {
//       slidesPerView: 6,
//     },
//   },

//   navigation: {
//     nextEl: '.swiper-button-next-aboutme',
//   },

//   nested: true,

//   keyboard: {
//     enabled: true,
//     onlyInViewport: false,
//   },
// });

// nextSlideBtnAMe.addEventListener('click', e => {
//   swiperAboutme.slideNext();
// });
