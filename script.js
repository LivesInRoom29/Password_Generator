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

// Initiate an array that will include all possible letters, numbers, and characters.
let possibleCharArray = [];

function generatePassword() {
  // Initiate numChar with input- this variable will hold the numbers of characters in the password.
  let numChar = prompt("How many characters do you want in the password? (Must be at least 8 and no more than 128.)");

  // If the user clicks cancel, end the program.
  if (numChar === null) return;

  // Validates that the password is an integer number between 8 and 128, inclusive; otherwise alerts with error and prompts for length again
  while (numChar < 8 || numChar > 128 || isNaN(numChar) || numChar % 1 !== 0) {
    alert("You must choose a number between 8 and 128.");
    numChar = prompt("How many characters do you want in the password? (Must be at least 8 and no more than 128.)");
    // If the user clicks cancel while within this loop, ends the program.
    if (numChar === null) return;
  }

  // Ask the user whether they want to include lowercase letters.
  const includeLower = confirm("Do you want to include lowercase letters?");
  // If yes, add lowercase letters to the array off possible characters (the numbers 97 - 122 are ascii values for lowercase letters).
  if (includeLower) {
    asciiToCharArray(97, 122);
  }

  // Ask the user whether they want to include uppercase letters.
  const includeUpper = confirm("Do you want to include UPPERCASE letters?");
  // If yes, add uppercase letters to the array of possible characters (ascii 65-90)
  if (includeUpper) {
    asciiToCharArray(65, 90);
  }

  // Ask the user whether they want to include numbers.
  const includeNumbers = confirm("Do you want to include numbers?");
  // If yes, add numbers to the array of possible characters (ascii 48-57)
  if (includeNumbers) {
    asciiToCharArray(48, 57);
  }

  // Ask the user whether they want to include special charcters.
  const includeSpecChar = confirm("Do you want to include special characters (e.g. $, *, >, etc)?");
  // If yes, add special characters to the array of possible characters (33-47, 58-64, 91-96, 123-126)
  if (includeSpecChar) {
    asciiToCharArray(33, 47);
    asciiToCharArray(58, 64);
    asciiToCharArray(91, 96);
    asciiToCharArray(123-126);
  }

  // If no characters are chosen for the password (and length of possibleCharArray is 0), alert an error and end the program.
  if (!possibleCharArray.length) {
    alert("You must choose at least one type of character to include. Please click the GENERATE PASSWORD button again to continue.");
    return;
  }

  // Initialize blank PW array.
  let pwArray = [];

  // Loop through numChar number of times to add the correct number of characters to the array:
  for (let i = 0; i < numChar; i++) {
    randomIndex = randomRange(0, possibleCharArray.length);
    pwArray.push(possibleCharArray[randomIndex]);
  }

  // Create a string from the PW array with join.
  const pwString = pwArray.join("")

  //Clear the array of possible characters in case the user hits the "Generate Password again.
  possibleCharArray = [];

  // Return the password string
  return pwString;

}

// Fuction to get charcters from ascii range and add them to array of possble characters:
function asciiToCharArray (min, max) {
  for (let i = min; i < max + 1; i++) {
    possibleCharArray.push(String.fromCharCode(i));
  }
}

// Cited: https://www.geeksforgeeks.org/how-to-generate-random-number-in-given-range-using-javascript/
// Function to return a random integer within a given range (min is inclusive, max is not).
function randomRange(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }