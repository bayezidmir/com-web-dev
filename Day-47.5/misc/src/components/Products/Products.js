import React from "react";

const products = [
  { id: 1, prodName: "Wrist Watch", price: 640 },
  { id: 2, prodName: "Bottle", price: 45 },
  { id: 3, prodName: "Perfume", price: 400 },
  { id: 4, prodName: "Mobile", price: 800 },
  { id: 5, prodName: "Laptop", price: 999 },
];

const Products = () => {
  return <div>{products.map((product) => console.log(product))}</div>;
};

export default Products;
