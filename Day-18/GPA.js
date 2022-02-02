var score = 90;

if (score >= 90) {
  console.log("Grade A+");
} else if (score >= 80 && score < 90) {
  console.log("Grade A");
} else if (score >= 70 && score < 80) {
  console.log("Grade B");
} else if (score >= 60 && score < 70) {
  console.log("Grade C");
} else if (score >= 50 && score < 60) {
  console.log("Grade D");
} else {
  console.log("Grade F");
}

var signal = "red";

if (signal == "green") {
  console.log("You can cross the road");
} else if (signal == "yellow") {
  console.log("You Should wait for signal to be yellow");
} else if (signal == "red") {
  console.log("it is red. you will be fined if you try moving");
} else {
  console.log("Keep driving, chill");
}
