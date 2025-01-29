import './style.css';

const mobileMenuBtn = document.querySelector('.mobile-menu-open-btn');
const mobileMenuCloseBtn = document.querySelector('.mobile-menu-close-btn');
const mobileMenu = document.querySelector('.mobile-menu');

function openMenu() {
  mobileMenu.classList.add('is-open');
  document.body.style.overflow = 'hidden';
}

function closeMenu() {
  mobileMenu.classList.remove('is-open');
  document.body.style.overflow = 'auto';
}

// Додаємо підтримку як `touchstart`, так і `click`
mobileMenuBtn.addEventListener('touchstart', openMenu);
mobileMenuBtn.addEventListener('click', openMenu);

mobileMenuCloseBtn.addEventListener('touchstart', closeMenu);
mobileMenuCloseBtn.addEventListener('click', closeMenu);
