export default class User {
  #type = "user";
  #password;
  #id;
  #email;
  firstName;
  username;

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
