const fullName = document.querySelector('[data-i18]');

let translatedLang = {
  en: {
    frontend: 'Frontend',
    dev: 'Web Developer.',
    identify_strong: 'Frontend',
    identify_name: ' YASSIR ATERTA 🖐🏻.',
    identify_hello: "Hi, I'm",
    identify_enth: 'A passionate',
    identify_final_exp: 'Web Developer based in Agadir, Morocco.📍',
    stack: 'Tech Stack',
    about_title: 'About me :',
    about_firstparag:
      "Hey, my name is Yassir, and I'm a Frontend Developer. I am enthusiastic and ambitious. I understand the significance of teamwork, problem-solving abilities, passion for learning, and ability to connect with others.",
    about_secondparag:
      'My main stack currently is React in combination with Tailwind CSS and TypeScript.',
    projects_title: 'Projects :',
    risat:
      "I always wanted a platform that combines a lot of tools, and uses them every day that's why I created this website.",
    dentalab:
      'DENTALAB is a landing page for a dentist to introduce its lab and let people know about it, The page welcomes visitors and highlighting it as the best place to make teeth look great, with lots of services.',
    gemini: 'This is a clone of Google Gemini.',
    salla:
      'Salla is an e-commerce website, in this project I used nextjs, this is the first time I have worked with next, I also used shadcn-ui and context API.',
    visit: 'Click here to Visit',
    contact_title: 'get in touch',
    contact_description: "Don't hesitate to contact me! 👇",
    footer: 'All rights reserved',
  },

  fr: {
    identify_title: 'Développeur Web Frontend.',
    identify_hello: 'Salut, je suis',
    identify_name: ' YASSIR ATERTA 🖐🏻.',
    identify_strong: 'Frontend',
    identify_enth: 'un passionné',
    identify_final_exp: 'Développeur Web basé à Agadir, Maroc.📍',
    stack: 'Stack Tech',
    about_title: 'À propos :',
    about_firstparag:
      'Bonjour, je m’appelle Yassir et je suis développeur Frontend. Je suis enthousiaste et ambitieux. Je comprends l’importance du travail d’équipe, des capacités de résolution de problèmes, de la passion pour l’apprentissage et de la capacité à établir des liens avec les autres.',
    about_secondparag:
      'Ma pile principale est actuellement React en combinaison avec Tailwind CSS et TypeScript.',
    projects_title: 'Projets :',
    risat:
      'J’ai toujours voulu une plateforme qui combine beaucoup d’outils, et les utilise tous les jours c’est pourquoi j’ai créé ce site.',
    dentalab:
      'DENTALAB est une page de destination pour un dentiste pour présenter son laboratoire et faire connaître aux gens, La page accueille les visiteurs et met en évidence comme le meilleur endroit pour faire des dents look grand, avec de nombreux services.',
    gemini: 'c’est un clone pour google Gemini.',
    salla:
      'Salla est un site e-commerce, dans ce projet j’ai utilisé nextjs, c’est la première fois que je travaille avec next, j’ai aussi utilisé shadcn-ui et context API.',
    visit: 'Cliquer ici pour Visiter',
    contact_title: 'prendre contact',
    contact_description: 'N’hésitez pas à me contacter! 👇',
    footer: 'Tous droits réservés',
  },
};

const languageSelector = document.querySelector('select');

languageSelector.addEventListener('change', (e) => {
  setLanguage(e.target.value);
  localStorage.setItem('lang', e.target.value);
});

document.addEventListener('DOMContentLoaded', () => {
  const language = localStorage.getItem('lang') || 'en';
  setLanguage(language);
  const options = languageSelector.querySelectorAll('option');
  options.forEach((option) => {
    option.value === language
      ? option.setAttribute('selected', '')
      : option.removeAttribute('selected');
  });
});

const setLanguage = (language) => {
  const elements = document.querySelectorAll('[data-i18]');
  elements.forEach((element) => {
    const translationKey = element.getAttribute('data-i18');
    element.textContent = translatedLang[language][translationKey];
  });
};
