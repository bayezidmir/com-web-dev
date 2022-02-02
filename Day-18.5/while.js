var yearlyTour = 0;

while (yearlyTour < 4) {
  console.log("lets go for a trip");
  yearlyTour += 1;
  // console.log(yearlyTour);
}

var meals = 0;

while (meals <= 2) {
  console.log("Eat Properly and Say Alhamdulillah");
  meals++;
}

var weekDays = 0;

while (weekDays <= 4) {
  console.log("Go to office");
  weekDays++;
}

var evenNumber = 2;

while (evenNumber <= 20) {
  console.log(evenNumber);
  evenNumber += 2;
}

var oddNumber = 1;

while (oddNumber <= 20) {
  console.log(oddNumber);
  oddNumber += 2;
}

var name = "false";
console.log(typeof name);

var stuffOnTheTable = [
  "cigar",
  "pomet",
  "paper",
  "pen",
  "clock",
  "headphone",
  "bottle",
];

for (i = 0; i <= stuffOnTheTable.length; i++) {
  // console.log(stuffOnTheTable[i]);
  var stuff = stuffOnTheTable[i];
  console.log(stuff);
}

/*যদি তোমার বাজেট  ৫০০০ এর বেশি হয় তাহলে তুমি ফ্যামিলি কে নিয়ে ট্যুর দিবে । অন্যথায় ৫০০০ এর কম হয় তাহলে ট্যুর না দিয়ে ঘুম দিবে।  যদি তুমি ট্যুর দিতে পারো তার মানে তোমার কাছে ৫০০০ এর বেশি টাকা আছে।  এখন ধরো হোটেল ভাড়া ৪০০০। তাহলে তুমি হিসেবে করো তাহলে হাতে আর কত টাকা এক্সট্রা আছে।  যদি ২০০০এর বেশি টাকা হাতে থাকে তাহলে তুমি বারবিকিউ পার্টি করবে , না হলে ট্যুরে গিয়ে অল্প শপিং করবে।*/

let tripBudget = 5500;
let accomodation = 4000;
var remainingAmount = tripBudget - accomodation;

if (tripBudget > 5000) {
  if (remainingAmount > 2000) {
    console.log(
      "I will be going to a trip with family and arrange for a Bar-B-Que party"
    );
  } else {
    console.log("I will be going to a trip with family and will be shopping");
  }
} else {
  console.log("I will be sleeping instead of going for a trip");
}
