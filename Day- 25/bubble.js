// propegation starts here
// propegation immediate stop starts here
document.getElementById("chicken").addEventListener("click", function (event) {
  console.log("chicken is bought");
  event.stopImmediatePropagation();
});
// propegation immediate stop ends here

document.getElementById("chicken").addEventListener("click", function (event) {
  console.log("chicken2 is bought");
  event.stopPropagation();
});

document.getElementById("chicken").addEventListener("click", function (event) {
  console.log("chicken3 is bought");
  event.stopPropagation();
});

document.getElementById("chicken").addEventListener("click", function (event) {
  console.log("chicken4 is bought");
  event.stopPropagation();
});
// propegation Stops here
document.getElementById("shopping-list").addEventListener("click", function () {
  console.log("Shopping list is clicked");
});

document.querySelector("#shopping-cart").addEventListener("click", function () {
  console.log("event bubble is being expenmented");
});
