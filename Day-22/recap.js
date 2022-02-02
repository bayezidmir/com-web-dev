let numbers = [25, 35, 12, 89, 77, 65, 48];

function largest() {
  largestNumber = numbers[0];
  for (let i = 0; i <= numbers.length; i++) {
    if (largestNumber < numbers[i]) {
      largestNumber = numbers[i];
    }
  }
  return largestNumber;
}

console.log(largest(numbers));

function smallestNumber(numbers) {
  let smallestNumber = numbers[0];
  for (let i = 0; i <= numbers.length; i++) {
    if (smallestNumber > numbers[i]) {
      smallestNumber = numbers[i];
    }
  }
  return smallestNumber;
}

console.log(smallestNumber(numbers));
