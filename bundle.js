!function(e){var t={};function n(a){if(t[a])return t[a].exports;var r=t[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(a,r,function(t){return e[t]}.bind(null,r));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="dist/",n(n.s=4)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=document.querySelector(".content"),t=document.querySelector(".content-slider"),n=document.createElement("div"),a=e.clientWidth,r=t.clientWidth,i=Math.round(r/a),d=Math.abs(parseInt(t.style.left,10)),o=Math.floor(d/a);n.classList.add("pages","-animated"),n.style.left=140-35*o+"px";for(var c=0;c<i;c+=1){var u=document.createElement("div");u.classList.add("page-item"),u.textContent=c+1,n.appendChild(u)}return n.children[o].classList.add("page-item--active"),n}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function e(t,n){var o=void 0;o=n?r+"/"+i+"key="+a+"&type=video&part=snippet&maxResults="+d+"&q="+t+"&pageToken="+n:r+"/"+i+"key="+a+"&type=video&part=snippet&maxResults="+d+"&q="+t;return fetch(o).then(function(e){return e.json()}).then(function(t){var n=[];e.token=t.nextPageToken,t.items.forEach(function(e){return n.push(e.id.videoId)});var i=r+"/videos?key="+a+"&id="+n.join(",")+"&part=snippet,statistics";return fetch(i).then(function(e){return e.json()})})};var a="AIzaSyAi4QXx4Kt5wp40RnE2RHEaPFg_8edeY-E",r="https://www.googleapis.com/youtube/v3",i="search?",d=15},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=document.createElement("article"),n=document.createElement("div"),a=document.createElement("a"),r=document.createElement("table"),i=document.createElement("p");return t.classList.add("content-item"),n.classList.add("item-title-container"),n.style.backgroundImage="url('"+e.snippet.thumbnails.medium.url+"')",a.classList.add("item-title"),a.setAttribute("href","https://www.youtube.com/watch?v="+e.id),a.setAttribute("target","_blank"),a.textContent=""+e.snippet.title,r.classList.add("item-table"),r.innerHTML='<tr><th><i class="fa fa-user" aria-hidden="true"></i></th><td>'+e.snippet.channelTitle+'</td></tr><tr><th><i class="fa fa-calendar" aria-hidden="true"></i></th><td>'+new Date(Date.parse(e.snippet.publishedAt)).toLocaleDateString()+'</td></tr><tr><th><i class="fa fa-eye" aria-hidden="true"></i></th><td>'+e.statistics.viewCount+"</td></tr>",i.classList.add("item-description"),i.textContent=""+e.snippet.localized.description,n.appendChild(a),t.appendChild(n),t.appendChild(r),t.appendChild(i),t}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.handlePageChange=t.handleSwipeStart=void 0;var a=d(n(1)),r=d(n(2)),i=d(n(0));function d(e){return e&&e.__esModule?e:{default:e}}function o(e){var t=e.target;if(t.classList.contains("page-item")){var n=document.querySelector(".content-slider"),a=document.querySelector(".page-item--active"),r=document.querySelector(".content").clientWidth,i=parseInt(n.style.left,10),d=parseInt(a.innerText,10),o=i-(parseInt(t.innerText,10)-d)*r,c=Math.floor(Math.abs(o)/r);a.classList.remove("page-item--active"),t.classList.add("page-item--active"),n.style.left=o+"px",this.style.left=140-35*c+"px"}}function c(e){var t=document.querySelector(".content-slider"),n=e.clientX||e.changedTouches[0].clientX,a=c.left+(n-c.startX);a>200&&(a=200),t.style.left=a+"px"}function u(e){var t=document.querySelector(".content-slider"),n=document.querySelector(".content").clientWidth,d=t.clientWidth,c=parseInt(t.style.left,10),l=e.clientX||e.changedTouches[0].clientX;t.classList.add("-animated"),document.removeEventListener("mousemove",u.func,!1),document.removeEventListener("mouseup",u,!1),document.removeEventListener("touchmove",u.func,!1),document.removeEventListener("touchend",u,!1),c>0?t.style.left="0px":Math.abs(c)>d-n-640&&(0,a.default)(a.default.value,a.default.token).then(function(e){var n=document.querySelector(".pagination"),a=document.querySelector(".pages");e.items.forEach(function(e){return t.appendChild((0,r.default)(e))}),n.removeChild(a),a=(0,i.default)(),n.appendChild(a),a.addEventListener("click",o,!1)}),l-u.startX<0?t.style.left="-"+(Math.floor(Math.abs(c)/n)+1)*n+"px":l-u.startX>0&&(t.style.left="-"+Math.floor(Math.abs(c)/n)*n+"px"),function(e,t){var n=document.querySelector(".page-item--active"),a=document.querySelector(".pages"),r=Math.abs(parseInt(e.style.left,10)),i=Math.floor(r/t);a.children[i]&&(n.classList.remove("page-item--active"),a.children[i].classList.add("page-item--active"),a.style.left=140-35*i+"px")}(t,n)}t.handleSwipeStart=function(e){if(0===e.button||"touchstart"===e.type){var t=document.querySelector(".content-slider"),n=parseInt(t.style.left,10);t.classList.remove("-animated"),c.startX=e.clientX||e.changedTouches[0].clientX,c.left=n,u.func=c,u.startX=e.clientX||e.changedTouches[0].clientX,document.addEventListener("mousemove",c,!1),document.addEventListener("mouseup",u,!1),document.addEventListener("touchmove",c,!1),document.addEventListener("touchend",u,!1)}},t.handlePageChange=o},function(e,t,n){"use strict";var a,r=n(5),i=(a=r)&&a.__esModule?a:{default:a};n(9),(0,i.default)()},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=document.createElement("main"),t=document.createElement("form"),n=document.createElement("input"),a=document.createElement("button");a.classList.add("search-button"),a.setAttribute("type","button"),a.textContent="Seach",n.classList.add("search-box"),n.setAttribute("id","formInput"),n.setAttribute("type","text"),n.setAttribute("placeholder","What do you want..."),t.classList.add("search-form"),t.setAttribute("autocomplete","off"),t.appendChild(n),t.appendChild(a),e.classList.add("main"),e.appendChild(t),a.addEventListener("click",i.default),document.addEventListener("keydown",i.default),document.body.appendChild(e)};var a,r=n(6),i=(a=r)&&a.__esModule?a:{default:a}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=i(n(1)),r=i(n(7));function i(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){if("click"===e.type||13===e.keyCode){e.preventDefault();var t=document.querySelector("#formInput"),n=t.value;if(n){var i=document.querySelector(".main"),d=document.querySelector(".main-content");d&&i.removeChild(d),a.default.value=n,(0,a.default)(n).then(function(e){return(0,r.default)(e)}),t.value="",t.blur()}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=o(n(2)),r=o(n(0)),i=o(n(8)),d=n(3);function o(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){var t=document.querySelector(".main"),n=document.createElement("section"),o=document.createElement("div"),c=document.createElement("div"),u=document.createElement("div");n.classList.add("main-content"),o.classList.add("content"),c.classList.add("content-slider","-animated"),c.style.left="0",u.classList.add("pagination"),e.items.forEach(function(e){return c.appendChild((0,a.default)(e))}),o.appendChild(c),n.appendChild(o),t.appendChild(n);var l=(0,r.default)();u.appendChild(l),n.appendChild(u),o.addEventListener("mousedown",d.handleSwipeStart,!1),o.addEventListener("touchstart",d.handleSwipeStart,!1),l.addEventListener("click",d.handlePageChange,!1),i.default.previousWidth=document.querySelector(".content").clientWidth,window.addEventListener("resize",i.default,!1)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,r=n(0),i=(a=r)&&a.__esModule?a:{default:a},d=n(3);t.default=function e(){var t=document.querySelector(".content").clientWidth;if(e.previousWidth!==t){var n=document.querySelector(".pagination"),a=document.querySelector(".pages");n.removeChild(a),a=(0,i.default)(),n.appendChild(a),a.addEventListener("click",d.handlePageChange,!1),e.previousWidth=t}}},function(e,t){}]);