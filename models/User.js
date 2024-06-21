/**
 * Класс User представляет собой модель пользователя.
 * Содержит приватные и публичные поля для идентификации, безопасности и базовой информации о пользователе
 */

export default class User {
  #type = "user";
  #password;
  #id;
  #email;
  firstName;
  username;

  /**
   *
   * @param {Number} id - Идентификатор пользователя (Стринга или намбер)
   * @param {String} username - Имя (логин)
   * @param {String} firstName - Имя
   * @param {String} email - Адрес электронной почты
   * @param {String} password - Пароль
   */

  constructor(id, username, firstName, email, password) {
    this.#id = id;
    this.username = username;
    this.firstName = firstName;
    this.#email = email;
    this.#password = password;
  }
}

// Добавить админа. Методы. Приватное поле passwordToDataBase

/**
 * Класс Admin представляет собой модель пользователя, наследуемую от класса User.
 * Добавляет приватное поле "пароль от базы данных" к базовым характеристикам пользователя.
 */

export class Admin extends User {
  #passwordToDataBase; // Приватное поле для хранения пароля от базы данных
  /**
   * Создает новый экземпляр администратора.
   * @param {Number} id - Идентификатор админа
   * @param {String} username - Имя (логин)
   * @param {String} firstName - Имя
   * @param {String} email - Адрес электронной почты
   * @param {String} password - Пароль
   * @param {String} passwordToDataBase - Пароль от БД
   */
  constructor(id, username, firstName, email, password, passwordToDataBase) {
    super(id, username, firstName, email, password);
    this.#passwordToDataBase = passwordToDataBase;
  }
  /**
   * Метод для админа: блокировка пользователя
   * @param {String} username - Имя пользователя, которого нужно заблокировать
   */

  blockUser(username) {
    console.log(`Пользователь ${username} заблокирован`);
  }
}
