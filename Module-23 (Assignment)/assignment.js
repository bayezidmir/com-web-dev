// Problem 1: Ana To Vori

function anaToVori(ana) {
  //Condition for error handling
  if (ana < 1) {
    return `Please Enter a Numeric Value`;
  }
  let Vori = ana / 16;
  return Vori;
}

let ana = 50;
console.log(anaToVori(ana));

// Problem 2: Panda Cost

let eachSingaraPrice = 7;
let eachSomuchaPrice = 10;
let eachJilapiPrice = 15;

function pandaCost(singara, somucha, jilapi) {
  //Condition for error handling
  if (singara < 0 || somucha < 0 || jilapi < 0) {
    return `Please Place Order properly with a Numeric Value`;
  }
  // Assigning price for each variable along with quatity
  let singaraPrice = eachSingaraPrice * singara;
  let somuchaPrice = eachSomuchaPrice * somucha;
  let jilapiPrice = eachJilapiPrice * jilapi;

  // Totalling the price of foods
  let totalCost = singaraPrice + somuchaPrice + jilapiPrice;

  return totalCost;
}

let singaraQuantity = 0;
let somuchaQuantity = 2;
let jilapiQuantity = 1;

console.log(pandaCost(singaraQuantity, somuchaQuantity, jilapiQuantity));

// Problem 3: Picnic Budget

function picnicBudget(participants) {
  //Condition for error handling
  if (participants <= 0) {
    return `Please Enter Valid Participant Number`;
  }

  if (participants <= 100) {
    return participants * 5000;
  } else if (participants > 100 && participants <= 200) {
    let costOfFirst100 = 100 * 5000;
    let remainingParticipants = participants - 100;
    let costOfRemaining = remainingParticipants * 4000;
    let totalPicnicExpense = costOfFirst100 + costOfRemaining;
    return totalPicnicExpense;
  } else {
    costOfFirst100 = 100 * 5000;
    let costOfSecond100 = 100 * 4000;
    let noOfMoreThan200 = participants - 200;
    let costOfMoreThan200 = noOfMoreThan200 * 3000;
    totalPicnicExpense = costOfFirst100 + costOfSecond100 + costOfMoreThan200;
    return totalPicnicExpense;
  }
}

let participants = 201;
console.log(picnicBudget(participants));

// Problem 4: Odd Name

function oddFriend(friends) {
  if (Array.isArray(friends) == false) {
    return `Please input an array of friends`;
  }
  //Condition for error handling
  for (let friend of friends) {
    if (friend.length % 2 != 0) {
      return friend;
    }
  }
}

let friends = ["Saikot", "Roman", "ShahJala", "Helal", "Rubel", "Alam"];

console.log(oddFriend(friends));
