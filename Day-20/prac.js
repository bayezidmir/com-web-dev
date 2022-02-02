// Factorial Using For Loop

function factorial(num) {
  let storage = 1;
  for (i = 1; i <= num; i++) {
    storage = storage * i;
  }
  return storage;
}

let number = 8;
let result = factorial(number);
console.log(`Factorial of ${number} is ${result}`);

// Factorial Using While Loop
function facto(num1) {
  let sumof = 1;
  let i = 1;
  while (i < num1) {
    sumof = i * sumof;
    i++;
  }
  return sumof;
}

let factorialNumber = 10;
let FactorialResult = facto(factorialNumber);
console.log(`Factorial of ${factorialNumber} is ${FactorialResult}`);

// Reverse Factorial


function reverseFactorial(numberOne){
  for(let i=numberOne; i<)
}
