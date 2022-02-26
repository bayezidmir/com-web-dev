const bottle = {
  color: "green",
  storage: "2 litre",
  hold: "water",
  price: 200,
};

// to get the keys
const keysOfBottle = Object.keys(bottle);
console.log(keysOfBottle);

// to get the Values
const valueOfBottle = Object.values(bottle);
console.log(valueOfBottle);

// to get both keys and value
const pairs = Object.entries(bottle);
console.log(pairs);

// to delete object prperties
delete bottle.hold;
console.log(bottle);

// to not allow deleteing but modification the object property
Object.seal(bottle);
// neither allow deleteing nor modification the object property
Object.freeze(bottle);
