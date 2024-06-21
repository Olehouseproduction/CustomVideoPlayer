import "./style.css";
import DataBase from "./models/DataBase.js";
import User from "./models/User.js";
import Video from "./models/Video.js";
import VideoStorage from "./models/VideoStorage.js";
import { globalUserId } from "./models/utils.js";
import { Film } from "./models/Video.js";
import { Shorts } from "./models/Video.js";
// import { x as a } from "./models/DataBase.js";
// const b = data.x;

// Создаём экземпляры классов
const user_1 = new User(25, "Arman.web.dev", "Arman", "my-mail@gmail.com", "12z3");
const video_1 = new Video(1, "Title", "http://link", "Description");
const video_2 = new Video(2, "JavaScript Basics", "http://link", "Description", 3600);
const video_3 = new Video(3, "HTML Essentials", "http://link", "Description", 1800);

const videoOpt = {
  width: 900,
  height: 400,
};

const video_4 = new Video(4, "CSS Fundamentals", "http://link", "Description", 900, videoOpt);

let web = video_4.checkRatio();
console.log(web);
console.log(video_4);
// const videoStorage_1 = new VideoStorage(user_1);
// const videoStorage_2 = new VideoStorage(user_1);
// const videoStorage_3 = new VideoStorage(user_1);
// const videoStorage_4 = new VideoStorage(user_1);
const dataBase = new DataBase();
// const film1 = new Film(4, "CSS Fundamentals", "http://link", "Description", 900, 5);
// console.log(film1);

// const shorts1 = new Shorts(4, "CSS Fundamentals", "http://link", "Description", 900, 5, 8, 9, 10);

// console.log(shorts1);

// let shortRatioType = shorts1.checkRatio(400, 800);
// console.log(shortRatioType, shorts1.ratio);
// Добавление пользователя в базу данных
dataBase.setDataToBase("user", user_1);
console.log("user добавлен");

// Проверка добавленного пользователя
const user = dataBase.getDataByTypeAndId("user", globalUserId);
console.log(user);

//addVideo — это не статический метод, его нужно вызывать на экземпляре класса
// VideoStorage.addVideo(video_1); //неправильно
// videoStorage_1.addVideo(video_1);
// videoStorage_1.addVideo(video_1);
// videoStorage_1.addVideo(video_2);
// videoStorage_1.addVideo(video_3);
// videoStorage_1.addVideo(video_4);
// videoStorage_1.removeVideo(1);
// videoStorage_1.sortVideos("nameAscending");
// videoStorage_1.sortVideos("lenghtAscending");
// videoStorage_1.sortVideos("lengthDescending");

// Фильтруем видео
// let filteredVideos = videoStorage_1.filterVideos("over30");
// console.log(filteredVideos);
// filteredVideos = videoStorage_1.filterVideos("under30");
// console.log(filteredVideos);
// filteredVideos = videoStorage_1.filterVideos("zzz");
// console.log(filteredVideos);

//Добавляем информацию в базу данных
// dataBase.users.set(25, user_1);
// console.log(`Пользователь ${user_1.id} добавлен в Базу данных`, dataBase.users);
// dataBase.videos.set(2, video_2);
// console.log(`Видео ${video_2.id} добавлено в Базу данных`, dataBase.videos);
// dataBase.videoStorages.set(3, videoStorage_1);
// console.log(`Видеохранилище добавлено в Базу данных: `, dataBase.videoStorages);

// let videoStorageClass1 = new VideoStorage(1, arr); // constructor(_user, _videos)
//статические переменные и методы хранятся внутри класса, а не внутри экземпляра класса
//обычный метод класса
// videoStorageClass1.addVideo();
// videoStorageClass1.setVideos(arr);
