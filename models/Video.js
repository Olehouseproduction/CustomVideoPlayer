/**
 * Класс Video представляем собой базовую модель видео.
 * Содержит основные характеристики видео и методы для работы с техническими параметрами.
 */

export default class Video {
  #id;
  title;
  link;
  description;
  length;
  techOpt = {
    ratio: null, // Отношение ширины к высоте
    width: null, // Ширина видео
    height: null, // Высота видео
  };
  /**
   *
   * @param {String} id - Идентификатор видео.
   * @param {String} title - Название видео.
   * @param {String} link - Ссылка на видео.
   * @param {String} description - Описание видео.
   * @param {Number} length - Длительность видео в секундах.
   * @param {Object} techOpt - Технические параметры видео (опционально).
   */

  constructor(id, title, link, description, length, techOpt) {
    this.#id = id;
    this.title = title;
    this.link = link;
    this.description = description;
    this.length = length;
    this.techOpt = Object.assign({}, techOpt); // Копирует переданные технические параметры
  }

  /**
   * Возвращает приватное поле #id.
   * @returns {Number} - Идентификатор видео.
   */

  get id() {
    return this.#id;
  }

  /**
   * Вычисляет и возвращает тип соотношения сторон видео (вертикальное или горизонтальное).
   * Устанавливает значение поля techOpt.ratio.
   * @returns {String} - Тип соотношения сторон видео: "vertical" или "horizontal".
   */

  checkRatio() {
    this.techOpt.ratio = this.techOpt.width / this.techOpt.height;
    this.techOpt.ratio = this.techOpt.ratio.toFixed(2);
    let ratioType = this.techOpt.height > this.techOpt.width ? "vertical" : "horizontal";
    return ratioType;
  }
}

/**
 * Класс Film представляет собой модель фильма, наследуемую от класса Video.
 * Добавляет оценку (рейтинг) фильма к базовым характеристикам видео.
 */

export class Film extends Video {
  rating;
  /**
   * Создает новый экземпляр фильма.
   * @param {Number} id - Идентификатор фильма.
   * @param {String} title - Название фильма.
   * @param {String} link - Ссылка на фильм.
   * @param {String} description - Описание фильма.
   * @param {Number} length - Длительность фильма в секундах.
   * @param {Number} width - Ширина фильма.
   * @param {Number} height - Высота фильма.
   * @param {Number} rating - Рейтинг фильма.
   */
  constructor(id, title, link, description, length, width, height, rating) {
    super(id, title, link, description, length, width, height);
    this.rating = rating;
  }
}

/**
 * Класс Shorts представляет собой модель короткометражного фильма, наследуемую от класса Video.
 * Добавляет поля "лайк" и "дизлайк" к базовым характеристикам видео.
 */

export class Shorts extends Video {
  like;
  dislike;

  /**
   * Создает новый экземпляр короткометражного фильма.
   * @param {Number} id - Идентификатор короткометражного фильма.
   * @param {String} title - Название короткометражного фильма.
   * @param {String} link - Ссылка на короткометражный фильм.
   * @param {String} description - Описание короткометражного фильма.
   * @param {Number} length - Длительность короткометражного фильма в секундах.
   * @param {Number} width - Ширина короткометражного фильма.
   * @param {Number} height - Высота короткометражного фильма.
   * @param {Number} like - Количество лайков короткометражного фильма.
   * @param {Number} dislike - Количество дизлайков короткометражного фильма.
   */
  constructor(id, title, link, description, length, width, height, like, dislike) {
    super(id, title, link, description, length, width, height);
    this.like = like;
    this.dislike = dislike;
  }
}
