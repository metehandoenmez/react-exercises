import React from "react";
import "./App.css";
import Counter from "./counter.jsx";

function App() {
  return (
    <div>
      <Counter
      count={0}
      incrementInterval={1000}
      incrementAmount={1}
      ></Counter>
    </div>
  );
}

export default App;
