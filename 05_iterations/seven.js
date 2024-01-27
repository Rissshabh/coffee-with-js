const myNums = [1,2,3,4,6,7,8,9]

// const newNums = myNums.map( (num) => num + 10 )


// using the forEach to add 10 in every number of the array 
// const newArr = []
// myNums.forEach( (num) =>  {
    //     newArr.push(num+10)
    // })
    // console.log(newArr)


const newNum = myNums
    .map( (num) => num * 10 )
    .map( (num) => num + 1 )
    .filter( (num) => num > 40 )

console.log(newNum)