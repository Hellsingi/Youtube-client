import createPageItems from './createPageElements';
import { handlePageChange } from './eventController';

function controlFormat() {
  const currentWidth = document.querySelector('.content').clientWidth;

  if (controlFormat.previousWidth !== currentWidth) {
    const pagination = document.querySelector('.pagination');
    let pages = document.querySelector('.pages');

    pagination.removeChild(pages);
    pages = createPageItems();
    pagination.appendChild(pages);
    pages.addEventListener('click', handlePageChange, false);
    controlFormat.previousWidth = currentWidth;
  }
}

export default controlFormat;
