// && is used to mention two condition
// || is used to show one of any

var myBudget = 11000;
var tentativeExpenditure = 11000;

var annualLeave = false;
var officePolitics = false;
var jobSecurity = false;

/*console.log(myBudget > totalExpense);
console.log(myBudget < totalExpense);
console.log(myBudget == totalExpense);
console.log(myBudget != totalExpense);
console.log(myBudget >= totalExpense);
console.log(myBudget <= totalExpense);*/

// Simple condition
/*if (myBudget >= tentativeExpenditure) {
  console.log("Yeh! I will visiting Cox's Bazaar");
} else {
  console.log("Need to earn more to go to coxs bazaar");
}*/

// Moderately complicated condition
/*if (myBudget >= tentativeExpenditure && annualLeave == true) {
  console.log("You can plan for a trip");
} else {
  console.log("wait for few more days");
}*/

// Complicated Condition
/*if (
  (myBudget >= tentativeExpenditure && jobSecurity == true) ||
  officePolitics == false
) {
  console.log("it is the best time to go outing for a trip");
} else {
  console.log("let the situation improve");
}*/

// Multiple condition

var savings = 7800;
var autralianTution = 10000;
var usaTution = 9000;
var canadianTution = 8000;
var ukTution = 7900;
var bdTution = 2000;
var favourableSituation = false;

if (savings >= autralianTution) {
  console.log("You can plan for Australia");
} else if (savings >= usaTution) {
  console.log("You can plan for USA");
} else if (savings >= canadianTution) {
  console.log("Do not think, go for Canada");
} else if (savings >= ukTution) {
  console.log("UK is not bad at all. cherrs");
} else {
  console.log("Earn more to plan for higer study abroad");
}

// nested condition

if (autralianTution <= savings) {
  if (favourableSituation == true) {
    console.log("You can go to canada for MSC");
  }
} else if (bdTution <= savings) {
  if (favourableSituation == false) {
    console.log("Its your country so chill and study here");
  }
} else {
  console.log("Work hard, earn and then plan for study");
}
