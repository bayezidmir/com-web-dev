// negative to postive number
// let lovelyNumber = -19;
// lovelyNumber = Math.abs(lovelyNumber);
// console.log(lovelyNumber);

// let numberTwo = 2.46;
// numberTwo = Math.round(numberTwo);
// console.log(numberTwo);

// let numberThree = 2.4;
// numberThree = Math.ceil(numberThree);
// console.log(numberThree);

// let numberFour = 2.9;
// numberFour = Math.floor(numberFour);
// console.log(numberFour);

// let randomNumber = Math.random();
// console.log(randomNumber);

function randomNumbers(num) {
  var intNumber = [];
  for (var i = 1; i <= 20; i++) {
    let rand = Math.random() * num;
    let numbers = Math.ceil(rand);
    intNumber.push(numbers);
  }
  return intNumber;
}

var number = 6;
var randomNumbers = randomNumbers(number);
console.log(randomNumbers);
