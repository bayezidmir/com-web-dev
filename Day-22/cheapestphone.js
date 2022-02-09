const phones = [
  { name: "iPhone 9", storage: 256, camera: 24, price: 600 },
  { name: "Samsung C25", storage: 128, camera: 36, price: 450 },
  { name: "Nokia XC", storage: 128, camera: 18, price: 320 },
  { name: "Xiaomi D80", storage: 256, camera: 128, price: 380 },
  { name: "Walton Razor", storage: 128, camera: 12, price: 210 },
  { name: "Oppo flip", storage: 64, camera: 64, price: 700 },
];

let cheapestPhone = phones[0];
for (var i = 0; i < phones.length; i++) {
  var phone = phones[i];
  if (phone.price < cheapestPhone.price) {
    cheapestPhone = phone;
  }
}
console.log(cheapestPhone);

// let cheapestPhone = phones[0];

/* for (const phone of phones) {
  if (phone.price < cheapestPhone.price) {
    cheapestPhone = phone;
  }
}

console.log(cheapestPhone); */
