const productList = [
  { name: "TableClock", price: 4500, stock: 35 },
  { name: "MacBook Pro", price: 95000, stock: 3 },
  { name: "iPhone 12", price: 65000, stock: 12 },
  { name: "OnePlus 7T", price: 45000, stock: 13 },
  { name: "Dell Vostro", price: 55000, stock: 19 },
  { name: "MacBook Air", price: 69000, stock: 7 },
  { name: "iPhone 13", price: 110000, stock: 26 },
  { name: "MacBook M1", price: 96000, stock: 7 },
  { name: "Dell Silicon", price: 38000, stock: 17 },
];

function searchProduct(Products, keyWord) {
  let result = [];
  for (let i = 0; i < productList.length; i++) {
    let product = productList[i];
    if (product.name.includes(keyWord)) {
      result.push(product);
    }
  }
  return result;
}

var searchProduct = searchProduct(productList, "Dell");
console.log(searchProduct);
