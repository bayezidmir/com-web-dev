/* function number(i) {
  console.log(i);
  number(i);
}

console.log(number(1));


 */
/* 
function number2(num) {
  console.log(num);
  number2(num + 1);
}
console.log(number2(1)); */

/* function oddnumber(num) {
  //when the value of num is higher than 25 the if condition will try to return and function will stop
  if (num > 25) {
    return;
  }
  console.log(num);
  oddnumber(num + 2);
}

console.log(oddnumber(1)); */

function evenNumber(num) {
  if (num > 100) {
    return;
  }

  console.log(num);
  evenNumber(num + 2);
}

console.log(evenNumber(2));
