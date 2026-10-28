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
  if (operator === "+") {
    result = Number(firstNumber) + Number(secondNumber);
  }

  if (operator === "-") {
    result = Number(firstNumber) - Number(secondNumber);
  }

  if (operator === "*") {
    result = Number(firstNumber) * Number(secondNumber);
  }

  if (operator === "/") {
    result = Number(firstNumber) / Number(secondNumber);
  }

  display.value = result;
});

clearButton.addEventListener("click", () => {

    display.value = "";
    firstNumber = "";
    operator = "";

});

