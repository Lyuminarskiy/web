<template>
  <div>
    <header id="header">Заголовок страницы</header>
    <main id="main">
      <section id="articles">
        <h2 class="section-header">Заголовок секции</h2>
        <article class="article">
          <h3 class="article-header">Заголовок статьи 1</h3>
          <address>Автор статьи 1</address>
          <p>Время публикации: <time>00:00:00</time></p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
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
          <h3 class="article-header">Заголовок статьи 2</h3>
          <address>Автор статьи 2</address>
          <p>Время публикации: <time>00:00:00</time></p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
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
          <h3 class="article-header">Заголовок статьи 3</h3>
          <address>Автор статьи 3</address>
          <p>Время публикации: <time>00:00:00</time></p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
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
    <footer id="footer">Подвал страницы</footer>
  </div>
</template>

<style scoped>
* {
  --green: rgb(60, 186, 84);
  --yellow: rgb(244, 194, 13);
  --red: rgb(219, 50, 54);
  --blue: rgb(72, 133, 237);
}

body {
  display: grid;
  grid-template-areas:
    "header"
    "main"
    "footer";

  margin: 0;
}

#header {
  position: fixed;
  grid-area: header;
  background-color: var(--green);
}

#footer {
  grid-area: footer;
  background-color: var(--red);
  margin-top: 2em;
}

#header,
#footer {
  color: white;
  text-align: center;
  padding: 1em;
  width: 100%;
}

#main {
  grid-area: main;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3em;
}

.section-header {
  text-align: center;
}

.article {
  border: 1px solid rgb(244, 194, 13);
  margin: 1em;
  padding: 1em;
  max-width: 40em;
}

.article-header {
  text-decoration: solid underline rgb(72, 133, 237);
}
</style>