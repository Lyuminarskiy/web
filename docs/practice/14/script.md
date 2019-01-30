---
sidebar: auto
---

# 14. JSON. Хранение данных в браузере. Node.js

## Общая информация

Затраты времени (из доступных **180 минут**):

- **X минут** - объяснение материала.
- **Y минут** - выполнение заданий студентами.

## Сценарий

### Вступление

Попросить студентов не шуметь, переговариваться шёпотом, не ругаться и
уважать друг друга. Если у них возникнут вопросы в ходе лекции, можно сразу
же их задавать.

Кратко напомнить содержимое предыдущего занятия.

### JSON

Данные в формате JSON представляют собой:

- объекты,
- массивы,
- значения одного из типов:
  - строки в двойных кавычках,
  - число,
  - логическое значение,
  - null.

### Хранение данных в браузере

Следующий пример автоматически сохраняет содержимое текстового поля. Если 
страница случайно будет обновлена значение  текстового поля будет 
восстановлено. Таким образом ничего из введенного пользователем не 
потеряется даже в этом случае.

```js
// Получаем ссылку на текстовое поле, 
// изменение которого будем отслеживать.
var field = document.getElementById("field");
 
// Проверяем наличие значения 'autosave'
// (это может произойти только если страница будет случайно обновлена)
if (sessionStorage.getItem("autosave")) {
  // Восстанавливаем содержимое текстового поля
  field.value = sessionStorage.getItem("autosave");
}
 
// Отслеживаем все изменения в текстовом поле
field.addEventListener("change", function() {
  // И сохраняем их в объект session storage
  sessionStorage.setItem("autosave", field.value);
});
```

### Node.js

`require(id)`
- id `<string>` module name or path
- Returns: `<any>` exported module content

Used to import modules, JSON, and local files. Modules can be imported from 
node_modules. Local modules and JSON files can be imported using a relative 
path (e.g. ./, ./foo, ./bar/baz, ../foo) that will be resolved against the 
directory named by __dirname (if defined) or the current working directory.

```js
// Importing a local module:
const myLocalModule = require('./path/myLocalModule');

// Importing a JSON file:
const jsonData = require('./path/filename.json');

// Importing a module from node_modules or Node.js built-in module:
const crypto = require('crypto');
```

https://nodejs.org/api/os.html
https://nodejs.org/api/fs.html
https://nodejs.org/api/path.html


### Заключение

Кратко повторить пройденный материал.

Студенты переходят к выполнению самостоятельных заданий. Кратко описать, что
нужно сделать в заданиях. Обратить внимание на раздел `Теоретические 
сведения`, а также на подсказки к заданиям.

Тем, у кого есть долги, следует сдать их перед началом работы над новыми 
заданиями.