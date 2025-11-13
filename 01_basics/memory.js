// stack (primitive = call by value), heap (non-primitive = call by reference)

let name = "Nikhil Gangajaliya";
let otherName = name;
otherName = "Nikhil Ganjjar";

// console.log(name);  //Nikhil Gangajaliya
// console.log(otherName); //Nikhil Gajjar

let userOne = {
    email: "email@gmail.com",
    id: 123
}
userOne.email = "nikhil@gmail.com";
let userTwo = userOne;

console.log(userOne);
console.log(userTwo);
