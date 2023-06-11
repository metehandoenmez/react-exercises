import React from "react";
import "./App.css";
import Login from "./Login";

function App() {

  const loginFunc = (userdata) => {
    console.log("Logging in...");
    console.log("Username:" + userdata.username)
    console.log("Password:" + userdata.password)
  };

  return (
    <div>
      <Login onLogin={loginFunc}/>
    </div>
  );
}

export default App;