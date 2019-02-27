# 16. npm и `package.json`. Nodemon. Express (ч.1)

## Темы занятия

- [npm и `package.json`](https://metanit.com/web/nodejs/2.4.php):

  - [`install`](https://docs.npmjs.com/cli/install.html) -
  устанавливает пакет и все пакеты, от которых он зависит.
  - [`uninstall`](https://docs.npmjs.com/cli/uninstall) -
  удаляет пакет и всё, что было установлено вместе с ним.
  - [`update`](https://docs.npmjs.com/cli/update.html) -
  обновляет пакет до последней версии.
  - [`run-script`](https://docs.npmjs.com/cli/run-script.html) -
  запускает одну из команд, указанных в свойстве `scripts` файла `package.json`. 
  - [`start`](https://docs.npmjs.com/cli/start.html) -
  запускает команду `start` из файла `package.json`,
  сокращение от `npm run-sctipt start`.
  - [`package.json`](https://docs.npmjs.com/files/package.json) -
  файл, хранит информацию о проекте.
  - [`package-lock.json`](https://docs.npmjs.com/files/package-lock.json) -
  файл, хранит дерево зависимостей пакетов в проекте.
  
- [Nodemon](https://metanit.com/web/nodejs/2.6.php) - утилита для 
автоматического перезапуска сервера при любом изменении в исходном коде.

- [Express](https://metanit.com/web/nodejs/4.1.php) - фреймворк для
веб-приложений Node.js:

  - [Middleware](https://metanit.com/web/nodejs/4.2.php) -
  функции промежуточной обработки.
  - [`express.static()`](https://metanit.com/web/nodejs/4.4.php) -
  встроенная функция промежуточной обработки, отвечает за 
  предоставление статических ресурсов.
  - [`app.use()`](https://expressjs.com/ru/4x/api.html#app.use) - 
  подключает функцию промежуточной обработки.
  - [`app.get(path, callback)`
  ](https://expressjs.com/ru/4x/api.html#app.get.method) - 
  направляет HTTP GET запросы на путь `path` с обработчиком `callback`.
  - [`res.send()`](https://expressjs.com/ru/4x/api.html#res.send) -
  отправляет HTTP ответ клиенту.
  - [`res.sendFile()`](https://expressjs.com/ru/4x/api.html#res.sendFile) -
  отправляет файл клиенту по HTTP.
  - [`res.sendStatus()`](https://expressjs.com/ru/4x/api.html#res.sendStatus) -
  отправляет код состояния HTTP клиенту.

## Теоретические сведения

### npm и `package.json`

Установка пакета Express:

```
npm install express
```

После установки появится каталог `node_modules`, в которой будут хранится все 
установленные внешние модули.

Теперь мы можем использовать Express:

```js
const express = require("express");

const server = express();
server.listen(30000, function() {
  console.log("Сервер начал прослушивание запросов");
});
```

Для более удобного управления конфигурацией и пакетами проекта
применяется файл конфигурации `package.json`. Вот его минимальное содержимое:

```json
{
  "name": "web-course",
  "version": "1.0.0"
}
```

Для указания зависимостей проекта в `package.json` при установке необходимо
указывать флаг `--save`:

```
npm install express --save
```

В этом случае информация о пакете добавится в свойство `dependencies`:

```json
{
  "name": "web-course",
  "version": "1.0.0",
  "dependencies": {
    "express": "^4.16.4"
  }
}
```

Для указания зависимостей проекта, которое применяется при разработке и 
тестировании, при установке необходимо указывать флаг `--save-dev`:

```
npm install nodemon --save-dev
```

В этом случае информация о пакете добавится в свойство `devDependencies`:

```json
{
  "name": "web-course",
  "version": "1.0.0",
  "scripts": {
    "start": "node server.js"
  },
  "dependencies": {
    "express": "^4.16.4"
  },
  "devDependencies": {
    "nodemon": "^1.18.10"
  }
}
```

Указание флага `--global` при установке пакете делает установку глобальной:

```
npm install nodemon --global
```

Указание зависимостей в `package.json` позволяет хранить основной код 
проекта без каталога `node_modules`. При необходимости загрузки всех пакетов 
достаточно выполнить команду:

```
npm install
```

Удаление пакета из каталога `node_modules`:

```
npm uninstall nodemon
```

Для Удаление пакета и из каталога `node_modules`, и из `package.json`, 
применяются флаги `--save` и `--save-dev`:

```
npm uninstall nodemon --save
```

Указание флага `--global` при удалении позволяет удалить глобальную установку:

```
npm uninstall nodemon --global
```

В свойстве `scripts` можно создавать сценарии для консольных команд:

```json
{
  "name": "web-course",
  "version": "1.0.0",
  "scripts": {
    "start": "node server.js"
  },
  "dependencies": {
    "express": "^4.16.4"
  }
}
```

Для выполнения сценария команды необходимо использовать команду `run`:

```
npm run start
```

Для зарезервированных названий сценариев возможен упрощённый запуск:

```
npm start
```  

### Nodemon

Файл `server.js`:

```js
const express = require("express");
const server = express();

server.get("/", function(request, response) {
  console.log(new Date);
  response.send("<h1>Главная страница</h1>");
});

server.listen(30000, function() {
  console.log("Сервер начал прослушивание запросов");
});
```

Запуск сервера:

```
node server.js
```

При изменении файла `server.js` необходимо вручную перезапускать сервер. 
Избежать этого поможет Nodemon.

Установка Nodemon (глобальная установка):

```
npm install nodemon --global
```

Теперь сервер надо запускать следующим образом:

```
nodemon server.js
```

### Express

Создадим сервер с тремя маршрутами:

```js
const express = require("express");
const server = express();

server.get("/", function(request, response) {
  console.log(new Date);
  response.send("<h1>Главная страница</h1>");
});
server.get("/about", function(request, response) {
  console.log(new Date);
  response.send("<h1>О сайте</h1>");
});
server.get("/contacts", function(request, response) {
  console.log(new Date);
  response.send("<h1>Контакты</h1>");
});

server.listen(30000, function() {
  console.log("Сервер начал прослушивание запросов");
});
```

Можно заметить, что во всех обработчиках мы отправляем в консоль текущие 
дату и время, а также устанавливаем заголовок `Content-Type`. Эту 
избыточность можно устранить с использованием функций промежуточной обработки:

```js
const express = require("express");
const server = express();

server.use(function(request, response, next) {
  let now = new Date();
  let h = now.getHours();
  let m = now.getMinutes();
  let s = now.getSeconds();
  let ua = req.get("user-agent");
  console.log(`${h}:${m}:${s} ${req.method} ${req.url} ${ua}`);

  next();
});

server.get("/", function(request, response) {
  response.send("<h1>Главная страница</h1>");
});
server.get("/about", function(request, response) {
  response.send("<h1>О сайте</h1>");
});
server.get("/contacts", function(request, response) {
  response.send("<h1>Контакты</h1>");
});

server.listen(30000, function() {
  console.log("Сервер начал прослушивание запросов");
});
```

Предоставление статических файлов:

```js
const express = require("express");
const server = express();

function logger(request, response, next) {
  let now = new Date();
  let h = now.getHours();
  let m = now.getMinutes();
  let s = now.getSeconds();
  let ua = req.get("user-agent");
  console.log(`${h}:${m}:${s} ${req.method} ${req.url} ${ua}`);

  next();
}

server.use(logger);
server.use(express.static(__dirname + "/public"));

server.listen(30000, function() {
  console.log("Сервер начал прослушивание запросов");
});
```