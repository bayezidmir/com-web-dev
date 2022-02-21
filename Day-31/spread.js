const numbers = [25, 35, 25, 45, 85, 96];
/* console.log(numbers); // extracted the array
console.log(...numbers); // extracted the numbers only */

const max = Math.max(23, 99, 65);
// console.log(max);
const maxInArray = Math.max(...numbers);
// console.log(maxInArray);

const newNumbers = [102, 105, 354, 456];
numbers.push(...newNumbers);
// console.log(numbers);

const newerNumbers = [25, ...newNumbers, 66]; //element before and after spread operator can be used
// console.log(newerNumbers);

const friends = ["bayezid", "shahjalal", "sajib", "helal"];
const newFriend = ["sifat", "robin", ...friends, "raisul", "karim"];

const friendLength = friends.length;
// console.log(friendLength);

let longestFriendsName = [];
for (const friend of friends) {
  if (longestFriendsName.length < friend.length) {
    longestFriendsName = friend;
  }
}

friends.push(...newFriend);
// console.log(friends);
newFriend[0] = "kabir";
console.log(newFriend);

console.log(typeof longestFriendsName, longestFriendsName);

const singleDigit = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const mixedNumber = [...singleDigit, 10, 11, 12, 13, 14, 15, 16, 1, 7, 18, 19];
console.log(mixedNumber);
singleDigit.push(...mixedNumber);
console.log(singleDigit);
