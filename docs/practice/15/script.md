---
sidebar: auto
---

# 15. HTTP

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

### Модуль HTTP

Пример создания простейшего веб-сервера на Node.js.

Файл `main.js`:

```js
const http = require("http");
const fs = require("fs");
const os = require("os");
const process = require("process");

function listener(request, response) {
  console.log(`URL: ${request.url}`);

  if(request.url === '/') {
    fs.readFile("public/index.html", function(err, data) {
      let uptime = process.uptime().toFixed();
      data = data.toString()
        .replace("{{os}}", os.type())
        .replace("{{uptime}}", uptime);

      response.end(data);
    });
  }
  else if(request.url.startsWith("/public/")) {
    let path = request.url.substr(1);

    fs.readFile(path, function(err, data) {
      if(err) {
        response.statusCode = 404;
        response.end("Resource not found!");
      }
      else {
        response.end(data);
      }
    });
  }
  else {
    response.statusCode = 404;
    response.end("Resource not found!");
  }
}

let server = http.createServer(listener);
server.listen(80);
```

Файл `public/index.html`:

```html
<!DOCTYPE html>

<html lang="ru">

<head>
  <meta charset="utf-8">
  <title>Заголовок документа</title>
</head>

<body>
  <h1>Заголовок</h1>
  <p>Абзац</p>
  <ul>
    <li>Пункт первый</li>
    <li>Пункт второй</li>
  </ul>

  <a href="/public/about.html">О компании</a>

  <p>Операционная система на сервере: <span>{{os}}</span></p>
  <p>Время работы сервера: <span>{{uptime}} секунд</span></p>
</body>

</html>
```

Файл `public/about.html`:

```html
<!DOCTYPE html>

<html lang="ru">

<head>
  <meta charset="utf-8">
  <title>О компании</title>
</head>

<body>
  <h1>О компании</h1>
</body>

</html>
```

### Заключение

Кратко повторить пройденный материал.

Студенты переходят к выполнению самостоятельных заданий. Кратко описать, что
нужно сделать в заданиях. Обратить внимание на раздел `Теоретические 
сведения`, а также на подсказки к заданиям.

Тем, у кого есть долги, следует сдать их перед началом работы над новыми 
заданиями.

### Итог блока

Подвести итог блока _JavaScript и Node.js_.