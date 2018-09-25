'use strict';

import './comment.js';

Vue.component('post-elem', {
  template: `
    <article class="post">
      <h3 class="post-author">{{ author }}</h3>
      <h2 class="post-title">{{ title }}</h2>
      <p class="post-body">{{ post.body }}</p>
      <div class="comments">
        <template v-if="!!post.comments.length">
          <h3>{{ commentsNumber }}</h3>
          <comment-elem v-for="comment in post.comments" :key="comment.id" :comment="comment"></comment-elem>
        </template>
        <h3 v-else>no comments</h3>
      </div>
    </article>
  `,
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
  }
});