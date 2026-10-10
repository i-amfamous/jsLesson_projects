const display = document.getElementById("display");
const operatorBtn = document.querySelectorAll(".operator");
const number = document.querySelectorAll(".number");
const clear = document.querySelector(".clear");
const equalSign = document.querySelector(".equals");
const clearButton = document.querySelector(".clear");

let firstNumber = "";
let operator = "";

function addNumber(value) {
  display.value += value;
}

number.forEach((button) => {
  button.addEventListener("click", () => {
    addNumber(button.textContent);
  });
});

operatorBtn.forEach((button) => {
  button.addEventListener("click", () => {
      firstNumber = display.value;
      operator = button.textContent;

      display.value = "";
  });
});

equalSign.addEventListener("click", () => {
  let secondNumber = display.value;
  let result = '';
  if (operator === "+") {
    result = Number(firstNumber) + Number(secondNumber);
  } 
  else if (operator === "-") {
    result = Number(firstNumber) - Number(secondNumber);
  } 
  else if (result === "/") {
    result = Number(firstNumber) / Number(secondNumber);
  } 
  else if (operator === "*") {
    result = Number(firstNumber) * Number(secondNumber);
  }

  display.value = result;
});

clear.addEventListener("click", () => git {
  display.value = "";
  secondNumber = "";
  operator = "";
});

//A Background color changer
const mode = document.querySelector('.theme');
const black = document.querySelector('.black')
const app = document.querySelector('.calculatorApp')

function changeMode(){
    if(mode.textContent === "Dark Mode"){
        black.style.backgroundColor = 'black';
        mode.innerHTML = 'Light Mode';
        app.style.backgroundColor = ' #111111';
    } 
    else if(mode.textContent === "Light Mode"){
        black.style.backgroundColor = 'white';
        app.style.backgroundColor = 'black';
        mode.innerHTML = 'Dark Mode';
    }
}

mode.addEventListener('click', changeMode);