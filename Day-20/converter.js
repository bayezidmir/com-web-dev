// function inchToFeet(inch) {
//   var feet = inch / 12;
//   return feet;
// }

// var feet = inchToFeet(180);
// console.log(feet + " Feet");

// // Kilometer to mile
// function kmToMiles(KM) {
//   var miles = KM / 1.6;
//   return miles;
// }

// var miles = kmToMiles(180);
// console.log(miles + " miles");

// // hout to minutes
// function hourToMinutes(hour) {
//   var minutes = hour * 60;
//   return minutes;
// }

// var minnutes = hourToMinutes(24);
// console.log(minnutes + " minutes");

// // odd or even

// function noType(number) {
//   if (number % 2 == 0) {
//     console.log("Even number");
//   } else if (number % 2 !== 0) {
//     console.log("Odd number");
//   } else {
//     console.log("Please Type a Number");
//   }
// }

// noType(28);

// var factorial = 1;
// for (let i = 1; i <= 7; i++) {
//   factorial = factorial * i;
// }
// console.log(factorial);

// Factorial of 11 using for loop

/*function factorialOf(number) {
  let sum = 1;

  for (let i = 1; i <= number; i++) {
    sum = sum * i;
  }
  return sum;
}
var num = 13;
let factorial = factorialOf(num);
console.log(factorial);*/

// Factorial of 11 using While loop

function facto(number) {
  let sum = 1;
  let i = 1;
  while (i <= number) {
    sum = sum * i;
    i++;
  }
  return sum;
}
// let num2 = 15;
// let factorial2 = facto(num2);
// console.log(factorial2);

// reverse factorial using for loop

function factorialReverse(number) {
  let sum = 1;
  for (let i = number; i >= 1; i--) {
    sum = sum * i;
  }
  return sum;
}

let num2 = 15;
let factorial2 = factorialReverse(num2);
console.log(factorial2);
