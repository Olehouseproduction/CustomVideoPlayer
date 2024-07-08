import { sendDataToEmptySlot } from "./utils";
import json from "../database/users.json";

/**
 * База данных должна быть защищена. Декларируем переменные как приватные.
 */

// TODO
// Задание по методам JSON.stringify() и JSON.parse()
// 1) достать все id из JSON запихнуть в один массив [],
// 2) циклом forEach создать экземпляры класса User,
// 3) в том же цикле применить методы класса для заполнения остальных полей

// 1) создать метод createDataFromBase,
// 2) импорт json. парсинг json в объект с пом.parse JSON.parse()
// 3) достать все id из JSON запихнуть в один массив [],
// 4) Циклом forEach берет id из массива и использует его как ключ к map, а все остальные поля json он использует как поля класса.
// 5) С пом. метода set передаем в map данные в виде (если userbase - то userbase.set (id,new User(...поля для юзера)).

export default class DataBase {
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

    const base = this.#chooseDataBase(type);
    console.log(base);

    // если такая база данных есть по ключу, то кладем в нее нужную информацию
    if (base) {
      sendDataToEmptySlot(base, data);
    }
  }

  getDataByTypeAndId(type, id) {
    const base = this.#chooseDataBase(type);
    return base ? base.get(id) : undefined;
  }

  #chooseDataBase(type) {
    let base;

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
    return base;
  }

  //Создаю новый метод:
  createDataFromBase() {
    const dataFromJSON = JSON.parse(json); // Парсинг JSON
    // const dataFromJSON = json;
    dataFromJSON.forEach((data) => {
      const user = new User(data.id, data.firstName, data.password, data.username, data.email);
      this.#userBase.set(data.id, user); // Добавить в Map
    });
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

// export const x = 10;
