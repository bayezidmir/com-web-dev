/* function sum(num) {
  let sum = 0;
  let i = 0;
  while (i <= num) {
    sum = sum + i;
    i++;
  }
  return sum;
}

console.log(sum(5)); */

/* function sum(i) {
  if (i == 1) {
    return 1;
  }

  return i + sum(--i);
}

console.log(sum(5));
 */

function add(i) {
  if (i < 1) {
    return 1;
  }
  return i + add(--i);
}
console.log(add(10));
