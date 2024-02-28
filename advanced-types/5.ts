// Interfaces or Types

interface User {
  name: string
}

// Дополняем где то в коде допустим interface. Произойдет merge интерфейсов
interface User {
  // name: number // вот так переопределить свойство нельзя
  age: number
}

// Types aliases нельзя так делать
// Example
type User2 = {
  name: string
}

// Ошибка дублирования идентификаторов
// type User2 = {
//   age: number
// }

const user: User = {
  // необходимо реализовать все необходимые свойства и методы интерфейсов
  name: 'ivan',
  age: 29
}

// Еще отличия type aliases от interfaces
type ID = string | number // мы можем экстендить примитивные типы

// интерфейсы так не могут
interface IDI {
  ID: string | number // ток так
}

// Type aliases используются в основном с примитивами. Interfaces используются с объектами или классами


export {}