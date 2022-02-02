// Function to Find Leap Year

/*function leapYear(year) {
  if ((year % 4 == 0 && year % 400 !== 0) || year % 400 == 0) {
    return year + " is a Leap Year";
  } else {
    return year + " is not a leap year";
  }
}

var year = 2022;
var isLeapYear = leapYear(year);
console.log(isLeapYear);*/

// Factorial using for loop

function number(num) {
  let factorial = 1;
  for (let i = 1; i <= num; i++) {
    factorial = factorial * i;
  }
  return factorial;
}

let num = 20;
let factorial = number(num);
console.log(factorial);

// factorial using while loop

function numberTwo(numTwo) {
  let sum = 1;
  let i = 1;
  while (i <= numTwo) {
    sum = sum * i;
    i++;
  }
  return sum;
}
let numTwo = 12;
let factorialTwo = numberTwo(numTwo);
console.log(factorialTwo);

// Printing one to Hundred
// for (let i = 1; i <= 100; i++) {
//   console.log(i);
// }

for (let i = 51; i <= 80; i += 2) {
  console.log(i);
}
