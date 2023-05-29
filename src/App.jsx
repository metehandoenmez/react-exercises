import React from "react";
import "./App.css";
import Welcome from "./welcome.jsx";

function App() {
  return (
    <div>
      <Welcome name=""></Welcome>
    </div>
    /*When no name property is entered, the div is rendered as "Welcome," and a space. I have expected an "undefined" text after the "Welcome,"*/
  );
}

export default App;
