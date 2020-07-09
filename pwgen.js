// Creates variable attached to the "Generate PW" button
var generateBtn = document.querySelector("#generatepw");

// // Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// MY CODE FOLLOWS:

// Initiate an array that will include all possible letters, numbers, and characters.
let possibleCharArray = [];

function generatePassword() {

  // Initiate numChar with input- this variable will hold the numbers of characters in the password.
  let numChar = document.getElementById("numChar").value;

  // If the user clicks cancel, end the program.
  if (numChar === null) return;

  // Validates that the password is a an integer number between 8 and 128, inclusive; otherwise alerts with error and prompts for length again
  if (numChar < 8 || numChar > 128 || isNaN(numChar) || numChar % 1 !== 0) {
    alert("You must choose a number between 8 and 128.");
    return;
  }

  // Check to see whether the check boxes are checked for the 4 different options.
  var includeLower = document.getElementById("lowercase").checked;
  var includeUpper = document.getElementById("uppercase").checked;
  var includeNumbers = document.getElementById("numbers").checked;
  var includeSpecChar = document.getElementById("spechar").checked;

  // If lowercase check box checked, add lowercase letters to the array off possible characters (the numbers 97 - 122 are ascii values for lowercase letters).
  if (includeLower) {
    asciiToCharArray(97, 122);
  }

  // If uppercase check box is checked, add uppercase letters to the array of possible characters (ascii 65-90)
  if (includeUpper) {
    asciiToCharArray(65, 90);
  }

  // If numbers box is checked, add numbers to the array of possible characters (ascii 48-57)
  if (includeNumbers) {
    asciiToCharArray(48, 57);
  }

  // If special characters box is checkec, add special characters to the array of possible characters (33-47, 58-64, 91-96, 123-126)
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

  //Clear the array of possible characters in case the user hits the "Generate Password" again.
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