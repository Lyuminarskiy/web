const fs = require("fs");

// Синхронно загружаем данные из файлов JSON при импорте модуля.
const posts = require("../data/posts.json");
const comments = require("../data/comments.json");
const users = require("../data/users.json");
const categories = require("../data/categories.json");
const tags = require("../data/tags.json");

// Реализуйте все приведённые ниже методы.
module.exports = {
  /**
   * Возвращает пост по его идентификатору.
   *
   * @param {number} id - Идентификатор поста.
   * @return {object} Пост.
   */
  getPost(id) {
    return posts.find((post) => post.id === id);
  },

  /**
   * Возвращает все посты.
   *
   * @return {array} Посты.
   */
  getPosts() { /* ... */ },

  /**
   * Возвращает комментарий по его идентификатору.
   *
   * @param {number} id - Идентификатор комментария.
   * @return {object} Комментарий.
   */
  getComment(id) { /* ... */ },

  /**
   * Возвращает все комментарии к посту по его идентификатору.
   *
   * @param {number} id - Идентификатор поста.
   * @return {array} Комментарии к посту.
   */
  getPostComments(id) { /* ... */ },

  /**
   * Возвращает все комментарии.
   *
   * @return {array} Комментарии.
   */
  getComments() { /* ... */ },

  /**
   * Возвращает пользователя по его идентификатору.
   *
   * @param {number} id - Идентификатор пользователя.
   * @return {object} Пользователь.
   */
  getUser(id) { /* ... */ },

  /**
   * Возвращает все посты пользователя по его идентификатору.
   *
   * @param {number} id - Идентификатор пользователя.
   * @return {array} Посты пользователя.
   */
  getUserPosts(id) { /* ... */ },

  /**
   * Возвращает все комментарии пользователя по его идентификатору.
   *
   * @param {number} id - Идентификатор пользователя.
   * @return {array} Комментарии пользователя.
   */
  getUserComments(id) { /* ... */ },

  /**
   * Возвращает всех пользователей.
   *
   * @return {array} Пользователи.
   */
  getUsers() { /* ... */ },

  /**
   * Возвращает категорию по её идентификатору.
   *
   * @param {number} id - Идентификатор категории.
   * @return {object} Категория.
   */
  getCategory(id) { /* ... */ },

  /**
   * Возвращает все посты в категории по её идентификатору.
   *
   * @param {number} id - Идентификатор категории.
   * @return {array} Посты в категории.
   */
  getCategoryPosts(id) { /* ... */ },

  /**
   * Возвращает все категории.
   *
   * @return {array} Категории.
   */
  getCategories() { /* ... */ },

  /**
   * Возвращает тэг по его идентификатору.
   *
   * @param {number} id - Идентификатор тэга.
   * @return {object} Тэг.
   */
  getTag(id) {
    return tags.find((tag) => tag.id === id);
  },

  /**
   * Возвращает все посты по тегу по его идентификатору.
   *
   * @param {number} id - Идентификатор тэга.
   * @return {array} Посты по тэгу.
   */
  getTagPosts(id) { /* ... */ },

  /**
   * Возвращает все тэги.
   *
   * @return {array} Тэги.
   */
  getTags() { /* ... */ }
};