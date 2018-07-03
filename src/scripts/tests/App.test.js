/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { shallow } from 'enzyme';
import App from '../App';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../store';


describe('<App />', () => {
	it('renders 1 instance', () => {
		const wrapper = shallow(<App />);
		
	});
	it('renders without crashing', () => {
		const div = document.createElement('div');
		ReactDOM.render(
			<Provider store={store}>
				<Router>
					<App />
				</Router>
			</Provider>,
			div
		);
	});
});
