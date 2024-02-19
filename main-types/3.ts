function getFullName(userEntity: { firstname: string, surname: string, skills: { dev: boolean, devops: boolean } }): string {
  // Если объект в аргументе будет шире, чем надо, то ts будет ругаться при обращении к свойствам, которые не указаны
  // console.log(userEntity.city) // Не видит такое свойство
  return `${userEntity.firstname} ${userEntity.surname}`
}

// Нельзя передавать объекты УЖЕ, чем указан в типе, ШИРЕ можно, аналогично работает с вложенными свойствами
const user = {
  firstname: 'Alexander',
  surname: 'Sosov',
  city: 'Kostroma',
  age: 29,
  skills: {
    dev: true,
    devops: false
  }
}

console.log(getFullName(user))

export {}