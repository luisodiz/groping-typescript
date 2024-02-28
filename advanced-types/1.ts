// Union type

function logId(id: string | number | boolean) {
  // Необходимо сузить тип, чтобы явно понимать с чем имеем дело
  if (typeof id === 'string') {
    console.log(id.toUpperCase()) // при этом доступны все методы строк
  } else if (typeof id === 'number') {
    console.log(id.toFixed(2)) // доступны все методы чисел
  } else {
    console.log(id.valueOf()) //.... boolean
  }
}

logId(1)
logId('hello')
logId(false)

function logError(err: string | string[]) {
  if (Array.isArray(err)) {
    console.log(...err)
  } else {
    console.log(err.toUpperCase()) // сузили тип, теперь доступны методы для строк
  }
}

function logObject(obj: { a: number } | { b: number }) {
  if ('a' in obj) {
    console.log(obj.a)
  } else {
    console.log(obj.b)
  }
}

function logMultipleIds(a: string | number, b: string | boolean) {
  // если a и b равны, то можно использовать условие равенства === чтобы заодно и проверить тип
  if (a === b) {
    // мало ли такое может произойти, то оба варианта будут автоматически string
    console.log(a, b) // ide подскажет методы строк
  } else {
    console.log(a) // тут еще union, понятное дело
  }
}

export {}