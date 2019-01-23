<template>
  <div class="page-container">
    <div class="grid-container">
      <header class="page-header">
        <nav class="page-navbar">
          <a href="#" class="navbar-link">Ссылка</a>
          <a href="#" class="navbar-link">Ссылка</a>
          <a href="#" class="navbar-link">Ссылка</a>
          <a href="#" class="navbar-link">Ссылка</a>
        </nav>
      </header>
      <aside class="side-block1"></aside>
      <aside class="side-block2"></aside>
      <main class="page-content">
        <section class="page-articles">
          <article class="page-article">
            <h2 class="article-header">Заголовок</h2>
          </article>
          <article class="page-article">
            <h2 class="article-header">Заголовок</h2>
          </article>
        </section>
      </main>
      <footer class="page-footer"></footer>
    </div>
  </div>
</template>

<style scoped>
  .page-container {
    --red: rgb(219, 50, 54);
    --green: rgb(60, 186, 84);
    --blue: rgb(72, 133, 237);
    --yellow: rgb(244, 194, 13);
    
    --article-height: 200px;
    
    height: 700px;
    overflow-y: scroll;
  }
  
  .grid-container {
    display: grid;
    grid-template: repeat(4, 5em) auto 5em / 1fr 3fr 1fr;
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
    padding: 10px;
    background-color: var(--green);
  }
  
  .side-block1 {
    grid-area: side1;
    background: fixed
      repeating-linear-gradient(
        -45deg,
        var(--red),
        var(--red) 1em,
        var(--yellow) 1em,
        var(--yellow) 2em);
  }
  
  .side-block2 {
    grid-area: side2;
    opacity: 0.6;
    background:
      repeating-radial-gradient(
        circle at top right,
        var(--red),
        var(--red) 1em,
        var(--yellow) 1em,
        var(--yellow) 2em);
    transition: opacity 0.5s;
  }
  
  .side-block2:hover {
    opacity: initial;
  }
  
  .page-content {
    grid-area: content;
    padding: 10px 0 calc(var(--article-height) / 2) 0;
    background-color: var(--yellow);
  }
  
  .page-footer {
    grid-area: footer;
    background-color: var(--blue);
  }
  
  .page-navbar {
    display: flex;
    align-items: center;
    
    height: 100%;
  }
  
  .page-navbar > .navbar-link {
    flex-grow: 1;
    
    display: inline-block;
    padding: 10px;
    border: 1px solid var(--yellow);
    margin: 0 10px;
  
    text-align: center;
    color: var(--yellow);
  }

  .navbar-link,
  .page-article,
  .page-article > .article-header {
    transition: all 0.5s;
  }

  .navbar-link:hover {
    transform: scale(1.1);
    background: var(--yellow);
    color: var(--blue);
  }
  
  .page-articles {
    display: flex;
    flex-direction: column;
    align-items: center;
  
    height: 100%;
  }

  .page-articles > .page-article {
    box-sizing: border-box;
    width: 80%;
    height: var(--article-height);
    padding: 10px;
    border: 1px solid var(--blue);
    margin: 10px 0;
  }
  
  .page-article > .article-header {
    display: inline-block;
    border-bottom: 1px solid var(--blue);
    margin: 0;
    color: var(--blue);
  }
  
  .page-article:hover > .article-header {
    font-size: 2em;
    transform: rotate(-5deg);
  }

  .page-article:hover {
    transform: rotate(5deg);
  }
  
  @media (max-width: 768px) {
    .grid-container {
      grid-template: repeat(2, 5em) auto repeat(2, 5em) / auto;
      grid-template-areas:
        "header "
        "side1  "
        "content"
        "side2  "
        "footer ";
    }
  }
</style>