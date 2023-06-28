const projectsList = [
  {
    name: 'Keeping track of hundreds of components',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.",
    featuredImage: 'https://img.freepik.com/free-photo/technology-particle-dots-5g-digital-corporate-background_53876-102624.jpg',
    technologies: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    linkToLiveVersion: 'https://thasipablo.github.io',
    linkToSource: 'https://github.com/thasipablo/thasipablo.github.io',
  },
  {
    name: 'Keeping track of hundreds of components...',
    description: "AAAAAAAALorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.",
    featuredImage: 'https://img.freepik.com/free-photo/technology-particle-dots-5g-digital-corporate-background_53876-102624.jpg',
    technologies: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    linkToLiveVersion: 'https://thasipablo.github.io',
    linkToSource: 'https://github.com/thasipablo/thasipablo.github.io',
  },
  {
    name: 'Keeping track of hundreds of components and ...',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.",
    featuredImage: 'https://img.freepik.com/free-photo/technology-particle-dots-5g-digital-corporate-background_53876-102624.jpg',
    technologies: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    linkToLiveVersion: 'https://thasipablo.github.io',
    linkToSource: 'https://github.com/thasipablo/thasipablo.github.io',
  },
];

// get needed tags for the mobile menu
const hamburgerMenuBtn = document.querySelector('.hamburger-menu-btn');
const mobileMenu = document.querySelector('.mobile-menu-wrapper');
const mobileMenuExit = document.querySelector('.menu-enable-icon');
const mobileMenuLinks = document.querySelectorAll('.mobile .navbar-link-item');

const toggleMobileMenu = () => {
  mobileMenu.classList.toggle('hide');
};

hamburgerMenuBtn.addEventListener('click', toggleMobileMenu);
mobileMenuExit.addEventListener('click', toggleMobileMenu);

mobileMenuLinks.forEach((link) => {
  link.addEventListener('click', toggleMobileMenu);
});

// project card details popup
const projectContainerTag = document.querySelector('.cards-container');

projectsList.forEach((project) => {
  const projectCard = document.createElement('article');
  projectCard.classList.add('work-card');
  projectCard.innerHTML = `
    <div class="work-card__head"></div>
    <div class="work-card__body">
      <h3 class="card-title">${project.name}</h3>
      <ul class="card-btns">
        <li class="card-btn">${project.technologies[0]}</li>
        <li class="card-btn">${project.technologies[1]}</li>
        <li class="card-btn">${project.technologies[2]}</li>
        <li class="card-btn">${project.technologies[3]}</li>
      </ul>
      <button class="cta-btn">See project</button>
    </div>
  `;
  projectContainerTag.appendChild(projectCard);
});

const popupWindow = document.querySelector('.project-card-popup');
const popupExitBtn = document.querySelector('.project-card-popup .exit-btn');
const projectCards = document.querySelectorAll('.work-card');

const populatePopupData = (project) => {
  popupWindow.querySelector('.project-popup__title').innerHTML = project.name;
  popupWindow.querySelector('.project-description').innerHTML = project.description;
};

const togglePopupWindow = (event) => {
  const projectCard = event.target.closest('.work-card');
  if (projectCard) {
    const projectName = projectCard.querySelector('.card-title').textContent;
    const project = projectsList.find((proj) => proj.name === projectName);
    populatePopupData(project);
    popupWindow.classList.toggle('hide');
  }
};

popupExitBtn.addEventListener('click', () => {
  popupWindow.classList.toggle('hide');
});

projectCards.forEach((card) => {
  card.querySelector('.cta-btn').addEventListener('click', togglePopupWindow);
});
