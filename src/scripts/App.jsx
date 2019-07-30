import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Switch, Route, withRouter } from 'react-router-dom';
import {
	Home,
	PageNotFound,
	Resources,
	Routes,
} from '@screens';
import { Footer, Header } from '@components';

/* The Switch element makes it possible to only
render the routes and its components and not the header and footer */

// When you don't need any functions inside of the component you should render a stateless component (basically just a function)
const App = ({ selectedTheme }) => (
	<Wrapper>
		<Header theme={selectedTheme} />
		<AppContent>
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/routes" component={Routes} />
				<Route path="/home" exact component={Home} />
				<Route path="/resources" exact component={Resources} />
				<Route component={PageNotFound} />
			</Switch>
		</AppContent>
		<Footer />
	</Wrapper>
);

App.propTypes = {
	selectedTheme: PropTypes.string,
};

const mapStateToProps = state => ({
	selectedTheme: state.switchTheme.selectedTheme,
});

const Wrapper = styled.div`
	display: grid;
  flex-direction: column;
  font-family: sans-serif;
  grid-row-gap: 1.5em;
  grid-template-rows: 100px auto 3em;
  height: 100vh;
  text-align: center;
`;

const AppContent = styled.main`
	display: flex;
	height: 100%;
  justify-content: center;
  overflow-y: auto;
`;

/* Because of the connect method from React Redux, the shouldComponentUpdate function causes the component not to update
 * unless the props change. As of version 4 of the router, this conflicts on how it updates on navigating.
 * Wrapping the component in the withRouter function will fix this. */
export default withRouter(connect(mapStateToProps, null, null)(App));
