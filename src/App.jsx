import React from "react";
import "./App.css";
import Welcome from "./welcome.jsx";

function App() {
  return (
    <div>
      <Welcome
      name={<strong>Metehan</strong>} 
      age="24"
      ></Welcome>
    </div>
  );
}

export default App;
