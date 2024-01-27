// for each 

const coding = ["js", "cpp", "python", "rust", "go"]

// coding.forEach( function (item) {
//     console.log(item)
// } )


// coding.forEach( (val) => {
//     console.log(val)
// } )


// function printMe(item) {
//     console.log(item)
// }

// coding.forEach(printMe)

// coding.forEach( (item, index, arr) => {
//     console.log(item, index, arr)
// } )

const myCoding = [
    {
        langName : "JavaScript",
        langFile : "js"
    },
    {
        langName : "Python",
        langFile : "py"
    },
    {
        langName : "CPlusPlus",
        langFile : "cpp"
    },
    
]

myCoding.forEach( (item) => {
    console.log(item.langName)
} )