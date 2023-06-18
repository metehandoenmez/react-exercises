import React, { useState, useEffect } from "react";
import "./App.css";
import GithubUser from "./GithubUser.jsx";



export default function GithubUserList() {
 
    const [list, setList] = useState([])
    const [input, setInput] = useState("")

    const handleInput = (event) => {
        setInput(event.target.value)
    }
 
    const handleList = () => {
        setList((arr) => [...arr, input]);
        setInput("")
    }

    
    

    return (
        <div style={{display:"flex", flexDirection:"row"}}>
            <div className="container">
                <input
                onChange={handleInput}
                placeholder="Enter a GitHub username"
                value={input}
                />
                <button onClick={handleList}>Add User</button>
                <button onClick={() => {
                    setList([])
                }}>Clear</button>
            </div>
            <div style={{display:"flex", flexDirection:"row"}} >
                {list.map((user) => (
                    <GithubUser username={user} key={user + "key"}/>
                ))}
            </div>
        </div>
    )
                    
}
