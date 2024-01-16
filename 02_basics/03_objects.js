// singleton 
// Object.create

// objects literals 

const mySym = Symbol("Key1")


const JsUser = {
    name : "Rishabh",
    "full name" : "Rishabh Kushwaha",
    [mySym] : "Mykey1",
    age : 20,
    location : "Kanpur",
    email : "Kushwaharishabh21@gmail.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday","Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "Rishabh@google.com"
// Object.freeze(JsUser)
JsUser.email = "Rishabh@ms.com"
console.log(JsUser)

JsUser.greeting = function(){
    console.log("Hello js user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello js user ${this["full name"]}`);
}

console.log(JsUser.greeting())
console.log(JsUser.greetingTwo())