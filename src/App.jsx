import React from "react";
import "./App.css"
import GithubUserList from "./GithubUserList";

export default class App extends React.Component {

 
  render() {
    return (
      
      <div>
        <div style={{display:"flex",alignItems:"center",color:"white"}}><img src="githubicon.png" alt="" style={{width:"120px"}} /><h1>GitHub Mini    Check</h1></div>
      <GithubUserList />
        </div>
    )
  }}
