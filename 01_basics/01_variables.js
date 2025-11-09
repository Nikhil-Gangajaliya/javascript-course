const accountId = 123321;
let accountEmail = "nikhilgangajaliya5@gmail.com";
var accountPw = "123"; // don't use this.
accountCity = "Mumbai"; // also don't use this.
let accountState;

// accountId = 2222; // const can't change.

/*
don't use var because it issues in block scope and function scope/
*/

accountEmail = "ng@gmail.com";
accountPw = "111";
accountCity = "Rajkot";

console.log(accountId);
console.log(accountEmail);
console.log(accountPw);
console.log(accountCity);

console.table([accountId,accountEmail,accountPw,accountCity,accountState]); //print in tabular formate