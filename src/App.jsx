import React from "react";
import "./App.css"
import FilteredList from "./FilteredList";

export default class App extends React.Component {

  list = [
    { id: 1, name: "Jean", age: 22 },
    { id: 2, name: "Emma", age: 28 },
    { id: 3, name: "Lukas", age: 15 },
    { id: 4, name: "Ayşe", age: 26 },
    { id: 5, name: "Sophie", age: 23 },
    { id: 6, name: "Max", age: 31 },
  ];
 
  render() {
    return (
      
      <div className="container">
      <FilteredList list={this.list}/>
        </div>
    )
  }}
