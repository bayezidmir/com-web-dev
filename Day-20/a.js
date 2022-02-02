function factorial(number) {
  var sum = 1;
  var i = number;
  while (i >= 1) {
    sum = sum * i;
    i--;
  }
  return sum;
}

var numberTwo = 10;
var result = factorial(numberTwo);
console.log(result);
