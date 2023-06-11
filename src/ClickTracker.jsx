import React from "react";

export default class ClickTracker extends React.Component {
    
    state = {
        lastPressed: ""
    }
    
    handleButtonClick = (event) => {
        const buttonName = event.target.name;
        this.setState({
            lastPressed: buttonName
        });
    }

    render() {
        return (
            <div>
                <button name="button1" onClick={this.handleButtonClick}>Button 1</button>
                <button name="button2" onClick={this.handleButtonClick}>Button 2</button>
                <button name="button3" onClick={this.handleButtonClick}>Button 3</button>
                {this.state.lastPressed && (<h1>You have pressed the {this.state.lastPressed}.</h1>) }
                
            </div>
        )
    }
}