const distances = [25, 35, 45, 49, 48, 37, 12, 25];

// longest distance
function longestDistance(distances) {
  let longestDistance = 0;
  for (let i = 0; i <= distances.length; i++) {
    let distance = distances[i];
    if (distance > longestDistance) {
      longestDistance = distance;
    }
  }
  return `The long distance of all ${longestDistance}`;
}

console.log(longestDistance(distances));

// Closest distance
function nearestLocation() {
  let nearestLocation = distances[0];
  for (i = 0; i <= distances.length; i++) {
    let Distance = distances[i];
    if (nearestLocation > Distance) {
      nearestLocation = Distance;
    }
  }
  return `Location in the closest proximity is ${nearestLocation}`;
}

console.log(nearestLocation(distances));
