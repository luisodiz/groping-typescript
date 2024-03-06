// Never

function generateError(message: string): never {
  // Функция ничего не возвращает
  throw new Error(message)
}

// Никогда не вернется функция
function dumpError(): never {
  while (true) {
  }
}

function rec(): never {
  // Бесконечная рекурсия
  return rec()
}

// const a: never = null //Error Мы ничего не можем присвоить для never
const b: void = undefined // А так можно, ибо фактически при обычном return функция возвращает undefined
// const c: never = undefined // Error

type paymentAction = 'refund' | 'checkout' | 'reject'

function processAction(action: paymentAction) {
  switch (action) {
    case 'refund': {
      //...
      break
    }
    case 'checkout': {
      // ...
      break
    }
    default:
      // const _: never = action // Удобная проверка на сужение типа, для того, чтобы избежать ошибок до runtime.
      // Если раскоментировать строку, то мы увидим дополнительный literal type, который не обработан в switch case
      throw new Error('The action does not exist')
  }
}

function isString(x: string | number): boolean {
  if (typeof x === 'string') {
    return true
  } else if (typeof x === 'number') {
    return false
  }
  generateError('fsfs')
}

export {}