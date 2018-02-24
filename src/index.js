import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.scss';
import App from './scripts/components/App';
import registerServiceWorker from './registerServiceWorker.js';
import { BrowserRouter as Router } from 'react-router-dom';


ReactDOM.render(
	<Router>
		<App />
	</Router>,
	document.getElementById('root')
);
registerServiceWorker();
