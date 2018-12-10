import createlnput from './createInput';

export default function showForm() {
  const main = document.createElement('main');
  const form = document.createElement('form');
  const input = document.createElement('input');
  const button = document.createElement('button');

  button.classList.add('search-button');
  button.setAttribute('type', 'button');
  button.textContent = 'Seach';
  input.classList.add('search-box');
  input.setAttribute('id', 'formInput');
  input.setAttribute('type', 'text');
  input.setAttribute('placeholder', 'What do you want...');

  form.classList.add('search-form');
  form.setAttribute('autocomplete', 'off');
  form.appendChild(input);
  form.appendChild(button);

  main.classList.add('main');
  main.appendChild(form);

  button.addEventListener('click', createlnput);
  document.addEventListener('keydown', createlnput);

  document.body.appendChild(main);
}
