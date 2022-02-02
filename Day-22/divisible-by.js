/* divisible by 3 - foo 
divisible by 5 - Bar
divisible by 3 and 5 - foo Bar
 */

/* function divisibleBy(number, firstDivideBy, secondDividedBy) {
  switch (true) {
    case number % firstDivideBy == 0 && number % secondDividedBy == 0:
      return "foo-bar";
      break;
    case number % firstDivideBy == 0:
      return "foo";
      break;
    case number % secondDividedBy == 0:
      return "bar";
      break;
  }
}

console.log(divisibleBy(30, 6, 5)); */

function divisibleBy() {
  for (let i = 1; i <= 50; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      console.log("foo-bar");
    } else if (i % 3 == 0) {
      console.log("foo");
    } else if (i % 5 == 0) {
      console.log("bar");
    } else {
      console.log(i);
    }
  }
}

console.log(divisibleBy());
