/* ১. তোমাকে যদি বলি একটা স্ট্রিং টাইপের ভেরিয়েবল লিখো। একটা বুলিয়ান টাইপের ভেরিয়েবল লিখো বা একটা নাম্বার টাইপের ভেরিয়েবল লিখো। সেটা কি তুমি লিখতে পারবে? যদি পারো তাহলে ভিজুয়াল ষ্টুডিও কোড খুলে লিখে ফেলো। */

// String
var fullName = "Bayezid Mir";

// Boolean
var isHardWorking = true;

// numeric

var monthlyIncome = 35000;

/* ২. তুমি কি জানো কখন let দিয়ে ভেরিয়েবল লিখতে হয়ে আর কখন const দিয়ে ভেরিয়েবল লিখতে হয়। যদি লিখতে পারো তাহলে লিখে ফেলো। এবং যেই যেটা দিয়ে ভেরিয়েবল লিখলে আবার সেটা চেইঞ্জ করা যায়। তাহলে যেটা দিয়ে ভেরিয়েবল ডিক্লেয়ার করলে চেইঞ্জ করা যায়। সেটার মান চেইঞ্জ করে নাও । অর্থাৎ জাস্ট দুইটা ভেরিয়েবল ডিক্লেয়ার করবে let এবং const দিয়ে। তারপর যেকোন একটার ভ্যালু চেইঞ্জ করবে। এই let এবং const মাথা গরম করে দিলে টেনশন নিয়ে না। সামনের মাইলস্টোন এর পরের মাইলস্টোন এ এইটা নিয়ে আরো ডিসকাস করা হবে।  */

let lentilPrice = 120;
const age = 32;

lentilPrice += 35;
// console.log(lentilPrice);

/* ৩. দুইটা ভেরিয়েবল এর মধ্যে যোগ, বিয়োগ, গুণ, ভাগ কিভাবে করতে হয় সেটা কি জানো। অর্থাৎ তুমি কি +, -, *, /, %এইগুলার ব্যবহার জানো। তাহলে নাম্বার টাইপের দুইটা ভেরিয়েবল লিখো তারপর তাদের যোগ করে সেটার মান আরেকটা ভেরিয়েবল এ রাখো। একইভাবে ওই দুইটা ভেরিয়েবল এর মধ্যে বিয়োগ, গুন, ভাগ এবং ভাগশেষ বের করো।  */

var earning = 14000;
var dailyExpenditure = 150;
var extraIncome = 1000;

var monthlyExpenditure = dailyExpenditure * 30; //Multiplication
let amountAtHandONSecondDay = earning - dailyExpenditure; //Substraction
let moneyEnoughFor = earning / dailyExpenditure; //Division
// console.log(`The money, ${earning},is enough for next ${moneyEnoughFor}`);
var totalIncome = earning + extraIncome; //addition

/* ৪. তুমি কি দুইটা ভেরিয়েবল এরমধ্যে তুলনা করতে পারো। কম্পারিজন করতে পারো। যে দুইটা ভেরিয়েবল এর মধ্যে প্রথমটা সেকেন্ডটা এর চাইতে ছোট, বড়, অসমান, সমান , ছোট বা সমান, বড় বা সমান। এইগুলা চেক করতে পারো। অর্থাৎ <, >, ==, !=, <=, >= চিহ্নগুলা ব্যবহার করতে পারো। তাহলে দুইটা সংখ্যা টাইপের ভেরিয়েবল ডিক্লেয়ার করে তাদেরকে এই ছয়ভাবে তুলনা করে কোড লিখে ফেলো।  */

let teaCupPrice = 120;
let pomadePrice = 70;

// let pomadeIsExpensive = pomadePrice > teaCupPrice;
// console.log(pomadeIsExpensive);

// let teaCupIsExpensive = pomadePrice < teaCupPrice;
// console.log(teaCupIsExpensive);

// let priceOfPomAndTeaIsEqual = teaCupPrice == pomadePrice;
// console.log(priceOfPomAndTeaIsEqual);

// let notEqual = pomadePrice != teaCupPrice;
// console.log(notEqual);

/* if (teaCupPrice >= pomadePrice) {
  console.log("teaCupPrice price is more than pomadePrice");
} else if (teaCupPrice <= pomadePrice) {
  console.log("pomadePrice is more than teaCupPrice ");
} */

/* ৫. তোমার যদি দুইটা শর্ত পূরণ করতে বলে। এবং দুইটা শর্তের মধ্যে দুইটাই পূরণ করতে হবে। তাহলে তুমি কি সেটা চেক করতে পারবে? একইভাবে যদি বলে তুমি দুইটা শর্তের যেকোন একটা পূরণ করতে পারবে। অর্থাৎ তুমি && এবং || এর ব্যবহার করতে পারো কিনা। যদি পারো তাহলে নিজে নিজে এই রকমের কোড লিখে ফেলো।
 */

let goodAtEnglish = false;
let goodAtMath = false;

if (goodAtEnglish == true && goodAtMath == true) {
  console.log("hire him as a Manager");
} else if (goodAtEnglish == true || goodAtMath == true) {
  console.log("hire him as assitant manager");
} else {
  console.log("hire him as an Executive");
}

/* ৬. তুমি কি একটা শর্ত পালন করলে একটা কিছু করবে। শর্ত পূরণ না করলে অন্য কিছু একটা করবে এমন কোড লিখতে পারবে। অর্থাৎ তুমি কি if-else এর কোড লিখতে পারবে। পারলে একটা কোড লিখে ফেলো  */

let budget = 20000;
const phonePrice = 35000;
const iPadPrice = 22000;

if (budget >= phonePrice) {
  console.log("You can buy a Phone");
} else if (budget >= iPadPrice) {
  console.log("you can purchase an ipad");
} else {
  console.log("Save more money to buy a gadget");
}

/* ৭. তোমাকে যদি বলে একটা while লুপ দিয়ে ৭ থেকে ১৯ পর্যন্ত যতগুলা বিজোড় সংখ্যা আছে সেগুলা দেখাতে। তুমি কি সেটা দেখাতে পারবে? পারলে সেই কোড লিখে ফেলো। না পারলে এই ভিডিও দেখো: 17_5-3 More while loops, odd numbers, even numbers */

let oddNumbers = [];
for (let i = 7; i <= 19; i++) {
  if (i % 2 != 0) {
    // console.log(i);
    oddNumbers.push(i);
  }
}

console.log(oddNumbers);

/* ৮. তোমাকে যদি বলা হয় তুমি একটা array ডিক্লেয়ার করবে। এবং সেটার মধ্যে কয়টা উপাদান আছে সেটা বের করবে হবে। সেই array এর এর মধ্যে চতুর্থ পজিশন এর উপাদান চেইঞ্জ করতে হবে। array এর মধ্যে দুইটা উপাদান যোগ করতে হবে। এবং একটা উপাদান কে বের করে দিতে হবে। তুমি কি সেটা করতে পারবে।  */

/* let productsAvailable = [
  "Shirt",
  "Pant",
  "T-Shirt",
  "Belt",
  "Sneakers",
  "Sunglasses",
];

let noOfElements = productsAvailable.length;
console.log(noOfElements);

productsAvailable[3] = "Executive- Belt";
console.log(productsAvailable);

productsAvailable.push("Wrist-Watch", "Perfume");
console.log(productsAvailable);

productsAvailable.pop();
console.log(productsAvailable); */

/* ৯. তুমি কি একটা ফর লুপ দিয়ে কোন একটা array এর সবগুলা উপাদানকে দেখাতে পারবে। সেটা রেগুলার for লুপ হোক বা for of হোক। হলে সেই স্টাইলে একটা কোড লিখে ফেলো।  */
let employeeNames = ["Bayezid", "Mithiun", "Masum", "Shafin", "Tamim"];

/* for (const name of employeeNames) {
  console.log(name);
} */

/* for (let i = 0; i <= employeeNames.length - 1; i += 1) {
  let employeeName = employeeNames[i];
  console.log(employeeName);
} */

/* ১০. তোমাকে যদি বলা হয়। একটা array এর মধ্যে ৮০ এর চাইতে বড় সংখ্যা থাকলে সেগুলাকে console log করে দেখাতে সেটা কি তুমি পারবে? তাহলে তুমি সেই কোড করে ফেলো  */

let pokerChips = [75, 65, 80, 95, 120, 65, 92, 45, 86];

for (const pokerChip of pokerChips) {
  if (pokerChip >= 80) {
    console.log(pokerChip);
  }
}

/* ১১. তিনটা সংখ্যার গুনফল বের করে ফাইনাল রেজাল্ট আউটপুট হিসেবে রিটার্ন করতে হবে। তুমি কি সেই কোড লিখতে পারবে। যদি পারো তাহলে সেই কোড লিখে ফেলো।  */

function multiplication(num1, num2, num3) {
  let result = num1 * num2 * num3;
  return result;
}

let firstNumber = 15;
let secondNumber = 25;
let thirdNumber = 22;

console.log(multiplication(firstNumber, secondNumber, thirdNumber));

/* ১২. একটা অবজেক্ট ডিক্লেয়ার করবে। সেটাতে তিনটা প্রপার্টি থাকবে। এবং কোন একটা প্রোপার্টি এর মান চেইঞ্জ করবা।  */

let OnePlus7T = {
  brandName: "OnePlus",
  price: 48000,
  storage: 128,
  /* RAM: "8 GB",
  availability: false, */
};
console.log(OnePlus7T);

// changing the value of a property
OnePlus7T.price = 35000;

console.log(OnePlus7T);
