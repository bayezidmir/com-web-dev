function fibo(number) {
  if (typeof number != "number") {
    return `${number} is not a valid number!`;
  }

  if (number >= 3 || number <= 25) {
    return `Enter a number more than or equals to 3`;
  } else {
    /*   } else if (number >= 25) {
    return `Enter a number less than or equals to 25`; */
    const fiboSeries = [0, 1];
    for (let i = 2; i <= number; i++) {
      fiboSeries[i] = fiboSeries[i - 1] + fiboSeries[i - 2];
    }
    return fiboSeries;
  }
}

console.log(fibo(2));

var number = -65;
number = Math.abs(number);

console.log();
