// Interfaces

interface User {
  name: string,
  age: number,
  skills: string[],

  log: (id: number) => string // вот так можно описать метод объекта или класса
}

interface Role {
  roleId: number
}

interface UserWithRole extends User, Role {
  createAt: Date
}

// interface UserWithRole extends User {
//   id: number
// }

type User2 = {
  log: (error: Error) => string // можем так же типизировать методы в type aliases. Неважно, interface или type aliases
}

let user: UserWithRole = {
  roleId: 2,
  name: 'ivan',
  age: 20,
  skills: ['react', 'redux'],
  createAt: new Date(),

  log(id) {
    return `${id}`
  }
}

// Словарь или нормализация данных
interface UserDictionary {
  [id: number]: User
}

// Так же и для type aliases
type UserDictionary2 = {
  [index: number]: User
}

export {}
