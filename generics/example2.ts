/*
  Необходимо написать функцию сортировки любых
  объектов, которые имеют id по убыванию и по возрастанию
*/

const data = [
  {id: 1, name: 'Vasya'},
  {id: 2, name: 'Ivan'},
  {id: 3, name: 'Alex'}
]

interface ID {
  id: number
}

function sort<T extends ID>(data: T[], type: 'asc' | 'desc' = 'asc'): T[] {
  data.sort((a, b) => {
    switch (type) {
      case 'asc':
        return a.id - b.id
      case 'desc':
        return b.id - a.id
    }
  })
  return data
}

console.log(sort(data, 'desc'))
console.log(sort(data))

export {}
