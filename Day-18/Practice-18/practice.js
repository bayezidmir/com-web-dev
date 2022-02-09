// I am gonna rate myself based parameter set by PH
/* var employID = 589;
var name = "Bayezid Mir";
var isTrueLove = true;

let battlenutPrice = 120;
const distanceToOffice = 6;

battlenutPrice += 30; */
// battlenutPrice= battlenutPrice+30
/* console.log(battlenutPrice);

console.log(employID == battlenutPrice);
console.log(employID != battlenutPrice); */

/* function longestStringForLoop(arr) {
  let word = "";
  for (let i = 0; i < arr.length; i++) {
    if (word.length < arr[i].length) {
      word = arr[i];
    }
  }
  return word;
}
let arr = ['jahid', 'bayezid', 'sahjalal', 'helal']
console.log(function longestStringReduce(arr)) {
  return arr.reduce((a, b) => a.length < b.length ? b : a, "");
}
 */

let salaries = [25000, 35000, 27000, 24000, 29000, 40000];

for (let i = 0; i <= salaries.length; i++) {
  // console.log(salary);
  let salary = salaries[i];
  if (salary >= 30000) {
    console.log(salary);
  }
}

function skillMeter(hours, willingness, environment) {
  if (environment == true) {
    if (willingness == true && hours >= 6) {
      return `In Sha Allah, You will be reaching the pinnacle with the blessing of Almighty`;
    } else {
      return `Be curious like a kid and spend more time!`;
    }
  } else {
    return `Know Thyself! Work toward building your skill`;
  }
}

let hours = 5;
let willingness = true;
let learningEnvironment = true;

let result = skillMeter(hours, willingness, learningEnvironment);
console.log(result);
