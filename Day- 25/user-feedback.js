document.getElementById("btn-submit").addEventListener("click", function () {
  const newFeedback = document.getElementById("comment-box");
  const feedbackText = document.createElement("p");
  feedbackText.innerText = newFeedback.value;
  const userReviews = document.getElementById("user-reviews");
  userReviews.appendChild(feedbackText);
  newFeedback.value = "";
});
