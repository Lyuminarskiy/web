'use strict';

Vue.component('comment-elem', {
  template: `
    <div class="comment">
      <h3 class="comment-title">{{ comment.name }}</h3>
      <p class="comment-body">{{ comment.body }}</p>
    </div>
  `,
  props: ['comment']
});