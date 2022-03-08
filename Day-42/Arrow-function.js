// Arrow Function
const quotient = (num) => num / 6;
console.log(quotient(25));
const remainder = (num1, num2) => num1 % num2;
console.log(remainder(25, 2));
const evenNumber = () => {
  let evenNumbers = [];
  for (let i = 0; i <= 20; i++) {
    console.log(i);
    if (i % 2 == 0) {
      evenNumbers.push(i);
    }
  }
  return evenNumbers;
};
console.log(evenNumber());
