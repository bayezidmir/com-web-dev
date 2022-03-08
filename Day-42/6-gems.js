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

// 4. Loop

// for loop
/* const oldEmployeeName = [
  "Bayezid Mir",
  "Nafis Shahnewaz",
  "Arif Hasan rajeeb",
  "Azim",
]; */
for (let i = 0; i < oldEmployeeName.length; i++) {
  const employee = oldEmployeeName[i];
  console.log(employee);
}

// While loop
let i = 0;
while (i < oldEmployeeName.length) {
  const employee = oldEmployeeName[i];
  console.log(employee);
  i++;
}

for (const employee of oldEmployeeName) {
  console.log(employee);
}

// Function
function addition(para1, para2) {
  return para1 + para2;
}

const result = addition(25, 35);
console.log(result);

//Object
const onePlus7T = {
  Brand: "OnePlus",
  MadeIn: "China",
  Price: 720,
  Feature: {
    Display: '6.5"',
    Storage: "128 GB",
    Camera: {
      Front: "32 pixels",
      Back: "64 Pixels",
    },
  },
};

const storage = onePlus7T.Feature.Storage;
console.log(storage);
// delete onePlus7T.MadeIn;
Object.seal(onePlus7T);
delete onePlus7T.MadeIn;
console.log(onePlus7T);

const brand = onePlus7T["Brand"];
console.log(brand);
const made = "MadeIn";
const madeIn = onePlus7T[made];
console.log(madeIn);

const keysofOnplus = Object.keys(onePlus7T);
console.log(keysofOnplus);
const valuesOfOneplus = Object.values(onePlus7T);
console.log(valuesOfOneplus);
