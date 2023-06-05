import React from "react";
import "./App.css";
import ClickCounter from "./ClickCounter";

function App() {
  return (
    <div>
      <ClickCounter
      count={0}
      incrementInterval={1000}
      incrementAmount={1}
      ></ClickCounter>
    </div>
  );
}

export default App;
