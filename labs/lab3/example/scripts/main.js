'use strict';

import Client from './client.js';

// Инициализируем Vue.
const vm = new Vue({
  el: '#posts',
  data: {
    posts: []
  }
});

// Заполняем подвал сайта.
const main = document.querySelector('footer');
main.innerHTML = 'Powered by ' + Client.baseUrl;

// Анимируем загрузку.
let dotsNumber = 1;
const loader = document.getElementById('loader');
const loaderInitialText = loader.innerText;
const loaderTimerId = setInterval(() => {
  loader.innerText = loaderInitialText + '.'.repeat(dotsNumber);

  if(++dotsNumber > 3) {
    dotsNumber = 1;
  }
}, 1000);

// Выделенный пост.
let selectedPost;
document.getElementById('search').oninput = (event) => {
  // Убираем текущее выделение.
  if (!!selectedPost) {
    selectedPost.classList.remove('selected');
  }

  // Поисковый запрос.
  const query = event.target.value;

  // Завершаем обработку события, если поле поиска было очищено.
  if (!query.length) {
    return;
  }

  // Поиск и выделение поста.
  for (let post of document.getElementsByClassName('post')) {
    const title = post.querySelector('.post-title').firstChild.data;

    // Поисковый запрос найден в заголовке.
    if (title.indexOf(query) >= 0) {
      // Выделяем пост.
      selectedPost = post;
      selectedPost.classList.add('selected');

      // Перемещаем окно к выделенному посту.
      post.scrollIntoView();
      window.scrollBy(0, -event.target.offsetHeight);

      // Завершаем обработку события.
      return;
    }
  }
};

document.addEventListener("DOMContentLoaded", async () => {
  vm.posts = await initialize();

  // Останавливаем анимацию загрузки после инициализации.
  clearInterval(loaderTimerId);
});

/**
 * Загружает данные постов и производит инициализацию.
 *
 * @returns {Promise<*>} данные постов.
 */
async function initialize() {
  const posts = await Client.getPosts();

  for (let post of posts) {
    post.user = await Client.getUsers(post.userId);
    post.comments = await Client.getComments(post.id);
  }

  return posts;
}