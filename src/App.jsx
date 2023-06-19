import React from "react";
import "./App.css"

import {Routes, Route, Link} from "react-router-dom"
import Counter from "./counter"
import InteractiveWelcome from "./InteractiveWelcome";

export default function App() {

 
    return (
      
        <div>
          <div className="container">
            <Routes>
              <Route path="/" element={<InteractiveWelcome />}></Route>
              <Route path="/counter" element={<Counter></Counter>}></Route>
            </Routes>
          </div>
      
        <div className="container">
          <p>Links</p>
          <Link to={"/counter"}>Counter</Link>
        </div>
      </div>
    )
  }
