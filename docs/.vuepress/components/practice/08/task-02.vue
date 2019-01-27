<template>
  <div class="page-container">
    <progress id="current-progress" value="30" max="100"></progress>
    <nav id="contents-block">
      <p>Содержание:</p>
      <ul id="contents">
        <li><a href="#part1">Часть первая</a></li>
        <li><a href="#part2">Часть вторая</a></li>
        <li><a href="#part3">Часть третья</a></li>
      </ul>
    </nav>
    <main id="story">
      <details id="short">
        <summary>Краткое содержание</summary>
        <p>На семью Мерцаловых валятся одна за другой болезни и несчастья. Отец
          семейства уже думает о самоубийстве, но ему встречается доктор,
          который помогает справиться с трудностями и становится их
          ангелом-хранителем.</p>
      </details>
      <section>
        <h2 id="part1">Часть первая</h2>
        <figure class="group">
          <img class="group-image" :src="$withBase('/images/cat.jpeg')">
          <figcaption class="group-text">Рис. 1 - Кот</figcaption>
        </figure>
        <p lang="en">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.</p>
        <p lang="en">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.</p>
        <p lang="en">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.</p>
      </section>
      
      <section>
        <h2 id="part2">Часть вторая</h2>
        <figure class="group">
          <img class="group-image" :src="$withBase('/images/cat.jpeg')">
          <figcaption class="group-text">Рис. 2 - И это тоже кот</figcaption>
        </figure>
        <p lang="en">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.</p>
        <p lang="en">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.</p>
        <p lang="en">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.</p>
      </section>
      
      <section>
        <h2 id="part3">Часть третья</h2>
        <figure class="group">
          <img class="group-image" :src="$withBase('/images/cat.jpeg')">
          <figcaption class="group-text">Рис. 3 - Всё тот же кот,
            что и раньше</figcaption>
        </figure>
        <p lang="en">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.</p>
        <p lang="en">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.</p>
        <p lang="en">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.</p>
      </section>
      
      <address>А. И. Куприн. "Чудесный доктор",
        <time datetime="1897">1897 г.</time>
      </address>
    </main>
  </div>
</template>

<style scoped>
  .page-container {
    height: 600px;
    overflow-y: scroll;
  }

  #current-progress {
    display: block;
    
    position: sticky;
    top: 0;
    z-index: 2;
  
    width: 100%;
    height: 5px;
  }

  #short {
    margin: 5px;
    overflow-y: scroll;
  }
  
  #story {
    padding-left: 10px;
    border-left: 3px dotted black;
    margin-left: 140px;
  }
  
  #contents-block {
    position: absolute;
    z-index: 1;
    
    width: 140px;
    margin-top: 150px;
    border-bottom: 3px dotted black;
  }
  
  #part1,
  #part2,
  #part3 {
    position: sticky;
    top: 5px;
    
    padding-left: 10px;
    border-bottom: 3px dotted black;
    margin-left: -10px;
    
    text-align: center;
    background-color: rgba(100%, 100%, 100%, 0.8);
  }
  
  .group {
    float: left;
    
    width: 40%;
    margin: 10px;
  }
  
  .group:hover {
    outline: 5px outset #3eaf7c;
    outline-offset: 2px;
  }
  
  .group-image {
    display: block;
    
    box-sizing: border-box;
    border: 5px double black;
  }
  
  .group-text {
    text-align: center;
    font-style: italic;
  }
</style>