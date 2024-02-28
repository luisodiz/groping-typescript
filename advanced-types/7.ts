// Void

// указываем, мол ничего не возвращаем
function logId(id: string | number): void {
  console.log(id)
}

const a = logId(3) // переменная a тип void

function multiply(f: number, s: number) {
  if (!s) {
    return f * f
  }
}

// Если в функции есть хотя бы один return, то она возвращает union между тем, что в return и undefined
// Если в функции нету явного return или написано просто return без чего либо, то возращает void

// Допустим есть type функции, которая возвращает void
type voidFunc = () => void

const f1: voidFunc = () => {
}

const f2: voidFunc = () => {

  // Так как идет возврат значения и при типизации указано, что функция должна возвращать void, то возврат будет игнорироваться,
  // точнее типизация возрата функции будет игнорироваться
  return true
}

// Пример
const newArr = ['s'];
['hello', 'world'].forEach((str) => newArr.push(str))
// Callback внутри forEach возвращает void
// Хотя каждый вызов push возврает новую длину массива
// И то, что возвращает push игнорируется

export {}