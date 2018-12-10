import createElement from './createElement';
import createPageElements from './createPageElements';
import controlSize from './controlSize';
import { handleSwipeStart, handlePageChange } from './eventController';

function showContent(data) {
  const main = document.querySelector('.main');
  const section = document.createElement('section');
  const content = document.createElement('div');
  const slider = document.createElement('div');
  const pagination = document.createElement('div');

  section.classList.add('main-content');
  content.classList.add('content');
  slider.classList.add('content-slider', '-animated');
  slider.style.left = '0';
  pagination.classList.add('pagination');

  data.items.forEach(elem => slider.appendChild(createElement(elem)));

  content.appendChild(slider);
  section.appendChild(content);
  main.appendChild(section);

  const pages = createPageElements();
  pagination.appendChild(pages);
  section.appendChild(pagination);

  content.addEventListener('mousedown', handleSwipeStart, false);
  content.addEventListener('touchstart', handleSwipeStart, false);
  pages.addEventListener('click', handlePageChange, false);
  controlSize.previousWidth = document.querySelector('.content').clientWidth;
  window.addEventListener('resize', controlSize, false);
}

export default showContent;
