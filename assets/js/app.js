/* Elements Reference */

// Input and result elements
let val = document.querySelector("#val");
let result = document.querySelector("#result");

// Numeric buttons
const sevenBtn = document.querySelector("#sevenBtn");
const eightBtn = document.querySelector("#eightBtn");
const nineBtn = document.querySelector("#nineBtn");
const fourBtn = document.querySelector("#fourBtn");
const fiveBtn = document.querySelector("#fiveBtn");
const sixBtn = document.querySelector("#sixBtn");
const oneBtn = document.querySelector("#oneBtn");
const twoBtn = document.querySelector("#twoBtn");
const threeBtn = document.querySelector("#threeBtn");
const zeroBtn = document.querySelector("#zeroBtn");

const substractBtn = document.querySelector("#substractBtn");
const multiplyBtn = document.querySelector("#multiplyBtn");
const divideBtn = document.querySelector("#divideBtn");
const addBtn = document.querySelector("#addBtn");
const equalBtn = document.querySelector("#equalBtn");
const modulusBtn = document.querySelector("#modulusBtn");

const acBtn = document.querySelector("#acBtn");
const cBtn = document.querySelector("#cBtn");

/* Handlers */

// Clear Values - Clear all the values from result element

function clearValues() {
  val.value = "";
  result.value = "";
}

// Clear Integer - Clear the last value from result element

function clearInteger() {
  // Get the current value from the display
  const currentValue = result.value;

  // Remove the last character (digit)
  const newValue = currentValue.slice(0, -1);

  // Update the display with the new value
  result.value = newValue;
}

// Set Value - Set value in input field

function setValue(btn) {
  result.value += btn.value;
}

// Calculate - Calculate all the basic operations based on operator and operands

function calculate(operation, num1, num2) {
  let result;

  switch (operation) {
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
      result = num1 / num2;
      break;
    case "%":
      result = num1 % num2;
      break;
    default:
      console.log("Invalid operation");
  }

  return result;
}

let btn = null;

function upadteValue(button) {
  val.value = result.value;
  result.value = "";

  btn = button.value;
}

function output() {
  // Call the calculate function with the operation and operands
  const calculation = calculate(btn, Number(val.value), Number(result.value));

  // Remove the hold value
  val.value = "";

  // Update the result value
  result.value = calculation;
}

// Add event listeners to each button

acBtn.addEventListener("click", clearValues);
cBtn.addEventListener("click", clearInteger);

sevenBtn.addEventListener("click", () => setValue(sevenBtn));
eightBtn.addEventListener("click", () => setValue(eightBtn));
nineBtn.addEventListener("click", () => setValue(nineBtn));
fourBtn.addEventListener("click", () => setValue(fourBtn));
fiveBtn.addEventListener("click", () => setValue(fiveBtn));
sixBtn.addEventListener("click", () => setValue(sixBtn));
oneBtn.addEventListener("click", () => setValue(oneBtn));
twoBtn.addEventListener("click", () => setValue(twoBtn));
threeBtn.addEventListener("click", () => setValue(threeBtn));
zeroBtn.addEventListener("click", () => setValue(zeroBtn));

addBtn.addEventListener("click", () => upadteValue(addBtn));
substractBtn.addEventListener("click", () => upadteValue(substractBtn));
multiplyBtn.addEventListener("click", () => upadteValue(multiplyBtn));
divideBtn.addEventListener("click", () => upadteValue(divideBtn));
modulusBtn.addEventListener("click", () => upadteValue(modulusBtn));

equalBtn.addEventListener("click", output);
