const myDate = new Date()
console.log(myDate)
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toJSON())
// console.log(myDate.toLocaleString())
// console.log(myDate.toTimeString())
// console.log(myDate.toISOString())
// console.log(myDate.getTimezoneOffset())
// console.log(myDate.toLocaleTimeString())
// console.log(typeof myDate)

// let myCreateDate = new Date(2024,0,23)
// let myCreateDate = new Date(2024,0,23,5,3,1)
let myCreateDate = new Date("01-14-2024")
// console.log(myCreateDate.toLocaleString())

let myTimeStamp = Date.now()
// console.log(myTimeStamp.toString())
// console.log(myCreateDate.getDay())
// console.log(myCreateDate.getDate())
// console.log(myCreateDate.getTime())
// console.log(myCreateDate.getMinutes())
// console.log(Math.floor(Date.now()))

let newDate = new Date()
console.log(newDate.getDate())

newDate.toLocaleString('default',{
    weekday: "long",
})