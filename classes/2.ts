// Конструктор класса

class User {
  name!: string
  age!: number

  // конструктор нельзя типизировать возвращаемое значение
  constructor()
  constructor(name: string)
  constructor(age: number)
  constructor(name: string, age: number)
  constructor(nameOrAge?: string | number, age?: number) { // конструктор имплементации (реализации), он должен удовлетворять структуре всему того, что выше
    if (typeof nameOrAge === 'string') {
      this.name = nameOrAge
    } else if (typeof nameOrAge === 'number') {
      this.age = nameOrAge
    }

    if (typeof age === 'number') {
      this.age = age
    }
  }
}

const user = new User('Vasya')
const user2 = new User()
const user3 = new User(33)
const user4 = new User('Ivan', 30)

export {}
