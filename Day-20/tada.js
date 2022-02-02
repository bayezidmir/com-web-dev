function multiplicationTable(number) {
  var table = [];
  for (let i = 1; i <= 10; i++) {
    multiplications = i * number;
    table.push(multiplications);
  }
  return table;
}

var numberforMul = 19;
let result = multiplicationTable(numberforMul);
console.log(result);
