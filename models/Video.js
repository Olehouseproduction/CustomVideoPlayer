export default class Video {
  #id;
  title;
  link;
  description;
  length;
  techOpt = {
    ratio: null,
    width: null,
    height: null,
  };

  constructor(id, title, link, description, length, techOpt) {
    this.#id = id;
    this.title = title;
    this.link = link;
    this.description = description;
    this.length = length;
    this.techOpt = Object.assign({}, techOpt);
  }

  get id() {
    return this.#id;
  }

  checkRatio() {
    this.techOpt.ratio = this.techOpt.width / this.techOpt.height;
    this.techOpt.ratio = this.techOpt.ratio.toFixed(2);
    let ratioType = this.techOpt.height > this.techOpt.width ? "vertical" : "horizontal";
    return ratioType;
  }
}

export class Film extends Video {
  rating;
  constructor(id, title, link, description, length, width, height, rating) {
    super(id, title, link, description, length, width, height);
    this.rating = rating;
  }
}

export class Shorts extends Video {
  like;
  dislike;
  constructor(id, title, link, description, length, width, height, like, dislike) {
    super(id, title, link, description, length, width, height);
    this.like = like;
    this.dislike = dislike;
  }
}
