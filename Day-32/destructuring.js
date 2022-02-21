const fish = {
  name: "king-hilsha",
  id: 58,
  price: 9000,
  phone: "01742286919",
  address: "chandpur",
  color: "silver",
};

console.log(fish.phone);

// taking object value and declaring that as variable value

/* const fishPhone = fish.phone;
const fishPrice = fish.price;
const fishId = fish.id; */

// shortcut of variables declaration with object value
const { phone, price, address, id } = fish;
console.log(phone, price);
console.log(id, address);

// s=Object within object
const familyTree = {
  grandfatherFather: {
    name: "Saiyod Ali Mir",
    father: "Mir",
    son: {
      firstSon: "Sobhan Mir",
      secondSon: "Khalek Mir",
    },
  },
};

// destructuring with object value

const { name, father } = familyTree.grandfatherFather;
const { firstSon, secondSon } = familyTree.grandfatherFather.son;
console.log(name, father);
console.log(firstSon, secondSon);
