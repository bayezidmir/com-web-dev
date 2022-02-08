// vid- 4 (mostly used evenet changing way)
function chngtxt() {
  const changeTxt = document.getElementById("text-area");
  changeTxt.innerText =
    "anonymous function- function that has no name and used instantly";
}

document.getElementById("change-color").addEventListener("click", function () {
  document.getElementById("color").style.color = "red";
  document.getElementById("color").style.fontSize = "2rem";
});

// getting the field value and update

document.getElementById("btn-submit").addEventListener("click", function () {
  const nameField = document.getElementById("name-input");
  document.getElementById("name-field").innerText = nameField.value;
  nameField.value = "";
});
