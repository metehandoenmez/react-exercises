import React, { useState } from "react";
import "./App.css";
import { Link, Route, Routes, Outlet } from "react-router-dom";
import ShowGithubUser from "./ShowGithubUser";

export default function GithubUserList() {
  const [list, setList] = useState([]);
  const [input, setInput] = useState("");

  const handleInput = (event) => {
    setInput(event.target.value);
  };

  const handleList = () => {
    setList((arr) => [...arr, input]);
    setInput("");
  };

  return (
    
    <div style={{ display: "flex", flexDirection: "row" }}>

      <div className="container">
        <input
          onChange={handleInput}
          placeholder="Enter a GitHub username"
          value={input}
        />
        <button onClick={handleList}>Add User</button>
        <button
          onClick={() => {
            setList([]);
          }}
        >
          Clear
        </button>
      </div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        {list.map((user) => (
          <div style={{padding:"10px"}}>
              <div>
                  <Link
                    key={user + Math.floor(Math.random() * 15)}
                    to={`/users/${user}`}
                    style={{ marginRight: "10px" }}
                  >
                    {user}
                  </Link>
              </div>
          </div>
        ))}
        <br />
        <Outlet></Outlet>
      </div>
    </div>
  );
}
