<template>
  <div class="page-container">
    <form>
      <fieldset>
        <legend>Основная информация</legend>
        <label>
          <span>Имя:</span>
          <input type="text" placeholder="Введите ваше имя" required>
        </label>
        <label>
          <span>Фамилия:</span>
          <input type="text" placeholder="Введите вашу фамилию" required>
        </label>
        <label>
          <span>Отчество:</span>
          <input type="text" placeholder="Введите ваше отчество" required>
        </label>
      </fieldset>
      <fieldset>
        <legend>Дополнительная информация</legend>
        <label>
          <span>Расскажите о себе:</span>
          <textarea rows="6"></textarea>
        </label>
      </fieldset>
      <button>Отправить</button>
    </form>
  </div>
</template>

<style scoped>
  .page-container {
    height: 500px;
    overflow-y: scroll;
  }
  
  label {
    display: block;
    text-align: left;
  }
  
  input {
    box-sizing: border-box;
    width: 100%;
    padding: 5px;
  }

  input:invalid {
    border: 1px solid red;
  }
  
  input:valid {
    bodred: 1px solid green;
  }
  
  button {
    width: 100%;
    padding: 5px;
    margin: 10px 0;
  }
  
  fieldset {
    border: 1px dashed black;
    text-align: center;
  }
  
  textarea {
    width: 100%;
  }
</style>