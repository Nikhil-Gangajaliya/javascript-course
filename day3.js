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
console.log("Index of is : ",str1.indexOf("is"));

// Template literal (backticks)
let name = "Nikhil";
let greet = `Welcome, ${name}!`;
console.log(greet);

// NUMBER EXAMPLES
let num = 123.456;

console.log(num.toFixed(2));   // "123.46" (2 decimal places)
console.log(num.toString());   // "123.456" (converted to string)
console.log(Number("123"));    // 123
console.log(parseInt("12px")); // 12
console.log(parseFloat("12.34")); // 12.34


// MATH METHODS
console.log(Math.round(4.6));   // 5
console.log(Math.floor(4.9));   // 4
console.log(Math.ceil(4.1));    // 5
console.log(Math.pow(2, 3));    // 8
console.log(Math.sqrt(16));     // 4
console.log(Math.random());     // random number 0–1
console.log(Math.floor(Math.random() * 10) + 1); // 1–10

let fname = "Nikhil";
let lname = "Gangajaliya";

console.log(`${fname} ${lname}`);

let dice = Math.floor(Math.random() * 6) + 1;
console.log("You rolled: " + dice);

let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
let password = "";
for (let i = 0; i < 8; i++) {
  let randomIndex = Math.floor(Math.random() * chars.length);
  password += chars[randomIndex];
}
console.log("Generated Password:", password);
