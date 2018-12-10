/* eslint-disable no-console */
const apiKey = 'AIzaSyBS93ULbnd9AHY3XEzFEbvL85V03emQbdI';
const url = 'https://www.googleapis.com/youtube/v3';
const options = 'search?';
const maxResults = 15;
// eslint-disable-next-line no-undef
// const keyword = document.getElementById('query');добавить value
export default function fetchURL(keyword, token) {
  let searchUrl;
  if (token) {
    searchUrl = `${url}/${options}key=${apiKey}&type=video&part=snippet&maxResults=${maxResults}&q=${keyword}&pageToken=${token}`;
  } else {
    searchUrl = `${url}/${options}key=${apiKey}&type=video&part=snippet&maxResults=${maxResults}&q=${keyword}`;
  }
  // eslint-disable-next-line no-undef
  return fetch(searchUrl)
    .then(response => response.json())
    .then((data) => {
      const idArray = [];
      fetchURL.token = data.nextPageToken;
      data.items.forEach(elem => idArray.push(elem.id.videoId));
      const statUrl = `${url}/videos?key=${apiKey}&id=${idArray.join(',')}&part=snippet,statistics`;
      // eslint-disable-next-line no-undef
      return fetch(statUrl).then(res => res.json());
    });
// eslint-disable-next-line no-unreachable
}
