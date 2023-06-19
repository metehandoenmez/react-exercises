import React, { useState, useEffect } from "react";
import "./App.css"



const useGithubUser = (username) => {
    const [dataObj, setDataObj] = useState([]);
    const [error, setError] = useState()
    const [loading, setLoading] = useState(false)

    
    useEffect(() => {
        setLoading(true)
        fetch(`https://api.github.com/users/${username}`)
        .then(response =>
            response.json())
            .then((data) => {
                setDataObj(data);
                setLoading(false)
                .catch((error) => {
                    setError(error);
                    setLoading(false)
                })
        })
    }, [username])  

    return { dataObj, error, loading }

}

export default function GithubUser({username}) {
 
    const {dataObj, error, loading} = useGithubUser(username)

    const imgStyle = {
        borderRadius: "50%",
        padding: "10px",
        width:"180px"
    }


                if (loading) {
                    return <div className="container">Loading...</div>;
                }
                if (error) {
                    return (
                      <div className="container">
                        <h2>Error: {error.message}</h2>
                      </div>
                    );
                  }
                if(dataObj.message === "Not Found") {
                   return (<div className="container"><h2>User not found.</h2></div>) 
                }
                else {
                    return (
                        <div className="container">
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
