// Кортежи (Tuples)

// кортеж - массив ограниченной длины, где каждый элемент типизирован
const skill: [number, string] = [1, 'dev']
const id = skill[0]
const skillName = skill[1]
// const q = skill[2] // Error. Мы не можем обратиться за пределы кортежа

skill.push('sdfsf') // в Runtime не запрещено, все пройдет гладко
// но обратиться мы не сможем после пуша
// console.log(skill[2]) // Error

const product: [string, string] = ['1', 'Iphone']
const [productId, productName] = product

const arr: [number, string, ...boolean[]] = [1, 'sds', true, false, true, true] // И такое может быть

export {}