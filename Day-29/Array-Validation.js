const simpleString = "Hello elo mello computer science gello";

if (simpleString.toLowerCase().indexOf("science") != -1) {
  console.log("ami acience porbo");
}

if (Array.isArray(simpleString)) {
  console.log("what?");
} else {
  console.log(`simpleString is not a string`);
}

const prices = [1560, 2500, 5600, 8500, 6800, 45879];

function highestestValue(prices) {
  if (Array.isArray(prices) == false) {
    return "Enter an Array please";
  } else {
    let highestPrice = 0;
    for (const price of prices) {
      if (price > highestPrice) {
        highestPrice = price;
      }
    }
    return highestPrice;
  }
}

const fullName = "Bayezid Mir";
console.log(highestestValue(fullName));

const suspects = [
  "Mohin",
  "Motaleb",
  "Kuddus",
  "Shafin",
  "ShahJalal",
  "Bayezid mir",
];

function longestName(names) {
  if (Array.isArray(names)) {
    let longestName = "";
    for (let i = 0; i < names.length; i++) {
      let name = names[i];
      if (name.length > longestName.length) {
        longestName = name;
      }
    }
    return longestName;
  } else {
    return `Please provide more than one Name`;
  }
}

console.log(longestName(suspects));