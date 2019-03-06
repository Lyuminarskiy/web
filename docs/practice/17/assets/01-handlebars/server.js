const express = require("express");
const app = express();

app.set("view engine", "hbs");

app.get("/", function(request, response) {
  response.render("index.hbs", {
    header: "Заголовок",
    text: "Основы работы с Express.",
    students: [
      "Дима",
      "Иван",
      "Евгений",
      "Александр"
    ]
  });
});

const server = app.listen(30000, () => {
  const port = server.address().port;
  console.log(`Сервер запущен по адресу http://localhost:${port}`);
});