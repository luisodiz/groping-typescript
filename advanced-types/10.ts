// Null

const n: null = null
const n1: any = null
// По умолчанию ничего не можем, кроме null или any
// const n2: number = null
// const n3: string = null
// const n4: boolean = null
// const n5: undefined = null

interface User {
  name: string
  sayHello?: (str: string) => void
}

function getUser() {
  if (Math.random() > 0.5) {
    return null
  } else {
    return {
      name: 'Вася'
    } as User
  }
}

// Проблема в том, что функция getUser возвращает объект User, но у нас есть if... else, где так же идет возврат undefined
// Если кто то использует функцию getUser извне, то каст к типу User подразумевает, что здесь всегда объект с полем name
// Но это не так, поэтому может все пойти не по плану

const user = getUser()
const name = user?.name // Никаких ошибок из за кастования и если будет отключена проверка strictNullChecks, но на самом деле они есть
const helloMessage = user?.sayHello?.('I am from Russia')

export {}