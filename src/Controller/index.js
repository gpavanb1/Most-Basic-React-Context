import React from 'react';
import { ScoreContext } from '../context';

// Stateful component as it has local state
export default class Controller extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            increments: 0,
            decrements: 0
        }
    }

    increment = () => {
        // Alter global state
        this.context.increment();
        // Count local increments
        this.setState(s => {
            return {
                ...s,
                increments: s.increments + 1
            }   
        });
    }

    decrement = () => {
        // Alter global state
        this.context.decrement();
        // Count local decrements
        this.setState(s => {
            return {
                ...s,
                decrements: s.decrements + 1
            }
        });
    }

    // shows number of increments
    // and decrements based on local
    // and buttons to alter these
    // along with global state
    render() {
        return (
            <div>
                <h2>Increments: {this.state.increments}</h2>
                <h2>Decrements: {this.state.decrements}</h2>
                <button onClick={this.increment}>+</button>
                <button onClick={this.decrement}>-</button>
            </div>
        );
    }
}
Controller.contextType = ScoreContext;