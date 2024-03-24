// typeof в типах

let strOrNumber: string | number

if (Math.random() > 0.5) {
  strOrNumber = 5
} else {
  strOrNumber = 'str'
}

if (typeof strOrNumber == 'string') {
  console.log(strOrNumber)
} else {
  console.log(strOrNumber)
}

let str2OrNumber: typeof strOrNumber

const user = {
  name: 'Вася',
  age: 20
}

type keyOfUser = keyof typeof user

enum Direction {
  Up,
  Down
}

type d = keyof typeof Direction

export {}