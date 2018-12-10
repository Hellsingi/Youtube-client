import createPageItems from './createPageElements';
import { handlePageChange } from './eventController';

function controlSize() {
  const currentWidth = document.querySelector('.content').clientWidth;

  if (controlSize.previousWidth !== currentWidth) {
    const pagination = document.querySelector('.pagination');
    let pages = document.querySelector('.pages');

    pagination.removeChild(pages);
    pages = createPageItems();
    pagination.appendChild(pages);
    pages.addEventListener('click', handlePageChange, false);
    controlSize.previousWidth = currentWidth;
  }
}

export default controlSize;
