// Обращение по индексу в типах

interface Role {
  name: string
}

interface Permission {
  endDate: Date
}

interface User {
  name: string
  roles: Role[]
  permission: Permission
}

const user: User = {
  name: 'Vasya',
  roles: [],
  permission: {
    endDate: new Date()
  }
}

const nameUser = user['name']

// обращение по индексу
type roleTypes = User['roles']

const roleNames = 'roles'
// type roleTypes2 = User[roleNames] // ошибка. не смешивать типы и значения

const roleNames2 = 'roles' // тип roles
type roleTypes3 = User[typeof roleNames2] // OK. Так как roleNames2 константа и ее тип 'roles'. Если сделать на let, то ошибка, так как тип будет string

type roleeType = User['roles'][number] // Вытащить тип из элемента массива. Получаем Role. А без [number] получаем Roles[]

const roles2 = ['admin', 'user', 'super-user'] as const
type roleTypes5 = typeof roles2[number] // получение union из строкового массива

type dateType = User['permission']['endDate']

export {}