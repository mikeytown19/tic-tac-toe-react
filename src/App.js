import React, { Component } from 'react';
import './App.css';
import Game from './components/Game'

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
        <h1>Tic Tac Toe</h1>
        <Game />

        </header>
      </div>
    );
  }
}

export default App;
