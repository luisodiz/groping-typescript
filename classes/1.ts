// Создание класса

class User {
  name: string

  constructor(name: string) {
    this.name = name
  }
}

const user = new User('Vasya')
user.name = 'Petya'
console.log(user)

class Admin {
  role!: number
}

const admin = new Admin()
admin.role = 1

export {}
