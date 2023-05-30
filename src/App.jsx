import React from "react";
import "./App.css";
import Welcome from "./welcome.jsx";

function App() {
  return (
    <div>
      <Welcome
      name="Metehan"
      age="24"
      ></Welcome>
      <br />
      <Welcome
      name=""
      age="17"
      ></Welcome>
    </div>
  );
}

export default App;
