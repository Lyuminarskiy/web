'use strict';

import './components/all.js';
import Client from './client.js';

// Инициализируем Vue.
const vm = new Vue({
  el: '#app',
  data: {
    // Данные с сервера.
    posts: []
  }
});

// Заполняем подвал сайта.
const main = document.querySelector('footer');
main.innerHTML = 'Powered by ' + Client.baseUrl;

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

// Производим инициализацию.
document.addEventListener("DOMContentLoaded", async () => await update());

/**
 * Загружает данные с сервера и отображает их на странице.
 *
 * @returns {Promise<*>} данные постов.
 */
async function update() {
  // Загружаем посты.
  const posts = await Client.getPosts();
  // Добавляем фейковые данные для корректного отображения.
  for (let post of posts) {
    post.user = { name: '' };
    post.comments = [];
  }
  // Отображаем посты на странице.
  vm.posts = posts;

  // Загружаем пользователей и отображаем их на странице.
  for (let post of vm.posts) {
    post.user = await Client.getUsers(post.userId);
  }

  // Загружаем комментарии к постам и отображаем их на странице.
  for (let post of vm.posts) {
    post.comments = await Client.getComments(post.id);
  }
}