'use strict';

import Client from './client.js';

let search = document.getElementById('search');

search.oninput = (event) => {
  if (event.data != null && event.data.lenght == 0) return;

  let query = event.target.value;
  let posts = document.getElementsByClassName('post');

  for (let post of posts) {
    let title = post.querySelector('.post-title').firstChild.data;

    if (title.indexOf(query) >= 0) {
      post.scrollIntoView();
      window.scrollBy(0, -search.offsetHeight);
      return;
    }
  }
}

document.addEventListener("DOMContentLoaded", async () => {
  let main = document.querySelector('footer');
  main.innerHTML = 'Powered by ' + Client.baseUrl;

  vm.posts = await initialize();
});

async function initialize()
{
  let posts = await Client.getPosts();

  for (let post of posts) {
    post.user = await Client.getUsers(post.userId)
    post.comments = await Client.getComments(post.id);
  }

  return posts;
}

let vm = new Vue({
  el: '#posts',
  data: {
    posts: []
  }
})