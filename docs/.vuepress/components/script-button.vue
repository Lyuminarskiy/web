<template>
  <p class="action">
    <a href="script.html" class="action-button">Открыть сценарий</a>
  </p>
</template>

<style scoped>
.action {
  margin: 1.8rem auto;
  text-align: center;
  line-height: 1.7;
}

.action > .action-button {
  display: inline-block;
  box-sizing: border-box;
  padding: 0.8rem 1.6rem;
  border-bottom: 1px solid #389d70;
  border-radius: 4px;
  font-size: 1.2rem;
  font-weight: 500;
  color: white;
  background-color: #3eaf7c;
  transition: background-color 0.1s ease;
}

.action > .action-button:hover {
  text-decoration: none;
  background-color: #4abf8a;
}

@media (max-width: 419px) {
  .action {
    margin: 1.2rem auto;
  }

  .action > .action-button {
    padding: 0.6rem 1.2rem;
    font-size: 1rem;
  }
}
</style>