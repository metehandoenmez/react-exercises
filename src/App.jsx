import React from "react";
import "./App.css"
import ClickCounter from "./ClickCounter";

export default class App extends React.Component {
  state= {
    language: "en"
  }
  
  handleLanguageChange = (event) => {
    this.setState({
      language: event.target.value
    })
  }
  
  render() {
    return (
      
      <div className="container">
      <ClickCounter />
        </div>
    )
  }}
