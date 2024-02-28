// Literal Types

function fetchWithAuth(url: string, method: 'post' | 'get'): 1 | -1 {
  console.log(method)
  return -1
}

// при вызове функции method может принимать только get или post
fetchWithAuth('url', 'post')

// имитируем let как const
let a: 'hello' = 'hello'
a = 'hello' // work
// a = 'goodbye' // error

// let method = 'post'
// fetchWithAuth('rs', method) // error -> не совпадают типы

// как можно обойти?
const method = 'post'
fetchWithAuth('url', method) // Nice!

// либо
// мы можем кастануть тип string к типу post или get
let method2 = 'get'
fetchWithAuth('url', method2 as 'get') // делаем мини обманку, мол method2 это тип string, но при вызове функции мы говорим что это literal тип 'get'
let method3 = 'patch'
fetchWithAuth('url', method3 as 'get') // это тоже сработает, но надо быть очень аккуратным, так как мы прокинули patch в функцию, где только get или post

export {}