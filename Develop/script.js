// Assignment Code
const characters = "";
const uppercase = [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", ];
const lowercase= ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const numbers = ["0","1","2","3","4","5","6","7","8","9"];
const special = ["!","@","#","$","%","^","&","*","(","<"];
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

//function prompt ()
// Add event listener to generate button


function generatePassword(){
  var passwordLength = prompt("How many charcters long would you like your password to be?");
  var numbers = confirm("Are you including numbers?");
  var uppercase = confirm("Are you including uppercase?");
  var lowercase = confirm("Are you including lowercase?");
  var specialCharacters = confirm("Are you inluding special characters?");
  if (generatePassword < 8 || generatePassword > 128) {
    alert("you must choose 8-128 charactrs, Try again!");
  } else {
      alert("Your new pasword")
    }
  }


 var passwordLength = "";
  for (var i = 0; i < passwordLength; i++){
    var randomPassword = Math.floor(Math.random()*characters.length);
   password += characters.substring(randomNumber, randomNumber +1);
  }
  
   generateBtn.addEventListener("click", writePassword);