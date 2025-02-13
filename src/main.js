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

const swiper = new Swiper('.swiper-container', {
  modules: [Mousewheel, Scrollbar],
  slidesPerView: 'auto',
  spaceBetween: 10,
  slideToClickedSlide: true,
  mousewheel: {
    invert: true,
  },
  freeMode: true,
  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true,
    // dragSize: 'auto', // Можливість тягнути скролбар
  },
});

/* ------------- FAQ-ACCORDION ----------- */

document.addEventListener('DOMContentLoaded', () => {
  const faqAccordions = document.querySelectorAll('.faq-accordion-container');
  let firstAccordionInstance = null;

  faqAccordions.forEach((container, index) => {
    const accordionInstance = new Accordion(container, {
      duration: 600,
      openOnInit: index === 0 ? [0] : [],

      elementClass: 'ac-faq',
      triggerClass: 'faq-ac-title',
      panelClass: 'ac-text',
      activeClass: 'is-active-faq',

      showMultiple: true,
    });
    if (index === 0) {
      firstAccordionInstance = accordionInstance;
    }
    const switchButtons = document.querySelectorAll('.faq-item-btn');
    switchButtons.forEach(button => {
      button.addEventListener('click', () => {
        if (firstAccordionInstance) {
          firstAccordionInstance.close(0);
        }
      });
    });
  });
});

/* ------------- FAQ-TAB ----------- */

document.querySelectorAll('.faq-item-btn').forEach(button => {
  button.addEventListener('click', () => {
    document
      .querySelectorAll('.faq-item-btn')
      .forEach(btn => btn.classList.remove('active'));
    document
      .querySelectorAll('.faq-accordion-container')
      .forEach(content => content.classList.remove('active'));

    document.getElementById(button.dataset.target).classList.add('active');
    button.classList.add('active');
  });
});
