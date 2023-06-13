import React from "react";
import DisplayLanguage from "./DisplayLanguage";
import {LanguageContext} from "./LanguageContext";
import "./App.css"

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
        <LanguageContext.Provider value={this.state.language}>
        <DisplayLanguage/>
        
        <select className="selector" value={this.state.language} onChange={this.handleLanguageChange}>
          <option value="en">English</option>
          <option value="it">Italian</option>
          <option value="de">German</option>
        </select>
        </LanguageContext.Provider>
        </div>
    )
  }}
