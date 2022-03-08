// 1. declaring a variable
const fatherName = "Iqbal Mir";
const motherName = "latifa Akter Dolly";
const sisterName = "Daliya Akter";

let employement = "employed";
let workingCompany = "bproperty.com";
let aimInLife = "Software Engineer";
let earning = 20000;

aimInLife = "to help and repsect people";

// 2. Conditions
if (
  (employement === "employed" && earning >= 35000) ||
  (employement === "Business" && earning >= 50000)
) {
  console.log("get married");
} else if (earning <= 25000) {
  console.log("you need to switch company");
} else if (employement !== "employed") {
  console.log("search for a Job");
}

// 3. Array

const oldEmployeeName = [
  "Bayezid Mir",
  "Nafis Shahnewaz",
  "Arif Hasan rajeeb",
  "Azim",
];

oldEmployeeName.push("Naved");
console.log(oldEmployeeName);
oldEmployeeName.pop();
console.log(oldEmployeeName);
oldEmployeeName.unshift("Roy");
console.log(oldEmployeeName);
oldEmployeeName.shift();
console.log(oldEmployeeName);

const newEmplyee = ["Tuhin", "Badhon", "Abed"];

const totalEmployee = [...oldEmployeeName, ...newEmplyee];
console.log(totalEmployee);
const indexOfAbed = newEmplyee.indexOf("Abed");
console.log(indexOfAbed);
const employeeInIndex1 = newEmplyee[1];
console.log(employeeInIndex1);
