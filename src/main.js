import "./style.css";

const mobileMenuBtn = document.querySelector(".mobile-menu-open-btn");
const mobileMenuCloseBtn = document.querySelector(".mobile-menu-close-btn");
const mobileMenu = document.querySelector(".mobile-menu");

mobileMenuBtn.addEventListener("click", () => {
  mobileMenu.classList.add("is-open");
  document.body.style.overflow = "hidden";
});

mobileMenuCloseBtn.addEventListener("click", () => {
  mobileMenu.classList.remove("is-open");
  document.body.style.overflow = "auto";
});
