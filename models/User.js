/**
 * Класс User представляет собой модель пользователя.
 * Содержит приватные и публичные поля для идентификации, безопасности и базовой информации о пользователе
 */
import json from "../database/users.json";
export default class User {
  #type = "user";
  #password;
  #id;
  #email;
  firstName;
  username;

  /**
   * @param {Number} id
   */
  constructor(id) {
    this.#id = id;
  }

  /**
   * Передаем публичную информацию
   * @param {String} firstName имя user
   * @param {String} username никнейм user
   */
  setPublicInformation(firstName, username) {
    this.firstName = firstName;
    this.username = username;
  }
  /**
   * Передаем приватную информацию
   * @param {String} password пароль user
   * @param {String} email email user
   */
  setPrivateInformation(password, email) {
    this.#password = password;
    this.#email = email;
  }

  setInformationToDataBase() {
    const info = {
      id: this.#id,
      type: this.#type,
      password: this.#password,
      email: this.#email,
      firstName: this.firstName,
      username: this.username,
    };
    // TODO
    // 1) запарсить info в JSON,
    // 2) найти по id в JSON нужное поле
    // 3) перезаписать поле с таким же ID.

    // return info;
    // 1) запарсить info в JSON,
    let json_info = JSON.stringify(info);
    console.log("json_info: ", json_info);
    // 2) найти по id в JSON нужное поле
    // console.log(json.id);
  }
}

/**
 * Класс Admin представляет собой модель пользователя, наследуемую от класса User.
 * Добавляет приватное поле "пароль от базы данных" к базовым характеристикам пользователя.
 */

export class Admin extends User {
  #passwordToDataBase; // Приватное поле для хранения пароля от базы данных
  /**
   * Создает новый экземпляр администратора.
   * @param {Number} id - Идентификатор админа

   */
  constructor(id) {
    super(id);
    // this.#passwordToDataBase = passwordToDataBase;
  }
  /**
   * Метод для админа: блокировка пользователя
   * @param {String} username - Имя пользователя, которого нужно заблокировать
   */

  blockUser(username) {
    console.log(`Пользователь ${username} заблокирован`);
  }
}
