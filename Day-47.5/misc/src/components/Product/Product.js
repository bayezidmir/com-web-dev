import React from "react";
import { addToDatabase, removeItem } from "../../Utilities/database";

import "./Product.css";

const Product = (props) => {
  const { prodName, price, id } = props.data;
  const addToCart = (id) => {
    // addToDB(id);
    addToDatabase(id);
  };

  const removeFromCart = (id) => {
    removeItem(id);
  };

  return (
    <div className="product">
      <p>
        <strong>Product Name:</strong> <small>{prodName}</small>
      </p>
      <p>
        <strong>Product Price: </strong>
        <small>{price}</small>
      </p>
      <button onClick={() => addToCart(id)}>Add to Cart</button>
      <button onClick={() => removeFromCart(id)}>Remove from Cart</button>
    </div>
  );
};

export default Product;
