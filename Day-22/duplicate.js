const ages = [35, 24, 25, 35, 75, 55, 35, 40, 45, 48, 40, 24];

function duplicateRemover(ages) {
  let unique = [];
  for (const age of ages) {
    if (unique.indexOf(age) == -1) {
      unique.push(age);
    }
  }
  return unique;
}

console.log(duplicateRemover(ages));
