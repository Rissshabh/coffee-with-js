const hero1 = ["thor","ironman","spiderman"]
const hero2 = ["superman","flash","batman"]

// hero1.push(hero2)

// console.log(hero1)
// console.log(hero1[3][1])

// const allheroes = hero1.concat(hero2)
// console.log(allheroes)

const allHeroes = [...hero1,...hero2]
// console.log(allHeroes)

const anotherArray = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array = anotherArray.flat(Infinity)
// console.log(real_another_array)


// console.log(Array.isArray("Rishabh"))
// console.log(Array.from("Rishabh"))
// console.log(Array.isArray(Array.from("Rishabh")))
// console.log(Array.from({name : "Rishabh"})) --intresting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));