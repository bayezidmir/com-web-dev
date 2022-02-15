// practice

const numbers = [3, 6, 4, 8, 9, 19, 15, 21, 45, 87];
let newNumbers = numbers.slice(3, 6);
let newNumber = numbers.slice(3); //takes rest of the numbers if end index is not provided
console.log(newNumbers);
console.log(newNumber);

const neoNumber = numbers.splice(2, 3, 25, 35, 40); //2 is the index no, 3 is the no of words of numbers that will be deleted, and rest numbers are to be added to the array
console.log(neoNumber);
console.log(numbers);
