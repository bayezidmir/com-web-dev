document.getElementById("add-item").addEventListener("click", function () {
  const newItem = document.createElement("li");
  newItem.innerText = "item from JS";
  document.getElementById("item-list").appendChild(newItem);
});

const items = document.getElementsByClassName("item");

document
  .getElementById("item-list")
  .addEventListener("click", function (event) {
    event.target.parentNode.removeChild(event.target);
  });
