/* 1 chair- 3 cubic feet/ 10 pi
table- 10 cfeet/ 2 pi
bed 50 cfeet/  3 piece
 */

function woodCalculator(bed, table, chair) {
  const woodPerBed = 50;
  const woodPerTable = 10;
  const woodPerChair = 3;

  // Wood Calculation
  let bedWood = bed * woodPerBed;
  let tableWood = table * woodPerTable;
  let chairWood = chair * woodPerChair;
  let totalWood = bedWood + tableWood + chairWood;

  return `For ${bed} beds, ${table} tables & ${chair} chairs, you need ${bedWood} cft, ${chairWood} cft & ${tableWood} cft respectively. Total you need ${totalWood} cft `;
}

let bedQuantity = 6;
let chairQuantity = 0;
let tableQuantity = 12;

let woodRequired = woodCalculator(bedQuantity, chairQuantity, tableQuantity);
console.log(woodRequired);
