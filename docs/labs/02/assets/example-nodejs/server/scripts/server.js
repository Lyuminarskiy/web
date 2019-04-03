const http = require("http");
const loader = require("./loader.js");

/**
 * Обработчик запросов на сервер.
 *
 * @param request Запрос клиента.
 * @param response Ответ сервера.
 */
function listener(request, response) {
  console.log(`${Date()} | ${request.method} ${request.url}`);

  // Получение статических ресурсов.
  if (request.url.startsWith("/client/")) {
    loader.getClientResource(response, request.url);
  }

  // Получение страницы поста.
  else if (request.url.startsWith("/post/")) {
    const postId = parseInt(request.url
      .split("/post/")
      .pop());

    loader.getPostPage(response, postId);
  }

  // Получение главной страницы.
  else if (request.url.startsWith("/")
    || request.url.startsWith("/index.html")) {
    loader.getIndexPage(response);
  }

  // Обработка некорректного запроса.
  else {
    response.statusCode = 404;
    response.end();
  }
}

// Получаем номер порта через параметр командной строки.
// Если параметр не был указан, то выбираем порт по умолчанию.
const DEFAULT_PORT = 80;
const PORT_PARAMETER_NUMBER = 2;
const PORT = parseInt(process.argv[PORT_PARAMETER_NUMBER]) || DEFAULT_PORT;

http
  .createServer(listener)
  .listen(PORT,
    () => console.log(`Сервер начал прослушивание на порту ${PORT}`));