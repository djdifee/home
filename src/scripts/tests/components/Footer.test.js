/* eslint-disable */
import React from 'react';
import { mount } from 'enzyme';
import Footer from '../../components/Footer';
import Store from '../../store'

// API: http://jestjs.io/docs/en/api

describe('<Footer />', () => {
	const wrapper = mount(<Footer store={Store}/>);
	it('renders without crashing', () => {
		expect(wrapper).toBeDefined();
	});
	it('initiates with winter theme', () => {
		expect(Store.getState().switchTheme.selectedTheme).toBe('winter');
	});
	it('can change theme', () => {
		const summerButton = wrapper.find('#theme-summer');
		summerButton.simulate('click');
		expect(Store.getState().switchTheme.selectedTheme).toBe('summer');
	});
});
