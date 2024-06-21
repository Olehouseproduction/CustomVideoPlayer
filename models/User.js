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
   * @param {Number} id - Идентификатор пользователя (Стринга или намбер)
   */
  constructor(id) {
    this.#id = id;
    // this.username = username;
    // this.firstName = firstName;
    // this.#email = email;
    // this.#password = password;
  }

  /**
   * Передаем публичную информацию
   * @param {String} firstName имя user
   * @param {String} username никнейм user
   */
  setPublicInformation(firstName,
    username) {
      this.firstName = firstName;
      this.username = username
  }
  /**
   * Передаем приватную информацию
   * @param {String} password пароль user
   * @param {String} email email user
   */
  setPrivateInformation(password, email) {
    this.#password = password
    this.#email = email
  }

  setInformationToDataBase() {
    const info = {
      id: this.#id,
      type: this.#type,
      password: this.#password,
      email: this.#email,
      firstName: this.firstName,
      username: this.username
    }
    // TODO 
    // 1) запарсить info в JSON, 
    // 2) найти по id в JSON нужное поле 
    // 3) перезаписать поле с таким же ID.


    return info
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
