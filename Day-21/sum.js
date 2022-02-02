const number = [25, 35, 25, 85, 45, 12, 95, 65, 145, 25];
let sum = 0;
for (let i = 0; i < number.length; i++) {
  // let element = number[i];
  sum = number[i] + sum;
}
console.log(sum);

function sumOfNumbers(number) {
  let i = 0;
  let sum = 0;
  while (i < number.length) {
    sum = number[i] + sum;
    i++;
  }
  return `using while loop the sum of array's element is ${sum}`;
}

console.log(sumOfNumbers(number));

const money = [20000, 17950, 33500, 12000, 65000, 19000];

function totalMoney(money) {
  sum = 1;
  for (let i = 1; i < money.length; i += 1) {
    sum = sum + money[i];
  }
  return `The amount of money we have in total is ${sum}. This I have figured using for loop`;
}

let totalmoney = totalMoney(money);
console.log(totalmoney);
