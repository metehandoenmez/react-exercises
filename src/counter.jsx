import React from "react";
import CounterDisplay from "./CounterDisplay"


export default class Counter extends React.Component {
    state = {
        count: this.props.count,
    }
    componentDidMount() {
        let id = setInterval(() => {
            this.setState((state) => {
                return {
                    count: state.count + this.props.incrementAmount,
                };
            });
        }, this.props.incrementInterval);
      }
    
    componentWillUnmount() {
      clearInterval(this.id);
    }

    render() {
        return (
            <div>
                <CounterDisplay count={this.state.count} />
            </div>
        );
    }
}
