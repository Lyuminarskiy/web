<template>
  <div class="page-container">
    <nav id="contents-block">
      <p>Содержание:</p>
      <ul id="contents">
        <li><a href="#part1">Часть первая</a></li>
        <li><a href="#part2">Часть вторая</a></li>
        <li><a href="#part3">Часть третья</a></li>
      </ul>
    </nav>
    <main id="story">
      <section>
        <h2 id="part1">Часть первая</h2>
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
      </section>

      <section>
        <h2 id="part2">Часть вторая</h2>
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
      </section>

      <section>
        <h2 id="part3">Часть третья</h2>
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
      </section>

        <address>А. И. Куприн. "Чудесный доктор", <time datetime="1897">1897 г.</time></address>
    </main>
  </div>
</template>

<style scoped>
.page-container {
  height: 500px;
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
  top: 0;
  padding-left: 10px;
  border-bottom: 3px dotted black;
  margin-left: -10px;
  background-color: rgba(100%, 100%, 100%, 0.8);
}
</style>