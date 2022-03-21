const addToDatabase = (id) => {
  let shoppingCart = {};

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

const removeItem = (id) => {
  const storedCart = localStorage.getItem("shopping-Cart");
  if (storedCart) {
    const shoppingCart = JSON.parse(storedCart);
    if (id in shoppingCart) {
      delete shoppingCart[id];
      localStorage.setItem("shopping-Cart", JSON.stringify(shoppingCart));
    }
  }
};

export { addToDatabase, removeItem };
