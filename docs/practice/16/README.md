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
веб-приложений Node.js.

## Теоретические сведения

### npm и `package.json`

npm (Node Package Manager) - пакетный менеджер Node.js.

Установка пакета Express:

```
npm install express
```

После установки Express появится папка `node_modules`, в которой будут 
хранится все установленные внешние модули.

Теперь мы можем использовать Express:

```js
const express = require("express");

const app = express();
app.get("/", function(request, response) {
  response.end("Hello from Express!");
});
app.listen(30000);
```

Для более удобного управления конфигурацией и пакетами приложения в npm 
применяется файл конфигурации `package.json`:

```json
{
  "name": "web-course",
  "version": "1.0.0"
}
```

Здесь определены только две секции: имя проекта и его версия.
Это минимально необходимое определение файла `package.json`.

Удалим из проекта каталог node_modules и снова установим Express с помощью 
следующей команды:

```
npm install express --save
```

Флаг `--save` указывает, что информацию о добавленном пакете надо добавить в 
файл `package.json`:

```json
{
  "name": "web-course",
  "version": "1.0.0",
  "dependencies": {
    "express": "^4.16.4"
  }
}
```

Удаление пакета Express:

```
npm uninstall express
```

Эта команда удаляет пакет из папки `node_modules`. При этом в файле 
`package.json` информация о данном пакете остается. Чтобы удалить информацию
также и из `package.json`, применяется флаг `--save`:

```
npm uninstall express --save
```

npm позволяет определять в файле `package.json` команды, которые выполняют 
определенные действия:

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

Здесь добавлена секция `scripts`, которая определяет команду `start`.
Команд может быть сколько угодно в соответствии с целями и задачами 
разработчика.

Для выполнения подобных команд в терминале/командной строке надо выполнить 
следующую команду:

```
npm run start
```

Есть зарезервированные названия для команд, например - `start`. Для них 
возможен упрощённый запуск:

```
npm start
```  


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