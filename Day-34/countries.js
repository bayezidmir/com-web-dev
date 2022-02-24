const countries = () => {
  fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => displayCountries(data));
};
countries();

const displayCountries = (countries) => {
  // for (const country of countries) {
  //   console.log(country.name);
  // }
  const countryDiv = document.getElementById("country-details");
  countries.forEach((country) => {
    // console.log(country);
    const countryDeatils = document.createElement("div");
    countryDeatils.innerHTML = `
      <h4>Country: ${country.name.common}</h4>
      <p>Capital: ${country.capital}</p>
      <button onclick="loadCountry('${country.name.common}')">Details</button>
    `;
    countryDeatils.classList.add("style");
    countryDiv.appendChild(countryDeatils);
  });
};

const loadCountry = (cName) => {
  const url = `https://restcountries.com/v3.1/name/${cName}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => moreInfo(data));
};

const moreInfo = (info) => {
  console.log(info[0]);
  const moreInformation = document.getElementById("more-info");

  moreInformation.innerHTML = `
  <p>Area: ${info[0].area} </p>
 
  <img width="100px" src="${info[0].flags.png}">
  `;
};
