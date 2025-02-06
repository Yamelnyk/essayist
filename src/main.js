/* -------------MOBAIL_MENU----------- */

const mobileMenuBtn = document.querySelector('.mobile-menu-open-btn');
const mobileMenuCloseBtn = document.querySelector('.mobile-menu-close-btn');
const mobileMenu = document.querySelector('.mobile-menu');

mobileMenuBtn.addEventListener('click', () => {
  mobileMenu.classList.add('is-open');
  document.body.style.overflow = 'hidden';
});

mobileMenuCloseBtn.addEventListener('click', () => {
  mobileMenu.classList.remove('is-open');
  document.body.style.overflow = 'auto';
});

/* --------- Reviews ----------- */
document.addEventListener('click', event => {
  if (event.target.classList.contains('myBtn')) {
    const reviewBlock = event.target.closest('.reviews-block-text');
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
});
