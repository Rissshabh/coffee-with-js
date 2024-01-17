function sayMyName() {
    console.log("R");
    console.log("I");
    console.log("S");
    console.log("H");
    console.log("A");
    console.log("B");
    console.log("H");
}

// sayMyName()

// function addTwoNum(number1, number2) {
//     console.log(number1 + number2)
// }

function addTwoNum(number1, number2) {

    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNum(3, 5)

// console.log(result)

function logInUserMessage(username = "Demo") {
    if(!username) {
        console.log("Please enter the user name")
        return "Invalid input"
    }
    return `${username} just logged in`
}

// console.log(logInUserMessage("Rishabh"))
// console.log(logInUserMessage())


function calculateCartPrice(val1, val2, ...num1) {
    return num1
}

// console.log(calculateCartPrice(200, 100, 300, 400, 500))

const user = {
    userName : "Rishabh",
    price : 999
}

function handleObject(anyobject) {
    console.log(`Username is ${anyobject.userName} and price is ${anyobject.price}`)
}

// handleObject(user)
handleObject({
    userName : "Sam",
    price : 600
})

const myNewArray = [200, 400, 500]

function returnSecondValue(getArray) {
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue([200, 400, 500]))