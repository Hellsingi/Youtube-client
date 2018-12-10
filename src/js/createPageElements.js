function createPageElements() {
  const content = document.querySelector('.content');
  const slider = document.querySelector('.content-slider');
  const pages = document.createElement('div');
  const contentWidth = content.clientWidth;
  const sliderWidth = slider.clientWidth;
  const quant = Math.round(sliderWidth / contentWidth);
  const left = Math.abs(parseInt(slider.style.left, 10));
  const activeItem = Math.floor(left / contentWidth);

  pages.classList.add('pages', '-animated');
  pages.style.left = `${140 - activeItem * 35}px`;

  for (let i = 0; i < quant; i += 1) {
    const pageItem = document.createElement('div');
    pageItem.classList.add('page-item');
    pageItem.textContent = i + 1;
    pages.appendChild(pageItem);
  }
  pages.children[activeItem].classList.add('page-item--active');
  return pages;
}

export default createPageElements;
