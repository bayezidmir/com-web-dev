// method 1: to remove child from parent element

/* const items = document.getElementsByClassName("item");
for (const item of items) {
  // console.log(item);
  item.addEventListener("click", function () {
    document.getElementById("item-container").removeChild(item);
  });
} */

// method 2: to remove child from parent element
/* const items = document.getElementsByClassName("item");
for (const item of items) {
  item.addEventListener("click", function (event) {
    event.target.parentNode.removeChild(event.target);
  });
} */

document.getElementById("add-item").addEventListener("click", function () {
  const createListing = document.createElement("li");
  createListing.innerText = "new Item";
  document.getElementById("item-container").appendChild(createListing);
});

document
  .getElementById("item-container")
  .addEventListener("click", function (event) {
    event.target.parentNode.removeChild(event.target);
  });
