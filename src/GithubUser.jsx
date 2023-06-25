import React, { useState } from "react";
import useSWR from "swr";
import "./App.css";

const fetcher = (url) => fetch(url).then((response) => response.json());

const useGithubUser = (username) => {
  const shouldFetch = !(username === null);

  const { data: dataObj, error, mutate } = useSWR(
    shouldFetch ? `https://api.github.com/users/${username}` : null,
    fetcher
  );

  const loading = shouldFetch && !dataObj && !error;

  const refetchData = () => {
        mutate();   
  }
  return { dataObj, error, loading, refetchData };
};

export default function GithubUser({ username }) {
  const { dataObj, error, loading, refetchData } = useGithubUser(username);

  const imgStyle = {
    borderRadius: "50%",
    padding: "10px",
    width: "180px",
  };

  if (username === null) {
    return <div className="container">Provide a username</div>;
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

  if (dataObj && dataObj.message === "Not Found") {
    return (
      <div className="container">
        <h2>User not found.</h2>
      </div>
    );
  }

  return (
    <div className="container">
      <img src={dataObj.avatar_url} alt="" style={imgStyle} />
      <p>
        <h4>
          <u>Username</u>
        </h4>{" "}
        {dataObj.login}
      </p>
      <br />
      <p>
        <h4>
          <u>Location</u>
        </h4>{" "}
        {dataObj.location}
      </p>
      <br />
      <p>
        <b>Followers</b>: {dataObj.followers}, <b>Following</b>:{" "}
        {dataObj.following}
      </p>
      <br />
      <p>
        <h4>
          <u>Public Repositories</u>
        </h4>{" "}
        {dataObj.public_repos}
      </p>
      <br />
      <a href={dataObj.html_url}>
        <button>View on GitHub</button>
      </a>
      <button onClick={refetchData}>Refetch Data</button>
    </div>
  );
}
