//numbers

function handleButtonClick(num) {
  document.getElementById("input-number").value += num;
}

//other
function clearResult() {
  document.getElementById("input-number").value = "";
}

function clearOne() {
  const input = document.getElementById("input-number");
  input.value = input.value.slice(0, -1);
}

function percent() {
  const percBtn = document.getElementById("%-btn");
  const input = document.getElementById("input-number");
  let result = percBtn.innerText;
  input.value += result;
  let expression = input.value;
  const operatorMatch = expression.match(/([+\-*/])\s*([0-9.]+)%$/);

  if (operatorMatch) {
    const operator = operatorMatch[1];
    const percentageValue = parseFloat(operatorMatch[2]);
    const mainValue = parseFloat(expression.split(operator)[0].trim());

    let result;
    switch (operator) {
      case "+":
        result = mainValue + mainValue * (percentageValue / 100);
        break;
      case "-":
        result = mainValue - mainValue * (percentageValue / 100);
        break;
      case "*":
        result = mainValue * (percentageValue / 100);
        break;
      case "/":
        result = mainValue / (percentageValue / 100);
        break;
      default:
        return;
    }
    input.value += result;
  }
}

function equal() {
  const input = document.getElementById("input-number");
  const expression = input.value;
  if (/^[0-9+\-*/.()% ]*$/.test(expression))
    try {
      const result = eval(expression);
      input.value = result;
    } catch (error) {
      input.value = "Error";
    }
  else {
    input.value = "Error";
  }
}

function addOperator(operator) {
  const input = document.getElementById("input-number");
  if (!["+", "-", "*", "/", "%"].includes(input.value.slice(-1))) {
    input.value += operator;
  }
}
