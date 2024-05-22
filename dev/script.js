// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var length = window.prompt("How long would you like the password to be?");
  var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numbers = "0123456789";
  var special = "`~!@#$%^&*()_-+=[]{};:<,>.?/|";

  var isLower = window.confirm("Would you like to use lower case letters?");
  var isUpper = window.confirm("Would you like to use upper case letters?");
  var isNumber = window.confirm("Would you like to use numbers?");
  var isSpecial = window.confirm("Would you like to use special characters?");

  var charPool = "";
  var password = "";

  charPool += isLower ? lowerCase : "";
  charPool += isUpper ? upperCase : "";
  charPool += isNumber ? numbers : "";
  charPool += isSpecial ? special : "";

  if (length < 8 || length > 128) {
    window.alert("Length must be at least 8 characters and under 128 characters");
    return "";
  }

  if (charPool.length === 0) {
    window.alert("At least one character type must be selected");
    return "";
  }

  for (var i = 0, n = charPool.length; i < length; ++i) {
    var randomIndex = Math.floor(Math.random() * charPool.length);
    password += charPool[randomIndex];
  }
  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
