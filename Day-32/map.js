const favNumbers = [6, 12, 14, 16, 20];
const resultOfFav = favNumbers.map((para) => para + 2);

const mulfav = favNumbers.map((para) => para * 2);
// console.log(mulfav);

const doubleIt = (param) => param * 2;

const troy = [];
for (const number of favNumbers) {
  const samsu = doubleIt(number);
  troy.push(samsu);
}

// console.log(troy);

const friends = ["bayezid", "karim", "rahim", "jambo"];

const friendsLength = friends.map((f) => f.length);
console.log(friendsLength);

const products = [
  { name: "bottle", price: 25, color: "green" },
  { name: "clock", price: 250, color: "pale" },
  { name: "pomed", price: 63, color: "yellow" },
  { name: "pen", price: 15, color: "white" },
  { name: "cap", price: 35, color: "coffee" },
];

const productsName = products.map((product) => product.name);
// console.log(productsName);
const productColor = products.map((product) => product.color);
// console.log(productColor);
const productPrice = products.map((price) => price.price);
// console.log(productPrice);

products.map((product) => console.log(product)); //when return is required
products.forEach((product) => console.log(product)); //when return is not required

/* const lettuce = [];
for (const product of products) {
  const unit = product.name;
  lettuce.push(unit);
}

console.log(lettuce); */
