import React, { useState } from "react";

export default function Login(props) {
    
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [remember, setRemember] = useState(false)


    
    
    const handleInput = (event) => {

        const name = event.target.name;

        if(name === "username") {
            setUsername(event.target.value)
        }
        else if(name === "password") {
            setPassword(event.target.value)
        }
        else if(name === "remember"){
            setRemember(!remember)
        }
    }

    const handleLogin = () => {
            const { onLogin } = props;
            onLogin({ username, password, remember})
      }
    
    const handleFormReset = () => {
        setUsername("");
        setPassword("")
        setRemember(false)
    }


        return (
            <div>
                <h2><i>Login Form</i></h2> <br />
                <input
                    type="text"
                    name="username"
                    value={username}
                    onChange={handleInput}
                    placeholder="Username"
                />
                <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={handleInput}
                    placeholder="Password"
                />
                <br /> <br /> Remember?
                <input
                type="checkbox"
                name="remember"
                onChange={handleInput}
                checked={remember}
                /> <br /> <br />
                <button
                    disabled={username === "" || password === ""}
                    onClick={handleLogin}
                >Login</button>
                <button onClick={handleFormReset}>
                    Reset
                </button>
            </div>
        )
}