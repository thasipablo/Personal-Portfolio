const projectsList = [
  {
    name: 'Keeping track of hundreds of components',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.",
    featuredImage:
      'https://img.freepik.com/free-photo/technology-particle-dots-5g-digital-corporate-background_53876-102624.jpg',
    technologies: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    linkToLiveVersion: 'https://thasipablo.github.io',
    linkToSource: 'https://github.com/thasipablo/thasipablo.github.io',
  },
  {
    name: 'Recipe Finder',
    description: 'Discover a world of culinary delights with our Recipe Finder. Simply input your available ingredients and dietary preferences, and instantly explore a vast collection of mouthwatering recipes. From appetizers to desserts, this tool will help you find the perfect dish for any occasion, making cooking a breeze and satisfying your taste buds like never before.',
    featuredImage: 'https://hips.hearstapps.com/hmg-prod/images/tamales1-1665593211.jpg',
    technologies: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    linkToLiveVersion: 'https://thasipablo.github.io',
    linkToSource: 'https://github.com/thasipablo/thasipablo.github.io',
  },
  {
    name: 'Movie Recommendation',
    description: "Dive into the world of cinema with our Movie Recommendation platform. Based on your personal preferences and viewing history, we curate a tailored list of films you're likely to enjoy. Explore new genres, discover hidden gems, and enhance your movie-watching experience with our expertly crafted recommendations.",
    featuredImage: 'https://static.vecteezy.com/system/resources/previews/005/502/524/original/cinema-background-concept-movie-theater-object-on-red-curtain-background-and-movie-time-with-electric-bulbs-frame-illustration-free-vector.jpg',
    technologies: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    linkToLiveVersion: 'https://thasipablo.github.io',
    linkToSource: 'https://github.com/thasipablo/thasipablo.github.io',
  },
  {
    name: 'Budget Tracker',
    description: 'Take control of your finances with our intuitive Budget Tracker. Monitor your income and expenses, set budget limits for various categories, and gain valuable insights into your spending habits. Visualize your financial health, receive alerts, and make informed decisions to achieve your financial goals and live a more financially secure life.',
    featuredImage: 'https://cfoshare.org/wp-content/uploads/2021/01/AdobeStock_227546975-scaled.jpeg',
    technologies: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    linkToLiveVersion: 'https://thasipablo.github.io',
    linkToSource: 'https://github.com/thasipablo/thasipablo.github.io',
  },
  {
    name: 'Task Manager',
    description: "Stay organized and boost your productivity with our feature-rich Task Manager. Create and manage tasks, set deadlines, assign priorities, and track progress all in one place. With intuitive features like reminders and notifications, you'll never miss a deadline or forget an important task again.",
    featuredImage: 'https://toggl.com/blog/wp-content/uploads/2018/09/project-task-list.jpg',
    technologies: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    linkToLiveVersion: 'https://thasipablo.github.io',
    linkToSource: 'https://github.com/thasipablo/thasipablo.github.io',
  },
  {
    name: 'Weather App',
    description: 'Stay one step ahead of the weather with our comprehensive Weather App. Get real-time updates on temperature, humidity, wind speed, and weather conditions for your location or any place worldwide. Plan your day, prepare for outdoor activities, and make informed decisions with accurate and reliable weather forecasts at your fingertips.',
    featuredImage: 'https://assets.telegraphindia.com/telegraph/261cacab-fa60-4bf2-a8e0-e76bf5ae643e.jpg',
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
const popupWindow = document.querySelector('.project-card-popup');
const popupWindowContent = document.createElement('article');
popupWindowContent.classList.add('project-popup-content');
popupWindowContent.innerHTML = `
  <div class="popup-header">
    <button class="exit-btn">
    </button>
    <img src="" alt="project card image" class="popup-img">
    </div>
    <div class="popup-body">
    <h3 class="project-popup__title">Keeping track of hundreds of
      components</h3>
    <ul class="card-btns">
      <li class="card-btn">Ruby on Rails</li>
      <li class="card-btn">CSS</li>
      <li class="card-btn">Javascript</li>
      <li class="card-btn">HTML</li>
    </ul>
    <div class="project-description"></div>
    <div class="project-popup-btns">
      <div class="project-popup-btn">
        <a href="#">See live</a>
        <img src="images/icon-export.png" alt="export icon">
      </div>
      <div class="project-popup-btn">
        <a href="#">See source</a>
        <img src="images/icon-github.png" alt="github icon">
      </div>
    </div>
  </div>
`;
popupWindow.appendChild(popupWindowContent);

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

const popupExitBtn = document.querySelector('.project-card-popup .exit-btn');
const projectCards = document.querySelectorAll('.work-card');

const populatePopupData = (project) => {
  popupWindow.querySelector('.project-popup__title').innerHTML = project.name;
  popupWindow.querySelector('.project-description').innerHTML = project.description;
  popupWindow.querySelector('.popup-img').src = project.featuredImage;
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

// validate form
const emailInput = document.querySelector('#email');
const formTag = document.querySelector('.contact-form');
const errorMsg = document.querySelector('.error-msg');

formTag.addEventListener('submit', (event) => {
  if (emailInput.value !== emailInput.value.toLowerCase()) {
    event.preventDefault();
    errorMsg.innerHTML = 'Email must be lowercase';
  }
});
