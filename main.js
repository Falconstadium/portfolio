window.addEventListener('scroll', () => {
  let header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 0);
});

//Dark mode
const sunIcon = document.getElementById('sun-icon');
const moonIcon = document.getElementById('moon-icon');

const lightMode = () => {
  moonIcon.style.display = 'block';
  sunIcon.style.display = 'none';
  const currentTheme = localStorage.getItem('theme') || 'light';
  if (currentTheme === 'dark') {
    document.body.classList.remove('dark-theme');
    localStorage.setItem('theme', 'light');
  } else {
    document.body.classList.add('dark-theme');
    localStorage.setItem('theme', 'dark');
  }
};

const darkMode = () => {
  moonIcon.style.display = 'none';
  sunIcon.style.display = 'block';
  const currentTheme = localStorage.getItem('theme') || 'light';
  if (currentTheme === 'dark') {
    document.body.classList.remove('dark-theme');
    localStorage.setItem('theme', 'light');
  } else {
    document.body.classList.add('dark-theme');
    localStorage.setItem('theme', 'dark');
  }
};

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

setTimeout(() => {
  spinner.classList.add('hide');
}, 3000);
