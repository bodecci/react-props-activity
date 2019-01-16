import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import History from './components/History';
import CurrentTotal from './components/CurrentTotal';
import EnterNumber from './components/EnterNumber';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <Header />
        </header>
        <p>Enter a number and click up or down. The total will increase or decrease 
            by that amount.
        </p>
        <EnterNumber />
      </div>
    );
  }
}

export default App;
