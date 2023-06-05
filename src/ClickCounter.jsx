import React from "react";


export default class ClickCounter extends React.Component {
    state = {
        count: 0,
    }
    

    render() {
        return (
            <div>
                <h3>{this.state.count}</h3>
                <button onClick={
                    () => this.setState((state) => {
                        return {
                            count: state.count + 1
                    };
                })
                }>Click to increase the number</button>
            </div>
        );
    }
}
