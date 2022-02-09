function numbers(num1, num2, num3) {
  if (num1 && num2 && num3 <= 0) {
    return "Neg Num";
  }
  var test = num1 * num2 * num3;
  return test;
}
var res = numbers(3, -2, 2);
console.log(res);
