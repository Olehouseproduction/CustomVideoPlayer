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
  }

  sortVideos(type) {
    //Сортировка по возрастанию длины видео
    let sortVideos = [];
    switch (type) {
      case "lenghtAscending":
        this.videos.sort((a, b) => a.length - b.length);
        console.log("Видео отсортированы по возрастанию длины");
        console.log(this.videos);
        break;
      case "lengthDescending":
        this.videos.sort((a, b) => b.length - a.length);
        console.log("Видео отсортированы по убыванию длины");
        console.log(this.videos);
        break;
      case "nameAscending":
        this.videos.sort((a, b) => a.title.localeCompare(b.title));
        console.log("Видео отсортированы по возрастанию имени");
        console.log(this.videos);
        break;
      case "nameDescending":
        this.videos.sort((a, b) => b.title.localeCompare(a.title));
        console.log("Видео отсортированы по убыванию имени");
        console.log(this.videos);
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

class User {
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

// class DataBase {
//
// map'ы данных(3). он сортирует эти данные между собой.
// 1.Создаем три map'а.(users,videos,videostorages).
// 2. Создать общий метод, который в атрибуты принимает (тип, который хотим положить. Стрингой.2.Объект нужного класса). setInfoToBase("user", new User())
// 3. Создать общий метод, который в атрибуты принимает (тип, который хотим достать. Стрингой.2.Объект нужного класса) getInfoFromBase("user", id)
// 4.Обратить внимание в этих методах: испол.switch case (type). Попробовать сделать проверку, что если я вызвала метод, чтобы в юзера я могла положить только юзера. Или через новые поля в классах. Поресерчить. Как определить тип нужного класса.

// }

/**
 * База данных должна быть защищена. Декларируем переменные как приватные.
 */

class DataBase {
  #userBase;
  #videoBase;
  #videoStorageBase;
  constructor() {
    this.#userBase = new Map();
    this.#videoBase = new Map();
    this.#videoStorageBase = new Map();
  }
  //допустим есть ключ юзер и класс Видео, у всех наших классов есть приватное поле #type
  // const video = new Video()
  // video.#type => undefiend
  setDataToBase(type, data) {
    /**
     * Метод setDataToBase принимает два параметра:
     * type: строка, которая определяет, в какую базу данных будут добавлены данные. Это может быть "user", "video" или "videoStorage".
     * data: данные, которые нужно добавить в базу данных.
     *
     * Назначаем переменную базы данных, которая будет использоваться для хранения ссылки на нужную базу данных в зависимости от типа данных.
     * */
    let base;
    // Выбираем на основе ключа, какую базу данных используем
    switch (type) {
      case "user":
        base = this.#userBase;
        break;
      case "video":
        base = this.#videoBase;
        break;
      case "videoStorage":
        base = this.#videoStorageBase;
        break;
      default:
        console.warn("wrong key to select data to base");
        break;
    }

    // если такая база данных есть по ключу, то кладем в нее нужную информацию
    if (base) {
      sendDataToEmptySlot(base, newData);
    }
  }

  getDataByTypeAndId(type, id) {
    /** */
  }
}

// Создаём экземпляры классов
const user_1 = new User(25, "Arman.web.dev", "Arman", "my-mail@gmail.com", "12z3");
const video_1 = new Video(1, "Title", "http://link", "Description");
const video_2 = new Video(2, "JavaScript Basics", "http://link", "Description", 3600);
const video_3 = new Video(3, "HTML Essentials", "http://link", "Description", 1800);
const video_4 = new Video(4, "CSS Fundamentals", "http://link", "Description", 900);
const videoStorage_1 = new VideoStorage(user_1);
const dataBase = new DataBase();

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

//Добавляем информацию в базу данных
// dataBase.users.set(25, user_1);
// console.log(`Пользователь ${user_1.id} добавлен в Базу данных`, dataBase.users);
// dataBase.videos.set(2, video_2);
// console.log(`Видео ${video_2.id} добавлено в Базу данных`, dataBase.videos);
// dataBase.videoStorages.set(3, videoStorage_1);
// console.log(`Видеохранилище добавлено в Базу данных: `, dataBase.videoStorages);

dataBase.setDataToBase("user", user_1);
console.log("user добавлен");

// let videoStorageClass1 = new VideoStorage(1, arr); // constructor(_user, _videos)
//статические переменные и методы хранятся внутри класса, а не внутри экземпляра класса
//обычный метод класса
// videoStorageClass1.addVideo();
// videoStorageClass1.setVideos(arr);

// БЛОК ПОЛЕЗНЫХ ФУНКЦИЙ

/**
 * base = new Map()
 * newData (информация, объект, переменная) = любая дата которую мы хотим положить в Map
 *
 * найти свободное место в базе данных, задекларировать новый ключ и положить новую дату в это свободное место.
 *
 * Функция sendDataToEmptySlot добавляет новые данные в указанную базу данных (base), используя случайный идентификатор (id). Если идентификатор уже занят, функция рекурсивно пытается найти свободный идентификатор.
 */
function sendDataToEmptySlot(base, newData) {
  let id = getRandomInt(10000); // Генерация случайного идентификатора
  const data = base.get(id); // Получение данных по этому идентификатору. Если данные под этим идентификатором уже существуют, data будет содержать эти данные; если нет, data будет undefined.

  // проверка на существование data показывает, что под этим id уже есть дата в нашей базе
  if (data) {
    /**
     * проверяем, существуют ли данные под сгенерированным идентификатором. Если data не undefined, значит, под этим идентификатором уже есть данные в базе. В этом случае функция использует рекурсию, чтобы повторно вызвать саму себя через setTimeout.
     * Вызов через setTimeout с пустым значением задержки фактически откладывает выполнение до следующего цикла событий, что предотвращает потенциальные проблемы с глубокими рекурсивными вызовами.
     */
    setTimeout(() => {
      sendDataToEmptySlot(base, newData);
    });
  } else {
    base.set(id, newData); //Если идентификатор свободен (то есть data равно undefined), новые данные (newData) добавляются в базу данных (base) под сгенерированным идентификатором (id).
  }
}

/**
 * получить рандомное значение от 0 до max
 */
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

getRandomInt(1000);
