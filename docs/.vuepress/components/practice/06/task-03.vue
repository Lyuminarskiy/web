<template>
  <div class="page-container">
    <form>
      <fieldset>
        <legend>Информация о пользователе</legend>
        <label>
          <span>Электронная почта:</span>
          <input type="email" name="email" placeholder="Введите e-mail"
                 required>
        </label>
        <label>
          <span>Пароль:</span>
          <input type="password" name="password" placeholder="Введите пароль"
                 required>
        </label>
      </fieldset>
      
      <fieldset>
        <legend>Персональная информация</legend>
        <label>
          <span>Имя:</span>
          <input type="text" name="firstname" placeholder="Введите ваше имя"
                 required>
        </label>
        <label>
          <span>Фамилия:</span>
          <input type="text" name="lastname" placeholder="Введите вашу фамилию"
                 required>
        </label>
        <label>
          <span>Отчество:</span>
          <input type="text" name="patronymic"
                 placeholder="Введите ваше отчество">
        </label>
        <span>Укажите ваш пол:</span>
        <label>
          <input type="radio" name="gender" value="male" required>
          <span>Мужской</span>
        </label>
        <label>
          <input type="radio" name="gender" value="female" required>
          <span>Женский</span>
        </label>
      </fieldset>
      
      <fieldset>
        <legend>Дополнительная информация</legend>
        <label>
          <span>О себе:</span>
          <textarea name="about" rows="6"
                    placeholder="Расскажите о себе..."></textarea>
        </label>
        <label>
          <span>Любимый цвет:</span>
          <input type="color" name="color">
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
    margin: 5px 0;
    text-align: left;
  }
  
  input:not([type="radio"]) {
    box-sizing: border-box;
    min-height: 2em;
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
  }
  
  legend {
    text-align: center;
  }
  
  textarea {
    width: 100%;
  }
</style>