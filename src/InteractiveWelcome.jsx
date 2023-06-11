import React from "react";
import Welcome from "./Welcome";

export default class InteractiveWelcome extends React.Component {
    
    state = {
        value: ""
    }
    
    handleInput = (event) => {
        this.setState({
            value: event.target.value
        });
    }

    render() {
        return (
            <div>
                <input
                    type="text"
                    value={this.state.value}
                    onChange={this.handleInput}
                    placeholder="Input your name"
                />
                <Welcome name={this.state.value} />
            </div>
        )
    }
}