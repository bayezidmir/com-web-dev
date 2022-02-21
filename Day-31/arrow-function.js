function add(num1, num2) {
  return num1 + num2;
}

const sum = (para1, para2) => para1 + para2;
// console.log(sum(10, 15));

const fullName = (firstName, secondName) => `${firstName} ${secondName}`;
// console.log(fullName("bayezid", "mir"));

const multiplication = (num1, num2) => num1 * num2;
// console.log(multiplication(15, 20));

// practice
/* const factorial = (num) => {
  let result = 1;
  for (let i = 1; i <= num; i++) {
    result = result * i;
  }
  return result;
};

const facResult = factorial(10);
console.log(facResult); */

/* function addition3() {
  let sum = 0;
  for (const number of arguments) {
    sum = sum + number;
  }
  return sum;
}

console.log(sum(50, 10)); */

function addition2() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    const number = arguments[i];
    sum = sum + number;
  }
  return sum;
}

console.log(addition2(20, 10));

const bigSum = () => {
  let sum = 0;
  for (const number of arguments) {
    sum = sum + number;
  }
  return sum;
};

const addition = bigSum(120, 135, 140);
console.log(addition);

const bigSum2 = () => {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    const number = arguments[i];
    sum = sum + number;
  }
  return sum;
};
const addition5 = bigSum(120, 135, 140);
console.log(addition5);

const problems = (months = 0) => 35000 * months;
console.log(problems(12));
