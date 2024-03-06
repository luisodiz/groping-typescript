// Приведение типов

let a = 5
let b: string = a.toString()
let e: string = new String(a).valueOf()
let f: boolean = new Boolean(a).valueOf()

let c = 'sdfs'
let d: number = parseFloat(c)

interface User {
  name: string,
  email: string,
  login: string
}

const user: User = {
  name: 'Вася',
  email: 'vasiliy@yandex.ru',
  login: 'vasya'
}

interface Admin {
  name: string,
  role: number
}

// Допустим мы хотим сделать нашего пользователя админом

// Вариант 1
const admin: Admin = {
  ...user,
  role: 1
}
// не рекомендуется, так как admin по факту будет содержать поле 'email'
// а если где то в коде будет проверка, мол if (!admin.email), то эта проверка будет всегда falsy, так как на самом деле email будет всегда в admin
// из за spread оператора

// Вариант 2
// Можно создать служебную функцию, которая возьмет только то, что необходимо
// Так называемая функция мапинга
function userToAdmin(user: User): Admin {
  return {
    name: user.name,
    role: 1
  }
}

export {}