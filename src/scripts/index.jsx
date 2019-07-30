// Entry file, as specified in webpack
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import store from './store';
import App from './App';

const GlobalStyle = createGlobalStyle`
	body {
		margin: 0;
		padding: 0;
		font-family: sans-serif;
  }
`;

// Renders a react element into the DOM
ReactDOM.render(
	<Provider store={store}>
		<GlobalStyle />
		<Router>
			<App />
		</Router>
	</Provider>,
	document.getElementById('root'),
);
