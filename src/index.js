import dishCardsTpl from './templates/card.hbs';
import menu from '../menu.json';




const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const refs = {
    container: document.querySelector('.js-menu'),
    changeBtn: document.querySelector('#theme-switch-toggle'),
    body: document.querySelector('body')
};

refs.changeBtn.addEventListener('change', onChangeBtn);

function onChangeBtn() {
  refs.body.classList.toggle('dark-theme');
  localStorage.setItem('theme', Theme.DARK);
}



function makeGalleryMarkup() {
    // return galleryObject
    //   .map(dishCardsTpl)
    //   .join('');
  return dishCardsTpl(menu);
}

refs.container.insertAdjacentHTML('beforeend', makeGalleryMarkup(menu));