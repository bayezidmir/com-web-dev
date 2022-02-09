/* let factorial = 1;
for (i = 5; i >= 1; i--) {
  factorial = factorial * i;
}

console.log(factorial);
 */

function factorial(m) {
  if (m == 1) {
    return 1;
  }
  return m * factorial(--m);
}

console.log(factorial(10));
