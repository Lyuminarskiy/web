<template>
  <div class="page-container">
    <div class="block"></div>
    <div class="block"></div>
    <div class="block"></div>
    <div class="block"></div>
  </div>
</template>

<style scoped>
  .page-container {
    --red: rgb(219, 50, 54);
    --green: rgb(60, 186, 84);
    --blue: rgb(72, 133, 237);
    --yellow: rgb(244, 194, 13);
    --side: 100px;
    --period: 5s;
  
    position: relative;
    height: calc(var(--side) * 4);
    border: 1px dashed black;
    border-radius: calc(var(--side) / 2);
    transition: all calc(var(--period) / 2);
  }
  
  .page-container:hover {
    background: black;
  }
  
  .block {
    position: absolute;
    width: var(--side);
    height: var(--side);
    border-radius: var(--side);
    opacity: 0.8;
    animation: moveset var(--period) infinite;
    transition: all 0.5s;
  }
  
  .block:hover {
    animation-play-state: paused;
    opacity: initial;
    transform: scale(0.9);
  }

  .block:nth-child(1) {
    background: var(--red);
  }

  .block:nth-child(2) {
    background: var(--green);
    animation-duration: calc(var(--period) * 1.1);
    animation-delay: calc(var(--period) / 4);
    animation-timing-function: ease-in-out;
  }

  .block:nth-child(3) {
    background: var(--blue);
    animation-duration: calc(var(--period) * 1.2);
    animation-delay: calc(var(--period) / 4 * 2);
    animation-timing-function: ease-in;
  }

  .block:nth-child(4) {
    background: var(--yellow);
    animation-duration: calc(var(--period) * 1.3);
    animation-delay: calc(var(--period) / 4 * 3);
    animation-timing-function: ease-out;
  }
  
  @keyframes moveset {
    from {
      top: 0;
      left: 0;
    }
    
    25% {
      top: 0;
      left: calc(100% - var(--side));
    }
    
    50% {
      top: calc(100% - var(--side));
      left: calc(100% - var(--side));
    }
    
    75% {
      top: calc(100% - var(--side));
      left: 0;
    }
    
    to {
      top: 0;
      left: 0;
    }
  }
</style>