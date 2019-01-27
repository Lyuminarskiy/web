<template>
  <div class="page-container">
    <form>
      <fieldset>
        <legend>Основная информация</legend>
        <label>
          <span>Электронная почта:</span>
          <input type="email" name="email" placeholder="Введите e-mail"
                 required>
        </label>
        <label>
          <span>Пароль:</span>
          <input type="password" name="password" placeholder="Введите пароль"
                 minlength="5" maxlength="10" required>
        </label>
        <label>
          <span>Имя:</span>
          <input type="text" name="firstname" placeholder="Введите ваше имя"
                 required>
        </label>
        <label>
          <span>Фамилия:</span>
          <input name="lastname" placeholder="Введите вашу фамилию" required>
        </label>
        <label>
          <span>Дата рождения:</span>
          <input type="date" name="birthdate" min="1980-01-01"
                 max="2018-12-31" required>
        </label>
        <span>Пол:</span>
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
        <label>
          <span>Изображение профиля:</span>
          <input type="file" name="avatar" accept="image/*">
        </label>
        <label>
          <span>Город:</span>
          <select name="city">
            <optgroup label="Россия">
              <option value="Москва">Москва</option>
              <option value="Санкт-Петербург">Санкт-Петербург</option>
              <option value="Казань">Казань</option>
            </optgroup>
            <optgroup label="США">
              <option value="Нью-Йорк">Нью-Йорк</option>
              <option value="Вашингтон">Вашингтон</option>
              <option value="Даллас">Даллас</option>
            </optgroup>
          </select>
        </label>
        <label>
          <span>Адрес личной страницы:</span>
          <input type="url" name="homepage"
                 placeholder="Введите адрес домашней страницы">
        </label>
        <label>
          <span>Номер телефона:</span>
          <input type="tel" name="phonenumber" pattern="[0-9]{10}"
                 maxlength="10" placeholder="Введите номер телефона">
        </label>
        <legend>Дополнительная информация</legend>
        <label>
          <span>О себе:</span>
          <textarea name="about" rows="6"
                    placeholder="Расскажите о себе..."></textarea>
        </label>
      </fieldset>
      <button>Отправить</button>
      <button type="reset">Сбросить</button>
    </form>
  </div>
</template>

<style scoped>
  label {
    display: block;
    margin: 5px 0;
    text-align: left;
  }
  
  input:not([type="radio"]), select {
    box-sizing: border-box;
    min-height: 2em;
    width: 100%;
    padding: 5px;
  }

  input:invalid {
    border: 1px solid red;
  }
  
  input:invalid + span {
    color: red;
  }
  
  input:checked + span {
    text-decoration: underline solid black;
  }
  
  button {
    width: 100%;
    padding: 5px;
    border: 1px solid black;
    margin: 5px 0;
    background: white;
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