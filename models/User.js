export default class User {
  #type = "user";
  #password;
  #id;
  #email;
  firstName;
  username;

  constructor(id, username, firstName, email, password) {
    this.#id = id;
    this.username = username;
    this.firstName = firstName;
    this.#email = email;
    this.#password = password;
  }
}
