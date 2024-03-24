// Особенности наследования

class User {
    name: string = 'user'

    constructor() {
        console.log(this.name)
    }
}

class Admin extends User {
    name: string = 'admin'

    constructor() {
        super()
        console.log(this.name)
    }
}

new Admin()

class HttpError extends Error {
    code: number

    constructor(message: string, code?: number) {
        super(message)
        this.code = code ?? 500
    }
}

export {}
