const gretting = "hello, how are you?";
function reverseString(text) {
  reverse = "";
  for (const letter of gretting) {
    reverse = letter + reverse;
  }
  return reverse;
}

console.log(reverseString(gretting));
