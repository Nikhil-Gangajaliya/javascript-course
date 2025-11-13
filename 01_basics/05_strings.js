const name = "nikhil"
const age = 21

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my age is ${age}`);

const gameName = new String('nikhil ashokbhai gangajaliya')

console.log(gameName[0]);
console.log(gameName.__proto__);


console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('l'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(7, 18)
console.log(anotherString);

const newStringOne = "   jenish    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('GOOGLE'))

console.log(gameName.split(' '));