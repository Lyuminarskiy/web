<template>
  <div class="card-container">
    <div class="card">
      <div class="card-image"></div>
      <div class="card-content">
        <div class="card-header"></div>
        <div class="card-text narrow"></div>
        <div class="card-text wide"></div>
        <div class="card-text wide"></div>
        <div class="card-text narrow"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .card {
    height: 200px;
    padding: 15px;
    border: 3px solid;
    background-color: #eee;
  }
  
  .card-image {
    display: inline-block;
    height: 100%;
    width: 30%;
    background-color: #555;
  }
  
  .card-content {
    display: inline-block;
    box-sizing: border-box;
    height: 100%;
    width: 60%;
    padding: 15px;
    border-left: 2px dotted black;
    margin-left: 15px;
    vertical-align: top;
  }
  
  .card-header {
    height: 30px;
    width: 70%;
    margin-bottom: 10px;
    background-color: black;
  }
  
  .card-text {
    display: inline-block;
    height: 20px;
    background-color: #333;
  }
  
  .narrow {
    width: 30%;
  }
  
  .wide {
    width: 60%;
  }
</style>
