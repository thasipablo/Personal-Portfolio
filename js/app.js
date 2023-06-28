// get needed tags for the mobile menu
const hamburgerMenuBtn = document.querySelector('.hamburger-menu-btn');
const mobileMenu = document.querySelector('.mobile-menu-wrapper');
const mobileMenuExit = document.querySelector('.menu-enable-icon');
const mobileMenuLinks = document.querySelectorAll(
  '.mobile .navbar-link-item',
);

const toggleMobileMenu = () => {
  mobileMenu.classList.toggle('hide');
};

hamburgerMenuBtn.addEventListener('click', toggleMobileMenu);
mobileMenuExit.addEventListener('click', toggleMobileMenu);

mobileMenuLinks.forEach((link) => {
  link.addEventListener('click', toggleMobileMenu);
});

// project card details popup
const popupWindow = document.querySelector('.project-card-popup');
const popupExitBtn = document.querySelector('.project-card-popup .exit-btn');
const projectCards = document.querySelectorAll('.work-card');

const togglePopupWindow = () => {
  popupWindow.classList.toggle('hide');
};

popupExitBtn.addEventListener('click', togglePopupWindow);

projectCards.forEach((card) => {
  card.addEventListener('click', togglePopupWindow);
});
