/*
Типизировать объект
{
  officeId: 45,
  isOpened: false,
  contacts: {
    phone: '+79999999999',
    email: 'test@mail.ru',
    address: {
      city: 'Moscow'
    }
  }
}*/

const info: {
  officeId: number,
  isOpened: boolean,
  contacts: {
    phone: string,
    email: string,
    address: {
      city: string
    }
  }
} = {
  officeId: 45,
  isOpened: false,
  contacts: {
    phone: '+79999999999',
    email: 'test@mail.ru',
    address: {
      city: 'Moscow'
    }
  }
}

export {}
