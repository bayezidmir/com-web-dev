// append Child for product list starts here
// Querying the section title and adding style
const sectionTitle = document.getElementById("title");
sectionTitle.innerText = " Available Products";
sectionTitle.style.color = "greenyellow";

//creating an element
const newProduct = document.createElement("li");
newProduct.innerText = "Product - 6";

// Querying the parent tag of products
const productList = document.getElementById("product-list");

// adding the new product to the product list
productList.appendChild(newProduct);

// append Child for product list ends here

// Append Cild for product description starts here

const productTitle = document.createElement("h3");
productTitle.innerText = "product - 4";

const productDescription = document.createElement("p");
productDescription.innerText =
  "This is what I am suspectng for a long time. however, my suspicion has been taken care of with the integrety";
const newArticle = document.createElement("article");
newArticle.appendChild(productTitle);
newArticle.appendChild(productDescription);

const productDetails = document.getElementById("product-details");
productDetails.appendChild(newArticle);
// Append Cild for product description ends here
