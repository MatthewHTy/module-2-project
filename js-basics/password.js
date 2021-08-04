//password.js
const readline = require("readline");

const reader = readline.createInterface({
   input: process.stdin,
   output: process.stdout,
 });

console.log("Welcome to our Password Validator");
reader.question("Please enter your Password:", function (answer) {
   if (answer.length > 10) {
      console.log("Password entered successfully");
   } else {
      console.log("Password is incorrect, try again.");
   }
});