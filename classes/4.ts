// Getter & Setters

class User {
  _login!: string
  _password!: string
  createdAt?: Date

  // если мы используем только getter, то он автоматически становится readonly
  set login(login: string | number) {
    this.createdAt = new Date()
    this._login = `user-${login}`
  }

  get login() {
    return this._login
  }

  // для паролей лучше не использовать setter, а использовать асинхронный метод, так как там может быть асинхронная логика
  async setPassword(p: string) {
    // здесь можно выполнить асинхронное шифрование пароля, чтобы не произвести блокировку выполнения кода
    // иначе если использовать обычный сеттер, то будь шифрование долгой операцией, то основной поток будет заблокирован
  }

  // сеттеры и геттеры не могут быть асинхронными, перед ними нельзя ставить ключевое слово async, будет ошибка
  // из за этого они не всегда нужны, просто так использовать все подряд надо с умом
  set password(p: string) {
    // только синхронный код
  }
}

const user = new User()
// user.login = 'Ivan'

console.log(user)
console.log(user.login)

export {}
