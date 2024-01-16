// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser)

const regularUser = {
    email : "kushwaharishabh21@gmail.com",
    "full name" : {
        userFullName : {
            "first Name" : "Rishabh",
            "last Name" : "Kushwaha"
        }
    }
}

// console.log(regularUser["full name"].userFullName["first Name"])

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"c", 4:"d"}

// const obj3 = {obj1, obj2}
const obj3 = Object.assign({}, obj1, obj2)
// console.log(obj3)
const obj4 = {...obj1, ...obj2}
// console.log(obj4)

const user = [
    {
        id : 1,
        email : "aman@gmail.com"
    },
    {
        id : 2,
        email : "rohan@gmail.com"
    }
]

console.log(user[1].email)
console.log(tinderUser)

console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))

console.log(tinderUser.hasOwnProperty("isLoggedIn"))
console.log(tinderUser.hasOwnProperty("isLogged"))