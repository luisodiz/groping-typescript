// Пример своей функции на generic

function logMiddleware<T>(data: T): T {
  console.log(data)
  return data
}

const res = logMiddleware<string>('10')

function getSplitedHalf<T>(data: Array<T>): Array<T> {
  const l = data.length / 2
  return data.splice(0, l)
}

export {}
