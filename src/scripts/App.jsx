import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Switch, Route, withRouter } from 'react-router-dom';
import {
	Home,
	PageNotFound,
	Resources,
	Routes,
} from './screens';
import { Footer, Header } from './components';

/* The Switch element makes it possible to only
render the routes and its components and not the header and footer */

// When you don't need any functions inside of the component you should render a stateless component (basically just a function)
const App = ({ selectedTheme }) => (
	<div className="app">
		<Header theme={selectedTheme} />
		<main className="app-content">
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/routes" component={Routes} />
				<Route path="/home" exact component={Home} />
				<Route path="/resources" exact component={Resources} />
				<Route component={PageNotFound} />
			</Switch>
		</main>
		<footer className={`app-footer ${selectedTheme}`}>
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
