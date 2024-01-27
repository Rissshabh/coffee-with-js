const email = ""

if (email) {
    console.log("got the email")
} else {
    console.log("User does not have any email")
}

// falsy values 

// false, 0, -0, BigInt 0n, null, undefined, NaN , ""

// truthy values 

//  "0". 'false', " ", [], {}, function(){}

// if (email.length === 0) {
//     console.log("Array is empty")
// }

const empObj = {}

// if (Object.keys(empObj).length === 0) {
//     console.log("Object is empty")
// }

// Nullish Coalescing Operator (??): null indefined 

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20



console.log(val1)

// Ternery Operator 

// condition ? true : false 

const teaPrice = 100

teaPrice <= 50 ? console.log("Less than 50") : console.log("More than 50")