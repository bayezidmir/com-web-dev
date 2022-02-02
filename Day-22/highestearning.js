const friends = [
  {
    name: "Bayezid",
    age: 32,
    height: 5.5,
    earn: 35000,
    prof: "Sales",
  },
  {
    name: "Sahjalal",
    age: 34,
    height: 5.5,
    earn: 32000,
    prof: "engineer",
  },
  { name: "Rubel", age: 31, height: 5.9, earn: 36000, prof: "banker" },
  {
    name: "Jahid",
    age: 32,
    height: 5.7,
    earn: 150000,
    prof: "store manager",
  },
];

let highest = friends[0];
for (const friend of friends) {
  if (highest.earn < friend.earn) {
    highest = friend;
  }
}
console.log(highest);
