import React from "react";
import "./Country.css";

const Country = (props) => {
  const { name, flags, population, region, currencies } = props.allData;

  // const currency = Object.values(currencies)[0].name;
  // console.log(currency);

  return (
    <div className="country bg-secondary">
      <h3>Country: {name.common}</h3>
      <img src={flags.png} alt="" />
      <p>Population: {population}</p>
      <p>
        Currency:{" "}
        {Object?.values(currencies)[0]?.name
          ? Object.values(currencies)[0].name
          : "no data found"}
      </p>
      <p>Region: {region}</p>
    </div>
  );
};

export default Country;
