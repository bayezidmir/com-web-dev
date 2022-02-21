/* fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => response.json())
  .then((json) => console.log(json));
 */

function fetchingData() {
  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => response.json())
    .then((data) => console.log(data));
}

//https://jsonplaceholder.typicode.com/users
//https://jsonplaceholder.typicode.com/posts
