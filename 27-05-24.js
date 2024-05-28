// array.map()

let arr = [
  { id: 0, name: "Peter" },
  { id: 1, name: "John" },
];

let arr2 = [
  { id: 0, name: "Georgii" },
  { id: 1, name: "Olesya" },
];

console.log("arr before map", arr);
// arr = arr.map((element) => Object.assign({ surname: "Petrovich" }, element));
arr = arr.map((element) => {
  element.id += arr2.length;
  return element;
});
console.log("arr after map", arr);

//video

//title, description, id

// ДЗ добавить в класс
let videos = [];

let videoOnlyInfo = videos.map((video) => {
  return { id: video.id, title: video.title, description: video.description };
});

// Map()

const users = new Map();
//{key: any, value: any}

let user = {
  username: "user",
  password: 123,
  name: "Peter",
  surname: "Grigorievich",
};

//метод добавления значения в Map
users.set(0, user);

//метод забирания значения по ключу из Map
user = users.get(0);
console.log(user);

//у каждого юзера есть набор видосов
let userVideos = [];

const newVideo = { id: 0, title: "Star Wars", length: 230 };
const videoStorage = { id: 0, userId: 0, videos: [] };
const videoStorage1 = { id: 1, userId: 1, videos: [] };
const videoStorage2 = { id: 2, userId: 2, videos: [] };

// метод Map
const userFromMap = users.get(353);

// метод массива
arr.forEach((v) => console.log(v));
const userFromArr = arr.find((user) => user.id == 353);

// цикл for
for (let index = 0; index < arr.length; index++) {
  console.log(arr[index]);
}

for (const index in arr) {
  console.log(arr[index]);
}

// цикл while, do while
let i = 0;
//сначала действие потом условие на проверку цикла
do {
  console.log(arr[i]);
  i++;
} while (i < arr.length);

i = 0;
// сначала условие на проверку цикла потом действие
while (i < arr.length) {
  console.log(arr[i]);
  i++;
}
//составить рейтинг самого популярного видео (наибольшее количество юзеров)
//составить рейтинг юзеров, по количеству видео

/**
 * то что есть
 * 1) class VideoStorage()
 * 2) class User()
 * 3) class Video()
 *
 * то что нужно
 * 0) сконфигурировать vite-js и расположить git репозиторий
 * 1) class DataBase() = хранит в себе пул users, videos, videoStorages => Map(id, value)
 * 2) мы убираем из классов поле id, id хранится в DataBase()
 * 3) то есть чтобы добавить новое видео, юзера, или хранилище нужно обращаться к DataBase
 * 4) const dataBase.addVideoStorage(id), dataBase.addUser(id), dataBase.addVideo(id), dataBase.getVideo(id)
 * 5) videoStorage.addVideo(id) videos = [id, id, id]
 * 6) user.addVideoStorage(id) videoStorages = [id, id, id]
 *
 *
 * перспектива
 * 7) static методы классов
 * 8) функции и методы работы с DOM
 * 9) localStorage
 * 10) Cookie
 *
 * BackLog
 * - подготовим методы для работы с DOM интеграция будет с innerHTML
 * - визуал готов и флоу готов => мы перейдем на Vue
 * - переезд архитектуры на NodeJS, запросы GET, POST
 * - Data Base (базы данных)
 */
