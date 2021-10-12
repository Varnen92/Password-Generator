// Create Password function
// First check for desired length between 8 and 128 characters
// second check for multiple criteria including lowercase, uppercase, numbers and special characters to be included
// using those criteria that were selected, confirm that at LEAST one was selected 
// create a password that is the desired length and includes at least 1 character from each selected criteria
// display the password as an alert or as text on the html page -- either is ok

// Global variables needed for Password functions
const alphaLower = "abcdefghijklmnopqrstuvwxyz";
const alphaUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%&*";

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("5#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Random alpha lower function
/* function getRandomAlphaLower() {
  alphaLower[Math.floor(Math.random() * alphaLower.length)];
}
 */

// Generate Password function upon Button Click
function generatePasswordOptions() {
  // Length of password Function
  var lengthPassword = window.prompt("Please confirm the length of your password! Minimum characters are 8, max are 128!");
  lengthPassword = parseInt(lengthPassword);
  if (lengthPassword >= 8 && lengthPassword <= 128) {
    window.alert("Your password length will be " + lengthPassword + "!");
  }
  else {
    window.alert("Please enter a valid password length!")
    return lengthPassword();
  };

  // Lowercase function
  var lowercasePassword = window.confirm("Do you want to include lower case characters in your password?");
  if (lowercasePassword) {
    window.alert("Lowercase characters will be included in your password!");
  }
  else {
    window.alert("Lower characters will NOT be included in your password!");
  };
  // Uppercase function
  var uppercasePassword = window.confirm("Do you want to include upper case characters in your password?");
  if (uppercasePassword) {
    window.alert("Uppercase characters will be included in your password!");
  }
  else {
    window.alert("Uppercase characters will NOT be included in your password!");
  };
  // Numerical function

  var numericalPassword = window.confirm("Do you want to include numbers in your password?");
  if (numericalPassword) {
    window.alert("Numbers will be included in your password!");
  }
  else {
    window.alert("Numbers will NOT be included in your password!");
  };
  // Special Character function
  var specialcharacterPassword = window.confirm("Do you want us to include special characters in your password?");
  if (specialcharacterPassword) {
    window.alert("Special characters will be included in your password!");
  }
  else {
    window.alert("Special characters will NOT be included in your password!");
  };

  if (lowercasePassword || uppercasePassword || numericalPassword || specialcharacterPassword) {
    window.alert("Your password will include the criteria you selected!");
  }

  else {
    window.alert("You did not select ANY password type to be included, please repeat from the start and select at LEAST one! Thank you!");
    generatePasswordOptions();
  };

  var passwordCriteria = {
    length: lengthPassword,
    hasUppercase: uppercasePassword,
    hasLowercase: lowercasePassword,
    hasSpecial: specialcharacterPassword,
    hasNumbers: numericalPassword,
  };
  return passwordCriteria;

};

function generatePassword() {
  var passwordGenerateOptions = generatePasswordOptions();
  var pCharacters = "";
  while (passwordGenerateOptions.length != pCharacters.length) {
    if (passwordGenerateOptions.hasLowercase) {
      pCharacters += alphaLower[Math.floor(Math.random() * alphaLower.length)];
    };
    if (passwordGenerateOptions.hasUppercase) {
      pCharacters += alphaUpper[Math.floor(Math.random() * alphaUpper.length)];
    };

    if (passwordGenerateOptions.hasSpecial) {
      pCharacters += symbols[Math.floor(Math.random() * symbols.length)];
    };

    if (passwordGenerateOptions.hasNumbers) {
      pCharacters += numbers[Math.floor(Math.random() * numbers.length)];
    };
  };
  window.alert("Your new password is " + pCharacters + " !");
}