// Celsius To Fahrenheit
function celsiusToFahrenheit(celcsius) {
  var temperature = celcsius * 1.8 + 32;
  return temperature;
}

var celsius = 120;
var weather = celsiusToFahrenheit(celsius);
console.log(
  `Today's weather is ${weather} degree fahrenheit. Have a good day :)`
);

// Fahrenheit to Celsius

function fahrenheitToCelsius(fahrenheit) {
  var temp = (fahrenheit - 32) * 0.5556;
  return temp;
}

var fahrenheit = 40;
var weatherInCelsius = fahrenheitToCelsius(fahrenheit);
console.log(
  `Today's weather is ${weatherInCelsius} degree Celsius. Have a good day :)`
);

// GPA calculator using switch

// function GPAcalculator(marks) {
//   switch (true) {
//     case "marks>= 93 && marks<=100":
//       return "Your GPA is A, Congratulation!";
//       break;
//     case "marks>=89 && marks<93":
//       return "Your GPA is A-, Congratulation!";
//       break;
//     case "marks>=80 && marks<89":
//       return "Your GPA is B+, Congratulation!";
//       break;
//     case "marks>=75 && marks<80":
//       return "Your GPA is B, Congratulation!";
//       break;
//     case "marks>=70 && marks<75":
//       return "Your GPA is B-, Congratulation!";
//       break;
//     case "marks>=60 && marks<70":
//       return "Your GPA is C, Congratulation!";
//       break;
//     default:
//       return "You have failed!";
//   }
// }

// var marks = 95;
// var GPA = GPAcalculator(marks);
// console.log(GPA);

// GPA calculator using condition

function GPAcalculator(score) {
  if (score <= 100 && score >= 0) {
    if (score >= 93 && score <= 100) {
      return `Your Grade is "A", Congrats!`;
    } else if (score >= 88 && score < 93) {
      return `Your Grade is "A-", Congrats!`;
    } else if (score >= 83 && score < 88) {
      return `Your Grade is "B+", Congrats!`;
    } else if (score >= 78 && score < 83) {
      return `Your Grade is "B", Congrats!`;
    } else if (score >= 73 && score < 78) {
      return `Your Grade is "B-", Congrats!`;
    } else if (score >= 68 && score < 73) {
      return `Your Grade is "C", Congrats!`;
    } else if (score >= 63 && score < 68) {
      return `Your Grade is "D", Congrats!`;
    } else {
      return `Sorry, You Have Failed!`;
    }
  } else {
    return `Enter a Valid Score :|`;
  }
}

var score = 79;
GPA = GPAcalculator(score);
console.log(GPA);

/*Formula for Simple Interest

Simple Interest (SI) = P × T × R ⁄ 100

S.I.	Simple Interest
P	Principal Amount
A	Total Amount
R	Rate of Interest
T	Time (in Years)

After the calculation for S.I. is done, the principal has to be added to it to get the total amount that the borrower has to give or the lender will collect. This is called total amount and its formula is given as:

A = P + S.I.

*/

function simpleInterestCalculator(principleAmount, time, interestRate) {
  let si = (principleAmount * time * interestRate) / (100 * 12); //in month
  const totalAmount = principleAmount + si;
  return `Your Interest for last ${time} months and ${principleAmount} BDT is ${si}. You have to return ${totalAmount} in total`;
}

var principleAmount = 25000;
var time = 36;
var interestRate = 6.8;

var totalAmount = simpleInterestCalculator(principleAmount, time, interestRate);
console.log(totalAmount);
