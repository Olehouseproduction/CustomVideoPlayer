import { sendDataToEmptySlot } from "./utils";

/**
 * База данных должна быть защищена. Декларируем переменные как приватные.
 */

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
