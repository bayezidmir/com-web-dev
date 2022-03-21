const addToDB = (id) => {
  // for single item with multiple quantity
  /*  const quantity = localStorage.getItem(id);
  const updatedQuantity = parseInt(quantity) + 1;
  if (quantity) {
    localStorage.setItem(id, updatedQuantity);
  } else {
    localStorage.setItem(id, 1);
  }
 */
  // for object shopping cart
  let shoppingCart = {};
  // let shoppingCart;

  // get the shopping cart
  const storedCart = localStorage.getItem("shopping-Cart");

  if (storedCart) {
    shoppingCart = JSON.parse(storedCart);
  } else {
    shoppingCart = {};
  }

  const quantity = shoppingCart[id];
  const newQuantity = quantity + 1;
  if (quantity) {
    shoppingCart[id] = newQuantity;
  } else {
    shoppingCart[id] = 1;
  }

  localStorage.setItem("shopping-Cart", JSON.stringify(shoppingCart));
};

export { addToDB };
