/* document.getElementById("delete-btn").addEventListener("click", function () {
  document.getElementById("secret-info").style.display = "none";
}); */

/* document.getElementById("delete-btn").addEventListener("click", function () {
  document.getElementById("secret-info").style.display = "none";
}); */

// focus

document
  .getElementById("delete-confirm")
  .addEventListener("focus", function () {
    document.body.style.backgroundColor = "red";
  });

// blur

document.getElementById("delete-confirm").addEventListener("blur", function () {
  document.body.style.backgroundColor = "white";
});

// keydown

/* document
  .getElementById("delete-confirm")
  .addEventListener("keydown", function () {
    const keydownValue = document.getElementById("delete-confirm");
    console.log(keydownValue.value);
  }); */

// keypress

/* document
  .getElementById("delete-confirm")
  .addEventListener("keypress", function () {
    const keydownValue = document.getElementById("delete-confirm");
    console.log(keydownValue.value);
  }); */

// keyup (mostly Used)

/* document
  .getElementById("delete-confirm")
  .addEventListener("keyup", function () {
    const keydownValue = document.getElementById("delete-confirm");
    console.log(keydownValue.value);
  }); */

// change

/* document
  .getElementById("delete-confirm")
  .addEventListener("change", function () {
    const keydownValue = document.getElementById("delete-confirm");
    console.log(keydownValue.value);
  }); */

// final
document.getElementById("delete-btn").addEventListener("click", function () {
  document.getElementById("secret-info").style.display = "none";
});
document
  .getElementById("delete-confirm")
  .addEventListener("keyup", function (event) {
    const deleteBtn = document.getElementById("delete-btn");
    if (event.target.value == "delete") {
      deleteBtn.removeAttribute("disabled");
    } else {
      deleteBtn.setAttribute("disabled", true);
    }
  });
