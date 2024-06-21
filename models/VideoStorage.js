/**
 * Класс VideoStorage предоставляет функциональность для управления видеохранилищем пользователя.
 * Методы позволяют добавлять, удалять, сортировать и фильтровать видео. Приватные поля и методы ограничивают доступ к внутренним данным и логике класса, обеспечивая инкапсуляцию.
 */

export default class VideoStorage {
  #user;
  #id;
  #videoIds = []; // Массив, содержащий id видео, добавленных в это хранилище
  #archiveIds = []; // Массив, содержащий id архивных видео
  static #storageIds = []; // static.Этот массив хранит в себе все id всех экземпляров класса VideoStorage
  static smth = 4; // статическая переменная

  constructor(_user) {
    // Конструктор принимает пользователя _user
    this.#user = _user; // Присваивает его приватному полю
    this.#id = VideoStorage.#storageIds.length + 1; // Присваивает уникальный id новому видеохранилищу, который равен длине массива #storageIds плюс один.
    console.log(VideoStorage.#storageIds.length);
    VideoStorage.#storageIds.push(this.#id); //Добавляет этот идентификатор в массив #storageIds
    console.log(VideoStorage.#storageIds);
  }

  static addId() {
    // Статический метод, который можно вызывать без создания экземпляра класса VideoStorage
    console.log("add id");
  }

  // Методы экземпляра класса

  /**
   * Добавляет видео в хранилище
   * @param {String} id - Идентификатор видео . Стринга или число?
   * добавляет id видео в массив #videoIds, если его там еще нет.
   * Он использует метод find для поиска совпадения.
   * Если совпадение не найдено (`result` будет `underfined`), id добавляется в массив.
   * Если видео с таким id уже существует, выводится предупреждающее сообщение.
   */

  addVideo(id) {
    function findVideo(vId) {
      return id === vId;
    }
    // const findVideo = (vId) => id === vId;

    let result = this.#videoIds.find(findVideo);

    // Альтернативная запись
    // let result = this.#videoIds.find((vId) => {
    //   return id === vId;
    // });

    if (!result) {
      this.#videoIds.push(id);
      console.log(`Добавлено видео c id: ${id}`);
    } else {
      console.warn(`Видео с id ${id} уже существует`);
    }
  }

  /**
   * Удаляет видео из хранилища
   * @param {String} id - Идентификатор видео . Стринга или число?
   * Метод removeVideo удаляет id из массива #videoIds.
   * Он использует метод findIndex для поиска индекса видео по его id.
   * Если видео найдено, оно удаляется, если нет - выводится предупреждающее сообщение.
   */

  removeVideo(id) {
    function findVideo(vId) {
      return id === vId;
    }

    // let index = this.#videoIds.findIndex(function (v) {
    //   return v.id === videoId;
    // });

    // Альтернативные записи колбэка
    let index = this.#videoIds.findIndex(findVideo);
    if (index !== -1) {
      this.#videoIds.splice(index, 1);
      console.log(`Удалено видео с id: ${id}`);
    } else {
      console.warn(`Видео с id ${id} не найдено`);
    }
  }
  /**
   * v — это параметр функции, представляющий текущий элемент массива videos на каждой итерации.
   * Другими словами, v — это один из объектов видео в массиве.return v.id === videoId;
   * return v.id === videoId; - Эта строка проверяет, равен ли id текущего видео (v.id) переданному аргументу videoId.
   * Если v.id равно videoId, функция возвращает true, и findIndex останавливается на этом элементе, возвращая его индекс.
   * Если v.id не равно videoId, функция возвращает false, и findIndex продолжает проверять следующие элементы массива.
   */

  /**
   * Сортирует видео в хранилище в соответствии с заданным типом сортировки.
   * @param {String} type - Тип сортировки: "lengthAscending", "lengthDescending", "nameAscending", "nameDescending".
   * @returns {Array} - Отсортированный массив видео.
   */

  sortVideos(type) {
    function logCase(value1, value2) {
      console.log(`Видео отсортированы по ${value1} ${value2}`);
      console.log(this.videos);
    }

    let sortVideos = [];
    switch (type) {
      case "lengthAscending":
        this.videos.sort((a, b) => a.length - b.length);
        logCase("возрастанию", "длины");
        break;
      case "lengthDescending":
        this.videos.sort((a, b) => b.length - a.length);
        logCase("убыванию", "длины");
        break;
      case "nameAscending":
        this.videos.sort((a, b) => a.title.localeCompare(b.title));
        logCase("возрастанию", "имени");
        break;
      case "nameDescending":
        this.videos.sort((a, b) => b.title.localeCompare(a.title));
        logCase("убыванию", "имени");
        break;
      default:
        console.warn("Некорректный тип сортировки");
        break;
    }
    return sortVideos;
  }

  /**
   * Фильтрует видео в хранилище по заданному критерию.
   * @param {String} type - Тип фильтрации: "over30", "under30".
   * @returns {Array} - Отфильтрованный массив видео.
   */

  filterVideos(type) {
    let filterVideos = [];
    switch (type) {
      case "over30": // if else (type == "over30")
        console.log("Видео отфильтрованы (длительность больше 30 минут)");
        filterVideos = this.videos.filter((a) => a.length >= 1800);
        break;
      case "under30":
        console.log("Видео отфильтрованы (длительность меньше 30 минут)");
        filterVideos = this.videos.filter((a) => a.length <= 1800);
        break;
      default:
        console.warn("Некорректный тип фильтрации");
        break;
    }
    return filterVideos;
  }
}
