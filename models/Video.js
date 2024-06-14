export default class Video {
  #id;
  title;
  link;
  description;
  length;

  constructor(id, title, link, description, length) {
    this.#id = id;
    this.title = title;
    this.link = link;
    this.description = description;
    this.length = length;
  }

  get id() {
    return this.#id;
  }
}
