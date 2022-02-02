/*১. একটা ফাংশন লিখবা যেটা ১৩ এর নামতা (multiplication table) আউটপুট হিসেবে দেখাবে। */

// function sum(num) {
//   var temp = [];
//   for (var i = 1; i <= 10; i++) {
//     var multiplication = num * i;
//     temp.push(multiplication);
//   }
//   return temp;
// }
// var outcome = sum(13);
// console.log(outcome);

function multiplicationTable(number) {
  for (let i = 1; i <= 10; i++) {
    console.log(i * number);
  }
}

var numberforMul = 19;
let result = multiplicationTable(numberforMul);
console.log(result);
/*২. একটা ফাংশন লিখবা যেটা যেকোন নামকে uppercase বা রেগুলার কেইস হিসেবে নিবে আর আউটপুট হিসেবে সেই নাম lowercase করে রিটার্ন করবে।*/

// function lowercase (name) {
//   var lower=
// }

/*৩. fullName নামে একটা ফাংশন তৈরী কর যেটা তোমার নামের প্রথম অংশ এবং তোমার নামের শেষের অংশ প্যারামিটার হিসেবে নিবে। আর তোমার নামের দুই অংশ জোড়া দিয়ে আউটপুট হিসেবে তোমার পূর্ন নাম রিটার্ন করে দিবে। যেমন ধরো, hablu এবং kanto ইনপুট প্যারামিটার হিসেবে দিলে আউটপুট হিসেবে hablu kanto রিটার্ন করবে। */

/*৪. একটা ফাংশন লিখবা যেটাকে তুমি কোন সংখ্যাকে ইনপুট হিসেবে দিলে সে সেই সংখ্যার square করে সেই square কে রিটার্ন করবে।

অর্থাৎ তুমি ইনপুট হিসেবে 5 দিলে সেটাতে স্কয়ারে হিসেবে 25 আউটপুট হিসেবে পাবে।  */

/*৫) pizza নামের একটা object কে নিচের উদাহরণ মতো define করবা :



const pizza = {

 toppings: ['cheese', 'sauce', 'pepperoni'],

 crust: 'deep dish',

 serves: 2

}

এবং pepperoni প্রিন্ট করবা।*/
