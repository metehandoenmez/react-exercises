import React from "react";

export default class Counter extends React.Component {
    state = {
        count: this.props.count,
    }

    constructor(props) {
        super(props);

        let id = setInterval(() => {
            this.setState((state) => {
                return {
                    count: state.count + 1,
                };
            });
        }, 1000);
    }

    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
            </div>
        );
    }
}

    