export default class VideoStorage {
  #user; //private
  #id;
  //Публичные массивы
  #videoIds = []; //public
  #archiveIds = [];
  #storageIds = []; //static этот массив хранит в себе все id класса VideoStorage
  static smth = 4;

  constructor(_user) {
    this.#user = _user;
    this.#id = this.#storageIds.length + 1;
    console.log(this.#storageIds.length);
    this.#storageIds.push(this.#id);
    console.log(this.#storageIds);
  }

  static addId() {
    console.log("add id");
  }

  addVideo(id) {
    let result = this.#videoIds.find((vId) => {
      return id == vId; //Метод find. -Если в этом массиве будет видео id, которое совпадает с id другого видео переданное в функцию, которое мы передаем в функцию, тогда он вернет это id этого видео
    });
    if (!result) {
      this.#videoIds.push(id);
      console.log(`Добавлено видео c id: ${id}`);
    } else {
      console.warn(`Видео с id ${id} уже существует`);
    }
  }

  removeVideo(id) {
    // Используем метод findIndex()
    // let index = this.videos.findIndex(function (v) {
    //   return v.id === videoId;
    // });
    // Альтернативные записи колбэка
    let index = this.#videoIds.findIndex((vId) => vId === id);
    if (index !== -1) {
      this.#videoIds.splice(index, 1);
      console.log(`Удалено видео с id: ${id}`);
    } else {
      console.warn(`Видео с id ${id} не найдено`);
    }
    // v — это параметр функции, представляющий текущий элемент массива videos на каждой итерации. Другими словами, v — это один из объектов видео в массиве.return v.id === videoId;:

    // return v.id === videoId; - Эта строка проверяет, равен ли id текущего видео (v.id) переданному аргументу videoId.
    // Если v.id равно videoId, функция возвращает true, и findIndex останавливается на этом элементе, возвращая его индекс.
    // Если v.id не равно videoId, функция возвращает false, и findIndex продолжает проверять следующие элементы массива.
  }

  sortVideos(type) {
    //Сортировка по возрастанию длины видео
    function logCase(value1, value2) {
      console.log(`Видео отсортированы по ${value1} ${value2}`);
      console.log(this.videos);
    }

    let sortVideos = [];
    switch (type) {
      case "lenghtAscending":
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
