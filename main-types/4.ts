// Массивы
// const skills: string[] = ['dev', 'devops', 1] // Error
const skills: string[] = ['dev', 'devops', 'testing']

// Если хочется любое значение, то через any
const skills2: any[] = ['div', 33] // Any не стоит использовать!

for (const skill of skills) {
  console.log(skill.toUpperCase()) // ts автоматически понимает, что это строка
}

// при методах массива ts автоматически понимет, что это элементы строки. Но иногда придется указывать тип параметрам внутри callback
const res = skills.filter((s: string) => s !== 'devops').map(s => s + '! ').reduce((a, b) => a + b)
console.log(res)

export {}