// Assignment Code
const uppercase = [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", ];
const lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const numbers = ["0","1","2","3","4","5","6","7","8","9"]
const special = ["!","@","#","$","%","^","&","*","(",")","<"];
const characters = [];
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
//function prompt ()
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  var passwordLength = prompt("how many charcters would you like your password to contain?");
  var numbers = confirm("Are you including special charcaters?");
  var lowercase = confirm ("Are you including lowercase?");
  var uppercase = confirm ("Are you including uppercase?");
  var special = confirm ("Are you including special charcaters?");
  var numbers = confirm ("Are you including numbers?");
}
  //var paswordLength = 0-128;
 // var password = "";
  //for (var i = 0; i < passwordLength; i++){
  //  var randomPassword = Math.floor(Math.random() characters.length);
 //   password += characters.substring(randomnumber, randomNumber +1);
 // }
 // return
