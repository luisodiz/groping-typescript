// Unknown

// Почему unknown отличается от any?
// Представим, что в инпут приходят данные извне
let inputUnknown: unknown

inputUnknown = 3
inputUnknown = ['sf', 'fsfs']

// Предположим, что мы хотим значение input положить куда то в другую переменную
// let res: string = inputUnknown // Error. Мы не можем запихнуть unknown просто так
// Unknown более строг, чем any. Он говорит нам, что нам неизвестен тип, но нам необходимо определить его
// Можно запихать unknown в any
let res: any = inputUnknown // Работает

// Теперь попробуем с any
let inputAny: any
inputAny = 3
inputAny = ['fsf', 33] // Все работает
let res2 = inputAny // С any все работает

// Функция, которая будет принимать unknown input
function run(i: unknown) {
  if (typeof i == 'number') {
    i++
  } else {
    //i // unknown
  }
}

async function getData() {
  try {
    await fetch('')
  } catch (error) {
    // Error по умолчанию имеет тип unknown. Это значит, что если обращаться к свойствам error, то не смогу этого сделать без явной проверки, что это ошибка
    // Если это any, то проверку instanceof не надо делать. Использование any не рекомендуется
    if (error instanceof Error) {
      console.log(error.message)
    }
  }
}

async function getDataForce() {
  try {
    await fetch('')
  } catch (error) {
    const e = error as Error // Можно явно кастануть к Error, то есть сообщить, что Error это ошибка.
    //  Но может быть проблема если в error придет строка. А у строки нет свойства message. Надо быть очень аккуратным в использовании "as"
    console.log(e.message)
  }
}

type U1 = unknown | null
type U2 = string | unknown // Union type с любым другим типом это всегда по умолчанию UNKNOWN
type U3 = number | string | boolean | unknown // unknown
const r: U3 = 3 // unknown

type I1 = unknown & string


export {}