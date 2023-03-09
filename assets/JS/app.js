/*get the number1 of characters*/
function charLength() {
  let charLength = document.getElementById("length").value;
  document.getElementById("result").innerHTML = charLength;
  return charLength;
}
var chars =
  "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var passwordLength = 12;
var password = "";

for (var i = 0; i <= passwordLength; i++) {
  var randomNumber = Math.floor(Math.random() * chars.length);
  password += chars.substring(randomNumber, randomNumber + 1);
}

document.getElementById("length").addEventListener("change", charLength);

/*get the number1 of characters*/
function charLength() {
  let upper = document.getElementById("uppercase").checked;
  let lower = document.getElementById("lowercase").checked;
  let numbers = document.getElementById("numbers").checked;
  let symbols = document.getElementById("symbols").checked;

  const uppercase1 = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
  const lower_case1 = ["abcdefghijklmnopqrstuvwxyz"];
  const number1 = ["0123456789"];
  const symbols1 = ["!@#$%^&*()_+{}|:>?<~[];'./"];

  let charLength = document.getElementById("length").value;
  document.getElementById("result").innerHTML = charLength;
}
