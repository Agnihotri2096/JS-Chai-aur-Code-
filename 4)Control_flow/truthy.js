const userEmail = "a@exapmle.com";
if (userEmail) {
  console.log("User email is set");
}
else {
  console.log("User email is not set");
}
/* 
falsy values
false, 0, "", null, undefined, NaN;
// truthy values
true, 1, "0", "false", [], {}, function() {}, new Date(), Infinity, -Infinity;
*/
// For checking if an object or array is empty
// 1. Using Object.keys() for objects
const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}
else {
    console.log("Object is not empty");
}
// 2. Using Array.isArray() and length for arrays
const emptyArray = [];
if (emptyArray.length === 0) {
    console.log("Array is empty");
}
else {
    console.log("Array is not empty");
}
/*
false==0 gives true
false=="" gives true
false==null gives true
false==undefined gives true
false==NaN gives false
false===0 gives true
false==="" gives false
false===null gives false
false===undefined gives false
false===NaN gives false
*/
// Nullish Coalescing Operator (??): null undefined
const userName = null;
const displayName = userName ?? "Guest";
console.log(displayName); // "Guest"
// Terniary Operator (condition ? true : false)
const isLoggedIn = true;
const greeting = isLoggedIn ? "Welcome back!" : "Please log in.";
console.log(greeting); // "Welcome back!"