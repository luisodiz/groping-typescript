// Типы в функциях
function getFullName(firstname: string, surname: string): string { // по умолчанию ts присваивает параметрам неявно тип any
  return `${firstname} ${surname}`
}

const getFullNameArrow = (firstname: string, surname: string): string => `${firstname} ${surname}`

export {}

// Вывод: максимально типизируйте параметры функций