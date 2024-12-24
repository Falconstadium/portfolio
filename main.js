window.addEventListener('scroll', () => {
  let header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 0);
});

//Dark mode
document.addEventListener('DOMContentLoaded', function () {
  const toggleSwitch = document.querySelector('.switch');

  function detectColorScheme() {
    let theme = 'light';

    //local storage is used to override OS theme settings
    if (localStorage.getItem('theme')) {
      if (localStorage.getItem('theme') == 'dark') {
        theme = 'dark';
      }
    } else if (!window.matchMedia) {
      return false;
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      theme = 'dark';
    }

    if (theme == 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
    }
  }
  detectColorScheme();

  function switchTheme(e) {
    if (e.target.checked) {
      localStorage.setItem('theme', 'dark');
      document.documentElement.setAttribute('data-theme', 'dark');
      toggleSwitch.checked = true;
    } else {
      localStorage.setItem('theme', 'light');
      document.documentElement.setAttribute('data-theme', 'light');
      toggleSwitch.checked = false;
    }
  }

  toggleSwitch.addEventListener('change', switchTheme, false);

  if (document.documentElement.getAttribute('data-theme') == 'dark') {
    toggleSwitch.checked = true;
  }
});

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
  main.style.animationDuration = '1s';
}, 2000);
