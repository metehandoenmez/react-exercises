import React from "react";

export default class TodoList extends React.Component {

    state = {
        items: [],
        input: ""
    }

    handleItemPush = () => {
        this.setState({
            items: [...this.state.items, this.state.input],
        })
    }

    handleInput = (event) => {
        this.setState({
            input: event.target.value
        })
    }
    
    render() {
        
        return (
            <div>
                <input type="text"
                value={this.state.input}
                onChange={this.handleInput}
                placeholder="Enter a Todo to remember" />
                <button onClick={this.handleItemPush}>Add</button>
                <ul>
                    {this.state.items.map((item,index) => (
                    <li key={item + index}>{item}</li>
                ))}
                </ul>
            </div>
        )
    }
}