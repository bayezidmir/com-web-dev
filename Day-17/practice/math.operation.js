var savedInJanuary = 200;
var savedInFebruary = 2500;
var string = "amount of money saved in january";
var comeplete = string + " " + savedInJanuary;

// Addition
var totalSaved = savedInJanuary + savedInFebruary;
console.log(totalSaved);

// divisiin
var dailySavedInFeb = 2500 / 30;
console.log(dailySavedInFeb);

// multiplication

var approxSavingsInYear = dailySavedInFeb * 365;
console.log(approxSavingsInYear);

// substructionK

var janvsfev = savedInJanuary - savedInFebruary;
console.log(janvsfev);

// Different way of increment using shorthand
savedInJanuary = savedInJanuary + 500;
console.log(savedInJanuary);
savedInJanuary += 600;
console.log(savedInJanuary);

// increase by 1
savedInJanuary++;
console.log(savedInJanuary);

// decrement by 1
savedInJanuary--;
console.log(savedInJanuary);
console.log(comeplete);

let applePrice = 220.25699;

// use of toFixed
applePrice = applePrice.toFixed(2);
console.log(applePrice);

// rounding
/* applePrice = Math.round(applePrice);
console.log(applePrice);
applePrice = Math.ceil(applePrice);
console.log(applePrice);
applePrice = Math.floor(applePrice);
console.log(applePrice); */

var randomNumber = Math.random();
console.log(randomNumber);
randomNumber = Math.ceil(Math.random() * 10);
console.log(randomNumber);

applePrice += 15;
console.log(applePrice);

// To find the type of variable
let grapePrice = "25";
console.log(typeof grapePrice);
grapePrice = parseInt(grapePrice);
console.log(typeof grapePrice);

// to Lower Case
let fullName = "Bayezid mir";
fullName = fullName.toLowerCase();
console.log(fullName);

// Modulus
var remainder = savedInFebruary % 30;
console.log(remainder);
