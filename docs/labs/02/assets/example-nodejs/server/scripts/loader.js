const path = require("path");
const fs = require("fs");
const data = require("./data.js");

module.exports = {
  getClientResource(url, response) {
    const resourcePath = path.resolve(__dirname, `../../${url}`);
    console.log(resourcePath);
    fs.readFile(resourcePath, (err, data) => {
      if (err) {
        response.statusCode = 404;
        response.end();
      }
      else {
        response.end(data);
      }
    });
  },
  getPostPage(id, response) {
    const post = data.getPost(id);
    if (post === undefined) {
      response.statusCode = 404;
      response.end();
    }
    else {
      const postPath = path.resolve(__dirname, "../../client/pages/post/post.html");
      fs.readFile(postPath, "utf8", (err, data) => {
        if (err) {
          response.statusCode = 404;
          response.end();
        }

        const renderedData = data
          .replace("{{ image }}", post.image)
          .replace("{{ title }}", post.title)
          .replace("{{ body }}", post.body);

        console.log(renderedData);

        response.end(renderedData);
      });
    }
  },
  getIndexPage(response) {
    const indexPath = path.resolve(__dirname, "../../client/pages/index/index.html");
    fs.readFile(indexPath, "utf8", (err, data) => {
      if (err) {
        response.statusCode = 404;
        response.end();
      }
      else {
        response.end(data);
      }
    });
  }
};