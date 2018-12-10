import fetchUrl from './youTubeApiClient';
import showContent from './showContent';

function createlnput(e) {
  if (e.type === 'click' || e.keyCode === 13) {
    e.preventDefault();
    const input = document.querySelector('#formInput');
    const { value } = input;

    if (value) {
      const main = document.querySelector('.main');
      const mainContent = document.querySelector('.main-content');

      if (mainContent) main.removeChild(mainContent);

      fetchUrl.value = value;
      fetchUrl(value).then(data => showContent(data));
      input.value = '';
      input.blur();
    }
  }
}

export default createlnput;
