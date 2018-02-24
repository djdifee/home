import React from 'react';
import { Link } from "react-router-dom";
import '../../styles/main.scss';
import Main from './Main';
import logo from '../../media/difee_logo_white.png';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Link to="/home">Home</Link>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <span>wat</span>
      <Main />
    </div>
  );
};

export default App;
