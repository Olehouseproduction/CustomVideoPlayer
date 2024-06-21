//для тестов
export let globalUserId;

// БЛОК ПОЛЕЗНЫХ ФУНКЦИЙ

/**
 * base = new Map()
 * newData (информация, объект, переменная) = любая дата которую мы хотим положить в Map
 *
 * найти свободное место в базе данных, задекларировать новый ключ и положить новую дату в это свободное место.
 *
 * Функция sendDataToEmptySlot добавляет новые данные в указанную базу данных (base), используя случайный идентификатор (id). Если идентификатор уже занят, функция рекурсивно пытается найти свободный идентификатор.
 */
export function sendDataToEmptySlot(base, newData) {
  let id = getRandomInt(10000); // Генерация случайного идентификатора
  globalUserId = id; //test
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

// class DivPrettire {
//   static changeColor(div, color) {
//     /** */
//   }

//   static changeSize(div, width, height) {
//     /** */
//   }

//   name = ""
// }

// const DivPrettire = {
//   changeColor: (div, color){
//     /** */
//   },
//   name: 1
// }

// const DivPrettire1 = {
//   changeColor: (div, color){
//     /** */
//   }, name: 2
// }

// DivPrettire.changeColor(container, "green");

// const prettier = new DivPrettire()
// prettier.name = 1
// DivPrettire.changeColor(container, "green");

// getRandomInt(1000);

// const users = [];

// for (let i = 0; i < 200; i++) {
//   // const u = {};
//   // u.id = i;
//   // u.name = "Kolya" + i;
//   // u.surname = "Svetlov" + i;
//   // u.pass = getRandomInt(10000);
//   // u.age = getRandomInt(100);

//   const u = new User(i, "Kolya" + i, "Svetlov" + i, "smth_" + i + "@mail.ru", getRandomInt(10000));
//   users.push(u);
// }

// console.log(users);
