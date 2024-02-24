// Enums

// Представим, что статус имеет всего три варианта
// success - успех
// progress - в процессе
// failed - отклонен

// По умолчанию каждый элемент имеет числовое значение (начиная с нуля)
// enum StatusCode {
//   SUCCESS, // 0
//   IN_PROCESS, // 1
//   FAILED // 2
// }

// Но можно задать другие значения
enum StatusCode {
  SUCCESS = 'success',
  IN_PROGRESS = 'progress',
  FAILED = 'failed'
}

const res = {
  message: 'Платеж успешен',
  statusCode: StatusCode.SUCCESS
}

// Допустим где то хотим проверить
if (res.statusCode === StatusCode.SUCCESS) {
  console.log(StatusCode.IN_PROGRESS)
  // some code...
}

/*
* Гетерогенный enum
* */

// Это enum, в котором можно хранить значения разных типов
enum Directions {
  LEFT = 1,
  RIGHT = 'right'
}


action(Directions.LEFT) // no problem
action(Directions.RIGHT) // no problem
action(1) // no problem
// action(2) // no problem. Но в runtime вылезет
// action('right') // Error.

function action(str: Directions) {
  // some code....
}

action(Directions.RIGHT)
action(Directions.LEFT)

function compute() {
  return 3
}

enum Roles {
  ADMIN = 1,
  USER = compute()
}

function test(x: { ADMIN: number }) {
}

// Enums ведут себя как объекты
test(Roles) // no problem. Лучше так не делать

// Констатные enums. Поскольку перед ключевым словом enum стоит модификатор const, то значения элементов enum не могут быть изменены после инициализации
const enum Games {
  WOW = 'World of tanks',
  LOL = 'League of legends'
}

console.log(Games.WOW)
console.log(Games.LOL)

export {}