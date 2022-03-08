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

// Map

const brandName = products.map((product) => product.brand);
const priceList = products.map((product) => product.price);
const nameList = products.map((product) => product.name);
const availability = products.map((product) => product.availability);
// console.log(brandName, nameList, priceList, availability);

// for each
// products.forEach((product) => console.log(product.name));
// products.forEach((product) => console.log(product.price));
// products.forEach((product) => console.log(product.availability));
// products.forEach((product) => console.log(product.brand));
// products.forEach((product) => console.log(product.condition));

// filter
const productOfCasio = products.filter((product) =>
  product.brand.includes("Casio")
);

const productsInFreshCondition = products.filter((product) =>
  product.condition.includes("fresh")
);
// console.log(productsInFreshCondition);

const expensiveProducts = products.filter((product) => product.price > 100);
// console.log(expensiveProducts);

const discontinuedProducts = products.filter((product) =>
  product.availability.valueOf(true)
);

// console.log(discontinuedProducts);

// find

const casioProduct = products.find((product) =>
  product.brand.includes("Casio")
);

console.log(casioProduct);
