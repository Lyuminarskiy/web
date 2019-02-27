const express = require("express");

const app = express();
app.get("/", function(request, response) {
  response.end("Hello from Express!");
});
app.listen(30000);