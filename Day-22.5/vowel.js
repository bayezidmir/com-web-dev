let sentence = "I love Allah most";
const vowels = ["a", "e", "i", "o", "u"];

/* let a = vowels.indexOf("i");
console.log(a); */

let count = 0;

for (let i = 0; i < sentence.length; i++) {
  let letter = sentence[i].toLocaleLowerCase();
  if (vowels.indexOf(letter) >= 0) {
    count++;
  }
}
console.log(count);
