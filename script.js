const oneBtn = document.querySelector("#one-btn");
const twoBtn = document.querySelector("#two-btn");
const threeBtn = document.querySelector("#three-btn");
const fourBtn = document.querySelector("#four-btn");
const fiveBtn = document.querySelector("#five-btn");
const sixBtn = document.querySelector("#six-btn");
const sevenBtn = document.querySelector("#seven-btn");
const eightBtn = document.querySelector("#eight-btn");
const nineBtn = document.querySelector("#nine-btn");
const zeroBtn = document.querySelector("#zero-btn");
const addBtn = document.querySelector("#addition-btn");
const subtractBtn = document.querySelector("#subtract-btn");
const multiplyBtn = document.querySelector("#multiply-btn");
const divideBtn = document.querySelector("#division-btn");
const clearAllBtn = document.querySelector("#ac");
const clearEntryBtn = document.querySelector("#ce");
const decimalBtn = document.querySelector("#decimal-btn");
const equalBtn = document.querySelector("#equal-btn");
const calculatorScreen = document.querySelector("#calculator-screen");

let showOutput = false;
let displayVal = null;
let value = null;
let storedVal = [];
let operateVal = [];
let numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
let operators = ["+", "/", "-", "x"];

oneBtn.addEventListener("click", () => display(false, "1"));
twoBtn.addEventListener("click", () => display(false, "2"));
threeBtn.addEventListener("click", () => display(false, "3"));
fourBtn.addEventListener("click", () => display(false, "4"));
fiveBtn.addEventListener("click", () => display(false, "5"));
sixBtn.addEventListener("click", () => display(false, "6"));
sevenBtn.addEventListener("click", () => display(false, "7"));
eightBtn.addEventListener("click", () => display(false, "8"));
nineBtn.addEventListener("click", () => display(false, "9"));
zeroBtn.addEventListener("click", () => display(false, "0"));
decimalBtn.addEventListener("click", () => display(false, "."));

clearAllBtn.addEventListener("click", () => {
    showOutput = false;
    displayVal = null;
    value = null;
    storedVal = [];
    operateVal = [];
    calculatorScreen.textContent = "";
});

clearEntryBtn.addEventListener("click", () =>
{

    if (numbers.includes(calculatorScreen.textContent.charAt(calculatorScreen.textContent.length - 1))){
        value = value.slice(0,-1);
    } else if (operators.includes(calculatorScreen.textContent.charAt(calculatorScreen.textContent.length - 1))) {
        value = storedVal[storedVal.length - 1];
        operateVal.pop();
        storedVal.pop();
    } else {
        return 0;
    }

    displayVal = displayVal.slice(0, -1);
    calculatorScreen.textContent = displayVal;
});

addBtn.addEventListener("click", () => {
  storedVal.push(value);
  console.log(value);
  operateVal.push("+");
  display(true, "+");
});

subtractBtn.addEventListener("click", () => {
  storedVal.push(value);
  operateVal.push("-");
  display(true, "-");
});

divideBtn.addEventListener("click", () => {
  storedVal.push(value);
  operateVal.push("/");
  display(true, "÷");
});

multiplyBtn.addEventListener("click", () => {
  storedVal.push(value);
  operateVal.push("x");
  display(true, "x");
});

equalBtn.addEventListener("click", () => {
  storedVal.push(value);
  let final = 0;

  let intArr = storedVal.map((x) => {
    return parseFloat(x, 10);
  });

  console.log(intArr[0]);

  for (let i = 0; i < operateVal.length; i++) {
    if (i === 0) {
      switch (operateVal[i]) {
        case "+":
          final = intArr[i] + intArr[i + 1];
          break;
        case "-":
          final = intArr[i] - intArr[i + 1];
          break;
        case "/":
          final = intArr[i] / intArr[i + 1];
          break;
        case "x":
          final = intArr[i] * intArr[i + 1];
          break;
      }
    } else {
      switch (operateVal[i]) {
        case "+":
          final += intArr[i + 1];
          break;
        case "-":
          final -= intArr[i + 1];
          break;
        case "/":
          final /= intArr[i + 1];
          break;
        case "x":
          final *= intArr[i + 1];
          break;
      }
    }
  }

  showOutput = true;
  display(false, "= " + final);
});

let display = (operator, nextInput) => {
  if (displayVal === null) {
    displayVal = nextInput;
    value = nextInput;
  } else {
    if (value === null) {
      value = nextInput;
    } else {
      value += nextInput;
    }
    displayVal += nextInput;
  }

  if (operator) {
    value = null;
  }

  if (showOutput) {
    showOutput = false;
    value = nextInput.replace("=", "");
    storedVal = [];
    operateVal = [];
  }
  calculatorScreen.textContent = displayVal;
};