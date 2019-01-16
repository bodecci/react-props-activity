import React, { Component } from 'react';

class EnterNumber extends Component {
    constructor(props){
        super(props);
        this.state = {
            inNumber: 0,
        }
    }

    getNumber = (event) => {
        this.setState({
            inNumber: event.target.value,
        });
    }

    addUp = (event) => {
        const up = {
            upNumber: this.state.inNumber,
        };
        console.log('up was clicked', this.state.inNumber);
        
        console.log(up);
        
        this.props.addToCurrentTotal(up);
    }

    addDown = (event) => {
        const down = {
            downNumber: this.state.inNumber,
        };
        this.props.addToCurrentTotal(down);
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