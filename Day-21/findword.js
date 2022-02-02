/* function countOccurences(string, word) {
  return string.split(word).length - 1;
}
var text = "We went down to the stall, then down to the river down.";
var count = countOccurences(text, "down");
console.log(count); */

// Second way
var sentence = "I am hardworking. I am determined. I will be a web developer.";
var count = 0;
for (var i = 0; i < sentence.length; i++) {
  var letter = sentence[i];

  if (letter == "a") {
    count++;
  }
}
console.log(count);

console.log(sentence.length);

/* let sentence =
  "The world is really peculiar, it works in way no once can certainly speculate. The best way to stay safe is to rember Allah often and pray 5 times a day";

function wordCount(sentence, word) {
  return sentence.split(word).length - 1;
}

console.log(wordCount(sentence, "is")); */
