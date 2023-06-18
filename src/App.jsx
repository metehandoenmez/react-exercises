import React from "react";
import "./App.css"
import Login from "./Login";

export default class App extends React.Component {

  loginFunc = (userdata) => {
    console.log("Logging in...");
    console.log("Username:" + userdata.username)
    console.log("Password:" + userdata.password)
    if(userdata.remember) {
      console.log("User data will be remembered.")
    }
    else if(!userdata.remember) {
      console.log("User data will not be remembered.")
    }
  };


  
  render() {
    return (
      
      <div className="container">
      <Login onLogin={this.loginFunc}/>
        </div>
    )
  }}
