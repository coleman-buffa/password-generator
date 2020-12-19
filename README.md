# Password Generator

This project produces a randomly generated password based on user selected criteria. Through a browser-based interface the user will select from the following criteria and character sets to build their password:
- Number of characters or length;
- Uppercase characters;
- Lowercase characters;
- Numbers; and
- Special Characters.

Clicking the 'Generate Password' button starts the process and will guide the user to create a password that is at least 8 characters long, but no more than 128 characters long. The user must also select at least one character set to be used in the password generation process. Upon completing the criteria selection process the password will be generated and printed in the browser window.

## Table of Contents

| |||
| :------------------------------ | :-------------------------| :-----------------------------------|
| [Project Introduction](#password-generator) | [Table of Contents](#table-of-contents) | [Goals and Methods](#goals-and-methods) |
| [Project Photos](#project-photos) | [Technologies](#technologies)   | [Deployed Link](#deployed-link) | 
| [Authors](#authors) | [Acknowledgments](#acknowledgments) | [License](#license) |
---

## Goals and Methods

The top level goal of the project is a broswer based password generator built using functions and object oriented programing. Cryptographic strength of the password was not a concern for this effort. The password generation process can be summarized as follows:
- A series of brower prompts determine how long the password will be and which character sets to use;
- Capture the password length in a variable for later use;
- Add the desired character set(s) to an array as they are selected by the user;
- Use a random number generator to pick a single character from the above array and append it to a string. Repeat this process a number of times equal to the password length; and
- Print the password string to the browser window.

An object named passwordBot contains all the data, variables, and functions needed to complete the above process. This includes four arrays each storing one of the possible character sets. These arrays will be drawn from and added a fifth array. Code Snippet 1 illustrates the user interaction and array building process:

Snippet 1:
```javascript
setParameters: function() {
    this.pwLength = prompt("Enter a number that is at least 8 and no more than 128 to select password length.");
    if (confirm("Do you want uppercase characters in your password?")) {
      this.arrayConstructor(this.upperCase);
    }
    ...
    if (this.selectorAry.length === 0 || this.pwLength <8 || this.pwLength > 128) {
      alert("Please select a password length of at least 8 and no more than 128 characters, and select at least one character set to be included in your password.");
      this.resetBot();
      this.setParameters();
  }
  ```

Selecting 'OK' in the prompt window calls the arrayConstructor function that will add the relavent character set to an array called selectorAry, which will be drawn from later, that is a parameter of the passwordBot object. A further discussion of arrayConstructor follows in Snippet 2. Before departing from please note the second half of Snippet 1. This portion of code contains the logic that prevents the user from generating a password that is either too short or too long, or contains no sets of characters. This point in the decision tree exists to alert the user they need to follow the password making rules and restart the criteria selection process over. Additionally the state of the selectorAry and the password length are reset to their default states. 

Snippet 2:
```javascript
  arrayConstructor: function (ary) {
    this.selectorAry = this.selectorAry.concat(ary);
  },
```
Code Snippet 1 and 2 together outline the selectorAry building process which leads to the next step in the process. Once selectorAry is built a random number generator will pick characters from it and add them to a string that represents the password. Snippet 3 shows the process. The variables pwLength and password are parameters of the object passwordBot that store the desired password length and the password itself respectively:

Snippet 3:
```javascript
  pwConstructor: function() {
    while (this.password.length < this.pwLength) {
      this.password = this.password.concat([this.randomPick()]);
    }      
  },
  randomPick: function () {
    var randomIndex = Math.floor(Math.random() * this.selectorAry.length);
    return this.selectorAry[randomIndex];
  }
```
Note that two functions were used to complete this part of the task. This approach was used to break out repeated blocks of work and improve code readability. At this point in the process the password has been generated and will be printed to the browser window.

## Project Photos

Thee following photos document the password generation process:

Figure 1: What the user will be greeted with when they visit the site
![](/assets/default-state.png)

Figure 2: The user selects their desired password length
![](/assets/set-pw-length.png)

Figure 3: The user chooses to include uppercase alphabet characters
![](/assets/set-uppercase.png)

Figure 4: The user chooses to include lowercase alphabet characters
![](/assets/set-lowercase.png)

Figure 5: The user chooses to include numbers
![](/assets/set-numbers.png)

Figure 6: The user chooses to include special characters
![](/assets/set-specials.png)

Figure 7: The user is presented with their newly generated password
![](/assets/password-output.png)

## Technologies 

* [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
* [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
* [Bootstrap](https://getbootstrap.com/)

## Deployed Link

* [See Live Site](https://coleman-buffa.github.io/password-generator/)

## Authors

Coleman Buffa

- [Link to Git Hub](https://coleman-buffa.github.io/password-genereator/)
- [Link to LinkedIn](https://www.linkedin.com/in/coleman-buffa-0a12a5201/)

## Acknowledgments

* Many thanks to UCB Bootcamp Instructional and Support Staff

## License

* Bootstrap is released under the MIT license and is copyright 2020 Twitter

### [Back to Table of Contents](#table-of-contents)