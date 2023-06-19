import React from "react";
import "./App.css"
import CardDetails from "./CardDetails";

export default class App extends React.Component {

 
  render() {
    return (
      
      <div>
      <CardDetails initialData={{model:"Tesla Model S",year:"2023",color:"Red"}} />
        </div>
    )
  }}
