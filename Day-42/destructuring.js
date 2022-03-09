const laptopBrands = ["Apple", "Dell", "Lenovo", "Mi", "Huawei", "HP"];
const [best, secondBest] = laptopBrands;
console.log(best, secondBest);
const [firstName, Surname] = ["Bayezid", "Mir"];
console.log(firstName, Surname);

const ideaPadL340 = {
  brand: "Lenovo",
  manufactured: 2020,
  price: 40000,
  warrenty: "2 years",
  specification: {
    camera: true,
    fingerPrint: false,
    keyboardBaclit: false,
    SSD: "256 GB",
    HDD: "1 TB",
    RAM: "8 GB",
    cache: "6 MB",
    display: {
      quality: "moderate",
      size: "15.6'",
      displayBazel: true,
    },
  },
  canDo: ["programming", "graphics dessign", "Gaming"],
};

const { RAM, HDD } = ideaPadL340.specification;
console.log(RAM);
const [firtsCando, SecondCando, ThirdCando] = [ideaPadL340.canDo];
console.log(firtsCando, SecondCando, ThirdCando);
