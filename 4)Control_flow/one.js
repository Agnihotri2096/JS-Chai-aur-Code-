//if
const isUserLoggedIn = true;
const temperature = 41;
if (2==="2") {
  console.log("User is logged in");
}
// <,>,=,!=,==,===,<=,>=,!==
if(temperature < 50) {
  console.log("less than 50");
}
else{
console.log("This will always run");
}
const score = 200;
if (score > 100) {
  const power = "fly";
  console.log(`user has power to ${power}`);
}
// const balance = 1000

// if (balance > 500) console.log("test"),console.log("test2");

// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");
    
// } else if (balance < 900) {
//     console.log("less than 750");
    
// } else {
//     console.log("less than 1200");

// }
const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==3) {
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}