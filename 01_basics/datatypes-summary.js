// Primitive data type

// 7 types
// -String 
// -Number 
// -Boolean
// -Null
// -Undefined 
// -Symbol
// -BigInt

const id = Symbol("123")
const anotherId = Symbol("123")
// console.log(id === anotherId)

// Reference Type (Non premitive)

// Array, Object, Function 

const heros = ["shaktiman", "naagaraj", "doga"];

let myObj = {
    name : "rishabh",
    age : 21,
}

const myFunction = function() {
    console.log("Rishabh Kushwaha")
}

const bigInteger = 321654978546n

// console.log(typeof undefined)
// console.log(typeof Boolean)
// console.log(typeof Symbol())
// console.log(typeof Number())
// console.log(typeof String())
// console.log(typeof Object)
// console.log(typeof Array())
// console.log(typeof null)
// console.log(typeof bigInteger)

// -----------------------------------------------------------------

// Stack (Premitive), Heap (Non-Premitive

let myName = "Rishabh Kushwaha"
let anotherName = myName
anotherName = "LoL"

console.log(myName)
console.log(anotherName)

let userOne = {
    email : "Kushwaharishabh32@gmail.com",
    fName : "Aman"
}

let userTwo = userOne

userTwo.email = "Rishabh@google.com"

console.log(userOne.email)
console.log(userTwo.email)