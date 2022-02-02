let fibSeries = [0, 1];

for (let i = 2; i <= 11; i++) {
  fibSeries[i] = fibSeries[i - 1] + fibSeries[i - 2];
}

console.log(fibSeries);

// fibo function

function fibonacci(number) {
  const fibonacciSeries = [0, 1];
  for (let i = 2; i <= number; i++) {
    fibonacciSeries[i] = fibonacciSeries[i - 1] + fibonacciSeries[i - 2];
  }
  return fibonacciSeries;
}

console.log(fibonacci(-15));
