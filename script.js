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

// Pseudocoding and project planning
// Build a password generator that takes user input into account:
//   Length of password 
//     Must be 8-128 characters long
//       Must alert user if they are asking for less than 8 or more than 128
//   Character sets to be used
//     uppercase alphabet
//     lowercase alphabet
//     numbers
//     special characters
//   Once password parameters are set produce the password and display it on the screen
//   If no password parameters are set then an no password is made and an alert is made

//   General approach:
//   Collect user input from promps into a variable of some kind, create variable that will store password here?
//   Check that the user hasn't asked us to break the rules
//   Based on user input pick at random from available characters and append onto password variable
//   Output password to screen


// Start with 4 arrays containing all possible values. Each array will be upper, lower, numbers, and specials
// Then build a new array that is combined arrays of user selections. capture password size during prompting
// make a password using random picks from the constructed array equal to the size of the requested password

// data structures I will need:
//   object containing 5 arrays - one for each character set plus an empty one to be built
//           password length will need to live inside the object
// functions I will need:
//   array constructor - builds array inside object given user input
//   password constructor - randomly picks a letter from the constructed array and adds it to password

var passwordBot = {
  upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
  lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
  numberAry = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"],
  specialChar = ["!", "\", "\"", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~", "]", ","],
  selectorAry = [], //built from user prompt by arrayConstructor();
  pwLength = 0, //set from user prompt

  arrayConstructor: function() {
    //builds the array password characters will be chosen from
  }

  pwConstructor: function() {
    //builds the password by generating a random number and appending it onto password
  }

}

  
  
  