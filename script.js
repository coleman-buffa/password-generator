var passwordBot = {
  upperCase: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
  lowerCase: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
  numberAry: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"],
  specialChar: ["!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\"", "]", "^", "_", "`", "{", "|", "}", "~", "]", ","],
  selectorAry: [],
  pwLength: 0,
  password: "", 
  
  //Series of prompts that ask the user to select a password length and select
  //which character sets to include. 
  setParameters: function() {
    this.pwLength = prompt("Enter a number that is at least 8 and no more than 128 to select password length.");
    if (confirm("Do you want uppercase characters in your password?")) {
      this.arrayConstructor(this.upperCase);
    }
    if (confirm("Do you want lowercase characters in your password?")) {
      this.arrayConstructor(this.lowerCase);
    }
    if (confirm("Do you want numbers in your password?")) {
      this.arrayConstructor(this.numberAry);
    }
    if (confirm("Do you want special characters in your password?")) {
      this.arrayConstructor(this.specialChar);
    }
    if (this.selectorAry.length === 0 || this.pwLength <8 || this.pwLength > 128) {
      alert("Please select a password length of at least 8 and no more than 128 characters, and select at least one character set to be included in your password.");
      this.resetBot();
      this.setParameters();
    }
  },
  //Helper function inside setParameters() that adds user selected character sets to a
  //master array that will be picked from randomly to build the password.
  arrayConstructor: function (ary) {
    this.selectorAry = this.selectorAry.concat(ary);
  },

  //Utility function that console logs vital passwordBot object parameters to aid in debugging.
  printBotStatus: function () {
    console.log("selectorAry contents: " + this.selectorAry);
    console.log("pwLength = " + this.pwLength);
    console.log("password: " + this.password);
  },

  //Helper function inside setParameters() that resets passwordBot object parameters
  //in the event the user asks for an illegal password. This allows the password criteria
  //selection process to start with a clean slate.
  resetBot: function () {
    this.selectorAry = [];
    this.pwLength = 0;
    this.password = "";
  }

  //Builds the password from user provided criteria by selecting a random character
  //from the desired character set
  pwConstructor: function() {
    while (this.password.length < this.pwLength) {
      this.password = this.password.concat([this.randomPick()]);
    }      
  },

  //Helper function inside pwConstructor() that provides a randomly generated character
  //from the master array.
  randomPick: function () {
    var randomIndex = Math.floor(Math.random() * this.selectorAry.length);
    return this.selectorAry[randomIndex];
  }

}
//Create generate button that will serve as starting trigger.
var generateBtn = document.querySelector("#generate");
//Add event listener to generate button.
generateBtn.addEventListener("click", writePassword);

//This function fires on button click, builds the password, and writes it to the window.
function writePassword() {
  passwordBot.setParameters();
  passwordBot.pwConstructor();
  var passwordText = document.querySelector("#password");
  passwordText.value = passwordBot.password;
  passwordBot.printBotStatus();

}



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



  
  
  