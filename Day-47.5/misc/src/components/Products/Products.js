import React, { useEffect, useState } from "react";
import Product from "../Product/Product";

// const products = [
//   {
//     id: "62375f7a127d423296d6f6f2",
//     price: "$459.25",
//     prodName: "Hodges Wilson",
//   },
//   {
//     id: "62375f7aa639f1e2295a843b",
//     price: "$332.52",
//     prodName: "Christy Mcneil",
//   },
//   {
//     id: "62375f7afd9a7d7386e034d5",
//     price: "$914.66",
//     prodName: "Short Wagner",
//   },
//   {
//     id: "62375f7aebdd467989f0dace",
//     price: "$573.70",
//     prodName: "Malinda Little",
//   },
//   {
//     id: "62375f7a506a3fe610caeba5",
//     price: "$964.46",
//     prodName: "Curry Benson",
//   },
//   {
//     id: "62375f7a12527b83dd0eb320",
//     price: "$463.54",
//     prodName: "Holloway Murphy",
//   },
// ];

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // fetch("https://product.free.beeceptor.com/") - created on my own
    fetch("data.json")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div>
      {products.map((product) => (
        <Product data={product} key={product.id}></Product>
      ))}
    </div>
  );
};

export default Products;
