import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Countries from "./components/Countries/Countries";
import Birds from "./components/Birds/Birds";
import Tree from "./components/Tree/Tree";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <LoadCountries></LoadCountries>
      <Countries></Countries>
    </div>
  );
}

function LoadCountries() {
  const [countries, setCountries] = useState([]);

  useState(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => setCountries(data));
  }, []);

  return (
    <div>
      <p>Countries Count: {countries.length} </p>
      {countries.map((country) => (
        <DisplayCountries
          name={country.name.common}
          population={country.population}
        ></DisplayCountries>
      ))}
    </div>
  );
}

function DisplayCountries(props) {
  return (
    <div>
      <h3>Country: {props.name}</h3>
      <p>Population: {props.population}</p>
    </div>
  );
}

export default App;
