// Declaring an Array

var dreamCompanies = [
  "Bay",
  "South Breeze",
  "Unilever",
  "Berger",
  "JTI",
  "MGH",
];

//adding data in the beginnning of array

dreamCompanies.unshift("MyCompany");
console.log(dreamCompanies);

//adding data in the end of array

dreamCompanies.push("Google");
console.log(dreamCompanies);

// Removing data from the beginning
dreamCompanies.shift();
console.log(dreamCompanies);

// Removing data from the end
dreamCompanies.pop();
console.log(dreamCompanies);

// Find index number of an array
var indexOfUnilever = dreamCompanies.indexOf("Unilever");
console.log(indexOfUnilever);

// Find element using index number
var elementOfIndex2 = dreamCompanies[2];
console.log(elementOfIndex2);

// replacing element using index number
dreamCompanies[2] = "Google";
console.log(dreamCompanies);

// Index number -1 and ...

console.log(dreamCompanies[120]);
var indexOfBproperty = dreamCompanies.indexOf("Bproperty");
console.log(indexOfBproperty);
