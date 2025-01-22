let currentInput = "";
let operator = "";
let previousInput = "";

function appendNumber(number) {
  currentInput += number;
  updateDisplay(currentInput);
}

function updateDisplay(value) {
  document.getElementById('display').value = value;
}

function setOperator(op) { // Perbaikan nama fungsi
  if (currentInput === "") return;
  if (previousInput !== "") calculate();
  operator = op;
  previousInput = currentInput;
  currentInput = "";
}

function calculate() {
  if (previousInput === "" || currentInput === "" || operator === "") return;

  const num1 = parseFloat(previousInput);
  const num2 = parseFloat(currentInput); // Perbaikan nama variabel
  let result;

  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      result = num2 === 0 ? "error" : num1 / num2;
      break;
    default:
      return;
  }

  updateDisplay(result);
  previousInput = result;
  currentInput = result.toString();
  operator = "";
}

function clearDisplay() {
  currentInput = '';
  previousInput = '';
  operator = '';
  updateDisplay('');
}
