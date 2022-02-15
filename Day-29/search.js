const products = [
  "Dell hardcore i29 200GB laptop",
  "iphone 1TB camera flashlight Phone",
  "yellow laptop with black camera",
  "Dell 1X59 Lenovo commercial yoga laptop",
  "LG supernova laptop Dell",
  "HTC low price Phone camera",
  "Dell purple color phone with Laptop",
];

const seachProduct = "laptop";
const seachProduct2 = "Dell";
const productCamera = "Camera";
let productFound = [];

for (const product of products) {
  if (product.toLowerCase().endsWith(productCamera.toLowerCase())) {
    productFound.push(product);
  }
}

console.log(productFound);

/* for (const product of products) {
  if (product.toLowerCase().startsWith(seachProduct2.toLowerCase())) {
    productFound.push(product);
  }
}
console.log(productFound); */

/* for (const product of products) {
  if (product.toLowerCase().includes(seachProduct.toLowerCase())) {
    productFound.push(product);
  }
}

console.log(productFound); */

/* for (const product of products) {
  if (product.toLowerCase().indexOf(seachProduct) != -1) {
    productFound.push(product);
  }
}

console.log(productFound); */