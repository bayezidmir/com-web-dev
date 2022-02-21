const aliaStore = {
  shopType: "grocery",
  location: "BD",
  products: ["fish", "chicken", "fruits", "mineral water", "drinks"],
  isHalalShop: true,
  price: "reasoable",
};

// stringifying an object

const stringifiedAliaStore = JSON.stringify(aliaStore);
console.log(stringifiedAliaStore);
// Converting stringified data into object
const stringfiedtoObject = JSON.parse(stringifiedAliaStore);
console.log(stringfiedtoObject);
