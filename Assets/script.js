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

// Length of password Function
var lengthPassword = function(){
  var length = window.prompt("Please confirm the length of your password! Minimum characters are 8, max are 128!");
  length = parseInt(length);
    if (length >=8 && length <= 128) {
      window.alert("Your password length will be " + length + "!");
    }
    else {
      window.alert("Please enter a valid password length!")
      return lengthPassword();
    }
  };

// Lowercase function
var lowercasePassword = function(){
  var lowercasePrompt = window.confirm("Do you want to include lower case characters in your password?");
  if (lowercasePrompt) {
    window.alert ("Lowercase characters will be included in your password!");
  }
  else {
    window.alert ("Lower characters will NOT be included in your password!");
  };
};
// Uppercase function
var uppercasePassword = function(){
  var uppercasePrompt = window.confirm("Do you want to include upper case characters in your password?");
  if (uppercasePrompt) {
    window.alert ("Uppercase characters will be included in your password!");
    }
  else {
    window.alert ("Uppercase characters will NOT be included in your password!");
  }
};
// Numerical function

var numericalPassword = function(){
  var numericalPrompt = window.confirm("Do you want to include numbers in your password?");
  if (numericalPrompt){
    window.alert ("Numbers will be included in your password!"); 
  }
  else {
    window.alert ("Numbers will NOT be included in your password!");
  }
};
// Special Character function
var specialcharacterPassword = function(){
  var specialcharacterPrompt = window.confirm("Do you want us to include special characters in your password?");
 if (specialcharacterPrompt){
   window.alert ("Special characters will be included in your password!");
 } 
 else {
   window.alert ("Special characters will NOT be included in your password!");
 }
};

// Verify if at least ONE function was entered as true





// Generate Password function upon Button Click
function generatePassword (){
  // First prompt asking for length of password
  lengthPassword();
  // Check if user wants lower case 
  lowercasePassword();
  // Check if user wants upper case
  uppercasePassword();
  // Check if user wants numerical prompts included
  numericalPassword();
  // Check if user wants special characters included
  specialcharacterPassword();
};


// Uppercase Function with Switch Prompts
/* var uppercasePassword = function(){
  var uppercasePrompt = window.prompt("Do you want to include upper case in your password?");
  uppercasePrompt = uppercasePrompt.toLowerCase();
  switch(uppercasePrompt) {
    case 'yes':
      window.alert("Uppercase will be included in your password!")
      break;
    case 'no':
      window.alert("Uppercase will not be included in your password!")
      break;
    default:
      window.alert("You did not pick a valid option. Try again.");
    uppercasePassword();
    break;
  }
}*/

/* // Lowercase function with Switch Prompts
 var lowercasePassword = function(){
  var lowercasePrompt = window.prompt("Do you want to include lower case in your password?");
  lowercasePrompt = lowercasePrompt.toLowerCase();
  switch(lowercasePrompt) {
    case 'yes':
      window.alert("Lowercase will be included in your password!")
      break;
    case 'no':
      window.alert("Lowercase will not be included in your password!")
      break;
    default:
      window.alert("You did not pick a valid option. Try again.");
    lowercasePassword();
    break;
  }
}  */
