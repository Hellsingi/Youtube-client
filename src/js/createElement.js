function createElement(data) {
  const article = document.createElement('article');
  const itemContainer = document.createElement('div');
  const title = document.createElement('a');
  const table = document.createElement('table');
  const p = document.createElement('p');

  article.classList.add('content-item');
  itemContainer.classList.add('item-title-container');
  itemContainer.style.backgroundImage = `url('${data.snippet.thumbnails.medium.url}')`;
  title.classList.add('item-title');
  title.setAttribute('href', `https://www.youtube.com/watch?v=${data.id}`);
  title.setAttribute('target', '_blank');
  title.textContent = `${data.snippet.title}`;
  table.classList.add('item-table');
  table.innerHTML = `<tr><th><i class="fa fa-user" aria-hidden="true"></i></th><td>${data.snippet.channelTitle}</td></tr><tr><th><i class="fa fa-calendar" aria-hidden="true"></i></th><td>${new Date(Date.parse(data.snippet.publishedAt)).toLocaleDateString()}</td></tr><tr><th><i class="fa fa-eye" aria-hidden="true"></i></th><td>${data.statistics.viewCount}</td></tr>`;
  p.classList.add('item-description');
  p.textContent = `${data.snippet.localized.description}`;

  itemContainer.appendChild(title);
  article.appendChild(itemContainer);
  article.appendChild(table);
  article.appendChild(p);
  return article;
}

export default createElement;
