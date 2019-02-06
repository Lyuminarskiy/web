const http = require("http");
const fs = require("fs");
const os = require("os");
const process = require("process");

function listener(request, response) {
  console.log(`URL: ${request.url}`);

  if(request.url === '/') {
    fs.readFile("public/index.html", function(err, data) {
      let uptime = process.uptime().toFixed();
      data = data.toString()
        .replace("{{os}}", os.type())
        .replace("{{uptime}}", uptime);

      response.end(data);
    });
  }
  else if(request.url.startsWith("/public/")) {
    let path = request.url.substr(1);

    fs.readFile(path, function(err, data) {
      if(err) {
        response.statusCode = 404;
        response.end("Resource not found!");
      }
      else {
        response.end(data);
      }
    });
  }
  else {
    response.statusCode = 404;
    response.end("Resource not found!");
  }
}

let server = http.createServer(listener);
server.listen(80);