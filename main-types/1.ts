// Простые типы. Легкотня

let revenue: number = 1000
let bonus: number = 500

let c = 'sdf'
let b = true // Typescript сам устанавливает тип
// let e: boolean = 1 // ts подскажет, что невозможно назначить в type boolean числовой тип

let res: number = revenue + bonus // если нам надо указать конкретный тип, то можно его задать через двоеточие
console.log(res)