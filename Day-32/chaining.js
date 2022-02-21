//declare variable based on the name of a object property
const myObject = { x: 2, y: 50, z: 600, a: 25, b: 65 };
const { x, b } = myObject;
console.log(x, b);

//destructuring Array
const [p, q] = [45, 37];
console.log(p, q);

const [best, faltu] = [56, 48];
console.log(best, faltu);
const [bestFriend, worstFriend] = ["samsu", "kaku"];
console.log(bestFriend, worstFriend);

// Nested Object
const bestofFriend = {
  friendOne: {
    name: "ShahJalal",
    Education: "BUBT",
    maritalStatus: "Marriend",
  },
  friendTwo: {
    name: "Rubel",
    children: "son",
    education: {
      honor: "titumir",
      masters: {
        ins: "Dhaka College",
      },
    },
  },
};

// Optional chaning using ?
const { children } = bestofFriend?.friendTwo;
console.log(children);

console.log(bestofFriend.friendTwo?.educations?.masters.ins);
