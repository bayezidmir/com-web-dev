import logo from "./logo.svg";
import "./App.css";

const fruits = [
  { name: "apple", count: 40 },
  { name: "orange", count: 30 },
  { name: "grapes", count: 54 },
  { name: "kiwi", count: 60 },
  { name: "mango", count: 110 },
];

function App() {
  return (
    <div>
      {fruits.map((fruit) => (
        <Availability
          fruitName={fruit.name}
          fruitQuantity={fruit.count}
        ></Availability>
      ))}
    </div>
  );
}

function Availability(props) {
  console.log(props);
  return (
    <div>
      <h1>
        They have {props.fruitQuantity} {props.name} in stock
      </h1>
    </div>
  );
}

export default App;
