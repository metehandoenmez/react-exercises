import React, {createRef} from "react";

export default class UncontrolledLogin extends React.Component {
    
    _formRef = createRef()
    usernameRef = createRef()
    passwordRef = createRef()


    handleFormSubmit = (event) => {
        event.preventDefault();
        let username = event.target.elements.username.value;
        let password = event.target.elements.password.value;
        console.log(`Username: ${username}, Password: ${password}`)
     }

     handleLogin = () => {
        const username = this.usernameRef.current.value;
        const password = this.passwordRef.current.value;
        this.props.onLogin({ username, password });
      };

    render() {
        return(
            <div>
                <h3>Uncontrolled Form</h3>
                <form ref={this._formRef} onSubmit={this.handleFormSubmit}>
                    Username: <input ref={this.usernameRef} name="username" type="text" placeholder="Username"/> <br />
                    Password:<input ref={this.passwordRef} name="password" type="password" placeholder="Password"/> <br />
                    <button onClick={this.handleLogin} type="Submit">Login</button>
                    <button type="reset">Reset</button>
                </form>
            </div>
        )
    }
}