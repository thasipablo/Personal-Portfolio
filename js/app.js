// get needed tags
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
