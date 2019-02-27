const express = require("express");
const server = express();

server.get("/", function(request, response) {
  console.log(new Date);
  response.send("<h1>Главная страница</h1>");
});

server.listen(30000, function() {
  console.log("Сервер запущен");
});