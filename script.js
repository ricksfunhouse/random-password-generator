// Assignment Code
var generateBtn = document.querySelector("#generate");

// Arrays, numbers (0-9), uppercase letters, lowercase letters, special characters
var lowerCaseChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCaseChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numberset = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = [' ', '!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '}', '~'];


// Generate password function
function generatePassword() {

    // Prompt user to confirm the amount of characters they would like to use
    var passwordLength = (prompt("How many characters would you like to use? (Must be between 8-128)"));

    // Loop if answer is outside of set parameters
    while(passwordLength < 8 || passwordLength > 128 || !passwordLength) {
        alert("Password must be between 8 and 128 characters")
        var passwordLength = (prompt("How many characters would you like to use? (Must be between 8-128)"));
    }

    // Prompt to specify type of characters
    var lowerCase = confirm("Click OK if you would like to include lowercase characters");
    var upperCase = confirm("Click OK if you would like to include uppercase characters");
    var numbers = confirm("Click OK if you would like to include numbers");
    var special = confirm("Click OK if you would like to include special characters");

    // Validate selection
    while(!lowerCase && !upperCase && !numbers && !special) {
            alert(
                "Please select at least one parameter"
            );
        var lowerCase = confirm("Click OK if you would like to include lowercase characters");
        var upperCase = confirm("Click OK if you would like to include uppercase characters");
        var numbers = confirm("Click OK if you would like to include numbers");
        var special = confirm("Click OK if you would like to include special characters");
    }

    console.log(lowerCase, upperCase, numbers, special);


    var generateRandomPassword = "";
    var generateOptions = "";
    // Create a string to validate criteria 

    if (lowerCase) {
        generateOptions += lowerCaseChar;
      }
    
      if (upperCase) {
        generateOptions += upperCaseChar;
      }
    
      if (numbers) {
        generateOptions += numberSet;
      }
    
      if (special) {
        generateOptions += specialChar;
      }



    // Create Password
    for (var i = 0; i < passwordLength; i++) {
        generateRandomPassword += generateOptions.charAt(Math.floor(Math.random() * generateOptions.length));
    }

/// Cant get the password to display
    return generateRandomPassword;
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


