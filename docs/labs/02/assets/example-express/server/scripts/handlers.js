const path = require("path");
const express = require("express");
const fs = require("fs");
const data = require("./data.js");

// Вычисляем пути к файлам и каталогам.
const clientBase = "../../client";
const clientPath = path.resolve(__dirname, clientBase);
const indexPath = path.resolve(__dirname,
  `${clientBase}/pages/index/index.hbs`);
const postPath = path.resolve(__dirname,
  `${clientBase}/pages/post/post.hbs`);

// Статус HTTP запроса 404 Not Found.
const NOT_FOUND = 404;

module.exports = {
  /**
   * Промежуточный обработчик статических файлов.
   */
  client: express.static(clientPath),

  /**
   * Промежуточный обработчик запросов, выводит в консоль
   * информацию о запросе.
   *
   * @param {express.Request} request - Объект запроса клиента.
   * @param {express.Response} response - Объект ответа сервера.
   * @param {function} next - Следующий промежуточный обработчик запросов.
   */
  log(request, response, next) {
    console.log(`${Date()} | ${request.method} ${request.url}`);
    next();
  },

  /**
   * Отправляет клиенту главную страницу.
   *
   * @param {express.Request} request - Объект запроса клиента.
   * @param {express.Response} response - Объект ответа сервера.
   */
  index(request, response) {
    const page = parseInt(request.query.page);
    response.render(indexPath);
  },

  /**
   * Отправляет клиенту страницу поста по указанному идентификатору.
   *
   * @param {express.Request} request - Объект запроса клиента.
   * @param {express.Response} response - Объект ответа сервера.
   */
  post(request, response) {
    const postId = parseInt(request.params.id);
    const post = data.getPost(postId);

    if (post === undefined) {
      response.sendStatus(NOT_FOUND);
      return;
    }

    const tags = [];
    for (const tagId of post.tags) {
      const tag = data.getTag(tagId);
      tags.push(tag.name);
    }

    response.render(postPath, {
      image: post.image,
      title: post.title,
      body: post.body,
      tags
    });
  }
};