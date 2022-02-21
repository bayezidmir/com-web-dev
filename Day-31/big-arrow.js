const add = (num1, num2) => num1 + num2; //implicit return
const sum = add(105, 110);
console.log(sum);

const multiplication = (num) => num * 5; //implicit return
const result = multiplication(5);
console.log(result);

const division = (num) => num / 10; //implicit return
const output = division(100);
console.log(output);

const getNames = () => "Bayezid mir"; //implicit return
const name = getNames();

console.log(name);

const doMath = (x, y) => {
  const sum = x + y;
  const diff = x - y;
  const result = sum * diff;
  const output = result * 5;
  return output; //explicit return
};

document.getElementById("name").addEventListener("click", (param) => param * 5);
