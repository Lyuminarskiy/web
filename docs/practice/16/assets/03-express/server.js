const express = require("express");
const server = express();

function logger(request, response, next) {
  let now = new Date();
  let h = now.getHours();
  let m = now.getMinutes();
  let s = now.getSeconds();
  let ua = request.get("user-agent");
  console.log(`${h}:${m}:${s} ${request.method} ${request.url} ${ua}`);
  
  next();
}

server.use(logger);
server.use(express.static(__dirname + "/public"));

server.listen(30000, function() {
  console.log("Сервер запущен");
});