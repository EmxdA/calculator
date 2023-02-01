let addition = (num1, num2) => {
  return num1 + num2;
};

let subtraction = (num1, num2) => {
  return num1 - num2;
};

let multiplication = (num1, num2) => {
  return num1 * num2;
};

let division = (num1, num2) => {
    return num1/num2;
};

let operate = () => {
    let operator = prompt("Enter operator to work with");
    let num1 = parseInt(prompt("Enter number 1"));
    let num2 = parseInt(prompt("Enter number 2"));

    if (operator === "addition"){
        console.log(addition(num1, num2));
    } else if (operator === "subtraction"){
        console.log(subtraction(num1, num2));
    } else if (operator === "multiplication") {
        console.log(multiplication(num1, num2));
    } else if (operator === "division") {
        console.log(division(num1,num2));
    }
}
