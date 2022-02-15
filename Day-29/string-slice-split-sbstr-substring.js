let favSentence = "I love Allah. Then, I love my parents";
let splitWords = favSentence.split(" "); //will split words when it finds the space " "
console.log(splitWords);
let splittedWords = favSentence.slice(7, 12); // first number is the initial index and second one is the ending index. will take words from itial to before the end index
console.log(splittedWords);
const substrWords = favSentence.substr(0, 6); //more like splice used for array. strating number is the index no and second number is the length of words we need
console.log(substrWords);
const smallString = favSentence.substring(0, 6);
console.log(smallString);