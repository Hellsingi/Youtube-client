import fetchUrl from './youTubeApiClient';
import createElement from './createElement';
import createPageItems from './createPageElements';

// change pagination after swipe event
function handlePageOnSwipe(slider, width) {
  const previous = document.querySelector('.page-item--active');
  const pages = document.querySelector('.pages');
  const currLeft = Math.abs(parseInt(slider.style.left, 10));
  const counter = Math.floor(currLeft / width);

  if (pages.children[counter]) {
    previous.classList.remove('page-item--active');
    pages.children[counter].classList.add('page-item--active');
    pages.style.left = `${140 - counter * 35}px`;
  }
}

// navigate to particular page after click on pagination
function handlePageChange(e) {
  const { target } = e;

  if (target.classList.contains('page-item')) {
    const slider = document.querySelector('.content-slider');
    const current = document.querySelector('.page-item--active');
    const width = document.querySelector('.content').clientWidth;
    const sliderLeft = parseInt(slider.style.left, 10);
    const currentPos = parseInt(current.innerText, 10);
    const targetPos = parseInt(target.innerText, 10);
    const left = sliderLeft - (targetPos - currentPos) * width;
    const counter = Math.floor(Math.abs(left) / width);

    current.classList.remove('page-item--active');
    target.classList.add('page-item--active');
    slider.style.left = `${left}px`;
    this.style.left = `${140 - counter * 35}px`;
  }
}

function handleSwipeMove(e) {
  const slider = document.querySelector('.content-slider');
  const clientX = e.clientX || e.changedTouches[0].clientX;
  let left = handleSwipeMove.left + (clientX - handleSwipeMove.startX);

  if (left > 200) left = 200;
  slider.style.left = `${left}px`;
}

function handleSwipeEnd(e) {
  const slider = document.querySelector('.content-slider');
  const width = document.querySelector('.content').clientWidth;
  const sliderWidth = slider.clientWidth;
  const left = parseInt(slider.style.left, 10);
  const endX = e.clientX || e.changedTouches[0].clientX;

  slider.classList.add('-animated');
  document.removeEventListener('mousemove', handleSwipeEnd.func, false);
  document.removeEventListener('mouseup', handleSwipeEnd, false);
  document.removeEventListener('touchmove', handleSwipeEnd.func, false);
  document.removeEventListener('touchend', handleSwipeEnd, false);

  if (left > 0) slider.style.left = '0px';
  else if (Math.abs(left) > sliderWidth - width - 640) {
    fetchUrl(fetchUrl.value, fetchUrl.token)
      .then((data) => {
        const pagination = document.querySelector('.pagination');
        let pages = document.querySelector('.pages');
        data.items.forEach(elem => slider.appendChild(createElement(elem)));
        pagination.removeChild(pages);
        pages = createPageItems();
        pagination.appendChild(pages);
        pages.addEventListener('click', handlePageChange, false);
      });
  }
  if (endX - handleSwipeEnd.startX < 0) slider.style.left = `-${(Math.floor(Math.abs(left) / width) + 1) * width}px`;
  else if (endX - handleSwipeEnd.startX > 0) slider.style.left = `-${(Math.floor(Math.abs(left) / width)) * width}px`;
  handlePageOnSwipe(slider, width, left);
}

function handleSwipeStart(e) {
  if (e.button === 0 || e.type === 'touchstart') {
    const slider = document.querySelector('.content-slider');
    const left = parseInt(slider.style.left, 10);

    slider.classList.remove('-animated');
    handleSwipeMove.startX = e.clientX || e.changedTouches[0].clientX;
    handleSwipeMove.left = left;
    handleSwipeEnd.func = handleSwipeMove;
    handleSwipeEnd.startX = e.clientX || e.changedTouches[0].clientX;

    document.addEventListener('mousemove', handleSwipeMove, false);
    document.addEventListener('mouseup', handleSwipeEnd, false);
    document.addEventListener('touchmove', handleSwipeMove, false);
    document.addEventListener('touchend', handleSwipeEnd, false);
  }
}

export { handleSwipeStart, handlePageChange };
