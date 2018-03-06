import React from 'react';
import { Switch, Route, NavLink } from "react-router-dom";
import '../../styles/main.scss';
import About from './screens/About';
import Home from './screens/Home';
import Contact from './screens/Contact'
import PageNotFound from './screens/PageNotFound';
import logo from '../../media/difee_logo_white.png';

const App = () => {
  return (
    <div className="app">
      <header className="app-header">
        <NavLink to="/about" activeClassName="selected">
          <span>About</span>
        </NavLink>
        <NavLink to="/" exact activeClassName="selected">
          <img src={logo} className="app-logo" alt="logo" />
        </NavLink>
        <NavLink to="/contact" activeClassName="selected">
          <span>Contact</span>
        </NavLink>
      </header>
      <div className="app-content">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/home" exact component={Home} />
          <Route path="/contact" exact component={Contact} />
          <Route component={PageNotFound} />
        </Switch>
      </div>
      <footer className="app-footer">
        <span>Footer</span>
        <span>Footer</span>
        <span>Footer</span>
      </footer>
    </div>
  );
};

export default App;
