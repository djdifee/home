// Entry file, as specified in webpack
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './store'
import App from './components/App';
import {BrowserRouter as Router} from 'react-router-dom';

import '../styles/main.scss';

// Renders a react element into the DOM
ReactDOM.render(
	<Provider store={store}>
		<Router>
			<App />
		</Router>
	</Provider>,
	document.getElementById('root')
);
