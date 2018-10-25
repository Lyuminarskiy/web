<template>
  <div class="card">
    <div class="card-image"></div>
    <div class="card-content">
      <div class="card-header"></div>
      <div class="card-text"></div>
      <div class="card-text"></div>
      <div class="card-text"></div>
    </div>
  </div>
</template>

<style scoped>
.card {
  height: 15rem;
  padding: 1rem;
  border: 3px solid;
  background-color: #eee;
}

.card-image {
  display: inline-block;
  box-sizing: border-box;
  height: 100%;
  width: 30%;
  background-color: #555;
}

.card-content {
  display: inline-block;
  box-sizing: border-box;
  height: 100%;
  width: 60%;
  padding: 1rem;
  border-left: 2px dotted black;
  margin-left: 1rem;
}

.card-header {
  height: 1.5rem;
  width: 70%;
  margin-bottom: 1rem;
  background-color: black;
}

.card-text {
  height: 1rem;
  width: 100%;
  margin-bottom: 0.5rem;
  background-color: #333;
}
</style>
