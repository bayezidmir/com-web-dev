/* 
truthy: anything that is not falsy is truthy!
falsy:
if the value of a variable is null, NaN, Undefined
 */

const fruits = "";

/* if (fruits) {
  console.log("fruits in stock");
} else {
  console.log("Stock out");
} */

const whatToEat = fruits ? "eat fruits" : "Eat water";
console.log(whatToEat);

const money = 20;
const hasMoney = () => "go to market for grocery";
const noMoney = () => "Work Hard to make money";

const decision = money ? hasMoney() : noMoney();
console.log(decision);

// Toggle boolean
let integrity = true;
integrity = !integrity;
console.log(integrity);

const luckyNumber = 19;
console.log(luckyNumber);

// Number to String conversion
const convertedNumber = luckyNumber + "";
console.log(convertedNumber);
// string to number conversion
const convertingAgain = +convertedNumber;
console.log(convertingAgain);

console.log(money && hasMoney());
console.log(money || noMoney());
