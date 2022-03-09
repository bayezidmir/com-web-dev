const macBook = {
  brand: "Apple",
  variation: ["Macbook Pro", "MackBook Air", "MackBook", "iMac"],
  designed: "California, USA",
  madeIn: "China",
  speciality: {
    madeOf: "Metal",
    storage: "SSD",
    users: "Upper- Class",
    lifeSpan: "5 years",
  },
};

// Stringify and Parse
console.log(macBook);
const macBookJSON = JSON.stringify(macBook);
console.log(macBookJSON);
const macbookParsed = JSON.parse(macBookJSON);
console.log(macbookParsed);

/* // Fetch
fetch()
  .then((response) => response.json())
  .then((data) => console.log(data));

// fetching data using async and await
const response = await fetch();
const data = await response.json(); */

// keys
const keysOfMacbook = Object.keys(macBook);
console.log(keysOfMacbook);

const valuesofMacBook = Object.values(macBook);
console.log(valuesofMacBook);

const products = [
  {
    name: "Wrist-Watch",
    price: 220,
    availability: true,
    brand: "Casio",
    condition: "fresh",
  },
  {
    name: "Mobile",
    price: 470,
    availability: true,
    brand: "Nokia",
    condition: "damaged",
  },
  {
    name: "Power Bank",
    price: 32,
    availability: false,
    brand: "Mi",
    condition: "moderate",
  },
  {
    name: "calculator",
    price: 300,
    availability: false,
    brand: "Casio",
    condition: "fresh",
  },
];

const newProduct = {
  name: "dell",
  type: "Laptop",
  price: 650,
  availability: true,
};

const allProducts = [...products, newProduct];
console.log(allProducts);

const sortedProducts = allProducts.filter((product) => product.price <= 300);
console.log(sortedProducts);
