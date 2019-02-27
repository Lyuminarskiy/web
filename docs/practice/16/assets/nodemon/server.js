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