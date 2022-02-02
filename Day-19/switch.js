// var day = "wednesday";

// switch (day) {
//   case "saturday":
//     console.log("Working Day");
//     break;
//   case "sunday":
//     console.log("Working Day");
//     break;
//   case "monday":
//     console.log("Working Day");
//     break;
//   case "tuesday":
//     console.log("Weekend");
//     break;
//   case "wednesday":
//     console.log("Weekend");
//     break;
//   case "thursday":
//     console.log("Working Day");
//     break;
//   case "friday":
//     console.log("Working Day");
//     break;
// }

var letter = "U";

switch (letter) {
  case "A":
    console.log("A is a Vowel");
    break;
  case "E":
    console.log("E is a Vowel");
    break;
  case "I":
    console.log("I is a Vowel");
    break;
  case "O":
    console.log("O is a Vowel");
    break;
  case "U":
    console.log("U is a Vowel");
    break;
  default:
    console.log("This is a consonent");
}

// from quiz
function getReminder(number1, number2) {
  number1 % number2;
}

const reminder = getReminder(12, 2);

console.log(reminder);

// from quiz
function addNumber(number1, number2) {
  return "Result is " + number1 + number2;
}

var result = addNumber(5, 4);
console.log(typeof result);
