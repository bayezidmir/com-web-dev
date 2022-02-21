/* fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => response.json())
  .then((json) => console.log(json));
 */

function fetchingData() {
  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => response.json())
    .then((data) => console.log(data));
}

function userPost() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((data) => console.log(data));
}

// Fetching data from Server and showing to UI
function userData() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((data) => showingDataToUI(data));
}

function showingDataToUI(data) {
  const users = document.getElementById("users-container");
  for (const user of data) {
    const li = document.createElement("li");
    li.innerText = `Name: ${user.name} , Email: ${user.email}`;
    users.appendChild(li);
  }
}
