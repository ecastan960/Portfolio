const ps = require("prompt-sync");
const prompt = ps();
let valid = true;

// This function checks if the input can be converted to an
// integer. If that is not the case, the valid variable turns
// to false and the program is terminated in App.js
// Inputs: userInput: String from the terminal
// Outputs: integer: input converted to integer or NaN
//           valid: true or false
function check(userInput) {
  integer = parseInt(userInput);
  valid = true;
  if (!integer && integer !== 0) {
    valid = false;
    console.log("Invalid input, Please try again");
  }
  return [integer, valid];
}

// This function ask for an input from the user
// uses the check function to see if it a valid input
// and returns to the main funcion the input converted
// and if the input is valid or not.
// Inputs: None
// Outputs: integer: input converted to integer or NaN
//           valid: true or false
function input() {
  let number = prompt("Please enter a Integer number: ");
  const [integer, valid] = check(number);
  return [integer, valid];
}

module.exports = [input, check];
