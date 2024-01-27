// for of loop 

// ["", "", ""]

// const arr = [1,2,3,4,5]

// for (const num of arr) {
//     console.log(num)
// }

const greetings = "Hello world!"

for (const greet of greetings) {
    if (greet === " ") continue
    console.log(`Each char is ${greet}`)
}

// maps

const myMap = new Map()
myMap.set('IN', "India")
myMap.set('US', "United States of America")
myMap.set('IN', "India")

// console.log(myMap)

// for(const [key, value] of myMap) {
//     console.log(key, "=", value)
// }


// const myObj = {
//     "game1" : "nfs",
//     "game2" : "bgmi"
// }

