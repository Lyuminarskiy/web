<template>
  <div id="disqus_thread"></div>
</template>

<script>
export default {
  mounted() {
    var disqus_config = function() {
      this.page.url = window.location.origin + "/Web-course-website/";
      this.page.identifier = window.location.pathname;
    };

    (function() {
      var script = window.document.createElement("script");
      script.src = "https://web-course.disqus.com/embed.js";
      script.setAttribute("data-timestamp", +new Date());

      (window.document.head || window.document.body).appendChild(script);
    })();
  }
};
</script>

<style scoped>
#disqus_thread {
  margin-top: 5rem;
}
</style>
