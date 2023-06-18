import React from "react";
import "./App.css"
import ClickCounter from "./ClickCounter";

export default class App extends React.Component {

  counterChange = (data) => {
    if(data.count%2===0) {
      console.log(`The count is EVEN now, ${data.count}.`)
    }
    else if(data.count%2===1) {
      console.log(`The count is ODD now, ${data.count}.`)
    }
  }
  render() {
    return (
      
      <div className="container">
      <ClickCounter onCounterChange={this.counterChange} />
        </div>
    )
  }}
