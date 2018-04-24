'use strict';

/**
 * Клиент для сервиса.
 */
export default class Client {
  /**
   * Базовый адрес сервиса.
   */
  static get baseUrl() {
    return 'https://jsonplaceholder.typicode.com/';
  }

  /**
   * Возвращает список всех постов
   * или один пост, если указан идентификатор поста.
   *
   * @param {Number} postId идентификатор поста.
   * @returns {Promise<*>} список постов.
   */
  static async getPosts(postId = 0) {
    const request = (postId <= 0)
      ? fetch(this.baseUrl + 'posts')
      : fetch(this.baseUrl + `posts/${postId}`);

    return await request.then(response => response.json());
  }

  /**
   * Возвращает список всех комментариев ко всем постам
   * или всех комментариев к одному посту, если указан идентификатор поста.
   *
   * @param {Number} postId идентификатор поста.
   * @returns {Promise<*>} список комментариев.
   */
  static async getComments(postId = 0) {
    const request = (postId <= 0)
      ? fetch(this.baseUrl + 'comments')
      : fetch(this.baseUrl + `comments?postId=${postId}`);

    return await request.then(response => response.json());
  }

  /**
   * Возвращает список всех пользователей
   * или одного пользователя, если указан идентификатор пользователя.
   *
   * @param {Number} userId идентификатор пользователя.
   * @returns {Promise<*>} список всех пользователей.
   */
  static async getUsers(userId = 0) {
    const request = (userId <= 0)
      ? fetch(this.baseUrl + 'users')
      : fetch(this.baseUrl + `users/${userId}`);

    return await request.then(response => response.json());
  }
}