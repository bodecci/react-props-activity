import React, { Component } from 'react';

class EnterNumber extends Component {
    constructor(props){
        super(props);
        this.state = {
            upNumber: 0,
            downNumber: 0,
        }
    }

    getNumber = (event) => {
        this.setState({
            inputNumber: event.target.value,
        });
    }

    addUp = (event) => {
        const up = {
            upNumber: (this.state.upNumber + 1),
        };
        this.props.addToCurrentTotal(up);
    }

    addDown = (event) => {
        const down = {
            downNumber: (this.state.downNumber -1),
        };
        this.state.addToCurrentTotal(down);
    }

    render() {
        return (
            <div>
                <button onClick={this.addUp}>Up</button>
                <input onChange={this.getNumber}  type="number" placeholder="Enter Number" />
                <button onClick={this.addDown}>Down</button>
                </div>
        );
    }

}

export default EnterNumber;