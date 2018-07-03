/* eslint-disable */
import React from 'react';
import { mount } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from '../../components/Header';
import Store from '../../store'

describe('<Header />', () => {
	const wrapper = mount(<Router><Header store={Store}/></Router>);
	it('renders without crashing', () => {
		expect(wrapper).toBeDefined();
	});
});
