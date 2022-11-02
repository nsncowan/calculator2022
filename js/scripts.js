// business logic
function add(num1, num2) {
  return num1 + num2
}

function subtract(num1, num2) {
  return num1 - num2
}

function multiply(num1, num2) {
  return num1 * num2
}

function divide(num1, num2) {
  return num1 / num2
}

function doCalculation(num1, num2, op) {
  if (op === "add") {
    return add(num1, num2);
  }
  else if (op === "subtract") {
    return subtract(num1, num2);
  }

  else if (op === "multiply") {
    return multiply(num1, num2);
  }

  else if (op === "divide") {
    return divide(num1, num2);
  }

}

// user interface logic
function handleEvent(event) {
  event.preventDefault(event);
  const number1 = parseInt(document.querySelector("input#input1").value);
  const number2 = parseInt(document.querySelector("input#input2").value);
  const operator = document.querySelector("input[name='operator']:checked").value;
  let result = doCalculation(number1, number2, operator);
  document.getElementById("output").innerText = result;
}

window.addEventListener("load", function(){
  let form = document.getElementById("calculator");
  form.addEventListener("submit", handleEvent);

});