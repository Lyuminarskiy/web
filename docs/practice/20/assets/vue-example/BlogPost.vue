<template>
  <div>
    <h2>{{ header }}</h2>
    <p>
      <slot></slot>
    </p>
    <button @click="$emit('delete-post')">
      Удалить
    </button>
  </div>
</template>

<script>
  export default {
    props: ["header"]
  }
</script>

<style scoped>
  .blog-post {
    padding: 5px;
    border: 1px solid black;
    margin: 2px;
  }
</style>

