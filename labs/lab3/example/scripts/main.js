'use strict';

import Client from './client.js';

// Выделенный пост.
let selectedPost;

document.getElementById('search').oninput = (event) => {
  // Убираем текущее выделение.
  if (!!selectedPost) {
    selectedPost.classList.remove('selected');
  }

  // Поисковый запрос.
  let query = event.target.value;

  // Завершаем обработку события, если поле поиска было очищено.
  if (!query.length) {
    return;
  }

  // Поиск и выделение поста.
  for (let post of document.getElementsByClassName('post')) {
    let title = post.querySelector('.post-title').firstChild.data;

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
  let main = document.querySelector('footer');
  main.innerHTML = 'Powered by ' + Client.baseUrl;

  vm.posts = await initialize();
});

let vm = new Vue({
  el: '#posts',
  data: {
      posts: []
  }
});

async function initialize()
{
  let posts = await Client.getPosts();

  for (let post of posts) {
    post.user = await Client.getUsers(post.userId);
    post.comments = await Client.getComments(post.id);
  }

  return posts;
}