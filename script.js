// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// MY CODE FOLLOWS:

function generatePassword() {
  // Initiate numChar with input- this variable will hold the numbers of characters in the password.
  let numChar = prompt("How many characters do you want in the password? (Must be at least 8 and no more than 128.)");

  // If the user clicks cancel, end the program.
  if (numChar === null) {
    return;
  }

  // Validates that the password is a number between 8 and 128, inclusive; otherwise alerts with error and prompts for length again
  while (numChar < 8 || numChar > 128 || isNaN(numChar)) {
    alert("You must choose a number between 8 and 128.");
    numChar = prompt("How many characters do you want in the password? (Must be at least 8 and no more than 128.)");
    if (numChar === null) return;
  }

}