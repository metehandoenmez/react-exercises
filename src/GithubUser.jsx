import React, { useState, useEffect } from "react";
import "./App.css"


export default function GithubUser({username}) {
 
    const [dataObj, setDataObj] = useState([])
    
    useEffect(() => {
        fetch(`https://api.github.com/users/${username}`)
        .then(response =>
            response.json())
            .then(data => 
                setDataObj(data))
    }, [username])
    
    const imgStyle = {
        borderRadius: "50%",
        padding: "10px",
        width:"180px"
    }



                if(dataObj.message === "Not Found") {
                   return (<div><h2>User not found.</h2></div>) 
                }
                else {
                    return (
                        <div>
                        <img src={dataObj.avatar_url} alt="" style={imgStyle}></img>
                        <p><h4><u>Username</u></h4> {dataObj.login}</p>
                        <br />
                        <p><h4><u>Location</u></h4> {dataObj.location}</p>
                        <br />
                        <p><b>Followers</b>: {dataObj.followers}, <b>Following</b>: {dataObj.following}</p>
                        <br />
                        <p><h4><u>Public Repositories</u></h4> {dataObj.public_repos}</p>
                        <br />
                        <a href={dataObj.html_url}><button>View on GitHub</button></a>
                    </div>
                    )
                    
                }
}
