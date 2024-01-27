// const myObj = {
//     js : "JavaScrpt",
//     cpp : "C++",
//     rb : "Ruby"
// }

// for (const key in myObj) {
//     console.log(`${key} is the shortcut for the ${myObj.key}`)
// }

// const programming = ["js","cpp","rb"]

// for (const key in programming) {
//     console.log(programming[key])
// }


const myMap = new Map()
myMap.set('IN', "India")
myMap.set('US', "United States of America")
myMap.set('IN', "India")


// maps are not iteratable 
for (const key in myMap) {
    console.log(myMap[key])
}
