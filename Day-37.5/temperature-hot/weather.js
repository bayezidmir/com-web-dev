/* 
API_Key : 1ca69af22ab1a4f6c1af2c6bd063203a
url : https://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid={API%20key}
*/

const tempFunction = (id, result) => {
  document.getElementById(id).innerText = result;
};

const searchButton = document.getElementById("search-button");

searchButton.addEventListener("click", () => {
  const cityName = document.getElementById("city-name").value;
  if (cityName === "") {
    alert`Please Write a City Name, please`;
    return;
  } else if (isNaN(cityName) !== true) {
    alert`Alphabets only`;
    return;
  }
  const url = `https://api.openweathermap.org/data/2.5/find?q=${cityName}&units=metric&appid=1ca69af22ab1a4f6c1af2c6bd063203a`;
  //api.openweathermap.org/data/2.5/find?q=London&units=metric
  https: fetch(url)
    .then((res) => res.json())
    .then((data) => displayTemparature(data.list[0]))
    .catch((error) => displayError(error));
});

const displayError = (error) => {
  alert`something went wrong please try later`;
  return;
};
const displayTemparature = (weatherData) => {
  // if (weatherData.keys.length)
  console.log(weatherData);
  const keys = Object.keys(weatherData);
  console.log(keys.length);
  if (keys.length > 1) {
    console.log("empty");
  }
  tempFunction("city", weatherData.name);
  tempFunction("temp", weatherData.main.temp);
  tempFunction("condition", weatherData.weather[0].main);

  // set weather icon
  const IconUrl = `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`;
  const weatherIcon = document.getElementById("icon");
  weatherIcon.setAttribute("src", IconUrl);
};
