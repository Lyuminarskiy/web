<template>
  <div class="block-post">
    <button @click="$emit('increase-size')">
      Увеличить
    </button>
    <button @click="$emit('decrease-size')">
      Уменьшить
    </button>

    <h2>{{ title }}</h2>

    <slot></slot>
  </div>
</template>

<script>
  export default {
    props: ["title"]
  }
</script>

<style scoped>
  .block-post {
    border: 1px solid black;
    padding: 5px;
    margin: 5px;
  }
</style>

