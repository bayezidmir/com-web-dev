// Declaring a Variable

//numeric variable
var bottleSize = 5;
var watchPrice = 1500;
var laptopSize = 15;
var distance = 6;
var mealPrice = 60;

console.log(typeof bottleSize);

//String variable
var babyName = "Sultan";
var headPhoneBran = "Remax";
var name = "Bayezid Mir";
var gender = "Male";
var result = "Passed";

// boolean variable
var isCharming = true;
var honesty = true;
var qualified = true;
var ifluential = false;
var fraud = false;

/*JavaScript Arithmatic Operators
Operator	Description
+	Addition
-	Subtraction
*	Multiplication
**	Exponentiation (ES2016)
/	Division
%	Modulus (Remainder)
++	Increment
--	Decrement*/

var noOfRipeBanana = 35;
var noOfGreenBanana = 63;
var bananaPrice = 11;
var noOfBuyers = 9;
var bananaSold = 17;

// Addition
var totalBanana = noOfRipeBanana + noOfGreenBanana;

// Subtraction
var unsoldBanana = totalBanana - bananaSold;
console.log("You have '" + unsoldBanana + "' Bananas left to be sold");

// Multiplication
var totalPriceOfUnsoldBanana = unsoldBanana * bananaPrice;
console.log(
  "You can earn '" +
    totalPriceOfUnsoldBanana +
    "' by selling the Bananas in stock"
);

// Modulus (Remainder)

var remainigBananas = unsoldBanana / noOfBuyers;
console.log("You will have '" + remainigBananas + "' Bananas left");

// Exponentiation
var canEarn = 11 ** 9;
console.log(canEarn);

// ++	Increment
noOfRipeBanana++;

// --	Decrement
noOfGreenBanana--;

// Convesrion

var firstName = "Bayezid";
var surName = "Mir";

var fullName = firstName + " " + surName; // " " <-- is an empty string
var name = firstName.concat(" " + surName);
console.log(name);
console.log(fullName);

var englishMarks = "93";
var applePrice = "225";
var ricePrice = "65";
var houseRent = "8500";
var transportationCost = "70";
console.log(typeof houseRent);
//converting using parseInt(used for an integer) the marks above received as string from a user

englishMarks = parseInt(englishMarks);
applePrice = parseInt(applePrice);
ricePrice = parseInt(ricePrice);
houseRent = parseInt(houseRent);
transportationCost = parseInt(transportationCost);
console.log(englishMarks, applePrice, ricePrice, houseRent, transportationCost);
console.log(typeof houseRent);

// use of parseFloat - we use parseFloat for fractional number
var pencilPrice = "25.23";
var waterPrice = "12.33";
var time = "9.49";

pencilPrice = parseFloat(pencilPrice);
waterPrice = parseFloat(waterPrice);
time = parseFloat(time);
console.log(pencilPrice, waterPrice, time);

console.log(fullName + " is a " + typeof fullName);
