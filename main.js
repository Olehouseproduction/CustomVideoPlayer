import "./style.css";
class Video {
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

class VideoStorage {
  #user;
  #id;
  static #idStorage = [];
  //Публичные массивы
  videos = [];
  archive = [];

  constructor(_user) {
    this.#user = _user;
  }

  static addId() {
    console.log("add id");
  }

  addVideo(video) {
    let result = this.videos.find((v) => {
      return v.id == video.id; //Метод find. -Если в этом массиве будет видео, в котором id совпадает с id другого видео, которое мы передаем в функцию, тогда он вернет это видео
    });
    if (!result) {
      this.videos.push(video);
      console.log(`Добавлено видео c id: ${video.id}`);
    } else {
      console.warn(`Видео с id ${video.id} уже существует`);
    }
  }

  removeVideo(videoId) {
    // Используем метод findIndex()
    // let index = this.videos.findIndex(function (v) {
    //   return v.id === videoId;
    // });
    // Альтернативные записи колбэка
    let index = this.videos.findIndex((v) => v.id === videoId);
    if (index !== -1) {
      this.videos.splice(index, 1);
      console.log(`Удалено видео с id: ${videoId}`);
    } else {
      console.warn(`Видео с id ${videoId} не найдено`);
    }
    // v — это параметр функции, представляющий текущий элемент массива videos на каждой итерации. Другими словами, v — это один из объектов видео в массиве.return v.id === videoId;:

    // return v.id === videoId; - Эта строка проверяет, равен ли id текущего видео (v.id) переданному аргументу videoId.
    // Если v.id равно videoId, функция возвращает true, и findIndex останавливается на этом элементе, возвращая его индекс.
    // Если v.id не равно videoId, функция возвращает false, и findIndex продолжает проверять следующие элементы массива.

    // console.log("remove video: ", videoId);
    //Передаем id и по нему удаляем видео..
  }

  sortVideos(type) {
    //Сортировка по возрастанию длины видео
    if (type === "lenghtAscending") {
      this.videos.sort((a, b) => a.length - b.length);
      console.log("Видео отсортированы по возрастанию длины");
      console.log(this.videos);
    }
    //Сортировка по убыванию длины видео
    else if (type === "lengthDescending") {
      this.videos.sort((a, b) => b.length - a.length);
      console.log("Видео отсортированы по убыванию длины");
      console.log(this.videos);
    }
    //Сортировка по возрастанию имени видео
    else if (type === "nameAscending") {
      this.videos.sort((a, b) => a.title.localeCompare(b.title));
      console.log("Видео отсортированы по возрастанию имени");
      console.log(this.videos);
    }
    //Сортировка по убыванию имени видео
    else if (type === "nameDescending") {
      this.videos.sort((a, b) => b.title.localeCompare(a.title));
      console.log("Видео отсортированы по убыванию имени");
      console.log(this.videos);
    }

    //Три type: по убыванию и по возрастанию длины, имя. На основе этого мы сортируем. Должен меняться порядок массива. Метод sort.
    //
  }

  filterVideos(type) {
    if (type === "over30") {
      console.log("Видео отфильтрованы (длительность больше 30 минут)");
      return this.videos.filter((a) => a.length >= 1800);
    } else if (type === "under30") {
      console.log("Видео отфильтрованы (длительность меньше 30 минут)");
      return this.videos.filter((a) => a.length <= 1800);
    } else {
      console.warn("Некорректный тип фильтрации");
      return [];
    }

    //По длине: больше 30 минут, и меньше. Мы должны возвращать новый массив по фильтру.
  }
}

// Переделать под switchcase filter, sort

class User {
  #password;
  #id;
  #email;
  firstName;
  username;

  constructor(id, firstName, username, email, password) {
    this.#id = id;
    this.username = username;
    this.firstName = firstName;
    this.#email = email;
    this.#password = password;
  }
}

// Создаём экземпляр класса User
const user_1 = new User(25, "olo", "olo", "l", 123);
const video_1 = new Video(1, "Title", "http://link", "Description");
const video_2 = new Video(2, "JavaScript Basics", "http://link", "Description", 3600);
const video_3 = new Video(3, "HTML Essentials", "http://link", "Description", 1800);
const video_4 = new Video(4, "CSS Fundamentals", "http://link", "Description", 900);
const videoStorage_1 = new VideoStorage(user_1);

//addVideo — это не статический метод, его нужно вызывать на экземпляре класса
// VideoStorage.addVideo(video_1); //неправильно
videoStorage_1.addVideo(video_1);
videoStorage_1.addVideo(video_1);
videoStorage_1.addVideo(video_2);
videoStorage_1.addVideo(video_3);
videoStorage_1.addVideo(video_4);
videoStorage_1.removeVideo(1);
videoStorage_1.sortVideos("nameAscending");
videoStorage_1.sortVideos("lenghtAscending");
videoStorage_1.sortVideos("lengthDescending");

// Фильтруем видео
let filteredVideos = videoStorage_1.filterVideos("over30");
console.log(filteredVideos);
filteredVideos = videoStorage_1.filterVideos("under30");
console.log(filteredVideos);
filteredVideos = videoStorage_1.filterVideos("zzz");
console.log(filteredVideos);

// let videoStorageClass1 = new VideoStorage(1, arr); // constructor(_user, _videos)
//статические переменные и методы хранятся внутри класса, а не внутри экземпляра класса
//обычный метод класса
// videoStorageClass1.addVideo();
// videoStorageClass1.setVideos(arr);

// Д/З. Методы массива в книгах + return в функциях
// Методы массива find foreach