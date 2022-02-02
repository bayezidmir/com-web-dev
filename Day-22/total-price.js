const onTheTable = [
  { name: "table", quantitiy: 1, price: 7000 },
  { name: "phone", quantitiy: 2, price: 35000 },
  { name: "laptop", quantitiy: 1, price: 65000 },
  { name: "bottle", quantitiy: 3, price: 60 },
  { name: "tab", quantitiy: 2, price: 22000 },
];

let totalPrice = 0;

// considering one item for each
/* for (const each of onTheTable) {
  totalPrice = totalPrice + each.price;
}
console.log(totalPrice);
 */
// considering multiple given item for each
for (const each of onTheTable) {
  totalPrice = totalPrice + each.quantitiy * each.price;
}
console.log(totalPrice);
