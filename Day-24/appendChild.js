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

// styling the first 3 articles

/* const products = document.getElementsByTagName("article");
for (let product of products) {
  product.style.border = "2px dashed greenyellow";
  product.style.borderRadius = "10px";
  product.style.margin = "1rem 0";
  product.style.padding = "1rem";
} */

// Append Cild for product description starts here
// first way
/* const productTitle = document.createElement("h3");
productTitle.innerText = "product - 4";

const productDescription = document.createElement("p");
productDescription.innerText =
  "This is what I am suspectng for a long time. however, my suspicion has been taken care of with the integrety";
const newArticle = document.createElement("article");

ewArticle.appendChild(productTitle);
newArticle.appendChild(productDescription);

const productDetails = document.getElementById("product-details");
productDetails.appendChild(newArticle); */

// second way
const newArticle = document.createElement("article");

const productDetails = document.getElementById("product-details");
productDetails.appendChild(newArticle);
newArticle.innerHTML = `<h3>Product 4 (Using Carret)</h3>
<p>Dignissimos vitae velit modi ratione quo
officiis, fuga numquam, nulla dolore molestias enim dolor qui deserunt
eos quibusdam! Fugit, doloribus.</p>`;

// Append Cild for product description ends here

// styling the articles

// styling the first all articles
const products = document.getElementsByTagName("article");
for (let product of products) {
  product.style.border = "2px dashed greenyellow";
  product.style.borderRadius = "10px";
  product.style.margin = "1rem 0";
  product.style.padding = "1rem";
}
