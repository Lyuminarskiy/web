const express = require("express");
const handlers = require("./handlers.js");

// Получаем номер порта через параметр командной строки.
// Если параметр не был указан, то выбираем порт по умолчанию.
const DEFAULT_PORT = 80;
const PORT_PARAMETER_NUMBER = 2;
const PORT = parseInt(process.argv[PORT_PARAMETER_NUMBER]) || DEFAULT_PORT;

// Создаём приложение Express.
const app = express();

// Подключаем шаблонизатор Handlebars.
app.set("view engine", "hbs");

// Регистрируем функции промежуточной обработки запросов.
app.use(handlers.log);
app.use("/client", handlers.client);

// Регистрируем обработчики запросов по конечным точкам сервера.
app.get("/", handlers.index);
app.get("/index.html", handlers.index);
app.get("/post/:id", handlers.post);

// Запускаем сервер на прослушивание запросов.
app.listen(PORT,
  () => console.log(`Сервер начал прослушивание на порту ${PORT}`));