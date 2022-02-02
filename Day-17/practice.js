// number
var applePrice = 230;
var appleQuantity = 19;
var people = 10;

// mathematical operation
var totalApplePrice = applePrice * appleQuantity;
console.log(totalApplePrice);

// string
var firstName = "bayezid";
var secondName = "mir";
var fullName = firstName.concat(" ", secondName);
console.log(fullName);

// boolean
var honesty = true;
var courage = false;

// typeof
console.log(typeof honesty);

// conversion
var num1 = "99.5";
num1 = parseFloat(num1);
var num2 = 15;
console.log(typeof num2);

var dollarExchangeRate = 84.662325;
var dollarRate = parseFloat(dollarExchangeRate.toFixed(2));
console.log(dollarRate);

// remainder
console.log(appleQuantity % people);

// date

var tamarindPrice = -235.326155489;
tamarindPrice = Math.abs(tamarindPrice);

// to round
console.log(Math.round(tamarindPrice));

// random number
var randomNumber = Math.random() * 100;
randomNumber = Math.random(randomNumber) * 100;
console.log(randomNumber);
console.log(Math.round(randomNumber));
console.log(Math.floor(randomNumber));
console.log(Math.ceil(randomNumber));
