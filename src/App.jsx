import React from "react";
import "./App.css";
import UncontrolledLogin from "./UncontrolledLogin";

function App() {

let loginFunc = (userdata) => { if(userdata.username && userdata.password) {
  console.log(`Logging in...
  Username: ${userdata.username} Password: ${userdata.password}`) }
  else if(userdata.username === "" || userdata.password === "") {
    console.log(`Cannot log in, invalid userdata!`)
  }
}

  return (
    <div>
      <UncontrolledLogin onLogin={loginFunc}/>
    </div>
  );
}

export default App;