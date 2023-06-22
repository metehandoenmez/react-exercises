import React from "react";
import "./App.css"

import { Routes, Route, Link } from "react-router-dom";
import Counter from "./counter";
import InteractiveWelcome from "./InteractiveWelcome";
import ShowGithubUser from "./ShowGithubUser";
import GithubUserList from "./GithubUserList"; // Import the GithubUserList component

export default function App() {
  return (
    <div style={{ display: "flex" }}>
      <div className="container">
        <Routes>
          <Route path="/" element={<InteractiveWelcome />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="users" element={<GithubUserList />}>
            <Route path=":username" element={<ShowGithubUser/>}></Route>
          </Route>
          <Route path="/*" element={<div><h1>404</h1><h2>Not Found</h2></div>} />
        </Routes>
      </div>
      <div className="container">
        <p>Links</p>
        <Link to={"/"}>Homepage</Link>
        <Link to={"/counter"}>Counter</Link>
        <Link to={"/users"}>GitHub Users</Link>
      </div>
    </div>
  );
}
