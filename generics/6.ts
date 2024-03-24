// Generic классы

class Resp<D, E> {
  data?: D
  error?: E

  constructor(data?: D, error?: E) {
    if (data) {
      this.data = data
    }
    if (error) {
      this.error = error
    }
  }
}

new Resp<string, number>('data', 0)

class HTTPResp extends Resp<string, number> {
  code!: number

  setCode(code: number) {
    this.code = code
  }
}

const resp2 = new HTTPResp()

export {}
