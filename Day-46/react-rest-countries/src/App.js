import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Countries from "./components/Countries/Countries";

function App() {
  return (
    <div className="App">
      <Countries></Countries>
    </div>
  );
}

export default App;
