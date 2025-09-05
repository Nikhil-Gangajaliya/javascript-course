// Day 3: Strings & Numbers

// STRING EXAMPLES
let str1 = "Hello";
let str2 = " JavaScript ";

console.log("Length:", str1.length);
console.log("Upper:", str1.toUpperCase());
console.log("Lower:", str1.toLowerCase());
console.log("Trim:", str2.trim());
console.log("Slice (0,4):", str1.slice(0, 4));
console.log("Replace:", str1.replace("Hello", "Hi"));
console.log("Includes 'Hell':", str1.includes("Hell"));
console.log("Split:", "one,two,three".split(","));

// Template literal (backticks)
let name = "Nikhil";
let greet = `Welcome, ${name}!`;
console.log(greet);

// NUMBER EXAMPLES
let num = 123.4567;

console.log("Number:", num);
console.log("toFixed(2):", num.toFixed(2));
console.log("toString:", num.toString());

// MATH METHODS
console.log("Random:", Math.random()); 
console.log("Floor(5.9):", Math.floor(5.9));
console.log("Ceil(5.1):", Math.ceil(5.1));
console.log("Round(5.5):", Math.round(5.5));
console.log("Max:", Math.max(5, 10, 15));
console.log("Min:", Math.min(5, 10, 15));
