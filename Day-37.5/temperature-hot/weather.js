/* 
API_Key : 1ca69af22ab1a4f6c1af2c6bd063203a
url : https://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid={API%20key}
*/

const searchButton = document.getElementById("search-button");

searchButton.addEventListener("click", () => {
  const cityName = document.getElementById("city-name").value;
  const url = `https://api.openweathermap.org/data/2.5/find?q=${cityName}&units=metric&appid=1ca69af22ab1a4f6c1af2c6bd063203a`;
  //api.openweathermap.org/data/2.5/find?q=London&units=metric
  https: fetch(url)
    .then((res) => res.json())
    .then((data) => console.log(data));
});
