// Использование в типах

function getSplitHalf<T>(data: Array<T>): Array<T> {
  const l = data.length / 2
  return data.splice(0, l)
}

console.log(getSplitHalf([1, 3, 4]))

const split: <T>(data: Array<T>) => Array<T> = getSplitHalf

interface ILogLine<T> {
  timeStamp: Date,
  data: T
}

type LogLineType<T> = {
  timeStamp: Date,
  data: T
}

const logLine: ILogLine<{ a: number }> = {
  timeStamp: new Date(),
  data: {
    a: 1
  }
}

export {}
