//numbers
function zero(num) {
  const zeroBtn = document.getElementById("0-btn")
  const input = document.getElementById("input-number")
  let result = zeroBtn.innerText
  input.value += result
}

function one(num) {
  const oneBtn = document.getElementById("1-btn")
  const input = document.getElementById("input-number")
  let result = oneBtn.innerText
  input.value += result
}

function two(num) {
  const twoBtn = document.getElementById("2-btn")
  const input = document.getElementById("input-number")
  let result = twoBtn.innerText
  input.value += result
}

function three(num) {
  const threeBtn = document.getElementById("3-btn")
  const input = document.getElementById("input-number")
  let result = threeBtn.innerText
  input.value += result
}

function four(num) {
  const fourBtn = document.getElementById("4-btn")
  const input = document.getElementById("input-number")
  let result = fourBtn.innerText
  input.value += result
}

function five(num) {
  const fiveBtn = document.getElementById("5-btn")
  const input = document.getElementById("input-number")
  let result = fiveBtn.innerText
  input.value += result
}

function six(num) {
  const sixBtn = document.getElementById("6-btn")
  const input = document.getElementById("input-number")
  let result = sixBtn.innerText
  input.value += result
}

function seven(num) {
  const sevenBtn = document.getElementById("7-btn")
  const input = document.getElementById("input-number")
  let result = sevenBtn.innerText
  input.value += result
}

function eight(num) {
  const eightBtn = document.getElementById("8-btn")
  const input = document.getElementById("input-number")
  let result = eightBtn.innerText
  input.value += result
}

function nine(num) {
  const nineBtn = document.getElementById("9-btn")
  const input = document.getElementById("input-number")
  let result = nineBtn.innerText
  input.value += result
}

//other
function clearResult() {
document.getElementById("input-number").value = "";
}

function clearOne() {
  const input = document.getElementById("input-number")
  input.value = input.value.slice(0, -1)
}

function percent() {
  const percBtn = document.getElementById("%-btn")
  const input = document.getElementById("input-number")
  let result = percBtn.innerText
  input.value += result
  let expression = input.value
  const operatorMatch = expression.match(/([+\-*/])\s*([0-9.]+)%$/)
    
    if (operatorMatch) {
      const operator = operatorMatch[1]
      const percentageValue = parseFloat(operatorMatch[2])
      const mainValue = parseFloat(expression.split(operator)[0].trim())
      
        let result
    switch (operator) {
      case "+":
        result = mainValue + (mainValue * (percentageValue / 100))
        break
      case "-":
        result = mainValue - (mainValue * (percentageValue / 100))
        break
      case "*":
        result = mainValue * (percentageValue / 100)
        break
      case "/":
        result = mainValue / (percentageValue / 100) 
        break
      default:
        return
    }
    input.value += result
    }
}

function dot() {
  const dotBtn = document.getElementById("dot-btn")
  const input = document.getElementById("input-number")
  let result = dotBtn.innerText
  input.value += result
}

function comma() {
  const commaBtn = document.getElementById("comma-btn")
  const input = document.getElementById("input-number")
  let result = commaBtn.innerText
  input.value += result
}

function equal() {
  const input = document.getElementById("input-number")
  const expression = input.value
    if (/^[0-9+\-*/.()% ]*$/.test(expression))
    try {
     const result = eval(expression)
     input.value = result
    }
    catch (error) {
      input.value = "Error"
    }
    else {
      input.value = "Error"
    }
}

function addOperator(operator) {
  const input = document.getElementById("input-number");
  if (!["+", "-", "*", "/", "%"].includes(input.value.slice(-1))) {
  input.value += operator;
  }
}
