// Статические свойства

class UserService {
  // static name: string = 'sfgx' // ключевое слово name в static зарезирвировано
  static db: any
  private static db2: any // модификатор доступа можно тоже задавать

  // static getUser(id: number) {
  //   return this.db.findById(id)
  // }

  static async getUser(id: number) {
    // static метод может быть асинхронным
  }

  constructor(id: number) {}

  create() {
    // UserService.db
  }

  static { // static блок не может выполнять асинхронный код
    UserService.db = 'sdf'
  }
}

// UserService.db
// UserService.getUser(1)

const instance = new UserService(3)
instance.create()

export {}
