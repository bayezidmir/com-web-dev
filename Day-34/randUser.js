const randomUser = () => {
  fetch("https://randomuser.me/api")
    .then((res) => res.json())
    .then((data) => displayUser(data));
};
randomUser();

const displayUser = (users) => {
  const randomName = document.getElementById("full-name");
  const userInfo = users.results[0];
  console.log(userInfo);
  randomName.innerHTML = `
      <p>Name: ${userInfo.name.first}${userInfo.name.last}</p>
      <p>Gender: ${userInfo.gender}</p>
      <p>Emial: ${userInfo.email}</p>
      <p>Country: ${userInfo.location.country}</p>
      <p>Phone: ${userInfo.phone}</p>
      <img src="${userInfo.picture.medium}">
      
   `;
};
