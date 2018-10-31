<template>
  <div class="page-container">
    <div class="grid-container">
      <header class="page-header">Заголовок страницы</header>
      <main class="page-content">
        <section class="articles">
          <h2 class="section-header">Заголовок секции</h2>
          <article class="article">
            <h3 class="article-header">Заголовок статьи</h3>
            <div class="article-info">
              <address class="article-author">Автор статьи: Иванов И.И.</address>
              <p class="article-pubtime">Время публикации: <time>00:00:00</time></p>
            </div>
            <p lang="en">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip
              ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
              voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur
              sint occaecat cupidatat non proident, sunt in culpa qui officia
              deserunt mollit anim id est laborum.</p>
          </article>
          <article class="article">
            <h3 class="article-header">Заголовок статьи</h3>
            <div class="article-info">
              <address class="article-author">Автор статьи: Иванов И.И.</address>
              <p class="article-pubtime">Время публикации: <time>00:00:00</time></p>
            </div>
            <p lang="en">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip
              ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
              voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur
              sint occaecat cupidatat non proident, sunt in culpa qui officia
              deserunt mollit anim id est laborum.</p>
          </article>
          <article class="article">
            <h3 class="article-header">Заголовок статьи</h3>
            <div class="article-info">
              <address class="article-author">Автор статьи: Иванов И.И.</address>
              <p class="article-pubtime">Время публикации: <time>00:00:00</time></p>
            </div>
            <p lang="en">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip
              ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
              voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur
              sint occaecat cupidatat non proident, sunt in culpa qui officia
              deserunt mollit anim id est laborum.</p>
          </article>
        </section>
      </main>
      <footer class="page-footer">Подвал страницы</footer>
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
  grid-template-rows: 4em auto 4em;
  grid-template-areas:
    "header"
    "main"
    "footer";
  height: 2000px;
}

.page-header {
  grid-area: header;
  background-color: rgb(60, 186, 84);
}

.page-footer {
  grid-area: footer;
  background-color: rgb(219, 50, 54);
}

.page-header,
.page-footer {
  box-sizing: border-box;
  width: 100%;
  padding: 1em;
  color: white;
}

.page-content {
  grid-area: main;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.page-header,
.page-footer,
.section-header,
.article-header {
  border: none;
  text-align: center;
}

.article {
  max-width: 30em;
  padding: 1em;
  border: 1px solid rgb(244, 194, 13);
  margin: 1em;
}

.article-author,
.article-pubtime {
  text-align: right;
  text-decoration: solid underline rgb(72, 133, 237);
}
</style>