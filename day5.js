let arr1 = [22,33,44,55];
let arr2 = new Array("MI","RCB","CSK");
console.log(arr1);
console.log(arr2);

let mix = [100, "Nikhil", true, {id:1, name:"JS"}];
console.log(mix);

console.log(arr2[0]);
console.log(arr2[2]);
console.log(arr2.length);

let nums = [10, 20, 30, 40];

// for loop
for (let i = 0; i < nums.length; i++) {
  console.log("For loop :",nums[i]);
}

// for..of loop
for (let val of nums) {
  console.log("For..of loop :",val);
}

// forEach method
nums.forEach((val,index) => {
  console.log("forEach loop :",index,val);
});

arr2.push("GT"); 
console.log(arr2); 

arr1.pop();     
console.log(arr1);  
arr1.unshift(11);  
console.log(arr1); 

arr2.shift();     
console.log(arr2);

let id = [1,2,3,4,5,6,7,8];
let newId = id.slice(2,5);
console.log(newId);

let id2 = [0,1,2,3,4,5,6,7,8]
id2.splice(2,4,11,12,13,14);
console.log(id2);