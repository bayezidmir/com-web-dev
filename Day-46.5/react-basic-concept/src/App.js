import logo from "./logo.svg";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Posts></Posts>
      <District name={"comilla"} specialty={"cleverism"}></District>
      <District name={"brammonBaria"} specialty={"Fighter"}></District>
      <District name={"Noakhali"} specialty={"Bivag Chai"}></District>
    </div>
  );
}

function District({ name, specialty }) {
  const [power, setPower] = useState(1);

  const boostPower = () => setPower(power * 2);

  const styleD = {
    backgroundColor: "red",
  };

  return (
    <div style={styleD} className="district">
      <h2>Name: {name} </h2>
      <p>Speciality: {specialty} </p>
      <h3>Power: {power} </h3>
      <button onClick={boostPower}>Boost Power: </button>
    </div>
  );
}

function Posts() {
  const [posts, setPost] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setPost(data));
  }, []);

  return (
    <div>
      <h3>Total Posts: {posts.length} </h3>
      {posts.map((post) => (
        <Post title={post.title} comment={post.body}></Post>
      ))}
    </div>
  );
}

function Post(props) {
  return (
    <div
      style={{
        border: "1px dotted tomato",
        margin: "10px",
        padding: "10px",
        backgroundColor: "#dcdde1",
      }}
    >
      <h4>Title: {props.title}</h4>
      <p>Comment: {props.comment}</p>
    </div>
  );
}

export default App;
