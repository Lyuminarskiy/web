const express = require("express");
const app = express();
const parser = express.json();

/*const bodyParser = require("body-parser");
let parser = bodyParser.urlencoded({
  extended: false
});*/

// Счётчик количества запросов.
let count = 0;

app.get("/", function(request, response) {
  response.sendFile(__dirname + "/index.html");
});

app.post("/", parser, function(request, response) {
  // Обрабатываем ситуацию, когда отсутствует тело запроса.
  if(!request.body)
    return response.sendStatus(400);

  console.log(
    `${(new Date).toLocaleTimeString()}\n` +
    `ЗАПРОС №${++count}\n` +
    `Имя: ${request.body.name}\n` +
    `Возраст: ${request.body.age}\n`
  );

  // Задержка ответа на 1 секунду.
  setTimeout(() => response.json(request.body), 1000);
});

const server = app.listen(30000, () => {
  const port = server.address().port;
  console.log(`Сервер запущен по адресу http://localhost:${port}\n`);
});