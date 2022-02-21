//https://jsonplaceholder.typicode.com/posts
function userPosts() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((data) => displayUserPost(data));
}

userPosts();

function displayUserPost(posts) {
  const usersPostContainer = document.getElementById("user-post-container");
  for (const post of posts) {
    let div = document.createElement("div");
    div.innerHTML = `
    <h3>${post.title}</h3>
    <p>${post.body}</p>
    `;
    usersPostContainer.appendChild(div);
    div.classList.add("post");
  }
}
