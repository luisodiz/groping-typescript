// Type aliases

type httpMethod = 'get' | 'post'
type coolString = string // alias for string

function fetchWithAuth(url: string, method: httpMethod): -1 | 1 {
  return -1
}

// Допустим у нас есть объект

// Мы типизировали его вот так
// let user: {
//   name: string,
//   age: number,
//   skills: string[]
// } = {
//   name: 'ivan',
//   age: 33,
//   skills: ['1', '2']
// }

// Можно сделать более красиво
type User = {
  name: string,
  age: number,
  skills: string[]
}

let user: User = {
  name: 'ivan',
  age: 33,
  skills: ['1', '2']
}

// Так же можно объединять types
type User2 = {
  name: string,
  age: number,
  skills: string[]
}

type Role = {
  id: number
}

type UserWithRoles = User2 & Role

let user2: UserWithRoles = {
  id: 2,
  name: 'alex',
  age: 29,
  skills: ['js', 'react']
}

// Либо усложним
type User3 = {
  name: string,
  age: number,
  skills: string[]
}

type Role2 = {
  id: number
}

type UserWithRoles2 = {
  user: User3,
  role: Role2
}

let user3: UserWithRoles2 = {
  user: {
    name: 'ivan',
    age: 20,
    skills: []
  },
  role: {
    id: 2
  }
}

export {}