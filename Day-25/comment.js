// Step- 1: adding event button handler
document
  .getElementById("sumbit-comment")
  .addEventListener("click", function () {
    // step-2: get user comment
    const commentBox = document.getElementById("new-comment");
    // const userComment = commentBox.value;

    // // step-3: create comment paragraph
    const newComment = document.createElement("p");
    newComment.innerText = commentBox.value;

    // // step- 4: append the comment
    const commentContainer = document.getElementById("comment-container");
    commentContainer.appendChild(newComment);

    // keeping the textbox clean
    commentBox.value = "";
  });
