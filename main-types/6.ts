// Readonly

const skillTest: [number, string] = [1, 'dev']

// можно переопределить спокойно
skillTest[0] = 2

const skill: readonly [number, string] = [1, 'dev'] // readonly - указывать на то, что только для чтения
// а вот так нельзя
// skill[0] = 2 // Error

const skills: ReadonlyArray<string> = ['dev', 'devops']
// skills[0] = '' // Error
// skills.push('design') // Error. В readonly нельзя в Runtime добавить элемент
// skills.shift('design') // Error. В readonly нельзя в Runtime удалить элементы
console.log(skills.join(','))

export {}