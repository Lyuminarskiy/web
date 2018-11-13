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
    
    height: 500px;
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
  }
  
  .side-block2 {
    grid-area: side2;
    opacity: 0.6;
  }
  
  .side-block1,
  .side-block2 {
    background-color: var(--red);
  }
  
  .page-content {
    grid-area: content;
    padding: 10px 0 100px 0;
    background-color: var(--yellow);
  }
  
  .page-footer {
    grid-area: footer;
    background-color: var(--blue);
  }
  
  .page-navbar {
    display: flex;
    justify-content: space-between;
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
    vert-align: middle;
    color: var(--yellow);
  }
  
  .page-articles {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  
    height: 100%;
  }

  .page-articles > .page-article {
    box-sizing: border-box;
    width: 80%;
    height: 200px;
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
</style>