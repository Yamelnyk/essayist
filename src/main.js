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
  spaceBetween: 6,
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
  const accordionInstances = [];

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
    accordionInstances.push(accordionInstance);
  });
  const switchButtons = document.querySelectorAll('.faq-item-btn');
  switchButtons.forEach(button => {
    button.addEventListener('click', () => {
      accordionInstances.forEach(instance => {
        instance.closeAll();
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

/* ------------- INTRODUCTION-TAB ----------- */

document.querySelectorAll('.introduction-item-btn').forEach(button => {
  button.addEventListener('click', () => {
    document
      .querySelectorAll('.introduction-item-btn')
      .forEach(btn => btn.classList.remove('active'));
    document
      .querySelectorAll('.picture-container')
      .forEach(content => content.classList.remove('active'));

    document.getElementById(button.dataset.target).classList.add('active');
    button.classList.add('active');
  });
});

/* ------------- SUBSCRIBE ----------- */

document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('.subscribe-form');
  const container = document.querySelector('.subscribe-section-container');

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    const emailInput = document.querySelector('.email-area-input');
    const emailValue = emailInput.value.trim();

    if (!emailValue) return;

    container.innerHTML = `
        <h2 class="subscribe-title section-title">
          Great! <br />
          Thank you!
        </h2>
        <div class="subscribe-form">
          <p class="subscribed-text">
            You have successfully subscribed to the latest updates and news
            from our app and be the first to know about all the news.
          </p>
          <button class="subscribe-button back-btn" type="button">
            Back
          </button>
        </div>
      `;

    document.querySelector('.back-btn').addEventListener('click', function () {
      location.reload();
    });
  });
});
/* ------------- OBSERVER SECTIONS ----------- */

document.addEventListener('DOMContentLoaded', function () {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-link');

  function updateActiveNav() {
    let scrollPos = window.scrollY + window.innerHeight / 3;
    let activeSection = null;

    sections.forEach(section => {
      if (
        section.id &&
        section.offsetTop < scrollPos &&
        section.offsetTop + section.offsetHeight > scrollPos
      ) {
        activeSection = section.id;
      }
    });

    navLinks.forEach(link => link.classList.remove('current'));

    if (activeSection) {
      const activeLink = document.querySelector(
        `.nav-link[href="#${activeSection}"]`
      );
      if (activeLink) {
        activeLink.classList.add('current');
      }
    }
  }

  window.addEventListener('scroll', updateActiveNav);

  updateActiveNav();
});
