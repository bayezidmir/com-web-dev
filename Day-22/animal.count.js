let firstTenMiles = 10;
let secondTenMiles = 50;
let restMilesAnimal = 100;

function animalCount(miles) {
  if (miles <= 10) {
    return miles * firstTenMiles;
  } else if (miles <= 20) {
    let restMiles = miles - 10;
    let animalOnRest = restMiles * secondTenMiles;
    let animalInFirst10 = 10 * firstTenMiles;
    let totalAnimal = animalOnRest + animalInFirst10;
    return totalAnimal;
  } else {
    let restOfMiles = miles - 20;
    let animalOnRest = restOfMiles * 100;
    let animalInFirst10 = 10 * firstTenMiles;
    let animalIn10to20 = 10 * secondTenMiles;
    let totalAnimal = animalOnRest + animalInFirst10 + animalIn10to20;
    return totalAnimal;
  }
}

console.log(animalCount(12));
