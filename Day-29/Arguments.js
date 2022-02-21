// practice

function summation(num1, num2) {
  let sum = 0;
  for (const number of arguments) {
    sum = sum + number;
  }
  return sum;
}

// console.log(summation(55, 600, 700, 100));

function namesConcate() {
  let fullName = "";

  for (const name of arguments) {
    fullName = fullName + name + " ";
  }
  return fullName;
}

console.log(namesConcate("Bayezid", "mir"));

function summa() {
  let sum = 0;
  for (let number of arguments) {
    sum = sum + number;
  }
  return sum;
}

console.log(summa(35, 45, 65, 75));
