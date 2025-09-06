let nm = ["Om","Ronak","Nikhil"];
let sname = nm.map(nm => nm+" Gajjar");

console.log("Original:", nm); 
console.log("Squares:", sname);  

let age = [22,21,20];
let adults = age.filter(adult=>adult>20);
console.log("Adults :",adults);

// Reduces array to a single value (sum, product, etc.).
let nums = [1,2,3,4,5,6,7];
let total = nums.reduce((acc,cur)=>acc+cur,0);
console.log("Sum :",total);

let arr = [1,2,3,4,5,6,7];

let evens = arr.filter(even=>even%2==0);
console.log("Evens :",evens);

let squares = evens.map(sqr=>sqr*sqr);
console.log("Squares :",squares);

let sum = squares.reduce((even,sqr)=>even+sqr,0);
console.log("Sum :",sum);

let person = {
  name: "Nikhil",
  age: 20,
  isStudent: true
};

console.log(person);

// Dot notation → object.key
// Bracket notation → object["key"]
console.log(person.name);     // Nikhil
console.log(person["age"]);   // 20

// Adding & Updating
person.name="Niks";
person.age=21;
console.log(person.name);
console.log(person["age"]);

// Deleting a Property
delete person.isStudent;
console.log(person);

// Nested Objects
let student = {
    name : "Ram",
    age : 35,
    marks : {
        Sanskrit : 100,
        Hindi : 100
    }
};
console.log(student);
console.log(student.name);
console.log(student["marks"]["Sanskrit"]);

// Mini Program – Student Info
let details = {
    name : "Om",
    age : 22,
    marks : {
        PHP : 100,
        SEO : 99
    }
};
console.log("Name :",details.name);
console.log("Age :",details.age);

details.marks.SEO = 100;

let tot = details.marks.PHP + details.marks.SEO;
console.log("Total :",tot);