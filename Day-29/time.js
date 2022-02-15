function dateFormat(dateObjecct) {
  let parts = {
    date: dateObjecct.getDate(),
    month: dateObjecct.getMonth(),
    year: dateObjecct.getFullYear(),
  };
  return `${parts.date}/${parts.month}/${parts.year}`;
}

let myDate = new Date();
let myFavDate = formatDate(myDate);

console.log(myFavDate);
