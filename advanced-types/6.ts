// Optional

interface User {
  login: string,
  password?: string // чтобы указать, что свойство необязательное, то надо добавить после названия свойства перед двоеточием знак ?
  // ageMore18: false | undefined // если оставить так, то в реализации интерфейса придется создать свойство ageMore18. Оно не работает как optional
}

// Опциональные свойства работают так же и с type aliases
type UserType = {
  login: string,
  password?: string
}

const user: User = {
  login: 'luisodiz@yandex.ru'
}

// Optional в функциях
function multiply(first: number, second?: number): number {
  // если second optional, то
  if (!second) {
    return first * first
  }
  return first * second
}

// Обратим внимание на то, что в функции optional будет равнозначем с union undefined
function multiply2(first: number, second: number | undefined): number {
  // то же самое, что и выше
  if (!second) {
    return first * first
  }
  return first * second
}

// Дефолт value в функциях
function funcWithDefault(a: number = 5): number { // функция с дефолтным значением
  return a * 3
}

console.log(funcWithDefault());

interface UserPro {
  login: string,
  password?: {
    type: 'primary' | 'secondary'
  }
}

function testUser(user: UserPro): undefined | string {
  return user.password?.type // optional chaining
  // return user.password!.type // Знак восклицания говорит о том, что мы гарантируем то, что password всегда будет содержать свойство type
}

function test(param?: number) {
  // return param ? param : 'hello' + param // если передать в функцию 0, то вернет строку hello0
  // оператор ?? будет говорить о том, что правая часть выполнится тогда и только тогда, когда в левой части null или undefined
  return param ?? param
}

console.log(test(0))

export {}