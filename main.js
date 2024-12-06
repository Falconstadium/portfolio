window.addEventListener('scroll', () => {
  let header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 0);
});

//Dark mode
const sunIcon = document.getElementById('sun-icon');
const moonIcon = document.getElementById('moon-icon');

const lightMode = () => {
  document.body.classList.remove('dark-theme');
  moonIcon.style.display = 'block';
  sunIcon.style.display = 'none';
  localStorage.setItem('dark', 'false');
};

const darkMode = () => {
  document.body.classList.add('dark-theme');
  moonIcon.style.display = 'none';
  sunIcon.style.display = 'block';
  localStorage.setItem('dark', 'true');
};

const isDarkMode = localStorage.getItem('dark') === 'true';
if (isDarkMode) {
  document.body.classList.add('dark-theme');
  moonIcon.style.display = 'none';
  sunIcon.style.display = 'block';
} else {
  document.body.classList.remove('dark-theme');
  moonIcon.style.display = 'block';
  sunIcon.style.display = 'none';
}

sunIcon.addEventListener('click', lightMode);
moonIcon.addEventListener('click', darkMode);

//arrow-haut
let showIcon = document.querySelector('.arrow_haut');
window.onscroll = function () {
  // console.log(this.scrollY);
  if (this.scrollY >= 500) {
    showIcon.classList.add('show');
  } else {
    showIcon.classList.remove('show');
  }
};

showIcon.onclick = function () {
  window.scrollTo({
    top: Object,
    behavior: 'smooth',
  });
};

//load
const spinner = document.querySelector('.preloader');
const main = document.querySelector('main');

setTimeout(() => {
  spinner.classList.add('hide');
  main.style.animationName = 'fade-in';
  main.style.animationDuration = '1.5s';
}, 2000);
