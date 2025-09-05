let myDate = new Date();
console.log("Current Date : ",myDate);
console.log("",myDate.getHours(),":",myDate.getMinutes(),":",myDate.getSeconds());
console.log("Current time : ",myDate.toLocaleString());

let dob = new Date(2005, 9, 8); // Month is 0-based: 10 = November
console.log("My birth Date is:", dob);

// Current date in milliseconds
let end = Date.now(); 

// Birthdate in milliseconds
let start = dob.getTime(); 

// Difference in milliseconds
let diff = end - start;

// Convert ms → years
let age = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
console.log("My Age is:", age, "years");

// let years = today.getFullYear() - dob.getFullYear();
console.log("Birth Year :",dob.getFullYear());
// let months = today.getMonth() - dob.getMonth();
console.log("Birth Month :",dob.getMonth()+1);
// let days = today.getDate() - dob.getDate();
console.log("Birth Date : ",dob.getDate());



