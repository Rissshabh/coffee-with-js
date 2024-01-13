const  name = "Rishabh"
const repoCount = 5

// console.log(name + repoCount + "Haha")

console.log(`hello my name is ${name} and my repo count is ${repoCount}`)

const newName = new  String("Rishabh-Kushwaha")
console.log(newName[0])
console.log(newName.__proto__);


// console.log(newName.length);
// console.log(newName.toLowerCase());
// console.log(newName.toUpperCase());
// console.log(newName.charAt(2));
// console.log(newName.indexOf("s"));

const newString = newName.substring(0,5)
console.log(newString);

const anotherString = newName.slice(-16,1)
console.log(anotherString)

const spaceString = "  rishabh         "
console.log(spaceString)
console.log(spaceString.trim())

const url = "https://rishabh.com/rishab%20kushwaha"
console.log(url.replace("%20","-"))

console.log(url.includes("rishabh"))

const str = "I am rishabh kushwaha"
const splitStr = str.split(" ")
console.log(splitStr)