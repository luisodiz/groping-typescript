/*
  Необходимо написать функцию группировки, которая принимает массив объектов
  и его ключ, производит группировку по указанному ключу и возращает
  сгруппированный объект.
  Пример:
  ``` js
  [
    { group: 1, name: 'a' },
    { group: 1, name: 'b' },
    { group: 2, name: 'c' },
  ];
  ```

  При группироке по 'group' ---->

  ``` js
  {
    '1': [ { group: 1, name: 'a' }, { group: 1, name: 'b' } ],
    '2': [ { group: 2, name: 'c' } ]
  }
  ```
*/


interface Data {
  group: number
  name: string
}

const data: Data[] = [
  {group: 1, name: 'a'},
  {group: 1, name: 'b'},
  {group: 2, name: 'c'}
]

interface IGroup<T> {
  [key: string]: T[]
}

type key = string | number | symbol

function group<T extends Record<key, any>>(array: T[], key: keyof T): IGroup<T> {
  return array.reduce<IGroup<T>>((map: IGroup<T>, item) => {
    const itemKey = item[key]
    let currentElement = map[itemKey]
    if (Array.isArray(currentElement)) {
      currentElement.push(item)
    } else {
      currentElement = [item]
    }
    map[itemKey] = currentElement
    return map
  }, {})
}

const res = group<Data>(data, 'group')
console.log(res)

export {}
