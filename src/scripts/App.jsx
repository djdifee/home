import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Switch, Route, NavLink, withRouter } from 'react-router-dom';
import {
	About,
	Contact,
	Home,
	PageNotFound,
	Routes,
	Shows,
} from './screens';
import { Footer } from './components';
import logo from '../media/img/company-logo-white.png';

/* The Switch element makes it possible to only
render the routes and its components and not the header and footer */

// When you don't need any functions inside of the component you should render a stateless component (basically just a function)
const App = props => (
	<div className="app">
		<header className={`app-header ${props.selectedTheme}`}>
			<NavLink to="/about" className="header-button" activeClassName="selected">
				<span>About</span>
			</NavLink>
			<NavLink to="/routes" className="header-button" activeClassName="selected">
				<span>Routes</span>
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
				<Route path="/routes" component={Routes} />
				<Route path="/home" exact component={Home} />
				<Route path="/shows" exact component={Shows} />
				<Route path="/contact" exact component={Contact} />
				<Route component={PageNotFound} />
			</Switch>
		</div>
		<footer className={`app-footer ${props.selectedTheme}`}>
			<Footer />
		</footer>
	</div>
);

App.propTypes = {
	selectedTheme: PropTypes.string,
};

const mapStateToProps = state => ({
	selectedTheme: state.switchTheme.selectedTheme,
});

/* Because of the connect method from React Redux, the shouldComponentUpdate function causes the component not to update
 * unless the props change. As of version 4 of the router, this conflicts on how it updates on navigating.
 * Wrapping the component in the withRouter function will fix this. */
export default withRouter(connect(mapStateToProps, null, null)(App));
