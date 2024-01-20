const user = {
    username : "Rishabh",
    price : 999,

    welcomeMessage : function () {
        console.log(`${this.username} welcome to our website.`)
        console.log(this)
    }

}

// user.welcomeMessage()
// user.username = "Sam"
// user.welcomeMessage()

// console.log(this)

// function chai() {
//     let username = "Rishabh"
//     console.log(this.username)
// }
// chai()

// const chai = function() {
//     let username = "Rishabh"
//     console.log(this.username)
// }

const chai = () => {
    let username = "Rishabh"
    console.log(this)
}
// chai()

// this is the explicit return  
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// this is the implicit return 
// const addTwo = (num1, num2) =>  (num1 + num2)

const addTwo = (num1, num2) =>  ({username : "Rishabh"})


console.log(addTwo(1, 2))

// const myArray = [2,3,5,9,7,8,1,5]

// myArray.forEach()
