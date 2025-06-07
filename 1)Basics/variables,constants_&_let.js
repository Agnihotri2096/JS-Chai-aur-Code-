const accountId = 2;
let accountEmail = "agni@gmail.com";
var accountpassword = "123445";
accountCity  = "Jaipur";
// accountEmail = "agg@gmail.com"; This is not possible.
console.table([accountId,accountEmail,accountpassword,accountCity]);
/*
Prefer not to use var, use let or const instead.Because var is function scoped and let/const are block scoped.
Use const for variables that won't change, let for those that might.
*/
console.log(accountId,accountEmail,accountpassword,accountCity);
