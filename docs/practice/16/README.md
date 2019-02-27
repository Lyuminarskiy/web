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

Информация о пакете Express добавилась в секцию `dependencies`.

Файл `package.json` играет большую роль и может облегчить разработку в 
различных ситуациях. Например, при размещении в разных репозиториях нередко 
мы ограничены выделяемым дисковым пространством, тогда как папка 
`node_modules` со всеми загруженными пакетами может занимать довольно 
приличное пространство. В этом случае удобнее разместить основной код 
проекта без `node_modules`. В этом случае мы можем определить все пакеты в 
файле `package.json`, а затем для загрузки всех пакетов выполнить команду:

```
npm install
```

Эта команда возьмет определение всех пакетов из секций `dependencies` и 
загрузит их в проект.

Кроме пакетов, которые применяются в приложении, когда оно запущено (например,
Express), есть еще пакеты, которые применяются при разработке приложения и 
его тестировании. Такие пакеты добавляются в другую секцию - `devDependencies`.

Например, установим в проект пакет Nodemon:

```
npm install nodemon --save-dev
```

Флаг `--save-dev` указывает, что информацию о пакете следует сохранить в 
секции `devDependencies` файла `package.json`:

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

Удаление пакета Nodemon:

```
npm uninstall nodemon
```

Эта команда удаляет пакет из папки `node_modules`. При этом в файле 
`package.json` информация о данном пакете остается. Чтобы удалить информацию
также и из `package.json`, применяется флаг `--save`:

```
npm uninstall nodemon --save
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