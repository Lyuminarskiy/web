'use strict';

Vue.component('comment-elem', {
  props: ['comment'],
  template: `
    <div class="comment">
      <h3 class="comment-title">{{ comment.name }}</h3>
      <p class="comment-body">{{ comment.body }}</p>
    </div>
  `
});

Vue.component('post-elem', {
  props: ['post'],
  computed: {
    title() {
      return '#' + this.post.id + ' ' + this.post.title;
    },
    author() {
      return 'Author: ' + this.post.user.name;
    },
    commentsNumber() {
      return this.post.comments.length + ' comments:';
    }
  },
  template: `
    <article class="post">
      <h3 class="post-author">{{ author }}</h3>
      <h2 class="post-title">{{ title }}</h2>
      <p class="post-body">{{ post.body }}</p>
      <div class="comments">
        <div v-if="post.comments.length > 0">
          <h3>{{ commentsNumber }}</h3>
          <comment-elem v-for="comment in post.comments" :key="comment.id" :comment="comment"></comment-elem>
        </div>
        <h3 v-else>no comments</h3>
      </div>
    </article>
  `
});