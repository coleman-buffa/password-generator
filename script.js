// This object is responsible for prompting and accepting user input. This input is used
// to create an array that will contain the sets of characters to be used in generating 
// a password. The password generation process includes guidance to ensure the user
// generates a password that is 8-128 (inclusive) characters long and contains at least
// one set of characters (uppercase, lowercase, numbers, and specials). 
var passwordBot = {
  upperCase: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
  lowerCase: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
  numberAry: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"],
  specialChar: ["!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\"", "]", "^", "_", "`", "{", "|", "}", "~", "]", ","],
  selectorAry: [],
  pwLength: 0,
  password: "", 
  
  // setParameters prompts the user to select a password length and select which character
  // sets to include in the password generation process. If the user selects a password 
  // length outside the acceptable range, then they are prompted to repeat the password
  // criteria selection process. If this occus the passwordBot object is reset to default
  // state to prevent criteria selection cross-contamination.
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
  // This helper function is called inside setParameters() so that it can add user selected
  // character sets as they are chosen. The individual character set arrays are added to a 
  // master array that will serve as the source of random character selection.
  arrayConstructor: function (ary) {
    this.selectorAry = this.selectorAry.concat(ary);
  },

  // printBotStatus is a utility function that writes vital passwordBot object parameters 
  // to the console logs. This functionality was useful in developing the project.
  printBotStatus: function () {
    console.log("selectorAry contents: " + this.selectorAry);
    console.log("pwLength = " + this.pwLength);
    console.log("password: " + this.password);
  },

  // resetBot is a helper function inside setParameters() that resets passwordBot back to
  // its initial state  in the event the user asks for an illegal password. This allows
  // the password criteria selection process to start with a clean slate.
  resetBot: function () {
    this.selectorAry = [];
    this.pwLength = 0;
    this.password = "";
  },

  // Builds the password from user provided criteria by selecting a random character
  // from the desired character set
  pwConstructor: function() {
    while (this.password.length < this.pwLength) {
      this.password = this.password.concat([this.randomPick()]);
    }      
  },

  // Helper function inside pwConstructor() that provides a randomly generated character
  // from the master array.
  randomPick: function () {
    var randomIndex = Math.floor(Math.random() * this.selectorAry.length);
    return this.selectorAry[randomIndex];    
  }

}

// Create generate button that will serve as starting trigger.
var generateBtn = document.querySelector("#generate");
// Add event listener to generate button.
generateBtn.addEventListener("click", writePassword);

// This function runs on button click, builds the password, and writes it to the window.
function writePassword() {
  passwordBot.setParameters();
  passwordBot.pwConstructor();
  var passwordText = document.querySelector("#password");
  passwordText.value = passwordBot.password;
}