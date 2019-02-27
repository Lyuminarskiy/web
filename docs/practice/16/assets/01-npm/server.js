const express = require("express");
const server = express();

server.get("/", function(request, response) {
  response.setHeader("Content-Type", "text/plain; charset=UTF-8;");
  response.end("Привет, мир!");
});

server.listen(30000, function() {
  console.log("Сервер начал прослушивание запросов");
});