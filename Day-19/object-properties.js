var tableClock = {
  color: "royalBlue",
  movement: "Automatic",
  alarm: true,
  price: 4500,
  warrenty: false,
  madeOf: "steel",
};

// 1st way to change object's property value
tableClock.color = "oxfordBlue";
console.log(tableClock);

// 2nd way to change object's property value
tableClock["price"] = 2500;
console.log(tableClock);

// 3rd way to change object's property value.

var warrentyPeriod = "warrenty";

tableClock[warrentyPeriod] = "12 Months";
console.log(tableClock);

// Second example
var builtWith = "madeOf";

tableClock[builtWith] = "Plastic and Steel";
console.log(tableClock);
