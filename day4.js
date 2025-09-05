// Day 4: Date & Memory Concepts

// DATE EXAMPLES
let myDate = new Date();
console.log("Current Date:", myDate);
console.log("Date String:", myDate.toDateString());
console.log("Local String:", myDate.toLocaleString());
console.log("ISO String:", myDate.toISOString());

// Custom date
let customDate = new Date(2025, 7, 27, 15, 30); // year, month (0-based), day, hr, min
console.log("Custom Date:", customDate.toLocaleString());

// Extracting parts
console.log("Year:", myDate.getFullYear());
console.log("Month (0-11):", myDate.getMonth());
console.log("Date:", myDate.getDate());
console.log("Hours:", myDate.getHours());
console.log("Minutes:", myDate.getMinutes());
console.log("Seconds:", myDate.getSeconds());

// Timestamp
console.log("Timestamp (ms):", Date.now());

// Compare timestamps
let start = Date.now();
for (let i = 0; i < 1000000; i++) {} // some loop
let end = Date.now();
console.log("Loop Time:", end - start, "ms");


// MEMORY CONCEPTS
// Stack (primitive)
let a = 10;
let b = a;  // copy
b = 20;
console.log("Stack Example → a:", a, " b:", b); // a not affected

// Heap (reference)
let obj1 = { name: "Nikhil" };
let obj2 = obj1; // reference copy
obj2.name = "Changed";
console.log("Heap Example → obj1:", obj1, " obj2:", obj2); // both affected
