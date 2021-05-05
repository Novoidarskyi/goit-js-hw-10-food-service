import menu from '../data/menu.json';
import template from '../templates/menuTemplate.hbs';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const refs = {
  menuListRef: document.querySelector('.js-menu'),
  switchButton: document.querySelector('.theme-switch__toggle'),
  body: document.body,
};

const markup = menu.map(obj => template(obj));

refs.menuListRef.insertAdjacentHTML('beforeend', markup.join(''));
refs.switchButton.addEventListener('click', onChange);

refs.body.classList.add(
  localStorage.getItem('theme') === null
    ? Theme.LIGHT
    : localStorage.getItem('theme'),
);

refs.switchButton.checked = localStorage.getItem('theme') === Theme.DARK;

function onChange(e) {
  console.log(e.target.checked);
  if (e.target.checked) {
    refs.body.classList.remove(Theme.LIGHT);
    refs.body.classList.add(Theme.DARK);
    localStorage.setItem('theme', Theme.DARK);
  } else {
    refs.body.classList.remove(Theme.DARK);
    refs.body.classList.add(Theme.LIGHT);
    localStorage.setItem('theme', Theme.LIGHT);
  }
}
