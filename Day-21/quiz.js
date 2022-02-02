/* var randomNumber = Math.round(Math.random() * 10);
console.log(randomNumber); */

const numbers = [25, 35, 12, 9, 29, 43];

function sum(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i];
  }
  return sum;
}
console.log(sum(numbers));

var sum = 25 + 35 + 12 + 9 + 29 + 43;
console.log(sum);

var firstName = "Bayezid";
var surName = "Mir";

function fullName(firstName, surName) {
  return firstName + surName;
}

console.log(fullName(firstName, surName));
