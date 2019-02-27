# 16. npm и `package.json`. Nodemon. Express (ч.1)

## Темы занятия

- [npm и `package.json`](https://metanit.com/web/nodejs/2.4.php):

  - [install](https://docs.npmjs.com/cli/install.html) -
  устанавливает пакет и все пакеты, от которых он зависит.
  - [uninstall](https://docs.npmjs.com/cli/uninstall) -
  удаляет пакет и всё, что было установлено вместе с ним.
  - [update](https://docs.npmjs.com/cli/update.html) -
  обновляет пакет до последней версии.
  - [run-script](https://docs.npmjs.com/cli/run-script.html) -
  запускает одну из команд, указанных в свойстве `scripts` файла `package.json`. 
  - [start](https://docs.npmjs.com/cli/start.html) -
  запускает команду `start` из файла `package.json`,
  сокращение от `npm run-sctipt start`.
  
- [Nodemon](https://metanit.com/web/nodejs/2.6.php) - утилита для 
автоматического перезапуска сервера при любом изменении в исходном коде. 
- [Express](https://metanit.com/web/nodejs/4.1.php) - фреймворк для
веб-приложений Node.js.

## Теоретические сведения

### Nodemon

Файл `server.js`:

```js
const http = require("http");

function listener(request, response) {
  console.log(new Date);

  response.setHeader("Content-type", "text/plain; charset=UTF-8;");
  response.end("Привет, мир!");
};

const server = http.createServer(listener);
server.listen(30000, () => {
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