import React from 'react';
import Controller from './Controller';
import ScoreBoard from './ScoreBoard';
import { ScoreContext } from './context';
import './App.css';


// Must be stateful as value of context is state of app
class App extends React.Component {
  constructor(props) {
    super(props);

    // Avoiding bind using arrow function
    this.increment = ()  => {
      this.setState(s => {
        return {
          ...s,
          score: s.score  + 1
        }
      });
    }

    // Avoiding bind using arrow function
    this.decrement = ()  => {
      this.setState(s => {
        return {
          ...s,
          score: s.score - 1
        }
      });
    }

    this.state = {
      score: 0,
      increment: this.increment,
      decrement: this.decrement
    }
  }

  render() {
    return(
      <ScoreContext.Provider value={this.state}>
        <ScoreBoard />
        <Controller />
      </ScoreContext.Provider>
    );
  }
}

export default App;
