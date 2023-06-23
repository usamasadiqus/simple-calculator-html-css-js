let result = document.querySelector("#result");

function getValue(num) {
  result.value += num;
}

function removeEl() {
  result.value = result.value.toString().slice(0, -1);
}

function clearValues() {
  result.value = "";
}

function answer() {
  result.value = eval(result.value);
}
