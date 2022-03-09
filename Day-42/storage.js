const addItem = () => {
  const productName = document.getElementById("product-name").value;
  const value = document.getElementById("value").value;

  // localStorage.setItem(productName, value);
  document.getElementById("product-name").value = "";
  document.getElementById("value").value = "";
};

const apartment = [
  "3 Beds",
  "2 Baths",
  "3 Balconies",
  "3 labarotories",
  "kitchen",
];

const apartmentLength = apartment.length;
console.log(apartmentLength);
/* 
const stringifiedApartment = JSON.stringify(apartment);
localStorage.setItem("apartmentDetails", stringifiedApartment); */

//we can read the apartmentdetails and add some more value and then set the updated item to the localStorage
apartment.push("1700 sft");
const stringifiedApartment = JSON.stringify(apartment);
// localStorage.setItem("apartmentDetails", stringifiedApartment);

// the process to add object is same as Array

const mobile = {
  name: "onePlus",
  price: 200,
  availability: "discontinued",
  features: ["amoled display", "8GB RAM", "128 GB Storage"],
};

const stringifiedMobile = JSON.stringify(mobile);
// localStorage.setItem("Mobile", stringifiedMobile);

// oejct declaration shirtHand
let firstName = "Bayezid";
let surName = "Mir";

const fullname = { firstName, surName };
console.log(fullname);

const presentAdd = ["1/b/1", "shyamoli-1", "Dhaka"];
const permanantAdd = ["Mir Bari", "Matlab", "Chandpur"];

const address = { presentAdd, permanantAdd };
console.log(address);
