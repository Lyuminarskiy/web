<template>
  <div class="page-container">
    <div class="grid-container">
      <header class="page-header"></header>
      <aside class="side-block1"></aside>
      <aside class="side-block2"></aside>
      <main class="page-content"></main>
      <footer class="page-footer"></footer>
    </div>
  </div>
</template>

<style scoped>
.page-container {
  height: 500px;
  overflow-y: scroll;
}

.grid-container {
  display: grid;
  grid-template: repeat(6, 5em) / 1fr 3fr 1fr;
  grid-template-areas:
    "header header  header"
    "side1  content side2 "
    "side1  content side2 "
    "side1  content .     "
    ".      content .     "
    "footer footer  footer";
  grid-gap: 1em;
}

.page-header {
  grid-area: header;
  background-color: rgb(60, 186, 84);
}

.side-block1 {
  grid-area: side1;
}

.side-block2 {
  grid-area: side2;
  opacity: 0.6;
}

.side-block1,
.side-block2 {
  background-color: rgb(219, 50, 54);
}

.page-content {
  grid-area: content;
  background-color: rgb(244, 194, 13);
}

.page-footer {
  grid-area: footer;
  background-color: rgb(72, 133, 237);
}
</style>