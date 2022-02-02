// Reverse Factorial Using For Loop

function factorial(number2) {
  let sum = 1;
  for (let i = number2; i >= 1; i--) {
    sum = sum * i;
  }
  return sum;
}

let number = 20;
let result = factorial(number);
console.log(result);

// Reverse Factorial Using While Loop

function getFactorial(number) {
  let factorial = 1;
  let i = number;
  while (i >= 1) {
    factorial = factorial * i;
    i--;
  }
  return `The factorial of ${number} is ${factorial}.`;
}

var numberToBeFactored = 9;
var factored = getFactorial(numberToBeFactored);
console.log(factored);
