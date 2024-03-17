// Implements

interface ILogger {
  log(...args): void

  error(...args): void
}

class Logger implements ILogger {
  async error(...args): Promise<void> {
    // Кинуть во внешнюю систему запрос для логирования ошибки и потом в консоль вывести ошибку
    console.log(...args)
  }

  log(...args): void {
    console.log(...args)
  }
}

interface IPayable {
  pay: (paymentId: number) => void
  price?: number
}

interface IDeletable {
  delete(): void
}

class User implements IPayable, IDeletable {
  // Если мы не опишем тип paymentId, то она будет any, хотя в интерфейсе четко указал, что paymentId: number
  // Тип параметра paymentId должен быть ШИРЕ, чем я указал в интерфейсе
  // Если уже, то ошибка
  pay(paymentId: number | string): void {
    ///
  }

  delete(): void {
    
  }
}

new User()

export {}
