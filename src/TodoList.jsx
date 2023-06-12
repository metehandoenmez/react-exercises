import React from "react";

export default class TodoList extends React.Component {

    state = {
        items: [],
        input: ""
    }

    handleItemPush = () => {
        this.setState({
            items: [...this.state.items, this.state.input],
            input: ""
        })
    }

    handleInput = (event) => {
        this.setState({
            input: event.target.value
        })
    }

    handleReset = () => {
        this.setState({
            items: []
        })
    }

    handleRemove = (index) => {
        const sliced = [...this.state.items];
        sliced.splice(index, 1);
                                    /*Reminder: splice(start, deleteCount)*/
        this.setState({
            items: sliced,
        })
    }
    
    render() {
        
        return (
            <div>
                <input type="text"
                value={this.state.input}
                onChange={this.handleInput}
                placeholder="Enter a Todo to remember" />
                <button onClick={this.handleItemPush}>Add</button> <br />
                <button onClick={this.handleReset}>Reset</button>
                <ul>
                    {this.state.items.map((item,index) => (
                    <li key={item + index}>{item}<button onClick={() => this.handleRemove(index)}
                    >Remove</button></li>
                    
                ))}
                </ul>
            </div>
        )
    }
}