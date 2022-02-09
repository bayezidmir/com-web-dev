// <!-- vid - 2 -->
function makeSalmon() {
  document.body.style.backgroundColor = "#e74c3c";
}

function makeAsh() {
  document.body.style.backgroundColor = "#95a5a6";
}

// second way to add style to a button

const limeButton = document.getElementById("makeLime");
limeButton.onclick = makeLime;

function makeLime() {
  document.body.style.backgroundColor = "#4cd137";
}

//third way to add style to a button
const greenYellow = document.getElementById("green-yellow");
greenYellow.addEventListener("click", greenywllow);

function greenywllow() {
  document.body.style.backgroundColor = "#7FFF00";
}

//Fourth way to add style to a button

const Chocolate = document.getElementById("Chocolate");
Chocolate.addEventListener("click", function () {
  document.body.style.backgroundColor = "Chocolate";
});

//Fifth way to add style to a button - Mostly Used

document
  .getElementById("DarkOliveGreen")
  .addEventListener("click", function () {
    document.body.style.background = "DarkOliveGreen";
  });

// text changing on click of a button
function textChanger() {
  const text = document.getElementById("text-changer");
  text.innerText = "hello elo melo koro ki karo ";
}
