# 16. npm и `package.json`. Nodemon. Express (ч.1)

## Темы занятия

- [npm и `package.json`](https://metanit.com/web/nodejs/2.4.php):
Ц
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

Файл `server.js`