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

// Operation buttons
const addBtn = document.querySelector("#addBtn");
const subtractBtn = document.querySelector("#subtractBtn");
const multiplyBtn = document.querySelector("#multiplyBtn");
const divideBtn = document.querySelector("#divideBtn");
const modulusBtn = document.querySelector("#modulusBtn");

// Other buttons
const acBtn = document.querySelector("#acBtn");
const cBtn = document.querySelector("#cBtn");
const equalBtn = document.querySelector("#equalBtn");

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

// Update Value - Set the value in 'val' and clear 'result'
function updateValue(button) {
  val.value = result.value;
  result.value = "";

  // Store the selected operation for calculation
  btn = button.value;
}

// Output - Perform the calculation and update the result value
function output() {
  // Call the calculate function with the selected operation and operands
  const calculation = calculate(btn, Number(val.value), Number(result.value));

  // Remove the hold value
  val.value = "";

  // Update the result value
  result.value = calculation;
}

/* Event Listeners */

// Add event listeners to each button

// Clear buttons
acBtn.addEventListener("click", clearValues);
cBtn.addEventListener("click", clearInteger);

// Numeric buttons
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

// Operation buttons
addBtn.addEventListener("click", () => updateValue(addBtn));
subtractBtn.addEventListener("click", () => updateValue(subtractBtn));
multiplyBtn.addEventListener("click", () => updateValue(multiplyBtn));
divideBtn.addEventListener("click", () => updateValue(divideBtn));
modulusBtn.addEventListener("click", () => updateValue(modulusBtn));

// Equal button
equalBtn.addEventListener("click", output);
