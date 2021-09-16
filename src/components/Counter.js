import React from 'react';

const temp = 1000

class Counter extends React.Component {
    state = {
        count: 0,
        valdi: 100
    }
    handleAdd = () => {
        this.setState({ count: this.state.count + 1 });
    }
    handleChange = () => {
        this.setState({ valdi: 1000 });
    }
    render() {
        return <div>

            <h1> {this.state.count}</h1>
            <br />
            <button onClick={this.handleAdd}>add</button>
            {/* Wenn wir nur etwas kurzes machen wollen, können wir den setState auch direkt auf den onClick legen */}
            <button onClick={() => this.setState({ count: this.state.count - 1 })}>remove</button>
            <button onClick={() => this.setState({ count: temp })}>1000</button>

            <h2>{this.state.valdi}</h2>
            <button onClick={this.handleChange}>change</button>
        </div>;
    }
}

export default Counter;