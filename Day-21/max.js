// comparison using if and if else
const bayezid = 8000;
const shohag = 10000;
const sahjalal = 15000;

// let richest = Math.max(bayezid, shohag, sahjalal);
// console.log(richest);

if (bayezid > shohag && bayezid > sahjalal) {
  console.log(`Bayezid is the richest`);
} else if (shohag > bayezid && shohag > sahjalal) {
  console.log(`shohag is the richest of all`);
} else {
  console.log(`Shahjalal is the richest of all`);
}

function richestfunc(bayezid, sahjalal, shohag) {
  if (bayezid > shohag && bayezid > sahjalal) {
    return `bayezid is the richest of all`;
  } else if (shohag > bayezid && shohag > sahjalal) {
    return `shohag is the richest of all`;
  } else {
    return `shahjalal is the richest of all`;
  }
}

var richestfunc = richestfunc(bayezid, sahjalal, shohag);
console.log(richestfunc);

function lowestNumber(num1, num2, num3) {
  let smallest = Math.min(num1, num2, num3);
  return smallest;
}

var num1 = 15615;
var num2 = 121161;
var num3 = 31613;

var smallestNumber = lowestNumber(num1, num2, num3);
console.log(smallestNumber);
