/* let number = -65;
number = Math.abs(number);
console.log(number); */

/* let floatingNumber = 25.31356;
let floatingNumber2 = 21.32564;
let floatingNumber3 = 45.232446;

const highestNumber = Math.max(
  floatingNumber,
  floatingNumber2,
  floatingNumber3
);

console.log(highestNumber);

const lowestNumber = Math.min(floatingNumber, floatingNumber2, floatingNumber3);
console.log(lowestNumber); */
/* floatingNumber = Math.round(floatingNumber);
console.log(floatingNumber); */
/* floatingNumber = Math.floor(floatingNumber);
console.log(floatingNumber); */
/* floatingNumber = Math.ceil(floatingNumber);
console.log(floatingNumber); */
/* let randomNumber = Math.random();
console.log(randomNumber); */
/* let randomNumber = Math.ceil(Math.random() * 10);
console.log(randomNumber); */

/* let noOfPeople = [345, 460, 760, 320, 860, 3500, 790];

let mostPopulated = 0;

for (let i = 0; i <= noOfPeople.length; i++) {
  let citizenInACountry = noOfPeople[i];
  if (mostPopulated < citizenInACountry) {
    mostPopulated = citizenInACountry;
  }
}

console.log(mostPopulated);

let leastPopulated = 345;
for (let i = 0; i <= noOfPeople.length; i++) {
  let people = noOfPeople[i];
  if (people < leastPopulated) {
    leastPopulated = people;
  }
}
console.log(leastPopulated);
 */

/* var a = 25;
var b = "yellow";
console.log(a, b);
/* let temp = a;
a = b;
b = temp;
console.log(a, b); */

// destructuring
/* [a, b] = [b, a];
console.log(a, b);  */
/* 
function fiboFor(count) {
  let fibo = [0, 1];
  for (i = 2; i <= count; i++) {
    fibo[i] = fibo[i - 1] + fibo[i - 2];
  }
  return fibo;
}
let count = 13;
console.log(fiboFor(count)); */
/* 
function fiboSeries(number) {
  let fiboSeries = [0, 1];
  let i = 2;
  while (i <= number) {
    fiboSeries[i] = fiboSeries[i - 1] + fiboSeries[i - 2];
    i++;
  }
  return fiboSeries;
}

let number = 9;
console.log(fiboSeries(number)); */

//certain Word Count

/* let sentence =
  "The world is really peculiar, it works in way no one can certainly speculate, is not it? The best way to stay safe is to rember Allah often and pray 5 times a day";

function certainWordCount(sentence, word) {
  return sentence.split(word).length - 1;
}

console.log(certainWordCount(sentence, "is")); */

/* let sentence =
  "The world is really peculiar, it works in way no one can certainly speculate, is not it? The best way to stay safe is to rember Allah often and pray 5 times a day";

function lettercount(letter) {
  let count = 0;
  for (let i = 0; i <= sentence.length; i++) {
    if (sentence[i] == letter) {
      count++;
    }
  }
  return count;
}

console.log(lettercount("works")); */

function countWords(str) {
  return str.trim().split(/\s+/).length;
}

var sen =
  "The world is really peculiar, it works in way no one can certainly speculate, is not it? The best way to stay safe is to rember Allah often and pray 5 times a day";
console.log(countWords(sen));
