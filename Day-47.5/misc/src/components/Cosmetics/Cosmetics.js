import React from "react";
import { quotient, subs } from "../../Utilities/Calculate";
import "./Cosmetics.css";

const Cosmetics = () => {
  const people = 20;
  const faceWashQuantity = 200;
  const facewashLeft = subs(faceWashQuantity);
  const eachGets = quotient(facewashLeft, people);

  return (
    <div>
      <h1>Hello From React!</h1>
      <h3>Face Wash Stock: {facewashLeft}</h3>
      <h3>Face Wash: {eachGets} / Each</h3>
    </div>
  );
};

export default Cosmetics;
