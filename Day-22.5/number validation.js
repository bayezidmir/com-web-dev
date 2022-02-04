/* var num1 = 100;
if (isNaN(num1)) {
  console.log(num1 + " is not a number <br/>");
} else {
  console.log(num1 + " is a number <br/>");
} */

/* var num1 = 100;

 if(typeof num1 == 'number'){
	document.write(num1 + " is a number <br/>");
 }else{
	document.write(num1 + " is not a number <br/>");
 } */

/* function electricityBill(unit) {
  if (isNaN(unit)) {
    return `Enter a Numeric value`;
  } else {
    return "hello";
  }
}

let unit = 120;
console.log(electricityBill(unit)); */

/* function electricityBill(unit) {
  if (typeof unit == "number") {
    return `this is a number`;
  } else {
    return "not a number";
  }
}

let unit = 12;
console.log(electricityBill(unit));
 */

let time = [12, 13, 14, 56, 45, 18];

var isArray = Array.isArray(time);
console.log(isArray);
