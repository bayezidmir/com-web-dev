/*var onTheRoad = [
  "Bus",
  "Private Car",
  "Rickshaw",
  "Motorcycle",
  "People",
  "CNG",
];

// Add and Remove coponent inside the array
onTheRoad.push("Truck");
console.log(onTheRoad);
onTheRoad.pop();
console.log(onTheRoad);
onTheRoad.unshift("Truck");
console.log(onTheRoad);
onTheRoad.shift();
console.log(onTheRoad);

// Find index number of an item
var indexOfPeople = onTheRoad.indexOf("People");
var indexOfMotorCycle = onTheRoad.indexOf("Motorcycle");
console.log(indexOfMotorCycle);

// Find an item using index number
console.log(onTheRoad[4]);

// Replace an item using index number
onTheRoad[3] = "Truck";
console.log(onTheRoad);*/

// var onTheRoad = ["Bus", "Private Car", "Uber", "Motorcycle", "People", "CNG"];

// if (onTheRoad[2] == "Rickshaw") {
//   console.log("You Need a lot of money as transportation cost");
// } else {
//   console.log("100 BDT would be enough for transportation cost");
// }

// Check if an item is in the list using condition

// if (onTheRoad.indexOf("Van") !== -1) {
//   console.log("Van is on the Road, So Use it");
// } else if (onTheRoad.indexOf("Pathao") !== -1) {
//   console.log("Private Car is On the Road, So Use it");
// } else if (onTheRoad.indexOf("Motorcycle") !== -1) {
//   console.log("Motorcycle is On the Road, So Use it");
// } else {
//   console.log("you better walk");
// }

// While loop through an array
/*var i = 0;
while (i <= 5) {
  console.log(onTheRoad);
  i++;
}*/

//// For loop through an array

/*for (var i = 0; i <= 3; i += 1) {
  console.log(onTheRoad);
}*/

// var onRoad = ["Bus", "Private Car", "Uber", "Motorcycle", "People", "CNG"];

// var i = 0;
// while (i <= onRoad.length) {
//   if (onRoad[i] == "Motorcycle") {
//     break;
//   }
//   console.log(onRoad[i]);
//   i++;
// }

// for (var i = 0; i <= onRoad.length; i++) {
//   if (onRoad[i] == "People") {
//     break;
//   }
//   console.log("The transport you can use" + onRoad[i]);
// }

function divisionalGame(number1, number2) {
  var division = number1 / number2;
  console.log(division);
  return division;
}

divisionalGame(35, 7);

function multiplication(number1, number2, number3) {
  var multiply = number1 * number2 * number3;
  return multiply;
}

var result = multiplication(35, 55, 19);
console.log("the result of multiplication is " + result);

function additionGame(number1, number2, number3, number4) {
  var calculation = number1 + number2 + number3 + number4;
  return calculation;
}

var addResult = additionGame(25, 35, 203253, 2469875);
console.log("the result of addition is " + addResult);

var privateCar = {
  color: "scarlet",
  cc: 1400,
  price: 4400000,
  mileage: "34KM",
  weight: "200kg",
};

privateCar.mileage = "25KM";
console.log(privateCar.mileage);
privateCar["mileage"] = "20KM";
console.log(privateCar.mileage);

var newMileage = "mileage";
privateCar[newMileage] = "15KM";
console.log(privateCar.mileage);

var newPrice = "price";
privateCar[newPrice] = 3000000;
console.log(privateCar.price);

console.log(privateCar);




switch=0;