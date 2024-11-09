window.addEventListener('scroll', () => {
  let header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 0);
});

//Dark mode
const sunIcon = document.getElementById('sun-icon');
const moonIcon = document.getElementById('moon-icon');

const lightMode = () => {
  document.body.classList.toggle('dark-theme');
  moonIcon.style.display = 'block';
  sunIcon.style.display = 'none';
  const isDark = document.body.classList.contains('dark-theme');
  localStorage.setItem('light', isDark);
};

const isLight = localStorage.getItem('light');
if (isLight === 'true') {
  document.body.classList.add('dark-theme');
}

const darkMode = () => {
  document.body.classList.toggle('dark-theme');
  moonIcon.style.display = 'none';
  sunIcon.style.display = 'block';
  const isDark = document.body.classList.contains('dark-theme');
  localStorage.setItem('dark', isDark);
};

const isDarkMode = localStorage.getItem('dark');
if (isDarkMode === 'true') {
  document.body.classList.add('dark-theme');
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

setTimeout(() => {
  spinner.classList.add('hide');
}, 3000);
