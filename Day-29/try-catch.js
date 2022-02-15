const scoresIELTS = [7.5, 8, 8.5, 9];
try {
  scoresIELTS = 8;
} catch (error) {
  console.log(error);
}

for (const score of scoresIELTS) {
  console.log(score);
}
