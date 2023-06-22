import React from "react";
import "./App.css"

import {Routes, Route, Link} from "react-router-dom"
import Counter from "./counter"
import InteractiveWelcome from "./InteractiveWelcome";
import ShowGithubUser from "./ShowGithubUser"

export default function App() {

 
    return (
      
        <div style={{display:"flex"}}>
          <div className="container">
            <Routes>
              <Route path="/" element={<InteractiveWelcome />}></Route>
              <Route path="/counter" element={<Counter></Counter>}></Route>
              <Route path="/users/:username" element={<ShowGithubUser></ShowGithubUser>}></Route>
            </Routes>
          </div>
      
        <div className="container"> 
          <p>Links</p>
          <Link to={"/"}>Homepage</Link>
          <Link to={"/counter"}>Counter</Link>
          <Link to={"/users/metehandoenmez"}>My Github Profile</Link>
          <Link to={"/users/github"}>Github's Github Profile</Link>
        </div>
      </div>
    )
  }
