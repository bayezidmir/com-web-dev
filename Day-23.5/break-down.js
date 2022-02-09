const products = [
  { name: "TableClock", price: 45000, stock: 35 },
  { name: "MacBook Pro", price: 35000, stock: 3 },
  { name: "iPhone 12", price: 65000, stock: 12 },
  { name: "OnePlus 7T", price: 6000, stock: 13 },
  { name: "Dell Vostro", price: 55000, stock: 19 },
  { name: "MacBook Air", price: 69000, stock: 7 },
  { name: "iPhone 13", price: 3000, stock: 26 },
  { name: "MacBook M1", price: 96000, stock: 7 },
  { name: "Dell Silicon", price: 38000, stock: 17 },
];

for (const product of products) {
  if (product.price > 70000) {
    break;
  }
  console.log(product);
}

console.log("123" + 123);

const array = [1, 2, 3, 4, 5, 6, 7];

for (let i = 1; i < array.length; i++) {
  if (i == 5) {
    continue;
  }
  console.log(array[i]);
}

/* for (let i = 0; i < products.length; i++) {
  let product = products[i];
  if (product.price > 10000) {
    continue;
  }
  console.log(product);
} 

for (const product of products) {
  if (product.price > 10000) {
    continue;
  }
  console.log(product);
}
*/
