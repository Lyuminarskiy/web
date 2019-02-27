const express = require("express");

const server = express();
server.listen(30000, function() {
  console.log("Сервер запущен");
});