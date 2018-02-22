import React, { Component } from 'react';
import './styles/App.scss';
import logo from './media/difee_logo_white.png';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <p>
          Insert a router here
        </p>
      </div>
    );
  }
}

export default App;
