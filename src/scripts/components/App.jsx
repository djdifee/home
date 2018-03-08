import React from 'react';
import {Switch, Route, NavLink} from "react-router-dom";
import '../../styles/main.scss';
import {
  About,
  Contact,
  Home,
  Music,
  PageNotFound,
  Shows
} from './screens';
import logo from '../../media/difee_logo_white.png';

/* The Switch element makes it possible to only
render the routes and its components and not the header and footer */

// When you don't need any functions inside of the component you should render a stateless component
const App = () => {
  return (
    <div className="app">
      <header className="app-header">
        <NavLink to="/about" className="header-button" activeClassName="selected">
          <span>About</span>
        </NavLink>
				<NavLink to="/music" className="header-button" activeClassName="selected">
					<span>Music</span>
				</NavLink>
        <NavLink to="/" exact activeClassName="selected">
          <img src={logo} className="header-logo" alt="logo" />
        </NavLink>
				<NavLink to="/shows" className="header-button" activeClassName="selected">
					<span>Shows</span>
				</NavLink>
        <NavLink to="/contact" className="header-button" activeClassName="selected">
          <span>Contact</span>
        </NavLink>
      </header>
      <div className="app-content">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/music" component={Music} />
          <Route path="/home" exact component={Home} />
          <Route path="/shows" exact component={Shows} />
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
