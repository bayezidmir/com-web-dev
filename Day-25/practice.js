/* function revealInfo() {
  const experimentalText = document.getElementById("experiemental-text");
  experimentalText.innerText = "Surprise! There nothing confidential here 😂";
  experimentalText.classList.add("experiemental-text");
}

document.getElementById("to-lime").addEventListener("click", function () {
  document.body.style.backgroundColor = "lime";
  document.body.style.color = "white";
});

document.getElementById("to-green").addEventListener("click", function () {
  document.body.style.backgroundColor = "DarkSeaGreen";
});

document.getElementById("to-grey").addEventListener("mouseenter", function () {
  document.body.style.backgroundColor = "DarkSlateGrey";
}); */

// comment section
/* document.getElementById("submit").addEventListener("click", function () {
  const commentBox = document.getElementById("new-comment");
  let newComment = document.createElement("p");
  newComment.innerText = commentBox.value;
  console.log(newComment);

  // querying the comment area
  const commentArea = document.getElementById("comment-area");
  // declaring apendchild
  commentArea.appendChild(newComment);
  commentBox.value = "";
}); */

// deleting information using button
/* const deleteBtn = document.getElementById("delete-btn");
deleteBtn.addEventListener("click", function () {
  document.getElementById("important-text").style.display = "none";
});
document
  .getElementById("delete-code")
  .addEventListener("keyup", function (event) {
    if (event.target.value == "delete") {
      deleteBtn.removeAttribute("disabled");
    }
  }); */

// Add using button and delete onclick of Item instantly

/* const requiredItems = document.getElementsByClassName("item");

document.getElementById("btn-add-item").addEventListener("click", function () {
  const addItem = document.createElement("li");
  addItem.innerText = "Item - from JS";
  document.getElementById("item-list").appendChild(addItem);
});

for (const item of requiredItems) {
  document
    .getElementById("item-list")
    .addEventListener("click", function (event) {
      event.target.parentNode.removeChild(event.target);
    });
} */

// adding new item
document.getElementById("btn-add-item").addEventListener("click", function () {
  const newItem = document.createElement("li");
  newItem.innerText = "item from JS";
  document.getElementById("item-list").appendChild(newItem);
});

// removing item
let items = document.getElementsByClassName("item");
for (let i = 0; i < items.length; i++) {
  const item = items[i];
  document
    .getElementById("item-list")
    .addEventListener("click", function (event) {
      event.target.parentNode.removeChild(event.target);
    });
}

/* for (let i = 0; i < requiredItems; i++) {
  const item = requiredItems[i];
  console.log(item);
}

let i = 0;
while (i < requiredItems) {
  let item = requiredItems[i];
  i++;
  console.log(item);
} */
