import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './store'
import App from './components/App';
// import registerServiceWorker from './registerServiceWorker.js';
import {BrowserRouter as Router} from 'react-router-dom';

import '../styles/main.scss';

ReactDOM.render(
	<Provider store={store}>
		<Router>
			<App />
		</Router>
	</Provider>,
	document.getElementById('root')
);
// registerServiceWorker();
