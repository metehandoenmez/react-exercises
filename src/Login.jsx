import React, { Component } from "react";

export default class Login extends Component {
    
    state = {
        username: "",
        password: "",
    }
    
    
    handleInput = (event) => {

        const name = event.target.name;
        this.setState({
            [name]: event.target.value,
        });
        console.log(this.state)
    }

    handleLogin = () => {
            const { onLogin } = this.props;
            const { username, password } = this.state;
            onLogin({ username, password });
      }
    
    handleFormReset = () => {
        this.setState({
            username: "",
            password: ""
        })
    }


    render() {
        return (
            <div>
                <input
                    type="text"
                    name="username"
                    value={this.state.username}
                    onChange={this.handleInput}
                    placeholder="Username"
                />
                <input
                    type="password"
                    name="password"
                    value={this.state.password}
                    onChange={this.handleInput}
                    placeholder="Password"
                />
                <button
                    disabled={this.state.username === "" || this.state.password === ""}
                    onClick={this.handleLogin}
                >Login</button>
                <button onClick={this.handleFormReset}>
                    Reset
                </button>
            </div>
        )
    }
}