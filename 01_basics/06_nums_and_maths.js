const score = 400
// console.log(score)

const balance = new Number(100)
// console.log(balance)

// console.log(balance.toString().length)
// console.log(balance.toFixed(2))

const otherNum = 23.44654
// console.log(otherNum.toPrecision(4))

const hundreds = 100000000
// console.log(hundreds.toLocaleString("en-IN"))


// =============== Maths ==================

// console.log(Math)
// console.log(Math.abs(-32))
// console.log(Math.round(4.51))
// console.log(Math.ceil(4.51))
// console.log(Math.floor(4.51))
// console.log(Math.min(3,2,1,5,4,6))
// console.log(Math.max(3,2,1,5,4,6))
console.log((Math.random()* 10) + 1)
console.log(((Math.random()* 10) + 1).toFixed())

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)