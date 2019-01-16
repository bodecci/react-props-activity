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
        <h1>React Props Activity</h1>
        </header>
      </div>
    );
  }
}

export default App;
