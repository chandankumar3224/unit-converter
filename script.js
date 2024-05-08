const inputValue = document.getElementById("number");
const unit = document.getElementById("unit");
const button = document.getElementById("converter");
const result = document.getElementById("result");

button.addEventListener('click', function(){
  let mianResult = 0;
  let mainOutput = "";

  if (unit.value === "milesToKm" && inputValue.value > 0) {
    mianResult = inputValue.value * 1.60934;
    mainOutput = `${inputValue.value} miles = ${mianResult.toFixed(2)} km`;
  }
  else if (inputValue.value === 0 || inputValue.value == "") {
    mainOutput = "1km = 1.60934miles";
  }
  else{
    mianResult = inputValue.value / 1.60934;
    mainOutput = `${inputValue.value} km = ${mianResult.toFixed(2)} miles`;
  }
  result.innerHTML = mainOutput;
  inputValue.value = "";

})
