import React, {createRef} from "react";

export default class UncontrolledLogin extends React.Component {
    
    _formRef = createRef()

    handleFormSubmit = (event) => {
        event.preventDefault();
        let username = event.target.elements.username.value;
        let password = event.target.elements.password.value;
        console.log(`Username: ${username}, Password: ${password}`)
     }

    render() {
        return(
            <div>
                <h3>Uncontrolled Form</h3>
                <form ref={this._formRef} onSubmit={this.handleFormSubmit}>
                    Username: <input name="username" type="text" placeholder="Username"/> <br />
                    Password:<input name="password" type="password" placeholder="Password"/> <br />
                    <button type="submit">Login</button>
                    <button type="reset">Reset</button>
                </form>
            </div>
        )
    }
}