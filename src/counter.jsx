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
                    count: state.count + this.props.incrementAmount,
                };
            });
        }, this.props.incrementInterval);
    }

    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
            </div>
        );
    }
}

    