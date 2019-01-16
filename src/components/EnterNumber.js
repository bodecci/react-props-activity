import React, { Component } from 'react';

class EnterNumber extends Component {

    render() {
        return (
            <form>
                <button>Up</button>
                <input  type="number" placeholder="Enter Number" />
                <button>Down</button>
            </form>
        );
    }

}

export default EnterNumber;