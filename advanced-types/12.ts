// Type Guard

interface User {
  name: string,
  login: string,
  email: string
}

const user: User = {
  name: 'Вася',
  email: 'vasya@yandex.ru',
  login: 'vasiliy'
}

interface Admin {
  name: string,
  role: number
}

function logId(id: string | number) {
  if (isString(id)) {
    console.log(id)
  } else {
    console.log(id)
  }
}

function isString(x: string | number): x is string {
  return typeof x === 'string'
}

function setRoleZero(user: User | Admin) {
  if (isAdminAlternative(user)) {
    user.role = 0
  } else {
    throw new Error('Пользователь не админ')
  }
}

// Сделаем type guard на проверку, что пользователь является админом
function isAdmin(user: User | Admin): user is Admin {
  return 'role' in user
}

function isAdminAlternative(user: User | Admin): user is Admin {
  return (user as Admin).role !== undefined
}

export {}